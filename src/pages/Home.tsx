import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Mail,
  Bot,
  Workflow,
  Database,
  Server,
  GitBranch,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";

const services = [
  {
    icon: <Bot className="h-5 w-5" />,
    title: "AI Agents",
    text: "Autonomous agents that handle tasks, make decisions and execute multi-step workflows without constant human input.",
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Automation Systems",
    text: "Connected workflows that reduce manual admin, link business tools and keep operations running cleanly.",
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "RAG / Knowledge Systems",
    text: "Document retrieval, semantic search and structured knowledge bases that let teams query information accurately.",
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "Local LLM Infrastructure",
    text: "Self-hosted AI models on local hardware — lower API cost, stronger privacy and offline AI capability.",
  },
  {
    icon: <GitBranch className="h-5 w-5" />,
    title: "AI Workflow Design",
    text: "Multi-step AI flows that combine models, tools, memory and human checkpoints into reliable systems.",
  },
];

const qualifications = [
  "CS50x Introduction to Computer Science — in progress",
  "Learning Python, TypeScript, SQL, Flask and React",
  "AI roadmap: CS50 AI, Azure AI-900, Hugging Face NLP, RAG and agent frameworks",
  "Cyber security path: ISC2 CC → CompTIA Security+ → CompTIA CySA+",
  "Studying AI governance and the responsible deployment of AI systems",
  "Building toward production-ready AI systems and agent-based architectures",
];

const roadmap = [
  { step: "01", label: "Foundation", text: "CS50x, GitHub, programming basics and web fundamentals" },
  { step: "02", label: "AI Foundation", text: "Search, logic, probability, machine learning and language models" },
  { step: "03", label: "AI Engineering", text: "RAG systems, agents, APIs, deployment and automation workflows" },
  { step: "04", label: "AI Architect", text: "Production-ready AI applications, system design and client solutions" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f0e8]">
      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/10 pt-20">
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="animate-glow absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-red-900/20 blur-[130px]" />
          <div className="animate-glow-delay absolute bottom-0 -left-24 h-[400px] w-[400px] rounded-full bg-amber-900/10 blur-[110px]" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:py-36">
          {/* Left: headline */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-center"
          >
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-red-900/50 bg-red-950/30 px-4 py-2 text-xs text-red-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400" />
              Applied AI Systems Builder · AI Architect in Training
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-[#f5f0e8] md:text-6xl lg:text-[4.25rem] lg:leading-[1.08]">
              I build practical AI systems, agents and infrastructure.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-[#a8a29e]">
              Alex Garrow — focused on AI agents, automation workflows, RAG knowledge systems and local LLM
              infrastructure. Building in public, documenting everything.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="inline-flex items-center justify-center rounded-xl bg-red-800 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-red-700 hover:shadow-lg hover:shadow-red-900/25"
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
          </motion.div>

          {/* Right: roadmap card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="flex items-center"
          >
            <div className="w-full rounded-2xl border border-white/10 bg-white/[0.03] p-7 shadow-2xl shadow-black/40 backdrop-blur-sm">
              <p className="mb-1 text-xs uppercase tracking-[0.25em] text-red-400/80">
                Current Focus
              </p>
              <h2 className="mb-6 text-2xl font-semibold text-[#f5f0e8]">
                AI Architect Path
              </h2>
              <div className="space-y-3">
                {roadmap.map((item) => (
                  <div
                    key={item.step}
                    className="flex gap-4 rounded-xl border border-white/[0.07] bg-black/25 p-4"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-900/70 text-xs font-semibold text-white">
                      {item.step}
                    </span>
                    <div>
                      <p className="text-xs font-medium text-[#f5f0e8]">{item.label}</p>
                      <p className="mt-0.5 text-xs leading-5 text-[#a8a29e]">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
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
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/80">
            What I Build
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Practical AI systems, not hype.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#a8a29e]">
            Each system is focused on solving a real problem — saving time, reducing admin, enabling better
            decisions or making AI accessible without cloud lock-in.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-red-950/60 text-red-300 ring-1 ring-red-900/30">
                {service.icon}
              </div>
              <h3 className="text-sm font-semibold text-[#f5f0e8]">{service.title}</h3>
              <p className="mt-2 text-xs leading-5 text-[#a8a29e]">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─── About ────────────────────────────────────────────────── */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-red-400/80">About</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Building toward AI architecture, one system at a time.
            </h2>
            <p className="mt-5 text-base leading-7 text-[#a8a29e]">
              I'm Alex Garrow — an applied AI systems builder working toward a full AI Architect capability.
              My focus is on practical builds: agents that work, workflows that run and knowledge systems
              that give real answers.
            </p>
            <p className="mt-4 text-base leading-7 text-[#a8a29e]">
              This portfolio tracks my path — the problems I'm solving, the systems I'm building and the
              skills I'm proving along the way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="rounded-2xl border border-white/10 bg-black/30 p-7"
          >
            <h3 className="text-sm font-semibold text-[#f5f0e8]">
              Current path &amp; qualifications
            </h3>
            <div className="mt-5 space-y-3.5">
              {qualifications.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-500/70" />
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
          <p className="text-xs uppercase tracking-[0.3em] text-red-400/80">Featured Project</p>
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
          {/* Card header */}
          <div className="border-b border-white/10 bg-gradient-to-r from-red-950/40 via-transparent to-transparent p-7 md:p-10">
            <span className="mb-4 inline-flex rounded-full border border-amber-500/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-300">
              In Development
            </span>
            <h3 className="mt-3 text-2xl font-semibold text-[#f5f0e8] md:text-3xl">
              Local AI Workstation + Self-Hosted LLM System
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-[#a8a29e]">
              A fully self-hosted AI environment running open-source language models locally — eliminating API
              costs, ensuring data privacy and enabling offline AI work at full capability.
            </p>
          </div>

          {/* Card details — 3 columns */}
          <div className="grid divide-y divide-white/[0.07] md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="p-6 md:p-7">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/80">Stack</p>
              <div className="flex flex-wrap gap-2">
                {["Ollama", "LM Studio", "Open WebUI", "Ubuntu", "NVIDIA GPU"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-[#d8d0c5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-6 md:p-7">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/80">Problem</p>
              <p className="text-xs leading-5 text-[#a8a29e]">
                API-dependent AI workflows are costly and expose data to third parties. Local infrastructure
                gives full control, zero recurring cost and offline capability.
              </p>
            </div>
            <div className="p-6 md:p-7">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-red-400/80">What I'm Proving</p>
              <p className="text-xs leading-5 text-[#a8a29e]">
                Local model deployment, hardware-optimised inference, context management, model selection for
                different tasks and private data handling at the infrastructure level.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ─── Contact ──────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-red-950/50 via-[#0c0404] to-amber-950/20 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-300/80">Contact</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[#f5f0e8] md:text-4xl">
                Have a project that needs an AI system or automation workflow?
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
