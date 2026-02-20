import { Download, Share2, Sparkles, Star } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { ZodiacBackground } from './ZodiacBackground';

interface FormData {
  fullName: string;
  age: string;
  imagePreview: string;
}

export function ReportReady() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('palmFormData');
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  const handleDownload = () => {
    // Simulate PDF download
    const element = document.createElement('a');
    element.href = 'data:text/plain,Your Celestik Palmistry Report\n\nThis is your personalized cosmic reading...';
    element.download = 'Celestik_Reading.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'My Celestik Reading',
        text: 'I just discovered my cosmic truth with Celestik!',
      });
    } else {
      // Fallback for browsers that don't support share API
      alert('Share your reading: "I just discovered my cosmic truth with Celestik!"');
    }
  };

  if (!formData) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        <ZodiacBackground />
        <div className="relative z-10 text-center">
          <p className="text-amber-100">Loading your report...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4 max-w-4xl space-y-8">
        {/* Main Report Card */}
        <div className="border-2 border-purple-300/40 rounded-lg p-8 md:p-12 relative backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          <div className="relative z-10 space-y-8">
            {/* Header with Celebration */}
            <div className="text-center space-y-3">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-12 h-12 text-amber-200 animate-pulse" />
              </div>
              <h1 className="text-4xl md:text-5xl text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
                YOUR STARDUST REPORT IS READY
              </h1>
              <div className="h-1 w-32 bg-amber-200/60 mx-auto mb-4" />
              <p className="text-purple-200 italic" style={{ fontFamily: 'var(--font-mystical)' }}>
                Your cosmic truth awaits
              </p>
            </div>

            {/* Report Preview */}
            <div className="bg-gradient-to-br from-purple-900/30 to-amber-900/20 border border-purple-300/40 rounded-lg p-8 space-y-6">
              {/* Greeting */}
              <div className="text-center space-y-3">
                <h2 className="text-2xl md:text-3xl text-amber-100 drop-shadow-[0_0_15px_rgba(251,191,36,0.25)]" style={{ fontFamily: 'var(--font-serif)' }}>
                  Greetings, {formData.fullName}
                </h2>
                <p className="text-purple-200 italic text-sm" style={{ fontFamily: 'var(--font-mystical)' }}>
                  Age {formData.age} • Your Cosmic Blueprint Decoded
                </p>
              </div>

              {/* Report Sections */}
              <div className="space-y-6 border-t border-purple-300/20 pt-6">
                {/* Personality Insights */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-200" />
                    <h3 className="text-amber-100/90 font-semibold tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                      PERSONALITY INSIGHTS
                    </h3>
                  </div>
                  <p className="text-amber-100/80 leading-relaxed" style={{ fontFamily: 'var(--font-elegant)' }}>
                    Your palm reveals a balanced individual with introspective wisdom. The prominence of your heart line suggests deep emotional intelligence and authentic connections. Your natural charisma draws others toward your gravitational center.
                  </p>
                </div>

                {/* Emotional Archetypes */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-200" />
                    <h3 className="text-amber-100/90 font-semibold tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                      EMOTIONAL ARCHETYPES
                    </h3>
                  </div>
                  <p className="text-amber-100/80 leading-relaxed" style={{ fontFamily: 'var(--font-elegant)' }}>
                    **The Visionary** – You see possibilities others miss. **The Nurturer** – Compassion guides your decisions. These archetypes blend harmoniously in your cosmic profile, making you a natural bridge between dreams and reality.
                  </p>
                </div>

                {/* Life Path Themes */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-amber-200" />
                    <h3 className="text-amber-100/90 font-semibold tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
                      LIFE PATH THEMES
                    </h3>
                  </div>
                  <p className="text-amber-100/80 leading-relaxed" style={{ fontFamily: 'var(--font-elegant)' }}>
                    Your journey centers on **Growth Through Authenticity** and **Connection as Purpose**. The universe guides you to lead with truth and build meaningful bonds. Your role is to inspire others to embrace their own cosmic potential.
                  </p>
                </div>

                {/* Palm Image */}
                <div className="border-t border-purple-300/20 pt-6">
                  <p className="text-purple-300/80 text-xs mb-3" style={{ fontFamily: 'var(--font-mystical)' }}>
                    YOUR ANALYZED PALM
                  </p>
                  <div className="w-full h-40 rounded border border-amber-200/40 overflow-hidden">
                    <img
                      src={formData.imagePreview}
                      alt="Your analyzed palm"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={handleDownload}
                className="px-6 py-4 bg-gradient-to-r from-amber-200 to-amber-100 text-[#0f1433] hover:from-amber-100 hover:to-amber-50 transition-all duration-300 rounded font-semibold tracking-wider hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] flex items-center justify-center gap-2 uppercase"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                <Download className="w-5 h-5" />
                Download Report
              </button>
              <button
                onClick={handleShare}
                className="px-6 py-4 bg-transparent border-2 border-amber-100/60 text-amber-100 hover:bg-amber-100/10 transition-all duration-300 rounded font-semibold tracking-wider flex items-center justify-center gap-2 uppercase hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                style={{ fontFamily: 'var(--font-mystical)' }}
              >
                <Share2 className="w-5 h-5" />
                Share Reading
              </button>
            </div>
          </div>
        </div>

        {/* Astrology Coming Soon Banner */}
        <div className="border-2 border-purple-300/40 rounded-lg p-6 relative backdrop-blur-sm bg-gradient-to-r from-purple-900/30 to-amber-900/20 text-center">
          <div className="space-y-2">
            <h3 className="text-amber-100 text-lg font-semibold tracking-wide" style={{ fontFamily: 'var(--font-mystical)' }}>
              ✨ ASTROLOGY COMING SOON ✨
            </h3>
            <p className="text-purple-200 text-sm" style={{ fontFamily: 'var(--font-elegant)' }}>
              Unlock the cosmic dance of your natal chart. Join the waitlist for exclusive early access.
            </p>
            <button
              onClick={() => navigate('/astrology')}
              className="mt-3 px-6 py-2 bg-purple-500/20 border border-purple-400/60 text-purple-200 rounded hover:bg-purple-500/30 transition-all text-sm tracking-wider uppercase font-semibold"
              style={{ fontFamily: 'var(--font-mystical)' }}
            >
              Join Waitlist
            </button>
          </div>
        </div>

        {/* Continue Exploring */}
        <div className="text-center space-y-4">
          <p className="text-purple-200/60 text-sm italic" style={{ fontFamily: 'var(--font-elegant)' }}>
            Ready to explore more cosmic secrets?
          </p>
          <button
            onClick={() => navigate('/')}
            className="px-8 py-3 bg-transparent border border-amber-100/40 text-amber-100 hover:bg-amber-100/10 transition-all duration-300 rounded tracking-wider uppercase text-sm font-semibold hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
            style={{ fontFamily: 'var(--font-mystical)' }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
