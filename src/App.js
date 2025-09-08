import React, { useState, useEffect } from 'react';
import AnimatedProfile from './components/AnimatedProfile';
import BackgroundParticles from './components/BackgroundParticles';
import AnimatedImages from './components/AnimatedImages';
import SignatureMorph from './components/SignatureMorph';
import WeatherClock from './components/WeatherClock';
import ContactFAB from './components/ContactFAB';

function App() {
  const [bgMode, setBgMode] = useState(() => {
    if (typeof window === 'undefined') return 'signature';
    return localStorage.getItem('bgMode') || 'signature';
  });
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'blue';
    return localStorage.getItem('theme') || 'blue';
  });

  useEffect(() => {
    try { localStorage.setItem('bgMode', bgMode); } catch {}
  }, [bgMode]);
  useEffect(() => {
    try { localStorage.setItem('theme', theme); } catch {}
    // Update CSS variables for theme colors
    const root = document.documentElement;
    if (theme === 'blue') {
      root.style.setProperty('--accent-1', '#60a5fa');
      root.style.setProperty('--accent-2', '#a78bfa');
    } else {
      root.style.setProperty('--accent-1', '#34d399');
      root.style.setProperty('--accent-2', '#f59e0b');
    }
  }, [theme]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {bgMode === 'signature' ? (
        <SignatureMorph text="K Jagadeesh" />
      ) : (
        <BackgroundParticles />
      )}
      <AnimatedImages />

      {/* Background mode toggle */}
      <div className="absolute z-20 right-4 top-4 glass rounded-full p-1 flex gap-1">
        <button
          onClick={() => setBgMode('signature')}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            bgMode === 'signature' ? 'bg-blue-600 text-white' : 'text-white/80 hover:bg-white/10'
          }`}
        >
          Signature
        </button>
        <button
          onClick={() => setBgMode('particles')}
          className={`px-3 py-1.5 rounded-full text-sm font-semibold transition-colors ${
            bgMode === 'particles' ? 'bg-blue-600 text-white' : 'text-white/80 hover:bg-white/10'
          }`}
        >
          Particles
        </button>
        <div className="w-px h-6 bg-white/20 mx-1" />
        <button
          onClick={() => setTheme(theme === 'blue' ? 'teal' : 'blue')}
          className="px-3 py-1.5 rounded-full text-sm font-semibold text-white/90 hover:bg-white/10"
          title="Toggle theme"
        >
          {theme === 'blue' ? 'Blue/Purple' : 'Teal/Orange'}
        </button>
      </div>

      {/* Top bar widgets - fixed so it stays on scroll */}
      <div className="fixed left-4 top-4 z-50">
        <WeatherClock />
      </div>

      <AnimatedProfile />
      <ContactFAB />
    </div>
  );
}

export default App;