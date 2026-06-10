'use client';

import { useEffect, useRef } from 'react';
import './scroll-hero-section.css';

export type ShipStickyHeaderProps = {
  items?: string[];
  showFooter?: boolean;
  animate?: boolean;
  hue?: number;
  startVh?: number;
  spaceVh?: number;
  taglineHTML?: string;
};

export function WordHeroPage({
  items = ['design.', 'prototype.', 'solve.', 'build.', 'ship.'],
  showFooter = false,
  animate = true,
  hue = 220,
  startVh = 50,
  spaceVh = 50,
  taglineHTML,
}: ShipStickyHeaderProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    el.style.setProperty('--hue', String(hue));
    el.style.setProperty('--start', `${startVh}vh`);
    el.style.setProperty('--space', `${spaceVh}vh`);
    el.style.setProperty('--count', String(items.length));
  }, [hue, startVh, spaceVh, items.length]);

  return (
    <div
      ref={rootRef}
      className="scroll-hero-root"
      data-animate={String(animate)}
      style={
        {
          '--count': items.length,
          '--start': `${startVh}vh`,
          '--space': `${spaceVh}vh`,
          '--hue': String(hue),
        } as React.CSSProperties
      }
    >
      <header className="fluid">
        <section>
          {/* Sticky label */}
          <h2 aria-hidden="true">Businesses we&nbsp;</h2>

          {/* Cycling industry list */}
          <ul aria-label="Businesses we support">
            {items.map((word, i) => (
              <li key={i} style={{ '--i': i } as React.CSSProperties}>
                {word}
              </li>
            ))}
          </ul>
        </section>
      </header>

      <main>
        <div className="cta-block fluid">
          <p className="cta-headline">
            {taglineHTML ? (
              <span dangerouslySetInnerHTML={{ __html: taglineHTML }} />
            ) : (
              <>Ready to grow?</>
            )}
          </p>
          <div className="cta-buttons">
            <a
              href="https://api.leadconnectorhq.com/widget/booking/74eHTqmVSEjAPyoDlUyl"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-primary"
            >
              Set Up Your Demo
            </a>
            <a href="#pricing" className="btn btn-outline">
              Start Today
            </a>
          </div>
        </div>
      </main>

      {showFooter && (
        <footer>© 2025 KovaCalls</footer>
      )}
    </div>
  );
}

export default WordHeroPage;
