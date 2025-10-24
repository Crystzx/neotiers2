"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, BookOpen, Users } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", icon: "https://pvptiers.com/icons/navigation/home.svg", href: "#" },
    { name: "Tierlist", icon: "https://pvptiers.com/icons/navigation/tiers-list.svg", href: "https://neotierlist.vercel.app/overall" },
    { name: "Resources", icon: "https://pvptiers.com/icons/navigation/resources.svg", href: "https://neoresources.vercel.app/" },
    { name: "Support", icon: "https://pvptiers.com/icons/navigation/support.svg", href: "https://neosupport.vercel.app" },
  ];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-background text-white min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">
            The Future PvP Experience:
          </h1>
          <h2 className="text-lg md:text-xl uppercase tracking-widest text-primary mb-8 font-bold">
            Experience the future of competitive Minecraft PvP, great servers, global rankings, and pure skill-based competitions.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            NeoTiers is a competitive Minecraft network built around our unique Tier List System, Minecraft Server, and Training Hub.
            Created by competitive Minecraft players for competitive players, NeoTiers serves as the central hub for everything related to high-level Minecraft gameplay.
            We specialize in promoting and refining 1.9+ combat, offering globally recognized kits designed to help players train, compete, and rise through the ranks.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      {/* ...Your full main grid JSX goes here, exactly as in your snippet... */}

      {/* News/Changelog Section */}
      {/* ...Your news section JSX goes here... */}

      {/* Footer */}
      {/* ...Footer JSX goes here... */}
    </div>
  );
}

/* == Helpers == */
function getTierBadgeColor(tier: string) {
  if (tier.startsWith("HT1") || tier.startsWith("LT1"))
    return "bg-[#4B3B00]/50 text-[#FFD700] border border-[#B8860B]";
  if (tier.startsWith("HT2") || tier.startsWith("LT2"))
    return "bg-[#adadad]/50 text-[#e6e6e6] border border-[#8a8a8a]";
  if (tier.startsWith("HT3") || tier.startsWith("LT3"))
    return "bg-[#593e31]/50 text-[#8f6c57] border border-[#423126]";
  return "bg-[#1F2937]/50 text-[#D1D5DB] border border-[#374151]";
}

function getRegionColor(region: string) {
  const colors: Record<string, string> = {
    EU: "bg-blue-900/50 text-blue-300 border border-blue-800",
    NA: "bg-red-900/50 text-red-300 border border-red-800",
    AS: "bg-orange-900/50 text-orange-300 border border-orange-800",
    AU: "bg-teal-900/50 text-teal-300 border border-teal-800",
    SA: "bg-green-900/50 text-green-300 border border-green-800",
  };
  return colors[region] || "bg-gray-900/50 text-gray-300 border border-gray-800";
}

/* == Data == */
// highTierResults, liveTestResults, newsItems, socialLinks
// (Use exactly as in your original snippet)
