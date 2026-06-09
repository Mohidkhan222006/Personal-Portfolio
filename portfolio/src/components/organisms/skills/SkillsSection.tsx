'use client';

import { useState, useEffect } from 'react';
import { skills, type Skill } from '@/data/skills.data';
import { Shield, Code, Wrench, BookOpen, Terminal } from 'lucide-react';

type Category = 'all' | Skill['category'];

const FILTERS: { label: string; value: Category; icon: typeof Shield }[] = [
  { label: 'All', value: 'all', icon: BookOpen },
  { label: 'Security', value: 'security', icon: Shield },
  { label: 'Development', value: 'development', icon: Code },
  { label: 'Languages', value: 'languages', icon: BookOpen },
  { label: 'Tools', value: 'tools', icon: Wrench },
];

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState<Category>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);

  const filtered =
    activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  // Automatically select the first skill in the tab when switching, or keep selection if still in list
  useEffect(() => {
    if (selectedSkill && filtered.some((s) => s.name === selectedSkill.name)) {
      return;
    }
    // Optional: Default select first skill when tab changes
    // setSelectedSkill(filtered[0] || null);
  }, [activeTab, filtered, selectedSkill]);

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
              aria-selected={activeTab === value}
              aria-controls="panel-skills"
              onClick={() => setActiveTab(value)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid',
                borderColor:
                  activeTab === value ? 'var(--color-primary)' : 'var(--color-border)',
                background:
                  activeTab === value ? 'var(--color-primary-glow)' : 'transparent',
                color:
                  activeTab === value
                    ? 'var(--color-primary)'
                    : 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: activeTab === value ? 'var(--shadow-glow)' : 'none',
              }}
            >
              <Icon size={14} />
              {label}
            </button>
          ))}
        </div>

        {/* Interactive Matrix Grid */}
        <div
          id="panel-skills"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
            alignItems: 'start',
          }}
        >
          {/* Left Panel: Capabilities Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
              gap: 'var(--space-s)',
              alignContent: 'start',
            }}
          >
            {filtered.map((skill) => {
              const isSelected = selectedSkill?.name === skill.name;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill)}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 'var(--space-m)',
                    cursor: 'pointer',
                    textAlign: 'center',
                    border: isSelected
                      ? '1px solid var(--color-primary)'
                      : '1px solid var(--color-border)',
                    boxShadow: isSelected ? 'var(--shadow-glow)' : 'none',
                    background: isSelected ? 'rgba(0, 255, 65, 0.04)' : 'var(--color-surface-glass)',
                    transition: 'all 0.2s ease',
                    minHeight: '100px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--color-border-hover)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      color: isSelected ? 'var(--color-primary)' : 'var(--color-text-primary)',
                      marginBottom: '8px',
                      wordBreak: 'break-word',
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    className="tag"
                    style={{
                      fontSize: '0.65rem',
                      padding: '1px 6px',
                      borderColor: isSelected ? 'var(--color-primary)' : 'var(--color-border)',
                      color: isSelected ? 'var(--color-primary)' : 'var(--color-text-muted)',
                      background: isSelected ? 'rgba(0, 255, 65, 0.1)' : 'transparent',
                    }}
                  >
                    {skill.status}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Panel: Terminal Inspector */}
          <div
            className="glass-card"
            style={{
              padding: 'var(--space-l)',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '340px',
              border: '1px solid var(--color-border)',
              background: 'rgba(10, 14, 10, 0.85)',
            }}
          >
            {/* Terminal Window Header */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                borderBottom: '1px solid var(--color-border)',
                paddingBottom: 'var(--space-s)',
                marginBottom: 'var(--space-m)',
                color: 'var(--color-text-muted)',
                fontSize: '0.75rem',
              }}
            >
              <span style={{ color: '#FF5F56', marginRight: '6px' }}>●</span>
              <span style={{ color: '#FFBD2E', marginRight: '6px' }}>●</span>
              <span style={{ color: '#27C93F', marginRight: '8px' }}>●</span>
              <span style={{ flex: 1, color: 'var(--color-text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {selectedSkill ? `skills_decoder.sh --target=${selectedSkill.name.toLowerCase().replace(/\s+/g, '_')}` : 'skills_decoder.sh'}
              </span>
              <span style={{ opacity: 0.5, flexShrink: 0 }} className="hide-sm">SECURE_NODE</span>
            </div>

            {/* Terminal Window Content */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                fontSize: '0.85rem',
                lineHeight: 1.6,
                color: 'var(--color-text-secondary)',
              }}
            >
              {selectedSkill ? (
                <>
                  {/* Console prompt */}
                  <div>
                    <span style={{ color: 'var(--color-primary)' }}>mohid@kali</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>:~$</span>{' '}
                    <span style={{ color: 'var(--color-text-primary)' }}>{selectedSkill.command}</span>
                  </div>

                  {/* Decoding log */}
                  <div style={{ color: 'var(--color-primary)', fontSize: '0.75rem', opacity: 0.8 }}>
                    [SYSTEM] DECODING MODULE DATA... SUCCESS.
                  </div>

                  {/* Details Card */}
                  <div style={{ marginTop: '4px' }}>
                    <div style={{ color: 'var(--color-text-primary)', fontWeight: 700, marginBottom: '6px', fontSize: '1rem' }}>
                      Skill: {selectedSkill.name}
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--color-text-muted)' }}>Category:</span>
                      <span className="tag" style={{ fontSize: '0.7rem' }}>{selectedSkill.category}</span>
                      <span style={{ color: 'var(--color-text-muted)' }}>Status:</span>
                      <span
                        className="tag"
                        style={{
                          fontSize: '0.7rem',
                          borderColor: selectedSkill.status === 'Expert' ? 'var(--color-primary)' : 'var(--color-border)',
                          color: selectedSkill.status === 'Expert' ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                        }}
                      >
                        {selectedSkill.status}
                      </span>
                    </div>

                    <div style={{ color: 'var(--color-text-primary)', marginBottom: '8px', fontWeight: 600 }}>Capabilities &amp; Experience:</div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '4px' }}>
                      {selectedSkill.details.map((detail, index) => (
                        <li key={index} style={{ display: 'flex', gap: '8px', alignItems: 'start' }}>
                          <span style={{ color: 'var(--color-primary)', flexShrink: 0 }}>▸</span>
                          <span style={{ color: 'var(--color-text-secondary)' }}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              ) : (
                <div
                  style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-text-muted)',
                    textAlign: 'center',
                    gap: '12px',
                    padding: 'var(--space-l) 0',
                  }}
                >
                  <Terminal size={36} color="var(--color-text-muted)" className="float-animation" />
                  <div>
                    <span style={{ color: 'var(--color-primary)' }}>$</span>{' '}
                    <span>select_module_to_decode_capabilities</span>
                    <span className="cursor-blink" style={{ color: 'var(--color-primary)' }}>_</span>
                  </div>
                  <div style={{ fontSize: '0.75rem', opacity: 0.6, maxWidth: '280px' }}>
                    Click on any skill block in the capabilities matrix to scan system attributes.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
