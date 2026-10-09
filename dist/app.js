const p = window.portfolio;
const esc = value => String(value ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const safe = url => /^(https?:\/\/|mailto:|(?:images|files)\/)/i.test(url||'') ? esc(url) : '';
const routes = [['index.html','About'],['education.html','Education'],['research.html','Research Experience'],['projects.html','Academic Projects'],['industry.html','Industry Experience'],['publications.html','Publications'],['certifications.html','Certifications'],['awards.html','Awards & Activities']];
const requestedPage = location.pathname.split('/').pop() || 'index.html';
const page = requestedPage==='activities.html'?'awards.html':requestedPage;
const title = routes.find(r=>r[0]===page)?.[1] || 'About';
document.title = `${title} · ${p.name} · Academic portfolio`;
const icon = '<svg viewBox="0 0 40 40" aria-hidden="true"><rect x="5" y="5" width="30" height="30" rx="1"/><circle cx="15" cy="15" r="3"/><path d="m6 29 9-8 6 5 7-11 7 14"/></svg>';
function picture(src,label,extra=''){return safe(src)?`<img class="${extra}" src="${safe(src)}" alt="${esc(label)}">`:`<div class="placeholder ${extra}">${icon}<strong>${esc(label)}</strong><small>Space for your image</small></div>`;}
function link(url,label,cls='text-link'){return safe(url)?`<a class="${cls}" href="${safe(url)}">${esc(label)}</a>`:'';}
function heading(no,name,description){return `<header class="page-heading"><div class="eyebrow">Academic portfolio / ${no}</div><h1>${name}</h1><p>${description}</p></header>`;}
function project(item,i){return `<article id="project-${i+1}" class="${item.images?.length?(item.galleryMode==='photos'?'project-lead':'project-with-gallery'):i===0&&p.projects.some(project=>project.images?.length)?'project-lead':''}">${item.images?.length?projectGallery(item,i):picture(item.image,item.image?item.title:'Project image','project-image')}<div class="project-info"><div class="meta"><span>${esc(item.category)}</span><span>${esc(item.year)}</span></div><h2 class="project-title">${esc(item.title)}</h2><p>${esc(item.summary)}</p>${projectDetails(item)}<div class="project-links">${externalLink(item.url,'Read report on ResearchGate')}${externalLink(item.document,'View project report')}${/\.pdf$/i.test(item.presentation||'')?externalLink(item.presentation,'View presentation (PDF)'):safe(item.presentation)?`<a class="text-link" href="${safe(item.presentation)}" download>Download presentation (PPTX) ↓</a>`:''}${videoEmbed(item.video,item.title)}</div></div></article>`;}
function imageCredit(img){return img.credit?`<p class="gallery-credit">${safe(img.creditUrl)?externalLink(img.creditUrl,img.credit):esc(img.credit)}</p>`:'';}
function projectGallery(item,i,source='projects'){
 const first=item.images[0];
 const label=esc(item.galleryLabel || item.title);
 const controls=()=>`<div class="gallery-controls"><button type="button" data-gallery-step="-1" aria-label="Previous ${label} image">←</button><p class="gallery-status" aria-live="polite" aria-atomic="true"><span data-gallery-count>1 / ${item.images.length}</span><span data-gallery-caption>${esc(first.caption)}</span></p><button type="button" data-gallery-step="1" aria-label="Next ${label} image">→</button></div><div data-gallery-credit>${imageCredit(first)}</div>`;
 const markup=`<div class="project-gallery ${item.images.length===1?'single-gallery':''} ${item.galleryMode==='photos'?'photo-gallery':''}" data-project-gallery="${i}" data-gallery-source="${source}" role="region" aria-roledescription="carousel" aria-label="${label} project images"><figure class="gallery-figure"><button type="button" class="gallery-expand" aria-label="Enlarge ${label} images" aria-haspopup="dialog"><img data-gallery-image src="${safe(first.src)}" alt="${esc(first.alt)}" width="1672" height="941"><span>Enlarge images ↗</span></button></figure>${controls()}<div class="gallery-choices" style="--gallery-count:${item.images.length}" aria-label="Choose a ${label} image">${item.images.map((img,j)=>`<button type="button" data-gallery-index="${j}" aria-pressed="${j===0}"><span>0${j+1}</span>${esc(img.caption)}</button>`).join('')}</div><dialog class="gallery-dialog" aria-label="${label} image viewer"><div class="gallery-dialog-header"><span>${label} · Image viewer</span><button type="button" class="gallery-close" aria-label="Close image viewer">Close ×</button></div><div class="gallery-zoom-controls" role="group" aria-label="Image zoom"><button type="button" data-zoom="out" aria-label="Zoom out">−</button><output data-zoom-level aria-live="polite">100%</output><button type="button" data-zoom="in" aria-label="Zoom in">+</button><button type="button" data-zoom="reset">Reset zoom</button><span>Scroll or swipe to explore when zoomed in.</span></div><div class="gallery-large-image" tabindex="0" role="region" aria-label="Image viewing area"><div class="gallery-zoom-canvas"><img data-gallery-image src="${safe(first.src)}" alt="${esc(first.alt)}" width="1672" height="941"></div></div>${controls()}</dialog></div>`;
 if(source!=='research')return markup;
 const figure=(img,j)=>`<figure class="research-figure"><button class="gallery-expand" type="button" data-open-index="${j}" aria-haspopup="dialog" aria-label="Enlarge ${esc(img.caption)}"><img class="research-image" src="${safe(img.src)}" alt="${esc(img.alt)}" loading="lazy"><span>Enlarge image ↗</span></button><figcaption>${esc(img.caption)}</figcaption></figure>`;
 if(item.figureGroups?.length){
  let offset=0;
  const groups=item.figureGroups.map(group=>{
   const start=offset;
   const figures=item.images.slice(start,start+group.count).map((img,j)=>figure(img,start+j)).join('');
   offset+=group.count;
   return `<section class="research-figure-group"><div class="research-figure-group-heading"><h4>${esc(group.title)}</h4><p>${esc(group.description)}</p></div><div class="research-figure-group-grid">${figures}</div></section>`;
  }).join('');
  return `<div class="research-validation" data-project-gallery="${i}" data-gallery-source="research">${groups}${markup.slice(markup.indexOf('<dialog'),markup.lastIndexOf('</div>'))}</div>`;
 }
 const figures=item.images.map(figure).join('');
 return `<div class="research-figure-stack" data-project-gallery="${i}" data-gallery-source="research">${figures}${markup.slice(markup.indexOf('<dialog'),markup.lastIndexOf('</div>'))}</div>`;
}
function projectDetails(item){
 const sections=[['My contribution',item.contributions],['Project outcomes',item.results]].filter(([,points])=>points?.length);
 if(!item.detail&&!sections.length)return '';
 return `<details class="project-detail"><summary>Project details</summary><div class="project-detail-body">${item.detail?`<p>${esc(item.detail)}</p>`:''}${sections.map(([title,points])=>`<h3>${esc(title)}</h3><ul>${points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul>`).join('')}</div></details>`;
}
function externalLink(url,label){return safe(url)?`<a class="text-link" href="${safe(url)}" target="_blank" rel="noopener noreferrer">${esc(label)} <span aria-hidden="true">↗</span></a>`:'';}
function certificatePreview(item){
 const preview=picture(item.image,item.image?item.title+' — certificate':'Certificate image','project-image certificate-image');
 return safe(item.document)?`<a class="certificate-preview" href="${safe(item.document)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${esc(item.title)} certificate in a new tab">${preview}</a>`:preview;
}
function researchFigure(item,i){
  if(item.images?.length)return projectGallery(item,i,'research');
  const media=safe(item.image)?`<img class="research-image" src="${safe(item.image)}" alt="${esc(item.imageAlt)}">`:item.splitFigure?`<div class="research-image-pair">${picture('','Simulation','research-placeholder')}${picture('','Combined results','research-placeholder')}</div>`:picture('','COMSOL validation','research-placeholder');
  return `<figure class="research-figure">${media}<figcaption>${esc(item.imageCaption)}</figcaption></figure>`;
}
function researchExperience(item,i){return `<article class="research-entry" id="research-${i+1}"><header><div class="research-meta"><span>${esc(item.kind)}</span><span>${esc(item.period)}</span>${item.status?`<span class="badge">${esc(item.status)}</span>`:''}</div><h2>${esc(item.title)}</h2><p class="institution">${esc(item.institution)}</p><p class="research-supervisor">${esc(item.supervisorLabel || 'Supervisor')}: ${esc(item.supervisor)}</p></header><p class="research-summary">${esc(item.summary)}</p><h3>My contributions</h3><ul class="research-points">${item.contributions.map(point=>`<li>${esc(point)}</li>`).join('')}</ul>${documentPreview(item.presentation,'Thesis defense presentation','images/thesis-defense-cover.jpg')}${researchFigure(item,i)}${item.findings.length?`<h3>Key findings</h3><ul class="research-points">${item.findings.map(point=>`<li>${esc(point)}</li>`).join('')}</ul>`:''}${item.note?`<p class="research-note"><strong>Model scope:</strong> ${esc(item.note)}</p>`:''}</article>`;}
function publicationAuthors(authors){
  return authors.split(',').map(author=>{
    const name=author.trim().replace(/†$/, '');
    const formatted=[p.name,'K. M. Zareer'].includes(name)?`<strong>${esc(name)}</strong>`:esc(name);
    return formatted+(author.trim().endsWith('†')?'<sup>†</sup>':'');
  }).join(', ');
}
function publication(item,i){
  const venue = [item.venue,item.date || item.year].filter(Boolean).join(' · ');
  return `<article class="publication"><div class="publication-index">${String(i+1).padStart(2,'0')}</div><div><div class="publication-labels"><span class="badge">${esc(item.type)}</span>${item.status?`<span class="badge publication-status">${esc(item.status)}</span>`:''}${item.award?`<span class="badge publication-award">${esc(item.award)}</span>`:''}</div><h2 class="publication-title">${esc(item.title)}</h2>${item.authors?`<p class="publication-authors">${publicationAuthors(item.authors)}</p>`:''}${item.authorNote?`<p class="author-note">${esc(item.authorNote)}</p>`:''}${venue?`<p class="venue">${esc(venue)}</p>`:''}${item.abstract?`<details><summary>Read abstract</summary><p>${esc(item.abstract)}</p></details>`:''}${item.url?`<p style="margin-top:16px">${link(item.url,'Read publication')}</p>`:''}</div></article>`;
}
const socialIcons = {
  email: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 6 9 7 9-7"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.4 9h3.6v12H3.4V9Zm5.9 0h3.5v1.7h.1c.5-1 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.6V21h-3.6v-6c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.3V9Z"/></svg>',
  researchgate: '<span class="rg-symbol" aria-hidden="true">R<sup>G</sup></span>'
};
function social(url,label,kind){return safe(url)?`<a class="social-link" href="${safe(url)}" aria-label="${esc(label)}" title="${esc(label)}" ${kind==='email'?'':'target="_blank" rel="noopener noreferrer"'}>${socialIcons[kind]}</a>`:'';}
function videoEmbed(url,title){
 if(!url)return '';
 let id='';
 try{const u=new URL(url);if(['www.youtube.com','youtube.com','m.youtube.com'].includes(u.hostname))id=u.searchParams.get('v')||u.pathname.match(/^\/(?:embed|shorts)\/([^/]+)/)?.[1]||'';else if(u.hostname==='youtu.be')id=u.pathname.slice(1);}catch{return '';}
 if(!/^[A-Za-z0-9_-]{11}$/.test(id))return '';
 return `<section class="project-video" aria-label="Project demonstration"><h3>Watch the demonstration</h3><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${id}" title="${esc(title)} — demonstration video" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div><p class="video-note">Play the video here. If YouTube restricts playback, ${externalLink(url,'open it on YouTube')}.</p></section>`;
}
function documentPreview(url,label,cover){
 if(!safe(url))return '';
 return `<div class="document-resource"><a href="${safe(url)}" target="_blank" rel="noopener noreferrer" class="document-cover" aria-label="${esc(label)}">${picture(cover,label,'document-cover-image')}</a><div><span class="resource-type">Presentation · PDF</span><h3>${esc(label)}</h3><div class="project-links">${externalLink(url,'Open presentation')}<a class="text-link" href="${safe(url)}" download>Download PDF</a></div></div></div>`;
}
function featuredWorks(){
 const cards=[
  {label:'Thesis · Laser additive manufacturing and Fracture mechanics',title:'From manufacturing stress to fracture behavior',image:p.research[0].images[0].src,alt:p.research[0].images[0].alt,description:'Finite element investigation of LPBF process parameters, residual stresses, and the mechanical integrity of 17-4PH stainless steel.',url:'research.html#research-1',action:'Explore thesis'},
  {label:'Robotics & machine learning',title:'GreenGuardian',image:p.projects[0].images[0].src,alt:p.projects[0].images[0].alt,description:'A quadruped robot combining wireless motion control, live video, and potato leaf disease detection.',url:'projects.html#project-1',action:'Explore project'},
  {label:'Thermal engineering',title:'Shell-and-tube heat exchanger',image:p.projects[1].images[0].src,alt:p.projects[1].images[0].alt,description:'Analytical thermal design, CFD analysis, and fabrication of a heat exchanger with disk-and-doughnut baffles.',url:'projects.html#project-2',action:'Explore project'}
 ];
 return `<section class="featured-work" aria-labelledby="featured-title"><div class="section-heading"><div><div class="eyebrow">Selected research & engineering</div><h2 id="featured-title">Featured work</h2></div><a class="text-link" href="research.html">Research experience</a></div><div class="featured-grid">${cards.map(c=>`<article class="featured-card"><a class="featured-image" href="${c.url}" aria-label="${esc(c.title)}">${picture(c.image,c.alt,'')}</a><div class="featured-copy"><span class="resource-type">${c.label}</span><h3><a href="${c.url}">${c.title}</a></h3><p>${c.description}</p><a class="text-link" href="${c.url}">${c.action}</a></div></article>`).join('')}</div></section>`;
}
let body = '';
if(title==='About') body=`<section class="about-layout" aria-label="About Kazi Md Zareer">
  <aside class="profile-card">
    ${picture(p.portrait,p.name,'profile-photo')}
    <div class="social-links" aria-label="Social profiles">${social('mailto:'+p.email,'Email '+p.email,'email')}${social(p.linkedin,'LinkedIn','linkedin')}${social(p.researchgate,'ResearchGate','researchgate')}</div>
    <h2 class="profile-name">${esc(p.name)}</h2>
    <p class="profile-degree"><strong>BSc. in Mechanical Engineering</strong><br>${esc(p.university)}</p>
    <p class="profile-location">${esc(p.location)}</p>
    <a class="profile-email" href="mailto:${esc(p.email)}">${esc(p.email)}</a>
    <a class="button profile-cv" href="${safe(p.cv)}" target="_blank" rel="noopener noreferrer">View CV <span aria-hidden="true">↗</span></a>
  </aside>
  <div class="about-content">
    <header class="about-heading"><div><div class="eyebrow">Background &amp; research</div><h1>About Me</h1></div></header>
    <div class="about-prose"><p class="about-lead">${esc(p.introduction)}</p><p>${esc(p.biography)}</p><p>${esc(p.approach)}</p></div>
    <section class="research-interests" aria-labelledby="interests-title"><h2 id="interests-title">Research interests</h2><div class="tags">${p.interests.map(i=>`<span class="tag">${esc(i)}</span>`).join('')}</div></section>
  </div>
</section>${featuredWorks()}`;
if(title==='Education') body=`<header class="page-heading education-heading"><h1>Education</h1></header><section class="timeline education-timeline">${p.education.map(e=>`<article class="timeline-row"><div class="education-meta">${e.logo && safe(e.website)?`<a class="institution-logo" href="${safe(e.website)}" target="_blank" rel="noopener noreferrer" aria-label="Visit ${esc(e.logoLabel)} website (opens in a new tab)" title="Visit ${esc(e.logoLabel)} website"><img src="${safe(e.logo)}" alt="${esc(e.logoLabel)} logo" width="88" height="88"></a>`:''}<div class="timeline-date">${esc(e.period)}</div>${e.resultDate?`<p class="result-date"><span>Result published</span>${esc(e.resultDate)}</p>`:''}</div><div><h2 class="education-degree">${esc(e.degree)}</h2><p class="institution">${esc(e.institution)}</p>${e.details.map(d=>`<p class="education-detail"><strong>${esc(d.label)}:</strong> ${esc(d.text)}</p>`).join('')}</div></article>`).join('')}</section>`;
if(title==='Academic Projects') body=`<header class="page-heading"><h1>Academic Projects</h1><p>A closer look at the academic projects I completed during my undergraduate studies.</p></header>`+`<section class="project-grid section">${p.projects.map(project).join('')}</section>`;
if(title==='Industry Experience') body=`<header class="page-heading industry-heading"><h1>Industry Experience</h1><p>Industrial attachment at a gas-engine combined-cycle power plant.</p></header><section class="industry-section"><div class="industry-intro"><div class="industry-copy"><div class="meta"><span>${esc(p.industry.role)}</span><span>${esc(p.industry.period)}</span></div><h2>${esc(p.industry.organization)}</h2><p class="institution">${esc(p.industry.location)}</p><p>${esc(p.industry.summary)}</p><div class="industry-links">${externalLink(p.industry.researchgate,'Read report on ResearchGate')}${externalLink(p.industry.presentation,'View presentation (PDF)')}</div></div><div class="industry-feature-photo">${picture(p.industry.feature.src,p.industry.feature.alt,'industry-hero-photo')}<p>${esc(p.industry.feature.caption)}</p></div></div><div class="industry-focus"><h3>Training focus</h3><ul>${p.industry.focus.map(point=>`<li>${esc(point)}</li>`).join('')}</ul></div><div class="industry-gallery"><div class="industry-gallery-heading"><h3>From the plant</h3><p>Photographs from the attachment. Select an image to explore it.</p></div>${projectGallery(p.industry,0,'industry')}</div></section>`;
if(title==='Publications') body=`<header class="page-heading"><h1>Publications</h1><p>Conference contributions, manuscripts, and work in progress.</p></header>`+`<section class="section" style="padding-top:10px">${p.publications.map(publication).join('')}</section>`;
if(title==='Certifications') body=`<header class="page-heading simple-heading"><h1>Certifications</h1></header>`+`<section class="detail-grid">${p.certifications.map(c=>`<article class="credential">${certificatePreview(c)}<div class="credential-body">${c.year?`<div class="meta"><span>${esc(c.year)}</span></div>`:''}${c.pending?'<span class="badge">Details forthcoming</span>':''}<h2 class="credential-title">${esc(c.title)}</h2><p class="institution">${esc(c.issuer)}</p><p>${esc(c.detail)}</p><div class="credential-links">${externalLink(c.document,c.documentLabel || 'View certificate')}${externalLink(c.url,'Verify credential')}</div></div></article>`).join('')}</section>`;
if(title==='Research Experience') body=`<header class="page-heading simple-heading"><h1>Research Experience</h1></header><section class="research-list">${p.research.map(researchExperience).join('')}</section>`;
if(title==='Awards & Activities') body=`<header class="page-heading simple-heading"><h1>Awards &amp; Extracurricular Activities</h1></header><section class="recognition-section" aria-labelledby="awards-title"><h2 id="awards-title">Awards &amp; scholarships</h2><div class="timeline">${p.awards.map((a,i)=>`<article class="timeline-row" id="award-${i+1}"><div class="timeline-date">${esc(a.year)}</div><div><h3>${esc(a.title)}</h3><p class="institution">${esc(a.issuer)}</p>${a.detail?`<p>${esc(a.detail)}</p>`:''}${a.talkTitle?`<h4 class="talk-title">${esc(a.talkTitle)}</h4>`:''}${a.talkSummary?`<p>${esc(a.talkSummary)}</p>`:''}${a.presentation?documentPreview(a.presentation,'SoFE presentation','images/sofe-presentation-cover.jpg'):''}${a.document?`<div class="project-links">${externalLink(a.document,'View certificate of appreciation (PDF)')}</div>`:''}${a.images?.length?`<div class="award-photos">${projectGallery(a,i,'awards')}</div>`:''}</div></article>`).join('')}</div></section><section class="recognition-section" aria-labelledby="activities-title"><h2 id="activities-title">Extracurricular activities</h2><div class="timeline">${p.activities.map((a,i)=>`<article class="timeline-row"><div class="timeline-date">${esc(a.period)}</div><div><h3>${esc(a.title)}</h3><p class="institution">${esc(a.organization)}</p>${a.detail?`<p>${esc(a.detail)}</p>`:''}${a.points?.length?`<ul class="activity-points">${a.points.map(point=>`<li>${esc(point)}</li>`).join('')}</ul>`:''}${a.images?.length?`<div class="award-photos">${projectGallery(a,i,'activities')}</div>`:''}</div></article>`).join('')}</div></section>`;

document.getElementById('app').innerHTML=`<a class="skip" href="#main">Skip to content</a><header class="site-header"><div class="shell header-inner"><a class="brand" href="index.html" aria-label="Portfolio home"><span class="brand-name">${esc(p.name)}</span></a><button class="menu-toggle" type="button" aria-controls="navigation" aria-expanded="false">Menu</button><nav class="nav" id="navigation" aria-label="Main navigation">${routes.map(([url,label])=>`<a href="${url}" ${title===label?'aria-current="page"':''}>${label}</a>`).join('')}</nav></div></header><main class="shell" id="main">${body}</main><footer class="site-footer"><div class="shell footer-inner"><span>© ${new Date().getFullYear()} ${esc(p.name)}.</span><div class="footer-nav"><a href="index.html">About</a><a href="#main">Back to top</a></div></div></footer>`;
document.querySelector('.menu-toggle').addEventListener('click',e=>{const open=e.currentTarget.getAttribute('aria-expanded')!=='true';e.currentTarget.setAttribute('aria-expanded',String(open));document.querySelector('.nav').classList.toggle('open',open);});

// Each gallery is manually controlled and keeps the inline and enlarged views in sync.
document.querySelectorAll('[data-project-gallery]').forEach(gallery=>{
 const source=gallery.dataset.gallerySource || 'projects';
 const images=(source==='industry'?p.industry:p[source][Number(gallery.dataset.projectGallery)]).images;
 const dialog=gallery.querySelector('dialog');
 const viewport=dialog.querySelector('.gallery-large-image');
 const canvas=dialog.querySelector('.gallery-zoom-canvas');
 const largeImage=canvas.querySelector('img');
 let current=0, zoom=1;
 function renderZoom(resetPosition=false){
  if(!dialog.open||!largeImage.naturalWidth)return;
  const centerX=(viewport.scrollLeft+viewport.clientWidth/2)/(canvas.offsetWidth||1);
  const centerY=(viewport.scrollTop+viewport.clientHeight/2)/(canvas.offsetHeight||1);
  const fit=Math.min(viewport.clientWidth/largeImage.naturalWidth,viewport.clientHeight/largeImage.naturalHeight);
  const width=largeImage.naturalWidth*fit*zoom, height=largeImage.naturalHeight*fit*zoom;
  largeImage.style.width=`${width}px`;
  largeImage.style.height=`${height}px`;
  canvas.style.width=`${Math.max(viewport.clientWidth,width)}px`;
  canvas.style.height=`${Math.max(viewport.clientHeight,height)}px`;
  viewport.scrollLeft=(resetPosition ? .5 : centerX)*canvas.offsetWidth-viewport.clientWidth/2;
  viewport.scrollTop=(resetPosition ? .5 : centerY)*canvas.offsetHeight-viewport.clientHeight/2;
  dialog.querySelector('[data-zoom-level]').textContent=`${Math.round(zoom*100)}%`;
  dialog.querySelector('[data-zoom="out"]').disabled=zoom<=.5;
  dialog.querySelector('[data-zoom="in"]').disabled=zoom>=3;
 }
 function changeZoom(action){
  zoom=action==='reset'?1:Math.min(3,Math.max(.5,zoom+(action==='in' ? .25 : -.25)));
  renderZoom(action==='reset');
 }
 dialog.querySelectorAll('[data-zoom]').forEach(button=>button.addEventListener('click',()=>changeZoom(button.dataset.zoom)));
 largeImage.addEventListener('load',()=>renderZoom(true));
 new ResizeObserver(()=>renderZoom()).observe(viewport);
 function show(index){
  zoom=1;
  current=(index+images.length)%images.length;
  const image=images[current];
  gallery.querySelectorAll('[data-gallery-image]').forEach(img=>{img.src=image.src;img.alt=image.alt;});
  gallery.querySelectorAll('[data-gallery-credit]').forEach(el=>{el.innerHTML=imageCredit(image);});
  gallery.querySelectorAll('[data-gallery-count]').forEach(el=>{el.textContent=`${current+1} / ${images.length}`;});
  gallery.querySelectorAll('[data-gallery-caption]').forEach(el=>{el.textContent=image.caption;});
  gallery.querySelectorAll('[data-gallery-index]').forEach(button=>{button.setAttribute('aria-pressed',String(Number(button.dataset.galleryIndex)===current));});
  renderZoom(true);
 }
 gallery.querySelectorAll('[data-gallery-step]').forEach(button=>button.addEventListener('click',()=>show(current+Number(button.dataset.galleryStep))));
 gallery.querySelectorAll('[data-gallery-index]').forEach(button=>button.addEventListener('click',()=>show(Number(button.dataset.galleryIndex))));
 gallery.querySelectorAll('.gallery-expand').forEach(button=>button.addEventListener('click',()=>{if(button.dataset.openIndex!==undefined)show(Number(button.dataset.openIndex));zoom=1;dialog.showModal();renderZoom(true);}));
 gallery.querySelector('.gallery-close').addEventListener('click',()=>dialog.close());
 gallery.addEventListener('keydown',event=>{
  if(dialog.open&&['+','=','-','0'].includes(event.key)){event.preventDefault();changeZoom(event.key==='0'?'reset':event.key==='-'?'out':'in');return;}
  if(event.target===viewport)return;
  if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();show(current+(event.key==='ArrowLeft'?-1:1));}
 });
});
