(function(){"use strict";const L={VERTEX:["brain","tomography"],SKULL_BASE:["skull","base"],NECK:["neck","lymph"],CHEST:["chest","tomography"],UPPER_ABDOMEN:["liver","abdomen"],MID_ABDOMEN:["abdomen","bowel"],PELVIS:["pelvis","pelvic"],THIGH:["femur","thigh"],KNEE:["knee","joint"],ANKLE:["ankle","foot"],TOES:["foot","metatarsal"]},A=["radiograph","radiography","ultrasound","sonography","doppler","mammography","tomosynthesis","scintigraphy","spect","pet","petct","fdg","psma","dotatate","mri","mrcp","diffusion","perfusion","angiography","fluoroscopy","densitometry","computed","tomography","magnetic","resonance","contrast","sagittal","coronal","axial","anteroposterior","lateral"],I=["adenocarcinoma","carcinoma","sarcoma","lymphoma","melanoma","glioblastoma","glioma","meningioma","metastasis","metastases","neoplasm","nodule","mass","lesion","effusion","consolidation","pneumonia","pneumothorax","embolism","thrombosis","aneurysm","dissection","stenosis","infarct","ischaemia","ischemia","haemorrhage","hemorrhage","fracture","dislocation","tear","rupture","sprain","arthritis","osteomyelitis","abscess","cyst","calculus","obstruction","inflammation","fibrosis","sclerosis","atrophy","hydronephrosis","cirrhosis","steatosis","pancreatitis","appendicitis","diverticulitis","cholecystitis","endometriosis","adenoma","hyperplasia","dysplasia","necrosis","oedema","edema","meniscal","meniscus","ligament","cruciate","rotator","labral","tendinopathy","sarcoidosis","tuberculosis","emphysema","bronchiectasis","honeycombing"],_=["brain","cerebral","cerebellum","pituitary","orbit","sinus","skull","temporal","thyroid","parotid","cervical","carotid","neck","chest","thorax","lung","pulmonary","mediastinal","mediastinum","pleural","cardiac","aorta","aortic","breast","oesophagus","esophagus","liver","hepatic","biliary","gallbladder","pancreas","pancreatic","spleen","splenic","adrenal","kidney","renal","ureter","bowel","ileal","colon","colorectal","rectal","abdomen","abdominal","pelvis","pelvic","bladder","prostate","uterus","uterine","ovarian","ovary","inguinal","femur","femoral","thigh","hip","knee","patella","tibia","tibial","fibula","ankle","talus","calcaneus","calcaneal","achilles","plantar","foot","toe","shoulder","humerus","elbow","wrist","hand","spine","lumbar","thoracic","sacrum","vertebral","marrow","nodal","lymph"];function q(){const e=new Set;for(const r of[...A,...I,..._])e.add(r);for(const r of Object.values(L))for(const t of r)for(const n of t.toLowerCase().split(/[^a-z]+/))n.length>3&&e.add(n);return e}const m=q(),R=new Set(["and","with","the","for","from","left","right","male","female","year","old","adult","child","infant","case","study","scan","image","images"]);function b(e,r,t=3){if(e===r)return 0;if(Math.abs(e.length-r.length)>t)return t+1;let n=Array.from({length:r.length+1},(o,u)=>u),s=[],i=[];for(let o=1;o<=e.length;o++){s=[o];let u=o;for(let c=1;c<=r.length;c++){const g=e[o-1]===r[c-1]?0:1;let d=Math.min(s[c-1]+1,n[c]+1,n[c-1]+g);o>1&&c>1&&e[o-1]===r[c-2]&&e[o-2]===r[c-1]&&(d=Math.min(d,i[c-2]+1)),s[c]=d,d<u&&(u=d)}if(u>t)return t+1;i=n,n=s}return n[r.length]}function C(e){const r=[];return{query:e.split(/(\s+)/).map(n=>{const s=n.toLowerCase();if(!/^[a-z]{5,}$/.test(s)||m.has(s)||R.has(s))return n;let i=null,o=1/0,u=0;const c=s.length>8?2:1;for(const g of m){if(Math.abs(g.length-s.length)>c)continue;const d=b(s,g,c);d>c||(d<o?(o=d,i=g,u=1):d===o&&u++)}return!i||u>1?n:(r.push({from:n,to:i}),i)}).join(""),changes:r,corrected:r.length>0}}function O(e,r=8){const t=e.trim().toLowerCase().split(/\s+/).pop()??"";if(t.length<2)return[];const n=[],s=[];for(const o of m)o!==t&&(o.startsWith(t)?n.push(o):t.length>=4&&b(t,o,2)<=2&&s.push(o));const i=(o,u)=>o.length-u.length||o.localeCompare(u);return[...n.sort(i),...s.sort(i)].slice(0,r)}function N(e){const r=e.trim().split(/\s+/).filter(i=>i.length>2);if(r.length<2)return[];const t=r.map(i=>({w:i,keep:m.has(i.toLowerCase())?1:0})),n=[],s=[...t];for(;s.length>1;){let i=0;for(let o=1;o<s.length;o++)s[o].keep<s[i].keep&&(i=o);s.splice(i,1),n.push(s.map(o=>o.w).join(" "))}return n}function $(e){return[...e.articleFigures,...e.studyPreviews,...e.fullStudies]}function M(e){if(e.kind==="article_figure")return e.imageUrl;if(e.kind==="study_preview")return e.previewUrl}function w(e){return e.kind==="article_figure"||e.kind==="study_preview"?e.modality:e.modalities[0]}function T(e){return e.kind==="article_figure"?e.articleUrl:e.fullStudyUrl}function k(e){return e.kind==="article_figure"?e.caption:e.description}const U=[["pmc","PubMed Central"],["tcia","TCIA"],["openneuro","OpenNeuro"],["idc","IDC"],["radiopaedia","Radiopaedia"]],a={query:"",searched:"",notice:"",sources:["pmc","tcia"],items:[],providers:[],loading:!1,error:"",narrating:!1,narrateIndex:-1,rate:1},p=e=>document.querySelector(e);function l(e){return String(e??"").replace(/[&<>"']/g,r=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[r])}async function y(e){const r=e.trim();if(!r)return;a.query=r,a.loading=!0,a.error="",a.notice="",f(),h();const t=C(r);let n=t.query;t.corrected&&(a.notice=`Searched for “${t.query}” — corrected ${t.changes.map(s=>`“${s.from}” → “${s.to}”`).join(", ")}.`);try{let s=await S(n),i=$(s.groups);if(!i.length){for(const o of N(n))if(s=await S(o),i=$(s.groups),i.length){n=o,a.notice=`Nothing for “${t.query}”. Broadened to “${o}” — ${i.length} result${i.length===1?"":"s"}.`;break}}a.searched=n,a.items=i,a.providers=s.providers}catch{a.error="RAD ATLAS is not reachable. Start the workstation and try again.",a.items=[]}finally{a.loading=!1,h()}}async function S(e){const r=`/api/radatlas/search?q=${encodeURIComponent(e)}&sources=${encodeURIComponent(a.sources.join(","))}`,t=await fetch(r);if(!t.ok)throw new Error(`HTTP ${t.status}`);return await t.json()}function j(e,r,t){const n=e.kind==="article_figure"?"Publication figure":e.kind==="study_preview"?"Study preview":"Full study",s=w(e);return[`Result ${r} of ${t}.`,`${n}${s?`, ${s}`:""}, from ${e.source.name}.`,e.title,k(e).slice(0,320),e.source.license?`Licence: ${e.source.license}.`:"Licence not stated."].filter(Boolean).join(" ")}function D(e,r){const t=new SpeechSynthesisUtterance(e);t.rate=a.rate,t.onend=r,t.onerror=r,window.speechSynthesis.speak(t)}function v(e){if(!a.items.length)return;if(e>=a.items.length){f();return}a.narrating=!0,a.narrateIndex=e,h(),document.getElementById(`atlas-card-${e}`)?.scrollIntoView({block:"center",behavior:"smooth"}),D(j(a.items[e],e+1,a.items.length),()=>{a.narrating&&v(e+1)})}function f(){a.narrating=!1,a.narrateIndex=-1,typeof window<"u"&&window.speechSynthesis&&window.speechSynthesis.cancel()}function P(e,r){const t=M(e),n=w(e),s=e.kind==="article_figure"?"Publication figure":e.kind==="study_preview"?"Study preview":"Full study",i=e.kind!=="article_figure"?e.downloadUrl:void 0;return`<article class="atlas-card${r===a.narrateIndex?" reading":""}" id="atlas-card-${r}">
    <div class="atlas-meta">
      <span class="atlas-kind">${l(s)}</span>
      ${n?`<span class="atlas-mod">${l(n)}</span>`:""}
      <span class="atlas-src">${l(e.source.name)}</span>
      <button type="button" class="atlas-play" data-play="${r}" title="Read this result aloud">▶ read</button>
    </div>
    <div class="atlas-figure">
      ${t?`<img src="${l(t)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:'<div class="atlas-nofig">Full study — open or download at the source</div>'}
    </div>
    <h3>${l(e.title)}</h3>
    <p class="atlas-desc">${l(k(e))}</p>
    <p class="atlas-lic">${l(e.source.license??"LICENSE_UNKNOWN")}</p>
    <div class="atlas-actions">
      <a href="${l(T(e))}" target="_blank" rel="noreferrer noopener">Open source ↗</a>
      ${i?`<a href="${l(i)}" target="_blank" rel="noreferrer noopener">Full study ↓</a>`:""}
    </div>
  </article>`}function h(){const e=p("#atlas-root");if(!e)return;const r=a.providers.map(t=>`<span class="atlas-prov ${t.state}">${l(t.source.toUpperCase())} · ${l(t.state)}${t.count?` (${t.count})`:""}</span>`).join("");e.innerHTML=`
    <div class="atlas-bar">
      <label class="atlas-field">
        <input id="atlas-q" type="search" value="${l(a.query)}" autocomplete="off"
               placeholder="Search open radiology — anatomy, modality, diagnosis">
        <div id="atlas-sugg" class="atlas-sugg" hidden></div>
      </label>
      <button type="button" id="atlas-go" class="atlas-go">◉ SEARCH</button>
    </div>

    <div class="atlas-sources">
      ${U.map(([t,n])=>`<button type="button" class="atlas-source${a.sources.includes(t)?" on":""}" data-source="${t}">${l(n)}</button>`).join("")}
    </div>

    <div class="atlas-player">
      <button type="button" id="atlas-narrate">${a.narrating?"❚❚ Pause narration":"▶ Narrate results"}</button>
      <label>Speed
        <select id="atlas-rate">
          ${[.75,1,1.25,1.5].map(t=>`<option value="${t}"${t===a.rate?" selected":""}>${t}×</option>`).join("")}
        </select>
      </label>
      <span class="atlas-now">${a.narrateIndex>=0?`Reading ${a.narrateIndex+1} / ${a.items.length}`:"Reads every result aloud, in order"}</span>
    </div>

    ${a.notice?`<p class="atlas-notice">${l(a.notice)}</p>`:""}
    ${a.error?`<p class="atlas-error">${l(a.error)}</p>`:""}
    <div class="atlas-status">
      ${a.loading?"Searching…":`${a.items.length} result${a.items.length===1?"":"s"}`}
      ${a.searched?` for “${l(a.searched)}”`:""}
      ${r}
    </div>

    <div class="atlas-grid">
      ${a.items.length?a.items.map(P).join(""):a.loading?"":`<p class="atlas-empty">${a.query?"Nothing came back. Try fewer words, or enable another source above.":"Search the open archives — published figures and public DICOM studies."}</p>`}
    </div>

    <p class="atlas-foot">
      Results are open-access literature and public research archives: reference imaging,
      never a specific patient's study. Every image on this page is checked by the QA agent,
      which reads text and file bytes — not pixels.
    </p>`,x()}function x(){const e=p("#atlas-q"),r=p("#atlas-sugg");e?.addEventListener("input",()=>{const t=O(e.value);if(r){if(!t.length){r.hidden=!0;return}r.hidden=!1,r.innerHTML=t.map(n=>`<button type="button" data-sugg="${l(n)}">${l(n)}</button>`).join("")}}),e?.addEventListener("keydown",t=>{t.key==="Enter"&&y(e.value)}),r?.addEventListener("click",t=>{const n=t.target.dataset.sugg;if(!n||!e)return;const s=e.value.split(/\s+/);s[s.length-1]=n,e.value=s.join(" "),r.hidden=!0,e.focus()}),p("#atlas-go")?.addEventListener("click",()=>{y(e?.value??"")}),document.querySelectorAll("[data-source]").forEach(t=>{t.addEventListener("click",()=>{const n=t.dataset.source;a.sources=a.sources.includes(n)?a.sources.filter(s=>s!==n):[...a.sources,n],a.query?y(a.query):h()})}),document.querySelectorAll("[data-play]").forEach(t=>{t.addEventListener("click",()=>{f(),v(Number(t.dataset.play))})}),p("#atlas-narrate")?.addEventListener("click",()=>{a.narrating?(f(),h()):v(0)}),p("#atlas-rate")?.addEventListener("change",t=>{if(a.rate=Number(t.target.value)||1,a.narrating){const n=a.narrateIndex;f(),v(n)}})}function E(){h();const e=new URLSearchParams(location.search).get("q");if(e){const r=p("#atlas-q");r&&(r.value=e),y(e)}window.addEventListener("pagehide",f)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",E,{once:!0}):E()})();
