"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
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
        </h2>
        <div className="mt-3 flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4 md:mt-4">
          <span className="inline-block rounded-full border border-blue-400/60 bg-blue-500/20 px-6 py-2 text-lg font-semibold text-white backdrop-blur-sm sm:text-xl md:px-8 md:py-3 md:text-2xl">
            자체 GMP 센터를
          </span>
          <span className="text-2xl font-bold text-white sm:text-3xl md:text-4xl lg:text-[42px]">
            보유한
          </span>
        </div>
        <h2 className="mt-2 text-2xl font-bold leading-snug text-white sm:text-3xl md:mt-3 md:text-4xl lg:text-[42px] lg:leading-[1.4]">
          병원경영지원(MSO) 기업입니다.
        </h2>

        <div className="mx-auto mt-10 max-w-2xl rounded-xl bg-white/10 px-6 py-6 backdrop-blur-sm md:px-10 md:py-8">
          <p className="text-center text-sm leading-relaxed text-white/80 md:text-base lg:text-lg">
            <span className="text-blue-300">메디시안</span>은 차별화된 프로세스를 바탕으로 현재
            <br />
            줄기세포 전문 클리닉인 &apos;셀리닉 의원&apos;을 경영지원하고 있습니다.
            <br />
            모든 원장님들의 개원 후 원활한 운영을 위해 최적화된
            <br />
            경영 시스템 세팅 및 마케팅 프로그램을 진행해드립니다.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
