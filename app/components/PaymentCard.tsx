"use client";

import { ArrowLeft, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ZodiacBackground } from "./ZodiacBackground";

interface FormData {
  fullName: string;
  age: string;
  imagePreview: string;
}

export function PaymentCard() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem("palmFormData");
    if (stored) {
      setFormData(JSON.parse(stored));
    }
  }, []);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Store payment status
    sessionStorage.setItem("paymentCompleted", "true");
    router.push("/report-processing");
  };

  if (!formData) {
    return (
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
        <ZodiacBackground />
        <div className="relative z-10 text-center">
          <p className="text-amber-100">Loading payment details...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <button
          onClick={() => router.back()}
          className="mb-6 flex items-center gap-2 text-amber-100 hover:text-amber-200 transition-colors"
          style={{ fontFamily: "var(--font-mystical)" }}
        >
          <ArrowLeft className="w-5 h-5" />
          Go Back
        </button>

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
                VERIFY YOUR READING
              </h1>
              <div className="h-1 w-32 bg-amber-200/60 mx-auto mb-4" />
              <p
                className="text-purple-200 italic"
                style={{ fontFamily: "var(--font-mystical)" }}
              >
                One rupee verfication to unlock your cosmic insights
              </p>
            </div>

            {/* Summary Card */}
            <div className="bg-gradient-to-br from-purple-900/30 to-amber-900/20 border border-purple-300/40 rounded-lg p-6 space-y-6">
              {/* User Info */}
              <div className="space-y-4">
                <h2
                  className="text-amber-100 text-lg tracking-wide"
                  style={{ fontFamily: "var(--font-mystical)" }}
                >
                  YOUR DETAILS
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-[#1a2555]/40 p-4 rounded border border-purple-300/20">
                    <p
                      className="text-purple-300/80 text-xs mb-1"
                      style={{ fontFamily: "var(--font-mystical)" }}
                    >
                      NAME
                    </p>
                    <p
                      className="text-amber-100"
                      style={{ fontFamily: "var(--font-elegant)" }}
                    >
                      {formData.fullName}
                    </p>
                  </div>
                  <div className="bg-[#1a2555]/40 p-4 rounded border border-purple-300/20">
                    <p
                      className="text-purple-300/80 text-xs mb-1"
                      style={{ fontFamily: "var(--font-mystical)" }}
                    >
                      AGE
                    </p>
                    <p
                      className="text-amber-100"
                      style={{ fontFamily: "var(--font-elegant)" }}
                    >
                      {formData.age} Years
                    </p>
                  </div>
                </div>

                {/* Palm Image Preview */}
                <div className="bg-[#1a2555]/40 p-4 rounded border border-purple-300/20">
                  <p
                    className="text-purple-300/80 text-xs mb-3"
                    style={{ fontFamily: "var(--font-mystical)" }}
                  >
                    PALM IMAGE
                  </p>
                  <div className="w-full h-48 rounded border border-amber-200/40 overflow-hidden">
                    <img
                      src={formData.imagePreview}
                      alt="Your palm"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Section */}
              <div className="border-t border-purple-300/20 pt-6 space-y-6">
                {/* Amount */}
                <div className="flex items-center justify-between bg-[#1a2555]/40 p-4 rounded border border-amber-200/20">
                  <span
                    className="text-purple-300/80 text-sm"
                    style={{ fontFamily: "var(--font-mystical)" }}
                  >
                    VERIFICATION AMOUNT
                  </span>
                  <span
                    className="text-2xl text-amber-200 font-bold"
                    style={{ fontFamily: "var(--font-serif)" }}
                  >
                    ₹1
                  </span>
                </div>

                {/* Payment Button */}
                <button
                  onClick={handlePayment}
                  disabled={isProcessing}
                  className="w-full px-6 py-4 bg-gradient-to-r from-amber-200 to-amber-100 text-[#0f1433] hover:from-amber-100 hover:to-amber-50 transition-all duration-300 rounded font-bold tracking-wider flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ fontFamily: "var(--font-mystical)" }}
                >
                  <Zap className="w-5 h-5" />
                  {isProcessing ? "Processing..." : "Verify & Proceed"}
                </button>

                <p
                  className="text-center text-purple-300/60 text-xs"
                  style={{ fontFamily: "var(--font-elegant)" }}
                >
                  Secure payment powered by Cosmic Gateway
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
