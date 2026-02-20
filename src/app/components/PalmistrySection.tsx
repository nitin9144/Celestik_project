import { Upload } from 'lucide-react';
import { useRef } from 'react';
import { useNavigate } from 'react-router';
// import palmImage from '@/public/hand';
import { ZodiacBackground } from './ZodiacBackground';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function PalmistrySection() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log('File selected:', file.name);
      // Handle file upload logic here
    }
  };

  return (
    <section id="palmistry" className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-2 md:px-4">
        {/* Decorative Border */}
        <div className="mx-auto border-2 border-purple-300/40 rounded-lg p-8 md:p-16 lg:p-20 relative backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-4xl md:text-5xl text-amber-100 mb-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
                  UNLOCK THE STORY IN YOUR PALM
                </h2>
                <div className="h-1 w-32 bg-amber-200/60 mb-4" />
                <p className="text-sm text-purple-200 italic" style={{ fontFamily: 'var(--font-mystical)' }}>
                  Not magic. Just stardust and algorithms.
                </p>
              </div>

              <p className="text-amber-100/80 leading-relaxed text-justify" style={{ fontFamily: 'var(--font-elegant)' }}>
                For centuries your palm has whispered secrets about your purpose, potential and personality. We've simply reimagined the ancient art of palmistry for the modern world.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/reveal-cosmic-truth')}
                  className="w-full px-8 py-4 bg-gradient-to-r from-amber-200 to-amber-100 text-[#0f1433] hover:from-amber-100 hover:to-amber-50 transition-all duration-300 flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] font-semibold tracking-wider"
                  style={{ fontFamily: 'var(--font-mystical)' }}
                >
                  <Upload className="w-5 h-5" />
                  <span>REVEAL YOUR COSMIC TRUTH</span>
                </button>
                <p className="text-sm text-purple-200 text-center" style={{ fontFamily: 'var(--font-elegant)' }}>
                  Upload your palm. Let the stars speak — beautifully, digitally, and just for you.
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              {/* Mystical Palm Illustration */}
              <div className="relative">
                <ImageWithFallback
                  src="/hand.jpeg"
                  alt="Mystical Palm Reading Diagram"
                  className="w-80 h-auto opacity-90 drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}