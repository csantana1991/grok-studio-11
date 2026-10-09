import { useCallback, useEffect, useRef, useState } from 'react'
import { getAllImages, putImage, deleteImage, clearImages } from '../data/imageStore'
import { SOURCE_FILENAMES } from '../data/sourceImages'

export interface MountApi {
  /** filename -> object URL for every mounted image. */
  urls: Record<string, string>
  ready: boolean
  mount: (filename: string, file: File) => Promise<void>
  /** Match a dropped batch by filename. Returns the names that matched. */
  mountBatch: (files: FileList | File[]) => Promise<string[]>
  unmount: (filename: string) => Promise<void>
  unmountAll: () => Promise<void>
}

export function useMountedImages(): MountApi {
  const [urls, setUrls] = useState<Record<string, string>>({})
  const [ready, setReady] = useState(false)
  // Object URLs currently handed out, so they can be revoked on replace.
  const live = useRef<Record<string, string>>({})

  const publish = useCallback((name: string, blob: Blob | null) => {
    setUrls((prev) => {
      const next = { ...prev }
      const old = live.current[name]
      if (old) {
        URL.revokeObjectURL(old)
        delete live.current[name]
      }
      if (blob) {
        const url = URL.createObjectURL(blob)
        live.current[name] = url
        next[name] = url
      } else {
        delete next[name]
      }
      return next
    })
  }, [])

  useEffect(() => {
    let cancelled = false
    getAllImages().then((stored) => {
      if (cancelled) return
      const next: Record<string, string> = {}
      for (const [name, blob] of Object.entries(stored)) {
        const url = URL.createObjectURL(blob)
        live.current[name] = url
        next[name] = url
      }
      setUrls(next)
      setReady(true)
    })
    return () => {
      cancelled = true
    }
  }, [])

  // Revoke everything on unmount of the app.
  useEffect(() => {
    const held = live.current
    return () => {
      for (const url of Object.values(held)) URL.revokeObjectURL(url)
    }
  }, [])

  const mount = useCallback(
    async (filename: string, file: File) => {
      const blob = file.slice(0, file.size, file.type || 'image/webp')
      await putImage(filename, blob)
      publish(filename, blob)
    },
    [publish],
  )

  const mountBatch = useCallback(
    async (files: FileList | File[]) => {
      const list = Array.from(files)
      const matched: string[] = []
      for (const f of list) {
        const hit = SOURCE_FILENAMES.find(
          (n) => n.toLowerCase() === f.name.toLowerCase(),
        )
        if (hit) {
          await mount(hit, f)
          matched.push(hit)
        }
      }
      return matched
    },
    [mount],
  )

  const unmount = useCallback(
    async (filename: string) => {
      await deleteImage(filename)
      publish(filename, null)
    },
    [publish],
  )

  const unmountAll = useCallback(async () => {
    await clearImages()
    for (const name of Object.keys(live.current)) publish(name, null)
  }, [publish])

  return { urls, ready, mount, mountBatch, unmount, unmountAll }
}
