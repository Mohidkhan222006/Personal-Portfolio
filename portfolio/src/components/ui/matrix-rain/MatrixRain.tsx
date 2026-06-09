'use client';

import { useEffect, useRef, useState } from 'react';

/** Matrix rain canvas animation */
export default function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight : window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const fontSize = 14;
    const chars =
      'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF<>{}[]|/\\';

    let cols = Math.floor(canvas.width / fontSize);
    const drops: number[] = [];
    for (let i = 0; i < cols; i++) {
      drops[i] = Math.floor(Math.random() * -40); // staggered starting heights off-screen
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(10, 14, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        // Only draw drops that are on-screen
        if (drops[i] >= 0) {
          const char = chars[Math.floor(Math.random() * chars.length)];

          // Randomly draw white highlight characters to simulate matrix glitch
          if (Math.random() > 0.98) {
            ctx.fillStyle = '#FFFFFF';
          } else {
            ctx.fillStyle = '#00FF41';
          }

          ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        }

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }

      // Resize-aware column count update (handles both growth and shrinkage)
      cols = Math.floor(canvas.width / fontSize);
      if (drops.length > cols) {
        drops.length = cols;
      } else {
        while (drops.length < cols) {
          drops.push(Math.floor(Math.random() * -40));
        }
      }
    };

    const interval = setInterval(draw, 50);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resize);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.18,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}
