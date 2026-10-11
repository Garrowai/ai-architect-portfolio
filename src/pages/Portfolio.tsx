import { useState } from "react";
import { projects } from "../data/portfolio";
import { Contact, PageMeta, ProjectCard, SectionHeading } from "../components/PortfolioUI";

type Filter = "All" | "Live" | "Planned";

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = projects.filter(project => filter === "All" || (filter === "Planned" ? project.status !== "Live" : project.status === "Live"));
  return (
    <main id="main-content" tabIndex={-1}>
      <PageMeta title="Portfolio | Alex Garrow | Systems & Automation" description="A developing portfolio of PowerShell, infrastructure, workflow automation and cloud labs. The website is live; technical builds are clearly labelled as planned." />
      <section className="page-heading band"><div className="container"><p className="eyebrow">Portfolio / Practical evidence</p><h1>Builds with a clear purpose.</h1><p className="lead">A progression from a small PowerShell tool to integrated systems and automation. Each technical build below is planned; published evidence will be added as the work develops.</p><p className="small">Planned tools and learning goals describe intent, not completed results.</p></div></section>
      <section className="section container" aria-label="Projects">
        <h2 className="visually-hidden">Project progression</h2>
        <div className="project-toolbar"><p>{projects.filter(project => project.status === "Live").length} live website <span aria-hidden="true">/</span> {projects.filter(project => project.status !== "Live").length} planned technical builds</p><div className="filters" role="group" aria-label="Filter projects">{(["All", "Live", "Planned"] as const).map(option => <button key={option} type="button" aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>)}</div></div>
        <div className="project-grid">{visibleProjects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
      </section>
      <section className="section band" aria-labelledby="evidence-title"><div className="container"><SectionHeading eyebrow="Documentation standard" id="evidence-title" title="What a case study will show." text="A completed lab needs enough evidence to explain the decisions, reproduce the work and discuss what went wrong. Planned builds do not yet have technical results or published case studies." /><div className="evidence-grid"><div><h3>Context &amp; design</h3><p>The problem, environment, tools, inputs and outputs, dependencies, architecture or network diagram, and security boundaries.</p></div><div><h3>Implementation &amp; verification</h3><p>Actions performed, deployment instructions, tests, screenshots, troubleshooting, logs, rollback and recovery.</p></div><div><h3>Results &amp; reflection</h3><p>Measured outcomes where supported, security implications, lessons learned, improvements, interview talking points and a real repository link.</p></div></div></div></section>
      <Contact />
    </main>
  );
}
