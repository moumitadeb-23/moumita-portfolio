import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Volume2, 
  VolumeX, 
  FileText, 
  Menu, 
  X, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { toggleAudio, isAudioEnabled, playClickSound } from '../utils/audio';

export default function Navbar({ onOpenTerminal, onOpenResume }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = () => {
    playClickSound();
    const state = toggleAudio();
    setSoundOn(state);
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300">
      <nav 
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'glass-panel shadow-2xl shadow-cyan-950/40 border-cyan-500/20 py-3 px-5 sm:px-6' 
            : 'bg-space-950/40 backdrop-blur-md border border-white/5 py-4 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a 
            href="#" 
            onClick={() => playClickSound()}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.5)]">
              <div className="w-full h-full bg-space-950 rounded-[10px] flex items-center justify-center">
                <span className="font-display font-bold text-sm tracking-wider bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  MD
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-100 tracking-tight text-sm sm:text-base flex items-center gap-1.5">
                Moumita Deb
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse inline-block" title="Ready to Innovate" />
              </span>
              <span className="text-[11px] font-mono text-cyan-400/80 -mt-0.5">
                BCA (Data Science)
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => playClickSound()}
                className="px-3.5 py-1.5 text-xs lg:text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Actions: Terminal, Audio, Resume */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Audio Toggle */}
            <button
              onClick={handleToggleSound}
              title={soundOn ? "Mute Sci-Fi Audio FX" : "Unmute Audio FX"}
              className="p-2 text-slate-400 hover:text-cyan-400 hover:bg-white/5 rounded-lg border border-white/10 transition-colors"
            >
              {soundOn ? <Volume2 className="w-4 h-4 text-cyan-400" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Terminal Launcher */}
            <button
              onClick={() => { playClickSound(); onOpenTerminal(); }}
              title="Open Interactive Terminal (Ctrl + ~)"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 rounded-lg transition-all shadow-sm hover:shadow-[0_0_12px_rgba(0,242,254,0.3)]"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>CLI</span>
            </button>

            {/* Resume Action */}
            <button
              onClick={() => { playClickSound(); onOpenResume(); }}
              className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 rounded-lg transition-all shadow-[0_0_15px_rgba(0,242,254,0.35)] hover:shadow-[0_0_22px_rgba(0,242,254,0.55)] hover:scale-102"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => { playClickSound(); setMobileMenuOpen(!mobileMenuOpen); }}
              className="p-2 text-slate-300 md:hidden hover:bg-white/5 rounded-lg border border-white/10"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 pb-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                }}
                className="px-4 py-2.5 text-sm font-medium text-slate-200 hover:text-cyan-400 hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <span className="text-cyan-500/50 text-xs font-mono">&gt;</span>
              </a>
            ))}
            <div className="pt-2 flex items-center gap-2">
              <button
                onClick={() => {
                  playClickSound();
                  setMobileMenuOpen(false);
                  onOpenTerminal();
                }}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 text-xs font-mono text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 rounded-lg"
              >
                <Terminal className="w-3.5 h-3.5" />
                <span>Open Terminal</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
