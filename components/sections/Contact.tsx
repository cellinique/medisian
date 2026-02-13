"use client";

import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-bg-light py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-poppins mb-12 text-center text-3xl font-bold tracking-wider text-gray-900 md:text-4xl"
        >
          CONTACT US
        </motion.h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Map */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="h-[350px] overflow-hidden rounded-lg shadow-lg lg:h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.7!2d127.0358!3d37.5215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z7ISc7Jq47Yq567OE7IucIOqwleuCqOq1rCDrj4Tsgo7rjIDroZwgMjI4!5e0!3m2!1sko!2skr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="메디시안 위치"
            />
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-center justify-center rounded-lg bg-[#0e1c3f] px-8 py-12 text-center lg:px-12"
          >
            <p className="text-lg font-medium text-white/70">
              셀리앤 가맹점 문의
            </p>
            <div className="mt-6 flex items-center gap-3">
              <Phone className="h-8 w-8 text-white/60" />
              <span className="font-poppins text-4xl font-bold tracking-wider text-white md:text-5xl">
                02-6203-9200
              </span>
            </div>
            <div className="mt-6 flex items-center gap-2">
              <Mail className="h-5 w-5 text-white/50" />
              <span className="text-base text-white/60">
                medisian0708@medisian.co.kr
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
