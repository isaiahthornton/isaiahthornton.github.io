export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  slug: string;
  name: string;
  kicker: string;
  summary: string;
  role: string;
  year: string;
  image: string;
  imageAlt: string;
  tech: string[];
  highlights: string[];
  links: ProjectLink[];
}

export interface Experience {
  title: string;
  org: string;
  dates: string;
  points: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export const PROFILE = {
  name: 'Isaiah G. Thornton',
  shortName: 'Isaiah Thornton',
  role: 'Full-stack software developer',
  location: 'East Windsor, NJ',
  email: 'isaiah.g.thornton31@gmail.com',
  linkedin: 'https://www.linkedin.com/in/isaiah-thornton/',
  github: 'https://github.com/isaiahthornton',
  blog: 'https://isaiahthorntoncom.wordpress.com',
  repo: 'https://github.com/isaiahthornton/isaiahthornton.github.io',
  education: {
    school: 'Rutgers University, New Brunswick',
    degree: 'B.A., Information Technology and Informatics',
    detail: "Minor in Digital Communication, Information, and Media · Dean's List",
    date: 'May 2026',
  },
};

export const PROJECTS: Project[] = [
  {
    slug: 'obsidiantrading',
    name: 'ObsidianTrading',
    kicker: 'Live beta web app',
    summary:
      'A trade journaling and discipline-tracking platform for traders who want to catch their own bias before it costs them. I designed it, built it, launched it, and still run it.',
    role: 'Founder and lead developer',
    year: '2026 – present',
    image: 'images/obsidian.webp',
    imageAlt: 'ObsidianTrading banner: trade journaling and discipline tracking platform',
    tech: ['JavaScript', 'Supabase (PostgreSQL)', 'Vercel', 'Stripe', 'Tradovate API', 'PWA'],
    highlights: [
      'Took it from idea to live, invite-based beta with real accounts, cloud sync, and push notifications.',
      'Set up the full production stack myself: custom domain, Vercel auto-deploys and cron jobs, Supabase Auth and PostgreSQL with Row-Level Security, Stripe subscription billing and webhooks.',
      'Completed NinjaTrader Vendor Program compliance and shipped a read-only Tradovate OAuth trade import.',
      'Built a rule-based voice and text trading assistant, plus friends, leaderboards, groups, and an admin dashboard.',
      'Maintain 800+ automated tests; AI-assisted QA surfaced live RLS vulnerabilities, which I fixed and hardened.',
    ],
    links: [{ label: 'Visit the live app', url: 'https://obsidiantrading.app/welcome' }],
  },
  {
    slug: 'electric-management',
    name: 'Electric Management App',
    kicker: 'Angular project',
    summary:
      'A role-based customer and admin portal for Thornton Energy, a fictional New Jersey electric utility. Customers pay bills, track usage, compare rate plans, and report outages; admins run billing and work the outage queue.',
    role: 'Revature Project 1',
    year: '2026',
    image: 'images/electric.webp',
    imageAlt: 'Electric Management App banner: role-based customer and admin utility portal',
    tech: ['Angular 22', 'TypeScript', 'RxJS', 'Vitest', 'json-server'],
    highlights: [
      'Customer portal: dashboard, 12-month usage chart, bill history with Pay Now, outage reporting, and a rate-plan estimator based on real usage.',
      'Admin portal: customer search, meter readings, a billing run that generates bills from readings and rate plans, and an outage repair board.',
      'Standalone components, signals, lazy-loaded routes, and role-based route guards.',
      'Unit tests for the auth guard, login, billing math, usage calculation, and custom validators.',
    ],
    links: [
      { label: 'View the code on GitHub', url: 'https://github.com/isaiahthornton/electric-management-app' },
    ],
  },
];

export const OTHER_WORK: { name: string; detail: string }[] = [
  {
    name: 'Banking application and Web API',
    detail: 'C#, .NET Core, EF Core, SQL. Accounts, deposits, withdrawals, and transaction history, with a RESTful ASP.NET Core API and Code-First models.',
  },
  {
    name: 'Python ETL pipeline',
    detail: 'Extracts, cleans, and loads historical Powerball draw data for analysis.',
  },
  {
    name: 'Unity game',
    detail: 'A playable game built in Unity with C#.',
  },
  {
    name: 'This website',
    detail: 'Angular 22 single-page app with lazy routes, a reactive contact form, and automatic deploys to GitHub Pages.',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    title: 'Software Development Associate',
    org: 'Revature',
    dates: 'July 2026 – present',
    points: [
      'Intensive 13-week program in object-oriented programming, C#, ASP.NET Core, Entity Framework Core, SQL Server, TypeScript, and Angular, with graded labs and assessments.',
      'Built a C# banking application, ASP.NET Core Web API endpoints, a Code-First EF Core data model with migrations, and the Angular Electric Management App.',
    ],
  },
  {
    title: 'Founder and Lead Developer',
    org: 'ObsidianTrading',
    dates: '2026 – present',
    points: [
      'Designed, built, launched, and maintain a live subscription web app with user accounts, payments, push notifications, and broker API integration.',
    ],
  },
  {
    title: 'Head Lifeguard and Supervisor',
    org: 'Princeton University · Forsgate Country Club',
    dates: 'May 2018 – present',
    points: [
      'Supervise daily operations across multiple facilities: staff scheduling, safety compliance, and emergency readiness.',
      'Train, mentor, and evaluate junior staff, and respond to incidents in real time, then investigate and document them.',
    ],
  },
];

export const SKILLS: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['C#', 'Java', 'TypeScript', 'JavaScript', 'Python', 'C++', 'SQL (T-SQL, PostgreSQL)', 'HTML', 'CSS'],
  },
  {
    label: 'Frameworks',
    items: ['Angular', 'ASP.NET Core Web API', 'Entity Framework Core', 'RxJS', 'Node.js', 'REST APIs'],
  },
  {
    label: 'Cloud and integrations',
    items: ['Vercel', 'Supabase', 'Stripe', 'OAuth 2.0', 'Web Push', 'PWA', 'DNS and custom domains'],
  },
  {
    label: 'Tools',
    items: ['Git and GitHub', 'Claude Code', 'Visual Studio', 'VS Code', 'SQL Server', 'Vitest', 'Unity', 'Windows, Linux, macOS'],
  },
];
