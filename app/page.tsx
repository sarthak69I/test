'use client';

import { useEffect } from 'react';

const services = [
  ['01', 'Web design & development', 'High-converting, fast websites built with expressive motion and a strong visual system.'],
  ['02', 'Mobile app development', 'Modern iOS and Android experiences with product-focused UX and scalable foundations.'],
  ['03', 'UI/UX & product design', 'Strategy, wireframes, prototypes and polished interfaces that feel simple and memorable.'],
  ['04', '3D & motion experiences', 'Scroll-driven interactions, playful 3D moments and motion systems that bring brands to life.'],
];

const projects = [
  { name: 'LACSA Tech', type: 'EdTech platform', mark: 'LA' },
  { name: 'Dr. Sangeeta', type: 'Healthcare website', mark: 'DS' },
  { name: 'KK Music House', type: 'Commerce experience', mark: 'KK' },
];

export default function Home() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--mx', `${(e.clientX / innerWidth - .5) * 18}px`);
      document.documentElement.style.setProperty('--my', `${(e.clientY / innerHeight - .5) * 18}px`);
    };
    addEventListener('mousemove', onMove);
    return () => removeEventListener('mousemove', onMove);
  }, []);

  return (
    <main>
      <nav className="nav shell">
        <a className="logo" href="#top">sitecharm</a>
        <div className="navLinks">
          <a href="#work">Work</a><a href="#services">Services</a><a href="#about">About</a>
        </div>
        <a className="pill mini" href="#contact">Start a project ↗</a>
      </nav>

      <section id="top" className="hero shell">
        <p className="eyebrow">WEB + APP DEVELOPMENT AGENCY</p>
        <h1>We make digital<br/>things <span>move.</span></h1>
        <div className="heroBottom">
          <p>SiteCharm creates bold websites, apps and digital products with clean design, smooth interaction and a little bit of magic.</p>
          <a className="roundArrow" href="#services" aria-label="Explore">↘</a>
        </div>
        <div className="object cluster" aria-hidden="true">
          <i className="orb green"/><i className="orb purple"/><i className="card3d"/><i className="star">✦</i><i className="ring"/>
        </div>
      </section>

      <section className="statement dark">
        <div className="shell statementInner">
          <p className="eyebrow light">BUILT TO FEEL DIFFERENT</p>
          <h2>Websites that are<br/><em>free</em> to be anything.</h2>
          <div className="burst" aria-hidden="true"><span>✦</span><span>●</span><span>◆</span><span>✺</span><span>▲</span></div>
        </div>
      </section>

      <section id="services" className="services shell">
        <div className="sectionHead">
          <p className="eyebrow">WHAT WE DO</p>
          <h2>Everything your idea<br/>needs to become <span>real.</span></h2>
        </div>
        <div className="serviceList">
          {services.map(([n,t,d]) => <article className="service" key={n}>
            <span className="num">{n}</span><h3>{t}</h3><p>{d}</p><span className="plus">+</span>
          </article>)}
        </div>
      </section>

      <section id="work" className="work dark">
        <div className="shell">
          <div className="sectionHead lightHead"><p className="eyebrow light">SELECTED WORK</p><h2>Designed to get<br/>people to <span>notice.</span></h2></div>
          <div className="projectGrid">
            {projects.map((p,i) => <article className={`project p${i+1}`} key={p.name}>
              <div className="projectVisual"><span>{p.mark}</span><div className="floatShape"/></div>
              <div className="projectMeta"><h3>{p.name}</h3><p>{p.type}</p><span>View project ↗</span></div>
            </article>)}
          </div>
        </div>
      </section>

      <section id="about" className="process shell">
        <p className="eyebrow">HOW WE WORK</p>
        <div className="processTitle"><h2>Small team.<br/>Big energy.</h2><p>From first sketch to launch, we keep the process direct, collaborative and focused on making something people remember.</p></div>
        <div className="steps">
          <div><b>01</b><h3>Discover</h3><p>Goals, audience, references and what success should look like.</p></div>
          <div><b>02</b><h3>Design</h3><p>Visual direction, UX system, prototypes and motion language.</p></div>
          <div><b>03</b><h3>Build</h3><p>Responsive Next.js development, interactions, testing and launch.</p></div>
        </div>
      </section>

      <section className="plugins dark">
        <div className="shell pluginInner">
          <p className="eyebrow light">OUR TOOLBOX</p>
          <h2>Including<br/>all the <span>good stuff.</span></h2>
          <div className="techCloud" aria-hidden="true"><span>Next.js</span><span>React</span><span>GSAP</span><span>3D</span><span>Figma</span><span>APIs</span></div>
        </div>
      </section>

      <section id="contact" className="contact shell">
        <div className="blob" aria-hidden="true"/>
        <p className="eyebrow">HAVE AN IDEA?</p>
        <h2>Let&apos;s make<br/>something <span>charming.</span></h2>
        <a className="pill big" href="mailto:hello@sitecharm.pro">Start a project ↗</a>
      </section>

      <footer className="footer shell"><a className="logo" href="#top">sitecharm</a><p>Websites · Apps · Digital products</p><p>© 2026 SiteCharm</p></footer>
    </main>
  );
}
