export interface Experience {
  id: string;
  title: string;
  company: string;
  type: 'work' | 'education' | 'certification';
  period: string;
  current: boolean;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  // ─── Education ────────────────────────────────────
  {
    id: 'edu-neduet',
    title: 'BS Computer Science',
    company: 'NED University of Engineering & Technology (NEDUET)',
    type: 'education',
    period: '2025 – 2029',
    current: true,
    description: [
      'Enrolled in BS Computer Science at one of Pakistan\'s top engineering universities.',
      'Focusing on cybersecurity, software engineering, and systems programming.',
      'Active participant in CTF competitions and the university\'s tech community.',
    ],
    tags: ['BS Computer Science', 'NEDUET', 'Cybersecurity', 'Karachi'],
  },

  // ─── Certifications & Courses ─────────────────────
  {
    id: 'cert-google-ai',
    title: 'Google AI Specialization',
    company: 'Google',
    type: 'certification',
    period: 'May 2026',
    current: false,
    description: [
      'Certified by Google in AI Essentials. Explored the intersection of artificial intelligence and professional efficiency to drive smarter, faster results.',
      'Completed comprehensive modules: AI Fundamentals, AI for App Building, AI for Content Creation, AI for Brainstorming & Planning, AI for Research & Insights, and AI for Writing & Communicating.',
    ],
    tags: ['Google AI', 'Artificial Intelligence (AI)', 'Software Development', 'App Building', 'Research'],
  },
  {
    id: 'cert-thm-jr-pentester',
    title: 'Jr Penetration Tester',
    company: 'TryHackMe',
    type: 'certification',
    period: 'May 2026',
    current: false,
    description: [
      'Specialized training in offensive security methodologies, including network security analysis, web hacking, and post-exploitation techniques across various operating systems.',
    ],
    tags: ['TryHackMe', 'Cybersecurity', 'Linux', 'Pentesting', 'Web Exploitation'],
  },
  {
    id: 'cert-thm-cyber-101',
    title: 'Cyber Security 101',
    company: 'TryHackMe',
    type: 'certification',
    period: 'Mar 2026',
    current: false,
    description: [
      'Foundational training in security fundamentals, network defense, Linux security, cryptography, and basic offensive security concepts.',
    ],
    tags: ['TryHackMe', 'Cybersecurity', 'Linux', 'Network Security'],
  },
  {
    id: 'cert-datacamp-sql',
    title: 'SQL Specialization (Intro & Intermediate)',
    company: 'DataCamp',
    type: 'certification',
    period: 'May 2026',
    current: false,
    description: [
      'Mastered database query writing, covering basic query filters, table joins, aggregations, database subqueries, and analytical functions on DataCamp.',
    ],
    tags: ['DataCamp', 'SQL', 'Databases', 'Data Analysis'],
  },

  // ─── Work / Projects ──────────────────────────────
  {
    id: 'work-flyrank',
    title: 'Front-end AI Engineer - Internship',
    company: 'FlyRank AI',
    type: 'work',
    period: 'Jun 2026 – Present',
    current: true,
    description: [
      'Currently interning at FlyRank AI as an AI intern, focusing on Front-end AI Engineering.',
      'Developing client-facing web application pages and integrating AI model outputs into frontend UI.',
    ],
    tags: ['Software Development', 'Artificial Intelligence (AI)', 'Frontend Engineering', 'Next.js'],
  },
  {
    id: 'work-sentec',
    title: 'Treasurer',
    company: 'Society For Promotion of Science, Engineering & Technology-SENTEC NED',
    type: 'work',
    period: 'Aug 2025 – Present',
    current: true,
    description: [
      'Managing all media operations and promotional campaigns for society events.',
      'Overseeing all financial budgeting, accounting, and funding allocations for university tech operations.',
    ],
    tags: ['Leadership', 'Financial Management', 'Media Operations', 'Student Services'],
  },
  {
    id: 'work-archtech',
    title: 'Cyber Security Intern',
    company: 'Arch Technologies',
    type: 'work',
    period: 'Apr 2026 – Present',
    current: true,
    description: [
      'Assisting in conducting web and network penetration tests to detect security flaws.',
      'Analyzing and reporting vulnerability scan results with recommendations for remediation.',
      'Gaining hands-on experience in defensive security configurations and threat monitoring.',
    ],
    tags: ['Cybersecurity', 'Vulnerability Assessment', 'Pentesting', 'Network Security'],
  },
  {
    id: 'work-cega',
    title: 'Production Trainee',
    company: 'CEGA - Center of Excellence in Gaming & Animation',
    type: 'work',
    period: 'Dec 2025 – Feb 2026',
    current: false,
    description: [
      'Acquired hands-on usage of Autodesk Maya, including rigging, animation, modeling, and design workflows.',
      'Collaborated on 3D game design prototypes and pipeline assets.',
    ],
    tags: ['Gaming Industry', 'Game Development', 'Autodesk Maya', '3D Modeling', 'Animation'],
  },
  {
    id: 'work-credo',
    title: 'Head of Logistics',
    company: 'Credo College',
    type: 'work',
    period: 'Aug 2023 – May 2024',
    current: false,
    description: [
      'Organized logistics, inventory supply lines, and schedules for college-wide events and operations.',
      'Supervised student volunteer teams to manage coordination setups and equipment transport.',
    ],
    tags: ['Leadership', 'Event Logistics', 'Project Coordination', 'Student Services'],
  },
];
