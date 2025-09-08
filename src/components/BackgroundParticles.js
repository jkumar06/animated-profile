import React, { useEffect, useState } from 'react';

const BackgroundParticles = () => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 4 + 1,
          delay: Math.random() * 5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
    const handleVisibility = () => {
      // When hidden, reduce motion by clearing particles; recreated on show
      if (document.hidden) setParticles([]);
      else createParticles();
    };
    window.addEventListener('resize', createParticles);
    document.addEventListener('visibilitychange', handleVisibility);
    return () => {
      window.removeEventListener('resize', createParticles);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle absolute rounded-full bg-white opacity-20"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundParticles;