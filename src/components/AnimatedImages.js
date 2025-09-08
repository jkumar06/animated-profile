import React, { useEffect, useState } from 'react';

const AnimatedImages = () => {
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 12; // -6..6
      const y = (e.clientY / window.innerHeight - 0.5) * 12;
      setParallax({ x, y });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div className="pointer-events-none select-none" aria-hidden>
      {/* Blurred gradient blobs for depth */}
      <div
        className="fixed -top-24 -left-24 w-[34rem] h-[34rem] rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(closest-side, var(--accent-1, #60a5fa), transparent)',
          transform: `translate(${parallax.x * -1}px, ${parallax.y * -1}px)`,
        }}
      />
      <div
        className="fixed bottom-[-8rem] right-[-8rem] w-[30rem] h-[30rem] rounded-full blur-3xl opacity-40"
        style={{
          background: 'radial-gradient(closest-side, var(--accent-2, #a78bfa), transparent)',
          transform: `translate(${parallax.x * 0.8}px, ${parallax.y * 0.8}px)`,
        }}
      />

      {/* Floating decorative orbs */}
      <svg
        className="fixed top-10 left-10 w-28 h-28 opacity-70 animate-float"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translate(${parallax.x * -0.6}px, ${parallax.y * -0.6}px)` }}
      >
        <defs>
          <linearGradient id="orb1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--accent-1, #60a5fa)" />
            <stop offset="100%" stopColor="var(--accent-2, #a78bfa)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#orb1)">
          <animate attributeName="r" values="42;48;42" dur="6s" repeatCount="indefinite" />
        </circle>
      </svg>

      <svg
        className="fixed bottom-16 right-12 w-24 h-24 opacity-70 animate-float"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ animationDelay: '1.5s', transform: `translate(${parallax.x * 0.6}px, ${parallax.y * 0.6}px)` }}
      >
        <defs>
          <linearGradient id="orb2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--accent-1, #34d399)" />
            <stop offset="100%" stopColor="var(--accent-2, #22d3ee)" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="40" fill="url(#orb2)">
          <animate attributeName="r" values="36;44;36" dur="7s" repeatCount="indefinite" />
        </circle>
      </svg>

      {/* Rotating ring */}
      <svg
        className="fixed left-1/2 top-1/5 -translate-x-1/2 w-64 h-64 opacity-30"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: `translate(-50%, 0) rotate(0deg)` }}
      >
        <defs>
          <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        <g>
          <circle cx="100" cy="100" r="80" stroke="url(#ring)" strokeWidth="2" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="0 100 100" to="360 100 100" dur="20s" repeatCount="indefinite" />
          </circle>
          <circle cx="100" cy="100" r="60" stroke="url(#ring)" strokeWidth="1" fill="none">
            <animateTransform attributeName="transform" type="rotate" from="360 100 100" to="0 100 100" dur="26s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedImages;

