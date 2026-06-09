'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { Send, GitFork, Link, Mail, Terminal, CheckCircle, AlertCircle } from 'lucide-react';
import { contactSchema, type ContactFormData } from '@/lib/schemas/contact.schema';

const socialLinks = [
  { href: 'https://github.com/Mohidkhan222006', label: 'GitHub', icon: GitFork, user: '@Mohidkhan222006' },
  { href: 'https://www.linkedin.com/in/mohid-ahmer-khan-464bb9282/', label: 'LinkedIn', icon: Link, user: 'Mohid Ahmer Khan' },
  { href: 'mailto:mustafahasani06@gmail.com', label: 'Email', icon: Mail, user: 'mustafahasani06@gmail.com' },
];

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        throw new Error(json.message || 'Something went wrong');
      }
      setStatus('success');
      reset();
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Failed to send message');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 16px',
    background: 'var(--color-surface-alt)',
    border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    color: 'var(--color-text-primary)',
    fontFamily: 'var(--font-sans)',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    color: 'var(--color-text-secondary)',
    marginBottom: '6px',
  };

  const errorStyle: React.CSSProperties = {
    color: 'var(--color-danger)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    marginTop: '4px',
  };

  return (
    <section
      id="contact"
      className="section"
      aria-labelledby="contact-heading"
    >
      <div className="container-portfolio">
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 05. contact"}
        </p>

        <h2
          id="contact-heading"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
            marginBottom: 'var(--space-s)',
          }}
        >
          Get In <span className="text-glow">Touch</span>
        </h2>

        <p
          style={{
            color: 'var(--color-text-secondary)',
            marginBottom: 'var(--space-2xl)',
            maxWidth: '500px',
          }}
        >
          Have a security project, collaboration idea, or just want to connect? Send me a message.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-2xl)',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            aria-label="Contact form"
            className="glass-card"
            style={{ padding: 'var(--space-xl)' }}
          >
            {/* Success */}
            {status === 'success' && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: 'var(--space-m)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0,255,65,0.08)',
                  border: '1px solid var(--color-primary)',
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  marginBottom: 'var(--space-l)',
                }}
              >
                <CheckCircle size={18} />
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            {/* Error */}
            {status === 'error' && (
              <div
                role="alert"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: 'var(--space-m)',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255,68,68,0.08)',
                  border: '1px solid var(--color-danger)',
                  color: 'var(--color-danger)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  marginBottom: 'var(--space-l)',
                }}
              >
                <AlertCircle size={18} />
                {errorMsg}
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-m)' }}>
              {/* Name */}
              <div>
                <label htmlFor="contact-name" style={labelStyle}>
                  name<span style={{ color: 'var(--color-danger)' }}>*</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  autoComplete="name"
                  aria-required="true"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  {...register('name')}
                  style={{
                    ...inputStyle,
                    borderColor: errors.name ? 'var(--color-danger)' : 'var(--color-border)',
                  }}
                  onFocus={(e) => {
                    if (!errors.name)
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    if (!errors.name)
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-border)';
                  }}
                />
                {errors.name && (
                  <p id="contact-name-error" style={errorStyle} role="alert">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="contact-email" style={labelStyle}>
                  email<span style={{ color: 'var(--color-danger)' }}>*</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  autoComplete="email"
                  aria-required="true"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  {...register('email')}
                  style={{
                    ...inputStyle,
                    borderColor: errors.email ? 'var(--color-danger)' : 'var(--color-border)',
                  }}
                  onFocus={(e) => {
                    if (!errors.email)
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    if (!errors.email)
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-border)';
                  }}
                />
                {errors.email && (
                  <p id="contact-email-error" style={errorStyle} role="alert">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" style={labelStyle}>
                  subject<span style={{ color: 'var(--color-danger)' }}>*</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  aria-required="true"
                  aria-invalid={!!errors.subject}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  {...register('subject')}
                  style={{
                    ...inputStyle,
                    borderColor: errors.subject ? 'var(--color-danger)' : 'var(--color-border)',
                  }}
                  onFocus={(e) => {
                    if (!errors.subject)
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    if (!errors.subject)
                      (e.target as HTMLInputElement).style.borderColor = 'var(--color-border)';
                  }}
                />
                {errors.subject && (
                  <p id="contact-subject-error" style={errorStyle} role="alert">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" style={labelStyle}>
                  message<span style={{ color: 'var(--color-danger)' }}>*</span>
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  aria-required="true"
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  {...register('message')}
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '120px',
                    borderColor: errors.message ? 'var(--color-danger)' : 'var(--color-border)',
                  }}
                  onFocus={(e) => {
                    if (!errors.message)
                      (e.target as HTMLTextAreaElement).style.borderColor = 'var(--color-primary)';
                  }}
                  onBlur={(e) => {
                    if (!errors.message)
                      (e.target as HTMLTextAreaElement).style.borderColor = 'var(--color-border)';
                  }}
                />
                {errors.message && (
                  <p id="contact-message-error" style={errorStyle} role="alert">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  opacity: status === 'loading' ? 0.7 : 1,
                  cursor: status === 'loading' ? 'wait' : 'pointer',
                }}
              >
                <Send size={16} />
                {status === 'loading' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-xl)' }}>
            {/* Terminal card */}
            <div
              className="glass-card"
              style={{ padding: 'var(--space-xl)', fontFamily: 'var(--font-mono)' }}
            >
              <div style={{ color: 'var(--color-text-muted)', marginBottom: 'var(--space-m)', fontSize: '0.8rem' }}>
                <span style={{ color: '#FF5F56' }}>●</span>{' '}
                <span style={{ color: '#FFBD2E' }}>●</span>{' '}
                <span style={{ color: '#27C93F' }}>●</span>{' '}
                <span style={{ marginLeft: '8px' }}>contact_info.sh</span>
              </div>
              <div style={{ fontSize: '0.825rem', lineHeight: 2 }}>
                <div>
                  <span style={{ color: 'var(--color-primary)' }}>$</span>{' '}
                  <span style={{ color: 'var(--color-text-secondary)' }}>cat contact.txt</span>
                </div>
                <div style={{ color: 'var(--color-text-muted)' }}>
                  {`>`} Location: Karachi, Pakistan 🇵🇰
                </div>
                <div style={{ color: 'var(--color-text-muted)' }}>
                  {`>`} Response time: {'<'} 24 hours
                </div>
                <div style={{ color: 'var(--color-text-muted)' }}>
                  {`>`} Open to: Internships, Freelance, Collab
                </div>
              </div>
            </div>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-m)' }}>
              {socialLinks.map(({ href, label, icon: Icon, user }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass-card"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--space-m)',
                    padding: 'var(--space-m) var(--space-l)',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--color-primary)';
                    el.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = 'var(--color-border)';
                    el.style.transform = 'translateX(0)';
                  }}
                >
                  <div
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-md)',
                      background: 'var(--color-primary-glow)',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Icon size={18} color="var(--color-primary)" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        color: 'var(--color-text-muted)',
                      }}
                    >
                      {user}
                    </div>
                  </div>
                  <Terminal
                    size={14}
                    color="var(--color-text-muted)"
                    style={{ marginLeft: 'auto' }}
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
