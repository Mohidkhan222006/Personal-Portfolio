'use client';

import { GitFork, Link, Mail, ChevronDown, Download } from 'lucide-react';
import dynamic from 'next/dynamic';
import Typewriter from '@/components/ui/typewriter/Typewriter';

const MatrixRain = dynamic(() => import('@/components/ui/matrix-rain/MatrixRain'), { ssr: false });

const ROLES = [
  'Penetration Tester',
  'Ethical Hacker',
  'Full Stack Developer',
  'CTF Player',
  'Security Researcher',
];

const socialLinks = [
  { href: 'https://github.com/Mohidkhan222006', label: 'GitHub', icon: GitFork },
  { href: 'https://www.linkedin.com/in/mohid-ahmer-khan-464bb9282/', label: 'LinkedIn', icon: Link },
  { href: 'mailto:mustafahasani06@gmail.com', label: 'Email', icon: Mail },
];

export default function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Hero — introduction"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '64px',
      }}
    >
      {/* Matrix rain background */}
      <MatrixRain />

      {/* Radial gradient overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0, 255, 65, 0.04) 0%, transparent 70%)',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        className="container-portfolio"
        style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}
      >
        {/* Terminal badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border)',
            background: 'rgba(0, 255, 65, 0.05)',
            marginBottom: 'var(--space-xl)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--color-primary)',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: 'var(--color-primary)',
              display: 'inline-block',
              animation: 'pulse-glow 2s infinite',
            }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: 'var(--space-l)',
            letterSpacing: '-0.02em',
          }}
        >
          <span style={{ color: 'var(--color-text-primary)' }}>Hi, I&apos;m </span>
          <span className="text-glow">Mohid</span>
        </h1>

        {/* Typewriter role */}
        <div
          style={{
            fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
            fontFamily: 'var(--font-mono)',
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-xl)',
            minHeight: '2.5rem',
          }}
        >
          <Typewriter texts={ROLES} />
        </div>

        {/* Bio */}
        <p
          style={{
            maxWidth: '560px',
            margin: '0 auto var(--space-2xl)',
            color: 'var(--color-text-secondary)',
            fontSize: '1rem',
            lineHeight: 1.7,
          }}
        >
          CS student at NEDUET &amp; self-taught hacker. I break things to understand how they work — then build
          them more securely. Specializing in penetration testing, CTF competitions, and secure full-stack development.
        </p>

        {/* CTA buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-m)',
            justifyContent: 'center',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          <a href="#projects" className="btn-primary" id="hero-view-projects">
            View Projects
          </a>
          <a
            href="/assets/resume.pdf"
            download
            className="btn-outline"
            id="hero-download-cv"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 'var(--space-m)',
            marginBottom: 'var(--space-3xl)',
          }}
        >
          {socialLinks.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-primary)';
                el.style.color = 'var(--color-primary)';
                el.style.boxShadow = 'var(--shadow-glow)';
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = 'var(--color-border)';
                el.style.color = 'var(--color-text-secondary)';
                el.style.boxShadow = 'none';
                el.style.transform = 'translateY(0)';
              }}
            >
              <Icon size={18} strokeWidth={1.5} />
            </a>
          ))}
        </div>

        {/* Terminal prompt decoration */}
        <div
          className="glass-card"
          style={{
            display: 'inline-block',
            padding: '12px 20px',
            maxWidth: '420px',
            textAlign: 'left',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
          }}
        >
          <div style={{ color: 'var(--color-text-muted)', marginBottom: '4px' }}>
            <span style={{ color: '#FF5F56' }}>●</span>{' '}
            <span style={{ color: '#FFBD2E' }}>●</span>{' '}
            <span style={{ color: '#27C93F' }}>●</span>{' '}
            <span style={{ marginLeft: '8px', color: 'var(--color-text-muted)' }}>
              terminal — mohid@kali
            </span>
          </div>
          <div style={{ color: 'var(--color-text-secondary)' }}>
            <span style={{ color: 'var(--color-primary)' }}>mohid@kali</span>
            <span style={{ color: 'var(--color-text-muted)' }}>:~$ </span>
            <span>whoami</span>
          </div>
          <div style={{ color: 'var(--color-primary)', marginTop: '4px' }}>
            penetration_tester &amp;&amp; developer
          </div>
          <div style={{ color: 'var(--color-text-secondary)', marginTop: '4px' }}>
            <span style={{ color: 'var(--color-primary)' }}>mohid@kali</span>
            <span style={{ color: 'var(--color-text-muted)' }}>:~$ </span>
            <span className="cursor-blink" style={{ color: 'var(--color-primary)' }}>_</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        style={{
          position: 'absolute',
          bottom: 'var(--space-xl)',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          color: 'var(--color-text-muted)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          textDecoration: 'none',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          animation: 'float 3s ease-in-out infinite',
        }}
      >
        <span>scroll</span>
        <ChevronDown size={16} color="var(--color-primary)" />
      </a>
    </section>
  );
}
