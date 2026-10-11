import { Link } from "react-router-dom";
import { ArrowRight, Terminal, Network, Workflow } from "lucide-react";
import headshot from "../assets/headshot.png";
import { learningPath, projects } from "../data/portfolio";
import { Contact, PageMeta, ProjectCard, SectionHeading } from "../components/PortfolioUI";

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <PageMeta title="Alex Garrow | Systems, Infrastructure & Automation" description="Alex Garrow's career transition into IT: PowerShell, Windows systems, networking and practical automation. Honest learning notes and a developing lab portfolio." />
      <section className="hero-band">
        <div className="container hero-content">
          <p className="eyebrow">Career transition / Learning in public</p>
          <h1>Alex Garrow<span>Systems, infrastructure<br className="desktop-break" /> &amp; automation.</span></h1>
          <p className="lead">I'm transitioning into IT, learning to run reliable systems and build useful automation. Current focus: PowerShell, Windows and Git, with CS50x alongside.</p>
          <div className="actions"><Link className="button primary" to="/portfolio">Explore the portfolio <ArrowRight size={18} /></Link><a className="text-link" href="#learning">See my learning path <ArrowRight size={16} /></a></div>
          <div className="hero-notes"><span>Current stage: foundations</span><span>Long-term direction: infrastructure &amp; automation engineering</span></div>
        </div>
      </section>
      <section className="section container" aria-labelledby="focus-title">
        <SectionHeading eyebrow="Current focus" id="focus-title" title="Learn it. Practise it. Explain it." text="One main subject at a time, supported by a smaller CS50x study slot. Understanding, testing and troubleshooting come before more courses." />
        <div className="focus-grid">
          <article><Terminal /><h3>PowerShell &amp; Windows</h3><p>Learning objects, pipelines, functions and error handling. The first planned build is a read-only PC inventory and health report.</p><span className="status current">In progress: study</span></article>
          <article><Network /><h3>Networking foundations</h3><p>Next: addressing, DNS, DHCP and routing, followed by a Packet Tracer lab with deliberate faults to diagnose and repair.</p><span className="status">Planned: next stage</span></article>
          <article><Workflow /><h3>Computer science &amp; Git</h3><p>Continuing CS50x and developing version-control habits. Python, APIs and SQL will support useful workflow automation later.</p><span className="status current">In progress: foundations</span></article>
        </div>
      </section>
      <section className="section band" aria-labelledby="work-title"><div className="container">
        <SectionHeading eyebrow="Portfolio" id="work-title" title="A portfolio built on evidence." text="The website is live. Technical projects are planned and will gain case studies as the work is done, tested and documented." />
        <div className="project-grid">{projects.slice(0, 2).map(project => <ProjectCard key={project.id} project={project} />)}</div>
        <Link className="text-link section-link" to="/portfolio">View the full project progression <ArrowRight size={17} /></Link>
      </div></section>
      <section id="about" className="section container about-grid" aria-labelledby="about-title">
        <div><SectionHeading eyebrow="Background & direction" id="about-title" title="From physical security to technical problem-solving." />
          <p>My physical security experience in a sensitive defence environment has taught me to follow procedures, recognise risk, communicate clearly and escalate within defined responsibilities.</p>
          <p>I'm bringing those habits into a transition towards IT. My next step is practical experience through support, IT asset management, junior administration or endpoint operations, while I build technical foundations.</p>
          <p>Longer term, I want to combine systems administration and infrastructure with PowerShell and Python automation: understanding a problem, delivering a reliable solution and explaining how it works.</p>
          <p>Cloud, security engineering and architecture are possible extensions of that foundation. GRC and responsible AI remain later interests.</p>
        </div>
        <aside className="profile"><img src={headshot} alt="Alex Garrow" width="1254" height="1254" loading="lazy" /><h3>A responsible working approach</h3><ul><li>Procedures, reliability and situational awareness</li><li>Clear communication, documentation and escalation</li><li>Testing, troubleshooting and safe change</li><li>Publish personal labs and non-confidential examples</li></ul><p className="small">This portfolio reflects a career transition and developing skills.</p></aside>
      </section>
      <section id="learning" className="section band" aria-labelledby="learning-title"><div className="container">
        <SectionHeading eyebrow="Learning path" id="learning-title" title="One foundation. Several ways to grow." text="The sequence is guided by practical readiness, rather than fixed deadlines. Only the foundation stage is current; later stages are planned." />
        <ol className="roadmap">{learningPath.map((stage, index) => <li key={stage.title} className={index === 0 ? "active-stage" : ""}><div className="stage-number">{String(index + 1).padStart(2, "0")}</div><div><div className="stage-heading"><h3>{stage.title}</h3><span className={`status ${index === 0 ? "current" : ""}`}>{index === 0 ? "Current" : "Planned"}</span></div><p>{stage.topics}</p><p className="readiness"><strong>Practical milestone:</strong> {stage.proof}</p></div></li>)}</ol>
        <div className="qualification-note"><h3>Qualifications follow competence.</h3><p>Cisco Computer Hardware Basics is completed. Future qualifications will be chosen according to relevant vacancies and hands-on readiness. The priority now is practical PowerShell and Windows knowledge, networking, Git and CS50x.</p></div>
      </div></section>
      <Contact />
    </main>
  );
}
