'use client';

import { useEffect } from 'react';

const services = [
  ['01', 'Web design + development', 'Expressive Next.js websites with strong art direction, motion, performance and conversion in mind.'],
  ['02', 'Mobile app development', 'Polished iOS and Android product experiences with scalable engineering and clean UX.'],
  ['03', 'UI/UX + product systems', 'Flows, wireframes, design systems and prototypes that stay consistent as the product grows.'],
  ['04', 'Creative development', 'Scroll storytelling, motion systems, interaction design and selective 3D where it actually adds value.'],
];

const projects = [
  { name: 'LACSA Tech', type: 'EdTech Platform', tone: 'lime' },
  { name: 'Dr. Sangeeta', type: 'Healthcare Website', tone: 'violet' },
  { name: 'KK Music House', type: 'Retail Experience', tone: 'coral' },
];

export default function Home() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.documentElement.style.setProperty('--mx', `${x * 18}px`);
      document.documentElement.style.setProperty('--my', `${y * 18}px`);
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

      <section className="hero fullSplineHero">
        <div className="heroSplineBackdrop" aria-label="Interactive Spline hero scene">
          <iframe
            title="CodeArc Labs Spline hero"
            src="https://app.spline.design/community/file/a1f156f7-ef01-42d1-bf7b-5be1b7967b0a"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
        <div className="heroShade" aria-hidden="true" />
        <div className="shell heroOverlay">
          <div className="heroCopyWrap">
            <p className="eyebrow">CREATIVE WEB + APP DEVELOPMENT STUDIO</p>
            <h1>Build digital<br/>that feels <span>alive.</span></h1>
            <p className="heroCopy">Strategy, design and engineering for websites, apps and digital products — shaped with motion, personality and clarity.</p>
            <div className="heroActions"><a className="pill primary" href="#work">See our work ↘</a><a className="textLink" href="#services">Explore services</a></div>
          </div>
          <div className="splineBadge">SPLINE · INTERACTIVE HERO</div>
        </div>
      </section>

      <section className="statement dark" id="studio">
        <div className="shell statementGrid">
          <p className="eyebrow light">DESIGNED AS ONE SYSTEM</p>
          <h2>Not random effects.<br/><span>One visual language.</span></h2>
          <div className="statementCard gradientA"><span>01</span><strong>Sharp type</strong><p>Large editorial typography with disciplined spacing.</p></div>
          <div className="statementCard gradientB"><span>02</span><strong>Controlled motion</strong><p>Smooth scroll, subtle parallax and purposeful transitions.</p></div>
          <div className="statementCard gradientC"><span>03</span><strong>Depth where useful</strong><p>One hero 3D experience, then graphic gradients and product-first layouts.</p></div>
        </div>
      </section>

      <section id="services" className="services shell">
        <div className="sectionHead"><p className="eyebrow">WHAT WE DO</p><h2>From idea<br/>to <span>impact.</span></h2></div>
        <div className="serviceLayout">
          <div className="serviceList">
            {services.map(([n,t,d]) => <article className="service" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p><b>↗</b></article>)}
          </div>
          <div className="serviceVisual">
            <div className="gradPanel panelOne"><i/><b/></div>
            <div className="gradPanel panelTwo"><i/><b/></div>
            <div className="gradPanel panelThree"><i/><b/></div>
          </div>
        </div>
      </section>

      <section id="work" className="work dark">
        <div className="shell">
          <div className="sectionHead lightHead"><p className="eyebrow light">SELECTED WORK</p><h2>Made to<br/>get <span>noticed.</span></h2></div>
          <div className="projectGrid">
            {projects.map((p, i) => <article className={`project ${p.tone}`} key={p.name}>
              <div className="projectVisual">
                <div className="browserFrame"><div className="browserTop"><i/><i/><i/></div><div className="browserBody"><span>{String(i+1).padStart(2,'0')}</span><strong>{p.name}</strong></div></div>
                <div className="gradientOrb"/>
              </div>
              <div className="projectMeta"><div><h3>{p.name}</h3><p>{p.type}</p></div><span>View case ↗</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bento shell">
        <div className="sectionHead"><p className="eyebrow">WHY CODEARC</p><h2>Built for<br/><span>real products.</span></h2></div>
        <div className="bentoGrid">
          <article className="bentoCard bigCard"><span className="cardLabel">PRODUCT THINKING</span><h3>Design that works before it decorates.</h3><div className="mesh meshOne"/></article>
          <article className="bentoCard darkCard"><span className="cardLabel">PERFORMANCE</span><h3>Fast by default.</h3><div className="metric">95+</div><p>Target Lighthouse performance on production-ready builds.</p></article>
          <article className="bentoCard gradientCard"><span className="cardLabel">MOTION</span><h3>Movement with purpose.</h3><div className="motionTracks"><i/><i/><i/></div></article>
          <article className="bentoCard lightCard"><span className="cardLabel">ENGINEERING</span><h3>Scalable foundations.</h3><div className="codeLines"><i/><i/><i/><i/></div></article>
        </div>
      </section>

      <section className="process dark">
        <div className="shell">
          <div className="sectionHead lightHead"><p className="eyebrow light">HOW WE WORK</p><h2>Simple process.<br/><span>Strong output.</span></h2></div>
          <div className="processRail">
            {['Discover','Design','Develop','Launch'].map((s,i)=><article key={s}><span>0{i+1}</span><h3>{s}</h3><p>{['Goals, users, references and scope.','Visual direction, UX and prototypes.','Next.js, app logic, APIs and motion.','QA, deploy, analytics and iteration.'][i]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="toolbox shell">
        <p className="eyebrow">OUR TOOLBOX</p>
        <div className="toolCloud"><span>Next.js</span><span>React</span><span>TypeScript</span><span>Node</span><span>Firebase</span><span>GSAP</span><span>Lenis</span><span>Figma</span></div>
      </section>

      <section id="contact" className="contact shell">
        <div className="contactPanel">
          <div><p className="eyebrow">START SOMETHING NEW</p><h2>Have an idea?<br/><span>Arc it.</span></h2><p>Tell us what you want to launch. We&apos;ll shape the product, visual direction and build.</p><a className="pill primary" href="mailto:hello@codearclabs.com">Start a project ↗</a></div>
          <div className="contactGradient"><i/><b/><em/></div>
        </div>
      </section>

      <footer className="footer shell"><a className="logo" href="#top">CodeArc Labs</a><p>Web · App · Product · Motion</p><p>© 2026 CodeArc Labs</p></footer>
    </main>
  );
}
