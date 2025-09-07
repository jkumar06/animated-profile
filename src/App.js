import React from 'react';
import AnimatedProfile from './components/AnimatedProfile';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <BackgroundParticles />
      <AnimatedProfile />
    </div>
  );
}

export default App;