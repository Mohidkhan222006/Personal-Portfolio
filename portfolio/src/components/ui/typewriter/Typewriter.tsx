'use client';

import { useEffect, useState } from 'react';

interface TypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

/** Typewriter effect that cycles through an array of strings. */
export default function Typewriter({
  texts,
  speed = 80,
  deleteSpeed = 40,
  pause = 2000,
  className = '',
}: TypewriterProps) {
  const [displayed, setDisplayed] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = texts[textIndex];

    if (!isDeleting && charIndex < current.length) {
      const timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex === current.length) {
      const timeout = setTimeout(() => setIsDeleting(true), pause);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex > 0) {
      const timeout = setTimeout(() => {
        if (charIndex === 1) {
          setDisplayed('');
          setCharIndex(0);
          setIsDeleting(false);
          setTextIndex((i) => (i + 1) % texts.length);
        } else {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }
      }, deleteSpeed);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, deleteSpeed, pause]);

  return (
    <span className={className} aria-label={texts[textIndex]}>
      {displayed}
      <span
        className="cursor-blink"
        style={{ color: 'var(--color-primary)', marginLeft: '2px' }}
        aria-hidden="true"
      >
        _
      </span>
    </span>
  );
}
