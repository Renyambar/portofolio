import React from 'react';
import { MARQUEE_TICKERS } from '../data/portfolioData';

export const MarqueeBanner: React.FC = () => {
  return (
    <section className="py-6 border-y border-surface-border bg-bg-secondary/60 backdrop-blur-sm overflow-hidden select-none space-y-3">
      {/* Tape 1: Moving Left */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee-left whitespace-nowrap flex items-center">
          {[...MARQUEE_TICKERS.ticker1, ...MARQUEE_TICKERS.ticker1].map((text, idx) => (
            <span
              key={`tape1-${idx}`}
              className="inline-flex items-center mx-4 font-display font-extrabold text-sm sm:text-base tracking-wider uppercase text-fg-primary"
            >
              <span>{text}</span>
              <span className="mx-4 text-accent-primary font-bold">✦</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-1 animate-marquee-left whitespace-nowrap flex items-center" aria-hidden="true">
          {[...MARQUEE_TICKERS.ticker1, ...MARQUEE_TICKERS.ticker1].map((text, idx) => (
            <span
              key={`tape1-dup-${idx}`}
              className="inline-flex items-center mx-4 font-display font-extrabold text-sm sm:text-base tracking-wider uppercase text-fg-primary"
            >
              <span>{text}</span>
              <span className="mx-4 text-accent-primary font-bold">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tape 2: Moving Right with Maroon Accent */}
      <div className="relative flex overflow-x-hidden">
        <div className="py-1 animate-marquee-right whitespace-nowrap flex items-center">
          {[...MARQUEE_TICKERS.ticker2, ...MARQUEE_TICKERS.ticker2].map((text, idx) => (
            <span
              key={`tape2-${idx}`}
              className="inline-flex items-center mx-4 font-mono font-semibold text-xs sm:text-sm tracking-widest uppercase text-accent-primary"
            >
              <span>{text}</span>
              <span className="mx-4 text-fg-muted font-normal">•</span>
            </span>
          ))}
        </div>
        <div className="absolute top-0 py-1 animate-marquee-right whitespace-nowrap flex items-center" aria-hidden="true">
          {[...MARQUEE_TICKERS.ticker2, ...MARQUEE_TICKERS.ticker2].map((text, idx) => (
            <span
              key={`tape2-dup-${idx}`}
              className="inline-flex items-center mx-4 font-mono font-semibold text-xs sm:text-sm tracking-widest uppercase text-accent-primary"
            >
              <span>{text}</span>
              <span className="mx-4 text-fg-muted font-normal">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

