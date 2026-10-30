/**
 * One teaching-case record for Board Studio widgets.
 * Rows are generated in the browser. They are not verified encounters,
 * ACGME logs, or a patient's pixels. A plate is shown only when the file
 * is an allow-listed example of the same study type.
 */
(function (root) {
  var ALLOW = {
    pyp: ["pyp-1.jpg"],
    mpi: ["cardiac-ac.jpg", "cardio-393.jpg", "cardio-394.jpg"],
    "pet-fdg": ["nm-fdg-mip.jpg", "nm-fdg-onc.jpg", "nm-fdg-wb.jpg", "nm-fdg-cocktail.jpg", "nm-petmri-brain.jpg", "pet-mip-1.jpg", "pet-mip-2.jpg", "pet-mip-3.jpg", "pet-ax-1.jpg", "pet-ax-2.jpg", "pet-ax-3.jpg", "pet-fuse-1.jpg", "pet-fuse-2.jpg", "fdg-lung.jpg", "fdg-liver.jpg", "fdg-neck.jpg", "fdg-mesentery.jpg", "pet-axial.jpg", "pet-axial2.jpg", "pet-mip-body.jpg", "pet-mip-nodule.jpg", "pet-slice.jpg", "pet-slice-b.jpg", "case-pet-1.jpg", "case-pet-2.jpg", "case-pet-3.jpg"],
    "pet-psma": ["nm-psma.jpg", "nm-psma-wb.jpg", "nm-psma-met.jpg", "nm-psma-fuse.jpg", "psma-pair-1.jpg", "psma-pelvis.jpg", "psma-prostate.jpg", "psma-torso.jpg"],
    "pet-dota": ["nm-dotatate.jpg", "dota-1.jpg", "octreoscan.jpg", "octreoscan2.jpg"],
    bone: ["bone-scan-wb.jpg", "nm-bone-4view.jpg", "nm-bone-met.jpg", "bone-1.jpg", "bone-2.jpg", "bone-3.jpg", "bone-4.jpg", "bone-ant.jpg", "bone-feet.jpg", "bone-femur.jpg", "bone-hip.jpg", "bone-hmdp.jpg", "bone-pelvis.jpg", "bone-wb.jpg"],
    thyroid: ["thyroid-scan-i123.jpg", "thyroid-patterns.jpg", "nm-i123-i131.jpg", "thyroid-graves.jpg", "thyroid-scan.jpg", "iodine-1.jpg"],
    vq: ["nm-vq1.jpg", "nm-vq2.jpg", "nm-vq-spect.jpg", "vq-1.jpg", "vq-2.jpg"],
    hida: ["nm-hida.jpg"],
    renal: ["nm-mag3.jpg", "mag3.jpg", "dmsa.jpg"],
    us: ["case-us-1.jpg", "case-us-2.jpg", "breast-us-mass.jpg"],
    mammo: ["mammo-3.jpg", "mammo-4.jpg"],
    mri: ["mri-brain-t2.jpg", "case-mr-1.jpg", "case-mr-2.jpg", "case-mr-3.jpg", "mr-1.jpg", "mr-2.jpg", "mr-3.jpg", "mr-4.jpg", "mri-knee-2.jpg", "mri-knee-3.jpg", "mri-knee-seq.jpg", "mrcp-choledocholithiasis.jpg", "ct-396.jpg", "breast-mri-malign.jpg", "breast-mri-occult.jpg"],
    ct: ["case-ct-1.jpg", "case-ct-2.jpg", "case-ct-3.jpg", "ct-chest-2.jpg", "ct-chest-3.jpg", "ct-body-1.jpg", "ct-body-2.jpg", "ct-body-3.jpg", "ct-subdural.jpg", "ct-neck-ax.jpg", "ct-neck-cor.jpg"],
    radiograph: ["xr-1.jpg", "xr-2.jpg", "patella-xr.jpg", "calcaneus-xr.jpg"]
  };

  var TRACER = {
    muga: "Tc-99m labeled red cells",
    pyp: "Tc-99m PYP",
    mpi: "Tc-99m sestamibi or tetrofosmin",
    "pet-fdg": "F-18 FDG",
    "pet-psma": "PSMA ligand",
    "pet-dota": "Ga-68 DOTATATE",
    bone: "Tc-99m MDP",
    thyroid: "I-123 or Tc-99m pertechnetate",
    vq: "Tc-99m MAA and a ventilation agent",
    hida: "Tc-99m mebrofenin",
    renal: "Tc-99m MAG3 or DMSA"
  };

  var STATUS = {
    "Q-READY": "Demo queue flag. Not a human QA sign-off.",
    READ: "Demo label. Not a signed report.",
    PENDING: "Not opened in this demo. Not a worklist status from a PACS."
  };

  function studyKind(finding, categoryId) {
    var f = String(finding || "").toLowerCase();
    var cat = String(categoryId || "").toLowerCase();
    if (/\bmuga\b|gated blood|equilibrium radionuclide|\berna\b/.test(f)) return "muga";
    if (/\bpyp\b|pyrophosphate/.test(f)) return "pyp";
    if (/parathyroid/.test(f)) return "other";
    if (/\bmri\b|\bmra\b|mrcp|choledocholithiasis/.test(f)) return "mri";
    if (/\becho\b/.test(f)) return "other";
    if (/sestamibi|tetrofosmin|myocardial perfusion|\bmibi\b|stress pet myocardial|thallium viability/.test(f)) return "mpi";
    if (/\bv\/?q\b|ventilation[- ]perfusion|ventilation study/.test(f)) return "vq";
    if (/hida|hepatobiliary iminodiacetic/.test(f)) return "hida";
    if (/mag3|dmsa|renogram|captopril/.test(f)) return "renal";
    if (/thyroid scan|thyroid uptake|graves|pertechnetate|\bi-123\b|\bi-131\b|radioiodine/.test(f)) return "thyroid";
    if (/\bpsma\b/.test(f)) return "pet-psma";
    if (/dotatate|octreotide|krenning/.test(f)) return "pet-dota";
    if (cat === "pethybrid" || cat === "pethyb" || /\bpet\b|\bfdg\b|\bsuv\b|deauville/.test(f)) return "pet-fdg";
    if (/bone scan|three-phase bone|\bmdp\b|ra-223/.test(f)) return "bone";
    if (cat === "mammo" || (/mammogram|tomosynthesis|\bbi-rads\b/.test(f) && !/\bmri\b|\bultrasound\b/.test(f))) return "mammo";
    if (cat === "us" || (/\bultrasound\b|\bduplex\b|\bdoppler\b/.test(f) && !/\bct\b|\bmri\b/.test(f))) return "us";
    if (cat === "rad" || /radiograph/.test(f) || /bronchiolitis|steeple sign|\bcroup\b/.test(f)) return "radiograph";
    if (cat === "ct" || ((/\bct\b|\bcta\b/.test(f)) && !(/\bpet\b|\bfdg\b/.test(f)))) return "ct";
    if (cat === "qready") return "pet-fdg";
    if (cat === "mri") return "mri";
    return "other";
  }

  function reportsSuv(kind) {
    return kind === "pet-fdg" || kind === "pet-psma" || kind === "pet-dota";
  }

  function statedSuv(finding) {
    var m = String(finding || "").match(/\bSUV\s*(\d+(?:\.\d+)?)/i);
    return m ? m[1] : null;
  }

  function fileName(file) {
    return String(file || "").toLowerCase().split("?")[0].split("/").pop();
  }

  function regionOk(kind, finding, name) {
    var f = String(finding || "").toLowerCase();
    if (kind === "radiograph") {
      if (/knee|patella/.test(f)) return name === "patella-xr.jpg";
      if (/calcaneus|os calcis/.test(f)) return name === "calcaneus-xr.jpg";
      if (/chest|lung|rib|pneumo|portable|\bcxr\b/.test(f) && !/elbow|knee|ankle|wrist|foot|pelvis|hip|skull|spine|abdominal|calcaneus/.test(f)) {
        return name === "xr-1.jpg" || name === "xr-2.jpg";
      }
      return false;
    }
    if (kind === "ct") {
      if (/larynx|soft tissue neck|deep space|subglottic/.test(f) && !/femoral/.test(f)) return /ct-neck/.test(name);
      if (/facial|sinus|odontoid|skull base|circle of willis|\bcta\b|aneurysm/.test(f)) return false;
      if (/head|brain|subdural|intracranial|convexity|subarachnoid/.test(f)) return name === "ct-subdural.jpg";
      if (/chest|lung|pulmonary|mediastin|\bpe\b|aort/.test(f)) return /ct-chest|case-ct-3/.test(name);
      if (/abdomen|liver|kidney|renal|pancrea|bowel|spleen|adrenal|pelvis/.test(f)) return /ct-body|case-ct-1|case-ct-2/.test(name);
      return false;
    }
    if (kind === "mri") {
      if (/knee|menisc|\bacl\b/.test(f)) return /mri-knee|case-mr-2|^mr-2\.jpg$|^mr-3\.jpg$/.test(name);
      if (/breast/.test(f)) return /breast-mri/.test(name);
      if (/cardiac|myocard|myocarditis/.test(f)) return name === "ct-396.jpg";
      if (/brain|vertex|skull|pituit|orbit/.test(f) && !/breast/.test(f)) return /mri-brain|^mr-1\.jpg$|case-mr-1|case-mr-3/.test(name);
      if (/mrcp|choledocho|biliary/.test(f)) return /mrcp/.test(name);
      if (/spine|lumbar|disc/.test(f)) return name === "mr-4.jpg";
      return false;
    }
    if (kind === "us") {
      if (/breast/.test(f)) return name === "breast-us-mass.jpg";
      if (/obstetric|nuchal|biometry|placenta|fetal|fetus|anatomy survey/.test(f)) return name === "case-us-1.jpg";
      if (/gall|cholecyst|biliary/.test(f)) return name === "case-us-2.jpg";
      return false;
    }
    if (kind === "mammo") return name === "mammo-3.jpg" || name === "mammo-4.jpg";
    if (kind === "pet-fdg") {
      if (/brain|skull|pituit|scalp|temporoparietal/.test(f) && !/node|neck|thyroid|chest|lung/.test(f)) return name === "nm-petmri-brain.jpg";
      return name !== "nm-petmri-brain.jpg";
    }
    return true;
  }

  function fileFits(kind, finding, file) {
    if (kind === "muga" || kind === "other" || !kind) return false;
    var name = fileName(file);
    if (kind === "pyp") return name === "pyp-1.jpg";
    var list = ALLOW[kind] || [];
    if (list.indexOf(name) < 0) return false;
    if (/pyp/.test(name) && kind !== "pyp") return false;
    return regionOk(kind, finding, name);
  }

  var IN_ONE = {
    "pyp-1.jpg": 1, "pet-mip-1.jpg": 1, "pet-mip-2.jpg": 1, "pet-mip-3.jpg": 1,
    "pet-ax-1.jpg": 1, "pet-ax-2.jpg": 1, "pet-ax-3.jpg": 1, "pet-fuse-1.jpg": 1, "pet-fuse-2.jpg": 1,
    "psma-pair-1.jpg": 1, "dota-1.jpg": 1, "bone-1.jpg": 1, "bone-2.jpg": 1, "bone-3.jpg": 1, "bone-4.jpg": 1,
    "iodine-1.jpg": 1, "vq-1.jpg": 1, "vq-2.jpg": 1, "mammo-3.jpg": 1, "mammo-4.jpg": 1,
    "mr-1.jpg": 1, "mr-2.jpg": 1, "mr-3.jpg": 1, "mr-4.jpg": 1,
    "xr-1.jpg": 1, "xr-2.jpg": 1, "ct-chest-2.jpg": 1, "ct-chest-3.jpg": 1,
    "ct-body-1.jpg": 1, "ct-body-2.jpg": 1, "ct-body-3.jpg": 1
  };
  var IN_STEM = {
    "fdg-lung.jpg": 1, "fdg-liver.jpg": 1, "fdg-neck.jpg": 1, "fdg-mesentery.jpg": 1,
    "pet-axial.jpg": 1, "pet-axial2.jpg": 1, "pet-mip-body.jpg": 1, "pet-mip-nodule.jpg": 1,
    "pet-slice.jpg": 1, "pet-slice-b.jpg": 1, "psma-pelvis.jpg": 1, "psma-prostate.jpg": 1, "psma-torso.jpg": 1,
    "octreoscan.jpg": 1, "octreoscan2.jpg": 1, "bone-ant.jpg": 1, "bone-feet.jpg": 1, "bone-femur.jpg": 1,
    "bone-hip.jpg": 1, "bone-hmdp.jpg": 1, "bone-pelvis.jpg": 1, "bone-wb.jpg": 1,
    "thyroid-graves.jpg": 1, "thyroid-scan.jpg": 1, "mag3.jpg": 1, "dmsa.jpg": 1,
    "mri-knee-2.jpg": 1, "mri-knee-3.jpg": 1, "mri-knee-seq.jpg": 1,
    "ct-subdural.jpg": 1, "patella-xr.jpg": 1, "calcaneus-xr.jpg": 1
  };
  function locate(name) {
    var base = fileName(name);
    if (String(name).indexOf("/") >= 0) return name;
    if (IN_ONE[base]) return "one/" + base;
    if (IN_STEM[base]) return "stem/" + base;
    return base;
  }

  function defaultPlate(kind, finding) {
    var f = String(finding || "").toLowerCase();
    if (kind === "pyp") return "nm-pyp.jpg";
    if (kind === "mpi") return "cardiac-ac.jpg";
    if (kind === "pet-fdg") return /brain|vertex|skull|pituit/.test(f) ? "nm-petmri-brain.jpg" : "nm-fdg-mip.jpg";
    if (kind === "pet-psma") return "nm-psma.jpg";
    if (kind === "pet-dota") return "nm-dotatate.jpg";
    if (kind === "bone") return "bone-scan-wb.jpg";
    if (kind === "thyroid") return "thyroid-scan-i123.jpg";
    if (kind === "vq") return "nm-vq1.jpg";
    if (kind === "hida") return "nm-hida.jpg";
    if (kind === "renal") return "nm-mag3.jpg";
    if (kind === "us") return /gall|cholecyst|hepatic|liver|hida/.test(f) ? "case-us-2.jpg" : "case-us-1.jpg";
    if (kind === "mammo") return "breast-calcs.jpg";
    if (kind === "mri") {
      if (/knee|menisc|\bacl\b|patella/.test(f)) return "stem/mri-knee-2.jpg";
      if (/cardiac|myocard|myocarditis/.test(f)) return "ct-396.jpg";
      if (/brain|vertex|skull|pituit|orbit/.test(f)) return "mri-brain-t2.jpg";
      if (/mrcp|choledocho/.test(f)) return "mrcp-choledocholithiasis.jpg";
      return "";
    }
    if (kind === "ct") {
      if (/larynx|soft tissue neck|deep space|subglottic/.test(f) && !/femoral/.test(f)) return "ct-neck-ax.jpg";
      if (/head|brain|subdural|intracranial|convexity/.test(f)) return "stem/ct-subdural.jpg";
      if (/chest|lung|pulmonary|mediastin|\bpe\b/.test(f)) return "case-ct-3.jpg";
      if (/abdomen|liver|kidney|pancrea|bowel|spleen|adrenal/.test(f)) return "case-ct-1.jpg";
      return "";
    }
    if (kind === "radiograph") {
      if (/patella|knee/.test(f)) return "stem/patella-xr.jpg";
      if (/calcaneus/.test(f)) return "stem/calcaneus-xr.jpg";
      if (/chest|lung|rib|pneumo|portable|cxr/.test(f)) return "case-xr-3.jpg";
      return "";
    }
    return "";
  }

  function plateFor(finding, categoryId, salt) {
    var kind = studyKind(finding, categoryId);
    var own = root.STEM_PLATE && root.STEM_PLATE[finding];
    if (own && fileFits(kind, finding, own)) return own;
    var list = (ALLOW[kind] || []).filter(function (name) {
      return fileFits(kind, finding, name);
    });
    if (!list.length) return "";
    return locate(list[Math.abs(Number(salt) || 0) % list.length]);
  }

  function publicQuery(text) {
    return String(text || "")
      .replace(/^\d{1,3}\s*[mf]\b\s*/i, "")
      .replace(/\b(mrn|accession|ssn|dob)\b[:\s-]*[a-z0-9-]*/gi, "")
      .replace(/\bRR-\d{4}-\d+\b/gi, "")
      .replace(/\bMRN\d+\b/gi, "")
      .replace(/\s+/g, " ")
      .trim()
      .slice(0, 180);
  }

  function modalityLabel(kind) {
    return ({
      muga: "MUGA",
      pyp: "PYP",
      mpi: "MPI",
      "pet-fdg": "FDG PET",
      "pet-psma": "PSMA PET",
      "pet-dota": "DOTATATE PET",
      bone: "Bone scan",
      thyroid: "Thyroid scan",
      vq: "V/Q",
      hida: "HIDA",
      renal: "Renal scan",
      ct: "CT",
      mri: "MRI",
      us: "Ultrasound",
      mammo: "Mammography",
      radiograph: "Radiograph"
    })[kind] || "Teaching case";
  }

  function buildDossier(row) {
    var finding = row && row.finding || "";
    var kind = (row && row.kind) || studyKind(finding, row && row.categoryId);
    var plate = row && row.plate ? String(row.plate) : plateFor(finding, row && row.categoryId);
    var matched = !!(plate && fileFits(kind, finding, plate));
    var suv = reportsSuv(kind) ? statedSuv(finding) : null;
    return {
      id: (row && (row.accession || row.studyKey)) || "",
      synthetic: true,
      kind: kind,
      modalityLabel: modalityLabel(kind),
      tracer: TRACER[kind] || null,
      region: (row && row.stationName) || "",
      stem: finding,
      suv: suv,
      plate: matched ? plate : "",
      imageRole: matched ? "teaching-plate" : "none",
      imageNote: matched
        ? "Teaching plate for this study type. One static frame, not a diagnostic DICOM series."
        : "No matched case image. Nothing on file is this study type.",
      frameCount: matched ? 1 : 0,
      stackLabel: "Not a DICOM stack",
      status: (row && row.status) || "",
      statusNote: STATUS[row && row.status] || "Demo status. Not a signed report.",
      acgmeNote: "Demo code. Not an ACGME case log entry.",
      priorityNote: (row && row.priority) === "STAT" ? "Demo priority flag. Not a clinical STAT order." : "Demo routine flag."
    };
  }

  function attach(row) {
    var d = buildDossier(row);
    row.kind = d.kind;
    row.plate = d.plate;
    row.suv = d.suv;
    row.synthetic = true;
    row.mrn = "";
    row.dossier = d;
    row.modality = d.modalityLabel;
    return row;
  }

  root.SharedCase = {
    studyKind: studyKind,
    reportsSuv: reportsSuv,
    statedSuv: statedSuv,
    fileFits: fileFits,
    plateFor: plateFor,
    publicQuery: publicQuery,
    modalityLabel: modalityLabel,
    buildDossier: buildDossier,
    attach: attach,
    STATUS: STATUS
  };
})(typeof window !== "undefined" ? window : globalThis);
