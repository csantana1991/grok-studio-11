/**
 * Figure types that are not cross-sectional radiology.
 *
 * A caption naming the right body region is not enough. An arthroscopic
 * photograph of a meniscal tear, a histology slide, or a participant-flow
 * diagram all describe the correct anatomy while being the wrong KIND of
 * image for a head-to-toe imaging viewer. Both were observed live: a knee MRI
 * encounter rendered an arthroscopy photo labelled fc / mm / tp, and a liver
 * LI-RADS encounter rendered a CONSORT-style participant flow chart.
 *
 * A third kind slipped through live: quantitative-analysis plots. An ankle
 * encounter rendered "SnPM vector analyses and post hoc analysis for gait cycle,
 * comparing kinematics" -- a statistics figure from a biomechanics paper, which
 * names the right region, states no competing anatomy, and was duly approved.
 * Deliberately NOT matched here: "waveform", which a spectral Doppler caption
 * uses about a genuine ultrasound image.
 *
 * Kept in its own module with an explicit unit test, because this pattern is
 * easy to corrupt: an earlier edit wrote literal backspace characters where
 * the word boundaries belonged, leaving a regex that looked correct in the
 * editor and silently never matched.
 */

export const NON_RADIOLOGIC =
  /\b(arthroscop\w*|endoscop\w*|colonoscop\w*|gastroscop\w*|bronchoscop\w*|laparoscop\w*|dermoscop\w*|otoscop\w*|cystoscop\w*|histolog\w*|histopatholog\w*|cytolog\w*|immunohistochem\w*|photomicrograph\w*|micrograph\w*|haematoxylin|hematoxylin|eosin|immunostain\w*|gross (specimen|pathology|appearance)|macroscop\w*|resected specimen|surgical specimen|operative (photograph|specimen)|intraoperative (photo\w*|view|finding\w*)|clinical photograph|kaplan[- ]meier|survival curve|scatter ?plot|bar (chart|graph)|forest plot|roc curve|flow ?chart|flow ?diagram|participant flow|patient flow|study design|consort|schematic|algorithm|decision (tree|pathway)|timeline|workflow|pedigree|gel electrophoresis|western blot|sequencing|stepwise approach|step-?wise|proposed approach|suggested approach|diagnostic (approach|pathway|algorithm)|management (approach|pathway|algorithm|decision)|when to use|graphical abstract|infographic|illustration|drawing|cartoon|summary figure|overview of|snpm|statistical parametric map\w*|post ?hoc|anova|regression analys\w*|correlation analys\w*|box ?plot|violin plot|histogram|heat ?map|error bars|kinematic\w*|gait (cycle|analysis)|vector analys\w*|principal component|petrel|seabird|ornitholog\w*|flickr|blogspot|inaturalist|ebird|wildlife|storm petrel|white-faced|birds?\b|animal photograph|landscape photograph)\b/i

/** True when a figure caption describes a non-radiological figure. */
export function isNonRadiologic(caption: string): boolean {
  return NON_RADIOLOGIC.test(caption)
}

/** The matched phrase, for showing the reader why a figure was rejected. */
export function nonRadiologicReason(caption: string): string | null {
  const m = caption.match(NON_RADIOLOGIC)
  return m ? m[0].toLowerCase() : null
}
