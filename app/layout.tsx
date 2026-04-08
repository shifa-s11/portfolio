import type { Metadata } from "next";
import { DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: {
    default: "Shifa Saeed | Full Stack Developer",
    template: "%s | Shifa Saeed",
  },
  description:
    "Portfolio of Shifa Saeed, a full-stack developer building polished, scalable web products with React, Next.js, Node.js, and thoughtful UI engineering.",
  keywords: [
    "Shifa Saeed",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js Developer",
    "TypeScript",
    "Portfolio Website",
  ],
  authors: [{ name: "Shifa Saeed" }],
  creator: "Shifa Saeed",
  publisher: "Shifa Saeed",
  category: "technology",
  applicationName: "Shifa Saeed Portfolio",
  icons: {
    icon: "/logo-s.svg",
    shortcut: "/logo-s.svg",
    apple: "/logo-s.svg",
  },
  openGraph: {
    title: "Shifa Saeed | Full Stack Developer",
    description:
      "Explore the portfolio of Shifa Saeed, featuring full-stack projects, product-focused frontend work, and scalable web experiences.",
    type: "website",
    siteName: "Shifa Saeed Portfolio",
    images: [
      {
        url: "/images/shifa-profiles.jpeg",
        width: 960,
        height: 822,
        alt: "Portrait of Shifa Saeed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shifa Saeed | Full Stack Developer",
    description:
      "Portfolio of Shifa Saeed, showcasing polished frontend systems and full-stack product builds.",
    images: ["/images/shifa-profiles.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${syne.variable}`}>{children}</body>
    </html>
  );
}
