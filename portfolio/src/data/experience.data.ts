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
    id: 'work-freelance',
    title: 'Penetration Tester & Developer',
    company: 'Freelance / Self-Directed',
    type: 'work',
    period: '2024 – Present',
    current: true,
    description: [
      'Conducting web application and network penetration tests, documenting vulnerabilities with remediation steps.',
      'Building custom security scripts and automation tools in Python and Bash.',
      'Developing web applications with security-first practices using Next.js and TypeScript.',
    ],
    tags: ['Pentesting', 'Python', 'Bash', 'Next.js', 'Kali Linux', 'Burp Suite'],
  },
];
