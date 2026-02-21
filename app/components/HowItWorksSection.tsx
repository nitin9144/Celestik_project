import { ZodiacBackground } from "./ZodiacBackground";

export function HowItWorksSection() {
  const steps = [
    {
      title: "STEP 1: UPLOAD YOUR PALM",
      description:
        "Take a clear photo of your palm (either hand works!). Our system is designed to detect intricate line patterns that have fascinated astrologers and mystics for centuries.",
    },
    {
      title: "STEP 2: LET THE PATTERNS SPEAK",
      description:
        "We translate your palm's geometry into key personality traits, emotional archetypes, and life paths — all inspired by timeless palmistry traditions. We don't predict the future. We help you understand yourself.",
    },
    {
      title: "STEP 3: RECEIVE YOUR STARDUST REPORT",
      description:
        "Within seconds, get a beautifully designed, personalized cosmic profile — modern insights backed by ancient methods, all created just for you.",
    },
  ];

  return (
    <section
      id="astrology"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4">
        {/* Decorative Border */}
        <div className="max-w-4xl mx-auto border-2 border-purple-300/40 rounded-lg p-8 md:p-12 relative backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          <div className="text-center mb-12">
            <h2
              className="text-4xl md:text-5xl text-amber-100 mb-4 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              HOW CELESTIK WORKS
            </h2>
            <p
              className="text-purple-200 text-sm"
              style={{ fontFamily: "var(--font-mystical)" }}
            >
              From your palm to the cosmos. No fluff, just truth.
            </p>
          </div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="border border-purple-300/40 rounded p-6 bg-purple-900/10 backdrop-blur-sm hover:bg-purple-900/20 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
              >
                <h3
                  className="text-xl text-amber-100 mb-3 tracking-wide"
                  style={{ fontFamily: "var(--font-elegant)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-amber-100/70 leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-sans)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
