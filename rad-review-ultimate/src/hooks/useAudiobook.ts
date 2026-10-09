import { useCallback, useEffect, useRef, useState } from 'react'
import type { Encounter } from '../data/generateCases'
import type { Station } from '../data/stations'
import type { LiveMatch } from '../data/liveMatch'

/** Same segmented Web Speech queue Board Studio uses for lessons. */
export function caseScript(
  enc: Encounter,
  station: Station,
  figure?: LiveMatch | null,
): string[] {
  const sex = enc.sex === 'M' ? 'male' : 'female'
  const cat = enc.categoryId.replace(/_/g, ' ')
  const parts = [
    `RAD REVIEW Ultimate. Accession ${enc.accession}. ${cat} study.`,
    `${enc.age} year old ${sex}. Finding: ${enc.finding}.`,
    `Station ${station.name}, slice ${String(enc.slice).padStart(3, '0')}. Anatomy: ${station.anatomy}.`,
    `Interpretation: ${station.interpretation}.`,
    `Teaching point: ${station.teaching}.`,
  ]
  if (enc.suv) parts.push(`Reported SUV ${enc.suv}.`)
  if (figure?.caption || figure?.title) {
    parts.push(
      `Published figure, not this patient's scan. ${figure.title || ''}. ${figure.caption || ''} ${figure.journal || ''} ${figure.year || ''}.`.replace(/\s+/g, ' ').trim(),
    )
  } else {
    parts.push('No published figure is locked for this case yet.')
  }
  parts.push(`ACGME ${enc.acgme}. Status ${enc.status}. ${enc.priority}.`)
  return parts.map((s) => s.replace(/\s+/g, ' ').trim()).filter((s) => s.length > 2)
}

/** Full read of the picture actually on the head-to-toe frame. */
export function figureScript(
  enc: Encounter,
  station: Station,
  figure: LiveMatch | null | undefined,
  index = 0,
  total = 0,
  extra?: { verdict?: string; agent?: string | null; reasons?: string[] },
): string[] {
  const parts: string[] = []
  parts.push(
    `Head to toe viewer. Image ${index + 1} of ${Math.max(total, 1)}. Accession ${enc.accession}.`,
  )
  parts.push(`The case finding is: ${enc.finding}.`)
  parts.push(
    `Station ${station.name}, slice ${String(enc.slice).padStart(3, '0')}, ${station.plane} plane.`,
  )
  parts.push(`Anatomy at this level: ${station.anatomy}.`)
  parts.push(`How to read it: ${station.interpretation}.`)
  if (figure) {
    parts.push(
      'The picture on screen is a published teaching figure, not this accession’s DICOM pixels.',
    )
    if (figure.title) parts.push(`Figure title: ${figure.title}.`)
    if (figure.caption) parts.push(`Caption, read in full: ${figure.caption}.`)
    const first = (figure.authors || '').split(',')[0] || 'Unknown author'
    parts.push(
      `Source: ${first} and colleagues, ${figure.journal || 'open literature'} ${figure.year || ''}. License ${figure.license || 'unspecified'}. ${figure.pmcid || ''} ${figure.doi ? 'doi ' + figure.doi : ''}.`.replace(
        /\s+/g,
        ' ',
      ),
    )
    if (extra?.verdict === 'mismatch') {
      parts.push(
        `Matcher warning: this figure may not be the ${station.name} anatomy named on the case. Treat it as a related analogue, not a confirmed match.`,
      )
    } else if (extra?.verdict === 'confirmed') {
      parts.push(`Matcher confirmed this figure depicts ${station.name}.`)
    } else if (extra?.verdict === 'plausible') {
      parts.push(`Matcher rated this as a plausible teaching analogue for ${station.name}.`)
    } else {
      parts.push('This is a related published case used as a teaching analogue.')
    }
    if (extra?.agent) {
      parts.push(
        `Image agent: ${String(extra.agent).replace(/_/g, ' ')}. ${(extra.reasons || []).slice(0, 4).join('. ')}`,
      )
    }
  } else {
    parts.push(
      `No published figure is on screen. You are looking at the station atlas for ${station.name}.`,
    )
  }
  parts.push(`Teaching point: ${station.teaching}`)
  return parts.map((s) => s.replace(/\s+/g, ' ').trim()).filter((s) => s.length > 2)
}

export function useAudiobook() {
  const [speaking, setSpeaking] = useState(false)
  const [rate, setRate] = useState(1)
  const [line, setLine] = useState('')
  const [index, setIndex] = useState(0)
  const [total, setTotal] = useState(0)
  const speakingRef = useRef(false)
  const rateRef = useRef(1)
  const onDoneRef = useRef<(() => void) | null>(null)
  rateRef.current = rate

  const stop = useCallback(() => {
    speakingRef.current = false
    onDoneRef.current = null
    setSpeaking(false)
    setLine('')
    setIndex(0)
    if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
  }, [])

  const speakQueue = useCallback(
    (parts: string[], onComplete?: () => void) => {
      if (typeof window === 'undefined' || !window.speechSynthesis) return
      window.speechSynthesis.cancel()
      const q = parts.map((s) => s.replace(/\s+/g, ' ').trim()).filter((s) => s.length > 1)
      if (!q.length) return
      speakingRef.current = true
      onDoneRef.current = onComplete || null
      setSpeaking(true)
      setTotal(q.length)
      let i = 0
      const next = () => {
        if (!speakingRef.current) return
        if (i >= q.length) {
          speakingRef.current = false
          setSpeaking(false)
          setLine('')
          const done = onDoneRef.current
          onDoneRef.current = null
          if (done) done()
          return
        }
        setIndex(i)
        setLine(q[i])
        const u = new SpeechSynthesisUtterance(q[i])
        u.rate = rateRef.current
        u.onend = () => {
          i += 1
          next()
        }
        u.onerror = () => {
          i += 1
          next()
        }
        window.speechSynthesis.speak(u)
      }
      next()
    },
    [],
  )

  useEffect(() => () => stop(), [stop])

  return { speaking, rate, setRate, line, index, total, speakQueue, stop }
}
