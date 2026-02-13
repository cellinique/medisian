"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CellReand() {
  return (
    <section id="cellreand" className="relative overflow-hidden">
      {/* Dark background */}
      <div className="bg-[#111111] py-16 text-center">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-poppins text-4xl font-bold tracking-wider text-white md:text-5xl"
        >
          MEDICAL BRAND
        </motion.h2>
      </div>

      {/* Card section */}
      <div className="bg-[#111111] pb-28">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mx-auto max-w-[700px] px-6"
        >
          <Card className="overflow-hidden rounded-3xl border-0 shadow-2xl">
            <CardContent className="flex flex-col items-center px-8 py-16 text-center md:px-16">
              {/* Cellinique Logo */}
              <div className="mb-6 flex flex-col items-center">
                <Image
                  src="/images/logo/cellinique-logo.png"
                  alt="Cellinique Logo"
                  width={120}
                  height={80}
                  className="mb-4 object-contain"
                />
                <h3
                  className="font-cinzel text-4xl font-normal tracking-[0.3em] uppercase md:text-5xl"
                  style={{ color: "#3FABA7" }}
                >
                  CELLINIQUE
                </h3>
                <p className="mt-1 text-sm tracking-[0.3em] text-[#3FABA7]/70">
                  셀리닉 의원
                </p>
              </div>

              <div className="my-6 h-px w-16 bg-gray-200" />

              <p className="text-lg text-gray-500 md:text-xl">
                줄기세포 전문 클리닉에서
              </p>
              <p className="mt-1 text-lg font-bold text-gray-900 md:text-xl">
                &lsquo;어제보다 나은 오늘&rsquo;
                <span className="font-normal text-gray-500">을 경험하세요.</span>
              </p>

              <Button
                className="mt-10 rounded-full bg-accent-blue px-10 py-7 text-lg font-medium text-white hover:bg-accent-blue/90"
                asChild
              >
                <a href="https://cellinique.com" target="_blank" rel="noopener noreferrer">
                  셀리닉 의원 보러가기
                </a>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
