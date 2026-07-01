// mobile nav
const burger=document.getElementById('burger');
const navLinks=document.getElementById('navLinks');
burger.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

// scroll reveal
const revealEls=document.querySelectorAll('.reveal');
const io=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      if(e.target.id==='skills' || e.target.querySelector('.bar-fill')){
        e.target.querySelectorAll('.bar-fill').forEach(b=>{
          b.style.width=b.dataset.pct+'%';
        });
      }
      io.unobserve(e.target);
    }
  });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// skill bars also trigger when their container row reveals
document.querySelectorAll('.skill-row').forEach(row=>{
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const fill=e.target.querySelector('.bar-fill');
        if(fill) fill.style.width=fill.dataset.pct+'%';
        obs.unobserve(e.target);
      }
    });
  },{threshold:0.2});
  obs.observe(row);
});
