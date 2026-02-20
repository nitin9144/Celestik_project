// src/components/ZodiacWheel.jsx   (or .tsx if using TS)
import { useEffect, useRef } from 'react';
import styles from './ZodiacWheel.module.css';

export default function ZodiacWheel() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const animate = () => {
      const now = Date.now();
      const angle = (now / 40) % 360; // change 40 → faster/slower
      svg.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(animate);
    };
    animate();
  }, []);

  return (
    <div className={styles.container}>
      <svg
        ref={svgRef}
        className={styles.wheel}
        viewBox="0 0 400 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Background subtle glow */}
        <circle cx="200" cy="200" r="190" fill="none" stroke="#2a1a4a" strokeWidth="12" />

        <defs>
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#4b2e8a" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0f0820" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="200" cy="200" r="185" fill="url(#glow)" />

        {/* Zodiac signs */}
        <g className={styles.symbols}>
          {zodiacSigns.map((sign, i) => {
            const angle = (i * 30) - 90; // Aries at top
            const rad = (angle * Math.PI) / 180;
            const x = 200 + Math.cos(rad) * 148;
            const y = 200 + Math.sin(rad) * 148;

            return (
              <g key={sign.name} transform={`translate(${x},${y})`}>
                <text
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="28"
                  fill="#e0d0ff"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  className={styles.zodiacText}
                >
                  {sign.symbol}
                </text>
                {/* optional name - remove if you want cleaner look */}
                <text y="28" textAnchor="middle" fontSize="11" fill="#b89eff" opacity="0.7">
                  {sign.name}
                </text>
              </g>
            );
          })}
        </g>

        {/* Center Sun with pulse */}
        <g className={styles.sun}>
          <circle cx="200" cy="200" r="38" fill="#ffdd58" />
          <circle cx="200" cy="200" r="52" fill="none" stroke="#ffdd58" strokeWidth="3" opacity="0.4">
            <animate attributeName="r" from="52" to="58" dur="3s" repeatCount="indefinite" additive="sum" />
          </circle>

          {/* Sun rays */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = i * 30;
            const rad = (angle * Math.PI) / 180;
            const x1 = 200 + Math.cos(rad) * 38;
            const y1 = 200 + Math.sin(rad) * 38;
            const x2 = 200 + Math.cos(rad) * 65;
            const y2 = 200 + Math.sin(rad) * 65;

            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke="#ffdd58"
                strokeWidth="3"
                opacity="0.6"
              />
            );
          })}
        </g>

        {/* Outer dashed circle */}
        <circle
          cx="200"
          cy="200"
          r="172"
          fill="none"
          stroke="#6b4eb8"
          strokeWidth="2"
          strokeDasharray="8 12"
          opacity="0.5"
        />
      </svg>

      <div className={styles.hoverGlow} />
    </div>
  );
}

const zodiacSigns = [
  { name: 'Aries', symbol: '♈' },
  { name: 'Taurus', symbol: '♉' },
  { name: 'Gemini', symbol: '♊' },
  { name: 'Cancer', symbol: '♋' },
  { name: 'Leo', symbol: '♌' },
  { name: 'Virgo', symbol: '♍' },
  { name: 'Libra', symbol: '♎' },
  { name: 'Scorpio', symbol: '♏' },
  { name: 'Sagittarius', symbol: '♐' },
  { name: 'Capricorn', symbol: '♑' },
  { name: 'Aquarius', symbol: '♒' },
  { name: 'Pisces', symbol: '♓' },
];