"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useEffect, useState } from "react";

const fullText = "CELL Management Service Organization";

export default function Hero() {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-start overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020817] via-[#0a1628] to-[#06112a]">
        {/* Decorative wave shapes */}
        <div className="absolute inset-0 opacity-40">
          <svg
            className="absolute bottom-0 left-0 h-full w-full"
            viewBox="0 0 1440 900"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a3a8a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#0066ff" stopOpacity="0.2" />
              </linearGradient>
              <linearGradient id="wave2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q360,200 720,350 T1440,300 L1440,900 L0,900 Z"
              fill="url(#wave1)"
            />
            <path
              d="M0,500 Q400,300 800,450 T1440,400 L1440,900 L0,900 Z"
              fill="url(#wave2)"
            />
          </svg>
        </div>
        {/* Glowing light effect */}
        <div className="absolute right-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute left-[30%] top-[30%] h-[300px] w-[600px] rotate-[-30deg] rounded-full bg-blue-500/8 blur-[80px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1200px] px-6 md:px-12">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          className="font-poppins text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-[120px] lg:leading-[1.1]"
        >
          MEDISIAN
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="font-poppins mt-4 text-lg font-light italic tracking-wide text-white/70 md:text-xl"
        >
          {displayText}
          <span className="animate-pulse">|</span>
        </motion.p>
      </div>
    </section>
  );
}
