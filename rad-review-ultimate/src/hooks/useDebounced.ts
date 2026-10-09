import { useEffect, useState } from 'react'

/** Debounce a rapidly changing value -- keeps 33k-row filtering off the keystroke path. */
export function useDebounced<T>(value: T, delay = 180): T {
  const [debounced, setDebounced] = useState(value)

  useEffect(() => {
    const id = window.setTimeout(() => setDebounced(value), delay)
    return () => window.clearTimeout(id)
  }, [value, delay])

  return debounced
}

/** Suppress hardcopy: no print button in the UI and Ctrl/Cmd+P is swallowed. */
export function useNoPrint(): void {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'p') {
        e.preventDefault()
        e.stopPropagation()
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [])
}
