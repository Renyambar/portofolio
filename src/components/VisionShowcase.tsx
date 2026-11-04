import React, { useState } from 'react';
import { SlidersHorizontal, Activity, CheckCircle2, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { VISION_SHOWCASE_DATA } from '../data/portfolioData';
import { TechLogo } from './TechLogo';

export const VisionShowcase: React.FC = () => {
  const { language, t } = useLanguage();
  const [sliderPos, setSliderPos] = useState<number>(60);
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
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              <span>{language === 'id' ? 'RISET OTONOM KRAI 2026' : 'KRAI 2026 AUTONOMOUS ROBOTICS'}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-fg-primary tracking-tight">
              {language === 'id' ? 'DARI FEED MENTAH KE' : 'FROM RAW SENSOR TO'}{' '}
              <span className="text-accent-primary">
                {language === 'id' ? 'VISI CERDAS' : 'EDGE INTELLIGENCE'}
              </span>
            </h2>
            <p className="text-sm sm:text-base text-fg-secondary max-w-2xl">
              {language === 'id'
                ? 'Simulasi pipeline inferensi Computer Vision Reny pada robot ABUROBONEMA. Mengubah inferensi FP32 yang lambat menjadi INT8 TensorRT berkecepatan tinggi.'
                : "Interactive simulation of Reny's Computer Vision pipeline for the ABUROBONEMA robot. Benchmarking FP32 baseline latency against INT8 TensorRT accelerated inference."}
            </p>
          </div>

          {/* Mode Switcher Buttons */}
          <div className="flex items-center gap-2 p-1 rounded-xl bg-bg-secondary border border-surface-border self-start md:self-auto">
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
            <div className="px-4 sm:px-6 py-3 bg-obsidian-950 text-cream-50 border-b border-obsidian-800 flex flex-wrap items-center justify-between gap-3 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                  <Activity className="w-4 h-4 animate-pulse" />
                  <span>ROS 2 HUMBLE: /aburobo/vision_detector</span>
                </span>
                <span className="hidden md:inline text-obsidian-800">|</span>
                <span className="hidden md:inline text-cream-300">TOPIC: /camera/color/image_raw</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 bg-obsidian-900 px-2.5 py-1 rounded-md border border-obsidian-800">
                  <TechLogo name="YOLOv8" size={14} className="text-accent-primary" />
                  <span className="text-[11px] font-bold text-cream-200">YOLOv8 + TensorRT</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-accent-primary text-white font-bold text-[10px]">
                  INT8 QUANT
                </span>
              </div>
            </div>

            {/* Interactive Viewport Area */}
            <div className="relative h-[380px] xs:h-[440px] sm:h-[500px] w-full select-none overflow-hidden bg-[#0A0809]">
              {/* Synthetic Real-World Robotics Camera Field Perspective */}
              <div className="absolute inset-0 overflow-hidden">
                {/* Arena Grid Surface */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F0B0D] via-[#140E11] to-[#0D090B]">
                  {/* Perspective Floor Grid */}
                  <div
                    className="absolute inset-0 opacity-25"
                    style={{
                      backgroundImage: `
                        linear-gradient(to right, rgba(250, 246, 240, 0.15) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(250, 246, 240, 0.15) 1px, transparent 1px)
                      `,
                      backgroundSize: '40px 40px',
                    }}
                  />

                  {/* Arena Tape Lines & Robot Navigation Trajectory */}
                  <svg className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="10%" y1="90%" x2="45%" y2="50%" stroke="#B83246" strokeWidth="2" strokeDasharray="6 4" />
                    <line x1="90%" y1="90%" x2="65%" y2="40%" stroke="#FAF6F0" strokeWidth="2" strokeDasharray="4 4" />
                    <circle cx="50%" cy="50%" r="90" stroke="rgba(250, 246, 240, 0.2)" strokeWidth="1.5" fill="none" />
                    <circle cx="50%" cy="50%" r="4" fill="#B83246" />
                  </svg>

                  {/* Silo 1 Graphic */}
                  <div className="absolute top-[28%] left-[22%] sm:left-[26%] w-24 sm:w-32 h-36 sm:h-48 rounded-xl bg-gradient-to-t from-obsidian-900 to-obsidian-800/80 border border-obsidian-700/60 shadow-xl flex flex-col items-center justify-between p-3">
                    <div className="w-full h-2 rounded bg-accent-primary/60" />
                    <div className="space-y-1.5 w-full">
                      <div className="w-7 h-7 mx-auto rounded-full bg-red-600/60 border border-red-400" />
                      <div className="w-7 h-7 mx-auto rounded-full bg-blue-600/60 border border-blue-400" />
                    </div>
                    <span className="font-mono text-[9px] text-cream-300">SILO #01</span>
                  </div>

                  {/* Goal Barrier Graphic */}
                  <div className="absolute top-[22%] right-[16%] sm:right-[20%] w-20 sm:w-28 h-44 sm:h-56 rounded-xl bg-gradient-to-t from-obsidian-900 to-obsidian-800/80 border border-obsidian-700/60 shadow-xl flex flex-col items-center justify-between p-3">
                    <div className="w-full h-3 rounded bg-emerald-500/60" />
                    <div className="w-10 h-10 rounded-full bg-emerald-700/40 border border-emerald-400 flex items-center justify-center font-mono text-[10px] text-cream-100">
                      GOAL
                    </div>
                    <span className="font-mono text-[9px] text-cream-300">TARGET #02</span>
                  </div>

                  {/* Ball Graphic on Floor */}
                  <div className="absolute bottom-[20%] left-[45%] w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 to-amber-400 border border-amber-300 shadow-lg shadow-amber-500/20" />
                </div>
              </div>

              {/* LAYER 1: Raw Unaccelerated Feed (Base Layer) */}
              <div className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none filter blur-[0.8px] brightness-90">
                {/* Camera OSD header */}
                <div className="inline-flex self-start items-center gap-2 px-3 py-1.5 rounded-lg bg-red-950/85 border border-red-500/50 text-red-200 font-mono text-xs backdrop-blur-sm">
                  <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                  <span>{t(raw.badge)}: {raw.fps} ({raw.latency})</span>
                </div>

                <div className="max-w-[240px] xs:max-w-[280px] sm:max-w-md p-3 sm:p-4 rounded-xl bg-obsidian-950/90 border border-obsidian-800 text-cream-200 font-mono text-[10px] sm:text-xs space-y-1">
                  <p className="font-bold text-red-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
                    <span>{t(raw.status)}</span>
                  </p>
                  <p className="text-[10px] sm:text-[11px] text-cream-400 leading-snug">{t(raw.details)}</p>
                </div>
              </div>

              {/* LAYER 2: AI Accelerated Vision HUD (Revealed via Clip Path) */}
              <div
                className="absolute inset-0 p-4 sm:p-6 flex flex-col justify-between pointer-events-none"
                style={{
                  clipPath: `polygon(${sliderPos}% 0, 100% 0, 100% 100%, ${sliderPos}% 100%)`,
                }}
              >
                {/* Professional Bounding Boxes with Class and Confidence */}
                {/* Box 1: Silo Target */}
                <div className="absolute top-[26%] left-[21%] sm:left-[25%] w-28 sm:w-36 h-40 sm:h-52 border-2 border-accent-primary bg-accent-glow/20 rounded-lg p-1.5 flex flex-col justify-between shadow-lg shadow-maroon-900/40">
                  <div className="flex items-center justify-between">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-accent-primary text-white">
                      silo_target: 98.4%
                    </span>
                    <span className="font-mono text-[9px] text-accent-primary font-bold bg-obsidian-950/90 px-1 rounded">
                      ID:#01
                    </span>
                  </div>
                  {/* Reticle corner marks */}
                  <div className="font-mono text-[8px] text-cream-300 flex justify-between bg-obsidian-950/80 px-1 py-0.5 rounded">
                    <span>x:210 y:140</span>
                    <span>INT8: 2.1ms</span>
                  </div>
                </div>

                {/* Box 2: Goal Post */}
                <div className="absolute top-[20%] right-[15%] sm:right-[19%] w-24 sm:w-32 h-48 sm:h-60 border-2 border-emerald-500 bg-emerald-950/20 rounded-lg p-1.5 flex flex-col justify-between shadow-lg shadow-emerald-900/40">
                  <div className="flex items-center justify-between">
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-bold bg-emerald-600 text-white">
                      goal_zone: 96.2%
                    </span>
                    <span className="font-mono text-[9px] text-emerald-400 font-bold bg-obsidian-950/90 px-1 rounded">
                      ID:#02
                    </span>
                  </div>
                  <div className="font-mono text-[8px] text-cream-300 flex justify-between bg-obsidian-950/80 px-1 py-0.5 rounded">
                    <span>x:680 y:120</span>
                    <span>INT8: 2.3ms</span>
                  </div>
                </div>

                {/* Box 3: Ball */}
                <div className="absolute bottom-[18%] left-[44%] w-14 h-14 border-2 border-amber-400 bg-amber-950/20 rounded-lg p-1 flex flex-col justify-between shadow-md">
                  <div className="flex items-center justify-between">
                    <span className="px-1 py-0.2 rounded text-[8px] font-mono font-bold bg-amber-500 text-obsidian-950">
                      ball: 94.8%
                    </span>
                  </div>
                  <div className="font-mono text-[8px] text-amber-300 text-right">
                    <span>d:1.4m</span>
                  </div>
                </div>

                {/* Top AI HUD Telemetry */}
                <div className="inline-flex self-end items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/85 border border-emerald-500/50 text-emerald-200 font-mono text-xs backdrop-blur-sm">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{t(ai.badge)}: {ai.fps} ({ai.latency})</span>
                </div>

                {/* Bottom AI Status HUD */}
                <div className="self-end max-w-[240px] xs:max-w-[280px] sm:max-w-md p-3 sm:p-4 rounded-xl bg-obsidian-950/95 border border-accent-primary/60 text-cream-50 font-mono text-[10px] sm:text-xs space-y-1 shadow-2xl">
                  <div className="flex items-center justify-between text-accent-primary font-bold">
                    <span className="truncate">{t(ai.status)}</span>
                    <span className="text-emerald-400 shrink-0 ml-1">{ai.speedup}</span>
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-cream-300 leading-snug">{t(ai.details)}</p>
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
            <div className="p-4 sm:p-6 bg-bg-secondary grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-center border-t border-surface-border">
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">Frame Rate (FPS)</span>
                <div className="font-display text-base sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-red-500/70 text-sm">18 FPS</span>
                  <span>→</span>
                  <span className="text-emerald-600 dark:text-emerald-400">87.6 FPS</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">Inference Latency</span>
                <div className="font-display text-base sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-red-500/70 text-sm">54.2 ms</span>
                  <span>→</span>
                  <span className="text-emerald-600 dark:text-emerald-400">11.4 ms</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">Precision Format</span>
                <div className="font-display text-base sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
                  <span className="line-through text-fg-muted text-sm">FP32</span>
                  <span>→</span>
                  <span className="text-accent-primary">INT8 Quant</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-mono text-[10px] text-fg-muted uppercase">VRAM / RAM Footprint</span>
                <div className="font-display text-base sm:text-xl font-extrabold text-fg-primary flex items-center justify-center gap-1.5">
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
