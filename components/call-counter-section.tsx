"use client";

import * as React from "react";
import { AnimateNumber } from "@/components/ui/animated-blur-number";
import { DotPattern } from "@/components/ui/dot-pattern-1";

// Starting base — feels like a real established company
const BASE_COUNT = 2_847_391;

export default function CallCounterSection() {
  const [count, setCount] = React.useState(BASE_COUNT);

  React.useEffect(() => {
    // Randomize increment: between 1–7 calls every 800–2000ms
    function scheduleNext() {
      const delay = Math.floor(Math.random() * 1200) + 800;
      return setTimeout(() => {
        setCount((v) => v + Math.floor(Math.random() * 7) + 1);
        scheduleNext();
      }, delay);
    }
    const t = scheduleNext();
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative w-full bg-[#080808] border-t border-white/5 overflow-hidden">
      <DotPattern
        width={32}
        height={32}
        cx={1}
        cy={1}
        cr={0.8}
        className="fill-white/[0.025]"
      />

      <div className="relative z-10 flex flex-col items-center justify-center py-28 px-6 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/30 mb-8">
          Total Kova Calls Made
        </p>

        <AnimateNumber
          value={count}
          format={{ useGrouping: true }}
          duration={600}
          blur={18}
          className="text-[clamp(3.5rem,12vw,10rem)] font-black tracking-tighter text-white leading-none"
        />

        <div className="mt-8 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#4D7EFF] animate-ping" />
          <span className="text-xs text-white/25 uppercase tracking-widest font-medium">
            Live
          </span>
        </div>
      </div>
    </section>
  );
}
