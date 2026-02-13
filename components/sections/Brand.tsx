"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Button } from "@/components/ui/button";

export default function Brand() {
  return (
    <section
      id="brand"
      className="relative flex min-h-[60vh] items-center justify-center overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1628] via-[#0e1c3f] to-[#06112a]">
        <div className="absolute inset-0 bg-[url('/images/brand-bg.jpg')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-navy-darkest/60" />
      </div>

      {/* Content */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative z-10 mx-auto max-w-[800px] px-6 text-center"
      >
        <p className="mx-auto max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
          줄기세포 전문 클리닉 &apos;셀리앤&apos;을 경영지원을 하고 있습니다.
          클리닉 개원 후 원활한 운영을 위해 최적화된 시스템 셋팅과 마케팅
          프로그램을 진행합니다.
        </p>
        <Button
          className="mt-8 rounded-full bg-accent-blue px-8 py-6 text-base font-medium text-white hover:bg-accent-blue/90"
          asChild
        >
          <a href="#">메디컬 브랜드 바로가기</a>
        </Button>
      </motion.div>
    </section>
  );
}
