const translations = {
  ar: {
    tagline:'فيديو إبداعي وذكاء اصطناعي',navHome:'الرئيسية',navWork:'الأعمال',navAbout:'من أنا',navContact:'تواصل',eyebrow:'مساحة للإبداع وصناعة القصص البصرية',heroTitle:'أحوّل الأفكار إلى<br><span>تجارب بصرية</span> مؤثرة.',heroText:'أنا رأفت، أعمل في صناعة المحتوى المرئي والتصوير والمونتاج، وأستكشف إمكانات الذكاء الاصطناعي لصناعة أفكار جديدة.',viewWork:'استكشف الأعمال',aboutMe:'تعرّف عليّ',heroNote:'التفاصيل تصنع الفرق.',chipAI:'إبداع مدعوم بالذكاء الاصطناعي',chipVideo:'قصة في كل إطار',scroll:'اكتشف الأعمال',selected:'مختارات من أعمالي',portfolioTitle:'أعمال <span>تتحدث عن نفسها.</span>',portfolioIntro:'مجموعة من التجارب البصرية التي تجمع بين الملاحظة، والفكرة، والتنفيذ.',filterAll:'الكل',filterPhoto:'تصوير',filterDesign:'تصميم ورسوم',filterVideo:'فيديو',photoLabel:'تصوير فوتوغرافي',photoOne:'لحظة في الطبيعة — 01',photoTwo:'لحظة في الطبيعة — 02',designLabel:'رسم وتصميم',illustrationTitle:'دراسة شخصية مرسومة',videoLabel:'إنتاج فيديو',videoOne:'مشروع فيديو — 01',videoTwo:'مشروع فيديو — 02',videoThree:'مشروع فيديو — 03',portfolioFootnote:'هذه نسخة أولية من المعرض؛ يمكن لاحقًا إضافة وصف كل مشروع والأدوات المستخدمة ودورك فيه من لوحة الإدارة.',aboutEyebrow:'خلف الكاميرا وخلف الفكرة',aboutTitle:'أنا رأفت،<br><span>أصنع وأوثّق وأطوّر.</span>',aboutText:'أهتم بصناعة المحتوى المرئي، والتصوير الفوتوغرافي، وتحرير الفيديو، وتطوير أفكار إبداعية تستفيد من أدوات الذكاء الاصطناعي. هذه المساحة توثّق أعمالي وتطوّري وتجربتي.',connect:'لنتواصل ونتبادل الأفكار',contactEyebrow:'لديك فكرة؟',contactTitle:'لنصنع شيئًا <span>يستحق المشاهدة.</span>',contactText:'للتعاون أو الاستفسار أو الحديث عن مشروع إبداعي، يسعدني التواصل.',whatsapp:'تواصل عبر واتساب',footerText:'معرض أعمال إبداعية — فيديو، تصوير، تصميم وذكاء اصطناعي.'
  },
  en: {
    tagline:'Creative Video & Artificial Intelligence',navHome:'Home',navWork:'Portfolio',navAbout:'About',navContact:'Contact',eyebrow:'A space for creativity and visual storytelling',heroTitle:'Turning ideas into<br><span>visual experiences</span> that matter.',heroText:'I’m Raafat. I work across visual content, photography and video editing, exploring AI to bring fresh creative ideas to life.',viewWork:'Explore my work',aboutMe:'About me',heroNote:'Details make the difference.',chipAI:'AI-powered creativity',chipVideo:'A story in every frame',scroll:'Explore portfolio',selected:'A selection of my work',portfolioTitle:'Work that <span>speaks for itself.</span>',portfolioIntro:'Visual experiments bringing observation, ideas and execution together.',filterAll:'All work',filterPhoto:'Photography',filterDesign:'Design & Illustration',filterVideo:'Video',photoLabel:'Photography',photoOne:'A moment in nature — 01',photoTwo:'A moment in nature — 02',designLabel:'Illustration & Design',illustrationTitle:'Hand-drawn character study',videoLabel:'Video production',videoOne:'Video project — 01',videoTwo:'Video project — 02',videoThree:'Video project — 03',portfolioFootnote:'This is the first portfolio draft. Project descriptions, tools used and your role can be added later through an admin panel.',aboutEyebrow:'Behind the camera and the idea',aboutTitle:'I’m Raafat,<br><span>creating, documenting, evolving.</span>',aboutText:'I’m interested in visual content, photography, video editing and creative concepts that make use of AI tools. This space documents my work, growth and creative journey.',connect:'Let’s connect and exchange ideas',contactEyebrow:'Have an idea?',contactTitle:'Let’s make something <span>worth watching.</span>',contactText:'For collaboration, questions or a creative project, feel free to get in touch.',whatsapp:'Connect on WhatsApp',footerText:'Creative portfolio — video, photography, design and AI.'
  }
};
let currentLanguage='ar';
const languageSwitch=document.getElementById('languageSwitch');
function setLanguage(lang){
  currentLanguage=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  document.body.classList.toggle('lang-en',lang==='en');
  document.querySelectorAll('[data-i18n]').forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key]});
  languageSwitch.textContent=lang==='ar'?'EN':'عربي';
  document.querySelectorAll('.media-open').forEach(btn=>{btn.setAttribute('aria-label',lang==='ar'?'فتح العمل':'Open project')});
}
languageSwitch.addEventListener('click',()=>setLanguage(currentLanguage==='ar'?'en':'ar'));
const menuToggle=document.getElementById('menuToggle');
const mainNav=document.getElementById('mainNav');
menuToggle.addEventListener('click',()=>{const open=mainNav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰'});
mainNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mainNav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.textContent='☰'}));
document.querySelectorAll('.filter').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));button.classList.add('active');const filter=button.dataset.filter;document.querySelectorAll('.work-card').forEach(card=>{card.hidden=filter!=='all'&&card.dataset.category!==filter})}));
const lightbox=document.getElementById('lightbox');
document.querySelectorAll('.media-open').forEach(button=>button.addEventListener('click',()=>{document.getElementById('lightboxImage').src=button.dataset.image;document.getElementById('lightboxTitle').textContent=currentLanguage==='ar'?button.dataset.titleAr:button.dataset.titleEn;lightbox.showModal()}));
document.getElementById('lightboxClose').addEventListener('click',()=>lightbox.close());lightbox.addEventListener('click',e=>{if(e.target===lightbox)lightbox.close()});
document.getElementById('year').textContent=new Date().getFullYear();


// Load published projects managed through the protected admin dashboard.
(async function loadManagedProjects(){
  const url=window.RAAFAT_SUPABASE_URL;
  const key=window.RAAFAT_SUPABASE_PUBLISHABLE_KEY;
  if(!window.supabase || !url || !url.startsWith('https://') || !key || key.includes('PASTE_')) return;
  try {
    const client=window.supabase.createClient(url,key);
    const {data,error}=await client.from('projects').select('id,title,description,category,image_url,video_url,published,created_at').eq('published',true).order('created_at',{ascending:false});
    if(error || !Array.isArray(data) || !data.length) return;
    const grid=document.querySelector('.portfolio-grid');
    if(!grid) return;
    const esc=value=>String(value||'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    data.forEach((project,index)=>{
      const category=['photo','design','video','ai'].includes(project.category)?project.category:'design';
      const title=esc(project.title);
      const description=esc(project.description);
      let media='';
      if(project.video_url){
        media=`<div class="video-frame"><video controls preload="metadata" playsinline src="${esc(project.video_url)}"></video><span class="video-tag">VIDEO</span></div>`;
      } else if(project.image_url){
        media=`<a class="media-open" href="${esc(project.image_url)}" target="_blank" rel="noopener noreferrer" aria-label="${currentLanguage==='ar'?'فتح العمل':'Open project'}"><img src="${esc(project.image_url)}" alt="${title}" loading="lazy"><span class="view-mark">↗</span></a>`;
      } else {
        media='<div class="video-frame" style="display:grid;place-items:center;min-height:180px;color:#a8b9cc">RAAFAT MEDIA</div>';
      }
      const card=document.createElement('article');
      card.className='work-card'+(project.video_url?' video-card':'');
      card.dataset.category=category;
      card.dataset.managedProject=String(project.id);
      card.innerHTML=`${media}<div class="work-meta"><div><span class="work-category">${esc(category==='photo'?'تصوير':category==='video'?'فيديو':category==='ai'?'ذكاء اصطناعي':'تصميم ورسوم')}</span><h3>${title}</h3>${description?`<p class="managed-description">${description}</p>`:''}</div><span class="work-number">${String(index+7).padStart(2,'0')}</span></div>`;
      grid.appendChild(card);
    });
  } catch(e) { /* Keep the static portfolio available if the backend is unavailable. */ }
})();
