export type ProjectStatus = "Live" | "In progress" | "Lab" | "Planned" | "Future capstone";

export interface CaseStudy {
  problem: string;
  environment: string;
  architecture?: { src: string; alt: string };
  tools: string[];
  actions: string[];
  troubleshooting: string[];
  securityImplications: string[];
  screenshots: { src: string; alt: string; caption: string }[];
  results: string[];
  lessonsLearned: string[];
  improvements: string[];
  interviewTalkingPoints: string[];
}

export interface Project {
  id: string;
  title: string;
  status: ProjectStatus;
  category: string;
  summary: string;
  tools: string[];
  evidenceGoal: string;
  repositoryUrl?: string;
  liveUrl?: string;
  caseStudy?: CaseStudy;
}

export const projects: Project[] = [
  { id: "portfolio", title: "Personal technical portfolio", status: "Live", category: "Web / Documentation", summary: "A website bringing together technical projects, a structured learning path and practical development in systems, infrastructure and automation.", tools: ["React", "TypeScript", "Vite", "Tailwind CSS", "Netlify"], evidenceGoal: "Website source code and a live deployment, with a reusable structure for adding documented technical projects.", repositoryUrl: "https://github.com/garrowai/ai-architect-portfolio", liveUrl: "https://alexgarrow.dev" },
  { id: "inventory", title: "PowerShell inventory & health report", status: "Planned", category: "01 / PowerShell foundations", summary: "A read-only collector for operating system, hardware, disk space, uptime and selected services on my own PCs. The first intended technical build.", tools: ["PowerShell", "Git", "CSV", "JSON"], evidenceGoal: "Documented commands, sanitised sample output, tests and error handling. Explain each step and how failures are diagnosed." },
  { id: "infrastructure", title: "Mini-company infrastructure lab", status: "Planned", category: "02 / Systems & networking", summary: "A fictional company environment with a Windows domain, client workstation and Linux service on a private virtual network.", tools: ["Windows Server", "Active Directory", "Linux", "Virtual machines", "DNS"], evidenceGoal: "Network diagram, change log, least-privilege permissions, policy checks, a backup restore and documented break/fix exercises." },
  { id: "workflow", title: "Employee onboarding automation", status: "Planned", category: "03 / Software & workflows", summary: "A simulated workflow that validates staff records, creates lab accounts and updates a sample asset register, with human approval where needed.", tools: ["Python", "PowerShell", "SQLite", "CSV / JSON", "APIs"], evidenceGoal: "Before/after process map, validation and duplicate checks, tests, audit logs, failure recovery and rollback instructions. Any impact estimates must be labelled." },
  { id: "cloud", title: "Cloud / hybrid solution", status: "Future capstone", category: "04 / Integrated systems", summary: "A small Azure or simulated hybrid environment connecting identity, a service, monitoring and repeatable deployment after the core foundations are established.", tools: ["Azure or simulation", "Identity", "Bicep", "Monitoring"], evidenceGoal: "Architecture diagram, deployment and rollback, cost assumptions, security decisions, recovery checks and an explanation of the design tradeoffs." },
];

export const learningPath = [
  { title: "PowerShell, Windows & Git", topics: "PowerShell objects, pipelines, command discovery, functions, error handling and CSV/JSON. Windows fundamentals and Git, with CS50x in a smaller supporting study slot.", proof: "Build, test and explain a read-only PC inventory and health report." },
  { title: "Networking & troubleshooting", topics: "Cisco Networking Basics, Packet Tracer, addressing, subnetting, TCP/IP, DNS, DHCP, switching and routing. Hardware troubleshooting on existing equipment.", proof: "Diagram a network and diagnose a deliberately broken simulated connection." },
  { title: "Linux, virtual machines & recovery", topics: "Command-line administration, users, permissions, services, SSH, updates, logs, host firewalls, isolated virtual networks and snapshots.", proof: "Deploy a Linux service, break it deliberately, then restore it and document the diagnosis." },
  { title: "Windows Server & identity", topics: "Active Directory, users, groups, organisational units, DNS, Group Policy, least privilege and PowerShell account creation using sample data.", proof: "Operate a fictional company domain and troubleshoot login, DNS, permissions and backup recovery." },
  { title: "Endpoint management & automation", topics: "Device provisioning, patch reporting, policy workflows, Intune and Entra concepts. Use simulations where a test tenant or licence is unavailable.", proof: "Design or prototype an onboarding and device-health workflow with clear checks and approvals." },
  { title: "Python, APIs & business workflows", topics: "CS50P after CS50x, Python functions and testing, SQL, validation, API authentication, logging and fallbacks. Deepen programming after the administration foundations.", proof: "Connect input, validation, processing, a data store and output in a tested fictional workflow." },
  { title: "Azure, hybrid cloud & repeatable deployment", topics: "Cloud concepts, compute, networks, identity, storage, monitoring and infrastructure as code. Cost control and recovery are part of the design.", proof: "Deploy or simulate a small workload and explain its security, costs, rollback and recovery." },
  { title: "Infrastructure, cloud & security engineering", topics: "Infrastructure automation, platform practices, security controls and solution design. Develop technical depth through integrated projects and operational problem-solving.", proof: "Explain an integrated solution's reliability, security, operational and business tradeoffs." },
];
