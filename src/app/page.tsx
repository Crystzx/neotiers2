"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, BookOpen, Users } from "lucide-react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", icon: "https://pvptiers.com/icons/navigation/home.svg", href: "#" },
    { name: "Tierlist", icon: "https://pvptiers.com/icons/navigation/tiers-list.svg", href: "https://rosetierlist.vercel.app/" },
    { name: "Resources", icon: "https://pvptiers.com/icons/navigation/resources.svg", href: "https://roseresources.vercel.app/" },
  ];

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
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border/30 sticky top-0 bg-background/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Server IP */}
          <div className="flex items-center gap-4">
            <Image
              src="https://i.ibb.co/dJM030cX/image-2026-03-01-144254817-removebg-preview.png"
              alt="Rose Tiers Logo"
              width={50}
              height={50}
              className="w-12 h-12"
            />
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full">
              <span className="text-xs text-muted-foreground uppercase tracking-wide">Discord Link:</span>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-sm font-medium">dsc.gg/rosetiers</span>
              </div>
            </div>
          </div>

          {/* Improved Dropdown Menu */}
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
              aria-haspopup="true"
              aria-expanded={menuOpen}
              className="flex items-center gap-2 px-4 py-2 hover:bg-card rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">Menu</span>
              <Menu className="w-5 h-5" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg backdrop-blur-xl z-50 animate-dropdownFadeScale">
                {menuItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-2 text-white text-sm rounded hover:bg-muted/30 transition-colors"
                  >
                    <Image
                      src={item.icon}
                      alt={`${item.name} Icon`}
                      width={20}
                      height={20}
                      unoptimized
                    />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white">The Future PvP Experience:</h1>
          <h2 className="text-lg md:text-xl uppercase tracking-widest text-primary mb-8 font-bold">
            Experience the future of competitive Minecraft PvP, great servers, global rankings, and pure skill-based competitions.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Spear Tiers is a competitive Minecraft network created by competitive Minecraft players for other competitive players.
            Spear Tiers serves as the central hub for new gamemodes such as Spear SMP.
            We specialize in promoting and refining 1.9+ combat, offering customly made kits designed to help players train, compete, and rise through the ranks.
          </p>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* High Tier Results */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">High Tier Results</h2>
              </div>
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider px-2 py-1 bg-red-950/50 text-red-400 border border-red-900/50 rounded">
                  Latest High Tier 3 and above results
                </span>
              </div>
              <div className="space-y-2">
                {highTierResults.map((result, i) => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/30 rounded transition-colors">
                    <div className="flex items-center gap-3">
                      <Image src={result.avatar} alt={result.name} width={40} height={40} className="rounded" unoptimized />
                      <span className="font-medium text-white">{result.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={result.modeIcon} alt={result.mode} width={40} height={40} className="rounded" unoptimized />
                      <span className="text-sm text-muted-foreground uppercase">{result.mode}</span>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded ${getTierBadgeColor(result.tier)}`}>{result.tier}</span>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded ${getRegionColor(result.region)}`}>{result.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Live Test Results */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Live Test Results</h2>
              </div>
              <div className="mb-4">
                <span className="text-xs uppercase tracking-wider px-2 py-1 bg-red-950/50 text-red-400 border border-red-900/50 rounded">
                  Feed of all Tier Results
                </span>
              </div>
              <div className="space-y-2">
                {liveTestResults.map((result, i) => (
                  <div key={i} className="flex items-center justify-between p-3 hover:bg-muted/30 rounded transition-colors">
                    <div className="flex items-center gap-3">
                      <Image src={result.avatar} alt={result.name} width={40} height={40} className="rounded" unoptimized />
                      <span className="font-medium text-white">{result.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Image src={result.modeIcon} alt={result.mode} width={40} height={40} className="rounded" unoptimized />
                      <span className="text-sm text-muted-foreground uppercase">{result.mode}</span>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded ${getTierBadgeColor(result.tier)}`}>{result.tier}</span>
                      <span className={`px-2 py-0.5 text-xs font-bold rounded ${getRegionColor(result.region)}`}>{result.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Discord CTA */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Join our official<br />Discord Server!</h3>
              <a
                href="https://discord.gg/p9WNJn4KVz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-bg-600 text-white font-bold rounded-lg transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Join our Discord
              </a>
            </div>

            {/* Community Members */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-white">Community Members</h4>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  <Image src="https://i.ibb.co/624Psch/Spear-Mace-1.png" alt="Spear SMP" width={32} height={32} className="rounded-full border-2 border-background w-8 h-8" />
                  <Image src="https://i.ibb.co/YFb8WwhW/TIERS-7.png" alt="Modern Cart" width={32} height={32} className="rounded-full border-2 border-background w-8 h-8" />
                </div>
                <span className="text-sm text-muted-foreground">and <span className="text-white font-bold">+0</span></span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Total Discord Members</span>
                <span className="ml-auto text-white font-bold">≈70</span>
              </div>
            </div>

            {/* Gamemode of the Month */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-white">Gamemode of the Month</h4>
              <div className="flex -space-x-2 mb-3">
                <Image src="https://i.ibb.co/PsRW7n1L/e-1.png" alt="Spear SMP" width={36} height={36} className="rounded-full border-2 border-background w-8 h-8" unoptimized />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Tests Last Month</span>
                <span className="ml-auto text-white font-bold">2</span>
              </div>
            </div>

            {/* Active Testers */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h4 className="text-lg font-bold mb-4 text-white">Super Testers</h4>
              <div className="flex -space-x-2 mb-3">
                <Image src="https://render.crafty.gg/3d/bust/MHF_Steve" alt="N/A's avatar" width={28} height={28} className="rounded-full border-2 border-background w-8 h-8" unoptimized />
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-4 h-4" />
                <span>Last Month's Tests (February)</span>
                <span className="ml-auto text-white font-bold">N/A</span>
              </div>
            </div>

            {/* Whitepaper CTA */}
            <div className="bg-card border border-border rounded-lg p-6 text-center">
              <h4 className="text-lg font-bold mb-4 text-white">Read our rulebook</h4>
              <a
                href="https://discord.com/channels/1431639772090335274/1431729078657880064/1460730936080728211"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-primary to-bg-600 text-white font-bold rounded-lg transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Read our Rules
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News/Changelog Section */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={300}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{item.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{item.description}</p>
                <div className="flex items-center gap-3">
                  <Image
                    src={item.authorAvatar}
                    alt={item.author}
                    width={32}
                    height={32}
                    className="rounded-full w-8 h-8"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">{item.author}</div>
                  </div>
                  <div className="text-xs text-muted-foreground">{item.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled>
            PREV
          </button>
          <div className="w-10 h-10 flex items-center justify-center bg-primary text-primary-foreground font-bold rounded">
            1
          </div>
          <button className="px-4 py-2 text-sm text-muted-foreground hover:text-white transition-colors">
            NEXT
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <Image
                src="https://i.ibb.co/dJM030cX/image-2026-03-01-144254817-removebg-preview.png"
                alt="Rose Tiers Logo"
                width={60}
                height={60}
                className="w-16 h-16"
              />
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-card border border-border hover:border-primary hover:bg-primary/10 rounded transition-all"
                >
                  {social.icon}
                </a>
              ))}
              <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-full ml-4">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Discord:</span>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium">dsc.gg/rosetiers</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border/30 text-center md:text-left">
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              © 2025 Rose Tiers & Crystzx. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
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
const highTierResults = [
  { name: "Crystzx", avatar: "https://render.crafty.gg/3d/bust/Crystzx", mode: "SpearSMP", modeIcon: "https://i.ibb.co/PsRW7n1L/e-1.png", tier: "HT3", region: "EU" },
];
const liveTestResults = [
  { name: "bookClient", avatar: "https://render.crafty.gg/3d/bust/bookClient", mode: "SpearSMP", modeIcon: "https://i.ibb.co/PsRW7n1L/e-1.png", tier: "HT5", region: "EU" },
  { name: "Zureify", avatar: "https://render.crafty.gg/3d/bust/Zureify", mode: "SpearSMP", modeIcon: "https://i.ibb.co/PsRW7n1L/e-1.png", tier: "LT3", region: "NA" },
  { name: "Syst3m4k", avatar: "https://render.crafty.gg/3d/bust/Syst3m4k", mode: "SpearSMP", modeIcon: "https://i.ibb.co/PsRW7n1L/e-1.png", tier: "HT5", region: "EU" },
  { name: "Semin2210", avatar: "https://render.crafty.gg/3d/bust/Semin2210", mode: "SpearSMP", modeIcon: "https://i.ibb.co/PsRW7n1L/e-1.png", tier: "HT4", region: "EU" },
  { name: "Fesh4k", avatar: "https://render.crafty.gg/3d/bust/Fesh4k", mode: "SpearSMP", modeIcon: "https://i.ibb.co/PsRW7n1L/e-1.png", tier: "LT3", region: "EU" },
];

/* https://i.ibb.co/PsRW7n1L/e-1.png - SpearSMP */
/* https://i.ibb.co/Q3g4618C/image-2.png - Modern Cart */





const newsItems = [
  {
    title: "",
    description: "Merged into a tierlist with Modern Cart Community, creating Rose Tiers.",
    image: "",
    author: "Crystzx",
    authorAvatar: "https://i.ibb.co/DPZ8CJyx/output-onlinegiftools.png",
    date: "Jan 20, 2025",
  },
];
const socialLinks = [
  {
    url: "https://dsc.gg/rosetiers",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
      </svg>
    ),
  },
  {
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    url: "#",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];
