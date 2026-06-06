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

const services = [
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Security Automation",
    text: "Python scripts and workflow automation I'm building to handle repetitive security tasks — monitoring checks, alert collection, report generation and data aggregation.",
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI Agents & Workflows",
    text: "AI-assisted workflow experiments that break complex tasks into structured, repeatable steps — connecting tools, handling decisions and running multi-stage processes with minimal input.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "RAG / Knowledge Systems",
    text: "Experiments with retrieval-augmented generation — building systems that let you query documents, policies and reports in natural language and get source-grounded answers.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Local AI Infrastructure",
    text: "A self-hosted LLM setup running open-source models on local hardware. Zero API cost, full data control and a private testbed for security and automation experiments.",
  },
  {
    icon: <FileText className="h-5 w-5" />,
    title: "Governance & Risk Systems",
    text: "Lightweight tooling I'm designing to track AI system risk, document compliance obligations and build structured governance records for AI deployments.",
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: "Python Automation Tools",
    text: "Python scripts and small tools I build to reduce repetitive manual work — connecting APIs, processing data and turning structured tasks into reliable automated processes.",
  },
];

const focus = [
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
    active: false,
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
    label: "Long-Term Target",
    active: false,
    items: [
      "AI governance & compliance",
      "Security automation systems",
      "AI risk & compliance tooling",
      "AI security architecture",
    ],
  },
];

const qualifications = [
  "CS50x Introduction to Computer Science — in progress",
  "Learning Python, SQL and Flask",
  "Cybersecurity path: ISC2 CC → CompTIA Security+ → CompTIA CySA+",
  "Building toward AI agents, RAG knowledge systems and local AI infrastructure",
  "Studying AI governance and the responsible deployment of AI systems",
  "Building toward security automation tooling and lightweight governance systems",
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function Home() {
  useEffect(() => {
    document.title = "Alex Garrow | Cybersecurity, AI & Automation";
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f0e8]">

      {/* ─── 1. Hero ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 pt-20">
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
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-red-900/40 bg-red-950/25 px-4 py-2 text-xs text-red-200/80">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500/80" />
              Cybersecurity · AI Automation · Python · GRC
            </div>

            <h1 className="text-5xl font-semibold tracking-tight text-[#f5f0e8] md:text-6xl lg:text-[4.5rem] lg:leading-[1.07]">
              Building practical cybersecurity
              <br />
              <span className="text-[#c8c0b5]">and AI automation tools.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#a8a29e] md:text-lg">
              I'm learning in public while building Python-based security workflows, local AI
              systems, RAG experiments and governance tools. The goal is straightforward: build
              practical systems, document the process and prove what works.
            </p>

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

      {/* ─── 2. Featured Project ──────────────────────────────────── */}
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
          <div className="border-b border-white/10 bg-gradient-to-r from-red-950/35 via-transparent to-transparent px-7 py-8 md:px-10 md:py-10">
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div className="max-w-2xl">
                <span className="mb-4 inline-flex rounded-full border border-amber-500/20 bg-amber-500/[0.08] px-3 py-1 text-xs text-amber-300">
                  In Development
                </span>
                <h3 className="mt-3 text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
                  Beelink SER5{" "}
                  <span className="text-[#c8c0b5]">— Dedicated AI, Python &amp; Cyber Lab</span>
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#a8a29e]">
                  A Beelink SER5 (Ryzen 5 5500U, 32GB RAM, 500GB SSD) configured as a dedicated
                  lab machine for Python development, cybersecurity practice, local AI
                  experimentation and homelab work — without wiping Windows. Windows 11 stays as
                  the main OS with WSL2 Ubuntu inside it for a real Linux development environment.
                  Docker Desktop, Ollama (running Llama 3.1 and Qwen) and Odysseus provide a
                  fully self-hosted, private AI workspace with zero API cost. Project folders are
                  organised across Python, Cybersecurity, AI, Homelab and Websites.
                </p>
              </div>
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-red-950/30">
                <Server className="h-6 w-6 text-red-300/70" />
              </div>
            </div>
          </div>

          <div className="grid divide-y divide-white/[0.07] md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="px-7 py-6 md:px-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/70">Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Beelink SER5", "WSL2 Ubuntu", "Ollama", "Odysseus", "Docker Desktop", "VS Code"].map((tag) => (
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
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/70">Setup</p>
              <p className="text-xs leading-5 text-[#a8a29e]">
                Windows 11 as the main OS with WSL2 Ubuntu for a real Linux environment inside it.
                Windows Terminal and VS Code with Python, Docker and WSL extensions. Git,
                Docker Desktop with WSL integration, Ollama running Llama 3.1 and Qwen, and
                Odysseus connected to Ollama as a private self-hosted AI workspace.
              </p>
            </div>
            <div className="px-7 py-6 md:px-8">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/70">
                What I'm Proving
              </p>
              <p className="text-xs leading-5 text-[#a8a29e]">
                Running Linux, Docker and local AI on a single machine without dual-booting or
                a dedicated server. Using it for Python development, cybersecurity practice and
                local AI experiments — with full data control and no cloud dependency or API cost.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.07] px-7 py-5 md:px-10">
            <p className="text-xs text-[#a8a29e]">
              View all projects, planned builds and concepts on the portfolio page.
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

      {/* ─── 3. What I Build ──────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[0.015]">
        <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">What I Build</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Six areas I'm actively building toward.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a8a29e]">
              These aren't finished services. They're the areas I'm learning through practical
              builds, experiments and documented projects — each one grounded in a real problem
              worth solving.
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
        </div>
      </section>

      {/* ─── 4. Current Focus ─────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/70">Current Focus</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            My active learning roadmap.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-6 text-[#a8a29e]">
            A deliberate, structured path — from programming and computer science fundamentals
            through cybersecurity credentials, into AI automation, and toward long-term security
            and governance systems work.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {focus.map((phase, i) => (
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
                {phase.step === "02" && (
                  <span className="rounded-full border border-white/15 bg-white/[0.04] px-2 py-0.5 text-[10px] text-[#a8a29e]">
                    Up Next
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
      </section>

      {/* ─── 5. About ─────────────────────────────────────────────── */}
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
              Early-stage. Focused. Building in public.
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#a8a29e]">
              I'm Alex Garrow — building toward cybersecurity and AI systems work through
              practical, documented projects. I'm not a finished product. I'm someone with a
              clear direction, a structured plan and a habit of building things and sharing the
              work openly.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a8a29e]">
              My focus is on security automation, local AI infrastructure, RAG knowledge systems
              and lightweight governance tooling. Python is my core technical skill. Cybersecurity
              gives me the domain. AI gives me a multiplier on what I can build and prove.
            </p>
            <p className="mt-4 text-sm leading-7 text-[#a8a29e]">
              Everything gets documented — the problem, the approach, the tools and what I
              actually proved. This site grows with the work.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-black/25 p-7"
          >
            <h3 className="text-sm font-semibold text-[#f5f0e8]">
              Proof of direction and discipline
            </h3>
            <p className="mt-2 mb-5 text-xs leading-5 text-[#a8a29e]">
              Each item below is a commitment in progress — not a credential to display, but
              evidence of a consistent, deliberate learning path.
            </p>
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

      {/* ─── 6. Contact ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/40 via-[#0d0505] to-[#080808] p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-300/70">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#f5f0e8]">
                Open to feedback, collaboration and early practical builds.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-[#a8a29e]">
                I'm early-stage and building in public. If you're working on something in
                security, automation or AI — or you want to give feedback on what I'm building —
                I'm genuinely open to the conversation.
              </p>
            </div>
            <div className="flex md:justify-end">
              <a
                href="mailto:garrowai@proton.me"
                className="inline-flex items-center justify-center rounded-xl bg-[#f5f0e8] px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white"
              >
                <Mail className="mr-2 h-4 w-4" /> Get in Touch
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
