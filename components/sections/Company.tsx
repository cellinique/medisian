"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
const negativePoints = [
  "당장의 계약에만 급급한 업체들",
  "검증되지 않은 내용의 컨설팅",
  "최신 의료 트렌드와 동떨어진 서비스",
];

const positivePoints = [
  {
    line1: (
      <>
        계약 이후부터 본격적으로 시작되는 메디시안의
      </>
    ),
    line2: (
      <>
        <span className="font-semibold text-blue-600">체계화된 경영 지원 시스템</span>
      </>
    ),
  },
  {
    line1: (
      <>
        <span className="font-semibold text-blue-600">병의원 전문가를 동반한,</span>
      </>
    ),
    line2: <>단계별 매뉴얼화 및 노하우 기반 컨설팅</>,
  },
  {
    line1: (
      <>
        컨설팅 전 과정 동안 <span className="font-semibold text-blue-600">1:1 담당자가, 소통하며,</span>
      </>
    ),
    line2: <>병원의 니즈나 최신 트렌드 즉각 반영</>,
  },
];

export default function Company() {
  return (
    <section
      id="company"
      className="relative overflow-hidden py-28 md:py-40"
      style={{
        background:
          "linear-gradient(180deg, #06112a 0%, #0e1c3f 50%, #07112b 100%)",
      }}
    >
      {/* Background large arc — 레퍼런스 반원 재현 */}
      <div className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
        <div
          className="h-[600px] w-[600px] rounded-full md:h-[900px] md:w-[900px] lg:h-[1100px] lg:w-[1100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(80,120,220,0.12) 0%, rgba(80,120,220,0.04) 50%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1100px] px-6">
        {/* Section Title */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center md:mb-20"
        >
          <p className="text-xs tracking-[0.25em] text-white/40 md:text-sm">
            Medical Total Consulting
          </p>
          <h2 className="mt-4 font-poppins text-3xl font-bold tracking-wider text-blue-400 md:text-5xl">
            MEDISIAN
          </h2>
          <p className="mt-4 text-lg font-medium text-white md:text-2xl">
            <span className="text-blue-400">컨설팅 관리</span> 부터 다릅니다.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-0"
        >
          {/* Left — 공장형 컨설팅사 */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.03] px-8 py-10 backdrop-blur-sm md:rounded-r-none md:px-10 md:py-12">
            <h3 className="mb-10 text-lg font-bold text-white/50 md:text-xl">
              공장형 컨설팅사
            </h3>
            <ul className="space-y-6">
              {negativePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] bg-blue-400/15">
                    <svg
                      className="h-2.5 w-2.5 text-blue-300/50"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm leading-relaxed text-white/35 md:text-[15px]">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — Medisian */}
          <div className="rounded-2xl border border-white/10 bg-white px-8 py-10 shadow-[0_8px_40px_rgba(0,0,0,0.3)] md:rounded-l-none md:px-10 md:py-12">
            <h3 className="mb-10 font-poppins text-lg font-bold tracking-wide text-[#0e1c3f] md:text-xl">
              Medisian
            </h3>
            <ul className="space-y-6">
              {positivePoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3.5">
                  <span className="mt-[3px] flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-[4px] bg-blue-500/10">
                    <svg
                      className="h-2.5 w-2.5 text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-[13px] leading-relaxed text-gray-500 md:text-sm">
                    {point.line1}
                    <br />
                    {point.line2}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
