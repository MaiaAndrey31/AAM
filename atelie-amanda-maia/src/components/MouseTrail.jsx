import { useEffect, useState, useCallback } from 'react';

/**
 * MouseTrail - Efeito de rastro de glitter/sparkles que segue o mouse
 * Aplicado globalmente no site para um toque premium de luxo
 */

export default function MouseTrail() {
  const [particles, setParticles] = useState([]);
  const [isTouch, setIsTouch] = useState(false);

  // Cores do projeto para as partículas
  const colors = [
    '#B8964A', // gold
    '#D4B97A', // gold-light
    '#C85A6E', // accent
    '#E8B4B8', // primary
    '#F7E7CE', // champagne
  ];

  // Criar uma nova partícula
  const createParticle = useCallback((x, y) => {
    const id = Date.now() + Math.random();
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 4 + 2; // 2px a 6px
    const offsetX = (Math.random() - 0.5) * 20; // dispersão horizontal
    const offsetY = (Math.random() - 0.5) * 20; // dispersão vertical
    
    return {
      id,
      x: x + offsetX,
      y: y + offsetY,
      color,
      size,
      rotation: Math.random() * 360,
    };
  }, []);

  // Handler de movimento do mouse
  useEffect(() => {
    // Detectar se é dispositivo touch
    const checkTouch = window.matchMedia('(pointer: coarse)').matches;
    setIsTouch(checkTouch);
    
    if (checkTouch) return; // Não ativar em dispositivos touch

    let lastTime = 0;
    const throttleMs = 30; // Criar partículas a cada 30ms (evita excesso)
    
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let rafId = null;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      
      if (!isMoving) {
        isMoving = true;
      }
    };

    // Loop de animação para criar partículas com throttling
    const animate = (currentTime) => {
      if (isMoving && currentTime - lastTime > throttleMs) {
        setParticles(prev => {
          // Limitar a 30 partículas na tela (performance)
          const newParticles = [...prev, createParticle(mouseX, mouseY)];
          if (newParticles.length > 30) {
            return newParticles.slice(newParticles.length - 30);
          }
          return newParticles;
        });
        lastTime = currentTime;
      }
      
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, [createParticle]);

  // Remover partículas após a animação
  const removeParticle = (id) => {
    setParticles(prev => prev.filter(p => p.id !== id));
  };

  // Não renderizar nada em dispositivos touch
  if (isTouch) return null;

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
      aria-hidden="true"
    >
      {particles.map(particle => (
        <Particle
          key={particle.id}
          {...particle}
          onComplete={() => removeParticle(particle.id)}
        />
      ))}
    </div>
  );
}

/**
 * Componente individual de partícula
 */
function Particle({ x, y, color, size, rotation, onComplete }) {
  useEffect(() => {
    // Remover partícula após a animação (800ms)
    const timer = setTimeout(onComplete, 800);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className="absolute particle-glitter"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        backgroundColor: color,
        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        '--particle-color': color,
      }}
    />
  );
}
