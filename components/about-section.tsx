'use client';

import FlowArt, { FlowSection } from '@/components/ui/story-scroll';
import { WordHeroPage } from '@/components/ui/scroll-hero-section';

const INDUSTRIES = [
  'Airbnb Host / Guest Support.',
  'Automotive.',
  'Collections.',
  'Credit Repair.',
  'Home Services.',
  'Human Resources.',
  'Property Management.',
  'Recruiting.',
  'Real Estate.',
  'Sales.',
];

export default function AboutSection() {
  return (
    <>
      <FlowArt aria-label="About KovaCalls">

        {/* 01 — Who We Are */}
        <FlowSection
          aria-label="Who we are"
          style={{ backgroundColor: '#080808', color: '#F0EFE8' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">01 — Who We Are</p>
          <hr className="my-[2vw] border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              New Gen
              <br />
              Marketing.
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-white/10" />
          <div className="flex flex-wrap gap-[4vw] items-end justify-between">
            <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-white/70">
              Founded in <span className="text-white font-semibold">2017 in Columbus, Ohio</span>,
              KovaCalls is a next-generation marketing company built for the AI era. We combine
              cutting-edge artificial intelligence with proven marketing strategies to help businesses
              of every size convert more leads, automate more conversations, and grow faster.
            </p>
            <div className="flex flex-col gap-1 text-right">
              <span className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-none text-[#4D7EFF]">2017</span>
              <span className="text-xs uppercase tracking-widest text-white/40">Est. Columbus, OH</span>
            </div>
          </div>
        </FlowSection>

        {/* 02 — What We Do */}
        <FlowSection
          aria-label="What we do"
          style={{ backgroundColor: '#0a0a0a', color: '#F0EFE8' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-50">02 — What We Do</p>
          <hr className="my-[2vw] border-t border-white/10" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              AI That
              <br />
              Converts.
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-white/10" />
          <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-white/70">
            We deploy intelligent agents across every customer touchpoint — handling conversations,
            qualifying leads, and closing the gap between interest and action, around the clock.
          </p>
          <hr className="my-[2vw] border-t border-white/10" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#4D7EFF]">AI Voice Agents</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/50">
                Inbound and outbound calling agents that qualify leads, handle intake, and run
                campaigns — 24/7, without hold times.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#4D7EFF]">Chat &amp; WebCall</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/50">
                TCPA-compliant chat agents and browser-based voice support deployed directly on
                your website — no phone number needed.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-[#4D7EFF]">AI SEO Optimization</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/50">
                AI-powered search optimization that continuously adapts your content strategy to
                maximize visibility and organic lead flow.
              </p>
            </div>
          </div>
        </FlowSection>

        {/* 03 — Lead Generation */}
        <FlowSection
          aria-label="Lead generation"
          style={{ backgroundColor: '#4D7EFF', color: '#fff' }}
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-70">03 — Lead Generation</p>
          <hr className="my-[2vw] border-t border-white/20" />
          <div>
            <h2 className="text-[clamp(3.5rem,12vw,14rem)] font-bold leading-[0.85] uppercase tracking-tight">
              More
              <br />
              Leads.
              <br />
              Better
              <br />
              Leads.
            </h2>
          </div>
          <hr className="my-[2vw] border-t border-white/20" />
          <p className="max-w-[55ch] text-[clamp(1rem,2.2vw,1.75rem)] font-light leading-relaxed text-white/80">
            Our digital marketing campaigns — across Meta, Google, TikTok, and the Ads Network —
            are supercharged by AI tools designed to maximize conversion at every stage of the funnel.
          </p>
          <hr className="my-[2vw] border-t border-white/20" />
          <div className="flex flex-wrap gap-[3vw]">
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Digital Campaigns</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Targeted paid media on Meta, Google, TikTok &amp; Ads Network with AI-enhanced
                creative and audience targeting.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">Traditional Media</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Partnered with <span className="font-bold text-white">RadioOne</span> to give clients
                access to traditional broadcast media — seamlessly integrated with digital strategy.
              </p>
            </div>
            <div className="min-w-[180px] flex-1">
              <p className="mb-2 text-sm font-bold uppercase tracking-wider">AI Conversion Layer</p>
              <p className="text-[clamp(0.85rem,1.3vw,1.05rem)] leading-relaxed text-white/70">
                Every lead generated flows directly into our AI agents for instant follow-up,
                qualification, and nurture — zero drop-off.
              </p>
            </div>
          </div>
        </FlowSection>

      </FlowArt>

      {/* 04 — Businesses We Support (scroll cycling animation) */}
      <WordHeroPage
        items={INDUSTRIES}
        theme="dark"
        animate={true}
        hue={220}
        startVh={50}
        spaceVh={50}
        showFooter={false}
        taglineHTML="Ready to grow your business?"
      />

    </>
  );
}
