import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  Terminal, 
  Cloud, 
  BarChart2, 
  Database, 
  Code2, 
  Award, 
  MapPin, 
  Mail,
  Cpu
} from 'lucide-react';
import HeroScene from './3d/HeroScene';
import { personalInfo } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function Hero({ onOpenTerminal, onOpenResume }) {
  const roles = [
    "BCA (Data Science) Student (9.04 CGPA)",
    "Cloud & AWS Serverless Engineer",
    "Data Analytics & Power BI Specialist",
    "Full Stack Python & Java Developer"
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setFade(true);
      }, 350);
    }, 3800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* 3D WebGL Canvas Layer */}
      <HeroScene />

      {/* Atmospheric Glow Backdrops */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-600/15 via-purple-600/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-space-900/80 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(0,242,254,0.15)] animate-float-slow">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="text-xs font-mono font-medium text-cyan-300">
            Open to Software Dev, Data Analytics & Cloud Roles
          </span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        </div>

        {/* Main Name & Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white mb-4">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,242,254,0.3)]">
            Moumita Deb
          </span>
        </h1>

        {/* Dynamic Rotating Subtitle */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-6">
          <p 
            className={`text-lg sm:text-2xl font-mono text-cyan-300/90 transition-all duration-300 transform ${
              fade ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span className="text-slate-400">&gt;</span> {roles[roleIndex]}
          </p>
        </div>

        {/* Brief Bio / Objective */}
        <p className="max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
          Motivated BCA Data Science scholar at <span className="text-cyan-300 font-semibold">MAKAUT</span> with a standout <span className="text-emerald-400 font-semibold font-mono">9.04 CGPA</span>. Specialized in building end-to-end Python/Java platforms, automated AWS serverless solutions, and data-driven intelligence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 mb-14">
          <a
            href="#projects"
            onClick={() => playClickSound()}
            className="group px-6 py-3 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_25px_rgba(0,242,254,0.4)] hover:shadow-[0_0_35px_rgba(0,242,254,0.6)] transition-all flex items-center gap-2 hover:scale-105"
          >
            <span>Explore 3D Projects</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={() => { playClickSound(); onOpenTerminal(); }}
            className="px-5 py-3 rounded-xl font-mono font-medium text-sm text-cyan-300 bg-space-900/90 hover:bg-space-850 border border-cyan-500/40 hover:border-cyan-400 shadow-lg shadow-cyan-950/50 backdrop-blur-md transition-all flex items-center gap-2 hover:scale-105"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch CLI Terminal</span>
          </button>

          <a
            href="#contact"
            onClick={() => playClickSound()}
            className="px-5 py-3 rounded-xl font-medium text-sm text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-all flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Stats Strip */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
          {personalInfo.stats.map((stat, idx) => (
            <div 
              key={idx}
              className="p-4 rounded-xl glass-panel hover:border-cyan-500/40 transition-all duration-300 text-left group hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-2xl sm:text-3xl font-display font-extrabold text-white group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-400/50 group-hover:bg-cyan-400" />
              </div>
              <div className="text-xs font-semibold text-slate-200">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-slate-400 mt-0.5 truncate">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
