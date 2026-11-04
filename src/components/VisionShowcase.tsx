import React, { useState } from 'react';
import { SlidersHorizontal, Activity, Zap, Cpu, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VISION_SHOWCASE_DATA } from '../data/portfolioData';

export const VisionShowcase: React.FC = () => {
  const { language, t } = useLanguage();
  const [sliderPos, setSliderPos] = useState<number>(65); // 0 to 100%
  const [activeTab, setActiveTab] = useState<'slider' | 'side-by-side'>('slider');

  const raw = VISION_SHOWCASE_DATA.raw;
  const ai = VISION_SHOWCASE_DATA.ai;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-accent-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-accent-primary" />
              <span>{language === 'id' ? 'RISET & INTERAKTIF' : 'INTERACTIVE RESEARCH'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-fg-primary tracking-tight">
              {language === 'id' ? 'DARI FEED MENTAH KE' : 'FROM RAW SENSOR TO'}{' '}
              <span className="text-accent-primary">
                {language === 'id' ? 'VISI CERDAS' : 'EDGE INTELLIGENCE'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary max-w-2xl">
              {language === 'id'
                ? 'Simulasi pipeline optimasi Computer Vision Reny pada Robot ABUROBONEMA KRAI 2026. Geser slider untuk melihat transformasi sebelum & sesudah akselerasi INT8/TensorRT.'
                : "Simulation of Reny's Computer Vision pipeline for the ABUROBONEMA KRAI 2026 robot. Drag the slider to witness the real-time difference between raw and INT8/TensorRT accelerated inference."}
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-bg-secondary border border-surface-border">
            <button
              onClick={() => setActiveTab('slider')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'slider'
                  ? 'bg-accent-primary text-white shadow-sm'
                  : 'text-fg-secondary hover:text-fg-primary'
              }`}
            >
              {language === 'id' ? 'Slider Interaktif' : 'Interactive Slider'}
            </button>
            <button
              onClick={() => setActiveTab('side-by-side')}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-all ${
                activeTab === 'side-by-side'
                  ? 'bg-accent-primary text-white shadow-sm'
                  : 'text-fg-secondary hover:text-fg-primary'
              }`}
            >
              {language === 'id' ? 'Bandingkan Langsung' : 'Side-by-Side'}
            </button>
          </div>
        </div>

        {/* Showcase Container */}
        {activeTab === 'slider' ? (
          <div className="rounded-3xl border border-surface-border bg-card-bg shadow-2xl overflow-hidden">
            {/* Top Telemetry Bar */}
            <div className="px-4 sm:px-6 py-3.5 bg-obsidian-950 text-cream-50 border-b border-obsidian-800 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>ROS 2 HUMBLE: ONLINE</span>
                </span>
                <span className="hidden sm:inline text-obsidian-800">|</span>
                <span className="hidden sm:inline text-cream-300">NODE: /aburobo/vision_detector</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-amber-400 flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>3.8x ACCELERATED</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-accent-primary text-white font-bold text-[10px]">
                  INT8 QUANTIZED
                </span>
              </div>
            </div>

            {/* Interactive Viewport Area */}
            <div className="relative h-[360px] xs:h-[420px] sm:h-[480px] md:h-[500px] w-full select-none overflow-hidden bg-obsidian-900">
              {/* Synthetic Robot Arena Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-obsidian-950 via-[#181114] to-obsidian-950">
                {/* Arena Grid Floor */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FAF6F0_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px]" />
                
                {/* Synthetic Arena Elements */}
                <div className="absolute top-[22%] left-[12%] sm:left-[20%] w-36 sm:w-48 h-44 sm:h-56 rounded-2xl border border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 sm:p-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-xl bg-accent-primary/30 flex items-center justify-center mb-2">
                    <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-cream-100" />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-cream-300 text-center">ROBOT CHASSIS TARGET</span>
                </div>

                <div className="absolute top-[15%] right-[10%] sm:right-[18%] w-32 sm:w-44 h-48 sm:h-64 rounded-2xl border border-dashed border-white/20 bg-white/5 backdrop-blur-[2px] flex flex-col items-center justify-center p-3 sm:p-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-emerald-500/30 flex items-center justify-center mb-2">
                    <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" />
                  </div>
                  <span className="font-mono text-[9px] sm:text-[10px] text-cream-300 text-center">ARENA GOAL POST</span>
                </div>
              </div>

              {/* LAYER 1: Raw Unaccelerated Feed (Base Layer) */}
              <div className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between pointer-events-none filter blur-[0.6px] saturate-75">
                {/* Raw HUD info */}
                <div className="inline-flex self-start items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-red-950/80 border border-red-500/40 text-red-200 font-mono text-[10px] sm:text-xs backdrop-blur-sm">
                  <AlertTriangle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-400 shrink-0" />
                  <span>{t(raw.badge)}: {raw.fps}</span>
                </div>

                <div className="max-w-[220px] xs:max-w-[280px] sm:max-w-md p-2.5 sm:p-4 rounded-xl bg-obsidian-950/90 border border-obsidian-800 text-cream-200 font-mono text-[10px] sm:text-xs space-y-1">
                  <p className="font-bold text-red-400">{t(raw.status)}</p>
                  <p className="text-[9px] sm:text-[11px] text-cream-400 line-clamp-2 sm:line-clamp-none">{t(raw.details)}</p>
                </div>
              </div>

              {/* LAYER 2: AI Accelerated Vision HUD (Revealed via Clip Path) */}
              <div
                className="absolute inset-0 p-3 sm:p-6 flex flex-col justify-between pointer-events-none"
                style={{
                  clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
                }}
              >
                {/* AI HUD Overlay with Bounding Boxes */}
                {ai.detections.map((det, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${det.box} border-2 rounded-lg ${det.color} transition-all pointer-events-none flex flex-col justify-between p-1 sm:p-1.5 shadow-lg shadow-maroon-900/30`}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`px-1 py-0.2 sm:px-1.5 sm:py-0.5 rounded text-[8px] sm:text-[10px] font-mono font-bold ${det.badgeColor} truncate max-w-[70px] sm:max-w-none`}>
                        {det.label}
                      </span>
                      <span className="font-mono text-[9px] sm:text-[11px] font-extrabold text-cream-50 bg-obsidian-950/80 px-1 rounded">
                        {det.conf}
                      </span>
                    </div>
                    {/* Bounding Box Corner Reticle Crosshairs */}
                    <div className="font-mono text-[8px] sm:text-[9px] text-cream-300 flex justify-between">
                      <span>87.6 FPS</span>
                      <span>INT8</span>
                    </div>
                  </div>
                ))}

                {/* Top AI HUD Telemetry */}
                <div className="inline-flex self-end items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 font-mono text-[10px] sm:text-xs backdrop-blur-sm">
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400 shrink-0" />
                  <span>{t(ai.badge)}: {ai.fps}</span>
                </div>

                {/* Bottom AI Status HUD */}
                <div className="self-end max-w-[220px] xs:max-w-[280px] sm:max-w-md p-2.5 sm:p-4 rounded-xl bg-obsidian-950/95 border border-accent-primary/60 text-cream-50 font-mono text-[10px] sm:text-xs space-y-1 shadow-2xl">
                  <div className="flex items-center justify-between text-accent-primary font-bold">
                    <span className="truncate">{t(ai.status)}</span>
                    <span className="text-emerald-400 shrink-0 ml-1">{ai.speedup}</span>
                  </div>
                  <p className="text-[9px] sm:text-[11px] text-cream-300 line-clamp-2 sm:line-clamp-none">{t(ai.details)}</p>
                </div>
              </div>

              {/* Slider Draggable Divider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-30 shadow-[0_0_15px_rgba(255,255,255,0.8)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent-primary border-2 border-white flex items-center justify-center text-white shadow-xl">
                  <SlidersHorizontal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
              </div>

              {/* Hidden Range Input for full touch/mouse drag */}
              <input
                type="range"
                min="5"
                max="95"
                value={sliderPos}
                onChange={(e) => setSliderPos(Number(e.target.value))}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-40 touch-none"
                aria-label="Raw vs AI Vision Comparison Slider"
              />
            </div>

            {/* Bottom Comparison Metrics Bar */}
            <div className="p-4 sm:p-6 bg-bg-secondary grid grid-cols-2 md:grid-cols-4 gap-4 text-center border-t border-surface-border">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">Frame Rate (FPS)</span>
                <div className="font-display text-lg sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-red-500/70 text-sm">18 FPS</span>
                  <span>→</span>
                  <span className="text-emerald-600 dark:text-emerald-400">87.6 FPS</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">Inference Latency</span>
                <div className="font-display text-lg sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-red-500/70 text-sm">54.2 ms</span>
                  <span>→</span>
                  <span className="text-emerald-600 dark:text-emerald-400">11.4 ms</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">Precision Format</span>
                <div className="font-display text-lg sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-fg-muted text-sm">FP32</span>
                  <span>→</span>
                  <span className="text-accent-primary">INT8 Quant</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">VRAM / RAM Footprint</span>
                <div className="font-display text-lg sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-red-500/70 text-sm">382 MB</span>
                  <span>→</span>
                  <span className="text-emerald-600 dark:text-emerald-400">98 MB (-74%)</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Side by side comparison view */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Raw card */}
            <div className="rounded-3xl border border-red-500/30 bg-card-bg p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-red-950/20 text-red-600 dark:text-red-400 font-mono text-xs font-bold border border-red-500/30">
                  {t(raw.badge)}
                </span>
                <span className="font-mono text-xs font-bold text-red-500">{raw.fps}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-fg-primary">{t(raw.title)}</h3>
              <p className="text-xs text-fg-secondary leading-relaxed">{t(raw.details)}</p>
              <div className="p-3 rounded-xl bg-bg-secondary font-mono text-xs space-y-1 text-fg-secondary">
                <div>• Latency: {raw.latency}</div>
                <div>• Precision: {raw.precision}</div>
                <div>• Footprint: {raw.memory}</div>
              </div>
            </div>

            {/* AI Accelerated card */}
            <div className="rounded-3xl border border-accent-primary bg-card-bg p-6 space-y-4 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-accent-primary text-white font-mono text-[10px] font-bold rounded-bl-xl">
                {ai.speedup}
              </div>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-md bg-accent-glow text-accent-primary font-mono text-xs font-bold border border-accent-primary/30">
                  {t(ai.badge)}
                </span>
                <span className="font-mono text-xs font-bold text-emerald-500">{ai.fps}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-fg-primary">{t(ai.title)}</h3>
              <p className="text-xs text-fg-secondary leading-relaxed">{t(ai.details)}</p>
              <div className="p-3 rounded-xl bg-bg-secondary font-mono text-xs space-y-1 text-fg-secondary">
                <div>• Latency: <strong className="text-emerald-500">{ai.latency}</strong></div>
                <div>• Precision: <strong className="text-accent-primary">{ai.precision}</strong></div>
                <div>• Footprint: <strong className="text-emerald-500">{ai.memory}</strong></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
