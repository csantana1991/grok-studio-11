import { describe, it, expect } from 'vitest'
import { VOCABULARY, broaden, correct, editDistance, suggest } from './suggest'

describe('edit distance', () => {
  it('counts a transposition as one edit, not two', () => {
    expect(editDistance('adenocarinoma', 'adenocarcinoma')).toBe(1)
    expect(editDistance('raidograph', 'radiograph')).toBe(1)
  })

  it('gives up early rather than scoring unrelated words', () => {
    expect(editDistance('knee', 'adenocarcinoma', 3)).toBeGreaterThan(3)
  })
})

describe('correction', () => {
  it('fixes a near-miss against the vocabulary', () => {
    const r = correct('pancreatic adenocarcinom')
    expect(r.corrected).toBe(true)
    expect(r.query).toContain('adenocarcinoma')
  })

  it('reports what it changed, so the notice can say so', () => {
    const r = correct('pulmonry embolism')
    expect(r.changes[0]).toEqual({ from: 'pulmonry', to: 'pulmonary' })
  })

  it('leaves a correctly spelled query completely alone', () => {
    const q = 'MRI knee meniscal tear'
    const r = correct(q)
    expect(r.corrected).toBe(false)
    expect(r.query).toBe(q)
  })

  it('preserves the original spacing', () => {
    expect(correct('liver  metastasis').query).toBe('liver  metastasis')
  })

  it('will not touch short words, where near neighbours are ambiguous', () => {
    // "cyst" is one edit from "cast" and "cost"; guessing here would be wrong
    // more often than it is right.
    expect(correct('cyst').corrected).toBe(false)
    expect(correct('mri').corrected).toBe(false)
  })

  it('refuses to choose when two vocabulary words are equally close', () => {
    // Ambiguity must leave the reader's word intact rather than pick one.
    const r = correct('ischemia')
    expect(r.query).toBe('ischemia')
  })

  it('does not mangle ordinary English around the clinical terms', () => {
    const r = correct('chest with pleural effusion')
    expect(r.query).toBe('chest with pleural effusion')
  })
})

describe('suggestions', () => {
  it('completes a partial word', () => {
    const s = suggest('pancrea')
    expect(s).toContain('pancreas')
    expect(s).toContain('pancreatic')
  })

  it('offers the intended term even when the fragment is misspelled', () => {
    expect(suggest('meniscl')).toContain('meniscal')
  })

  it('suggests from the last word being typed, not the whole phrase', () => {
    expect(suggest('MRI knee menis')).toContain('meniscal')
  })

  it('stays quiet until there is something to go on', () => {
    expect(suggest('a')).toEqual([])
    expect(suggest('')).toEqual([])
  })
})

describe('broadening', () => {
  it('drops the qualifier before the clinical subject', () => {
    const steps = broaden('displaced bucket handle meniscal tear')
    expect(steps.length).toBeGreaterThan(0)
    // The clinical words survive longest.
    expect(steps[steps.length - 1]).toMatch(/meniscal|tear/)
  })

  it('has nothing to broaden for a single term', () => {
    expect(broaden('knee')).toEqual([])
  })

  it('ends with a query that is still a real search', () => {
    for (const step of broaden('rare atypical pancreatic adenocarcinoma')) {
      expect(step.trim().length).toBeGreaterThan(0)
    }
  })
})

describe('vocabulary', () => {
  it('is built from terms the rest of the app already reasons about', () => {
    expect(VOCABULARY.has('meniscal')).toBe(true)
    expect(VOCABULARY.has('calcaneus')).toBe(true)
    expect(VOCABULARY.has('adenocarcinoma')).toBe(true)
    expect(VOCABULARY.size).toBeGreaterThan(150)
  })
})
