const button=document.querySelector('.menu'),nav=document.querySelector('nav');
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')==='true';button.setAttribute('aria-expanded',!open);nav.classList.toggle('open',!open)});
nav.addEventListener('click',e=>{if(e.target.matches('a')){button.setAttribute('aria-expanded','false');nav.classList.remove('open')}});
document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
document.querySelector('#year').textContent=new Date().getFullYear();
const links=[...document.querySelectorAll('nav a')];
new IntersectionObserver(es=>{const e=es.find(x=>x.isIntersecting);if(e)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))},{rootMargin:'-35% 0px -55%'}).observe(document.querySelector('#about'));
document.querySelectorAll('main section[id]').forEach((s,i,a)=>{if(i)new IntersectionObserver(es=>{if(es[0].isIntersecting)links.forEach(x=>x.classList.toggle('active',x.hash==='#'+s.id))},{rootMargin:'-35% 0px -55%'}).observe(s)});
