"use client";

import { useRouter } from "next/navigation";
import { HeroSection } from "@/app/components/HeroSection";
import { HowItWorksSection } from "@/app/components/HowItWorks";
import { TrustSection } from "@/app/components/TrustSection";
import { AstrologyComingSoonSection } from "@/app/components/AstrologyComingSoon";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <TrustSection />
      <AstrologyComingSoonSection />

      {/* CTA Button */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <button
          onClick={() => router.push("/palmistry")}
          className="px-12 py-4 bg-amber-200 text-[#0f1433] hover:bg-amber-100 transition-all duration-300 shadow-2xl hover:shadow-amber-200/50 hover:scale-105 animate-pulse"
          style={{ fontFamily: "var(--font-mystical)" }}
        >
          <span className="tracking-wider font-medium">START YOUR READING</span>
        </button>
      </div>
    </div>
  );
}
