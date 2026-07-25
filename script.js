
const body=document.body, nav=document.querySelector('.nav'), toggle=document.querySelector('.menu-toggle');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');body.classList.toggle('menu-open',open);toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');body.classList.remove('menu-open');toggle.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const filters=document.querySelectorAll('.filter'), cards=document.querySelectorAll('.portfolio-card');
filters.forEach(btn=>btn.addEventListener('click',()=>{filters.forEach(x=>x.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(card=>card.style.display=(f==='All'||card.dataset.category===f)?'block':'none')}));

const lb=document.querySelector('.lightbox'), lbImg=lb.querySelector('img'), lbText=lb.querySelector('p');
cards.forEach(card=>card.addEventListener('click',()=>{lbImg.src=card.dataset.image;lbImg.alt=card.dataset.title;lbText.textContent=card.dataset.title;lb.classList.add('open');lb.setAttribute('aria-hidden','false');body.style.overflow='hidden'}));
function closeLB(){lb.classList.remove('open');lb.setAttribute('aria-hidden','true');body.style.overflow=''}
lb.querySelector('.lightbox-close').addEventListener('click',closeLB);lb.addEventListener('click',e=>{if(e.target===lb)closeLB()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLB()});

document.querySelectorAll('.book-service').forEach(a=>a.addEventListener('click',()=>{const s=a.dataset.service;setTimeout(()=>{document.getElementById('serviceSelect').value=s},250)}));

document.getElementById('bookingForm').addEventListener('submit',e=>{
 e.preventDefault();const f=new FormData(e.currentTarget);const subject=`Design Project Request — ${f.get('service')}`;
 const bodyText=`Name: ${f.get('name')}\nEmail: ${f.get('email')}\nService: ${f.get('service')}\nPreferred Deadline: ${f.get('deadline')||'Not specified'}\nBudget: ${f.get('budget')||'Not specified'}\nPreferred Colors: ${f.get('colors')||'Not specified'}\nPreferred Style: ${f.get('style')||'Not specified'}\n\nProject Details:\n${f.get('details')}\n\nReference files will be attached separately if needed.`;
 window.location.href=`mailto:designsbybritofficial@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
});
