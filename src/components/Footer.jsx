import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-space-950 py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Tagline */}
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="font-display font-bold text-white text-base">Moumita Deb</span>
            <span className="text-xs font-mono text-cyan-400">/ 3D Portfolio</span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-md">
            Architecting intelligent cloud workflows, predictive data analytics, and modern full-stack web applications.
          </p>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => playClickSound()}
            className="p-2 rounded-xl bg-space-900 hover:bg-space-850 text-slate-300 hover:text-cyan-400 border border-white/10 transition-colors"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            onClick={() => playClickSound()}
            className="p-2 rounded-xl bg-space-900 hover:bg-space-850 text-slate-300 hover:text-purple-400 border border-white/10 transition-colors"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={personalInfo.socials.email}
            onClick={() => playClickSound()}
            className="p-2 rounded-xl bg-space-900 hover:bg-space-850 text-slate-300 hover:text-emerald-400 border border-white/10 transition-colors"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-space-900 hover:bg-space-850 border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-400 transition-all hover:-translate-y-0.5"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2 text-center">
        <span>© {new Date().getFullYear()} Moumita Deb. Built with Three.js, React & Tailwind CSS.</span>
        <span className="flex items-center gap-1">
          Designed with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for Academic & Industry Excellence
        </span>
      </div>
    </footer>
  );
}
