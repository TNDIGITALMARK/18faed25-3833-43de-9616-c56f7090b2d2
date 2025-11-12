'use client';

import { useEffect, useRef } from 'react';

interface WaveformProps {
  color?: 'purple' | 'blue' | 'gradient';
  animated?: boolean;
  className?: string;
}

export function Waveform({ color = 'gradient', animated = true, className = '' }: WaveformProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!animated) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let phase = 0;

    const animate = () => {
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      ctx.clearRect(0, 0, width, height);

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      if (color === 'gradient') {
        gradient.addColorStop(0, 'rgba(138, 43, 226, 0.8)'); // Purple
        gradient.addColorStop(1, 'rgba(0, 153, 255, 0.8)'); // Blue
      } else if (color === 'purple') {
        gradient.addColorStop(0, 'rgba(138, 43, 226, 0.8)');
        gradient.addColorStop(1, 'rgba(138, 43, 226, 0.8)');
      } else {
        gradient.addColorStop(0, 'rgba(0, 153, 255, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 153, 255, 0.8)');
      }

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 3;
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';

      ctx.beginPath();

      for (let x = 0; x < width; x++) {
        const frequency = 0.02;
        const amplitude = 30;
        const y = centerY + Math.sin(x * frequency + phase) * amplitude * Math.sin(x * 0.01);

        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();

      // Add glow effect
      ctx.shadowBlur = 20;
      ctx.shadowColor = color === 'blue' ? 'rgba(0, 153, 255, 0.5)' : 'rgba(138, 43, 226, 0.5)';
      ctx.stroke();

      phase += 0.05;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [animated, color]);

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={120}
      className={className}
      style={{ width: '100%', height: 'auto' }}
    />
  );
}

export function StaticWaveform({ color = 'gradient', className = '' }: Omit<WaveformProps, 'animated'>) {
  return (
    <svg
      viewBox="0 0 200 60"
      className={className}
      style={{ width: '100%', height: 'auto' }}
    >
      <defs>
        <linearGradient id={`waveform-gradient-${color}`} x1="0%" y1="0%" x2="100%" y2="0%">
          {color === 'gradient' ? (
            <>
              <stop offset="0%" stopColor="rgb(138, 43, 226)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(0, 153, 255)" stopOpacity="0.8" />
            </>
          ) : color === 'purple' ? (
            <>
              <stop offset="0%" stopColor="rgb(138, 43, 226)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(138, 43, 226)" stopOpacity="0.8" />
            </>
          ) : (
            <>
              <stop offset="0%" stopColor="rgb(0, 153, 255)" stopOpacity="0.8" />
              <stop offset="100%" stopColor="rgb(0, 153, 255)" stopOpacity="0.8" />
            </>
          )}
        </linearGradient>
        <filter id={`glow-${color}`}>
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 0 30 Q 10 20, 20 30 T 40 30 Q 50 40, 60 30 T 80 30 Q 90 20, 100 30 T 120 30 Q 130 40, 140 30 T 160 30 Q 170 25, 180 30 T 200 30"
        fill="none"
        stroke={`url(#waveform-gradient-${color})`}
        strokeWidth="2"
        strokeLinecap="round"
        filter={`url(#glow-${color})`}
      />
    </svg>
  );
}
