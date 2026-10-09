interface Props {
  speaking: boolean
  rate: number
  onRate: (n: number) => void
  line: string
  index: number
  total: number
  onPlayCase: () => void
  onPlayList: () => void
  onStop: () => void
  label: string
}

export default function AudiobookBar({
  speaking,
  rate,
  onRate,
  line,
  index,
  total,
  onPlayCase,
  onPlayList,
  onStop,
  label,
}: Props) {
  return (
    <div className="flex shrink-0 items-center gap-2 border-t border-rr-line bg-rr-panel px-3 py-1.5">
      <button
        type="button"
        onClick={speaking ? onStop : onPlayCase}
        title={speaking ? 'Pause audiobook' : 'Play this case'}
        className="flex h-8 w-8 items-center justify-center rounded border border-rr-blue-lit bg-rr-blue/30 text-[13px] font-bold text-rr-blue-lit"
      >
        {speaking ? '❚❚' : '▶'}
      </button>
      <button
        type="button"
        onClick={onPlayList}
        title="Play this case, then keep going through the worklist"
        className="rounded border border-rr-line bg-rr-raised px-2 py-1 text-[9px] font-bold tracking-[0.12em] text-rr-text uppercase hover:border-rr-blue-lit"
      >
        Play list
      </button>
      <label className="flex items-center gap-1 text-[9px] font-bold tracking-[0.12em] text-rr-dim uppercase">
        Speed
        <select
          value={String(rate)}
          onChange={(e) => onRate(parseFloat(e.target.value))}
          className="rounded border border-rr-line bg-rr-raised px-1 py-0.5 text-[11px] text-white"
        >
          <option value="0.85">0.85×</option>
          <option value="1">1.0×</option>
          <option value="1.15">1.15×</option>
          <option value="1.3">1.3×</option>
        </select>
      </label>
      <div className="min-w-0 flex-1">
        <p className="truncate text-[10px] font-bold text-white">{label}</p>
        <p className="truncate text-[10px] text-rr-blue-lit">
          {speaking && total
            ? `Audiobook ${index + 1}/${total} · ${line}`
            : 'Same audiobook as Board Studio · play this case or the worklist'}
        </p>
      </div>
    </div>
  )
}
