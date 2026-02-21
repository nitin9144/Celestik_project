import type { Metadata } from "next";
import { Header } from "@/app/components/Header";
import { Footer } from "@/app/components/Footer";
import "@/app/styles/index.css";

export const metadata: Metadata = {
  title: "Create Pages with Code",
  description: "Mystical readings and cosmic insights",
  icons: {
    icon: "/zodiac_wheel.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#0f1433] text-white overflow-x-hidden">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
