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
  // NOTE: Add your real projects here as you build them.
  // Template:
  // {
  //   slug: 'my-project',
  //   title: 'Project Name',
  //   description: 'Short one-liner description.',
  //   longDescription: 'Detailed explanation of what it does, your role, and impact.',
  //   tags: ['security'], // 'security' | 'development' | 'ctf' | 'tool'
  //   techStack: ['Python', 'Kali Linux'],
  //   githubUrl: 'https://github.com/Mohidkhan222006/your-repo',
  //   imageUrl: '/assets/images/project-name.png',
  //   featured: true,
  //   year: 2025,
  // },
];
