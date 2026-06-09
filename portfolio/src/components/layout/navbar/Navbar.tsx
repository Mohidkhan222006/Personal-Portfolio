'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Shield, Terminal } from 'lucide-react';
import ScrollProgress from '@/components/ui/scroll-progress/ScrollProgress';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <ScrollProgress />
      <header
        role="banner"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          transition: 'all 0.3s ease',
          background: scrolled
            ? 'rgba(10, 14, 10, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(0, 255, 65, 0.12)'
            : '1px solid transparent',
        }}
      >
        <nav
          className="container-portfolio"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '64px',
          }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            href="#hero"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '1.1rem',
              color: 'var(--color-primary)',
            }}
            aria-label="Mohid — Home"
          >
            <Shield size={20} strokeWidth={1.5} />
            <span>mohid</span>
            <span style={{ color: 'var(--color-text-muted)', fontWeight: 400 }}>@sec</span>
          </Link>

          {/* Desktop nav */}
          <ul
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-l)',
              listStyle: 'none',
            }}
            className="hidden-mobile"
          >
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    textDecoration: 'none',
                    transition: 'color 0.2s ease',
                    padding: '4px 0',
                    borderBottom: '2px solid transparent',
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--color-primary)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = 'var(--color-text-secondary)';
                  }}
                >
                  <span style={{ color: 'var(--color-primary)', marginRight: '2px' }}>./</span>
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href="mailto:mustafahasani06@gmail.com"
              className="btn-outline hidden-mobile"
              style={{ padding: '8px 20px', fontSize: '0.8rem' }}
            >
              <Terminal size={14} />
              Hire Me
            </a>

            {/* Mobile menu toggle */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileOpen((o) => !o)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'var(--color-primary)',
                display: 'none',
                padding: '4px',
              }}
              className="show-mobile"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            id="mobile-menu"
            style={{
              background: 'rgba(10, 14, 10, 0.97)',
              borderTop: '1px solid var(--color-border)',
              padding: 'var(--space-l) var(--space-xl)',
            }}
          >
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-m)' }}>
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={closeMobile}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '1rem',
                      color: 'var(--color-text-secondary)',
                      textDecoration: 'none',
                      display: 'block',
                      padding: '8px 0',
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)' }}>$ </span>
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:mustafahasani06@gmail.com"
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={closeMobile}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </nav>
        )}
      </header>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
