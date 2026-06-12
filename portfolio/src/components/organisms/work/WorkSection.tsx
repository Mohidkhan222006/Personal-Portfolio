'use client';

import { experiences } from '@/data/experience.data';
import { Briefcase, Calendar, Terminal } from 'lucide-react';

export default function WorkSection() {
  const workExperiences = experiences.filter((exp) => exp.type === 'work');

  return (
    <section
      id="work"
      className="section"
      aria-labelledby="work-heading"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <div className="container-portfolio">
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 03.5. work_experience_and_internships"}
        </p>

        <h2
          id="work-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          Professional <span className="text-glow">Experience</span> & Internships
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
          }}
        >
          {workExperiences.map((exp) => (
            <article
              key={exp.id}
              className="glass-card"
              style={{
                padding: 'var(--space-xl)',
                position: 'relative',
                border: '1px solid var(--color-border)',
                background: 'rgba(10, 14, 10, 0.4)',
                borderRadius: 'var(--radius-lg)',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Top Accent Line */}
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, var(--color-primary) 0%, transparent 100%)',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: 'var(--space-m)',
                  marginBottom: 'var(--space-l)',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        padding: '8px',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(0, 255, 65, 0.1)',
                        border: '1px solid rgba(0, 255, 65, 0.2)',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Briefcase size={18} color="var(--color-primary)" />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: 'var(--color-text-primary)',
                          margin: 0,
                        }}
                      >
                        {exp.title}
                      </h3>
                      <p
                        style={{
                          fontSize: '0.95rem',
                          color: 'var(--color-primary)',
                          fontFamily: 'var(--font-mono)',
                          marginTop: '4px',
                          marginBottom: 0,
                        }}
                      >
                        {exp.company}
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.85rem',
                    color: 'var(--color-text-muted)',
                    background: 'rgba(10, 14, 10, 0.6)',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  <Calendar size={14} />
                  <span>{exp.period}</span>
                  {exp.current && (
                    <span
                      style={{
                        marginLeft: '8px',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(0, 255, 65, 0.1)',
                        border: '1px solid var(--color-primary)',
                        color: 'var(--color-primary)',
                        fontSize: '0.7rem',
                      }}
                    >
                      current
                    </span>
                  )}
                </div>
              </div>

              {/* Console log prompt decorator */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--color-text-muted)',
                  marginBottom: '12px',
                }}
              >
                <Terminal size={12} color="var(--color-primary)" />
                <span>cat description.txt</span>
              </div>

              {/* Description */}
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  paddingLeft: 0,
                  margin: 0,
                }}
              >
                {exp.description.map((line, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      display: 'flex',
                      gap: '10px',
                    }}
                  >
                    <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>▸</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px',
                  marginTop: 'var(--space-l)',
                  paddingTop: 'var(--space-m)',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag"
                    style={{
                      background: 'rgba(0, 255, 65, 0.05)',
                      border: '1px solid rgba(0, 255, 65, 0.15)',
                      color: 'var(--color-text-secondary)',
                      fontSize: '0.75rem',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-sm)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
