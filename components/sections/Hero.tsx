"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { useEffect, useState } from "react";

const fullText = "CELL Management Service Organization";

// Cross-direction waves for natural overlapping
// Group A: flows upper-left → lower-right (3 waves)
// Group B: flows upper-right → lower-left (3 waves)
// They cross in the center creating layered depth
const veils = [
  // --- Group A: left-to-right descent ---
  {
    id: "veilA1",
    color: "#1d4ed8",
    paths: [
      "M-300,-20 C200,80 500,180 720,300 C940,420 1200,280 1740,450",
      "M-300,60 C200,160 500,100 720,220 C940,340 1200,380 1740,370",
    ],
    strokeWidth: 140,
    opacity: 0.09,
    blur: 50,
    duration: 11,
  },
  {
    id: "veilA2",
    color: "#2563eb",
    paths: [
      "M-300,250 C100,350 400,280 720,450 C1040,620 1300,480 1740,650",
      "M-300,330 C100,270 400,400 720,370 C1040,520 1300,580 1740,570",
    ],
    strokeWidth: 110,
    opacity: 0.12,
    blur: 40,
    duration: 9,
  },
  {
    id: "veilA3",
    color: "#60a5fa",
    paths: [
      "M-300,550 C100,620 360,500 720,680 C1080,760 1360,650 1740,820",
      "M-300,630 C100,540 360,620 720,590 C1080,660 1360,750 1740,740",
    ],
    strokeWidth: 80,
    opacity: 0.14,
    blur: 28,
    duration: 8,
  },
  // --- Group B: right-to-left descent (reversed direction) ---
  {
    id: "veilB1",
    color: "#3b82f6",
    paths: [
      "M1740,30 C1300,150 1000,80 720,250 C440,420 200,300 -300,500",
      "M1740,100 C1300,70 1000,200 720,170 C440,320 200,400 -300,420",
    ],
    strokeWidth: 120,
    opacity: 0.1,
    blur: 45,
    duration: 10,
  },
  {
    id: "veilB2",
    color: "#4d8ef7",
    paths: [
      "M1740,300 C1400,420 1100,340 720,500 C340,660 100,540 -300,720",
      "M1740,380 C1400,340 1100,460 720,420 C340,560 100,640 -300,640",
    ],
    strokeWidth: 90,
    opacity: 0.11,
    blur: 35,
    duration: 8.5,
  },
  {
    id: "veilB3",
    color: "#93c5fd",
    paths: [
      "M1740,580 C1350,680 1050,600 720,740 C390,850 150,750 -300,880",
      "M1740,650 C1350,600 1050,720 720,660 C390,750 150,840 -300,800",
    ],
    strokeWidth: 65,
    opacity: 0.1,
    blur: 22,
    duration: 10.5,
  },
];

// Bright thin edge lines - mix of both directions for crossing highlights
const edges = [
  {
    id: "edgeA1",
    paths: [
      "M-300,250 C100,350 400,280 720,450 C1040,620 1300,480 1740,650",
      "M-300,330 C100,270 400,400 720,370 C1040,520 1300,580 1740,570",
    ],
    duration: 9,
  },
  {
    id: "edgeB1",
    paths: [
      "M1740,300 C1400,420 1100,340 720,500 C340,660 100,540 -300,720",
      "M1740,380 C1400,340 1100,460 720,420 C340,560 100,640 -300,640",
    ],
    duration: 8.5,
  },
  {
    id: "edgeA2",
    paths: [
      "M-300,550 C100,620 360,500 720,680 C1080,760 1360,650 1740,820",
      "M-300,630 C100,540 360,620 720,590 C1080,660 1360,750 1740,740",
    ],
    duration: 8,
  },
  {
    id: "edgeB2",
    paths: [
      "M1740,30 C1300,150 1000,80 720,250 C440,420 200,300 -300,500",
      "M1740,100 C1300,70 1000,200 720,170 C440,320 200,400 -300,420",
    ],
    duration: 10,
  },
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const prefersReducedMotion = useReducedMotion();

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
        {/* Flowing silk veil animation */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* Per-veil blur filters */}
            {veils.map((v) => (
              <filter key={v.id} id={`blur-${v.id}`} x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation={v.blur} />
              </filter>
            ))}
            {/* Edge glow filter */}
            <filter id="edgeGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur1" />
              <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur2" />
              <feMerge>
                <feMergeNode in="blur1" />
                <feMergeNode in="blur2" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
            {/* Gradient fade for each veil */}
            {veils.map((v) => (
              <linearGradient key={v.id} id={`grad-${v.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={v.color} stopOpacity="0" />
                <stop offset="15%" stopColor={v.color} stopOpacity="0.8" />
                <stop offset="50%" stopColor={v.color} stopOpacity="1" />
                <stop offset="85%" stopColor={v.color} stopOpacity="0.8" />
                <stop offset="100%" stopColor={v.color} stopOpacity="0.2" />
              </linearGradient>
            ))}
          </defs>

          {/* Wide soft veil layers */}
          {veils.map((v) => (
            <motion.path
              key={v.id}
              d={v.paths[0]}
              fill="none"
              stroke={`url(#grad-${v.id})`}
              strokeWidth={v.strokeWidth}
              strokeLinecap="round"
              opacity={v.opacity}
              filter={`url(#blur-${v.id})`}
              animate={
                prefersReducedMotion ? {} : { d: v.paths }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      d: {
                        duration: v.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }
              }
            />
          ))}

          {/* Bright thin edge highlights */}
          {edges.map((e) => (
            <motion.path
              key={e.id}
              d={e.paths[0]}
              fill="none"
              stroke="#60a5fa"
              strokeWidth={1.5}
              strokeLinecap="round"
              opacity={0.35}
              filter="url(#edgeGlow)"
              animate={
                prefersReducedMotion ? {} : { d: e.paths }
              }
              transition={
                prefersReducedMotion
                  ? undefined
                  : {
                      d: {
                        duration: e.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      },
                    }
              }
            />
          ))}
        </svg>

        {/* Floating glow orbs */}
        <motion.div
          className="absolute right-[5%] top-[15%] h-[500px] w-[500px] rounded-full bg-blue-600/8 blur-[150px]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 40, -30, 0],
                  y: [0, -30, 20, 0],
                  scale: [1, 1.15, 0.9, 1],
                }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[10%] left-[20%] h-[400px] w-[600px] rotate-[-20deg] rounded-full bg-blue-500/6 blur-[100px]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, -35, 25, 0],
                  y: [0, 20, -15, 0],
                  scale: [1, 0.92, 1.1, 1],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-[50%] top-[40%] h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px]"
          animate={
            prefersReducedMotion
              ? {}
              : {
                  x: [0, 20, -15, 0],
                  y: [0, -25, 10, 0],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
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
