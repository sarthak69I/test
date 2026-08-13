'use client';

import { createElement, useEffect } from 'react';

const services = [
  ['01', 'Web design + development', 'Next.js websites with sharp art direction, expressive motion and performance-first engineering.'],
  ['02', 'Mobile app development', 'Product-focused iOS and Android experiences with clean UX and scalable foundations.'],
  ['03', '3D + creative development', 'Interactive scenes, scroll storytelling, custom motion systems and playful web experiments.'],
  ['04', 'UI/UX + product systems', 'Strategy, flows, design systems, prototypes and polished launch-ready interfaces.'],
];

const projects = [
  { name: 'LACSA Tech', type: 'EdTech product', tag: 'Platform · UX · Build', mark: 'LA', cls: 'lime' },
  { name: 'Dr. Sangeeta', type: 'Healthcare', tag: 'Website · Reviews · SEO', mark: 'DS', cls: 'violet' },
  { name: 'KK Music House', type: 'Retail', tag: 'Brand · Commerce · Web', mark: 'KK', cls: 'coral' },
];

const steps = [
  ['01', 'Discover', 'Goals, audience, references and the exact feeling the product should create.'],
  ['02', 'Design', 'Visual language, interaction system, wireframes and polished interface direction.'],
  ['03', 'Develop', 'Responsive web and app builds with APIs, motion, 3D and performance tuning.'],
  ['04', 'Launch', 'QA, deployment, analytics, handoff and post-launch iteration.'],
];

const BRAND_SCENE = 'https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode';

function BrandModel({ variant, interactive = false }: { variant: string; interactive?: boolean }) {
  return (
    <div className={`externalScene brandScene brand-${variant} ${interactive ? 'interactive' : ''}`}>
      {createElement('spline-viewer' as any, {
        url: BRAND_SCENE,
        'events-target': 'global',
        background: 'rgba(0,0,0,0)',
      })}
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = e.clientX / innerWidth - .5;
      const y = e.clientY / innerHeight - .5;
      document.documentElement.style.setProperty('--mx', `${x * 20}px`);
      document.documentElement.style.setProperty('--my', `${y * 20}px`);
      document.documentElement.style.setProperty('--rx', `${y * -6}deg`);
      document.documentElement.style.setProperty('--ry', `${x * 8}deg`);
    };
    addEventListener('mousemove', onMove);
    return () => removeEventListener('mousemove', onMove);
  }, []);

  return <main id="top">
    <nav className="nav shell">
      <a className="logo" href="#top">CodeArc Labs</a>
      <div className="navLinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a></div>
      <a className="pill mini" href="#contact">Let&apos;s build ↗</a>
    </nav>

    <section className="hero shell scene scene-light">
      <p className="eyebrow">CREATIVE WEB + APP DEVELOPMENT STUDIO</p>
      <h1>Animate<br/><span>anything.</span></h1>
      <p className="heroCopy">We build bold websites, apps and digital products where design, code, motion and 3D work as one system.</p>
      <a className="ghostDark" href="#services">Explore the studio <span>◎</span></a>
      <BrandModel variant="hero"/>
    </section>

    <section className="scene scene-dark freeSection dark">
      <div className="shell sceneInner freeInner">
        <p className="eyebrow light">NO TEMPLATE ENERGY</p>
        <h2 className="splitTitle"><span>free</span><span>for all</span></h2>
        <BrandModel variant="free" interactive/>
        <div className="rings" aria-hidden="true"><i/><i/><i/></div>
      </div>
    </section>

    <section className="scene scene-light manifesto shell" id="studio">
      <p className="eyebrow">DESIGN THAT MOVES</p>
      <div className="brokenType"><span>We design</span><span>digital</span><span>products</span><span>people</span><span>remember.</span></div>
      <BrandModel variant="manifesto"/>
    </section>

    <section id="services" className="scene scene-dark services dark">
      <div className="shell sceneInner">
        <div className="sectionHead"><p className="eyebrow light">WHAT WE DO</p><h2>From idea<br/>to <span>impact.</span></h2></div>
        <BrandModel variant="services"/>
        <div className="serviceList">{services.map(([n,t,d]) => <article className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}</div>
      </div>
    </section>

    <section id="work" className="scene scene-light work shell">
      <div className="sectionHead"><p className="eyebrow">SELECTED WORK</p><h2>Made to<br/>get <span>noticed.</span></h2></div>
      <BrandModel variant="work"/>
      <div className="projectGrid">{projects.map((p) => <article className={`project ${p.cls}`} key={p.name}>
        <div className="projectVisual"><strong>{p.mark}</strong><div className="projectObject"><i/><b/><em/></div></div>
        <div className="projectMeta"><div><h3>{p.name}</h3><p>{p.type}</p></div><small>{p.tag}</small><span>View ↗</span></div>
      </article>)}</div>
    </section>

    <section className="scene scene-dark interaction dark">
      <div className="shell sceneInner interactionInner">
        <p className="eyebrow light">INTERACTION LAB</p>
        <h2>Scroll controls<br/><span>motion too.</span></h2>
        <div className="glowPill"><span>drag · hover · scroll</span><i/></div>
        <BrandModel variant="interaction"/>
      </div>
    </section>

    <section className="scene scene-light process shell">
      <p className="eyebrow">HOW WE WORK</p>
      <div className="processLead"><h2>Small team.<br/>Big range.</h2><p>One visual system across strategy, product design, frontend, backend, mobile and 3D.</p></div>
      <BrandModel variant="process"/>
      <div className="steps">{steps.map(([n,t,d]) => <article key={n}><b>{n}</b><h3>{t}</h3><p>{d}</p></article>)}</div>
    </section>

    <section className="scene scene-dark toolbox dark">
      <div className="shell sceneInner">
        <p className="eyebrow light">INCLUDING ALL THE GOOD STUFF</p>
        <div className="toolType"><span>Next.js</span><span>React</span><span>GSAP</span><span>Spline</span><span>Three.js</span><span>Firebase</span></div>
        <BrandModel variant="tools"/>
      </div>
    </section>

    <section id="contact" className="scene scene-light contact shell">
      <p className="eyebrow">START SOMETHING NEW</p>
      <h2>Have an idea?<br/><span>Arc it.</span></h2>
      <p className="contactCopy">Tell us what you want to launch. We&apos;ll shape the product, visual direction and build.</p>
      <a className="pill big" href="mailto:hello@codearclabs.com">Start a project ↗</a>
      <BrandModel variant="contact"/>
    </section>

    <footer className="footer shell"><a className="logo" href="#top">CodeArc Labs</a><p>Web · App · Product · 3D</p><p>© 2026 CodeArc Labs</p></footer>
  </main>;
}
