document.querySelectorAll('a[href="#"]').forEach(a=>a.addEventListener('click',e=>e.preventDefault()));
const links=[...document.querySelectorAll('nav a')];
new IntersectionObserver(es=>{const e=es.find(x=>x.isIntersecting);if(e)links.forEach(a=>a.classList.toggle('active',a.hash==='#'+e.target.id))},{rootMargin:'-35% 0px -55%'}).observe(document.querySelector('#about'));
document.querySelectorAll('main section[id]').forEach((s,i,a)=>{if(i)new IntersectionObserver(es=>{if(es[0].isIntersecting)links.forEach(x=>x.classList.toggle('active',x.hash==='#'+s.id))},{rootMargin:'-35% 0px -55%'}).observe(s)});
