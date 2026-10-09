export type ModalityBucket =
  | "XR"
  | "CT"
  | "US"
  | "MRI"
  | "BREAST_FLUORO"
  | "NM_GENERAL"
  | "PET"
  | "CARDIAC_NM"
  | "THERAPY";

export type TeachingGuide = {
  title: string;
  summary: string;
  identify: string[];
  checklist: string[];
  callouts: string[];
};

export function teachingGuide(bucket: string, region: string): TeachingGuide {
  const r = region.toLowerCase();
  if (bucket === "CT" && (r.includes("head") || r.includes("neck"))) {
    return {
      title: "CT head / neck search",
      summary:
        "Name plane, side, and contrast. Review brain/CSF, skull, face, airway, and deep spaces on brain and bone windows. A finding must persist on adjacent slices.",
      identify: ["Plane and contrast", "Midline shift / ventricles", "Calvarium and extra-axial spaces", "Airway and deep spaces"],
      checklist: [
        "Brain parenchyma and CSF spaces",
        "Skull and extra-axial collections",
        "Face, sinuses, orbit",
        "Airway and cervical deep spaces",
        "Bone window for calvarium / dens",
      ],
      callouts: [
        "Relative stack language (upper/middle/lower fifth) is position, not a verified anatomic level.",
        "ORIENTATION GUIDE only unless a source mask exists.",
      ],
    };
  }
  if (bucket === "CT" && r.includes("chest")) {
    return {
      title: "CT chest search",
      summary: "Lungs/pleura, airway/hila, mediastinum/heart/vessels, chest wall/bones/upper abdomen. Window for the question.",
      identify: ["Lungs and pleura", "Airway and hila", "Mediastinum and heart", "Chest wall and upper abdomen"],
      checklist: ["Lung windows", "Soft-tissue/mediastinal windows", "Bone windows", "Upper abdomen on the last images"],
      callouts: ["PE language requires a dedicated pulmonary-artery search — do not invent a clot without pixels."],
    };
  }
  if (bucket === "CT" && (r.includes("abdomen") || r.includes("pelvis"))) {
    return {
      title: "CT abdomen / pelvis search",
      summary: "Anchor on central vessels and spine. Solid organs, bowel/mesentery, retroperitoneum, pelvis, bones/body wall.",
      identify: ["Liver/spleen/pancreas/kidneys", "Bowel and mesentery", "Vessels and retroperitoneum", "Pelvic viscera"],
      checklist: ["Solid organs", "Bowel caliber and transition", "Nodes and mesentery", "Bones and body wall"],
      callouts: ["A series title is not a diagnosis."],
    };
  }
  if (bucket === "MRI") {
    return {
      title: "MRI sequence-first search",
      summary: "Plane and sequence before a lesion story. For brain: T1, T2/FLAIR, DWI/ADC, susceptibility, then cross-sequence correlation.",
      identify: ["Plane", "Sequence weighting", "Symmetry", "Restricted diffusion only with ADC"],
      checklist: ["Localizer/plane", "T1", "T2/FLAIR", "DWI and ADC together", "Post-contrast if performed"],
      callouts: ["Do not call restricted diffusion from DWI alone."],
    };
  }
  if (bucket === "XR") {
    return {
      title: "Radiograph edge-to-edge search",
      summary: "Projection, laterality, positioning, exposure. Fixed search; avoid satisfaction of search.",
      identify: ["Projection", "Laterality marker vs anatomy", "Coverage", "Lines/tubes if present"],
      checklist: ["Corners and skin", "Bones", "Soft tissues", "Second look after the first finding"],
      callouts: ["Filename laterality is metadata, not the image."],
    };
  }
  if (bucket === "US") {
    return {
      title: "Ultrasound grayscale-first search",
      summary: "Organ, probe plane, orientation, settings. Morphology and posterior features before Doppler.",
      identify: ["Organ and probe plane", "Gain/depth", "Orthogonal confirmation"],
      checklist: ["Grayscale morphology", "Posterior acoustic features", "Orthogonal view", "Doppler after optimization"],
      callouts: ["Color pixels are not a diagnosis without grayscale context."],
    };
  }
  if (bucket === "PET") {
    return {
      title: "PET/hybrid distribution search",
      summary: "Tracer and timing, whole-body map, CT/MR localization, background comparison, then pitfalls (urine, brown fat, motion, treatment).",
      identify: ["Tracer", "Uptake time", "Physiologic map", "One unexplained focus to localize"],
      checklist: ["Brain, neck, mediastinum, nodes", "Solid organs", "Bowel/urine", "Bones and injection site"],
      callouts: ["Do not count a node until it is localized on CT/MR."],
    };
  }
  if (bucket === "NM_GENERAL") {
    return {
      title: "General nuclear medicine search",
      summary: "Tracer, administered activity, phase/timing, expected biodistribution, dynamic sequence before curves. Think contamination.",
      identify: ["Tracer and time point", "Expected map", "Unexpected focus", "Motion / contamination"],
      checklist: ["Label and time", "Expected organs", "Unexpected foci", "Correlate with the clinical question"],
      callouts: ["HIDA, MAG3, V/Q, bone, and thyroid each have time-dependent maps — do not mix them."],
    };
  }
  if (bucket === "CARDIAC_NM") {
    return {
      title: "Cardiac SPECT/PET search",
      summary: "Quality first: motion, attenuation, extracardiac activity, axis. Then stress/rest perfusion, thickening, volumes/EF.",
      identify: ["Protocol", "Quality flags", "Defect reversibility", "Ancillary signs (TID)"],
      checklist: ["Motion", "Attenuation pattern vs true defect", "Extracardiac activity", "Gating / EF if available"],
      callouts: ["Inferior wall: check AC vs non-AC before ischemia."],
    };
  }
  if (bucket === "THERAPY") {
    return {
      title: "Authored therapy simulation",
      summary: "Not a patient administration. Indication, written directive, agent/activity, labs/prep, critical organs, release, follow-up.",
      identify: ["Simulation badge", "Agent", "Identity / pregnancy", "Release logic"],
      checklist: ["Written directive", "Identity", "Pregnancy", "Activity", "Release documentation"],
      callouts: ["Look up current NRC / agreement-state text. This product does not replace the license."],
    };
  }
  if (bucket === "BREAST_FLUORO") {
    return {
      title: "Breast / fluoro search",
      summary: "For mammography: triangulation and priors. For fluoro: the run, not only last-image-hold.",
      identify: ["View / laterality", "Priors if claimed", "Technique adequacy"],
      checklist: ["All views", "Compare density/calcifications systematically", "Do not satisfy search on one cluster"],
      callouts: ["No clamp/device photo is a mammogram. If the image is unmounted, say so."],
    };
  }
  return {
    title: "Systematic readout",
    summary: `Modality ${bucket}, region ${region}. Observations, focused differential, next step — without inventing pathology.`,
    identify: ["Modality / technique", "Orientation", "Findings", "Next step"],
    checklist: ["Read the pixels", "Ignore the series title as diagnosis", "Commit before overlays"],
    callouts: ["Educational use only."],
  };
}
