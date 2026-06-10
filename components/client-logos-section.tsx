"use client";

import { motion } from "motion/react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";

const CLIENT_LOGOS = [
  { src: "/clients/5.png",  alt: "Indalum" },
  { src: "/clients/6.png",  alt: "Güntner" },
  { src: "/clients/7.png",  alt: "Panduit" },
  { src: "/clients/9.png",  alt: "Daylight" },
  { src: "/clients/10.png", alt: "SPRTN Energy" },
  { src: "/clients/11.png", alt: "UV Energy" },
  { src: "/clients/12.png", alt: "Elite Seal Roofing" },
  { src: "/clients/13.png", alt: "HomePro Roofing and Solar" },
  { src: "/clients/14.png", alt: "Illinois Energy Savings Advisors" },
  { src: "/clients/15.png", alt: "US Energy Consultants" },
  { src: "/clients/16.png", alt: "Southern California Energy" },
  { src: "/clients/17.png", alt: "Quality Solar" },
  { src: "/clients/18.png", alt: "Danone" },
  { src: "/clients/19.png", alt: "Daltile" },
];

export default function ClientLogosSection() {
  return (
    <section className="relative w-full bg-white border-t border-black/8 py-14 overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-black/30 mb-3"
        >
          Trusted by industry leaders
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto h-px max-w-xs bg-gradient-to-r from-transparent via-black/12 to-transparent"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <LogoCloud logos={CLIENT_LOGOS} speed={60} speedOnHover={20} gap={64} />
      </motion.div>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-8 h-px max-w-xs bg-gradient-to-r from-transparent via-black/12 to-transparent"
      />
    </section>
  );
}
