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

const siteUrl = "https://himeshroy.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Himesh Roy | Full-Stack Developer & AI/ML Student",
    template: "%s | Himesh Roy",
  },

  description:
    "Himesh Roy is a B.Tech CSE AI & ML student at Geeta University, IEEE Student Member and Full-Stack Developer building modern web applications and AI-powered products with React, Next.js, Node.js, TypeScript, Python, and PostgreSQL.",

  keywords: [
    "Himesh Roy",
    "Himesh Roy developer",
    "Himesh Roy portfolio",
    "Himesh Roy Geeta University",
    "Himesh Roy AI ML",
    "Full Stack Developer",
    "Full Stack Developer India",
    "AI ML Student",
    "IEEE Student Member",
    "IEEE Student Member Geeta University",
    "IEEE Geeta University",
    "IEEE Geeta University Webmaster",
    "IEEE Geeta University student member",
    "AI ML Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Python Developer",
    "Software Developer",
    "Web Developer",
  ],

  authors: [
    {
      name: "Himesh Roy",
      url: siteUrl,
    },
  ],

  creator: "Himesh Roy",
  publisher: "Himesh Roy",

  category: "technology",

  applicationName: "Himesh Roy Portfolio",

  referrer: "origin-when-cross-origin",

  verification: {
    google: "QgN7t8bTtWCytlK9vJ8R9E8Q91ijRRVIkhcBMqVZlks",
  },

  alternates: {
    canonical: siteUrl,
  },

  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Himesh Roy",

    title:
      "Himesh Roy | Full-Stack Developer & AI/ML Student",

    description:
      "Portfolio of Himesh Roy — B.Tech CSE AI & ML student, IEEE Student Member, Full-Stack Developer, and builder of modern web applications and AI-powered products.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt:
          "Himesh Roy — Full-Stack Developer & AI/ML Student",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Himesh Roy | Full-Stack Developer & AI/ML Student",

    description:
      "Himesh Roy's portfolio — Full-Stack Developer and B.Tech CSE AI & ML student building modern web applications and AI-powered products.",

    images: ["/og-image.png"],
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