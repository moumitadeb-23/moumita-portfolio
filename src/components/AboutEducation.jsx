import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Zap, 
  Users, 
  Puzzle, 
  MessageSquare,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import TiltCard from './3d/TiltCard';
import { education, personalInfo, personalityTraits } from '../data/portfolioData';

export default function AboutEducation() {
  const traitIcons = {
    Zap: Zap,
    Users: Users,
    Puzzle: Puzzle,
    MessageSquare: MessageSquare
  };

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-space-950">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Profile & Academic Pedigree</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            About Me & Education
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Combining analytical rigour with software engineering to turn ambitious ideas into robust, production-ready systems.
          </p>
        </div>

        {/* 2-Column Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left Column: Career Objective & Summary */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <TiltCard className="p-6 sm:p-8 glass-panel-glow h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white">Career Objective</h3>
                    <p className="text-xs font-mono text-cyan-400">Continuous Learning & Value Creation</p>
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed italic border-l-2 border-cyan-500/50 pl-4 my-4">
                  "{personalInfo.careerObjective}"
                </p>

                <div className="space-y-2 mt-6 pt-6 border-t border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-purple-400" />
                    <span>Based in <strong className="text-white">{personalInfo.location}</strong></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-400" />
                    <span>Graduating Class of <strong className="text-cyan-300">2027</strong></span>
                  </div>
                </div>
              </div>

              {/* Personality Strengths */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">
                  Core Personality Traits
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {personalityTraits.map((trait, idx) => {
                    const IconComponent = traitIcons[trait.icon] || Sparkles;
                    return (
                      <div 
                        key={idx}
                        className="p-3 rounded-xl bg-space-900/60 border border-white/5 hover:border-cyan-500/30 transition-all flex flex-col gap-1.5"
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className={`w-4 h-4 ${trait.accent}`} />
                          <span className="text-xs font-semibold text-slate-200">{trait.trait}</span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          {trait.description}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Academic Timeline */}
          <div id="education" className="lg:col-span-7 space-y-6">
            <div className="space-y-4">
              {education.map((edu, idx) => (
                <TiltCard 
                  key={idx} 
                  className="p-6 glass-panel hover:border-cyan-500/40 transition-all group"
                  glowColor={idx === 0 ? 'rgba(0, 242, 254, 0.3)' : 'rgba(157, 78, 221, 0.2)'}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-cyan-950 text-cyan-400 border border-cyan-500/30">
                          {edu.year}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          {edu.board}
                        </span>
                      </div>
                      <h3 className="text-lg font-display font-bold text-white group-hover:text-cyan-400 transition-colors mt-1.5">
                        {edu.course}
                      </h3>
                      <p className="text-xs text-slate-300 font-medium">
                        {edu.institute}
                      </p>
                    </div>

                    {/* Score Callout */}
                    <div className="sm:text-right shrink-0">
                      <div className="inline-block px-3 py-1 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 font-display font-bold text-base sm:text-lg">
                        {edu.score}
                      </div>
                      <div className="text-[10px] font-mono text-slate-400 mt-0.5">
                        {edu.scoreType}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {edu.highlight}
                  </p>

                  {/* Coursework Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {edu.subjects.map((subj, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-0.5 rounded-md bg-white/5 text-[11px] font-mono text-slate-400 border border-white/5"
                      >
                        {subj}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
