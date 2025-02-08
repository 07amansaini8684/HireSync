"use client";

import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { BriefcaseIcon, Menu, X, Users2Icon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import DashboardBtn from "./DashboardBtn";
import LanguageSelector from "./Editor/LanguageSelector";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Jobs", href: "/jobs" },
    { name: "Candidates", href: "/candidates" },
    { name: "Companies", href: "/companies" },
    { name: "Resources", href: "/resources" }
  ];

  return (
    <nav
      className={cn(
        "w-full z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-lg shadow-lg"
          : "bg-background/40 backdrop-blur-sm"
      )}
    >
      {/* Main Navbar Content */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo Section */}
          <Link 
            href="/"
            className="group flex items-center gap-2 font-semibold text-2xl"
          >
            <div className="relative">
              <div className="flex items-center justify-center size-8 bg-gradient-to-br from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300 rounded-lg transition-transform duration-300 group-hover:rotate-12">
                <Users2Icon className="size-5 text-white" />
              </div>
              <div className="absolute inset-0 rounded-lg border-2 border-indigo-500/50 dark:border-violet-400/50 opacity-0 scale-100 transition-all duration-500 group-hover:scale-150 group-hover:opacity-0" />
            </div>
            <span className="font-mono relative">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300 bg-clip-text text-transparent">
                hireHub
              </span>
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-indigo-600 to-violet-500 dark:from-indigo-400 dark:to-violet-300 scale-x-0 transition-transform duration-300 group-hover:scale-x-100 origin-left" />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href} 
                  className="relative group px-3 py-2 text-foreground/80 hover:text-foreground transition-colors tracking-wide uppercase text-sm font-medium"
                >
                  {item.name}
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-indigo-500/0 via-indigo-500/70 to-indigo-500/0 dark:from-violet-400/0 dark:via-violet-400/70 dark:to-violet-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </SignedIn>

          {/* Right Side Actions */}
          <SignedIn>
            <div className="hidden md:flex items-center gap-4">
              <DashboardBtn />
              <ModeToggle />
              <div className="relative group">
                <UserButton
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "hover:ring-2 hover:ring-indigo-500 dark:hover:ring-violet-400 transition-all duration-300"
                    }
                  }}
                />
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 h-px w-0 bg-indigo-500 dark:bg-violet-400 group-hover:w-full transition-all duration-300" />
              </div>
            </div>
          </SignedIn>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="size-6" />
            ) : (
              <Menu className="size-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 p-4 bg-background/80 backdrop-blur-lg md:hidden border-b",
          "transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <SignedIn>
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 hover:bg-accent rounded-lg transition-colors tracking-wide uppercase text-sm font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 px-4 py-2">
              <DashboardBtn />
              <ModeToggle />
            </div>
          </div>
        </SignedIn>
      </div>
      <LanguageSelector hasAccess={true} />
    </nav>
  );
};

export default Navbar;