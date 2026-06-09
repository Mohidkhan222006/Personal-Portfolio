'use client';

import { useState } from 'react';
import { skills, type Skill } from '@/data/skills.data';
import { Shield, Code, Wrench, BookOpen } from 'lucide-react';

type Category = 'all' | Skill['category'];

const FILTERS: { label: string; value: Category; icon: typeof Shield }[] = [
  { label: 'All', value: 'all', icon: BookOpen },
  { label: 'Security', value: 'security', icon: Shield },
  { label: 'Development', value: 'development', icon: Code },
  { label: 'Languages', value: 'languages', icon: BookOpen },
  { label: 'Tools', value: 'tools', icon: Wrench },
];

export default function SkillsSection() {
  const [active, setActive] = useState<Category>('all');

  const filtered =
    active === 'all' ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      id="skills"
      className="section"
      aria-labelledby="skills-heading"
      style={{ background: 'var(--color-bg-alt)' }}
    >
      <div className="container-portfolio">
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 02. skill_set"}
        </p>

        <h2
          id="skills-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          What I <span className="text-glow">Know</span>
        </h2>

        {/* Filter tabs */}
        <div
          role="tablist"
          aria-label="Skill categories"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-s)',
            marginBottom: 'var(--space-2xl)',
          }}
        >
          {FILTERS.map(({ label, value, icon: Icon }) => (
            <button
              key={value}
              role="tab"
              id={`tab-${value}`}
              aria-selected={active === value}
              aria-controls={`panel-skills`}
              onClick={() => setActive(value)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid',
                borderColor:
                  active === value ? 'var(--color-primary)' : 'var(--color-border)',
                background:
                  active === value ? 'var(--color-primary-glow)' : 'transparent',
                color:
                  active === value
                    ? 'var(--color-primary)'
                    : 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: active === value ? 'var(--shadow-glow)' : 'none',
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          id="panel-skills"
          role="tabpanel"
          aria-labelledby={`tab-${active}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: 'var(--space-m)',
          }}
        >
          {filtered.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillBar({ skill }: { skill: Skill }) {
  return (
    <div
      className="glass-card"
      style={{ padding: 'var(--space-m)' }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '8px',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: 'var(--color-text-primary)',
          }}
        >
          {skill.name}
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-primary)',
          }}
        >
          {skill.level}%
        </span>
      </div>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${skill.level}%` }}
          role="progressbar"
          aria-valuenow={skill.level}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={`${skill.name} proficiency ${skill.level}%`}
        />
      </div>
    </div>
  );
}
