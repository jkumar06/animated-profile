import React, { useEffect, useRef } from 'react';

// Interactive morphing of user's name into particle signature that subtly follows the cursor
// Unique, lightweight and GPU-friendly (canvas 2D)
const SignatureMorph = ({ text = 'Jagadeesh', density = 0.16 }) => {
  const canvasRef = useRef(null);
  const animationRef = useRef(0);
  const mouse = useRef({ x: 0, y: 0, vx: 0, vy: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const points = [];
    const target = [];
    const tmpCanvas = document.createElement('canvas');
    const tmpCtx = tmpCanvas.getContext('2d');

    const sampleText = () => {
      tmpCanvas.width = width;
      tmpCanvas.height = height;
      tmpCtx.clearRect(0, 0, width, height);
      const fontSize = Math.min(160, Math.max(64, width * 0.12));
      tmpCtx.font = `700 ${fontSize}px Inter, system-ui`;
      tmpCtx.textAlign = 'center';
      tmpCtx.textBaseline = 'middle';
      tmpCtx.fillStyle = '#fff';
      tmpCtx.fillText(text, width / 2, height / 2);
      const imageData = tmpCtx.getImageData(0, 0, width, height);
      const data = imageData.data;
      points.length = 0;
      target.length = 0;
      for (let y = 0; y < height; y += Math.round(10 / density)) {
        for (let x = 0; x < width; x += Math.round(10 / density)) {
          const i = (y * width + x) * 4;
          if (data[i + 3] > 150) {
            points.push({ x: Math.random() * width, y: Math.random() * height, vx: 0, vy: 0 });
            target.push({ x, y });
          }
        }
      }
    };

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      sampleText();
    };

    const onMove = (e) => {
      const nx = e.clientX ?? (e.touches && e.touches[0]?.clientX) ?? width / 2;
      const ny = e.clientY ?? (e.touches && e.touches[0]?.clientY) ?? height / 2;
      mouse.current.vx = nx - mouse.current.x;
      mouse.current.vy = ny - mouse.current.y;
      mouse.current.x = nx;
      mouse.current.y = ny;
    };

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = 1;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const t = target[i];
        const dx = t.x - p.x;
        const dy = t.y - p.y;
        p.vx += dx * 0.08;
        p.vy += dy * 0.08;

        // Subtle cursor influence
        const mx = p.x - mouse.current.x;
        const my = p.y - mouse.current.y;
        const dist2 = mx * mx + my * my;
        const force = Math.min(16000 / (dist2 + 1500), 2.5);
        p.vx += mx * force * 0.012 + mouse.current.vx * 0.03;
        p.vy += my * force * 0.012 + mouse.current.vy * 0.03;

        // Damping
        p.vx *= 0.85;
        p.vy *= 0.85;
        p.x += p.vx * 0.016;
        p.y += p.vy * 0.016;

        // Draw
        ctx.fillStyle = 'rgba(255,255,255,0.95)';
        ctx.fillRect(p.x, p.y, 2, 2);
      }
      animationRef.current = requestAnimationFrame(render);
    };

    const start = () => {
      sampleText();
      animationRef.current = requestAnimationFrame(render);
    };
    const stop = () => {
      cancelAnimationFrame(animationRef.current);
    };

    const handleVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('touchmove', onMove, { passive: true });
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [text, density]);

  return <canvas ref={canvasRef} className="fixed inset-0 opacity-50" />;
};

export default SignatureMorph;

