"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Image from "next/image";

const navItems = [
  { label: "HOME", href: "#home" },
  { label: "COMPANY", href: "#company" },
  { label: "BRAND", href: "#brand" },
  { label: "CELLREAND", href: "#cellreand" },
  { label: "SERVICE", href: "#service" },
  { label: "CONTACT", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#") return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled
          ? "rgba(6, 17, 42, 0.95)"
          : "rgba(6, 17, 42, 0.7)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <Image
            src="/images/logo01.png"
            alt="MEDISIAN"
            width={150}
            height={40}
            className="h-8 w-auto"
            priority
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-poppins px-4 py-2 text-sm font-medium tracking-wider text-white/80 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <button className="text-white p-2">
              <Menu size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="border-navy-dark bg-navy-darkest w-72">
            <nav className="mt-8 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-poppins px-4 py-3 text-base font-medium tracking-wider text-white/80 transition-colors hover:text-white hover:bg-white/5 rounded-md"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
