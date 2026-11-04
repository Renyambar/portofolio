import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const { language } = useLanguage();

  useEffect(() => {
    const duration = 1200; // 1.2 seconds for snappy loading
    const intervalTime = 20;
    const steps = duration / intervalTime;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setCount(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          onComplete();
        }, 300);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{
          y: '-100%',
          transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        }}
        className="fixed inset-0 z-50 flex flex-col justify-between p-6 sm:p-12 bg-bg-primary text-fg-primary overflow-hidden border-b border-surface-border selection:bg-transparent pointer-events-auto"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between font-mono text-xs tracking-widest text-fg-secondary">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-primary animate-ping" />
            <span>SYS_INIT // MINIPAOO.WEB.ID</span>
          </div>
          <div>{language === 'id' ? 'MEMUAT SISTEM' : 'INITIALIZING SYSTEM'}</div>
        </div>

        {/* Center Editorial Title */}
        <div className="my-auto text-center space-y-4 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 text-xs font-mono tracking-widest uppercase rounded-full bg-accent-glow text-accent-primary border border-accent-primary/20"
          >
            {language === 'id'
              ? 'Finalis Robotika Nasional KRAI 2026'
              : 'National Robotics Finalist KRAI 2026'}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
          >
            RENY <span className="text-accent-primary">AMBARWATI</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xs sm:text-sm font-mono tracking-widest uppercase text-fg-secondary"
          >
            FULL-STACK WEB &amp; COMPUTER VISION ENGINEER
          </motion.p>
        </div>

        {/* Bottom Progress Bar & Counter */}
        <div className="space-y-3 font-mono">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-fg-muted tracking-wider">
              {language === 'id' ? 'OPTIMASI INFERENSI' : 'INFERENCE READY'}
            </span>
            <span className="text-3xl sm:text-4xl font-extrabold text-accent-primary tabular-nums">
              {count}%
            </span>
          </div>

          <div className="w-full h-1 bg-surface-border rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-accent-primary"
              style={{ width: `${count}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

