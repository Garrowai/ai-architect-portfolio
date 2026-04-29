import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  ShieldCheck,
  Code2,
  Bot,
  Workflow,
  Database,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";

export default function App() {
  const services = [
    {
      icon: <Bot className="h-6 w-6" />,
      title: "AI Chatbots",
      text: "Custom AI assistants for client enquiries, lead capture, bookings, FAQs and internal support.",
    },
    {
      icon: <Workflow className="h-6 w-6" />,
      title: "Business Automation",
      text: "Simple automation systems that reduce manual admin, connect tools and improve daily workflows.",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Knowledge Systems",
      text: "RAG-style knowledge bases, document search and structured information systems for teams and solo businesses.",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "Web App Builds",
      text: "Landing pages, portfolio projects and lightweight web applications using modern development tools.",
    },
  ];

  const projects = [
    {
      name: "Tattoo Booking AI Chatbot",
      status: "Planned portfolio build",
      description:
        "An AI chatbot concept designed to help tattoo artists handle design enquiries, pricing questions, appointment requests and lead capture.",
    },
    {
      name: "Solo Levelling XP Tracker",
      status: "App concept",
      description:
        "A gamified personal development tracker using XP, coins, streaks, gear and leaderboards to turn daily progress into a game-like system.",
    },
    {
      name: "AI Architect Website",
      status: "In progress",
      description:
        "This landing page and portfolio site, built as the first public-facing foundation for my AI architect work.",
    },
  ];

  const qualifications = [
    "Level 5 Diploma in Web Applications Development with AI, starting January 2026",
    "CS50x Introduction to Computer Science, in progress",
    "Learning Python, JavaScript, HTML, CSS, SQL and Flask",
    "AI roadmap includes CS50 AI, Azure AI-900, Hugging Face NLP, RAG and agent frameworks",
    "Building toward practical AI systems, automation products and client-ready portfolio work",
  ];

  const roadmap = [
    "Foundation: CS50x, GitHub, programming basics and web fundamentals",
    "AI Foundation: search, logic, probability, machine learning and language models",
    "AI Engineering: RAG systems, agents, APIs, deployment and automation workflows",
    "AI Architect: production-ready AI applications, system design and client solutions",
  ];

  return (
    <main className="min-h-screen bg-[#080808] text-[#f5f0e8]">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(153,27,27,0.35),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(202,138,4,0.18),transparent_30%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.1fr_0.9fr] md:px-10 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-center"
          >
            <p className="mb-4 inline-flex w-fit items-center rounded-full border border-red-900/60 bg-red-950/30 px-4 py-2 text-sm text-red-100">
              AI Architect in training · Automation · Web Apps · Practical AI
              Systems
            </p>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-[#f5f0e8] md:text-7xl">
              Building AI systems that make work simpler, faster and easier to
              scale.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#d8d0c5]">
              I am Alex Garrow, an aspiring AI Architect focused on practical
              automation, AI chatbots, web applications and client-ready
              systems. This portfolio tracks my learning, projects and build
              path as I move from foundation coding into real AI engineering
              work.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-2xl bg-red-800 px-6 py-4 text-base font-medium text-white transition hover:bg-red-700"
              >
                View Portfolio Work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="https://github.com/garrowai/ai-architect-portfolio"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-base font-medium text-[#f5f0e8] transition hover:bg-white/10"
              >
                <ExternalLink className="mr-2 h-5 w-5" /> View GitHub
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex items-center"
          >
            <div className="w-full rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl shadow-red-950/20 backdrop-blur">
              <div className="mb-8 flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-red-200/80">
                    Current Focus
                  </p>
                  <h2 className="mt-2 text-3xl font-semibold text-[#f5f0e8]">
                    AI Architect Path
                  </h2>
                </div>
                <ShieldCheck className="h-10 w-10 text-yellow-500" />
              </div>
              <div className="space-y-4">
                {roadmap.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-900/80 text-sm font-semibold text-white">
                      {index + 1}
                    </div>
                    <p className="text-sm leading-6 text-[#d8d0c5]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm uppercase tracking-[0.25em] text-red-300">
            What I build
          </p>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            Practical AI services for small businesses and solo operators.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#d8d0c5]">
            The focus is not hype. The focus is useful systems that save time,
            answer questions, capture leads, reduce admin and create a cleaner
            workflow.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-red-950/80 text-red-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#f5f0e8]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#d8d0c5]">
                {service.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-2 md:px-10">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-red-300">
              About
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight">
              A builder learning in public.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#d8d0c5]">
              I am building the foundation to become a capable AI Architect
              through computer science, web development, AI engineering and
              practical client work. My aim is to design systems that are simple
              enough to use, strong enough to rely on and valuable enough to
              create real business outcomes.
            </p>
            <p className="mt-5 text-lg leading-8 text-[#d8d0c5]">
              This site will grow as my portfolio grows. Each project will be
              documented with the problem, the system design, the tools used and
              the result.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/30 p-8">
            <h3 className="text-2xl font-semibold text-[#f5f0e8]">
              Current qualifications and learning
            </h3>
            <div className="mt-6 space-y-4">
              {qualifications.map((item) => (
                <div key={item} className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />
                  <p className="text-sm leading-6 text-[#d8d0c5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-red-300">
              Portfolio
            </p>
            <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Selected projects and build concepts.
            </h2>
          </div>
          <a
            href="https://github.com/garrowai/ai-architect-portfolio"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-4 text-base font-medium text-[#f5f0e8] transition hover:bg-white/10"
          >
            View GitHub <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="mb-4 inline-flex rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs text-yellow-200">
                {project.status}
              </p>
              <h3 className="text-2xl font-semibold text-[#f5f0e8]">
                {project.name}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[#d8d0c5]">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-red-950/70 via-black to-yellow-950/40 p-8 md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-red-100/80">
                Contact
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[#f5f0e8]">
                Need an AI system, chatbot or automation workflow?
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d8d0c5]">
                I am currently building my portfolio and taking on suitable
                early projects where I can create clear value, document the
                process and improve the system over time.
              </p>
            </div>
            <div className="flex items-center">
              <a
                href="mailto:garrowai@proton.me"
                className="inline-flex items-center justify-center rounded-2xl bg-[#f5f0e8] px-6 py-4 text-base font-medium text-black transition hover:bg-white"
              >
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-[#a9a096] md:flex-row">
          <p>
            © {new Date().getFullYear()} Alex Garrow. AI Architect portfolio.
          </p>
          <p>Built with React, Tailwind and a practical AI-first roadmap.</p>
        </div>
      </footer>
    </main>
  );
}
