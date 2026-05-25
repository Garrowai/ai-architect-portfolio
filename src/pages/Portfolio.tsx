import { motion } from "framer-motion";
import { ExternalLink, Mail, CheckCircle2 } from "lucide-react";

// ─── Data ────────────────────────────────────────────────────────────────────

const caseStudyDetails = [
  {
    label: "Problem",
    title: "No professional AI presence",
    text: "I needed a clean, professional site that explains who I am, what I'm building and where my portfolio work lives — one that grows as my skills do.",
  },
  {
    label: "Stack",
    title: "React, Vite, Tailwind, TypeScript",
    text: "Built with React 19, Vite, Tailwind CSS v4, TypeScript, Framer Motion and Lucide icons. Version-controlled with Git and deployed via Netlify.",
  },
  {
    label: "Outcome",
    title: "Live and mobile-ready",
    text: "The site is live, connected to GitHub, fully responsive on mobile and structured to scale as new projects, case studies and AI builds are added.",
  },
  {
    label: "What I Learned",
    title: "Full deployment flow",
    text: "Component architecture, Tailwind v4 setup, React Router, build pipeline fixes, Git commit workflow and deploying a production site through Netlify.",
  },
];

type StatusColor = "green" | "amber" | "blue" | "slate";

interface Project {
  name: string;
  status: string;
  statusColor: StatusColor;
  stack: string[];
  problem: string;
  learning: string;
}

const projects: Project[] = [
  {
    name: "Local AI Workstation + Self-Hosted LLM System",
    status: "In Development",
    statusColor: "amber",
    stack: ["Ollama", "LM Studio", "Open WebUI", "Ubuntu", "NVIDIA GPU"],
    problem:
      "API-dependent workflows are expensive and expose data to third parties. A self-hosted local system eliminates recurring API costs and keeps sensitive data private.",
    learning:
      "Local model deployment, hardware-optimised inference, context window management, model selection strategies and building privacy-first AI infrastructure.",
  },
  {
    name: "Tattoo Booking AI Chatbot",
    status: "Planned Build",
    statusColor: "blue",
    stack: ["Claude API", "n8n", "Supabase", "React", "Webhooks"],
    problem:
      "Tattoo artists spend hours answering the same enquiries about pricing, availability and design style. An AI chatbot handles this automatically, freeing the artist for the actual work.",
    learning:
      "Conversational AI design, booking flow automation, lead capture logic and building domain-specific chatbots that handle edge cases cleanly.",
  },
  {
    name: "RAG Knowledge Base",
    status: "Planned Build",
    statusColor: "blue",
    stack: ["LangChain", "ChromaDB", "Ollama", "FastAPI", "Python"],
    problem:
      "Teams waste time manually searching documents for answers. A RAG system lets users query large document stores in natural language and get accurate, source-grounded responses.",
    learning:
      "Vector embeddings, semantic search, retrieval-augmented generation, chunking strategies and building knowledge systems that give accurate answers without hallucination.",
  },
  {
    name: "AI Automation Workflow System",
    status: "Concept",
    statusColor: "slate",
    stack: ["n8n", "Make.com", "Python", "Webhooks", "REST APIs"],
    problem:
      "Repetitive manual processes — data entry, report generation, notifications and transfers — consume business hours. An automation layer connects tools and handles these without human input.",
    learning:
      "Workflow orchestration, trigger-based automation, API integration patterns and building reliable automated pipelines that handle errors gracefully.",
  },
  {
    name: "Future Agent-Based Business Workflow",
    status: "Future Build",
    statusColor: "slate",
    stack: ["LangGraph", "Claude API", "Tool Use", "Memory Systems", "Python"],
    problem:
      "Complex, multi-step business processes require adaptive decision-making that simple automation can't handle. Agent-based systems can reason, use tools and execute multi-step tasks autonomously.",
    learning:
      "Agent architecture design, tool use patterns, multi-step reasoning, state management, human-in-the-loop checkpoints and building production-ready agentic systems.",
  },
];

const statusStyles: Record<StatusColor, string> = {
  green: "border-green-500/25 bg-green-500/10 text-green-300",
  amber: "border-amber-500/25 bg-amber-500/10 text-amber-300",
  blue: "border-blue-500/25 bg-blue-500/10 text-blue-300",
  slate: "border-white/10 bg-white/5 text-[#a8a29e]",
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[#080808] pt-20 text-[#f5f0e8]">
      {/* ─── Page Header ──────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-glow absolute -top-24 right-0 h-[450px] w-[450px] rounded-full bg-red-900/15 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400/80">Portfolio</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
              Projects, case studies and builds.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#a8a29e]">
              Every project documents the problem, the system design, the tools used and what I'm proving.
              This page grows as my builds do.
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
        </div>
      </section>

      {/* ─── Case Study 01: Portfolio Website ──────────────────────── */}
      <section className="border-b border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-2 inline-flex rounded-full border border-green-500/25 bg-green-500/10 px-3 py-1 text-xs text-green-300">
              Live
            </div>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-red-400/80">Case Study 01</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              AI Architect Portfolio Website
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-[#a8a29e]">
              My first public portfolio build — created to establish a professional presence, connect my
              GitHub, document my learning path and start showing proof of work.
            </p>
          </motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {caseStudyDetails.map((detail, i) => (
              <motion.div
                key={detail.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-2xl border border-white/10 bg-black/30 p-6"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-red-400/80">{detail.label}</p>
                <h3 className="mt-3 text-sm font-semibold text-[#f5f0e8]">{detail.title}</h3>
                <p className="mt-3 text-xs leading-5 text-[#a8a29e]">{detail.text}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack proof */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-6"
          >
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-red-400/80">What I'm proving</p>
            <div className="flex flex-wrap gap-3">
              {[
                "React 19 component architecture",
                "TypeScript strict mode",
                "Tailwind CSS v4 (CSS-first config)",
                "Framer Motion animations",
                "React Router v7 SPA routing",
                "Vite build pipeline",
                "Netlify deployment",
                "Git version control",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-amber-500/70" />
                  <span className="text-xs text-[#a8a29e]">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Project Cards ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/80">All Projects</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Builds, concepts and planned systems.
          </h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              {/* Status badge */}
              <span
                className={`mb-4 inline-flex w-fit rounded-full border px-3 py-1 text-xs ${statusStyles[project.statusColor]}`}
              >
                {project.status}
              </span>

              {/* Project name */}
              <h3 className="text-base font-semibold text-[#f5f0e8]">{project.name}</h3>

              {/* Stack tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.stack.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2 py-0.5 text-xs text-[#d8d0c5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Details */}
              <div className="mt-5 flex flex-1 flex-col space-y-4 border-t border-white/[0.08] pt-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-red-400/80">
                    Problem
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-[#a8a29e]">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.15em] text-red-400/80">
                    What I'm Proving
                  </p>
                  <p className="mt-1.5 text-xs leading-5 text-[#a8a29e]">{project.learning}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/50 via-[#0c0404] to-amber-950/20 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-300/80">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#f5f0e8]">
                Have a project that needs an AI system?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-[#a8a29e]">
                I'm building my portfolio and taking on suitable early projects where I can create clear
                value and document the process.
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
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-[#a8a29e] md:flex-row">
          <p>© {new Date().getFullYear()} Alex Garrow — AI Architect Portfolio</p>
          <p>Built with React, Vite and Tailwind CSS</p>
        </div>
      </footer>
    </main>
  );
}
