import { useNavigate, useLocation } from 'react-router';

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const isContactPage = location.pathname === '/contact';

  return (
    <footer className="relative bg-[#0f1433] border-t border-purple-900/30 py-12">
      <div className="container mx-auto px-4">
        {isContactPage && (
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Logo and Brand */}
            <div className="flex items-center gap-6">
              <div className="relative w-40 h-40 flex items-center justify-center border-2 border-purple-300/40 rounded-lg">
                <img src="/zodiac_wheel.png" alt="Celestik Logo" className="w-36 h-36 object-contain" />
              </div>
              <div>
                <h3 className="text-3xl text-amber-100 tracking-wider mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  CELESTIK
                </h3>
                <p className="text-purple-200 text-sm italic mb-1" style={{ fontFamily: 'var(--font-serif-alt)' }}>
                  Not magic. Just stardust and algorithms.
                </p>
                <p className="text-purple-300/70 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
                  Guiding through the cosmic hidden in your palm. Ancient intuition meets modern tech.
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-end gap-3">
              <button
                onClick={() => navigate('/palmistry')}
                className="px-6 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-colors w-48 text-center"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                PALMISTRY
              </button>
              <button
                onClick={() => navigate('/astrology')}
                className="px-6 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-colors w-48 text-center"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                ASTROLOGY
              </button>
              <button
                onClick={() => navigate('/how-it-works')}
                className="px-6 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-colors w-48 text-center"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                HOW IT WORKS
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="px-6 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-colors w-48 text-center"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                CONTACT US
              </button>
            </div>
          </div>
        )}

        {/* Copyright */}
        <div className={`pt-6 border-t border-purple-900/30 text-center ${isContactPage ? 'mt-8' : ''}`}>
          <p className="text-purple-300/60 text-xs" style={{ fontFamily: 'var(--font-sans)' }}>
            The stars have always spoken. We just gave them a landing page.
          </p>
          <p className="text-purple-300/60 text-xs mt-1" style={{ fontFamily: 'var(--font-sans)' }}>
            © 2025 Celestik. All rights aligned with the universe.
          </p>
        </div>
      </div>
    </footer>
  );
}