"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ZodiacBackground } from "./ZodiacBackground";

interface ProcessingStep {
  id: number;
  text: string;
  completed: boolean;
  active: boolean;
}

export function ReportProcessing() {
  const router = useRouter();
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { id: 1, text: "Analyzing palm lines and patterns...", completed: false, active: false },
    { id: 2, text: "Detecting personality archetypes...", completed: false, active: false },
    { id: 3, text: "Generating cosmic profile...", completed: false, active: false },
    { id: 4, text: "Compiling your stardust report...", completed: false, active: false },
  ]);

  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate processing steps
    const intervals: ReturnType<typeof setTimeout>[] = [];

    steps.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setCurrentStep(index + 1);
        setSteps((prevSteps) =>
          prevSteps.map((step, i) => ({
            ...step,
            active: i === index,
            completed: i < index,
          }))
        );

        // Update progress
        const newProgress = ((index + 1) / steps.length) * 100;
        setProgress(newProgress);
      }, (index + 1) * 2000); // 2 seconds per step

      intervals.push(timeout);
    });

    // Navigate to report ready page after all steps are done
    const finalTimeout = setTimeout(() => {
      router.push("/report-ready");
    }, (steps.length + 1) * 2000);

    intervals.push(finalTimeout);

    return () => {
      intervals.forEach((interval) => clearTimeout(interval));
    };
  }, [router, steps.length]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <div className="border-2 border-purple-300/40 rounded-lg p-8 md:p-12 relative backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          <div className="relative z-10 space-y-8">
            {/* Header */}
            <div className="text-center space-y-3">
              <h1
                className="text-4xl md:text-5xl text-amber-100 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                COSMIC ANALYSIS IN PROGRESS
              </h1>
              <div className="h-1 w-32 bg-amber-200/60 mx-auto mb-4" />
              <p
                className="text-purple-200 italic"
                style={{ fontFamily: "var(--font-mystical)" }}
              >
                The stars are aligning your truth...
              </p>
            </div>

            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="h-2 bg-[#1a2555]/50 border border-purple-300/40 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-amber-200 to-amber-100 transition-all duration-1000 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p
                className="text-right text-amber-100/60 text-sm"
                style={{ fontFamily: "var(--font-mystical)" }}
              >
                {Math.round(progress)}% Complete
              </p>
            </div>

            {/* Processing Steps */}
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className={`flex items-center gap-4 p-4 rounded border transition-all duration-500 ${
                    step.completed
                      ? "bg-green-500/10 border-green-500/40"
                      : step.active
                        ? "bg-amber-100/10 border-amber-200/60"
                        : "bg-[#1a2555]/40 border-purple-300/20"
                  }`}
                >
                  {/* Status Icon */}
                  <div className="relative w-8 h-8 flex-shrink-0">
                    {step.completed ? (
                      <div className="w-8 h-8 rounded-full bg-green-500/30 border border-green-500/60 flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    ) : step.active ? (
                      <div className="w-8 h-8 rounded-full border-2 border-transparent border-t-amber-200 border-r-amber-200 animate-spin" />
                    ) : (
                      <div className="w-8 h-8 rounded-full border-2 border-purple-300/40 flex items-center justify-center">
                        <span className="text-xs text-purple-300/60">
                          {index + 1}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Step Text */}
                  <span
                    className={`text-sm md:text-base transition-colors ${
                      step.completed
                        ? "text-green-300"
                        : step.active
                          ? "text-amber-100"
                          : "text-purple-200/60"
                    }`}
                    style={{ fontFamily: "var(--font-elegant)" }}
                  >
                    {step.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Mystical Elements */}
            <div className="text-center space-y-4">
              <div className="flex justify-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-200 animate-pulse" />
                <div
                  className="w-2 h-2 rounded-full bg-purple-300 animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
                <div
                  className="w-2 h-2 rounded-full bg-amber-200 animate-pulse"
                  style={{ animationDelay: "0.6s" }}
                />
              </div>
              <p
                className="text-purple-300/80 text-sm italic"
                style={{ fontFamily: "var(--font-mystical)" }}
              >
                Unlocking the secrets written in your cosmic blueprint...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
