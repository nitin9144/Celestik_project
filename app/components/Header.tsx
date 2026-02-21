"use client";

import { Compass } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Header() {
  const router = useRouter();

  return (
    <header className="border border-white m-3 rounded-3xl fixed top-0 left-0 right-0 z-50 bg-[#0f1433]/80 backdrop-blur-sm border-b border-purple-900/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <div className="w-[55px]">
            <img src="/zodiac_wheel.png" alt="" />
          </div>
          <span
            className="text-2xl text-amber-100 tracking-wider drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            CELESTIK
          </span>
        </button>

        <nav className="flex items-center gap-2">
          <button
            onClick={() => router.push("/palmistry")}
            className="px-4 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
            style={{ fontFamily: "var(--font-mystical)" }}
          >
            PALMISTRY
          </button>
          <button
            onClick={() => router.push("/astrology")}
            className="px-4 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
            style={{ fontFamily: "var(--font-mystical)" }}
          >
            ASTROLOGY
          </button>
          <button
            onClick={() => router.push("/contact")}
            className="px-4 py-2 text-sm text-amber-100 border border-amber-100/40 rounded-full hover:bg-amber-100/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(251,191,36,0.2)]"
            style={{ fontFamily: "var(--font-mystical)" }}
          >
            CONTACT US
          </button>
        </nav>
      </div>
    </header>
  );
}
