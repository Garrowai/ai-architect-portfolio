import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Network, Workflow } from "lucide-react";
import headshot from "../assets/headshot.jpg";
import { learningPath, projects } from "../data/portfolio";
import { Contact, PageMeta, ProjectCard, SectionHeading } from "../components/PortfolioUI";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageMeta />
      <section className="hero-band">
        <div className="container hero-content">
          <p className="eyebrow">Building, learning &amp; solving problems</p>
          <h1>Systems, infrastructure{" "}<span>&amp; automation.</span></h1>
          <p className="lead">Developing practical skills in IT infrastructure, Windows systems and PowerShell automation. Exploring how systems work, building useful solutions and documenting what I learn along the way.</p>
          <div className="actions"><Link className="button primary" to="/portfolio">Explore the portfolio <ArrowRight size={18} /></Link><a className="text-link" href="#learning">See my learning path <ArrowRight size={16} /></a></div>
          <div className="hero-notes"><span>Current focus: PowerShell, Windows systems, Git &amp; CS50x</span><span>Long-term direction: Infrastructure, cloud &amp; security engineering</span></div>
        </div>
      </section>
      <section className="section container" aria-labelledby="focus-title">
        <SectionHeading eyebrow="Current focus" id="focus-title" title="Learn it. Practise it. Explain it." text="Developing technical understanding through focused study, practical exercises and documentation. PowerShell and Windows systems are the main focus, supported by Git and CS50x." />
        <div className="focus-grid">
          <article><Terminal /><h3>PowerShell &amp; Windows systems</h3><p>Studying objects, pipelines, functions and error handling, with a read-only PC inventory and health report planned to put these concepts into practice.</p><span className="status current">In progress: technical study</span></article>
          <article><Network /><h3>Networking foundations</h3><p>Next: addressing, DNS, DHCP and routing, followed by a Packet Tracer lab with deliberate faults to diagnose and repair.</p><span className="status">Planned: next stage</span></article>
          <article><Workflow /><h3>Computer science &amp; Git</h3><p>Working through CS50x and developing version-control habits: understanding code, tracking changes and documenting decisions. Python, APIs and SQL are later stages of the learning path.</p><span className="status current">In progress: technical study</span></article>
        </div>
      </section>
      <section className="section band" aria-labelledby="work-title"><div className="container">
        <SectionHeading eyebrow="Portfolio" id="work-title" title="A portfolio built on evidence." text="The website is live. Technical projects are planned and will gain case studies as the work is done, tested and documented." />
        <div className="project-grid">{projects.slice(0, 2).map(project => <ProjectCard key={project.id} project={project} />)}</div>
        <Link className="text-link section-link" to="/portfolio">View the full project progression <ArrowRight size={17} /></Link>
      </div></section>
      <section id="about" className="section container about-grid" aria-labelledby="about-title">
        <div><SectionHeading eyebrow="About" id="about-title" title="Technical curiosity. A practical approach." />
          <p>My physical security experience in a sensitive defence environment has taught me to follow procedures, recognise risk, communicate clearly and escalate within defined responsibilities.</p>
          <p>My technical development centres on Windows systems, PowerShell, networking and computer science. I focus on understanding how systems behave, investigating problems and recording the reasoning behind a solution.</p>
          <p>I'm particularly interested in the connection between systems administration and automation: using scripts to inspect systems, reduce repetitive work and make processes easier to understand and maintain.</p>
          <p>My longer-term direction is infrastructure, cloud and security engineering, supported by practical projects and a clear understanding of reliability, access controls and recovery.</p>
        </div>
        <aside className="profile"><img src={headshot} alt="Alex Garrow" width="1280" height="1280" loading="lazy" /><h3>A responsible working approach</h3><ul><li>Procedures, reliability and situational awareness</li><li>Clear communication, documentation and escalation</li><li>Testing, troubleshooting and safe change</li><li>Publish personal labs and non-confidential examples</li></ul><p className="small">Practical learning, documented projects and technical problem-solving.</p></aside>
      </section>
      <section id="learning" className="section band" aria-labelledby="learning-title"><div className="container">
        <SectionHeading eyebrow="Learning path" id="learning-title" title="Technical depth, one stage at a time." text="A structured path connecting systems knowledge, troubleshooting and automation. PowerShell, Windows systems, Git and CS50x are the current focus; later stages are planned and guided by practical readiness." />
        <ol className="roadmap">{learningPath.map((stage, index) => <li key={stage.title} className={index === 0 ? "active-stage" : ""}><div className="stage-number">{String(index + 1).padStart(2, "0")}</div><div><div className="stage-heading"><h3>{stage.title}</h3><span className={`status ${index === 0 ? "current" : ""}`}>{index === 0 ? "Current" : "Planned"}</span></div><p>{stage.topics}</p><p className="readiness"><strong>Practical milestone:</strong> {stage.proof}</p></div></li>)}</ol>
        <div className="qualification-note"><h3>Qualifications follow competence.</h3><p>Cisco Computer Hardware Basics is completed. Future qualifications will be chosen according to relevant vacancies and hands-on readiness. The priority now is practical PowerShell and Windows knowledge, networking, Git and CS50x.</p></div>
      </div></section>
      <Contact />
    </main>
  );
}
