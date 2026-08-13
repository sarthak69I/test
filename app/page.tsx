'use client';

import { createElement, useEffect } from 'react';

const services = [
  ['01', 'Web design + development', 'Next.js websites with sharp art direction, smooth motion and performance-first engineering.'],
  ['02', 'Mobile app development', 'Product-focused apps with clean UX, scalable architecture and polished interactions.'],
  ['03', '3D + creative development', 'Interactive 3D scenes, scroll storytelling, custom motion systems and playful web experiments.'],
  ['04', 'UI/UX + product systems', 'Research, flows, wireframes, design systems, prototypes and launch-ready interfaces.'],
];

const projects = [
  { name: 'LACSA Tech', type: 'EdTech product', tag: 'Platform · UX · Build', mark: 'LA' },
  { name: 'Dr. Sangeeta', type: 'Healthcare', tag: 'Website · Reviews · SEO', mark: 'DS' },
  { name: 'KK Music House', type: 'Retail', tag: 'Brand · Commerce · Web', mark: 'KK' },
];

const steps = [
  ['01', 'Discover', 'We map goals, audience, references, content and the exact feeling the product should create.'],
  ['02', 'Design', 'We build the visual language, interaction system, wireframes and polished interface direction.'],
  ['03', 'Develop', 'We ship responsive Next.js and app experiences with motion, APIs, 3D and performance tuning.'],
  ['04', 'Launch', 'QA, deployment, analytics, handoff and post-launch iteration without slowing the momentum.'],
];

function SplineScene() {
  return createElement('spline-viewer' as any, {
    url: 'https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode',
    'events-target': 'global',
    background: 'rgba(0,0,0,0)',
    class: 'splineScene',
  });
}

export default function Home() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      document.documentElement.style.setProperty('--mx', `${x * 22}px`);
      document.documentElement.style.setProperty('--my', `${y * 22}px`);
      document.documentElement.style.setProperty('--rx', `${y * -5}deg`);
      document.documentElement.style.setProperty('--ry', `${x * 7}deg`);
    };
    addEventListener('mousemove', onMove);
    return () => removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main id="top">
      <nav className="nav shell">
        <a className="logo" href="#top">CodeArc Labs</a>
        <div className="navLinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a></div>
        <a className="pill mini" href="#contact">Let&apos;s build ↗</a>
      </nav>

      <section className="hero shell">
        <div className="heroGlyph" aria-hidden="true"><span/><span/><span/><span/></div>
        <p className="eyebrow">CREATIVE WEB + APP DEVELOPMENT STUDIO</p>
        <h1>Build<br/><span>anything.</span></h1>
        <div className="heroCopy">Websites, apps and interactive digital products with expressive motion, 3D and engineering that feels invisible.</div>
        <a className="ghostPill" href="#services">Explore CodeArc <span>◎</span></a>
        <div className="heroAccent" aria-hidden="true"><i/><b>⚡</b><em/></div>
      </section>

      <section className="freeSection dark">
        <div className="shell freeInner">
          <p className="eyebrow light">NOT TEMPLATE ENERGY</p>
          <h2><span>free</span><b>for all</b></h2>
          <div className="splineWrap" aria-label="Interactive 3D scene powered by Spline"><SplineScene/></div>
          <div className="orbit orbit1"/><div className="orbit orbit2"/>
        </div>
      </section>

      <section className="manifesto shell" id="studio">
        <p className="eyebrow">OUR POINT OF VIEW</p>
        <div className="splitWords" aria-label="We design digital products people remember">
          <span>We design</span><span>digital</span><span>products</span><span>people</span><span>remember.</span>
        </div>
      </section>

      <section id="services" className="services dark">
        <div className="shell">
          <div className="sectionHead lightHead"><p className="eyebrow light">WHAT WE DO</p><h2>From idea<br/>to <span>impact.</span></h2></div>
          <div className="serviceList darkList">
            {services.map(([n,t,d]) => <article className="service" key={n}><span className="num">{n}</span><h3>{t}</h3><p>{d}</p><span className="plus">↗</span></article>)}
          </div>
        </div>
      </section>

      <section id="work" className="work shell">
        <div className="sectionHead"><p className="eyebrow">SELECTED WORK</p><h2>Made to<br/>get <span>noticed.</span></h2></div>
        <div className="projectGrid">
          {projects.map((p,i) => <article className={`project p${i+1}`} key={p.name}>
            <div className="projectVisual"><span>{p.mark}</span><div className="floatShape"/><div className="miniOrbit"/></div>
            <div className="projectMeta"><div><h3>{p.name}</h3><p>{p.type}</p></div><small>{p.tag}</small><span>View ↗</span></div>
          </article>)}
        </div>
      </section>

      <section className="buttonLab dark">
        <div className="shell buttonLabInner">
          <p className="eyebrow light">INTERACTION LAB</p>
          <div className="glowButton" role="presentation"><span>drag / hover / scroll</span><i/></div>
          <p className="labCopy">Micro-interactions are part of the product, not decoration. We use motion to guide attention, explain hierarchy and make interfaces feel alive.</p>
        </div>
      </section>

      <section className="process shell">
        <p className="eyebrow">HOW WE WORK</p>
        <div className="processTitle"><h2>Small team.<br/>Big range.</h2><p>One visual system across strategy, product design, frontend, backend, mobile and 3D—so the final experience feels coherent from the first frame to the last click.</p></div>
        <div className="steps">{steps.map(([n,t,d]) => <div key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></div>)}</div>
      </section>

      <section className="toolSection dark">
        <div className="shell toolInner">
          <p className="eyebrow light">INCLUDING ALL THE GOOD STUFF</p>
          <div className="toolWords"><span>Next.js</span><span>React</span><span>Node</span><span>GSAP</span><span>Spline</span><span>Three.js</span><span>Firebase</span><span>APIs</span></div>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div className="contactShape" aria-hidden="true"><i/><i/><i/></div>
        <p className="eyebrow">START SOMETHING NEW</p>
        <h2>Have an idea?<br/><span>Arc it.</span></h2>
        <p className="contactCopy">Tell us what you want to launch. We&apos;ll help shape the product, visual direction and build.</p>
        <a className="pill big" href="mailto:hello@codearclabs.com">Start a project ↗</a>
      </section>

      <footer className="footer shell"><a className="logo" href="#top">CodeArc Labs</a><p>Web · App · Product · 3D</p><p>© 2026 CodeArc Labs</p></footer>
    </main>
  );
}
