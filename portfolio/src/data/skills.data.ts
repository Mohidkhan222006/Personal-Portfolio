export interface Skill {
  name: string;
  category: 'security' | 'development' | 'tools' | 'languages';
  level: number; // 0–100
}

export const skills: Skill[] = [
  // ─── Security ─────────────────────────────────────
  { name: 'Penetration Testing', category: 'security', level: 75 },
  { name: 'Web App Security', category: 'security', level: 75 },
  { name: 'Network Reconnaissance', category: 'security', level: 70 },
  { name: 'CTF Competitions', category: 'security', level: 70 },
  { name: 'Vulnerability Assessment', category: 'security', level: 70 },
  { name: 'Malware Analysis', category: 'security', level: 60 },

  // ─── Security Tools ───────────────────────────────
  { name: 'Kali Linux', category: 'tools', level: 80 },
  { name: 'Burp Suite', category: 'tools', level: 75 },
  { name: 'Nmap', category: 'tools', level: 80 },
  { name: 'Wireshark', category: 'tools', level: 70 },
  { name: 'Metasploit', category: 'tools', level: 65 },
  { name: 'SQLMap', category: 'tools', level: 70 },
  { name: 'FFUF', category: 'tools', level: 65 },
  { name: 'Git / GitHub', category: 'tools', level: 75 },

  // ─── Programming Languages ────────────────────────
  { name: 'Python', category: 'languages', level: 80 },
  { name: 'JavaScript / TypeScript', category: 'languages', level: 75 },
  { name: 'C / C++', category: 'languages', level: 60 },
  { name: 'Bash / Shell Scripting', category: 'languages', level: 70 },
  { name: 'HTML / CSS', category: 'languages', level: 80 },
  { name: 'SQL', category: 'languages', level: 65 },

  // ─── Development ──────────────────────────────────
  { name: 'Next.js / React', category: 'development', level: 70 },
  { name: 'Node.js', category: 'development', level: 60 },
  { name: 'REST APIs', category: 'development', level: 65 },
];
