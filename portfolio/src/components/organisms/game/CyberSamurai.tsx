'use client';

import { useEffect, useRef, useState } from 'react';
import { Terminal, Play, Pause, Swords, RefreshCw } from 'lucide-react';

interface Threat {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  name: string;
  radius: number;
  health: number;
  maxHealth: number;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  char: '0' | '1';
  alpha: number;
  size: number;
}

interface LogEntry {
  time: string;
  type: 'info' | 'warn' | 'success';
  message: string;
}

const THREAT_NAMES = [
  'Trojan.Downloader',
  'Ransom.Locky',
  'Worm.Conficker',
  'Exploit.CVE-2026',
  'Spyware.Pegasus',
  'SQL.Injection.Payload',
  'DDoS.Botnet.Node',
  'Phishing.Daemon',
];

export default function CyberSamurai() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mounted, setMounted] = useState(false);
  const [kills, setKills] = useState(0);
  const [autoMode, setAutoMode] = useState(true);
  const [logs, setLogs] = useState<LogEntry[]>([
    { time: '13:37:00', type: 'info', message: 'katana.sys sword-fighting engine initialized.' },
    { time: '13:37:02', type: 'info', message: 'Defense mainframe standing by. Awaiting threats...' },
  ]);

  // Use refs to share state with the high-speed canvas animation loop
  const stateRef = useRef({
    autoMode: true,
    kills: 0,
    threats: [] as Threat[],
    particles: [] as Particle[],
    samurai: {
      x: 300,
      y: 200,
      tx: 300,
      ty: 200,
      state: 'idle' as 'idle' | 'dashing' | 'slashing' | 'returning',
      targetId: null as number | null,
      slashAngle: 0,
      slashRadius: 0,
      slashTimer: 0,
      trail: [] as { x: number; y: number }[],
    },
    screenshake: 0,
  });

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setMounted(true);
    });
    return () => cancelAnimationFrame(handle);
  }, []);

  // Sync autoMode state to ref
  useEffect(() => {
    stateRef.current.autoMode = autoMode;
  }, [autoMode]);

  const addLog = (type: LogEntry['type'], message: string) => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}:${String(now.getSeconds()).padStart(2, '0')}`;
    setLogs((prev) => [{ time: timeStr, type, message }, ...prev.slice(0, 18)]);
  };

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Dimensions setup
    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : 800;
      canvas.height = 400; // Fixed visual dashboard height
      
      // Center samurai initially
      if (stateRef.current.samurai.state === 'idle') {
        stateRef.current.samurai.x = canvas.width / 2;
        stateRef.current.samurai.y = canvas.height / 2;
        stateRef.current.samurai.tx = canvas.width / 2;
        stateRef.current.samurai.ty = canvas.height / 2;
      }
    };
    resize();
    window.addEventListener('resize', resize);

    let threatIdCounter = 0;
    const state = stateRef.current;

    // Spawn an enemy threat
    const spawnThreat = () => {
      if (state.threats.length >= 6) return;
      const radius = 18;
      const x = Math.random() > 0.5 ? -radius : canvas.width + radius;
      const y = Math.random() * (canvas.height - 100) + 50;
      const angle = Math.atan2(canvas.height / 2 - y, canvas.width / 2 - x) + (Math.random() - 0.5) * 0.5;
      const speed = Math.random() * 1.2 + 0.8;

      const newThreat: Threat = {
        id: threatIdCounter++,
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        name: THREAT_NAMES[Math.floor(Math.random() * THREAT_NAMES.length)],
        radius,
        health: 100,
        maxHealth: 100,
      };

      state.threats.push(newThreat);
      addLog('warn', `ALARM: Threat identified: ${newThreat.name} spawning at perimeter.`);
    };

    const spawnInterval = setInterval(spawnThreat, 4000);

    // Spawn binary splash particles
    const spawnExplosion = (x: number, y: number) => {
      for (let i = 0; i < 25; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 4 + 2;
        state.particles.push({
          x,
          y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          char: Math.random() > 0.5 ? '1' : '0',
          alpha: 1.0,
          size: Math.floor(Math.random() * 6) + 10,
        });
      }
    };

    // Main animation loop
    let animationFrameId: number;
    let time = 0;

    const tick = () => {
      time += 0.05;
      ctx.save();

      // Screenshake matrix manipulation
      if (state.screenshake > 0) {
        const dx = (Math.random() - 0.5) * state.screenshake;
        const dy = (Math.random() - 0.5) * state.screenshake;
        ctx.translate(dx, dy);
        state.screenshake *= 0.9;
        if (state.screenshake < 0.2) state.screenshake = 0;
      }

      // 1. Draw Background Grid
      ctx.fillStyle = 'rgba(10, 14, 10, 0.25)'; // slight motion trail
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = 'rgba(0, 255, 65, 0.03)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // 2. Physics & Threat Updates
      state.threats.forEach((threat, idx) => {
        threat.x += threat.vx;
        threat.y += threat.vy;

        // Bounce back from boundaries
        if (threat.x < -40 || threat.x > canvas.width + 40 || threat.y < -40 || threat.y > canvas.height + 40) {
          state.threats.splice(idx, 1);
          addLog('info', `Threat ${threat.name} exited perimeter.`);
          return;
        }

        // Draw threat node
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = '#FF4444';
        
        // Red glowing cyber ring
        ctx.strokeStyle = 'rgba(255, 68, 68, 0.85)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(threat.x, threat.y, threat.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Inner core
        ctx.fillStyle = 'rgba(255, 68, 68, 0.2)';
        ctx.beginPath();
        ctx.arc(threat.x, threat.y, threat.radius - 5, 0, Math.PI * 2);
        ctx.fill();

        // Crosshairs lines
        ctx.beginPath();
        ctx.moveTo(threat.x - threat.radius - 4, threat.y);
        ctx.lineTo(threat.x + threat.radius + 4, threat.y);
        ctx.moveTo(threat.x, threat.y - threat.radius - 4);
        ctx.lineTo(threat.x, threat.y + threat.radius + 4);
        ctx.stroke();

        ctx.restore();

        // Label
        ctx.fillStyle = 'rgba(255, 68, 68, 0.9)';
        ctx.font = "10px 'JetBrains Mono', monospace";
        ctx.textAlign = 'center';
        ctx.fillText(threat.name, threat.x, threat.y - threat.radius - 8);
      });

      // 3. Samurai AI Auto-Targeting
      const samurai = state.samurai;
      if (state.autoMode && samurai.state === 'idle' && state.threats.length > 0) {
        // Target nearest threat
        let nearestThreat: Threat | null = null;
        let minDist = Infinity;
        state.threats.forEach((t) => {
          const dist = Math.hypot(t.x - samurai.x, t.y - samurai.y);
          if (dist < minDist) {
            minDist = dist;
            nearestThreat = t;
          }
        });

        if (nearestThreat) {
          samurai.targetId = (nearestThreat as Threat).id;
          samurai.tx = (nearestThreat as Threat).x;
          samurai.ty = (nearestThreat as Threat).y;
          samurai.state = 'dashing';
        }
      }

      // 4. Samurai Physics & Movement
      samurai.trail.push({ x: samurai.x, y: samurai.y });
      if (samurai.trail.length > 8) samurai.trail.shift();

      if (samurai.state === 'idle') {
        // Float ambiently
        const floatY = Math.sin(time) * 12;
        samurai.tx = canvas.width / 2;
        samurai.ty = canvas.height / 2 + floatY;

        // Smooth easing towards idle position
        samurai.x += (samurai.tx - samurai.x) * 0.08;
        samurai.y += (samurai.ty - samurai.y) * 0.08;
      } else if (samurai.state === 'dashing') {
        // Dash extremely fast towards target
        const dx = samurai.tx - samurai.x;
        const dy = samurai.ty - samurai.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 15) {
          samurai.x += (samurai.tx - samurai.x) * 0.35;
          samurai.y += (samurai.ty - samurai.y) * 0.35;
        } else {
          // Close enough to slash!
          samurai.state = 'slashing';
          samurai.slashAngle = Math.atan2(dy, dx);
          samurai.slashRadius = 45;
          samurai.slashTimer = 6;
          state.screenshake = 10;

          // Check if target still exists and kill it
          const targetIdx = state.threats.findIndex((t) => t.id === samurai.targetId);
          if (targetIdx !== -1) {
            const killed = state.threats[targetIdx];
            spawnExplosion(killed.x, killed.y);
            addLog('success', `SUCCESS: Quarantined ${killed.name} via secure slash slice.`);
            state.threats.splice(targetIdx, 1);
            state.kills += 1;
            setKills(state.kills);
          }
        }
      } else if (samurai.state === 'slashing') {
        samurai.slashTimer--;
        if (samurai.slashTimer <= 0) {
          // Return to center after slashing
          samurai.state = 'returning';
          samurai.tx = canvas.width / 2;
          samurai.ty = canvas.height / 2;
          samurai.targetId = null;
        }
      } else if (samurai.state === 'returning') {
        // Fly back to idle anchor
        const dx = samurai.tx - samurai.x;
        const dy = samurai.ty - samurai.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 5) {
          samurai.x += (samurai.tx - samurai.x) * 0.15;
          samurai.y += (samurai.ty - samurai.y) * 0.15;
        } else {
          samurai.state = 'idle';
        }
      }

      // 5. Draw Samurai Character
      // Draw neon motion trail
      if (samurai.trail.length > 1) {
        ctx.beginPath();
        ctx.moveTo(samurai.trail[0].x, samurai.trail[0].y);
        for (let i = 1; i < samurai.trail.length; i++) {
          ctx.lineTo(samurai.trail[i].x, samurai.trail[i].y);
        }
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.18)';
        ctx.lineWidth = 8;
        ctx.lineCap = 'round';
        ctx.stroke();
      }

      // Draw Sword Slash Arc
      if (samurai.state === 'slashing') {
        ctx.save();
        ctx.beginPath();
        ctx.arc(
          samurai.x,
          samurai.y,
          samurai.slashRadius,
          samurai.slashAngle - Math.PI / 2,
          samurai.slashAngle + Math.PI / 2
        );
        ctx.shadowBlur = 20;
        ctx.shadowColor = '#00FF41';
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.lineWidth = 4;
        ctx.stroke();
        ctx.restore();
      }

      // Draw Samurai Body (Cyber Ninja visual representation)
      ctx.save();
      ctx.shadowBlur = 15;
      ctx.shadowColor = '#00FF41';

      // Neon glowing visor
      ctx.fillStyle = '#00FF41';
      ctx.beginPath();
      ctx.ellipse(samurai.x, samurai.y - 12, 10, 4, 0, 0, Math.PI * 2);
      ctx.fill();

      // Cyber helmet/head outline
      ctx.strokeStyle = 'rgba(0, 255, 65, 0.85)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(samurai.x, samurai.y - 12, 8, 0, Math.PI * 2);
      ctx.stroke();

      // Armor plate torso (Vector diamond shape)
      ctx.fillStyle = 'rgba(10, 30, 10, 0.9)';
      ctx.beginPath();
      ctx.moveTo(samurai.x, samurai.y - 4);
      ctx.lineTo(samurai.x + 12, samurai.y + 10);
      ctx.lineTo(samurai.x, samurai.y + 24);
      ctx.lineTo(samurai.x - 12, samurai.y + 10);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Neon energy core in chest
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(samurai.x, samurai.y + 6, 3, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // Draw Katana Sword (in hand when idle/returning)
      if (samurai.state !== 'slashing') {
        ctx.save();
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00FF41';
        ctx.strokeStyle = 'rgba(0, 255, 65, 0.85)';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        // Hand position relative
        const hx = samurai.x - 8;
        const hy = samurai.y + 10;
        ctx.moveTo(hx, hy);
        // Angled blade
        ctx.lineTo(hx - 12, hy - 24);
        ctx.stroke();
        ctx.restore();
      }

      // 6. Binary Particles Update & Draw
      state.particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.02;

        if (p.alpha <= 0) {
          state.particles.splice(idx, 1);
          return;
        }

        ctx.fillStyle = `rgba(255, 68, 68, ${p.alpha})`;
        ctx.font = `${p.size}px 'JetBrains Mono', monospace`;
        ctx.fillText(p.char, p.x, p.y);
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(tick);
    };

    tick();

    // 7. Manual Click/Tap Attack Handler
    const handleMouseClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;

      // In manual mode, we dash to the click target immediately
      if (!state.autoMode) {
        state.samurai.tx = clickX;
        state.samurai.ty = clickY;
        state.samurai.state = 'dashing';

        // Check if we clicked on or close to an existing threat
        let targetThreat: Threat | null = null;
        state.threats.forEach((t) => {
          if (Math.hypot(t.x - clickX, t.y - clickY) < 32) {
            targetThreat = t;
          }
        });

        if (targetThreat) {
          state.samurai.targetId = (targetThreat as Threat).id;
          state.samurai.tx = (targetThreat as Threat).x;
          state.samurai.ty = (targetThreat as Threat).y;
        } else {
          addLog('info', `COMMAND: Samurai executing tactical maneuver to coordinates [X:${Math.floor(clickX)}, Y:${Math.floor(clickY)}].`);
        }
      }
    };

    canvas.addEventListener('click', handleMouseClick);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearInterval(spawnInterval);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('click', handleMouseClick);
    };
  }, [mounted, autoMode]);

  const clearLogs = () => {
    setLogs([{ time: '00:00:00', type: 'info', message: 'Mainframe logs buffer wiped successfully.' }]);
  };

  return (
    <section
      id="cyber-samurai"
      className="section"
      aria-labelledby="samurai-heading"
      style={{ padding: 'var(--space-xl) 0', position: 'relative' }}
    >
      <div className="container-portfolio">
        {/* Section labels */}
        <p className="section-label" style={{ marginBottom: 'var(--space-s)' }}>
          {"// 02.5. cyber_mainframe"}
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 'var(--space-m)',
            marginBottom: 'var(--space-l)',
          }}
        >
          <div>
            <h2
              id="samurai-heading"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                margin: 0,
              }}
            >
              Samurai <span className="text-glow">Mainframe</span>
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem', marginTop: '4px' }}>
              Defend the system node from incoming security threats in real-time.
            </p>
          </div>

          {/* Controls HUD */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setAutoMode(!autoMode)}
              className="btn-outline"
              style={{
                padding: '6px 14px',
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderRadius: 'var(--radius-md)',
              }}
            >
              {autoMode ? <Pause size={14} /> : <Play size={14} />}
              {autoMode ? 'AI Autopilot: ON' : 'AI Autopilot: OFF'}
            </button>
            <button
              onClick={clearLogs}
              className="btn-outline"
              style={{
                padding: '6px 14px',
                fontSize: '0.8rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                borderRadius: 'var(--radius-md)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-text-secondary)',
              }}
            >
              <RefreshCw size={12} />
              Clear Console
            </button>
          </div>
        </div>

        {/* Console & Canvas Grid Layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-l)',
            alignItems: 'stretch',
          }}
        >
          {/* Left Panel: HTML5 Canvas Screen */}
          <div
            className="glass-card"
            style={{
              position: 'relative',
              overflow: 'hidden',
              background: '#0A0E0A',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Screen Header */}
            <div
              style={{
                padding: '8px 16px',
                background: 'var(--color-surface)',
                borderBottom: '1px solid var(--color-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--color-text-muted)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Swords size={12} color="var(--color-primary)" />
                <span style={{ color: 'var(--color-text-secondary)' }}>threat_mitigation_sandbox.bin</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: autoMode ? 'var(--color-primary)' : 'var(--color-warning)',
                    display: 'inline-block',
                  }}
                />
                <span>{autoMode ? 'AUTO_DEFEND' : 'AWAIT_USER_TAP'}</span>
              </div>
            </div>

            <canvas
              ref={canvasRef}
              style={{
                display: 'block',
                width: '100%',
                height: '350px',
                cursor: autoMode ? 'default' : 'crosshair',
                background: '#0A0E0A',
              }}
            />

            {!autoMode && (
              <div
                style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'rgba(0,0,0,0.85)',
                  border: '1px solid var(--color-primary-border)',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.7rem',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--color-primary)',
                  pointerEvents: 'none',
                }}
              >
                * Tap canvas elements to deploy manual blade slashes
              </div>
            )}
          </div>

          {/* Right Panel: Cyber logs Console */}
          <div
            className="glass-card"
            style={{
              padding: 'var(--space-l)',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '350px',
              border: '1px solid var(--color-border)',
              background: 'rgba(10, 14, 10, 0.9)',
            }}
          >
            {/* Console Header */}
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
              <Terminal size={14} style={{ marginRight: '6px' }} />
              <span style={{ flex: 1 }}>threat_log_listener.log</span>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span>KILLED: <strong style={{ color: 'var(--color-primary)' }}>{kills}</strong></span>
                <span>INTEGRITY: <strong style={{ color: 'var(--color-primary)' }}>100%</strong></span>
              </div>
            </div>

            {/* Logs feed */}
            <div
              style={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                fontSize: '0.8rem',
                lineHeight: 1.4,
              }}
            >
              {logs.map((log, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ color: 'var(--color-text-muted)', flexShrink: 0 }}>[{log.time}]</span>
                  <span
                    style={{
                      color:
                        log.type === 'warn'
                          ? 'var(--color-danger)'
                          : log.type === 'success'
                          ? 'var(--color-primary)'
                          : 'var(--color-text-secondary)',
                      flexShrink: 0,
                    }}
                  >
                    {log.type === 'warn' ? '[ALARM]' : log.type === 'success' ? '[SECURE]' : '[INFO]'}
                  </span>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{log.message}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
