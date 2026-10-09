#!/usr/bin/env node
/** Catalog integrity checks — run after migrations against a live getSql is not available here.
 *  The in-app Track view prints live counts. This script documents the required invariants.
 */
const TARGET = {
  total: 33000,
  sourceLabel: 7358,
  metadata: 25607,
  authored: 35,
  dr: 25000,
  nm: 8000,
  xr: 12000,
  ct: 5000,
  us: 2500,
  mri: 2500,
  breast: 3000,
  nmGen: 4000,
  pet: 3000,
  cardiac: 965,
  therapy: 35,
};
console.log("Nucleus Board Academy catalog targets", TARGET);
console.log("Live audit is executed by GET catalog stats in the running app.");
