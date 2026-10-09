(function addResidencyMap(){
  if (COURSE.modules.some(m => m.track === "res")) return;
  const base = { track: "res", atlasKey: "nuclear" };
  const mod = (id, num, title, time, weight, lessons, quiz) => Object.assign({}, base, { id, num, title, time, weight, lessons, quiz });
  COURSE.modules.push(
    mod("res-year", "R1", "You start the year", "22 min", "Orientation", [
      {
        title: "This is the year, not an application",
        chips: ["On service", "Not a match", "Your log"],
        pearls: ["You are practicing the work, not holding the job.", "If a package insert disagrees with this lecture, the insert wins."],
        audio: [
          "Treat this section as the year. You have a list, a hot lab, a readout, and a conference. No school is named, and nothing here appoints you to a residency.",
          "Two shapes sit underneath the year. In one department you rotate through general nuclear medicine, PET, cardiology, and therapy, with a molecular imaging track inside diagnostic radiology. In the joint shape the same work is spread across adult hospitals and a children's hospital, and you still own one list.",
          "The public record, not a hospital brochure, sets the floor. A combined diagnostic radiology and nuclear medicine pathway published by the accreditation council is 60 months after a prerequisite year: 48 months of diagnostic radiology, including 4 months of nuclear radiology and 3 months of breast imaging, plus 12 further months of nuclear medicine. That nuclear medicine time must include the Nuclear Regulatory Commission training for unsealed therapy under 10 CFR 35.300.",
          "The American Board of Nuclear Medicine, for physicians coming through another accredited program, publishes case floors you will meet on this year: 100 supervised cardiac stress tests, 100 pediatric nuclear medicine studies, and at least 35 radiotherapy cases, not counting yttrium-90 microspheres. You will learn what those numbers feel like on service."
        ]
      },
      {
        title: "A weekday on service",
        chips: ["List", "Hot lab", "Readout", "Board"],
        pearls: ["You see the patient before you see the pixels.", "A conference without a question is a slideshow."],
        audio: [
          "You arrive before the first injection. The list is already up: add-on bone scan, a Lasix renogram, two PET slots, a stress test you must stand at, and a therapy consult that is not yet cleared.",
          "You check the hot lab before you interpret. Is the dose the one that was ordered? Is the pregnancy test on the therapy chart? Is the camera peaked? A beautiful image from the wrong tracer is a wrong study.",
          "At readout you get one minute. Name the tracer, the clinical question, the finding, and what you want done next. If you cannot say the question, you are describing pixels.",
          "Afternoon conference is a case you did not read. You still have to commit. The habit is: pattern, trap, next step. That is the whole year, repeated until it is dull."
        ]
      }
    ], [
      { q: "The published combined diagnostic radiology and nuclear medicine length, after the prerequisite year, is:", choices: ["12 months total", "60 months, with 48 of them diagnostic radiology", "A weekend course", "Three months of PET only"], a: 1, why: "The accreditation council's combined pathway is 60 months after the prerequisite year, including 48 months of diagnostic radiology." },
      { q: "On the published ABNM pathway for physicians from another accredited program, supervised cardiac stress tests required are:", choices: ["10", "100, and you must supervise the stress, not only read the images", "None", "Only MUGA"], a: 1, why: "The board asks for 100 supervised exercise or pharmacologic stress tests, not image review alone." }
    ]),
    mod("res-general", "R2", "General nuclear medicine", "34 min", "Months 1–4", [
      {
        title: "Bone and infection, your first list",
        chips: ["Three-phase", "Superscan", "WBC"],
        visual: "threephase",
        pearls: ["Cellulitis is flow and blood pool. Osteomyelitis stays in bone on the delays.", "A superscan is faint or absent kidneys, not just a dark skeleton."],
        audio: [
          "Your first month is the general list. A three-phase bone scan is how you separate cellulitis from osteomyelitis. Flow and blood pool light up in both. Delayed cortical uptake that matches the pain is osteomyelitis. Uptake only in soft tissue is not.",
          "A whole-body bone scan for cancer is a map of osteoblastic turnover. A superscan from diffuse metastases shows intense axial skeleton and faint or absent kidneys. Flare after treatment can look worse before it looks better. Do not call progression on one scan without the dates.",
          "Infection imaging is a choice of tracer. Tagged white cells go to neutrophils. Gallium is slower and also sees some tumors and inflammation. FDG is sensitive and not specific. You say which one was used before you say infection.",
          "At readout today you will be asked the phase. If you only looked at the delays, you did not do the study."
        ]
      },
      {
        title: "Thyroid and parathyroid",
        chips: ["I-123", "Graves", "Cold nodule", "Sestamibi"],
        visual: "thyroid",
        pearls: ["Diffuse uptake with a low TSH is Graves until proved otherwise.", "A hot nodule on sestamibi that keeps the tracer is the parathyroid problem, not the thyroid."],
        audio: [
          "Thyroid uptake and scan answer a different question from ultrasound. Ultrasound sees a nodule. The scan sees function. Diffuse trapping with a suppressed TSH is Graves disease. A single hot nodule with suppression of the rest of the gland is a toxic adenoma. A cold nodule is not cancer until tissue says so, but it is not something you treat with iodine as if it were hot.",
          "Iodine-123 is the imaging iodine. Technetium pertechnetate is trapped and not organified, so it can disagree with iodine. Know which one you injected.",
          "Parathyroid sestamibi is a subtraction or a dual-time study. Thyroid washes out. A parathyroid adenoma holds sestamibi. SPECT/CT is how you tell a descended adenoma from a thyroid nodule and how you find one in the mediastinum.",
          "You do not recommend surgery from a planar guess. You recommend it from a focus that stays and a surgeon who knows which side."
        ]
      },
      {
        title: "Renal, biliary, lung, and gut",
        chips: ["MAG3", "HIDA", "V/Q", "Meckel"],
        visual: "renogram",
        pearls: ["Dilation is not obstruction. Obstruction fails to clear after Lasix.", "Nonvisualization of the gallbladder with a normal liver and bowel is the cholecystitis pattern."],
        audio: [
          "A MAG3 renogram with Lasix separates a baggy pelvis from a blocked kidney. You watch the curve, not a single picture. Activity that stays in the pelvis and will not wash after diuretic, with a falling kidney that cannot empty, is obstruction. A kidney that never took the tracer up is not a Lasix problem. That is a blood-flow or function problem.",
          "HIDA: if the liver lights, the bowel eventually lights, and the gallbladder never does, in the right clinical setting, that is acute cholecystitis. Morphine and delayed views are tools when the gallbladder is slow, not when you already have a rim sign and a sick patient.",
          "Lung scintigraphy is probability language married to the chest radiograph. Matched defects are usually not emboli. A perfusion defect with a normal radiograph and a preserved ventilation is the classic mismatch. You still say the words the referring service can use.",
          "GI bleed scans localize only while the patient is bleeding. Meckel scans look for ectopic gastric mucosa. Gastric emptying is a curve and a meal, not a vibe. Name the meal or do not quote a number."
        ]
      }
    ], [
      { q: "On a three-phase bone scan, osteomyelitis is supported by:", choices: ["Blood-pool activity only", "Delayed cortical uptake in the painful bone", "A normal delay and a hot flow", "Uptake in the opposite growth plate of a child"], a: 1, why: "Flow and pool can be cellulitis. Delayed bone uptake at the site is the osteomyelitis finding." },
      { q: "A Lasix renogram shows obstruction when:", choices: ["The pelvis is large but empties promptly", "Activity remains and fails to clear after diuretic", "Both kidneys are photopenic at once", "The bladder is full"], a: 1, why: "Dilation that empties is not obstruction. Failure to clear after Lasix is." }
    ]),
    mod("res-pet", "R3", "PET/CT service", "30 min", "Months 5–7", [
      {
        title: "An FDG day",
        chips: ["Prep", "Brown fat", "Deauville"],
        visual: "deauville",
        pearls: ["Insulin and a recent meal can make a false-negative tumor scan.", "Brown fat is symmetric, in the neck and supraclavicular fat, and it is not lymphoma."],
        audio: [
          "You own the PET list. FDG is a sugar. If the patient ate, or took insulin and drove the tracer into muscle, the tumor may be quiet and the study is not interpretable. You learn to cancel before you inject, not after.",
          "Physiologic traps you will call wrong once and then never again: brain, kidneys and ureters, bowel, vocal cords if they talked, muscle if they exercised, and brown fat in the neck. Brown fat is fat on the CT, symmetric, and not a node.",
          "Lymphoma response on FDG uses a five-point scale against the mediastinum and the liver. You compare the residual site to those two references. You do not invent a sixth point.",
          "A lung nodule that is not FDG avid is not automatically benign, and an avid nodule is not automatically cancer. You put the CT morphology in the same sentence as the uptake."
        ]
      },
      {
        title: "PSMA and DOTATATE days",
        chips: ["PSMA", "DOTATATE", "Not FDG"],
        visual: "psma",
        pearls: ["PSMA in salivary glands and kidneys is the drug working, not disease.", "DOTATATE sees the receptor. FDG sees the sugar. They answer different questions."],
        audio: [
          "PSMA PET is for prostate cancer that expresses the antigen. You will see intense salivary glands, kidneys, ureters, and small bowel. That is normal. Disease is the focus in a node, a bone, or a prostate bed that should not be that bright, read against the CT.",
          "A sclerotic pelvic bone lesion with intense PSMA is the pattern you must not miss. A sclerotic lesion with no PSMA, in a treated patient, may be burned out. You say treated versus new, and you look at the prior.",
          "DOTATATE is a somatostatin-receptor study for neuroendocrine tumors. Liver and bone metastases that are receptor-positive can be quiet on FDG. Do not call a DOTATATE-negative, FDG-positive high-grade tumor a failed scan. It may be the biology.",
          "You do not recommend a lutetium therapy from a vague impression. You recommend it when the diagnostic scan shows enough target above background, and the labs allow it. That sentence is the bridge to the therapy service."
        ]
      },
      {
        title: "Brain PET",
        chips: ["Alzheimer", "FTD", "Seizure"],
        visual: "brain",
        pearls: ["Alzheimer FDG loss is posterior. Frontotemporal loss is anterior.", "Ictal injection has to be early or you map the spread, not the start."],
        audio: [
          "FDG brain PET is a metabolism map. Alzheimer disease, in the classic teaching pattern, is symmetric loss in the temporoparietal cortex and the posterior cingulate, with the sensorimotor strip and the occipital lobe relatively spared.",
          "Frontotemporal dementia takes the frontal lobes and the anterior temporal lobes. If you call every quiet brain Alzheimer disease, you will be wrong on the frontal cases.",
          "Ictal SPECT is a different test. You inject a lipophilic tracer as close to seizure onset as you can, then compare to an interictal scan. A late injection shows where the seizure spread, which can send a surgeon to the wrong lobe.",
          "You are not a neurologist on this rotation. You are the person who will not let a pretty color scale replace the pattern and the injection time."
        ]
      }
    ], [
      { q: "Symmetric neck uptake in fat on the CT, on an FDG PET, is most often:", choices: ["New lymphoma", "Brown fat", "A saliva leak", "A missed dose"], a: 1, why: "Brown fat is symmetric, lives in the neck and supraclavicular fat, and is a classic false positive." },
      { q: "Classic FDG-PET in Alzheimer disease shows hypometabolism that is:", choices: ["Only in the cerebellum", "Temporoparietal and posterior cingulate", "Frontal and anterior temporal", "A single hot focus in the pons"], a: 1, why: "The posterior pattern is the Alzheimer teaching image. Frontal and anterior temporal loss is the frontotemporal pattern." }
    ]),
    mod("res-cardio", "R4", "Nuclear cardiology", "28 min", "Cardiology block", [
      {
        title: "You stand at the stress test",
        chips: ["100 stress tests", "You supervise", "Not just the images"],
        visual: "polar",
        pearls: ["The published floor is 100 supervised stress tests.", "A normal scan does not erase chest pain in the waiting room."],
        audio: [
          "The published board pathway does not let you only read the pictures. You supervise 100 exercise or pharmacologic stress tests. That means you are there for the blood pressure, the rhythm, and the decision to stop.",
          "You learn the stop rules before you learn the color map. Falling pressure, sustained ventricular arrhythmia, severe pain, and a technically useless injection are reasons to stop. A pretty polar plot tomorrow does not fix a bad test today.",
          "Pharmacologic stress is for the patient who cannot walk. You still know the drug, the antidote, and the caffeine rule. A patient who had coffee is not a regadenoson candidate you shrug through.",
          "After the test you read. During the test you are the physician in the room. Both count, and only one of them is the 100."
        ]
      },
      {
        title: "Perfusion, viability, and the MUGA",
        chips: ["Reversible", "Fixed", "TID", "LVEF"],
        visual: "polar",
        pearls: ["Reversible is ischemia. Fixed is scar, until a viability test says otherwise.", "Transient ischemic dilation is a warning, not a decoration."],
        audio: [
          "A perfusion defect that is present at stress and gone at rest is ischemia. A defect that is present on both is scar or hibernating muscle. You do not call hibernation without a viability study or a wall-motion reason.",
          "Transient ischemic dilation, a stress cavity that looks larger than the rest cavity, is a marker of severe and extensive ischemia. You say it out loud. You do not bury it in the technique paragraph.",
          "Viability is a different question from perfusion. FDG in a region that does not perfuse means living muscle that is underfed. No FDG and no perfusion is scar. The surgeon asks this before a bypass, not after.",
          "A MUGA is a number. You gate the blood pool and you report the ejection fraction with the same method each time. A falling number on chemotherapy is the point of the test. A different contouring habit between months is how you invent a change."
        ]
      },
      {
        title: "Amyloid on the nuclear list",
        chips: ["PYP", "Grade 3", "ATTR"],
        visual: "polar",
        pearls: ["Grade 3 means the heart is hotter than the ribs, and the blood pool is gone.", "You still need the light chains. A PYP scan does not rule out AL amyloid by itself."],
        audio: [
          "Technetium pyrophosphate is on your cardiology list now. You grade the heart against the ribs. Grade 3, heart clearly hotter than rib, with the blood pool cleared, is the teaching pattern for transthyretin cardiac amyloid.",
          "You do not stop at the grade. Light-chain amyloid can be a different disease with a different treatment. A positive pyrophosphate scan in a patient who never had serum light chains checked is an incomplete consult.",
          "Planar images can lie because of the blood pool. SPECT, or SPECT/CT, is how you prove the counts are in the myocardium.",
          "This is the same heart you will later see on cardiac MRI as diffuse late gadolinium. Learn both patterns so tumor board and the amyloid clinic hear one story."
        ]
      }
    ], [
      { q: "The 100 cardiac studies on the published pathway require you to:", choices: ["Only sign the report", "Supervise the stress test itself", "Read PET only", "Watch a recorded lecture"], a: 1, why: "The board text says supervision of exercise or pharmacologic stress, not image review alone." },
      { q: "A stress perfusion defect that fills in at rest is:", choices: ["Scar", "Ischemia", "Attenuation you ignore", "Amyloid"], a: 1, why: "Reversible is ischemia. Fixed is scar until viability says otherwise." }
    ]),
    mod("res-thera", "R5", "Theranostics service", "36 min", "Therapy months", [
      {
        title: "The written directive and the 35",
        chips: ["35 cases", "I-131", "Two parenteral agents"],
        visual: "psma",
        pearls: ["Thirty-five therapies, and yttrium-90 microspheres do not count toward that floor.", "Iodine needs both a benign group and a cancer group."],
        audio: [
          "Therapy month is where you stop being a reader and become the physician who orders radioactivity into a person. The published floor is at least 35 radiotherapy cases, and yttrium-90 microspheres are excluded from that count.",
          "Of those, iodine-131 sodium iodide is at least 10 cases: at least 5 for cancer and 5 for benign disease. At least 3 of the iodine cases are at or below 33 millicuries, and at least 3 are above 33 millicuries. Low-dose hyperthyroidism and high-dose cancer are both your job.",
          "Parenteral therapies that need a written directive are at least 10 cases, and at least two different radiopharmaceuticals. One drug given ten times does not meet the spirit of that line.",
          "Every case starts with a written directive, a pregnancy test when it applies, and a reason to treat that you can say without the chart in your hand."
        ]
      },
      {
        title: "Iodine, then lutetium",
        chips: ["I-131", "Lu-177 PSMA", "Lu-177 DOTATATE"],
        visual: "thyroid",
        pearls: ["No uptake in the target, no iodine.", "PSMA salivary activity is normal. A metastasis still has to be brighter than background in the place you claim."],
        audio: [
          "Benign iodine is Graves disease or a toxic nodule after you have proved the gland will take it up. Cancer iodine is after surgery, for remnant ablation or for iodine-avid disease. You know the patient's TSH, the low-iodine preparation, and whether they can be isolated. You do not mix the precautions of a 10-millicurie dose with a cancer dose.",
          "Lutetium-177 PSMA is for metastatic castration-resistant prostate cancer that has already shown PSMA on a diagnostic scan. Before the dose you look at marrow, kidneys, and salivary glands. After the dose the post-therapy scan should show the same disease plus physiologic salivary and renal activity.",
          "Lutetium-177 DOTATATE is for neuroendocrine tumors that light up on a somatostatin-receptor scan and are metastatic or cannot be operated. You confirm the receptor study is the right one, you know the last long-acting somatostatin analog date, and you do not treat a tumor that never expressed the target.",
          "If the diagnostic scan and the therapy scan disagree, you stop and you find out why. You do not hope the next cycle fixes a wrong patient."
        ]
      },
      {
        title: "Radium, and the dose you do not give",
        chips: ["Ra-223", "Bone only", "Hold"],
        visual: "psma",
        pearls: ["Radium-223 is an alpha emitter for symptomatic bone metastases.", "Visceral disease is a reason to choose a different plan."],
        audio: [
          "Radium-223 is an alpha particle therapy for prostate cancer that hurts in the bones. It is not a PET tracer and it is not a substitute for PSMA therapy. The patient should have symptomatic bone disease and should not have visceral disease you are ignoring.",
          "You follow the blood counts. An alpha emitter in the marrow is the toxicity. A falling count is a reason to delay, not a reason to encourage.",
          "Hold the dose when the target was never shown, when the pregnancy test is missing, when the labs fail the protocol, or when the patient cannot follow the precautions. A full waiting room is not a reason to treat.",
          "Your note has four lines: the target, the scan that proved it, the organ at risk, and the reason today is safe or not safe. That note is the rotation."
        ]
      }
    ], [
      { q: "On the published ABNM therapy floor, yttrium-90 microspheres:", choices: ["Count double", "Are excluded from the 35", "Replace the iodine cases", "Are the only cases that count"], a: 1, why: "The 35 radiotherapy cases exclude Y-90 microspheres." },
      { q: "Iodine-131 cases on that floor must include:", choices: ["Only cancer", "At least 5 benign and 5 malignant, and both low and higher doses", "Only doses above 100 mCi", "No benign disease"], a: 1, why: "At least 5 malignant and 5 benign, with at least 3 cases at or below 33 mCi and 3 above." }
    ]),
    mod("res-hotlab", "R6", "Hot lab and the children's list", "26 min", "Pharmacy block", [
      {
        title: "Two weeks in the hot lab",
        chips: ["Generator", "Mo breakthrough", "Dose calibrator"],
        visual: "generator",
        pearls: ["You assay the dose you are about to inject.", "Molybdenum breakthrough is a test, not a rumor."],
        audio: [
          "The joint-program shape gives you about two weeks in the radiopharmacy. You are not touring. You receive packages, wipe, assay, and draw.",
          "The molybdenum generator is the heart of general nuclear medicine. Technetium-99m is the daughter you elute. You test for molybdenum breakthrough and for aluminum. A failed test means you do not hand that elution to a patient.",
          "Kit quality control is chromatography, not a guess. Free pertechnetate and colloidal impurity go to the wrong organs and make you misread a study you yourself ruined.",
          "The dose calibrator gets a constancy check. A dose that was never measured is not a dose. You write the numbers down."
        ]
      },
      {
        title: "What 10 CFR 35.300 is asking you to be able to do",
        chips: ["Unsealed therapy", "Safety", "Written directive"],
        visual: "alara",
        pearls: ["Therapy authority is a skill list, not a title.", "Contamination is your problem until you prove it is gone."],
        audio: [
          "The Nuclear Regulatory Commission rule for unsealed therapy is why the year includes handling, not only interpretation. You need the training and experience for medical use of unsealed byproduct material. In practice that means ordering, receiving, administering, and cleaning up.",
          "You can survey a room. You know the difference between a wipe that is background and a wipe that sends you back with a decontamination plan. You know who you call.",
          "Release of a therapy patient is a calculation and an instruction, not a handshake. Iodine patients leave with rules about distance, bathrooms, and sleeping arrangements. You can explain those rules in plain language.",
          "If you have not spilled, surveyed, and documented once under supervision, you are not done with this block."
        ]
      },
      {
        title: "One hundred children",
        chips: ["100 pediatric", "Dose by size", "Not a small adult"],
        visual: "renogram",
        pearls: ["The published floor is 100 pediatric studies.", "A child's physes are hot on bone scan. That is normal."],
        audio: [
          "The same published pathway asks for 100 pediatric nuclear medicine studies. You will not invent adult doses for a toddler. Activity is scaled, and the immobilization plan is part of the order.",
          "On bone scan, growth plates are normally hot. Calling every physis a fracture is how you scare a family. You compare with the other side and with the age.",
          "Renal scarring, diuretic renography, Meckel diverticulum, and jaundice work-ups are the studies that make pediatrics its own list. Biliary atresia is a time-sensitive HIDA question. You do not sit on it.",
          "A children's hospital rotation exists so these are routine for you. One cute case is not the hundred."
        ]
      }
    ], [
      { q: "Molybdenum breakthrough testing is done so that:", choices: ["The image looks sharper on the poster", "You do not administer a contaminated elution", "The child can skip the study", "FDG uptake rises"], a: 1, why: "A failed breakthrough test means that elution does not go into a patient." },
      { q: "The published pediatric floor on that ABNM pathway is:", choices: ["10 studies", "100 pediatric nuclear medicine studies", "Only chest x-rays", "None, if you did adult PET"], a: 1, why: "The pathway lists 100 pediatric nuclear medicine studies." }
    ]),
    mod("res-rooms", "R7", "The other reading rooms", "30 min", "So you can sit at the board", [
      {
        title: "Body, chest, and breast",
        chips: ["HCC", "UIP", "BI-RADS"],
        pearls: ["HCC washes out.", "Honeycombing is subpleural and basal until proved otherwise."],
        audio: [
          "You will sit in tumor board next to people who did not do your residency. You need their patterns well enough to not waste the minute.",
          "In the body room, hepatocellular carcinoma is arterial hyperenhancement and later washout, often with a capsule. A hemangioma fills from bright peripheral puddles and is very bright on T2. A pancreatic cyst that connects to the duct on MRCP is the intraductal papillary mucinous neoplasm pattern. You do not call all three 'a liver lesion.'",
          "In the chest room, usual interstitial pneumonia is subpleural, basal, reticular, with traction bronchiectasis and honeycombing. A flap in the ascending aorta is a type A dissection until the surgeon says otherwise. Pulmonary embolism on CT angiography is a filling defect, and you already know the scintigraphic mismatch from your own service.",
          "Breast is BI-RADS and the next image. Fine linear or pleomorphic calcifications in a ductal line are the ductal carcinoma in situ pattern. A spiculated mass is the invasive mass pattern. You do not invent a BI-RADS number you cannot defend."
        ]
      },
      {
        title: "Brain, bone, emergency, and children",
        chips: ["DWI", "Codman", "Trauma"],
        visual: "brain",
        pearls: ["Bright DWI and dark ADC is cytotoxic edema.", "A Codman triangle is an aggressive periosteal reaction, not a bruise."],
        audio: [
          "Neuroradiology on call: acute infarct is bright on diffusion and dark on the ADC map. Dawson's fingers are ovoid periventricular lesions on sagittal FLAIR, perpendicular to the callososeptal line. A thick irregular ring that crosses the corpus callosum is the glioblastoma teaching image. You will not confuse these three.",
          "Musculoskeletal: osteosarcoma breaks the cortex and lifts the periosteum into a Codman triangle or a sunburst. Chondrosarcoma shows rings and arcs. Rheumatoid arthritis in the hands is symmetric, marginal, and drifts to the ulnar side.",
          "Emergency radiology is the next hour. You say what changes disposition. A therapy patient of yours who falls overnight still gets that read, and you still know your tracer did not cause the bleed.",
          "Pediatric radiology is dose and growth. You already have the nuclear list. Here you learn not to CT everything you were about to understand with ultrasound."
        ]
      },
      {
        title: "What you do not pretend to be",
        chips: ["IR is its own path", "Head and neck is its own seat"],
        pearls: ["You can describe a procedure. You cannot invent privileges.", "Skull base is not 'a little neuro.'"],
        audio: [
          "Independent interventional radiology is its own accredited path: embolization, ablation, drainage, and vascular work. You know when to call them. You do not schedule their cases because you watched one.",
          "Head and neck, where a department offers it, is the skull base, the temporal bone, and the aerodigestive tract. A parathyroid adenoma in the tracheoesophageal groove is where your sestamibi meets their anatomy.",
          "Informatics is a seat too. It is not a month off. You will get that month next, and you will still have a clinical list beside it.",
          "The test of these rooms is tumor board. If you can say the nuclear finding and the cross-sectional finding in one breath, the month worked."
        ]
      }
    ], [
      { q: "Arterial hyperenhancement with later washout in the liver is the classic pattern of:", choices: ["A simple cyst", "Hepatocellular carcinoma", "Brown fat", "A bone superscan"], a: 1, why: "That kinetic pattern is the HCC teaching image." },
      { q: "Independent interventional radiology in this year is:", choices: ["Your privilege after one afternoon", "A separate accredited path you must know when to call", "The same as the hot lab", "Optional reading only"], a: 1, why: "You learn the indications. The accredited interventional path is not a nuclear medicine add-on." }
    ]),
    mod("res-conf", "R8", "Conference and the informatics month", "24 min", "Beside the list", [
      {
        title: "Tumor board in one minute",
        chips: ["Tracer", "Stage", "What changes"],
        pearls: ["One minute, three sentences.", "If the scan will not change the plan, say that too."],
        audio: [
          "You stand up. Sentence one is the tracer and the date. Sentence two is where the disease is, in organs a surgeon understands. Sentence three is whether the finding changes the operation, the drug, or the radiotherapy.",
          "Hybrid images are how you earn the right to be brief. SPECT/CT and PET/CT exist so you stop calling bowel a node and urine a metastasis. PET/MR is the same job with a different attenuation problem. The logo on the scanner is not the finding.",
          "If you do not know, you say what you will check. Inventing a stage is worse than a short silence.",
          "You do this every week of the year. The informatics month does not cancel it."
        ]
      },
      {
        title: "Informatics beside the reading room",
        chips: ["Segment", "Fail out loud", "Govern"],
        pearls: ["A model that cannot fail visibly is not ready.", "Identified images do not leave because the project is interesting."],
        audio: [
          "The blueprint puts a computation month next to the clinic. You are not excused from the list. You are asked to bring one tool to the list and watch it fail.",
          "Pick a segmentation you understand, such as a kidney or a tumor you already contoured by hand. Compare the model to your contour. Write down the case where it includes the ureter or misses the edge.",
          "Radiomics and neural nets are allowed only when they answer a question the clinician already had. A spreadsheet of features with no decision is not a rotation product.",
          "Governance is the exam. Who can see the data, where it is stored, and what you do if a drive walks away. If you cannot answer, the project stops."
        ]
      }
    ], [
      { q: "A tumor-board minute should contain:", choices: ["The scanner brand first", "Tracer, where the disease is, and whether it changes the plan", "Every image you opened", "An apology"], a: 1, why: "Three sentences: tracer and date, sites, and the management consequence." },
      { q: "An informatics tool is ready to sit on the clinical list when:", choices: ["The demo is impressive", "A human can check it and it fails visibly, and the data stay governed", "It uses the word deep learning", "It replaces the readout"], a: 1, why: "Checkable output, visible failure, and governance are the bar." }
    ]),
    mod("res-staff", "R9", "Cases you staff before you leave", "28 min", "The list you must not miss", [
      {
        title: "Six nuclear cases on one afternoon",
        chips: ["PSMA", "PYP", "DOTATATE", "I-131"],
        visual: "psma",
        pearls: ["Physiologic uptake is not a metastasis until you have used the CT.", "Grade 3 pyrophosphate is myocardium over rib, with the blood pool gone."],
        audio: [
          "The last month is a list of cases you are no longer allowed to miss. First: PSMA-avid sclerotic bone and a pelvic node, salivary glands and kidneys also bright. You call the disease and you name the normal organs in the same breath.",
          "Second: DOTATATE-avid liver and bone in a patient with a known neuroendocrine tumor. You do not demand that it also be FDG avid before you believe it.",
          "Third: pyrophosphate, heart hotter than the ribs, blood pool gone, SPECT in the myocardium. You say transthyretin amyloid is the pattern and you ask whether light chains were checked.",
          "Fourth: a post-iodine whole-body scan with neck uptake and a star artifact, plus physiologic gut and bladder. You separate remnant from a metastasis by the CT and the prior, not by panic. Fifth: a superscan. Sixth: a three-phase bone scan that is osteomyelitis and not cellulitis. You staff all six before you go home."
        ]
      },
      {
        title: "Your log",
        chips: ["100 stress", "100 children", "35 therapies"],
        pearls: ["A total without a split hides the gaps.", "Y-90 microspheres do not fill the therapy floor."],
        audio: [
          "You keep a log the way the board will read it. Cardiac stress: the ones you supervised, not the ones you only dictated. Pediatrics: one hundred, with more than a single Meckel scan. Therapy: thirty-five, iodine split into benign and malignant and into doses on both sides of 33 millicuries, plus at least two different parenteral agents.",
          "The high-volume shape of a four-year diagnostic residency, as a study target and not a census, is roughly eighteen to twenty thousand radiographs, twelve to fourteen thousand CTs, four to six thousand MRIs, a few thousand ultrasounds, and twelve hundred to eighteen hundred nuclear medicine and PET studies. Your nuclear year is the small pile that the nuclear boards examine hardest.",
          "A fellowship-shaped extra year adds depth, a few thousand specialized studies, not a second forty thousand. Split your own nuclear pile into FDG, PSMA, DOTATATE, perfusion, lung, bone, and post-therapy images.",
          "If a number here disagrees with the current board or regulator text, the text wins. This log is how you notice the hole before the application does."
        ]
      }
    ], [
      { q: "A PSMA post-therapy or diagnostic pattern you must be able to staff includes intense uptake in disease plus:", choices: ["Only the brain", "Salivary glands and kidneys", "The gallbladder as the sole organ", "Diffuse lung as normal"], a: 1, why: "Salivary and renal activity is physiologic for PSMA agents." },
      { q: "Which studies fill the published therapy floor?", choices: ["Any 35 scans, including Y-90 microspheres", "At least 35 radiotherapy cases excluding Y-90 microspheres, with the iodine split and two parenteral agents", "Only cardiac stress tests", "Only pediatric bone scans"], a: 1, why: "The floor is 35 radiotherapy cases excluding microspheres, with the iodine and parenteral details." }
    ]),
    mod("res-nights", "R10", "Nights with the open libraries", "18 min", "Your case file", [
      {
        title: "Build the list you did not get today",
        chips: ["Radiopaedia", "MedPix", "SNMMI"],
        links: [
          { label: "Radiopaedia", href: "https://radiopaedia.org/" },
          { label: "MedPix", href: "https://medpix.nlm.nih.gov/" },
          { label: "ARRS GoldMiner", href: "https://goldminer.arrs.org/" },
          { label: "Radiology Assistant", href: "https://radiologyassistant.nl/" },
          { label: "SNMMI", href: "https://www.snmmi.org/" }
        ],
        pearls: ["A case without a diagnosis on the back is a screensaver.", "Add the tracer the general bank forgot."],
        audio: [
          "You cannot attend a closed noon conference from this app. You can still do the night's work. Radiopaedia is the stack you scroll. MedPix is the National Library of Medicine case with a history and a checked diagnosis. GoldMiner finds one classic figure in the journals. Radiology Assistant is the search pattern when you do not have one yet.",
          "General radiology banks go thin on tracers. Use SNMMI teaching material for planar scans, SPECT/CT, PET/CT, and post-therapy distributions.",
          "Tonight's assignment, the way a senior would give it: ten scrolling cases in one organ, two cases with a history you have to commit on before you open the answer, and one therapy distribution where you mark physiologic versus tumor.",
          "Write the diagnosis on the back. If you cannot, the case is not done. Eighty percent on this module's check marks the night complete on this device only."
        ]
      }
    ], [
      { q: "The best open starting place for a scrolling case stack is:", choices: ["A vendor brochure", "Radiopaedia", "A group text", "The match calendar"], a: 1, why: "Radiopaedia is the open collaborative file with stacks across modalities." },
      { q: "Finishing a library case means:", choices: ["You scrolled once", "You can name the diagnosis without the caption", "You saved the image", "You forwarded it"], a: 1, why: "The diagnosis has to be yours before you look. Otherwise it is a screensaver." }
    ])
  );
})();
