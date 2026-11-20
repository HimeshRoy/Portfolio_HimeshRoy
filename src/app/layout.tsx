import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { PageTransition } from "@/components/layout/PageTransition";
import { PortfolioChatbot } from "@/components/chat/PortfolioChatbot";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = "https://himeshroy.vercel.app";
const ogImage = "/og-image.png";

const socialProfiles = [
  "https://www.linkedin.com/in/himeshroy",
  "https://github.com/himeshroy",
  "https://x.com/_himesh_roy",
  "https://www.instagram.com/_himesh_roy/",
];

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Himesh Roy | Full-Stack Developer & AI/ML Student",
    template: "%s | Himesh Roy",
  },

  description:
    "Himesh Roy is a B.Tech CSE (AI & ML) student at Geeta University, IEEE Student Member and Full-Stack Developer building modern web applications, intelligent systems, and creative digital experiences.",

  keywords: [
    "Himesh Roy",
    "Himesh Roy developer",
    "Himesh Roy portfolio",
    "Himesh Roy Geeta University",
    "Himesh Roy AI ML",
    "Himesh Roy Instagram",
    "Himesh Roy X",
    "Himesh Roy Twitter",
    "Himesh Roy LinkedIn",
    "Himesh Roy GitHub",
    "Himesh Roy social media",
    "@_himesh_roy",
    "Full Stack Developer",
    "Full Stack Developer India",
    "AI ML Developer",
    "AI ML Student",
    "IEEE Student Member",
    "IEEE Student Member Geeta University",
    "IEEE Geeta University",
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
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Himesh Roy",

    title: "Himesh Roy | Full-Stack & AI Developer",

    description:
      "Explore Himesh Roy's portfolio — Full-Stack Developer, AI/ML student, IEEE Student Member, and creator of modern digital experiences.",

    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "Himesh Roy — Full-Stack & AI Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Himesh Roy | Full-Stack & AI Developer",

    description:
      "Building full-stack applications, intelligent systems, and creative digital experiences.",

    images: [
      {
        url: ogImage,
        alt: "Himesh Roy — Full-Stack & AI Developer",
      },
    ],

    creator: "@_himesh_roy",
    site: "@_himesh_roy",
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

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Himesh Roy",
  url: siteUrl,
  image: `${siteUrl}/images/himesh-avatar-3d.png`,
  jobTitle: "Full-Stack Developer",
  description:
    "B.Tech CSE (AI & ML) student at Geeta University, IEEE Student Member and Full-Stack Developer building modern web applications and intelligent systems.",
  email: "himeshroy.cse@gmail.com",
  sameAs: socialProfiles,
  knowsAbout: [
    "Full-Stack Development",
    "Artificial Intelligence",
    "Machine Learning",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Python",
    "PostgreSQL",
    "Web Development",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} dark`}
    >
      <body className="bg-[#050505] text-white font-sans antialiased selection:bg-white selection:text-[#050505]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
          }}
        />

        <SiteHeader />

        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>

        <SiteFooter />
        <PortfolioChatbot />
      </body>
    </html>
  );
}
