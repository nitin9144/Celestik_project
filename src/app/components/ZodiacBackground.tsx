interface ZodiacBackgroundProps {
  animate?: boolean;
}

export function ZodiacBackground({ animate = true }: ZodiacBackgroundProps) {
  const zodiacSymbols = ['♈', '♉', '♊', '♋', '♌', '♍', '♎', '♏', '♐', '♑', '♒', '♓'];
  
  return (
    <>
      {/* Mystical Background with Stars */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f1433] via-[#1a1f4f] to-[#0f1433]">
        {/* Twinkling Stars */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(80)].map((_, i) => (
            <div
              key={`star-${i}`}
              className="absolute w-1 h-1 bg-purple-300 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: animate ? `twinkle ${2 + Math.random() * 3}s infinite` : 'none',
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Floating Zodiac Signs */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          {zodiacSymbols.map((symbol, i) => (
            <div
              key={`zodiac-${i}`}
              className="absolute text-amber-200/40"
              style={{
                left: `${(i * 8.33) % 100}%`,
                top: `${((i * 13) % 80) + 10}%`,
                fontSize: `${40 + Math.random() * 40}px`,
                animation: animate ? `float ${8 + i * 1}s infinite ease-in-out` : 'none',
                animationDelay: `${i * 0.5}s`,
                fontFamily: 'serif',
              }}
            >
              {symbol}
            </div>
          ))}
        </div>

        {/* Celestial Circles */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute top-1/4 left-1/4 w-96 h-96 border border-purple-300 rounded-full"
            style={{ animation: animate ? 'rotate 30s linear infinite' : 'none' }}
          />
          <div 
            className="absolute top-1/3 right-1/4 w-80 h-80 border border-amber-200 rounded-full"
            style={{ animation: animate ? 'rotate 20s linear infinite reverse' : 'none' }}
          />
          <div 
            className="absolute bottom-1/4 left-1/3 w-64 h-64 border border-purple-400 rounded-full"
            style={{ animation: animate ? 'rotate 25s linear infinite' : 'none' }}
          />
        </div>
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); }
        }
        
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(20px, -20px) rotate(5deg); }
          50% { transform: translate(-10px, -40px) rotate(-5deg); }
          75% { transform: translate(-20px, -20px) rotate(3deg); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
