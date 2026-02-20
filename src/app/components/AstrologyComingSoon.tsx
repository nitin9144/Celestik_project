import { Star, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router';

export function AstrologyComingSoonSection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="flex justify-center gap-2">
            <Sparkles className="w-8 h-8 text-purple-300 animate-bounce" />
            <h2 className="text-4xl md:text-5xl text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
              ASTROLOGY
            </h2>
            <Sparkles className="w-8 h-8 text-purple-300 animate-bounce" style={{ animationDelay: '0.3s' }} />
          </div>
          <h3 className="text-2xl md:text-3xl text-purple-200 italic" style={{ fontFamily: 'var(--font-mystical)' }}>
            Coming Soon
          </h3>
          <div className="h-1 w-32 bg-amber-200/60 mx-auto" />
        </div>

        {/* Teaser Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative border-2 border-purple-300/40 rounded-lg p-8 md:p-12 backdrop-blur-sm bg-gradient-to-br from-purple-900/30 to-amber-900/20 space-y-6">
            {/* Corner Decorations */}
            <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-purple-300/60 -translate-x-2 -translate-y-2" />
            <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-purple-300/60 translate-x-2 -translate-y-2" />
            <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-purple-300/60 -translate-x-2 translate-y-2" />
            <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-300/60 translate-x-2 translate-y-2" />

            <div className="relative z-10 space-y-6 text-center">
              {/* Stars */}
              <div className="flex justify-center gap-3">
                <Star className="w-8 h-8 text-purple-300 fill-purple-300" />
                <Star className="w-10 h-10 text-amber-200 fill-amber-200" />
                <Star className="w-8 h-8 text-purple-300 fill-purple-300" />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <p className="text-amber-100/80 text-lg leading-relaxed" style={{ fontFamily: 'var(--font-elegant)' }}>
                  Discover the cosmic blueprint written in the stars at your birth.
                </p>
                <div className="space-y-2 text-purple-200/80 text-sm" style={{ fontFamily: 'var(--font-elegant)' }}>
                  <p>✨ Natal Chart Analysis</p>
                  <p>✨ Cosmic Life Themes</p>
                  <p>✨ Planetary Influences</p>
                  <p>✨ Zodiac Predictions</p>
                </div>
              </div>

              {/* CTA */}
              <button
                onClick={() => navigate('/astrology')}
                className="mt-6 px-10 py-4 bg-gradient-to-r from-purple-500/30 to-purple-400/30 border-2 border-purple-400/60 text-purple-100 hover:bg-purple-500/40 transition-all duration-300 rounded font-semibold tracking-wider uppercase hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                Join the Cosmic Waitlist
              </button>

              {/* Tagline */}
              <p className="text-purple-300/60 text-xs italic" style={{ fontFamily: 'var(--font-mystical)' }}>
                Be the first to experience the full celestial journey
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
