"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

const features = [
  {
    title: "클리닉\n운영비용 절감",
  },
  {
    title: "줄기세포\n장비 및 소모품 유통",
  },
  {
    title: "경영시스템 콘텐츠화\n및 매뉴얼 제공",
  },
];

export default function Company() {
  return (
    <section
      id="company"
      className="relative py-28 md:py-40"
      style={{
        background: "linear-gradient(180deg, #06112a 0%, #0e1c3f 50%, #07112b 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Section Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="font-poppins text-3xl font-bold tracking-wider text-white md:text-5xl">
            MEDISIAN
          </h2>
          <p className="mt-2 text-2xl font-bold text-white md:text-4xl">
            경영지원 서비스의 차별성
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 text-center"
        >
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            메디시안은 전문적인 경영 프로세스를 바탕으로
            <br />
            클리닉 개원을 준비하시는 원장님들께 차별화된 병원 경영 지원(MSO)
            서비스를 제공합니다.
          </p>
        </motion.div>

        {/* Circles */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-16"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={scaleIn}
              className="flex flex-col items-center"
            >
              <div className="gradient-circle h-52 w-52 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <div className="gradient-circle-inner p-8">
                  <p className="whitespace-pre-line text-center text-xl font-medium leading-relaxed text-white md:text-2xl">
                    {feature.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
