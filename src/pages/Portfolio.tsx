import { useState } from "react";
import { projects } from "../data/portfolio";
import { Contact, PageMeta, ProjectCard, SectionHeading } from "../components/PortfolioUI";

type Filter = "All" | "Live" | "Planned";

export default function Portfolio() {
  const [filter, setFilter] = useState<Filter>("All");
  const visibleProjects = projects.filter(project => filter === "All" || (filter === "Planned" ? project.status !== "Live" : project.status === "Live"));
  return (
    <main id="main-content" tabIndex={-1}>
      <PageMeta />
      <section className="page-heading band"><div className="container"><p className="eyebrow">Portfolio / Practical evidence</p><h1>Builds with a clear purpose.</h1><p className="lead">Projects exploring systems administration, PowerShell and workflow automation. Each build connects a practical problem with a technical approach and a clear documentation goal.</p><p className="small">Status labels distinguish the live website from planned technical builds.</p></div></section>
      <section className="section container" aria-label="Projects">
        <h2 className="visually-hidden">Project progression</h2>
        <div className="project-toolbar"><p>{projects.filter(project => project.status === "Live").length} live website <span aria-hidden="true">/</span> {projects.filter(project => project.status !== "Live").length} planned technical builds</p><div className="filters" role="group" aria-label="Filter projects">{(["All", "Live", "Planned"] as const).map(option => <button key={option} type="button" aria-pressed={filter === option} onClick={() => setFilter(option)}>{option}</button>)}</div></div>
        <div className="project-grid">{visibleProjects.map(project => <ProjectCard project={project} key={project.id} />)}</div>
      </section>
      <section className="section band" aria-labelledby="evidence-title"><div className="container"><SectionHeading eyebrow="Documentation standard" id="evidence-title" title="The reasoning behind the work." text="Case studies will document the decisions, tests and troubleshooting behind each build, with evidence to support any reported outcomes." /><div className="evidence-grid"><div><h3>Context &amp; design</h3><p>The problem, environment, tools, inputs and outputs, dependencies, architecture or network diagram, and security boundaries.</p></div><div><h3>Implementation &amp; verification</h3><p>Actions performed, deployment instructions, tests, screenshots, troubleshooting, logs, rollback and recovery.</p></div><div><h3>Results &amp; reflection</h3><p>Measured outcomes where supported, security implications, lessons learned, improvements, interview talking points and a real repository link.</p></div></div></div></section>
      <Contact />
    </main>
  );
}
