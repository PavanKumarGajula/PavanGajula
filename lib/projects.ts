export const projects = [
  {
    slug: "straight-path-athletics",
    title: "Straight Path Athletics",
    category: "Non-profit · Sports",
    year: "2025",
    summary:
      "Member portal and public site for a Maryland-based athletics nonprofit serving 200+ youth athletes across multiple sports programs.",
    description:
      "Designed and built the full digital presence — public marketing site plus internal coach/athlete portal. Tournament registration, payment processing, schedule management, and program discovery in one system.",
    tags: ["Next.js", "Tailwind", "Stripe", "PostgreSQL", "Vercel"],
    metrics: [
      { label: "Athletes served", value: "200+" },
      { label: "Programs", value: "6" },
      { label: "Page load", value: "<1.2s" },
    ],
    role: "Lead Engineer & Designer",
    // HCI research lens — honest, forward-looking observations.
    researchAngle: {
      question: "How do volunteer-operated organizations adopt admin software?",
      observation:
        "The coaches and parent administrators using this portal aren't software users in a traditional sense — they want zero learning curve and immediate utility. Early iterations failed because they treated coach workflows like standard SaaS dashboards. The design only worked once it mirrored the paper-and-text-message process the org already used.",
    },
    color: "emerald",
    url: "#",
    live: true,
  },
  {
    slug: "synack-solutions",
    title: "Synack Solutions",
    category: "Corporate · Services",
    year: "2024",
    summary:
      "Corporate website redesign for an IT services and consulting firm focused on enterprise Java and cloud engineering services.",
    description:
      "Replaced an outdated brochure site with a high-conversion services-led layout. Case study templates, careers portal, and lead capture integrated with the firm's CRM workflow.",
    tags: ["React", "Tailwind", "Node.js", "SendGrid"],
    metrics: [
      { label: "Lead form completion", value: "+38%" },
      { label: "Lighthouse perf", value: "98" },
      { label: "Pages", value: "24" },
    ],
    role: "Full Stack Engineer",
    researchAngle: {
      question: "What makes B2B service-firm inquiry forms get completed?",
      observation:
        "Form completion improved most when fields stopped asking for information the visitor wouldn't yet know about their own problem. The biggest jump came from removing the budget field on first contact — visitors evaluating services hadn't formed a budget yet, and being asked surfaced commitment anxiety. Worth a closer look as a deliberate study.",
    },
    color: "amber",
    url: "#",
    live: true,
  },
  {
    slug: "hkm-engineers",
    title: "HKM Engineers",
    category: "Engineering · B2B",
    year: "2024",
    summary:
      "Marketing site and project showcase for a structural engineering consultancy specializing in commercial and institutional projects.",
    description:
      "Project-portfolio first: built a CMS-light system so the firm can publish completed projects with photo galleries and technical specs. Search by project type, scale, and discipline.",
    tags: ["Next.js", "Tailwind", "MDX", "Cloudinary"],
    metrics: [
      { label: "Projects showcased", value: "40+" },
      { label: "Lighthouse SEO", value: "100" },
      { label: "Mobile traffic", value: "+62%" },
    ],
    role: "Designer & Developer",
    researchAngle: {
      question:
        "How do professional firms describe their own work to non-experts?",
      observation:
        "The engineers struggled to describe finished projects in ways that prospective clients (often municipal or developer staff) could evaluate. The CMS interface had to nudge writers toward concrete deliverables and away from internal technical language. A small example of an HCI problem hiding inside a content tool.",
    },
    color: "blue",
    url: "#",
    live: true,
  },
];

export type Project = (typeof projects)[number];
