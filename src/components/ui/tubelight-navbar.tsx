"use client";

import React, {useState } from "react";
import Link from "next/link";
import { LucideIcon, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import  {Moon, Sun } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  logo?: React.ReactNode;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0]?.name || "");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    // Load the theme from localStorage, default to false (light mode)
    return localStorage.getItem("theme") === "dark";
  });
  
  React.useEffect(() => {
  
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);
  
  // const toggleDarkMode = () => {
  //   setIsDarkMode(prevMode => !prevMode);
  // };
  
  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 50);
  //   const handleResize = () => {
  //     if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   window.addEventListener("resize", handleResize);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 rounded-full",
        "border backdrop-blur-lg bg-background/30",
        "shadow-sm transition-all mx-auto max-w-5xl w-[90%]",
        className
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-2">
        {/* Logo */}
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <Image 
            src="/assets/logo.png" 
            alt="Logo" 
            width={120} 
            height={90} 
            className="h-[50px] w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "flex items-center gap-2 text-sm font-medium rounded-full px-4 py-2",
                  "text-foreground/80 hover:bg-muted/50 transition-colors",
                  isActive && "text-purple-600 bg-muted/80"
                )}
              >
                <Icon size={18} strokeWidth={2} />
                <span>{item.name}</span>
              </Link>
            );
          })}
                <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-full hover:bg-muted/50 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-14 mt-[20px] left-0 right-0 bg-background/90 backdrop-blur-lg border-t border-border/50 shadow-lg md:hidden rounded-xl">
          <div className="container mx-auto px-4 py-3">
            {items.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => {
                    setActiveTab(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-muted/50",
                    isActive && "text-purple-600 bg-muted/80"
                  )}
                >
                  <Icon size={20} strokeWidth={2} />
                  <span className="font-medium">{item.name}</span>
                </Link>
                
              );
            })}
                 <div className="flex items-center ml-[17px] mt-3 space-x-2">
              <Sun className="h-4 w-4" />
              <Switch
                id="dark-mode"
                checked={isDarkMode}
                onCheckedChange={setIsDarkMode}
              />
              <Moon className="h-4 w-4" />
              <Label htmlFor="dark-mode" className="sr-only">
                Toggle dark mode
              </Label>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}