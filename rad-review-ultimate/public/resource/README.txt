RAD REVIEW ULTIMATE - REAL IMAGE MOUNT POINT
============================================
STATUS: all six source images are installed and rendering.

Each file is a real published PET/CT figure retrieved from the PubMed Central
open-access subset via Europe PMC. All six are licensed CC BY 4.0, which allows
reuse and format conversion with attribution. The only modification applied was
conversion to WebP and downscaling to 1400px max width.

Attribution is rendered in the viewer under each image and is a licence
condition - do not remove it. Full provenance lives in src/data/credits.ts.

  axial_brain_vertex_pet_ct.webp   -> VERTEX, SKULL BASE
    Axial FDG PET, CT and fused PET/CT of the brain. Fig 2.
    Vatankulu B, Yilmaz S. Cureus 2026. doi:10.7759/cureus.105291
    PMC13080539 - CC BY 4.0

  coronal_pet_ct_mediastinum.webp  -> NECK, CHEST
    Whole-body MIP with axial thoracic fused PET/CT sections. Fig 1.
    Wu D, et al. Frontiers in Oncology 2026. doi:10.3389/fonc.2026.1699568
    PMC13082928 - CC BY 4.0

  axial_pet_ct_fusion.webp         -> UPPER ABDOMEN, MID ABDOMEN   (slice 042)
    Coronal and axial fused PET/CT of the upper abdomen showing liver, spleen,
    both kidneys and retroperitoneal nodes. Fig 1.
    Minamimoto R, et al. Jpn J Radiol 2026. doi:10.1007/s11604-025-01935-x
    PMC13144277 - CC BY 4.0

  axial_pet_ct_pelvis.webp         -> PELVIS
    Axial fused PET/CT of the pelvis. Fig 1.
    Bivolarski I, et al. Cureus 2026. doi:10.7759/cureus.109495
    PMC13198888 - CC BY 4.0

  fdg_pet_coronal_mip.webp         -> THIGH, KNEE
    Whole-body coronal FDG PET maximum intensity projection, vertex to feet. Fig 1.
    Costa Cabral T, et al. Cureus 2026. doi:10.7759/cureus.110072
    PMC13322748 - CC BY 4.0

  generated_image.webp             -> ANKLE, TOES                  (slice 095)
    Sagittal and axial foot and ankle imaging - tibiotalar joint, talus,
    calcaneus and midfoot. Fig 5.
    Denizmen Zorba D, et al. Eur J Nucl Med Mol Imaging 2026.
    doi:10.1007/s00259-025-07749-3
    PMC13013284 - CC BY 4.0

Served at runtime from /resource/<filename>. Zero external fetch: the files are
local and nothing is requested off-origin at runtime.

To substitute your own images, either replace a file here using the same
filename, or use the IMAGES n/6 button in the header to mount a file through the
browser (stored locally in IndexedDB). A mounted file overrides the file on disk
and suppresses the published attribution, since the image is then not the cited
figure.
