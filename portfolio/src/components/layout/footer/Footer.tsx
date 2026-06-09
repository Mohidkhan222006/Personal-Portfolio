'use client';

import { GitFork, Link, Mail, Shield, Terminal } from 'lucide-react';

const socialLinks = [
  { href: 'https://github.com/Mohidkhan222006', label: 'GitHub', icon: GitFork },
  { href: 'https://www.linkedin.com/in/mohid-ahmer-khan-464bb9282/', label: 'LinkedIn', icon: Link },
  { href: 'mailto:mustafahasani06@gmail.com', label: 'Email', icon: Mail },
];

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        borderTop: '1px solid var(--color-border)',
        padding: 'var(--space-2xl) 0',
        background: 'var(--color-bg)',
      }}
    >
      <div className="container-portfolio">
        {/* Top row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-l)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield size={20} color="var(--color-primary)" strokeWidth={1.5} />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                color: 'var(--color-primary)',
                fontSize: '1rem',
              }}
            >
              mohid@sec:~$
            </span>
          </div>

          {/* Nav links */}
          <nav aria-label="Footer navigation">
            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 'var(--space-l)',
                listStyle: 'none',
              }}
            >
              {footerLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--color-text-muted)',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-primary)')
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLElement).style.color = 'var(--color-text-muted)')
                    }
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social links */}
          <div style={{ display: 'flex', gap: 'var(--space-m)' }}>
            {socialLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  color: 'var(--color-text-secondary)',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-primary)';
                  el.style.color = 'var(--color-primary)';
                  el.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.borderColor = 'var(--color-border)';
                  el.style.color = 'var(--color-text-secondary)';
                  el.style.boxShadow = 'none';
                }}
              >
                <Icon size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>

        <div className="cyber-divider" />

        {/* Bottom row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-m)',
            marginTop: 'var(--space-l)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
            }}
          >
            © {year} Mohid. Built with{' '}
            <span style={{ color: 'var(--color-primary)' }}>Next.js</span> &{' '}
            <span style={{ color: 'var(--color-primary)' }}>❤</span>
          </p>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--color-text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Terminal size={12} />
            Hack the planet 🌐
          </p>
        </div>
      </div>
    </footer>
  );
}
