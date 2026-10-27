import React, { useRef, useState } from 'react';
import { playHoverSound } from '../../utils/audio';

export default function TiltCard({ children, className = '', maxTilt = 12, glowColor = 'rgba(0, 242, 254, 0.25)' }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glareStyle, setGlareStyle] = useState({ opacity: 0, x: '50%', y: '50%' });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlareStyle({
      opacity: 0.6,
      x: `${(x / rect.width) * 100}%`,
      y: `${(y / rect.height) * 100}%`
    });
  };

  const handleMouseEnter = () => {
    playHoverSound();
  };

  const handleMouseLeave = () => {
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    setGlareStyle(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform,
        transition: 'transform 0.15s ease-out, box-shadow 0.2s ease-out'
      }}
      className={`relative rounded-2xl transition-all duration-200 overflow-hidden ${className}`}
    >
      {/* Dynamic specular glare */}
      <div
        className="pointer-events-none absolute -inset-px rounded-2xl transition-opacity duration-300 z-10"
        style={{
          opacity: glareStyle.opacity,
          background: `radial-gradient(circle 280px at ${glareStyle.x} ${glareStyle.y}, ${glowColor}, transparent 80%)`
        }}
      />
      {children}
    </div>
  );
}
