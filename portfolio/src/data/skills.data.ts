export interface Skill {
  name: string;
  category: 'security' | 'development' | 'tools' | 'languages';
  status: 'Expert' | 'Advanced' | 'Intermediate' | 'Learning' | 'Active';
  details: string[];
  command: string;
}

export const skills: Skill[] = [
  // ─── Security ─────────────────────────────────────
  {
    name: 'Penetration Testing',
    category: 'security',
    status: 'Active',
    command: 'pentest-suite --target mohid.local',
    details: [
      'External and internal infrastructure testing',
      'Active Directory security analysis & exploitation',
      'Post-exploitation and privilege escalation techniques',
    ],
  },
  {
    name: 'Web App Security',
    category: 'security',
    status: 'Active',
    command: 'owasp-audit --url https://target.app',
    details: [
      'OWASP Top 10 vulnerability identification',
      'Hands-on auditing for XSS, SQLi, CSRF, and IDORs',
      'Secure session management and token verification',
    ],
  },
  {
    name: 'Network Reconnaissance',
    category: 'security',
    status: 'Active',
    command: 'nmap -sC -sV -oN scan.log 10.10.10.0/24',
    details: [
      'Port scanning, service discovery, and banner grabbing',
      'Passive footprinting, OSINT, and metadata analysis',
      'DNS zone transfers and subdomain enumeration',
    ],
  },
  {
    name: 'CTF Competitions',
    category: 'security',
    status: 'Active',
    command: 'ctf-connect --vpn tryhackme.ovpn',
    details: [
      'Active practice on TryHackMe and Hack The Box',
      'Jeopardy-style challenges (Web, Crypto, Reverse, Pwn)',
      'Scripting custom tools to automate flag submission',
    ],
  },
  {
    name: 'Vulnerability Assessment',
    category: 'security',
    status: 'Active',
    command: 'vuln-scan --policy critical_infra_audit',
    details: [
      'Configuration of automated scanning tools (Nessus/OpenVAS)',
      'Manual verification and filtering of scanner false positives',
      'Risk scoring and prioritizing patch remediation workflows',
    ],
  },
  {
    name: 'Malware Analysis',
    category: 'security',
    status: 'Learning',
    command: 'ghidra --analyze malware.exe',
    details: [
      'Static analysis of binaries (PE header inspection, string extraction)',
      'Dynamic monitoring in sandboxed virtual environments',
      'Basic assembly code auditing and control flow mapping',
    ],
  },

  // ─── Tools ────────────────────────────────────────
  {
    name: 'Kali Linux',
    category: 'tools',
    status: 'Expert',
    command: 'uname -a # Kali GNU/Linux Rolling',
    details: [
      'Advanced OS configuration, maintenance, and tool compilation',
      'Custom environment scripting for streamlined pentesting',
      'Hypervisor integration and secure virtual network setups',
    ],
  },
  {
    name: 'Burp Suite',
    category: 'tools',
    status: 'Advanced',
    command: 'burpsuite --project pentest_engagement',
    details: [
      'Interception proxy workflow configuration and repeater analysis',
      'Intruder configuration for brute force and fuzzing attacks',
      'Custom BApp extensions installation and custom scripting',
    ],
  },
  {
    name: 'Nmap',
    category: 'tools',
    status: 'Expert',
    command: 'nmap -p- -T4 -A -vv target.com',
    details: [
      'Custom NSE (Nmap Scripting Engine) script creation',
      'Advanced packet timing controls and IDS/WAF evasion techniques',
      'Scripted network sweeping and XML output analysis',
    ],
  },
  {
    name: 'Wireshark',
    category: 'tools',
    status: 'Advanced',
    command: 'tshark -r capture.pcap -Y "http.request"',
    details: [
      'PCAP file dissection and decryption of TLS streams',
      'Protocol flow mapping and TCP handshake reconstruction',
      'Custom capture and display filters creation',
    ],
  },
  {
    name: 'Metasploit',
    category: 'tools',
    status: 'Advanced',
    command: 'msfconsole -q -x "use exploit/multi/handler"',
    details: [
      'Exploit payload generation, selection, and customization',
      'Meterpreter command controls and privilege escalation modules',
      'Database integration for tracking hosts, services, and creds',
    ],
  },
  {
    name: 'SQLMap',
    category: 'tools',
    status: 'Advanced',
    command: 'sqlmap -u "http://target/api?id=1" --batch',
    details: [
      'Database fingerprinting, table dumping, and OS takeover',
      'POST request payload extraction and cookies injection',
      'Tamper scripts implementation for WAF evasion',
    ],
  },
  {
    name: 'FFUF',
    category: 'tools',
    status: 'Advanced',
    command: 'ffuf -w words.txt -u http://target/FUZZ',
    details: [
      'Fuzzing directories, parameters, and virtual hosts',
      'Response size/code filtering to isolate valid files',
      'Custom headers and multi-wordlist dictionary attacks',
    ],
  },
  {
    name: 'Git / GitHub',
    category: 'tools',
    status: 'Advanced',
    command: 'git log --oneline --graph',
    details: [
      'Branching strategy, pull requests, and merge conflict resolution',
      'Rebasing commits, tracking remotes, and reflog usage',
      'CI/CD workflow creation using GitHub Actions',
    ],
  },

  // ─── Languages ────────────────────────────────────
  {
    name: 'Python',
    category: 'languages',
    status: 'Expert',
    command: 'python3 exploit.py --ip 192.168.1.15',
    details: [
      'Rapid utility scripts, port scanners, and web scrapers creation',
      'Socket and network programming (custom reverse shells)',
      'Data analysis, scripting API connectors, and parsing log files',
    ],
  },
  {
    name: 'JavaScript / TypeScript',
    category: 'languages',
    status: 'Expert',
    command: 'tsc --noEmit # Check TypeScript types',
    details: [
      'Object-oriented and functional paradigm implementations',
      'Strict type-safety configurations for web applications',
      'Asynchronous programming, promises, and events handling',
    ],
  },
  {
    name: 'C / C++',
    category: 'languages',
    status: 'Advanced',
    command: 'gcc -o buffer_overflow vuln.c',
    details: [
      'Low-level memory management and pointer manipulations',
      'Debugging binary memory addresses with GDB',
      'Data structures and algorithm implementations (Linked lists, trees)',
    ],
  },
  {
    name: 'Bash / Shell Scripting',
    category: 'languages',
    status: 'Advanced',
    command: './network_ping_sweep.sh 10.0.0.0/24',
    details: [
      'Linux system administration task automation',
      'Chaining command line utilities using pipes and redirects',
      'Writing script interfaces with arguments and error handling',
    ],
  },
  {
    name: 'HTML / CSS',
    category: 'languages',
    status: 'Expert',
    command: 'head -n 5 index.html',
    details: [
      'Semantic structure, accessibility tags, and SEO markup',
      'Responsive design styling with Flexbox and Grid layout systems',
      'CSS custom properties (variables) for theme-switching systems',
    ],
  },
  {
    name: 'SQL',
    category: 'languages',
    status: 'Advanced',
    command: 'SELECT * FROM users WHERE role = \'admin\';',
    details: [
      'Database query optimization and index creations',
      'Designing relational table structures and relationships',
      'Auditing injections and securing database query formats',
    ],
  },
  {
    name: 'Dart',
    category: 'languages',
    status: 'Advanced',
    command: 'dart run bin/main.dart',
    details: [
      'Object-oriented language optimized for client development and reactive UI design',
      'Asynchronous event loop programming (Futures and Streams)',
      'Integrating database engines (SQLite) and cloud services (Firebase Data Connect)',
    ],
  },
  {
    name: 'Liquid',
    category: 'languages',
    status: 'Advanced',
    command: 'shopify theme dev --store perma-jewelry',
    details: [
      'Developing dynamic Shopify sections, blocks, and snippet components',
      'Managing e-commerce data rendering (collections, products, carts) securely',
      'Extending pre-built storefront themes with modular styling and interactive scripts',
    ],
  },
  {
    name: 'Swift',
    category: 'languages',
    status: 'Intermediate',
    command: 'swiftc -o main main.swift',
    details: [
      'Native iOS application development with strong type safety',
      'Writing bridge files and native integrations for cross-platform frameworks',
      'Leveraging native iOS system APIs and hardware interactions',
    ],
  },

  // ─── Development ──────────────────────────────────
  {
    name: 'Next.js / React',
    category: 'development',
    status: 'Expert',
    command: 'npm run build # Build production bundle',
    details: [
      'Client and Server Components file structure management',
      'State synchronization, effects, hooks, and routing handlers',
      'Optimized image loading, SEO meta tags, and static generation',
    ],
  },
  {
    name: 'Frontend AI Engineering',
    category: 'development',
    status: 'Advanced',
    command: 'ai-integrate --stream --model llm-interface',
    details: [
      'Integrating generative AI models and LLM APIs into web applications',
      'Designing interactive, state-driven interfaces for real-time AI outputs',
      'Optimizing prompt-handling pipelines and streaming chat interfaces',
    ],
  },
  {
    name: 'Node.js',
    category: 'development',
    status: 'Advanced',
    command: 'node -e "require(\'crypto\').randomBytes(32)"',
    details: [
      'RESTful backend creation using Express.js Framework',
      'Local file system storage reading/writing securely',
      'Package management and dependencies version control',
    ],
  },
  {
    name: 'REST APIs',
    category: 'development',
    status: 'Expert',
    command: 'curl -i -X GET https://api.local/status',
    details: [
      'JSON request payload validation utilizing Zod schema schemas',
      'CORS security policies and request rate limiting',
      'Authentication headers, JWT parsing, and HTTP status handling',
    ],
  },
  {
    name: 'Database & ORM',
    category: 'development',
    status: 'Advanced',
    command: 'prisma db push # Sync schemas',
    details: [
      'Designing relational database schemas using PostgreSQL and MySQL',
      'Utilizing Prisma ORM for schema migration and type-safe data access',
      'Writing optimized queries, tables, and custom database indices',
    ],
  },
];
