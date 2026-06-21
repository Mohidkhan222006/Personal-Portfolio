export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  tags: ('security' | 'development' | 'ctf' | 'tool')[];
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl: string;
  featured: boolean;
  year: number;
}

export const projects: Project[] = [
  {
    slug: 'portfolio',
    title: 'Cyber Portfolio',
    description:
      'A cybersecurity-themed personal portfolio built with Next.js 14, TypeScript, and Framer Motion featuring Matrix rain and terminal aesthetics.',
    longDescription:
      'This very portfolio — built from scratch following production-grade engineering standards. Features Matrix rain canvas, terminal-style animations, glitch text effects, and a fully functional contact form with Zod validation.',
    tags: ['development'],
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Zod'],
    githubUrl: 'https://github.com/Mohidkhan222006',
    liveUrl: '/',
    imageUrl: '/assets/images/portfolio.png',
    featured: true,
    year: 2025,
  },
  {
    slug: 'kali-mcp-server',
    title: 'Kali Linux MCP Server',
    description:
      'A Python-based Model Context Protocol (MCP) server exposing 56 pentesting tools to Llama 3 & Ollama agents.',
    longDescription:
      'Designed and implemented a custom Model Context Protocol (MCP) server in Python that exposes 56 specialized command-line tools for security enumeration and exploitation to AI agents. Built to integrate with local Ollama configurations running Llama 3 (3B) models, enabling LLM-driven agents to automate security scanning, vulnerability sweeps, and localized exploitation scripts.',
    tags: ['security', 'tool'],
    techStack: ['Model Context Protocol (MCP)', 'Python', 'Ollama', 'Llama 3 (3B)', 'Kali Linux', 'Bash'],
    githubUrl: 'https://github.com/Mohidkhan222006/kali-mcp-server',
    imageUrl: '/assets/images/kali-mcp.png',
    featured: true,
    year: 2026,
  },
  {
    slug: 'wellness-app',
    title: 'Wellness Tracker App',
    description:
      'A cross-platform wellness and health tracking application built using Flutter and Dart.',
    longDescription:
      'A production-grade, cross-platform wellness application built using Flutter and Dart to monitor personal health metrics (such as sleep cycles, hydration levels, and exercise routines). Features clean health analytics dashboards, an offline-first data model, and compilation configurations supporting mobile and desktop platforms.',
    tags: ['development'],
    techStack: ['Flutter', 'Dart', 'SQLite', 'CMake', 'C++', 'Swift'],
    githubUrl: 'https://github.com/Mohidkhan222006/wellness_app',
    imageUrl: '/assets/images/wellness-app.png',
    featured: true,
    year: 2026,
  },
  {
    slug: 'local-vault',
    title: 'The Local Vault',
    description:
      'An encrypted in-memory system tray clipboard manager and scratchpad built with Electron and React.',
    longDescription:
      'Developed a lightweight, local-first system tray desktop application using Electron, React, and TypeScript. Acts as a secure clipboard manager and markdown scratchpad featuring zero-disk persistence, automated clipboard clear delay, memory zero-filling on locks, and robust cryptography using Node.js native crypto module (AES-256-GCM, Scrypt KDF).',
    tags: ['security', 'development'],
    techStack: ['Electron', 'React', 'TypeScript', 'Zustand', 'AES-256-GCM', 'Scrypt KDF'],
    githubUrl: 'https://github.com/Mohidkhan222006/The-Local-Vault',
    imageUrl: '/assets/images/local-vault.png',
    featured: true,
    year: 2026,
  },
  {
    slug: 'verda-farming',
    title: 'Verda Farming App',
    description:
      'A collaborative cross-platform farming marketplace and utility application built with Flutter and Firebase.',
    longDescription:
      'Collaborated on designing and developing a cross-platform farming and agriculture marketplace application utilizing Flutter and Dart. Integrated Firebase Data Connect for backend data management, secure user authentication, and real-time marketplace product updates. Built responsive front-end views for mobile and desktop deployments.',
    tags: ['development'],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Data Connect', 'TypeScript', 'CMake'],
    githubUrl: 'https://github.com/zkestroyer/farming',
    imageUrl: '/assets/images/verda-farming.png',
    featured: true,
    year: 2026,
  },
  {
    slug: 'dw-reminder',
    title: 'DW-Reminder',
    description:
      'A lightweight Python-based background desktop utility that sends periodic hydration reminders.',
    longDescription:
      'A simple, lightweight background utility written in Python. Automatically schedules and triggers desktop system notifications prompting you to stay hydrated, using native OS notification APIs and built-in Python libraries.',
    tags: ['tool', 'development'],
    techStack: ['Python', 'Plyer API', 'System Notifications'],
    githubUrl: 'https://github.com/Mohidkhan222006/DW-Reminder',
    imageUrl: '/assets/images/dw-reminder.png',
    featured: true,
    year: 2025,
  },
  {
    slug: 'perma-website',
    title: 'Custom Shopify Jewelry Store',
    description:
      'A customized, premium Shopify jewelry storefront built using Liquid templates, CSS, and interactive JavaScript.',
    longDescription:
      'Redesigned and customized a premium e-commerce Shopify storefront for a jewelry brand (Perma). Developed custom Liquid sections and snippets, optimized mobile-first layouts, integrated responsive custom accordions, and streamlined navigation structures using custom CSS and JavaScript to enhance user conversion.',
    tags: ['development'],
    techStack: ['Shopify', 'Liquid', 'CSS', 'JavaScript', 'E-commerce'],
    imageUrl: '/assets/images/perma-website.png',
    featured: true,
    year: 2026,
  },
  {
    slug: 'multi-tenant-saas',
    title: 'Multi-Tenant SaaS Platform',
    description:
      'A multi-tenant SaaS project management platform with Stripe subscription billing, role-based access control, and Postgres row-level security.',
    longDescription:
      'Designed and built a production-grade multi-tenant SaaS project management platform. Implemented a shared-database, shared-schema architecture using PostgreSQL Row-Level Security (RLS) to enforce tenant isolation at the database layer. Integrated Stripe Subscriptions with webhooks and customer billing portals, and role-based access control (Owner, Admin, Member, Viewer roles) utilizing NextAuth and secure email invitations.',
    tags: ['development', 'security'],
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'Stripe', 'Row-Level Security (RLS)', 'Tailwind CSS'],
    githubUrl: 'https://github.com/Mohidkhan222006/Multi-tenant-SaaS',
    imageUrl: '/assets/images/saas-platform.png',
    featured: true,
    year: 2026,
  },
];


