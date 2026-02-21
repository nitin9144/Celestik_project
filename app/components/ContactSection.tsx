"use client";

import { useState } from "react";
import { ZodiacBackground } from "./ZodiacBackground";

export function ContactSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
    >
      <ZodiacBackground />

      <div className="relative z-10 container mx-auto px-4">
        {/* Decorative Border */}
        <div className="max-w-3xl mx-auto border-2 border-purple-300/40 rounded-lg p-8 md:p-12 relative backdrop-blur-sm bg-[#0f1433]/30">
          {/* Corner Decorations */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-amber-200/60 -translate-x-2 -translate-y-2" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-amber-200/60 translate-x-2 -translate-y-2" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-amber-200/60 -translate-x-2 translate-y-2" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-amber-200/60 translate-x-2 translate-y-2" />

          <div className="text-center mb-8">
            <h2
              className="text-4xl md:text-5xl text-amber-100 mb-3 drop-shadow-[0_0_20px_rgba(251,191,36,0.3)]"
              style={{ fontFamily: "var(--font-serif)" }}
            >
              CONTACT US
            </h2>
            <p
              className="text-purple-200 text-sm"
              style={{ fontFamily: "var(--font-mystical)" }}
            >
              Got questions written in your stars? Let's talk.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="FULL NAME"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-purple-300/40 text-amber-100 placeholder:text-purple-300/60 focus:outline-none focus:border-purple-300 transition-colors focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="MOBILE NUMBER"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-transparent border border-purple-300/40 text-amber-100 placeholder:text-purple-300/60 focus:outline-none focus:border-purple-300 transition-colors focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                  style={{ fontFamily: "var(--font-sans)" }}
                  required
                />
              </div>
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-transparent border border-purple-300/40 text-amber-100 placeholder:text-purple-300/60 focus:outline-none focus:border-purple-300 transition-colors focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                style={{ fontFamily: "var(--font-sans)" }}
                required
              />
            </div>

            <div>
              <textarea
                name="message"
                placeholder="WHISPER YOUR WONDER. TYPE YOUR QUESTION BELOW AND LET THE STARS (AND OUR TEAM) GUIDE YOU."
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-transparent border border-purple-300/40 text-amber-100 placeholder:text-purple-300/60 focus:outline-none focus:border-purple-300 transition-colors resize-none focus:shadow-[0_0_15px_rgba(168,85,247,0.3)]"
                style={{ fontFamily: "var(--font-sans)" }}
                required
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-10 py-3 bg-amber-200 text-[#0f1433] hover:bg-amber-100 transition-all duration-300 rounded font-semibold tracking-wider hover:shadow-[0_0_20px_rgba(251,191,36,0.3)]"
                style={{ fontFamily: "var(--font-mystical)" }}
              >
                ASK THE COSMOS
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
