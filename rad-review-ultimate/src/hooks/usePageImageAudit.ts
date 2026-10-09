import { useEffect, useRef, useState } from 'react'
import { MIN_EDGE_PX } from '../data/qa/validators'

export interface PageImageFault {
  src: string
  /** Where on the page it is, for the report. */
  where: string
  problem: 'failed to load' | 'too small to read' | 'blank frame'
  width: number
  height: number
}

export interface PageAudit {
  /** Every <img> currently in the document. */
  total: number
  ok: number
  faults: PageImageFault[]
  lastRunAt: number
}

const EMPTY: PageAudit = { total: 0, ok: 0, faults: [], lastRunAt: 0 }

/** How often the page is re-swept at most, however much the DOM churns. */
const THROTTLE_MS = 1500

function describe(el: HTMLImageElement): string {
  const panel = el.closest('[data-qa-region]')?.getAttribute('data-qa-region')
  if (panel) return panel
  if (el.closest('article')) return 'card'
  return el.className.split(/\s+/).slice(0, 2).join(' ') || 'page'
}

/**
 * PAGE-WIDE IMAGE AUDIT.
 *
 * Everything the QA engine does works on text and on a fetched copy of a file.
 * This is the other half: it watches what is ACTUALLY RENDERED. A URL can pass
 * every check and still show the reader a broken frame — the element was given a
 * stale src, the layout collapsed it to nothing, a lazy load never fired.
 *
 * A MutationObserver keeps it current as the viewer, the worklist, the Q&A board
 * and the atlas panel swap images in, so images that appear during narration or
 * live generation are checked the moment they land rather than on a timer.
 */
export function usePageImageAudit(enabled = true): PageAudit {
  const [audit, setAudit] = useState<PageAudit>(EMPTY)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (!enabled || typeof document === 'undefined') return

    const run = () => {
      const images = Array.from(document.images)
      const faults: PageImageFault[] = []
      let ok = 0
      for (const el of images) {
        // Still loading is not a fault; it is checked again on the next sweep.
        if (!el.complete) continue
        const w = el.naturalWidth
        const h = el.naturalHeight
        if (!el.currentSrc && !el.src) continue
        if (w === 0 || h === 0) {
          faults.push({
            src: el.currentSrc || el.src,
            where: describe(el),
            problem: 'failed to load',
            width: w,
            height: h,
          })
          continue
        }
        if (w < MIN_EDGE_PX && h < MIN_EDGE_PX && el.clientWidth > MIN_EDGE_PX) {
          // Small source stretched across a large frame: unreadable where it counts.
          faults.push({
            src: el.currentSrc || el.src,
            where: describe(el),
            problem: 'too small to read',
            width: w,
            height: h,
          })
          continue
        }
        if (el.clientWidth === 0 || el.clientHeight === 0) {
          faults.push({
            src: el.currentSrc || el.src,
            where: describe(el),
            problem: 'blank frame',
            width: w,
            height: h,
          })
          continue
        }
        ok++
      }
      setAudit({ total: images.length, ok, faults, lastRunAt: Date.now() })
    }

    const schedule = () => {
      if (timer.current !== null) return
      timer.current = window.setTimeout(() => {
        timer.current = null
        run()
      }, THROTTLE_MS)
    }

    run()
    const observer = new MutationObserver(schedule)
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['src'],
    })
    // Decodes finish after the mutation that added the element, so listen for
    // load and error too: without this every freshly-inserted image reads as a
    // fault on the sweep that follows its insertion.
    const onSettle = () => schedule()
    window.addEventListener('load', onSettle, true)
    document.addEventListener('load', onSettle, true)
    document.addEventListener('error', onSettle, true)

    return () => {
      observer.disconnect()
      window.removeEventListener('load', onSettle, true)
      document.removeEventListener('load', onSettle, true)
      document.removeEventListener('error', onSettle, true)
      if (timer.current !== null) window.clearTimeout(timer.current)
    }
  }, [enabled])

  return audit
}
