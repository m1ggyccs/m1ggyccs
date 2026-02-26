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
title: "Andrei Miguel David | Work Portfolio",
  description: "Portfolio of Andrei Miguel A. David - Software Engineer and Technical Consultant Intern specializing in Business Central and Full-stack development.",
  keywords: ["Software Engineer", "Business Central", "AL Development", "Andrei David"],
  openGraph: {
    title: "Andrei Miguel David | Work Portfolio",
    description: "Building scalable ERP solutions, full-stack web applications, and intelligent systems.",
    url: "https://m1ggyccs.vercel.app", 
    siteName: "AndreiDavid Portfolio",
    images: [
      {
        url: "/CovernoBG.png",
        width: 1200,
        height: 630,
        alt: "Andrei Miguel A. David Cover",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}