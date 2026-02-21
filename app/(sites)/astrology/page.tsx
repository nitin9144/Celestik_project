"use client";

import { Star, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { ZodiacBackground } from "@/app/components/ZodiacBackground";

export default function AstrologyPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto border-2 border-purple-300/40 rounded-lg p-12 md:p-16 relative text-center backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          {/* Content */}
          <div className="space-y-8">
            <div className="flex justify-center gap-6 mb-8">
              <Star className="w-16 h-16 text-purple-300 animate-pulse" />
              <Sparkles className="w-20 h-20 text-amber-200" />
              <Star
                className="w-16 h-16 text-purple-300 animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <div>
              <h1
                className="text-5xl md:text-6xl text-amber-100 mb-4 drop-shadow-[0_0_30px_rgba(251,191,36,0.4)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                ASTROLOGY
              </h1>
              <div className="h-1 w-32 bg-amber-200/60 mx-auto mb-6" />
            </div>

            <div className="space-y-4">
              <h2
                className="text-3xl md:text-4xl text-purple-200"
                style={{ fontFamily: "var(--font-mystical)" }}
              >
                Coming Soon
              </h2>
              <p
                className="text-amber-100/80 text-lg leading-relaxed"
                style={{ fontFamily: "var(--font-elegant)" }}
              >
                The stars are aligning to bring you cosmic insights.
              </p>
              <p
                className="text-purple-200/70"
                style={{ fontFamily: "var(--font-sans)" }}
              >
                Our astrology feature is being crafted with the precision of the
                cosmos. Stay tuned as we prepare to unlock the secrets written
                in your stars.
              </p>
            </div>

            <div className="pt-8">
              <button
                onClick={() => router.push("/palmistry")}
                className="px-10 py-3 bg-transparent border-2 border-amber-100/60 text-amber-100 hover:bg-amber-100/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              >
                Back to Palmistry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
