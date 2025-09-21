import { useEffect, useRef } from 'react';

export default function NeonGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const gridSize = 40;
      const pulseSpeed = 0.002;
      
      // Grid lines
      ctx.strokeStyle = `rgba(0, 255, 255, ${0.15 + Math.sin(time * pulseSpeed) * 0.08})`;
      ctx.lineWidth = 1;
      
      // Vertical lines
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      // Horizontal lines
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Flowing circuit lines and data streams
      const lineCount = 5;
      for (let i = 0; i < lineCount; i++) {
        const phase = (time * 0.001) + (i * Math.PI * 2 / lineCount);
        const x = (Math.sin(phase) * 0.4 + 0.5) * canvas.width;
        const y = (Math.cos(phase * 0.7) * 0.4 + 0.5) * canvas.height;
        
        // Neon pink circuit nodes
        ctx.strokeStyle = `rgba(255, 0, 255, ${0.8 + Math.sin(phase * 2) * 0.2})`;
        ctx.lineWidth = 3;
        ctx.shadowColor = 'rgba(255, 0, 255, 1)';
        ctx.shadowBlur = 15;
        
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.stroke();
        
        // Data stream lines
        const nextPhase = (time * 0.001) + ((i + 1) * Math.PI * 2 / lineCount);
        const nextX = (Math.sin(nextPhase) * 0.4 + 0.5) * canvas.width;
        const nextY = (Math.cos(nextPhase * 0.7) * 0.4 + 0.5) * canvas.height;
        
        ctx.strokeStyle = `rgba(0, 255, 255, ${0.4 + Math.sin(phase * 3) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.shadowColor = 'rgba(0, 255, 255, 0.8)';
        ctx.shadowBlur = 8;
        
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(nextX, nextY);
        ctx.stroke();
        
        ctx.shadowBlur = 0;
      }
      
      time++;
      animationId = requestAnimationFrame(drawGrid);
    };

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    resize();
    window.addEventListener('resize', resize);
    
    if (!prefersReducedMotion) {
      drawGrid();
    } else {
      // Static grid for users who prefer reduced motion
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.3)';
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
    }

    return () => {
      window.removeEventListener('resize', resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 opacity-60"
      style={{ background: 'transparent' }}
    />
  );
}