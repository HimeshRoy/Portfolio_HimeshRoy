import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeProvider } from "@/themes/ThemeProvider";
import { Atmosphere } from "@/components/effects/Atmosphere";
import { MonsoonScene } from "@/features/themes/monsoon";
import { PageTransition } from "@/components/layout/PageTransition";
import { SeasonalCursor } from "@/components/cursor/SeasonalCursor";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://himeshroy.vecel.app"),
  title: {
    default: "Himesh Roy — Full Stack Developer",
    template: "%s | Himesh Roy",
  },
  description:
    "Portfolio of Himesh Roy — Full Stack Developer and AI/ML enthusiast building thoughtful digital experiences with modern web technologies.",
  keywords: [
    "Himesh Roy",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "AI/ML",
    "JavaScript",
    "TypeScript",
    "Three.js",
    "Portfolio",
  ],
  authors: [
    {
      name: "Himesh Roy",
    },
  ],
  creator: "Himesh Roy",
  openGraph: {
    title: "Himesh Roy — Full Stack Developer",
    description:
      "Portfolio of Himesh Roy — Full Stack Developer and AI/ML enthusiast.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Himesh Roy — Full Stack Developer",
    description:
      "Portfolio of Himesh Roy — Full Stack Developer and AI/ML enthusiast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <SeasonalCursor />
          <MonsoonScene />
          <Atmosphere />
          <SiteHeader />

          <main>
            <PageTransition>{children}</PageTransition>
          </main>

          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}