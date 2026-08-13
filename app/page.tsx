'use client';

import { createElement, useEffect } from 'react';

const services = [
  ['01', 'Web design + development', 'Expressive Next.js websites with strong art direction, motion, performance and conversion in mind.', 'gradientA'],
  ['02', 'Mobile app development', 'Polished iOS and Android product experiences with scalable engineering and clean UX.', 'gradientB'],
  ['03', 'UI/UX + product systems', 'Flows, wireframes, design systems and prototypes that stay consistent as the product grows.', 'gradientC'],
  ['04', 'Creative development', 'Scroll storytelling, interaction systems and selective 3D where it adds real value.', 'gradientA'],
];

const projects = [
  ['01', 'LACSA Tech', 'EdTech Platform', 'gradientA'],
  ['02', 'Dr. Sangeeta', 'Healthcare Website', 'gradientB'],
  ['03', 'KK Music House', 'Retail Experience', 'gradientC'],
];

const process = [
  ['01', 'Discover', 'Goals, users, references and scope.', 'gradientA'],
  ['02', 'Design', 'Visual direction, UX and prototypes.', 'gradientB'],
  ['03', 'Develop', 'Next.js, app logic, APIs and motion.', 'gradientC'],
  ['04', 'Launch', 'QA, deploy, analytics and iteration.', 'gradientA'],
];

function SplineHero() {
  return createElement('spline-viewer' as any, {
    url: 'https://prod.spline.design/PBQQBw8bfXDhBo7w/scene.splinecode',
    'events-target': 'global',
    background: 'rgba(0,0,0,0)',
    class: 'heroSpline',
  });
}

function CardVisual({ tone, label }: { tone: string; label: string }) {
  return (
    <div className={`visualCard ${tone}`}>
      <span className="visualIndex">{label}</span>
      <div className="visualOrb" />
      <div className="visualFrame"><i/><i/><i/></div>
      <div className="visualLine" />
    </div>
  );
}

export default function Home() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty('--mx', `${x * 14}px`);
      document.documentElement.style.setProperty('--my', `${y * 14}px`);
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <main id="top">
      <nav className="nav shell">
        <a className="logo" href="#top">CodeArc Labs</a>
        <div className="navLinks"><a href="#work">Work</a><a href="#services">Services</a><a href="#studio">Studio</a></div>
        <a className="pill mini" href="#contact">Let&apos;s build ↗</a>
      </nav>

      <section className="hero shell">
        <div className="heroCopyWrap">
          <p className="eyebrow">CREATIVE WEB + APP DEVELOPMENT STUDIO</p>
          <h1>Build digital<br/>that feels <span>alive.</span></h1>
          <p className="heroCopy">Strategy, design and engineering for websites, apps and digital products — shaped with motion, personality and clarity.</p>
          <div className="heroActions"><a className="pill primary" href="#work">See our work ↘</a><a className="textLink" href="#services">Explore services</a></div>
        </div>
        <div className="robotStage" aria-label="Interactive 3D scene powered by Spline">
          <div className="robotBackText">CODEARC</div>
          <SplineHero />
          <div className="robotBadge">SPLINE · INTERACTIVE 3D</div>
        </div>
      </section>

      <section className="statement dark" id="studio">
        <div className="shell">
          <p className="eyebrow light">DESIGNED AS ONE SYSTEM</p>
          <h2>Not random effects.<br/><span>One visual language.</span></h2>
          <div className="systemGrid">
            <article className="systemCard gradientA"><span>01</span><strong>Sharp type</strong><p>Large editorial typography with disciplined spacing.</p></article>
            <article className="systemCard gradientB"><span>02</span><strong>Controlled motion</strong><p>Smooth scroll, subtle parallax and purposeful transitions.</p></article>
            <article className="systemCard gradientC"><span>03</span><strong>Consistent depth</strong><p>One card language, one set of materials, one visual rhythm.</p></article>
          </div>
        </div>
      </section>

      <section id="services" className="services shell sectionBlock">
        <div className="sectionHead"><p className="eyebrow">WHAT WE DO</p><h2>From idea<br/>to <span>impact.</span></h2></div>
        <div className="uniformGrid twoCol">
          {services.map(([n,t,d,tone]) => <article className="uniformCard" key={n}>
            <CardVisual tone={tone} label={n}/>
            <div className="cardCopy"><span>{n}</span><h3>{t}</h3><p>{d}</p><a href="#contact">Start ↗</a></div>
          </article>)}
        </div>
      </section>

      <section id="work" className="work dark sectionBlock">
        <div className="shell">
          <div className="sectionHead lightHead"><p className="eyebrow light">SELECTED WORK</p><h2>Made to<br/>get <span>noticed.</span></h2></div>
          <div className="uniformGrid projectCards">
            {projects.map(([n,name,type,tone]) => <article className="uniformCard darkUniform" key={name}>
              <CardVisual tone={tone} label={n}/>
              <div className="cardCopy"><span>{n}</span><h3>{name}</h3><p>{type}</p><a href="#contact">View case ↗</a></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="principles shell sectionBlock">
        <div className="sectionHead"><p className="eyebrow">WHY CODEARC</p><h2>Same system.<br/><span>Different jobs.</span></h2></div>
        <div className="systemGrid four">
          <article className="systemCard gradientA"><span>01</span><strong>Product thinking</strong><p>Design that works before it decorates.</p></article>
          <article className="systemCard gradientB"><span>02</span><strong>Performance</strong><p>Fast, responsive and production-ready.</p></article>
          <article className="systemCard gradientC"><span>03</span><strong>Motion</strong><p>Movement that guides attention and hierarchy.</p></article>
          <article className="systemCard gradientA"><span>04</span><strong>Engineering</strong><p>Scalable foundations that stay maintainable.</p></article>
        </div>
      </section>

      <section className="process dark sectionBlock">
        <div className="shell">
          <div className="sectionHead lightHead"><p className="eyebrow light">HOW WE WORK</p><h2>Simple process.<br/><span>Strong output.</span></h2></div>
          <div className="uniformGrid fourCol">
            {process.map(([n,t,d,tone]) => <article className="uniformCard processCard" key={n}>
              <CardVisual tone={tone} label={n}/>
              <div className="cardCopy"><span>{n}</span><h3>{t}</h3><p>{d}</p></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="toolbox shell sectionBlock">
        <div className="sectionHead"><p className="eyebrow">OUR TOOLBOX</p><h2>Tools stay quiet.<br/><span>Work stays loud.</span></h2></div>
        <div className="systemGrid four">
          {['Next.js + React','TypeScript + Node','Firebase + APIs','GSAP + Lenis + Spline'].map((tool,i)=><article className={`systemCard ${['gradientA','gradientB','gradientC','gradientA'][i]}`} key={tool}><span>0{i+1}</span><strong>{tool}</strong><p>Used as part of one consistent product system.</p></article>)}
        </div>
      </section>

      <section id="contact" className="contact shell sectionBlock">
        <div className="contactSystem gradientB">
          <div><p className="eyebrow">START SOMETHING NEW</p><h2>Have an idea?<br/><span>Arc it.</span></h2><p>Tell us what you want to launch. We&apos;ll shape the product, visual direction and build.</p><a className="pill primary" href="mailto:hello@codearclabs.com">Start a project ↗</a></div>
          <CardVisual tone="gradientA" label="GO"/>
        </div>
      </section>

      <footer className="footer shell"><a className="logo" href="#top">CodeArc Labs</a><p>Web · App · Product · Motion</p><p>© 2026 CodeArc Labs</p></footer>
    </main>
  );
}
