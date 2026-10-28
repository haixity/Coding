import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://haixity.dev"),
  title: "Haixity — Code. Learn. Build. Grow. | Modern Developer Education",
  description:
    "Your destination for mastering modern web development, full-stack architecture, system design, data structures, and autonomous AI agents through hands-on, real-world projects.",
  keywords: [
    "Haixity",
    "Code Learn Build Grow",
    "Next.js 15",
    "React 19",
    "Web Development",
    "Backend Development",
    "System Design",
    "Data Structures and Algorithms",
    "AI Agents",
    "Full-Stack Projects",
  ],
  authors: [{ name: "Haixity" }],
  creator: "Haixity",
  openGraph: {
    title: "Haixity — Code. Learn. Build. Grow.",
    description: "Don't just watch code. Understand it. Build it. Master it.",
    url: "https://youtube.com/@Haixity",
    siteName: "Haixity",
    images: [
      {
        url: "/haixity-logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Haixity Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/haixity-logo.jpg",
    apple: "/haixity-logo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
