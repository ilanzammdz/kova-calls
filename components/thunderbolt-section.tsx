"use client";

import { motion } from "framer-motion";
import { Zap, TrendingUp, Clock, Target } from "lucide-react";
import DisplayCards from "@/components/ui/display-cards";
import { DotPattern } from "@/components/ui/dot-pattern-1";
import { GradientTracing } from "@/components/ui/gradient-tracing";

const statCards = [
  {
    icon: <Zap className="size-4 text-yellow-300" />,
    title: "9¢ / Min",
    description: "Lowest rate on the market",
    date: "Thunder Ultra V3",
    iconClassName: "text-yellow-500",
    titleClassName: "text-yellow-400",
    className:
      "[grid-area:stack] hover:-translate-y-10 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <Target className="size-4 text-blue-300" />,
    title: "94% Accuracy",
    description: "Industry-leading precision",
    date: "Benchmark tested",
    iconClassName: "text-blue-500",
    titleClassName: "text-blue-400",
    className:
      "[grid-area:stack] translate-x-16 translate-y-10 hover:-translate-y-1 before:absolute before:w-[100%] before:outline-1 before:rounded-xl before:outline-border before:h-[100%] before:content-[''] before:bg-blend-overlay before:bg-background/50 grayscale-[100%] hover:before:opacity-0 before:transition-opacity before:duration-700 hover:grayscale-0 before:left-0 before:top-0",
  },
  {
    icon: <TrendingUp className="size-4 text-purple-300" />,
    title: "96% Efficiency",
    description: "92% response speed",
    date: "Always optimizing",
    iconClassName: "text-purple-500",
    titleClassName: "text-purple-400",
    className:
      "[grid-area:stack] translate-x-32 translate-y-20 hover:translate-y-10",
  },
];

export default function ThunderboltSection() {
  return (
    <section className="relative w-full bg-[#080808] overflow-hidden border-t border-white/5">
      <DotPattern
        width={28}
        height={28}
        cx={1}
        cy={1}
        cr={0.8}
        className="fill-white/[0.03]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-28 lg:py-36">

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-8">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex w-fit items-center gap-2 px-4 py-2 rounded-full border border-[#4D7EFF]/30 bg-[#4D7EFF]/10 text-[#4D7EFF] text-xs font-bold uppercase tracking-widest"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#4D7EFF] animate-ping" />
              Proprietary LLM — Now Live
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-[clamp(3rem,8vw,7rem)] font-black leading-[0.88] tracking-tighter text-white uppercase">
                Thunder
                <br />
                <span className="text-[#4D7EFF]">Ultra V3</span>
                <br />
                Is Here.
              </h2>
            </motion.div>

            {/* Gradient line */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <GradientTracing
                width={420}
                height={4}
                baseColor="#ffffff"
                gradientColors={["#4D7EFF", "#a78bfa", "#4D7EFF"]}
                animationDuration={2.5}
                strokeWidth={2}
                path="M0,2 L420,2"
              />
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#4D7EFF] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#3a6ee8] transition-colors duration-300"
              >
                <Zap className="w-4 h-4" />
                View Pricing
              </a>
              <a
                href="https://api.leadconnectorhq.com/widget/booking/74eHTqmVSEjAPyoDlUyl"
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:border-white/40 hover:bg-white/5 transition-all duration-300"
              >
                Book a Demo
              </a>
            </motion.div>
          </div>

          {/* ── Right: Display cards ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center py-16"
          >
            <DisplayCards cards={statCards} />
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center text-xs text-white/25 max-w-2xl mx-auto leading-relaxed"
        >
          Thunder Ultra is included in all KovaCalls AI plans. LLM usage minutes equal call
          minutes — keeping your costs predictable. OpenAI &amp; Claude also available on select plans.
        </motion.p>
      </div>
    </section>
  );
}
