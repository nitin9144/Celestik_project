import { Sparkles, Lock, Zap } from 'lucide-react';

export function HowItWorksSection() {
  const steps = [
    {
      number: '1',
      title: 'Upload Your Palm',
      description: 'Share a clear photo of your palm. Our sophisticated algorithms begin their cosmic analysis.',
      icon: Sparkles,
    },
    {
      number: '2',
      title: 'AI Analyzes Patterns',
      description: 'Our advanced AI decodes the ancient language of palmistry using modern machine learning.',
      icon: Zap,
    },
    {
      number: '3',
      title: 'Receive Your Report',
      description: 'Get personalized insights about your personality, emotions, and life path in seconds.',
      icon: Sparkles,
    },
  ];

  return (
    <section className="relative py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]" style={{ fontFamily: 'var(--font-serif)' }}>
            HOW IT WORKS
          </h2>
          <div className="h-1 w-32 bg-amber-200/60 mx-auto" />
          <p className="text-purple-200 italic max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-mystical)' }}>
            Three simple steps to unlock your cosmic truth
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                {/* Connecting Line (hidden on last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-1 bg-gradient-to-r from-amber-200/60 to-transparent" />
                )}

                {/* Card */}
                <div className="relative z-10 bg-gradient-to-br from-purple-900/30 to-amber-900/20 border border-purple-300/40 rounded-lg p-8 text-center space-y-4 h-full hover:border-amber-200/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(251,191,36,0.2)]">
                  {/* Step Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-amber-200/20 border-2 border-amber-200/60 flex items-center justify-center mx-auto">
                    <span className="text-2xl text-amber-100 font-bold" style={{ fontFamily: 'var(--font-serif)' }}>
                      {step.number}
                    </span>
                  </div>

                  {/* Icon */}
                  <Icon className="w-8 h-8 text-amber-200 mx-auto" />

                  {/* Content */}
                  <div>
                    <h3 className="text-amber-100 font-semibold tracking-wide mb-2" style={{ fontFamily: 'var(--font-mystical)' }}>
                      {step.title}
                    </h3>
                    <p className="text-amber-100/80 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-elegant)' }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
