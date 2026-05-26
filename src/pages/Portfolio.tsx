import { useEffect } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Mail } from "lucide-react";
import LinkedInIcon from "../components/LinkedInIcon";

// ─── Types & Data ─────────────────────────────────────────────────────────────

type StatusColor = "green" | "amber" | "blue" | "slate";

interface Project {
  name: string;
  status: string;
  statusColor: StatusColor;
  stack: string[];
  problem: string;
  learning: string;
  future: string;
}

const projects: Project[] = [
  {
    name: "AI Architect Portfolio Website",
    status: "Live",
    statusColor: "green",
    stack: [
      "React 19",
      "Vite",
      "Tailwind CSS v4",
      "TypeScript",
      "React Router",
      "Framer Motion",
      "Netlify",
    ],
    problem:
      "No professional online presence to document my learning path, communicate my direction or show proof of work as I move into cybersecurity and AI systems.",
    learning:
      "Modern React architecture, TypeScript strict mode, Tailwind v4 CSS-first config, Framer Motion animations, React Router SPA routing, Vite build pipeline and full Netlify deployment workflow.",
    future:
      "Expand with detailed project case studies, add documentation for each build, grow the portfolio as projects are completed and potentially add a technical blog section.",
  },
  {
    name: "Local AI Workstation + Self-Hosted LLM System",
    status: "In Development",
    statusColor: "amber",
    stack: [
      "Ollama",
      "Open WebUI",
      "LM Studio",
      "Mini PC hardware",
      "Remote access tooling",
      "Ubuntu",
    ],
    problem:
      "Cloud AI creates API cost dependency and exposes data to third parties. Local self-hosted infrastructure gives full control over models, data handling and inference cost — with zero recurring API spend.",
    learning:
      "Local model deployment, hardware-optimised inference, context window management, model selection strategies for different tasks, remote access configuration and private data handling at the infrastructure level.",
    future:
      "Integrate with Python automation workflows, run local AI agents for security research tasks and use the setup as a private testbed for security-specific AI experiments and model evaluation.",
  },
  {
    name: "Tattoo Booking AI Chatbot",
    status: "Planned Build",
    statusColor: "blue",
    stack: ["Claude API", "n8n", "Supabase", "React", "Webhooks", "REST APIs"],
    problem:
      "Tattoo artists spend hours each week answering the same questions about pricing, availability and design style. An AI chatbot handles enquiries automatically, captures leads and frees the artist to focus on the work.",
    learning:
      "Conversational AI design, booking flow automation, structured lead capture, webhook-based integrations and building domain-specific chatbots that handle real-world edge cases correctly without breaking.",
    future:
      "Expand to full booking management with calendar integration, automated follow-up sequences and a small admin dashboard for the artist to manage leads and appointments.",
  },
  {
    name: "RAG Knowledge Base",
    status: "Planned Build",
    statusColor: "blue",
    stack: [
      "LangChain",
      "ChromaDB",
      "Ollama",
      "FastAPI",
      "Python",
      "React",
    ],
    problem:
      "Security teams and organisations waste time manually searching through documents, policies and reports. A RAG system enables accurate, source-grounded natural language queries across large document sets — reducing time to answer and improving consistency.",
    learning:
      "Vector embeddings, semantic search, retrieval-augmented generation pipelines, chunking strategies, document preprocessing and building knowledge systems that return accurate answers without hallucination.",
    future:
      "Apply RAG to security policy documentation, compliance frameworks and threat intelligence to build lightweight AI-assisted GRC tooling that answers compliance questions from source documents.",
  },
  {
    name: "Security Automation Dashboard",
    status: "Planned Build",
    statusColor: "blue",
    stack: [
      "Python",
      "FastAPI",
      "React",
      "REST APIs",
      "SQLite",
      "Automation scripts",
    ],
    problem:
      "Manual security monitoring and reporting tasks are time-consuming, inconsistent and error-prone. A central automation dashboard collects data, runs checks, generates reports and surfaces alerts without manual effort.",
    learning:
      "Security tooling APIs, Python automation scripting, REST API integration patterns, dashboard UI design, background task scheduling and building reliable automated pipelines that handle errors and retries gracefully.",
    future:
      "Extend with AI-powered anomaly detection, automated threat prioritisation and remediation suggestions — moving from a reporting tool toward a lightweight AI-assisted security operations tool.",
  },
  {
    name: "AI Governance / Risk Tracking System",
    status: "Concept",
    statusColor: "slate",
    stack: [
      "Python",
      "FastAPI",
      "SQLite / Postgres",
      "React",
      "PDF generation",
      "NIST AI RMF",
    ],
    problem:
      "Organisations deploying AI systems often lack structured processes for tracking model risks, documenting compliance requirements and maintaining governance records — creating audit exposure and regulatory risk.",
    learning:
      "AI governance frameworks (EU AI Act, NIST AI RMF), risk assessment methodology, compliance documentation practices, structured data modelling and building practical lightweight GRC tooling for AI deployments.",
    future:
      "Build a deployable AI risk register aligned to real regulatory frameworks — a tool small organisations can use to track AI system risk, document compliance obligations and generate audit-ready reports.",
  },
  {
    name: "Future AI Security Workflow System",
    status: "Future Build",
    statusColor: "slate",
    stack: [
      "LangGraph",
      "Claude API",
      "Python",
      "SIEM integration",
      "Security APIs",
      "Human-in-loop",
    ],
    problem:
      "Security operations require rapid analysis of large volumes of alerts, logs and threat data. Manual triage is slow and inconsistent. An AI-powered workflow system can classify, correlate and escalate faster — with full human oversight maintained.",
    learning:
      "Agentic architecture for security use cases, SIEM data integration, alert classification logic, multi-step reasoning workflows, human-in-the-loop escalation design and building AI systems that operate safely inside security environments.",
    future:
      "Develop toward a lightweight AI SOC analyst assistant — capable of alert triage, basic threat hunting, compliance reporting and structured incident documentation, all with clear human oversight at every decision point.",
  },
];

const statusStyles: Record<StatusColor, string> = {
  green: "border-green-500/25 bg-green-500/[0.08] text-green-300",
  amber: "border-amber-500/25 bg-amber-500/[0.08] text-amber-300",
  blue: "border-blue-500/25 bg-blue-500/[0.08] text-blue-300",
  slate: "border-white/10 bg-white/[0.04] text-[#a8a29e]",
};

const stats = [
  { value: "7", label: "Projects" },
  { value: "1", label: "Live" },
  { value: "3", label: "Planned" },
  { value: "3", label: "Concepts & Future" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Portfolio() {
  useEffect(() => {
    document.title = "Portfolio | Alex Garrow | Cybersecurity, AI & Automation";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] pt-20 text-[#f5f0e8]">

      {/* ─── Page Header ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-glow absolute -top-28 right-0 h-[500px] w-[500px] rounded-full bg-red-900/[0.12] blur-[130px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">Portfolio</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Projects, builds and planned systems.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#a8a29e]">
              Every project is documented with the problem it addresses, the system design, the
              tools used and what I'm proving. This page grows as my builds do.
            </p>
            <a
              href="https://github.com/garrowai/ai-architect-portfolio"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-[#f5f0e8] transition hover:bg-white/10 hover:border-white/20"
            >
              <ExternalLink className="h-4 w-4" /> View GitHub
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mt-10 flex flex-wrap gap-6 border-t border-white/[0.07] pt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-[#f5f0e8]">{stat.value}</p>
                <p className="mt-0.5 text-xs text-[#a8a29e]">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Project Cards ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.025] transition-all duration-200 hover:border-white/[0.18] hover:bg-white/[0.04]"
            >
              {/* Card header */}
              <div className="border-b border-white/[0.07] p-6">
                <span
                  className={`inline-flex rounded-full border px-2.5 py-1 text-[11px] font-medium ${statusStyles[project.statusColor]}`}
                >
                  {project.status}
                </span>
                <h3 className="mt-3 text-base font-semibold leading-snug text-[#f5f0e8]">
                  {project.name}
                </h3>
                {/* Stack tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2 py-0.5 text-[11px] text-[#b8b0a8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-1 flex-col divide-y divide-white/[0.06]">
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-400/70">
                    Problem
                  </p>
                  <p className="text-xs leading-5 text-[#a8a29e]">{project.problem}</p>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-400/70">
                    What I'm Proving
                  </p>
                  <p className="text-xs leading-5 text-[#a8a29e]">{project.learning}</p>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-400/70">
                    Future Direction
                  </p>
                  <p className="text-xs leading-5 text-[#a8a29e]">{project.future}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/40 via-[#0d0505] to-[#080808] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-300/70">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#f5f0e8]">
                Working on a security, AI or automation project?
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#a8a29e]">
                I'm building my portfolio and taking on suitable early projects where I can create
                clear value, document the process and prove the system.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="mailto:garrowai@proton.me"
                className="inline-flex items-center justify-center rounded-xl bg-[#f5f0e8] px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white"
              >
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#6b6560] md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Alex Garrow — Cybersecurity, AI &amp; Automation</p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="https://www.linkedin.com/in/alex-garrow/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#a8a29e]"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/garrowai/ai-architect-portfolio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[#a8a29e]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              GitHub
            </a>
            <span className="hidden md:inline">·</span>
            <span>Built with React, Vite and Tailwind CSS</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
