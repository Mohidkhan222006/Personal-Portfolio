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
    id: 'cert-tcm',
    title: 'Practical Ethical Hacking & Security Courses',
    company: 'TCM Security',
    type: 'certification',
    period: '2024 – 2025',
    current: false,
    description: [
      'Completed industry-standard penetration testing courses covering practical offensive security techniques.',
      'Topics: Active Directory attacks, web application hacking, network pentesting, privilege escalation.',
      'Hands-on labs simulating real-world attack and defense scenarios.',
    ],
    tags: ['TCM Security', 'Ethical Hacking', 'Pentesting', 'Active Directory'],
  },
  {
    id: 'cert-thm-htb',
    title: 'TryHackMe & Hack The Box',
    company: 'TryHackMe / Hack The Box',
    type: 'certification',
    period: '2024 – Present',
    current: true,
    description: [
      'Actively solving CTF challenges and guided learning paths on TryHackMe and Hack The Box.',
      'Skill areas: web exploitation, reverse engineering, privilege escalation, cryptography, OSINT.',
      'Consistent practice to sharpen offensive security and CTF problem-solving abilities.',
    ],
    tags: ['TryHackMe', 'Hack The Box', 'CTF', 'Web Exploitation', 'Reverse Engineering'],
  },
  {
    id: 'cert-google-ai',
    title: 'Google AI Essentials',
    company: 'Google',
    type: 'certification',
    period: '2024',
    current: false,
    description: [
      'Completed Google\'s AI Essentials course covering foundational concepts in artificial intelligence.',
      'Topics include machine learning fundamentals, AI tools, and practical AI applications in real workflows.',
    ],
    tags: ['Google', 'AI', 'Machine Learning', 'Certification'],
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
