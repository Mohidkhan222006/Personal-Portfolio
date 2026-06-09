'use client';

import { useState } from 'react';
import { projects, type Project } from '@/data/projects.data';
import { GitFork, ExternalLink, Shield, Code, Terminal, Wrench } from 'lucide-react';

type Filter = 'all' | Project['tags'][number];

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Security', value: 'security' },
  { label: 'Development', value: 'development' },
  { label: 'Tools', value: 'tool' },
  { label: 'CTF', value: 'ctf' },
];

const TAG_ICONS: Record<string, typeof Shield> = {
  security: Shield,
  development: Code,
  ctf: Terminal,
  tool: Wrench,
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<Filter>('all');

  const filtered =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.tags.includes(filter as Project['tags'][number]));

  return (
    <section
      id="projects"
      className="section"
      aria-labelledby="projects-heading"
    >
      <div className="container-portfolio">
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 03. projects"}
        </p>

        <h2
          id="projects-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 'var(--space-xl)',
          }}
        >
          What I&apos;ve <span className="text-glow">Built</span>
        </h2>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 'var(--space-s)',
            marginBottom: 'var(--space-2xl)',
          }}
          role="group"
          aria-label="Filter projects by category"
        >
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              id={`filter-${value}`}
              onClick={() => setFilter(value)}
              aria-pressed={filter === value}
              style={{
                padding: '8px 16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid',
                borderColor:
                  filter === value ? 'var(--color-primary)' : 'var(--color-border)',
                background:
                  filter === value ? 'var(--color-primary-glow)' : 'transparent',
                color:
                  filter === value
                    ? 'var(--color-primary)'
                    : 'var(--color-text-secondary)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: 'var(--space-xl)',
          }}
        >
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div
            style={{
              textAlign: 'center',
              padding: 'var(--space-3xl)',
              color: 'var(--color-text-muted)',
              fontFamily: 'var(--font-mono)',
            }}
          >
            <Terminal size={32} style={{ margin: '0 auto var(--space-m)' }} />
            <p>No projects found in this category yet.</p>
            <p style={{ marginTop: '8px', fontSize: '0.8rem' }}>{"// coming soon"}</p>
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const primaryTag = project.tags[0];
  const Icon = TAG_ICONS[primaryTag] ?? Code;

  return (
    <article
      className="glass-card"
      style={{
        padding: 'var(--space-xl)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-m)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      }}
    >
      {/* Top accent */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '2px',
          background: 'linear-gradient(90deg, var(--color-primary), var(--color-info))',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
        className="card-accent"
      />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div
          style={{
            padding: '10px',
            borderRadius: 'var(--radius-md)',
            background: 'var(--color-primary-glow)',
            border: '1px solid var(--color-border)',
          }}
        >
          <Icon size={20} color="var(--color-primary)" strokeWidth={1.5} />
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--color-text-primary)',
        }}
      >
        {project.title}
      </h3>

      {/* Description */}
      <p
        style={{
          fontSize: '0.875rem',
          color: 'var(--color-text-secondary)',
          lineHeight: 1.7,
          flex: 1,
        }}
      >
        {project.description}
      </p>

      {/* Tech stack */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.techStack.map((tech) => (
          <span
            key={tech}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              padding: '2px 8px',
              borderRadius: 'var(--radius-sm)',
              background: 'rgba(0,255,65,0.06)',
              color: 'var(--color-primary)',
              border: '1px solid rgba(0,255,65,0.15)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div
        style={{
          display: 'flex',
          gap: 'var(--space-m)',
          paddingTop: 'var(--space-s)',
          borderTop: '1px solid var(--color-border)',
        }}
      >
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)')
            }
          >
            <GitFork size={14} />
            Source
          </a>
        )}
        {project.liveUrl && project.liveUrl !== '/' && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} live demo`}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--color-text-secondary)',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--color-primary)')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)')
            }
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
        )}
        <span
          style={{
            marginLeft: 'auto',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--color-text-muted)',
          }}
        >
          {project.year}
        </span>
      </div>
    </article>
  );
}
