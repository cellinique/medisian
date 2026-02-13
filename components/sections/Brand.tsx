"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Brand() {
  const [particles, setParticles] = useState<
    { width: number; height: number; left: string; top: string; opacity: number; duration: number; delay: number }[]
  >([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 40 }, () => ({
        width: Math.random() * 3 + 1,
        height: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <section
      id="brand"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden"
    >
      {/* Background with particles */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#06112a] via-[#0e1c3f] to-[#07112b]">
        {/* Particle dots */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: p.width,
                height: p.height,
                left: p.left,
                top: p.top,
                opacity: p.opacity,
              }}
              animate={{
                opacity: [0.1, 0.4, 0.1],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                delay: p.delay,
              }}
            />
          ))}
        </div>
        {/* Glow effects */}
        <div className="absolute left-1/4 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/5 blur-[100px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[200px] w-[200px] rounded-full bg-cyan-500/5 blur-[80px]" />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[900px] px-6 text-center"
      >
        <h2 className="text-2xl font-bold leading-snug text-white sm:text-3xl md:text-4xl lg:text-[42px] lg:leading-[1.4]">
          <span className="font-poppins">MEDISIAN</span>은 줄기세포 기술력과
          <br />
          메디컬 브랜딩 역량을 보유한
          <br />
          병원경영지원(MSO) 기업입니다.
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-white/50 md:text-lg">
          줄기세포 전문 클리닉 &apos;셀리닉 의원&apos;을 경영지원을 하고
          있습니다. 클리닉 개원 후 원활한 운영을 위해 최적화된 시스템 셋팅과
          마케팅 프로그램을 진행합니다.
        </p>

        <Button
          className="mt-10 rounded-full bg-accent-blue/80 px-10 py-7 text-base font-medium text-white shadow-[0_0_30px_rgba(51,102,204,0.3)] backdrop-blur-sm transition-all hover:bg-accent-blue hover:shadow-[0_0_40px_rgba(51,102,204,0.5)]"
          asChild
        >
          <a href="#cellreand">메디컬 브랜드 바로가기</a>
        </Button>
      </motion.div>
    </section>
  );
}
