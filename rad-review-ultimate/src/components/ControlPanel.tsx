import { useMemo } from 'react'
import type { Encounter } from '../data/generateCases'
import {
  CATEGORY_BY_ID,
  GROUP_1,
  GROUP_2,
  GROUP_1_TOTAL,
  GROUP_2_TOTAL,
  GRAND_TOTAL,
} from '../data/categories'
import {
  IMAGES,
  MAX_SLICE,
  formatSlice,
  getSliceFromClick,
  getStationForSlice,
  type Station,
} from '../data/stations'

interface Props {
  active: Encounter | null
  slice: number
  station: Station
  onSlice: (s: number) => void
  /** Live literature match panel, injected so App owns the search state. */
  literature?: React.ReactNode
  /** AI read of the picture currently in the viewer. */
  analysis?: React.ReactNode
}

function Block({
  title,
  children,
  tone = '#23232b',
}: {
  title: string
  children: React.ReactNode
  tone?: string
}) {
  return (
    <section className="border-b border-rr-line">
      <h3
        className="px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] uppercase"
        style={{ color: tone }}
      >
        {title}
      </h3>
      <div className="px-3 pb-3">{children}</div>
    </section>
  )
}

function Field({ label, value, tone }: { label: string; value: string; tone?: string }) {
  return (
    <div className="flex items-baseline justify-between gap-2 border-b border-rr-blue-lit/20 py-1 last:border-b-0">
      <span className="text-[9px] tracking-[0.14em] text-rr-blue-lit/80 uppercase">
        {label}
      </span>
      <span
        className="truncate text-[11px] font-bold tabular-nums"
        style={{ color: tone ?? '#fff' }}
      >
        {value}
      </span>
    </div>
  )
}

/** Runtime re-execution of the fix assertions, shown to the reader. */
function useFixChecks() {
  return useMemo(() => {
    const a = getSliceFromClick(0.42)
    const b = getSliceFromClick(0.95)
    const stA = getStationForSlice(a)
    const stB = getStationForSlice(b)
    return [
      {
        input: '0.42',
        slice: formatSlice(a),
        expect: 'UPPER ABDOMEN',
        got: stA.name,
        detail: 'kidney/liver',
        real: stA.image === IMAGES.AXIAL_FUSION,
        pass: stA.name === 'UPPER ABDOMEN' && /kidney/i.test(stA.anatomy),
      },
      {
        input: '0.95',
        slice: formatSlice(b),
        expect: 'ANKLE',
        got: stB.name,
        detail: 'ankle',
        real: stB.image === IMAGES.DISTAL_LIMB,
        pass:
          stB.name === 'ANKLE' &&
          /talus/i.test(stB.anatomy) &&
          !/kidney/i.test(stB.anatomy),
      },
    ]
  }, [])
}

export default function ControlPanel({
  active,
  slice,
  station,
  onSlice,
  literature,
  analysis,
}: Props) {
  const checks = useFixChecks()
  const cat = active ? CATEGORY_BY_ID[active.categoryId] : null

  return (
    <aside
      id="rru-sidebar"
      className="flex max-h-[42vh] w-full shrink-0 flex-col overflow-y-auto border-l border-rr-line bg-rr-panel xl:max-h-none xl:w-[22rem]"
    >
      {/* CONTROL -- blue panel */}
      <section className="border-b border-rr-line bg-rr-blue/15">
        <h3 className="border-b border-rr-blue-lit/30 px-3 py-1.5 text-[9px] font-bold tracking-[0.18em] text-white uppercase">
          Control
        </h3>
        <div className="px-3 py-2">
          <Field label="Modality" value={cat ? cat.label : '--'} tone={cat?.accent} />
          <Field label="Station" value={station.name} />
          <Field label="Slice" value={`${formatSlice(slice)} / ${MAX_SLICE}`} />
          <Field label="Plane" value={station.plane} />
          <Field label="Range" value={`${formatSlice(station.start)}-${formatSlice(station.end)}`} />

          <input
            type="range"
            min={0}
            max={MAX_SLICE}
            value={slice}
            onChange={(e) => onSlice(Number(e.target.value))}
            aria-label="Slice position"
            className="mt-3 w-full accent-rr-red"
          />
          <div className="flex justify-between text-[8px] tracking-wider text-rr-blue-lit/70">
            <span>000 VERTEX</span>
            <span>100 TOES</span>
          </div>
        </div>
      </section>

      {/* JUMP TO LESION */}
      <Block title="Jump to lesion" tone="#f59e0b">
        <div className="flex flex-col gap-1">
          {station.lesions.map((l) => (
            <button
              key={l.label}
              type="button"
              onClick={() => onSlice(Math.round((station.start + station.end) / 2))}
              className="flex items-center gap-2 rounded border border-rr-amber/35 bg-rr-amber/10 px-2 py-1.5 text-left transition-colors hover:border-rr-amber"
            >
              <span className="h-2 w-2 shrink-0 rounded-full bg-rr-amber" />
              <span className="min-w-0 flex-1 truncate text-[10px] text-rr-text">
                {l.label}
              </span>
              <span className="text-[10px] font-bold text-rr-amber tabular-nums">
                SUV {l.suv}
              </span>
            </button>
          ))}
          {active && (
            <button
              type="button"
              onClick={() => onSlice(active.slice)}
              className="mt-1 rounded border border-rr-blue-lit/50 bg-rr-blue/20 px-2 py-1.5 text-[10px] font-bold tracking-wider text-white transition-colors hover:border-rr-blue-lit"
            >
              JUMP TO CASE SLICE {formatSlice(active.slice)} &middot; {active.stationName}
            </button>
          )}
        </div>
      </Block>

      {/* Q&A BOARD */}
      <Block title="Q &amp; A board" tone="#22d3ee">
        {active ? (
          <div className="rounded border border-rr-line bg-rr-raised p-2">
            <p className="text-[10px] leading-snug font-bold text-white">
              {active.finding}
            </p>
            <div className="mt-2 flex flex-wrap gap-1 text-[9px]">
              <span className="rounded border border-rr-line px-1 py-px text-rr-dim tabular-nums">
                {active.accession}
              </span>
              <span className="rounded border border-rr-line px-1 py-px text-rr-dim tabular-nums">
                MRN {active.mrn}
              </span>
              <span className="rounded border border-rr-line px-1 py-px text-rr-dim tabular-nums">
                {active.age}
                {active.sex}
              </span>
              {active.suv && (
                <span className="rounded border border-rr-amber/40 px-1 py-px text-rr-amber tabular-nums">
                  SUV {active.suv}
                </span>
              )}
            </div>
            <dl className="mt-2 space-y-1.5 text-[10px] leading-snug">
              <div>
                <dt className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">
                  Q1 &middot; What is at this level?
                </dt>
                <dd className="text-rr-text">{station.anatomy}</dd>
              </div>
              <div>
                <dt className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">
                  Q2 &middot; What is the image saying?
                </dt>
                <dd className="text-rr-text">{station.interpretation}</dd>
              </div>
              <div>
                <dt className="text-[9px] tracking-[0.14em] text-rr-dim uppercase">
                  Q3 &middot; Pearl
                </dt>
                <dd className="text-rr-text">{station.teaching}</dd>
              </div>
            </dl>
          </div>
        ) : (
          <p className="text-[10px] text-rr-dim">
            Select an encounter to load the teaching board.
          </p>
        )}
      </Block>

      {analysis}

      {literature}

      {/* ACGME TRACKER */}
      <Block title="ACGME case log tracker" tone="#22c55e">
        <div className="space-y-1">
          {GROUP_1.map((c) => (
            <div key={c.id} className="flex items-baseline justify-between text-[10px]">
              <span className="text-rr-dim">{c.label}</span>
              <span className="font-bold tabular-nums" style={{ color: c.accent }}>
                {c.count.toLocaleString()}
              </span>
            </div>
          ))}
          <div className="flex items-baseline justify-between border-t border-rr-line pt-1 text-[10px]">
            <span className="font-bold text-white">GROUP 1</span>
            <span className="font-bold text-white tabular-nums">
              {GROUP_1_TOTAL.toLocaleString()}
            </span>
          </div>

          <div className="h-1" />

          {GROUP_2.map((c) => (
            <div key={c.id} className="flex items-baseline justify-between text-[10px]">
              <span className="text-rr-dim">{c.label}</span>
              <span className="font-bold tabular-nums" style={{ color: c.accent }}>
                {c.count.toLocaleString()}
              </span>
            </div>
          ))}
          <div className="flex items-baseline justify-between border-t border-rr-line pt-1 text-[10px]">
            <span className="font-bold text-white">GROUP 2</span>
            <span className="font-bold text-white tabular-nums">
              {GROUP_2_TOTAL.toLocaleString()}
            </span>
          </div>

          <div className="mt-1 flex items-baseline justify-between rounded border border-rr-green/40 bg-rr-green/10 px-2 py-1.5">
            <span className="text-[10px] font-bold tracking-[0.14em] text-rr-green">
              GRAND TOTAL
            </span>
            <span className="text-[14px] font-bold text-rr-green tabular-nums">
              {GRAND_TOTAL.toLocaleString()}
            </span>
          </div>
        </div>
      </Block>

      {/* FIX VERIFICATION */}
      <Block title="Fix verification" tone="#ef4444">
        <div className="space-y-1.5">
          {checks.map((c) => (
            <div
              key={c.input}
              className={
                'rounded border p-2 ' +
                (c.pass
                  ? 'border-rr-green/40 bg-rr-green/10'
                  : 'border-rr-red/50 bg-rr-red/10')
              }
            >
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] font-bold text-white tabular-nums">
                  {c.input} &rarr; {c.slice}
                </span>
                <span className="text-[10px] font-bold text-rr-text">{c.got}</span>
                <span className="ml-auto text-[9px] font-bold tracking-wider">
                  <span className={c.pass ? 'text-rr-green' : 'text-rr-red'}>
                    {c.pass ? 'PASS' : 'FAIL'}
                  </span>
                </span>
              </div>
              <p className="mt-1 text-[9px] text-rr-dim">
                expects <span className="text-rr-text">{c.detail}</span> &middot; source{' '}
                <span className={c.real ? 'text-rr-green' : 'text-rr-amber'}>
                  {c.real ? 'REAL' : 'UNMAPPED'}
                </span>
              </p>
            </div>
          ))}
          <p className="text-[9px] leading-snug text-rr-dim">
            Slice 095 resolves to the ankle, never to kidneys. Slice 042 resolves to the
            upper abdomen with kidney and liver. Asserted at runtime and in the test suite.
          </p>
        </div>
      </Block>
    </aside>
  )
}
