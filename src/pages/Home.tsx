import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Bot,
  Database,
  Server,
  Shield,
  FileText,
  Code2,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import LinkedInIcon from "../components/LinkedInIcon";

// ─── Data ────────────────────────────────────────────────────────────────────

const skillTags = [
  "Python",
  "Cybersecurity",
  "AI Automation",
  "GRC",
  "Local LLM",
  "Security Systems",
  "RAG",
  "Governance",
];

const direction = [
  {
    step: "01",
    label: "Foundation",
    active: true,
    items: [
      "Python programming",
      "CS50x Computer Science",
      "Git & version control",
      "Web fundamentals",
    ],
  },
  {
    step: "02",
    label: "Cybersecurity",
    active: true,
    items: [
      "ISC2 Certified in Cybersecurity",
      "CompTIA Security+",
      "CompTIA CySA+",
      "SOC / GRC / security knowledge",
    ],
  },
  {
    step: "03",
    label: "Automation + AI",
    active: false,
    items: [
      "Python automation scripts",
      "AI agents & workflows",
      "RAG / knowledge systems",
      "Local LLM infrastructure",
    ],
  },
  {
    step: "04",
    label: "Long-Term Direction",
    active: false,
    items: [
      "AI governance & compliance",
      "Security automation systems",
      "AI risk & compliance tooling",
      "AI security architecture",
    ],
  },
];

const services = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security Automation",
    text: "Python scripts and automated workflows that handle repetitive security tasks — monitoring, alerting, data collection and report generation.",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI Agents & Workflows",
    text: "Autonomous AI agents that complete multi-step tasks, reason through problems and execute structured workflows without constant human input.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "RAG / Knowledge Systems",
    text: "Retrieval-augmented systems that let teams query documents, policies and reports in natural language with accurate, source-grounded answers.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Local AI Infrastructure",
    text: "Self-hosted LLM environments running on local hardware — eliminating API costs, maintaining data privacy and enabling offline AI capability.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Governance & Risk Systems",
    text: "Lightweight tools for tracking AI system risk, documenting compliance requirements and building structured governance processes for AI deployments.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Python Automation Tools",
    text: "Custom Python scripts and tools that reduce manual admin, connect systems and turn repetitive tasks into reliable automated processes.",
  },
];

const qualifications = [
  "CS50x Introduction to Computer Science — in progress",
  "Learning Python, TypeScript, SQL and Flask",
  "Cybersecurity path: ISC2 CC → CompTIA Security+ → CompTIA CySA+",
  "AI learning: CS50 AI, Azure AI-900, Hugging Face NLP, RAG and agent frameworks",
  "Studying AI governance and responsible deployment of AI systems",
  "Building toward AI-assisted security automation and governance tooling",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    document.title = "Alex Garrow | Cybersecurity, AI & Automation";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f0e8]">

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 pt-20">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-glow absolute -top-40 right-0 h-[650px] w-[650px] rounded-full bg-red-900/[0.15] blur-[140px]" />
          <div className="animate-glow-delay absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-red-950/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/25 px-4 py-2 text-xs text-red-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
              Cybersecurity · AI Automation · Python · GRC
            </div>

            {/* Headline */}
            <h1 className="text-5xl font-semibold tracking-tight text-[#f5f0e8] md:text-6xl lg:text-[4.5rem] lg:leading-[1.07]">
              Building at the intersection
              <br />
              of cybersecurity, AI{" "}
              <span className="text-[#c8c0b5]">and automation.</span>
            </h1>

            {/* Subtext */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-[#a8a29e] md:text-lg">
              Alex Garrow — learning Python, security and AI in public. Focused on practical
              builds: security automation tools, AI-assisted workflows, RAG knowledge systems
              and governance tooling that solve real problems.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-xl bg-red-800 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/20"
              >
                View Portfolio <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <a
                href="https://github.com/garrowai/ai-architect-portfolio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-medium text-[#f5f0e8] transition-all hover:bg-white/10 hover:border-white/20"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> GitHub
              </a>
            </div>

            {/* Skill tags row */}
            <div className="mt-12 flex flex-wrap gap-2">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-[#a8a29e]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Current Direction ────────────────────────────────────── */}
      <section className="border-b border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">Direction</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              My current learning path.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a8a29e]">
              A structured path from programming fundamentals through cybersecurity, AI automation
              and into long-term AI governance and security systems work.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {direction.map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`rounded-2xl border p-6 ${
                  phase.active
                    ? "border-red-900/40 bg-red-950/[0.12]"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between">
                  <span
                    className={`text-2xl font-bold tracking-tight ${
                      phase.active ? "text-red-800/80" : "text-white/10"
                    }`}
                  >
                    {phase.step}
                  </span>
                  {phase.active && (
                    <span className="rounded-full border border-red-900/40 bg-red-950/30 px-2 py-0.5 text-[10px] text-red-300/80">
                      Active
                    </span>
                  )}
                </div>
                <h3 className="mb-3 text-sm font-semibold text-[#f5f0e8]">{phase.label}</h3>
                <ul className="space-y-1.5">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#a8a29e]/50" />
                      <span className="text-xs leading-5 text-[#a8a29e]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── What I Build ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">What I Build</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Practical systems for security, automation and governance.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a8a29e]">
            Not hype. Each system is focused on a real problem — saving time, improving security
            visibility, enabling better decisions or making AI accessible without cloud dependency.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/50 text-red-300/90 ring-1 ring-red-900/25">
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#f5f0e8]">{service.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#a8a29e]">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              A cybersecurity and AI builder, learning in public.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#a8a29e]">
              I'm Alex Garrow — building toward a career that sits at the intersection of
              cybersecurity, AI automation and governance. My focus is on practical, documented
              work: security automation tools, AI-assisted workflows and knowledge systems that
              solve real security and governance problems.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a8a29e]">
              Python is my core technical skill. Cybersecurity gives me the domain knowledge.
              AI gives me the capability multiplier. Everything I build is documented — the
              problem, the system, the tools and what I proved.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a8a29e]">
              This site grows as my portfolio grows.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-black/25 p-7"
          >
            <h3 className="mb-5 text-sm font-semibold text-[#f5f0e8]">
              Current learning &amp; qualifications
            </h3>
            <div className="space-y-3.5">
              {qualifications.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/60" />
                  <p className="text-xs leading-5 text-[#a8a29e]">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Project ──────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">Featured Project</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            What I'm currently building.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]"
        >
          {/* Header band */}
          <div className="border-b border-white/10 bg-gradient-to-r from-red-950/35 via-transparent to-transparent px-7 py-8 md:px-10 md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs text-amber-300">
                  In Development
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
                  Local AI Workstation +{" "}
                  <span className="text-[#c8c0b5]">Self-Hosted LLM System</span>
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#a8a29e]">
                  A mini PC configured as a private AI workstation running open-source language
                  models locally via Ollama and Open WebUI. Remote access enabled, zero API costs,
                  full data privacy and a live testbed for AI workflow experiments.
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-red-950/30">
                <Server className="h-6 w-6 text-red-300/70" />
              </div>
            </div>
          </div>

          {/* Detail panels */}
          <div className="grid divide-y divide-white/[0.07] md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-7 py-6 md:px-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/70">Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Ollama", "Open WebUI", "LM Studio", "Mini PC", "Remote access"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-[#d8d0c5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="px-7 py-6 md:px-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/70">Problem</p>
              <p className="text-xs leading-5 text-[#a8a29e]">
                Cloud AI creates API cost dependency and exposes data to third parties. A local
                setup gives full control over models, data and inference — with no recurring cost
                and offline capability.
              </p>
            </div>
            <div className="px-7 py-6 md:px-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/70">
                What I'm Proving
              </p>
              <p className="text-xs leading-5 text-[#a8a29e]">
                Local model deployment, hardware optimisation, context management, private data
                handling and using local LLMs as a foundation for security and automation
                workflows.
              </p>
            </div>
          </div>

          {/* CTA strip */}
          <div className="flex items-center justify-between border-t border-white/[0.07] px-7 py-5 md:px-10">
            <p className="text-xs text-[#a8a29e]">
              View all projects and planned builds on the portfolio page.
            </p>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-xl bg-red-800/80 px-4 py-2.5 text-xs font-medium text-white transition hover:bg-red-700"
            >
              View Full Portfolio <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/40 via-[#0d0505] to-[#080808] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-300/70">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#f5f0e8]">
                Working on a security, automation or AI project?
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
