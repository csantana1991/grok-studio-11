import { useState } from 'react'
import { formatSlice, type Station } from '../data/stations'

interface Props {
  station: Station
  slice: number
}

function Cell({
  label,
  body,
  tone,
}: {
  label: string
  body: string
  tone: string
}) {
  return (
    <div className="min-w-0 flex-1 border-l border-rr-line px-3 py-2 first:border-l-0">
      <p
        className="mb-1 text-[9px] font-bold tracking-[0.18em] uppercase"
        style={{ color: tone }}
      >
        {label}
      </p>
      <p className="text-[10.5px] leading-relaxed text-rr-text">{body}</p>
    </div>
  )
}

export default function InfoBar({ station, slice }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div className="shrink-0 border-t border-rr-line bg-rr-panel">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-2 px-3 py-1.5 text-left"
        title="Show or hide the reading"
      >
        <span className="text-[9px] font-bold tracking-[0.18em] text-white uppercase">
          What it is saying
        </span>
        <span className="rounded border border-rr-line bg-rr-raised px-1.5 py-px text-[9px] font-bold text-rr-text tabular-nums">
          {station.name} &middot; ATLAS {formatSlice(slice)}/100
        </span>
        <span className="ml-auto text-[9px] font-bold text-rr-blue-lit">{open ? 'HIDE' : 'SHOW'}</span>
      </button>
      {open && (
        <div className="flex max-h-28 items-stretch overflow-y-auto border-t border-rr-line">
          <Cell label="Anatomy" body={station.anatomy} tone="#22d3ee" />
          <Cell label="Interpretation" body={station.interpretation} tone="#f59e0b" />
          <Cell label="Teaching" body={station.teaching} tone="#22c55e" />
        </div>
      )}
    </div>
  )
}
