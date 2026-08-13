const scene=document.querySelector('#scene');
['one','two','three'].forEach(c=>{const b=document.createElement('div');b.className='blob '+c;scene.appendChild(b)});
const blobs=[...document.querySelectorAll('.blob')];
window.addEventListener('pointermove',e=>{const x=e.clientX/window.innerWidth-.5;const y=e.clientY/window.innerHeight-.5;blobs.forEach((b,i)=>{const d=(i+1)*18;b.style.transform=`translate3d(${x*d}px,${y*d}px,${x*40}px) rotate(${x*30+i*18}deg)`})});
window.addEventListener('scroll',()=>{const s=window.scrollY;blobs.forEach((b,i)=>{const r=s*(.03+i*.015);b.style.borderRadius=`${35+i*8}% ${65-i*5}% ${48+i*4}% ${52-i*4}%`;b.style.rotate=`${r}deg`});const shape=document.querySelector('.shape');if(shape)shape.style.transform=`rotate(${18+s*.08}deg) scale(${1+Math.sin(s*.01)*.08})`});
const reveal=()=>{document.querySelectorAll('.hero h1,.hero p,.free h2,.services h2,.cta h2').forEach((el,i)=>{el.animate([{opacity:0,transform:'translateY(50px)'},{opacity:1,transform:'translateY(0)'}],{duration:900,delay:i*100,easing:'cubic-bezier(.2,.8,.2,1)',fill:'both'})})};
window.addEventListener('load',reveal);