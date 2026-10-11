import { useEffect } from "react";
import { ExternalLink, ArrowUpRight, Mail, Send } from "lucide-react";
import type { Project } from "../data/portfolio";

export function PageMeta({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    for (const selector of ['meta[name="description"]', 'meta[property="og:description"]', 'meta[name="twitter:description"]']) document.querySelector(selector)?.setAttribute("content", description);
    for (const selector of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) document.querySelector(selector)?.setAttribute("content", title);
    const url = "https://garrow-cyber-ai.netlify.app" + window.location.pathname;
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", url);
    document.querySelector('meta[property="og:url"]')?.setAttribute("content", url);
  }, [title, description]);
  return null;
}

export function SectionHeading({ eyebrow, title, text, id }: { eyebrow: string; title: string; text?: string; id?: string }) {
  return <header className="section-heading"><p className="eyebrow">{eyebrow}</p><h2 id={id}>{title}</h2>{text && <p>{text}</p>}</header>;
}

export function ProjectCard({ project }: { project: Project }) {
  const study = project.caseStudy;
  return <article className="project-card">
    <div className="project-top"><p className="small">{project.category}</p><span className={`status ${project.status === "Live" ? "live" : ""}`}>{project.status}</span></div>
    <h3>{project.title}</h3><p>{project.summary}</p>
    <div className="tags">{project.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
    <div className="project-evidence"><h4>{project.status === "Live" ? "Available evidence" : "Evidence to produce"}</h4><p>{project.evidenceGoal}</p></div>
    {(project.repositoryUrl || project.liveUrl) && <div className="project-links">{project.repositoryUrl && <a className="text-link" href={project.repositoryUrl} target="_blank" rel="noreferrer">Source code <ExternalLink size={15} /></a>}{project.liveUrl && <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={16} /></a>}</div>}
    {study && <details className="case-study"><summary>Read the case study</summary><p><strong>Problem:</strong> {study.problem}</p><p><strong>Environment:</strong> {study.environment}</p>{study.architecture && <img src={study.architecture.src} alt={study.architecture.alt} loading="lazy" />}<p><strong>Tools:</strong> {study.tools.join(", ")}</p>{([{ title: "Actions performed", items: study.actions }, { title: "Troubleshooting", items: study.troubleshooting }, { title: "Security implications", items: study.securityImplications }, { title: "Results", items: study.results }, { title: "Lessons learned", items: study.lessonsLearned }, { title: "Improvements", items: study.improvements }, { title: "Interview talking points", items: study.interviewTalkingPoints }]).map(section => <section key={section.title}><h4>{section.title}</h4><ul>{section.items.map(item => <li key={item}>{item}</li>)}</ul></section>)}{study.screenshots.map(screenshot => <figure key={screenshot.src}><img src={screenshot.src} alt={screenshot.alt} loading="lazy" /><figcaption>{screenshot.caption}</figcaption></figure>)}</details>}
  </article>;
}

export function Contact() {
  return <section id="contact" className="section container contact-grid" aria-labelledby="contact-title">
    <div><SectionHeading eyebrow="Contact" id="contact-title" title="A conversation about the next step." text="I'm interested in entry opportunities across IT support, asset management, systems administration and endpoint operations. Feedback on my learning and practical work is welcome." /><a href="mailto:garrowai@proton.me" className="text-link"><Mail size={18} /> garrowai@proton.me</a></div>
    <form action="https://formspree.io/f/mkoaoabl" method="POST"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" autoComplete="name" required /><label htmlFor="contact-email">Email</label><input id="contact-email" name="email" type="email" autoComplete="email" required /><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" rows={5} required /><button type="submit" className="button primary">Send message <Send size={16} /></button></form>
  </section>;
}
