import { useRef, useState } from 'react'
import { SOURCE_IMAGES } from '../data/sourceImages'
import type { MountApi } from '../hooks/useMountedImages'

interface Props {
  open: boolean
  onClose: () => void
  mountApi: MountApi
}

function Slot({
  filename,
  stations,
  url,
  mountApi,
}: {
  filename: string
  stations: string[]
  url: string | undefined
  mountApi: MountApi
}) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [over, setOver] = useState(false)
  const mounted = Boolean(url)

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault()
        setOver(true)
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setOver(false)
        const f = e.dataTransfer.files[0]
        if (f) void mountApi.mount(filename, f)
      }}
      className={
        'flex items-center gap-3 rounded border px-3 py-2 transition-colors ' +
        (over
          ? 'border-rr-blue-lit bg-rr-blue/20'
          : mounted
            ? 'border-rr-green/40 bg-rr-green/5'
            : 'border-rr-line bg-rr-raised')
      }
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded border border-rr-line bg-black">
        {mounted ? (
          <img src={url} alt="" className="h-full w-full object-contain" />
        ) : (
          <span className="text-[8px] tracking-wider text-rr-dim">EMPTY</span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="truncate text-[11px] font-bold text-white">{filename}</p>
        <p className="truncate text-[9px] text-rr-dim">{stations.join(' &middot; ')}</p>
      </div>

      <span
        className={
          'shrink-0 rounded border px-1.5 py-0.5 text-[9px] font-bold tracking-wider ' +
          (mounted
            ? 'border-rr-green/40 bg-rr-green/10 text-rr-green'
            : 'border-rr-amber/40 bg-rr-amber/10 text-rr-amber')
        }
      >
        {mounted ? 'MOUNTED' : 'MISSING'}
      </span>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const f = e.target.files?.[0]
          if (f) void mountApi.mount(filename, f)
          e.target.value = ''
        }}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="shrink-0 rounded border border-rr-blue-lit/50 bg-rr-blue/20 px-2 py-1 text-[9px] font-bold tracking-wider text-white transition-colors hover:border-rr-blue-lit"
      >
        {mounted ? 'REPLACE' : 'CHOOSE'}
      </button>
      {mounted && (
        <button
          type="button"
          onClick={() => void mountApi.unmount(filename)}
          className="shrink-0 rounded border border-rr-line px-2 py-1 text-[9px] font-bold tracking-wider text-rr-dim transition-colors hover:border-rr-red hover:text-rr-red"
        >
          CLEAR
        </button>
      )}
    </div>
  )
}

export default function MountDrawer({ open, onClose, mountApi }: Props) {
  const [over, setOver] = useState(false)
  const batchRef = useRef<HTMLInputElement>(null)
  if (!open) return null

  const mountedCount = SOURCE_IMAGES.filter((s) => mountApi.urls[s.filename]).length

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="max-h-full w-full max-w-2xl overflow-y-auto rounded border border-rr-line bg-rr-panel"
      >
        <div className="flex items-center gap-2 border-b border-rr-line px-4 py-2">
          <h2 className="text-[12px] font-bold tracking-[0.16em] text-white">
            MOUNT SOURCE IMAGES
          </h2>
          <span className="rounded border border-rr-line bg-rr-raised px-1.5 py-0.5 text-[10px] font-bold text-rr-text tabular-nums">
            {mountedCount} / {SOURCE_IMAGES.length}
          </span>
          <button
            type="button"
            onClick={onClose}
            className="ml-auto rounded border border-rr-line px-2 py-1 text-[10px] font-bold tracking-wider text-rr-dim hover:border-rr-dim hover:text-white"
          >
            CLOSE
          </button>
        </div>

        <div className="px-4 py-3">
          <div
            onDragOver={(e) => {
              e.preventDefault()
              setOver(true)
            }}
            onDragLeave={() => setOver(false)}
            onDrop={(e) => {
              e.preventDefault()
              setOver(false)
              void mountApi.mountBatch(e.dataTransfer.files)
            }}
            onClick={() => batchRef.current?.click()}
            className={
              'cursor-pointer rounded border border-dashed px-4 py-5 text-center transition-colors ' +
              (over
                ? 'border-rr-blue-lit bg-rr-blue/20'
                : 'border-rr-line bg-rr-bg hover:border-rr-dim')
            }
          >
            <p className="text-[11px] font-bold text-white">
              Drop the six .webp files here, or click to select them
            </p>
            <p className="mt-1 text-[9px] text-rr-dim">
              Matched automatically by filename. Files stay on this machine and are
              remembered across reloads.
            </p>
            <input
              ref={batchRef}
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={(e) => {
                if (e.target.files) void mountApi.mountBatch(e.target.files)
                e.target.value = ''
              }}
            />
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            {SOURCE_IMAGES.map((s) => (
              <Slot
                key={s.filename}
                filename={s.filename}
                stations={s.stations}
                url={mountApi.urls[s.filename]}
                mountApi={mountApi}
              />
            ))}
          </div>

          <p className="mt-3 text-[9px] leading-relaxed text-rr-dim">
            Equivalent alternative: copy the files into{' '}
            <code className="text-rr-text">public/resource/</code> using these exact
            filenames and they load automatically with no mounting step. Mounted files
            take precedence over files on disk.
          </p>

          {mountedCount > 0 && (
            <button
              type="button"
              onClick={() => void mountApi.unmountAll()}
              className="mt-2 rounded border border-rr-line px-2 py-1 text-[9px] font-bold tracking-wider text-rr-dim hover:border-rr-red hover:text-rr-red"
            >
              CLEAR ALL MOUNTED IMAGES
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
