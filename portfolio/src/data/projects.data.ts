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
      'A Model Context Protocol (MCP) server exposing Kali Linux penetration testing utilities to LLM agents.',
    longDescription:
      'Designed and implemented a custom Model Context Protocol (MCP) server that exposes powerful Kali Linux command-line utilities (like Nmap scanner sweeps, searchsploit exploit index searches, and Metasploit payload setups) as executable tools to AI assistant clients. Enables LLMs to execute safe, authorized network security sweeps and CVE exploit lookup tasks directly inside sandboxed pentesting boxes.',
    tags: ['security', 'tool'],
    techStack: ['Model Context Protocol (MCP)', 'TypeScript', 'Node.js', 'Kali Linux', 'Bash'],
    githubUrl: 'https://github.com/Mohidkhan222006/kali-mcp-server',
    imageUrl: '/assets/images/kali-mcp.png',
    featured: true,
    year: 2026,
  },
];
