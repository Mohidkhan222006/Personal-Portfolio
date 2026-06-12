'use client';

import { experiences } from '@/data/experience.data';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const TYPE_ICONS = {
  work: Briefcase,
  education: GraduationCap,
  certification: Award,
};

const TYPE_COLORS: Record<string, string> = {
  work: 'var(--color-primary)',
  education: 'var(--color-info)',
  certification: 'var(--color-warning)',
};

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="section"
      aria-labelledby="experience-heading"
      style={{ background: 'var(--color-bg-alt)' }}
    >
      <div className="container-portfolio">
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 04. education_and_certifications"}
        </p>

        <h2
          id="experience-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          Education & <span className="text-glow">Certifications</span>
        </h2>

        {/* Timeline */}
        <ol
          style={{
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-xl)',
            position: 'relative',
            paddingLeft: 'var(--space-2xl)',
          }}
          aria-label="Experience timeline"
        >
          {/* Vertical line */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '10px',
              top: '12px',
              bottom: '12px',
              width: '2px',
              background:
                'linear-gradient(180deg, var(--color-primary) 0%, rgba(0,255,65,0.1) 100%)',
            }}
          />

          {experiences
            .filter((exp) => exp.type === 'education' || exp.type === 'certification')
            .map((exp) => {
            const Icon = TYPE_ICONS[exp.type];
            const color = TYPE_COLORS[exp.type];

            return (
              <li key={exp.id} style={{ position: 'relative' }}>
                {/* Dot */}
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    left: 'calc(-1 * var(--space-2xl) + 5px)',
                    top: '4px',
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: color,
                    boxShadow: `0 0 12px ${color}`,
                    border: '2px solid var(--color-bg)',
                  }}
                />

                {/* Card */}
                <article className="glass-card" style={{ padding: 'var(--space-xl)' }}>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'flex-start',
                      justifyContent: 'space-between',
                      gap: 'var(--space-m)',
                      marginBottom: 'var(--space-m)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div
                        style={{
                          padding: '8px',
                          borderRadius: 'var(--radius-md)',
                          background: `${color}20`,
                          border: `1px solid ${color}30`,
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Icon size={18} color={color} strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontSize: '1rem',
                            fontWeight: 700,
                            color: 'var(--color-text-primary)',
                          }}
                        >
                          {exp.title}
                        </h3>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: color,
                            fontFamily: 'var(--font-mono)',
                          }}
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                          color: 'var(--color-text-muted)',
                        }}
                      >
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span
                          style={{
                            padding: '2px 8px',
                            borderRadius: 'var(--radius-full)',
                            background: 'rgba(0,255,65,0.1)',
                            border: '1px solid var(--color-primary)',
                            color: 'var(--color-primary)',
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                          }}
                        >
                          current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {exp.description.map((line, i) => (
                      <li
                        key={i}
                        style={{
                          fontSize: '0.875rem',
                          color: 'var(--color-text-secondary)',
                          lineHeight: 1.7,
                          display: 'flex',
                          gap: '8px',
                        }}
                      >
                        <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>▸</span>
                        {line}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '6px',
                      marginTop: 'var(--space-m)',
                      paddingTop: 'var(--space-m)',
                      borderTop: '1px solid var(--color-border)',
                    }}
                  >
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
