import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NeoPvP",
  description: "NeoTiers is a competitive Minecraft network built around our unique Tier List System, Minecraft Server, and Training Hub. Created by competitive Minecraft players for competitive players, NeoTiers serves as the central hub for everything related to high-level Minecraft gameplay. We specialize in promoting and refining 1.9+ combat, offering globally recognized kits designed to help players train, compete, and rise through the ranks.",
  icons: {
    icon: "https://i.imgur.com/2gkjkIv.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </body>
    </html>
  );
}

