// Single source of truth for all résumé content, derived from cv.md.
// Update here and every section + the JSON-LD stays in sync.

export const profile = {
  name: "Mahmoud Sabbagh",
  initials: "MS",
  title: "Project Manager · Scrum Master · Product Owner",
  tagline:
    "Delivery and operations leader who turns messy programs into measurable results.",
  location: "St. Augustine, Florida, USA",
  email: "mahmoudsabbagh8@gmail.com",
  phone: "904-570-0102",
  linkedin: "https://www.linkedin.com/in/mahmoud-sabbagh-5b819a147",
  resumeFile: "/Mahmoud-Sabbagh-Resume.pdf",
  roles: [
    "Project Manager",
    "Scrum Master",
    "Product Owner",
    "Program Coordinator",
    "Operations Manager",
    "Customer Success Operations",
  ],
};

export const about = [
  "I'm a project and operations professional with 5+ years in automotive B2B SaaS and 3+ years leading teams — currently on contract at Meta, and founder and Product Owner of Loomlance, a live SaaS I took from concept to launch.",
  "My work sits where people, process, and numbers meet: lifting a vendor program's accuracy from ~60% to 85%+ and holding it there, cutting new-hire ramp time by ~65% while keeping a perfect CSAT, and de-escalating high-stakes enterprise accounts until they renew. I'm a certified Scrum Master and Product Owner (PSM I, PSPO I) who runs delivery by inspect-and-adapt, not by ceremony.",
];

export type Metric = {
  value: string;
  unit?: string;
  label: string;
  context: string;
};

export const metrics: Metric[] = [
  {
    value: "60→85",
    unit: "%+",
    label: "Vendor accuracy lift",
    context:
      "Drove the IG Child Media Accounts program from ~60% to 85%+ accuracy at Meta — and held it week over week.",
  },
  {
    value: "65",
    unit: "%",
    label: "Faster onboarding",
    context:
      "Cut new-hire ramp time from 2 months to 2.5–3 weeks at DealerOn with a structured training system.",
  },
  {
    value: "5",
    unit: "/5",
    label: "Perfect CSAT",
    context:
      "Maintained a flawless customer-satisfaction score across full tenure; enterprise OEM clients requested me on retainer.",
  },
  {
    value: "8",
    unit: " mo",
    label: "Concept to launch",
    context:
      "Took Loomlance from idea to live product in ~8 months — 8 modules, 4 payment integrations — under Scrum.",
  },
];

export type Job = {
  org: string;
  role: string;
  period: string;
  location: string;
  summary?: string;
  highlights: string[];
  current?: boolean;
};

export const experience: Job[] = [
  {
    org: "Loomlance",
    role: "Founder, Product Owner & Scrum Master",
    period: "Oct 2025 – Present",
    location: "Remote · loomlance.com",
    current: true,
    summary:
      "A developer-first business-management SaaS — contracts, invoicing, payments, CRM, kanban boards, time tracking, expenses, and reporting in one platform.",
    highlights: [
      "Took the product from concept to live launch in about eight months, owning the vision, roadmap, and full product backlog while directing an AI development agent as the engineering team under Scrum.",
      "Ran discovery before building: conducted market studies with freelancers to learn what they would actually pay for, then translated findings into prioritized epics and user stories.",
      "Adapted the cadence as the work demanded — month-long sprints through the build, tightened to one-week sprints for deployment, QA, and launch.",
      "Owned release management end-to-end: stood up the production stack (Supabase, Stripe, AWS), ran a dedicated QA sprint with usability testing, and held a quality gate before going live.",
      "Shipped 8 modules with 4 payment integrations (Stripe, PayPal, bank transfer, cash); now prioritizing the post-launch backlog by user value.",
    ],
  },
  {
    org: "Meta",
    role: "Project Coordinator (Contract)",
    period: "Dec 2025 – Present",
    location: "Remote · New York, USA",
    current: true,
    highlights: [
      "Drove vendor accuracy from ~60–70% to 85%+ and held it there week over week on the IG Child Media Accounts program — the headline KPI for the entire workstream.",
      "Produced the gain through a structured weekly calibration cadence across 5 Data Quality Analysts and 5–6 vendor programs, standardizing how policy gets interpreted until the numbers held.",
      "Made 85%+ durable: ranked engineering fixes by accuracy impact and vendors affected, then reported accuracy, volume, and occupancy to leadership weekly so any regression surfaced within days.",
      "Own the program end-to-end — assigning tasks, auditing outputs, and holding policy alignment across every workstream.",
      "Perform audits on LLM training datasets, correcting misclassifications and driving measurable model-accuracy improvements.",
    ],
  },
  {
    org: "DealerOn",
    role: "Senior Data Support Specialist · Team Leadership",
    period: "Oct 2025 – Apr 2026",
    location: "Remote · Maryland, USA",
    highlights: [
      "Built a structured onboarding and training system that cut new-hire ramp time from 2 months to 2.5–3 weeks (~65% reduction) while maintaining service quality.",
      "Maintained a perfect 5/5 CSAT across the full tenure, with multiple high-profile enterprise OEM and dealership clients requesting me on retainer.",
      "Specialized in de-escalation for high-stakes automotive accounts, directly contributing to retention on at-risk enterprise relationships.",
      "Ran QA assessments on support workflows and supported performance reviews using documented KPIs and QA rubrics.",
    ],
  },
  {
    org: "DealerOn",
    role: "Senior Data Support Specialist",
    period: "Sep 2022 – Oct 2025",
    location: "Remote · Maryland, USA",
    summary:
      "Automotive B2B SaaS — SEO, digital marketing, and web hosting for car dealerships and OEMs (Toyota, Ford, GM, Honda, BMW, FCA).",
    highlights: [
      "Led night-shift operations — supervised a team of 3 managing dealer workflows for enterprise OEM clients and coordinating handoffs with daytime teams.",
      "Transitioned to day-shift leadership — led a team of 5 on enterprise OEM account workflows and retail data-quality operations.",
      "Served as subject-matter expert on internal systems and OEM-mandated digital standards; authored technical documentation and process improvements.",
      "Investigated dealership data-quality issues across inventory, pricing, and content — root-caused with SQL and delivered fixes.",
    ],
  },
  {
    org: "DealerOn",
    role: "Data Support Associate",
    period: "Jul 2021 – Sep 2022",
    location: "Remote · Maryland, USA",
    highlights: [
      "Resolved real-time data-quality incidents for enterprise automotive customers across inventory, pricing, and content.",
      "Collaborated cross-functionally with engineering and OEM stakeholders to investigate root causes and deliver fixes.",
      "Trained new team members on data-investigation techniques and internal tooling.",
    ],
  },
  {
    org: "MEDGULF",
    role: "Junior IT Support Intern",
    period: "Jun 2019 – Sep 2019",
    location: "Beirut, Lebanon",
    highlights: [
      "Resolved IT support requests and performed troubleshooting across departmental systems.",
      "Installed infrastructure and configured Windows Server environments.",
    ],
  },
];

export type Cert = { name: string; issuer: string; meta: string; inProgress?: boolean };

export const certifications: Cert[] = [
  { name: "Professional Scrum Master I", issuer: "Scrum.org", meta: "PSM I · 2026" },
  { name: "Professional Scrum Product Owner I", issuer: "Scrum.org", meta: "PSPO I · 2026" },
  { name: "Google Project Management Certificate", issuer: "Google", meta: "Agile · Execution · Scrum · 2025" },
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", meta: "2024 – 2027" },
  { name: "CompTIA Security+", issuer: "CompTIA", meta: "Issued 2022" },
  { name: "LPIC-1", issuer: "Linux Professional Institute", meta: "Issued 2017" },
  { name: "Google Data Analytics Certificate", issuer: "Google", meta: "In progress · 2026", inProgress: true },
];

export type SkillGroup = { title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Delivery & Agile",
    skills: [
      "Agile & Scrum (PSM I, PSPO I)",
      "Backlog Management & User Stories",
      "Sprint Planning & Release Management",
      "Project & Program Coordination",
    ],
  },
  {
    title: "Operations & Leadership",
    skills: [
      "Team Leadership & Onboarding",
      "Stakeholder Management",
      "De-escalation & Retention",
      "Process Improvement",
    ],
  },
  {
    title: "Data & Reporting",
    skills: [
      "KPI Reporting & Analytics",
      "SQL Querying & Data Investigation",
      "B2B SaaS Customer Operations",
      "Cross-Functional Execution",
    ],
  },
];

export type Language = { name: string; level: string; pct: number };

export const languages: Language[] = [
  { name: "Arabic", level: "Native", pct: 100 },
  { name: "English", level: "Fluent", pct: 95 },
  { name: "German", level: "Elementary · improving", pct: 35 },
];

export const education = {
  degree: "B.S. in Information & Communication Technology",
  school: "American University of Science and Technology",
  period: "2013 – 2018",
};

// Loomlance case-study page content
export const loomlance = {
  name: "Loomlance",
  url: "https://loomlance.com",
  tagline: "Concept to live SaaS in eight months — as the Product Owner.",
  intro:
    "Loomlance is a developer-first business-management platform: contracts, invoicing, payments, CRM, kanban project boards, time tracking, expenses, and reporting in one place. I founded it and own it as Product Owner and Scrum Master — directing an AI development agent as the engineering team.",
  stats: [
    { value: "8", label: "Modules shipped" },
    { value: "4", label: "Payment integrations" },
    { value: "~8 mo", label: "Concept to launch" },
    { value: "1-week", label: "Sprints at launch" },
  ],
  chapters: [
    {
      title: "Discovery before code",
      body: "Before building anything, I ran market studies with freelancers to learn what they'd actually pay for. Those findings became prioritized epics and user stories — the backlog was grounded in real demand, not assumptions.",
    },
    {
      title: "An adaptive Scrum cadence",
      body: "I ran month-long sprints through the build phase, then tightened to one-week sprints for deployment, QA, and launch. Inspect-and-adapt over a fixed process — the cadence served the work, not the other way around.",
    },
    {
      title: "Release management & a real quality gate",
      body: "I stood up the production stack (Supabase, Stripe, AWS) and ran a dedicated QA sprint with usability testing from unaffiliated users. We went live only once the free tier ran clean — a deliberate quality gate, not a date-driven launch.",
    },
    {
      title: "Shipped, then prioritized for value",
      body: "Launch delivered 8 modules with 4 payment integrations (Stripe, PayPal, bank transfer, cash). Post-launch, I'm sequencing the paid-tier backlog by user value — the founder discipline of saying not-yet to good ideas.",
    },
  ],
  stack: ["Supabase", "Stripe", "AWS", "PayPal", "Scrum"],
};
