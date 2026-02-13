"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import Image from "next/image";

const services = [
  {
    icon: "/images/services/service-01.png",
    title: "개원입지",
    desc: "상권분석, 타당성 평가 등을\n통한 개원입지 컨설팅",
  },
  {
    icon: "/images/services/service-02.png",
    title: "경영 컨설팅 및 지원",
    desc: "개원 후 원활한 운영을 위한 경영\n베이스 구성",
  },
  {
    icon: "/images/services/service-03.png",
    title: "마케팅/홍보",
    desc: "클리닉 규모에 맞는 최적화된\n홍보와 마케팅 프로그램 진행",
  },
  {
    icon: "/images/services/service-04.png",
    title: "진료/서비스 교육",
    desc: "의료진 세미나 및\n1:1 맞춤 교육 실시",
  },
  {
    icon: "/images/services/service-05.png",
    title: "줄기세포 장비 및 소모품",
    desc: "줄기세포 시술에 필요한\n장비와 소모품을 유통",
  },
  {
    icon: "/images/services/service-06.png",
    title: "셀 매니저 양성",
    desc: "줄기세포 추출에 필요한\n셀 매니저 역량 컨설팅",
  },
];

export default function Service() {
  return (
    <section
      id="service"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, #06112a 0%, #0e1c3f 50%, #07112b 100%)",
      }}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="font-poppins text-3xl font-bold tracking-wider text-white md:text-4xl">
            MEDISIAN SERVICE
          </h2>
          <p className="mt-4 text-base text-white/50">
            메디시안이 제공하는 통합 경영지원 서비스
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => {
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-2 ring-white/20">
                  <Image src={service.icon} alt={service.title} width={40} height={40} className="h-10 w-10 object-contain brightness-0 invert" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/50">
                  {service.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
