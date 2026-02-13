"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

const fields = [
  { label: "성명", placeholder: "성명" },
  { label: "생년월일", placeholder: "생년월일" },
  { label: "연락처", placeholder: "연락처" },
  { label: "이메일", placeholder: "이메일" },
  { label: "출신 의과대학", placeholder: "출신 의과대학" },
  { label: "전공과목", placeholder: "전공과목" },
  { label: "면허번호", placeholder: "면허번호" },
  { label: "개원 희망지역", placeholder: "개원 희망지역" },
  { label: "개원 예정시기", placeholder: "개원 예정시기" },
];

const privacyText = `주식회사 메디시안 개인정보처리방침(주식회사 메디시안) (이하 "회사"는) 개인정보 보호법 제30조에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보 처리지침을 수립, 공개합니다.제1조 (수집하는 개인정보의 항목 및 수집방법)
회사는 개인정보의 수집 시 관련법규에 따라 가입 신청 시 또는 이용약관에 그 수집범위 및 목적을 사전 고지합니다. 개인정보 수집 항목은 아래와 같습니다.

1. 홈페이지 가맹점 문의 시 수집항목`;

export default function Inquiry() {
  return (
    <section
      id="inquiry"
      className="relative py-24 md:py-32"
      style={{
        background: "linear-gradient(180deg, #06112a 0%, #0e1c3f 50%, #07112b 100%)",
      }}
    >
      <div className="mx-auto max-w-[1000px] px-6">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-poppins mb-12 text-center text-3xl font-bold tracking-wider text-white md:text-4xl"
        >
          INQUIRY
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Input Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {fields.map((field, i) => (
              <Input
                key={i}
                placeholder={field.placeholder}
                className="border-white/20 bg-white/5 py-6 text-white placeholder:text-white/40 focus:border-cyan/50"
              />
            ))}
          </motion.div>

          {/* Textarea */}
          <motion.div variants={fadeInUp} className="mt-4">
            <Textarea
              placeholder="내용을 입력해주세요."
              className="min-h-[120px] border-white/20 bg-white/5 text-white placeholder:text-white/40 focus:border-cyan/50"
            />
          </motion.div>

          {/* Privacy Policy */}
          <motion.div variants={fadeInUp} className="mt-8">
            <h3 className="mb-3 text-base font-medium text-white">
              개인정보 수집 및 활용 동의
            </h3>
            <div className="h-32 overflow-y-auto rounded-md border border-white/20 bg-white/5 p-4 text-sm leading-relaxed text-white/60">
              {privacyText}
            </div>
            <div className="mt-4 flex items-center gap-2">
              <Checkbox
                id="privacy"
                className="border-white/40 data-[state=checked]:bg-accent-blue"
              />
              <label
                htmlFor="privacy"
                className="text-sm font-medium text-white/70"
              >
                개인정보처리방침안내의 내용에 동의합니다.
              </label>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
            <Button className="rounded-full bg-accent-blue px-12 py-7 text-lg font-medium text-white hover:bg-accent-blue/90">
              가맹 문의하기
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
