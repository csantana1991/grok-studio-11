import { useCallback, useEffect, useRef, useState } from 'react'
import type { Encounter } from '../data/generateCases'
import type { Station } from '../data/stations'
import type { LiveMatch } from '../data/liveMatch'
import { reportsSuv, statedSuv, studyKind } from '../data/caseDossier'

/** Same segmented Web Speech queue Board Studio uses for lessons. */
export function caseScript(
  enc: Encounter,
  station: Station,
  figure?: LiveMatch | null,
): string[] {
  const sex = enc.sex === 'M' ? 'male' : 'female'
  const cat = enc.categoryId.replace(/_/g, ' ')
  const parts = [
    `Demo teaching row ${enc.accession}. ${cat} study. Not a signed clinical report.`,
    `${enc.age} year old ${sex}. Finding: ${enc.finding}.`,
    `Head-to-toe atlas position ${station.name}, atlas ${String(enc.slice).padStart(3, '0')} of 100. That atlas is not this row’s image. Anatomy there: ${station.anatomy}.`,
  ]
  const suv = statedSuv(enc.finding)
  if (reportsSuv(studyKind(enc.finding, enc.categoryId)) && suv) {
    parts.push(`The stem states SUV ${suv}. That is demo text, not a measurement from a patient scan.`)
  } else {
    parts.push('This study does not report an SUV.')
  }
  if (figure?.journal?.includes('plate library')) {
    parts.push(`Teaching plate on screen, not this row’s scan. ${figure.caption || ''}`)
  } else if (figure?.caption || figure?.title) {
    parts.push(
      `Published reference, not this row’s scan. ${figure.title || ''}. ${figure.caption || ''} ${figure.journal || ''} ${figure.year || ''}.`.replace(/\s+/g, ' ').trim(),
    )
  } else {
    parts.push('No matched case image is on screen.')
  }
  parts.push(`Demo code ${enc.acgme}. Not an ACGME log. Demo status ${enc.status}.`)
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
    `Head to toe atlas, not this row’s scan. Atlas ${index + 1} of ${Math.max(total, 1)}. Demo id ${enc.accession}.`,
  )
  parts.push(`The case finding is: ${enc.finding}.`)
  parts.push(
    `Atlas station ${station.name}, position ${String(enc.slice).padStart(3, '0')} of 100. Not a DICOM slice count.`,
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

export type NarrationPhase = 'idle' | 'playing' | 'paused' | 'done' | 'unavailable'

export function useAudiobook() {
  const [phase, setPhase] = useState<NarrationPhase>('idle')
  const [rate, setRate] = useState(1)
  const [line, setLine] = useState('')
  const [index, setIndex] = useState(0)
  const [total, setTotal] = useState(0)
  const phaseRef = useRef<NarrationPhase>('idle')
  const rateRef = useRef(1)
  const queueRef = useRef<string[]>([])
  const indexRef = useRef(0)
  const onDoneRef = useRef<(() => void) | null>(null)
  rateRef.current = rate

  const setPhaseBoth = (next: NarrationPhase) => {
    phaseRef.current = next
    setPhase(next)
  }

  const stop = useCallback(() => {
    queueRef.current = []
    onDoneRef.current = null
    setPhaseBoth('idle')
    setLine('')
    setIndex(0)
    if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
  }, [])

  const speakFrom = useCallback((i: number) => {
    const q = queueRef.current
    if (!q.length || typeof window === 'undefined' || !window.speechSynthesis) {
      setPhaseBoth('unavailable')
      return
    }
    if (i >= q.length) {
      setPhaseBoth('done')
      setLine('')
      const done = onDoneRef.current
      onDoneRef.current = null
      if (done) done()
      return
    }
    setPhaseBoth('playing')
    indexRef.current = i
    setIndex(i)
    setLine(q[i])
    const u = new SpeechSynthesisUtterance(q[i])
    u.rate = rateRef.current
    u.onend = () => {
      if (phaseRef.current !== 'playing') return
      speakFrom(i + 1)
    }
    u.onerror = () => {
      if (phaseRef.current !== 'playing') return
      speakFrom(i + 1)
    }
    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(u)
  }, [])

  const pause = useCallback(() => {
    if (phaseRef.current !== 'playing') return
    setPhaseBoth('paused')
    if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
  }, [])

  const resume = useCallback(() => {
    if (phaseRef.current !== 'paused') return
    speakFrom(indexRef.current)
  }, [speakFrom])

  const speakQueue = useCallback(
    (parts: string[], onComplete?: () => void) => {
      if (typeof window === 'undefined' || !window.speechSynthesis) {
        setPhaseBoth('unavailable')
        setLine('Narration is not available in this browser.')
        return
      }
      window.speechSynthesis.cancel()
      const q = parts.map((s) => s.replace(/\s+/g, ' ').trim()).filter((s) => s.length > 1)
      if (!q.length) {
        setPhaseBoth('unavailable')
        setLine('Nothing to read for this case.')
        return
      }
      queueRef.current = q
      onDoneRef.current = onComplete || null
      setTotal(q.length)
      speakFrom(0)
    },
    [speakFrom],
  )

  useEffect(() => () => stop(), [stop])

  return {
    speaking: phase === 'playing',
    phase,
    rate,
    setRate,
    line,
    index,
    total,
    speakQueue,
    stop,
    pause,
    resume,
  }
}
