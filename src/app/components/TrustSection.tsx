import { Lock, Shield, Database } from 'lucide-react';

export function TrustSection() {
  const trustPoints = [
    {
      icon: Lock,
      title: 'Secure Payment',
      description: '₹1 verification payment processed securely. Your financial data is encrypted and protected.',
    },
    {
      icon: Database,
      title: 'Private Data',
      description: 'Your palm image and personal information are never shared. Your privacy is sacred.',
    },
    {
      icon: Shield,
      title: 'No Future Predictions',
      description: 'We decode patterns, not destiny. Our insights empower, never limit your choices.',
    },
  ];

  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
            WHY TRUST CELESTIK
          </h2>
          <div className="h-1 w-32 bg-amber-200/60 mx-auto" />
          <p className="text-purple-200 italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-mystical)' }}>
            Built on transparency, security, and respect
          </p>
        </div>

        {/* Trust Points */}
        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-purple-900/30 to-amber-900/20 border border-purple-300/40 rounded-lg p-8 space-y-4 hover:border-amber-200/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]"
              >
                {/* Icon */}
                <Icon className="w-10 h-10 text-amber-200" />

                {/* Content */}
                <div>
                  <h3 className="text-amber-100 font-semibold tracking-wide mb-2" style={{ fontFamily: 'var(--font-mystical)' }}>
                    {point.title}
                  </h3>
                  <p className="text-amber-100/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-elegant)' }}>
                    {point.description}
                  </p>
                </div>

                {/* Decorative Border */}
                <div className="absolute inset-0 rounded-lg border border-amber-200/10" />
              </div>
            );
          })}
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#1a2555]/40 border border-purple-300/40 rounded-full px-6 py-3">
            <p className="text-purple-200/80 text-sm italic" style={{ fontFamily: 'var(--font-elegant)' }}>
              🔒 Built with integrity • Designed for empowerment • Trusted by thousands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
