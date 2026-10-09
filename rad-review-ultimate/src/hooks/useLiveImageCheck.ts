import { useEffect, useState } from 'react'
import type { Encounter } from '../data/generateCases'
import type { LiveMatch } from '../data/liveMatch'
import { evaluate } from '../data/qa/engine'
import { probeImage } from '../data/qa/probe'
import { saveProbes } from '../data/qa/lockDb'
import type { ProbeResult, QaStatus } from '../data/qa/types'

export interface LiveCheck {
  status: QaStatus | null
  reasons: string[]
  /** Consensus over the checks that could decide, 0..1. */
  consensus: number
  busy: boolean
  probe: ProbeResult | null
}

const IDLE: LiveCheck = { status: null, reasons: [], consensus: 0, busy: false, probe: null }

/**
 * LIVE CHECK OF THE IMAGE ON SCREEN.
 *
 * The background sweep validates all 33,000 connections, but it works from
 * whatever probe results already exist. The moment a reader opens a case, the
 * exact image about to be displayed is fetched and re-judged on the spot, so the
 * verdict shown next to it describes THAT file as it is right now — not a
 * conclusion reached minutes ago about a URL that may since have gone dead.
 *
 * Runs on selection and on double-click load, and re-runs whenever the reader
 * cycles to another match.
 */
export function useLiveImageCheck(
  encounter: Encounter | null,
  match: LiveMatch | undefined,
  noteProbe?: (r: ProbeResult) => void,
  cachedProbe?: (url: string) => ProbeResult | undefined,
): LiveCheck {
  const [check, setCheck] = useState<LiveCheck>(IDLE)
  const url = match?.url
  const accession = encounter?.accession

  useEffect(() => {
    if (!encounter || !match || !url) {
      setCheck(IDLE)
      return
    }
    let cancelled = false

    // Judge immediately from what is already known, so the reader is never left
    // looking at an unlabelled image while the file is being fetched.
    const known = cachedProbe?.(url)
    const first = evaluate({ encounter, match, probe: known })
    setCheck({
      status: first.status,
      reasons: first.reasons,
      consensus: first.consensus.consensus,
      busy: !known,
      probe: known ?? null,
    })
    if (known) return

    probeImage(url).then((probe) => {
      if (cancelled) return
      void saveProbes([probe])
      noteProbe?.(probe)
      const withFile = evaluate({ encounter, match, probe })
      setCheck({
        status: withFile.status,
        reasons: withFile.reasons,
        consensus: withFile.consensus.consensus,
        busy: false,
        probe,
      })
    })

    return () => {
      cancelled = true
    }
    // `accession` and `url` are the identity of the pairing; the objects behind
    // them are rebuilt on every render and would re-probe forever as deps.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [accession, url])

  return check
}
