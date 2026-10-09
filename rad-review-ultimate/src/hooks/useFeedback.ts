import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  buildFeedbackModel,
  clearVerdict,
  loadFeedback,
  saveVerdict,
  type FeedbackEntry,
  type Verdict,
} from '../data/feedback'

/**
 * Reader verdicts on matched images, persisted and fed back into ranking.
 * Rejected images are never offered again; approved ones lead their finding.
 */
export function useFeedback() {
  const [byUrl, setByUrl] = useState<Record<string, FeedbackEntry>>({})

  useEffect(() => {
    let cancelled = false
    loadFeedback().then((f) => {
      if (!cancelled) setByUrl(f)
    })
    return () => {
      cancelled = true
    }
  }, [])

  const model = useMemo(() => buildFeedbackModel(byUrl), [byUrl])

  const judge = useCallback(
    (url: string, verdict: Verdict, finding: string, stationId: string) => {
      setByUrl((prev) => {
        // Clicking the same verdict again clears it, so a misclick is undoable.
        if (prev[url]?.verdict === verdict) {
          const next = { ...prev }
          delete next[url]
          void clearVerdict(url)
          return next
        }
        const entry: FeedbackEntry = { url, verdict, finding, stationId, at: Date.now() }
        void saveVerdict(entry)
        return { ...prev, [url]: entry }
      })
    },
    [],
  )

  const counts = useMemo(() => {
    let approved = 0
    let rejected = 0
    for (const e of Object.values(byUrl)) {
      if (e.verdict === 'approved') approved++
      else rejected++
    }
    return { approved, rejected, domains: Object.keys(model.byDomain).length }
  }, [byUrl, model])

  return { model, judge, counts }
}
