import type { Metadata } from "next";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { ThemeProvider } from "@/themes/ThemeProvider";
import { Atmosphere } from "@/components/effects/Atmosphere";
import { MonsoonScene } from "@/features/themes/monsoon";
import { PageTransition } from "@/components/layout/PageTransition";
import { SeasonalCursor } from "@/components/cursor/SeasonalCursor";
import { PersonSchema } from "@/components/seo/PersonSchema";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://himeshroy.vercel.app"),
  title: {
    default: "Himesh Roy — Full Stack Developer",
    template: "%s | Himesh Roy",
  },
  description:
    "Himesh Roy is a Full Stack Developer and AI/ML enthusiast building modern web applications, intelligent experiences, and thoughtful digital products.",
  keywords: [
    "Himesh Roy",
    "Himesh Roy Developer",
    "Himesh Roy Portfolio",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "AI Developer",
    "AI/ML",
    "JavaScript",
    "TypeScript",
    "Three.js",
    "Software Developer",
  ],
  authors: [
    {
      name: "Himesh Roy",
      url: "https://himeshroy.vercel.app",
    },
  ],
  creator: "Himesh Roy",
  publisher: "Himesh Roy",
  verification: {
    google: "QgN7t8bTtWCytlK9vJ8R9E8Q91ijRRVIkhcBMqVZlks",
  },
  alternates: {
    canonical: "https://himeshroy.vercel.app",
  },
  openGraph: {
    title: "Himesh Roy — Full Stack Developer",
    description:
      "Himesh Roy is a Full Stack Developer and AI/ML enthusiast building modern web applications and digital experiences.",
    url: "https://himeshroy.vercel.app",
    siteName: "Himesh Roy",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Himesh Roy — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Himesh Roy — Full Stack Developer",
    description:
      "Himesh Roy is a Full Stack Developer and AI/ML enthusiast building modern web applications and digital experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
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
          <PersonSchema />
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
