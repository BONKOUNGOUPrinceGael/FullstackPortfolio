import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  shape: 'circle' | 'square' | 'triangle';
  opacity: number;
}

// Helper function to convert HSL to Hex
function hslToHex(h: number, s: number, l: number): string {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

// Helper function to get theme background color
function getThemeBackgroundColor(): string {
  const root = document.documentElement;
  const bgVar = getComputedStyle(root).getPropertyValue('--background').trim();
  
  if (!bgVar) return '#ffffff';
  
  const parts = bgVar.split(' ').map(p => parseFloat(p));
  if (parts.length >= 3) {
    return hslToHex(parts[0], parts[1], parts[2]);
  }
  
  return '#ffffff';
}

// Helper function to check if dark mode is active
function isDarkMode(): boolean {
  return document.documentElement.classList.contains('dark');
}

// Helper function to get particle colors based on theme
function getParticleColors(): string[] {
  if (isDarkMode()) {
    return ['#ffffff', '#87ddfe', '#acaaff', '#1bffc2', '#f88aff'];
  } else {
    // Light mode - use very vibrant colors for maximum visibility
    return ['#0044aa', '#0066ff', '#5500ff', '#00aa77', '#ff0055'];
  }
}

export function ParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Get theme background color
    let bgColor = getThemeBackgroundColor();
    let particleColors = getParticleColors();

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const particles: Particle[] = [];
    for (let i = 0; i < 90; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: Math.random() * 0.4,
        vy: Math.random() * 0.1,
        size: Math.random() * 25 + 2,
        color: particleColors[Math.floor(Math.random() * particleColors.length)],
        shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)] as 'circle' | 'square' | 'triangle',
        opacity: 0,
      });
    }

    // Draw particle based on shape
    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      ctx.transform(1, 0, Math.tan(-2 * Math.PI / 180), 1, 0, 0);

      // Calculate opacity based on distance from center (radial gradient effect)
      const distFromCenter = Math.sqrt(
        Math.pow(particle.x - canvas.width / 2, 2) + Math.pow(particle.y - canvas.height / 2, 2)
      );
      const maxDist = Math.sqrt(
        Math.pow(canvas.width / 2, 2) + Math.pow(canvas.height / 2, 2)
      );
      const opacityFactor = Math.min(1, distFromCenter / maxDist);
      particle.opacity = isDarkMode() ? opacityFactor * 0.4 : opacityFactor * 0.8;

      ctx.fillStyle = particle.color;
      ctx.globalAlpha = particle.opacity;
      ctx.globalCompositeOperation = isDarkMode() ? 'screen' : 'source-over';

      if (particle.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, particle.size / 2, 0, Math.PI * 2);
        ctx.fill();
      } else if (particle.shape === 'square') {
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
      } else if (particle.shape === 'triangle') {
        ctx.beginPath();
        ctx.moveTo(0, -particle.size / 2);
        ctx.lineTo(particle.size / 2, particle.size / 2);
        ctx.lineTo(-particle.size / 2, particle.size / 2);
        ctx.closePath();
        ctx.fill();
      }

      ctx.restore();
    };

    // Watch for theme changes
    const observer = new MutationObserver(() => {
      bgColor = getThemeBackgroundColor();
      particleColors = getParticleColors();
      // Regenerate particle colors when theme changes
      particles.forEach((particle) => {
        particle.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Clear canvas with background color
      ctx.fillStyle = bgColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Wrap around screen
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;

        drawParticle(particle);
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      data-testid="particle-system-canvas"
    />
  );
}
