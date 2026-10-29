/* Catalogue files named /nucleus/... were never packed. Swap a broken
   image for a real local plate of the same study type, and enlarge the
   one-image thumb so it is not a 48px black box. */
(function () {
  function plate(text) {
    var hay = text || ''
    if (/mibi|myocard|perfusion|cardiac|heart/i.test(hay)) return '/studio/assets/images/cardiac-ac.jpg'
    if (/thyroid|i-131|iodine/i.test(hay)) return '/studio/assets/images/thyroid-scan-i123.jpg'
    if (/bone/i.test(hay)) return '/studio/assets/images/bone-scan-wb.jpg'
    if (/breast|ultrasound/i.test(hay)) return '/studio/assets/images/case-us-1.jpg'
    if (/dotatate|psma|lu-177|y-90|ra-223/i.test(hay)) return '/studio/assets/images/rai-therapy.jpg'
    if (/chest|pediatr|radiograph|x-ray|xray/i.test(hay)) return '/studio/assets/dr/one/xr-1.jpg'
    return '/studio/assets/images/gamma-camera-patient.jpg'
  }
  function nearby(img) {
    var node = img.closest('section') || img.closest('figure') || img.parentElement
    return (node && node.innerText) || ''
  }
  function fix(img) {
    if (!img || img.dataset.nucleusFixed) return
    var src = img.getAttribute('src') || ''
    if (src.indexOf('/nucleus/') === -1) return
    img.dataset.nucleusFixed = '1'
    img.src = plate(nearby(img))
    var parent = img.parentElement
    if (parent && parent.tagName === 'BUTTON') parent.style.gridColumn = '1 / -1'
    img.style.height = '180px'
    img.style.width = '100%'
    img.style.objectFit = 'contain'
  }
  document.addEventListener('error', function (e) {
    var t = e.target
    if (t && t.tagName === 'IMG') fix(t)
  }, true)
})()
