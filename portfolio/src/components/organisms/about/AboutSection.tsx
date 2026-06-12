'use client';

import { Shield, Code, Target, BookOpen } from 'lucide-react';

const stats = [
  { value: '1st', label: 'Year at NEDUET', icon: BookOpen },
  { value: '50+', label: 'CTFs Competed', icon: Target },
  { value: '2+', label: 'Security Courses', icon: Shield },
  { value: '100%', label: 'Passion for Security', icon: Code },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section"
      aria-labelledby="about-heading"
    >
      <div className="container-portfolio">
        {/* Section label */}
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 01. about_me"}
        </p>

        <h2
          id="about-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          Who Am I<span className="text-glow">?</span>
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
        >
          {/* Text */}
          <div>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: 'var(--space-l)',
              }}
            >
              I&apos;m{' '}
              <strong style={{ color: 'var(--color-text-primary)' }}>Mohid Ahmer Khan</strong> — a
              first-year CS student at{' '}
              <strong style={{ color: 'var(--color-primary)' }}>
                NED University of Engineering &amp; Technology (NEDUET)
              </strong>{' '}
              in Karachi, Pakistan.
            </p>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: 'var(--space-l)',
              }}
            >
              I&apos;m a self-taught hacker who started my cybersecurity journey through TCM
              Security courses and hands-on practice on TryHackMe and Hack The Box. I live in
              the terminal — breaking, probing, and understanding how systems work at their core.
            </p>
            <p
              style={{
                color: 'var(--color-text-secondary)',
                lineHeight: 1.8,
                marginBottom: 'var(--space-xl)',
              }}
            >
              On the development side, I build web applications with Python, JavaScript, and
              Next.js — always with security baked in from the start. My goal is to become a
              well-rounded security engineer who can both attack and defend.
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                'Penetration Testing',
                'CTF Player',
                'TryHackMe',
                'Hack The Box',
                'Python',
                'TCM Security',
                'Kali Linux',
                'NEDUET \'29',
              ].map((tag) => (
                <span key={tag} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 'var(--space-m)',
            }}
          >
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="glass-card"
                style={{
                  padding: 'var(--space-l)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 'var(--space-s)',
                  textAlign: 'center',
                }}
              >
                <Icon
                  size={24}
                  color="var(--color-primary)"
                  strokeWidth={1.5}
                  style={{ margin: '0 auto' }}
                />
                <div
                  style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: 'var(--color-primary)',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: 1,
                  }}
                >
                  {value}
                </div>
                <div
                  style={{
                    fontSize: '0.8rem',
                    color: 'var(--color-text-secondary)',
                    fontFamily: 'var(--font-mono)',
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
