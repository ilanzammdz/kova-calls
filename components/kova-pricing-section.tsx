"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Zap, Info } from "lucide-react";
import { cn } from "@/lib/utils";

// ── AI Plans ──────────────────────────────────────────────────────────────────
const AI_PLANS = [
  {
    id: "standard",
    name: "Standard AI",
    price: 399.99,
    badge: null,
    featured: false,
    includedMinutes: 500,
    setupFee: 199,
    overageRate: "20¢",
    bulkRate: "13¢",
    channels: "Voice Only",
    paymentLink: "https://square.link/u/SOggedVl",
    features: [
      "500 included call minutes (one-time load)",
      "$199 one-time agent setup fee",
      "20¢/min after 500 mins",
      "Bulk rates as low as 13¢/min",
      "Thunder Ultra V3 LLM included",
      "OpenAI & Claude available",
      "24/7 AI voice agent",
      "Basic analytics dashboard",
    ],
  },
  {
    id: "plus",
    name: "Plus AI",
    price: 499.99,
    badge: "Popular",
    featured: true,
    includedMinutes: 1000,
    setupFee: null,
    overageRate: "16¢",
    bulkRate: "12¢",
    channels: "Voice & Chat",
    paymentLink: "https://square.link/u/lCCcHzJk",
    features: [
      "1,000 included call minutes (one-time load)",
      "16¢/min after 1,000 mins",
      "Bulk rates as low as 12¢/min",
      "Thunder Ultra V3 LLM included",
      "OpenAI & Claude available",
      "Voice & Chat AI agents",
      "24/7 coverage",
      "Advanced analytics & reporting",
    ],
  },
  {
    id: "premium",
    name: "Premium AI",
    price: 799.99,
    badge: "Best Value",
    featured: false,
    includedMinutes: 2000,
    setupFee: null,
    overageRate: "13¢",
    bulkRate: "11¢",
    channels: "Voice, Chat & Web",
    paymentLink: "https://square.link/u/uRNqLApH",
    features: [
      "2,000 included call minutes (one-time load)",
      "13¢/min after 2,000 mins",
      "Bulk rates as low as 11¢/min",
      "Thunder Ultra V3 LLM included",
      "OpenAI & Claude available",
      "Voice, Chat & Web AI agents",
      "Priority 24/7 support",
      "Full analytics suite",
    ],
  },
  {
    id: "whitelabel",
    name: "Whitelabel",
    price: 1999.99,
    badge: "Enterprise",
    featured: false,
    includedMinutes: null,
    setupFee: null,
    overageRate: null,
    bulkRate: null,
    channels: "Voice, Chat & Web",
    paymentLink: "https://square.link/u/YsoJaTZM",
    features: [
      "Whitelabel our full platform",
      "Resell to your own clients",
      "Base rate 11¢/min",
      "Thunder Ultra V3 LLM included",
      "OpenAI & Claude available",
      "Voice, Chat & Web AI agents",
      "Dedicated account manager",
      "Custom branding & domain",
    ],
  },
];

// ── Lead Gen Plans ─────────────────────────────────────────────────────────────
const LEAD_GEN_PLANS = [
  {
    id: "base",
    name: "Lead Generation",
    price: 899,
    badge: null,
    featured: false,
    platforms: ["Meta", "Google"],
    platformNote: "1 Platform: Meta or Google",
    adspendMatch: null,
    paymentLink: "https://square.link/u/znhNZ7ej",
    features: [
      "1 platform: Meta or Google",
      "Campaign setup & management",
      "Brand kit creation",
      "Logo design or SVG conversion",
      "Weekly creative design",
      "Up to 3 revisions/month",
      "Up to 7 posts & 3 reels/month",
      "Client covers ad spend",
    ],
    note: "Requires access to business portfolio as authorized ad agency.",
  },
  {
    id: "plus",
    name: "Lead Gen Plus",
    price: 1499,
    badge: "Most Popular",
    featured: true,
    platforms: ["Meta", "Google", "TikTok", "Ads Network"],
    platformNote: "All 4 Platforms",
    adspendMatch: 500,
    paymentLink: "https://square.link/u/5fYDmF6q",
    features: [
      "All 4 platforms: Meta, Google, TikTok & Ads Network",
      "Vicinity reach leads at no extra cost",
      "We match your ad spend up to $500",
      "Campaign setup & management",
      "Brand kit + logo design or SVG conversion",
      "Weekly creative design, up to 3 revisions",
      "Up to 15 posts & reels/month",
      "Comment campaign nurture setup",
    ],
    note: "Requires access to business portfolio as authorized ad agency.",
  },
  {
    id: "pro",
    name: "Lead Gen Pro",
    price: 2500,
    badge: "Full Service",
    featured: false,
    platforms: ["Meta", "Google", "TikTok", "Ads Network"],
    platformNote: "All 4 Platforms",
    adspendMatch: 750,
    paymentLink: "https://square.link/u/qugPbwu0",
    features: [
      "All 4 platforms: Meta, Google, TikTok & Ads Network",
      "$500 ad spend credit included",
      "We match your ad spend up to $750",
      "Campaign setup & management",
      "Brand kit + logo design or SVG conversion",
      "Weekly creative design, unlimited revisions",
      "Up to 30 posts & reels/month",
      "Comment campaign nurture setup",
      "Inbox messaging & follow-up campaigns",
      "Retargeting campaigns",
      "Custom pixel integration",
      "UGC & BGC content included",
    ],
    note: "Requires access to business portfolio as authorized ad agency.",
  },
];

const MINUTE_DISCLAIMER =
  "Call minutes ≠ LLM usage minutes. When using Thunder Ultra V3, your LLM usage minute equals your call minute. OpenAI & Claude plans may consume more LLM minutes per call, increasing effective cost.";

// ── Card Components ────────────────────────────────────────────────────────────

function AiPlanCard({ plan, index }: { plan: (typeof AI_PLANS)[0]; index: number }) {
  const isWhitelabel = plan.id === "whitelabel";

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300",
        plan.featured
          ? "border-[#4D7EFF] bg-[#0d1529] shadow-2xl shadow-[#4D7EFF]/20 scale-[1.02]"
          : isWhitelabel
          ? "border-white/10 bg-[#0e0e0e]"
          : "border-white/8 bg-[#0d0d0d]",
      )}
    >
      {/* Featured glow */}
      {plan.featured && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#4D7EFF]/5" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full",
              plan.featured
                ? "bg-[#4D7EFF] text-white"
                : plan.badge === "Enterprise"
                ? "bg-white/10 text-white/70 border border-white/15"
                : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/25",
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <p className="text-xs font-bold uppercase tracking-widest text-white/35 mb-3">
          {plan.channels}
        </p>
        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-4xl font-black text-white tracking-tighter">
            ${plan.price.toFixed(2)}
          </span>
          <span className="text-white/40 text-sm">/mo</span>
        </div>

        {plan.setupFee && (
          <p className="text-xs text-white/35 mt-1">+ ${plan.setupFee} one-time setup</p>
        )}
        {plan.includedMinutes && (
          <p className="text-sm text-[#4D7EFF] font-medium mt-2">
            {plan.includedMinutes.toLocaleString()} minutes included (one-time)
          </p>
        )}
        {isWhitelabel && (
          <p className="text-sm text-white/50 mt-2">Resell & white-label our platform</p>
        )}
      </div>

      {/* Overage row */}
      {plan.overageRate && (
        <div className="mx-6 mb-4 px-3 py-2.5 rounded-lg bg-white/4 border border-white/8 flex items-center justify-between text-xs">
          <span className="text-white/45">Overage rate</span>
          <span className="text-white font-semibold">
            {plan.overageRate}/min
            <span className="text-white/35 font-normal ml-1">
              (bulk to {plan.bulkRate})
            </span>
          </span>
        </div>
      )}

      {isWhitelabel && (
        <div className="mx-6 mb-4 px-3 py-2.5 rounded-lg bg-white/4 border border-white/8 flex items-center justify-between text-xs">
          <span className="text-white/45">Base minute rate</span>
          <span className="text-white font-semibold">11¢/min</span>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 pb-4">
        <a
          href={plan.paymentLink}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300",
            plan.featured
              ? "bg-[#4D7EFF] text-white hover:bg-[#3a6ee8]"
              : "bg-white/8 text-white hover:bg-white/14 border border-white/10",
          )}
        >
          <Zap className="w-4 h-4" />
          Get Started
        </a>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-white/6 mb-4" />

      {/* Features */}
      <div className="px-6 pb-6 flex flex-col gap-2.5 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-1">
          What&apos;s included
        </p>
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <Check
              className={cn(
                "w-4 h-4 flex-shrink-0 mt-0.5",
                plan.featured ? "text-[#4D7EFF]" : "text-emerald-500",
              )}
            />
            <span className="text-sm text-white/65 leading-snug">{f}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function LeadGenCard({
  plan,
  index,
}: {
  plan: (typeof LEAD_GEN_PLANS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={cn(
        "relative flex flex-col rounded-2xl border overflow-hidden transition-all duration-300",
        plan.featured
          ? "border-[#4D7EFF] bg-[#0d1529] shadow-2xl shadow-[#4D7EFF]/20 scale-[1.02]"
          : "border-white/8 bg-[#0d0d0d]",
      )}
    >
      {plan.featured && (
        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[#4D7EFF]/5" />
      )}

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full",
              plan.featured
                ? "bg-[#4D7EFF] text-white"
                : "bg-white/10 text-white/60 border border-white/15",
            )}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        {/* Platform chips */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {plan.platforms.map((p) => (
            <span
              key={p}
              className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-white/6 text-white/50 border border-white/8"
            >
              {p}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
        <div className="flex items-baseline gap-1 mt-3">
          <span className="text-4xl font-black text-white tracking-tighter">
            ${plan.price.toLocaleString()}
          </span>
          <span className="text-white/40 text-sm">/mo</span>
        </div>
        <p className="text-xs text-white/35 mt-1">Client covers ad spend</p>
      </div>

      {/* Ad spend match banner */}
      {plan.adspendMatch && (
        <div
          className={cn(
            "mx-6 mb-4 px-3 py-2.5 rounded-lg flex items-center justify-between text-xs border",
            plan.featured
              ? "bg-[#4D7EFF]/12 border-[#4D7EFF]/30"
              : "bg-emerald-500/8 border-emerald-500/20",
          )}
        >
          <span className="text-white/50">We match your ad spend up to</span>
          <span
            className={cn(
              "font-bold",
              plan.featured ? "text-[#4D7EFF]" : "text-emerald-400",
            )}
          >
            ${plan.adspendMatch.toLocaleString()}
          </span>
        </div>
      )}

      {/* CTA */}
      <div className="px-6 pb-4">
        <a
          href={plan.paymentLink}
          target="_blank"
          rel="noreferrer noopener"
          className={cn(
            "w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300",
            plan.featured
              ? "bg-[#4D7EFF] text-white hover:bg-[#3a6ee8]"
              : "bg-white/8 text-white hover:bg-white/14 border border-white/10",
          )}
        >
          <Zap className="w-4 h-4" />
          Get Started
        </a>
      </div>

      {/* Divider */}
      <div className="mx-6 border-t border-white/6 mb-4" />

      {/* Features */}
      <div className="px-6 pb-5 flex flex-col gap-2.5 flex-1">
        <p className="text-[11px] font-bold uppercase tracking-widest text-white/25 mb-1">
          What&apos;s included
        </p>
        {plan.features.map((f, i) => (
          <div key={i} className="flex items-start gap-2.5">
            <Check
              className={cn(
                "w-4 h-4 flex-shrink-0 mt-0.5",
                plan.featured ? "text-[#4D7EFF]" : "text-emerald-500",
              )}
            />
            <span className="text-sm text-white/65 leading-snug">{f}</span>
          </div>
        ))}
      </div>

      {/* Legal note */}
      <div className="mx-6 mb-5 px-3 py-2 rounded-lg bg-white/3 border border-white/6">
        <p className="text-[11px] text-white/30 leading-relaxed">{plan.note}</p>
      </div>
    </motion.div>
  );
}

// ── Main Section ───────────────────────────────────────────────────────────────

type Tab = "ai" | "leadgen";

export default function KovaPricingSection() {
  const [activeTab, setActiveTab] = useState<Tab>("ai");

  return (
    <section
      id="pricing"
      className="relative w-full bg-[#060606] border-t border-white/5 overflow-hidden py-20 lg:py-28"
    >
      {/* Subtle radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-[#4D7EFF]/6 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4D7EFF]/30 bg-[#4D7EFF]/10 text-[#4D7EFF] text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4D7EFF] animate-ping" />
            Simple, Transparent Pricing
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-white leading-tight mb-4">
            Plans Built for
            <br />
            <span className="text-[#4D7EFF]">Every Business</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed">
            From solo operators to enterprise resellers — pick the plan that
            matches how you grow.
          </p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex justify-center mb-12"
        >
          <div className="relative flex bg-white/5 border border-white/10 rounded-2xl p-1.5 gap-1">
            {(
              [
                { id: "ai" as Tab, label: "AI Voice & Chat Plans" },
                { id: "leadgen" as Tab, label: "Lead Generation Plans" },
              ] as const
            ).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "relative z-10 px-6 py-2.5 rounded-xl text-sm font-bold tracking-wide transition-all duration-300",
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/40 hover:text-white/70",
                )}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="tab-pill"
                    className="absolute inset-0 bg-[#4D7EFF] rounded-xl -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          {activeTab === "ai" ? (
            <motion.div
              key="ai"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 items-start">
                {AI_PLANS.map((plan, i) => (
                  <AiPlanCard key={plan.id} plan={plan} index={i} />
                ))}
              </div>

              {/* LLM minute disclaimer */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 flex items-start gap-3 max-w-3xl mx-auto bg-white/3 border border-white/8 rounded-xl px-5 py-4"
              >
                <Info className="w-4 h-4 text-[#4D7EFF] flex-shrink-0 mt-0.5" />
                <p className="text-xs text-white/40 leading-relaxed">
                  {MINUTE_DISCLAIMER}
                </p>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="leadgen"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start max-w-5xl mx-auto">
                {LEAD_GEN_PLANS.map((plan, i) => (
                  <LeadGenCard key={plan.id} plan={plan} index={i} />
                ))}
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-center text-xs text-white/25 max-w-2xl mx-auto leading-relaxed"
              >
                All lead generation plans require authorized access to your Meta
                Business Portfolio or Google Ads account. Ad spend is not included
                unless stated.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/35 text-sm mb-5">
            Not sure which plan fits? Talk to our team — we&apos;ll recommend the
            right setup for your business.
          </p>
          <a
            href="https://api.leadconnectorhq.com/widget/booking/74eHTqmVSEjAPyoDlUyl"
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#4D7EFF] text-white rounded-xl font-bold text-sm uppercase tracking-wider hover:bg-[#3a6ee8] transition-colors duration-300"
          >
            <Zap className="w-4 h-4" />
            Book a Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
