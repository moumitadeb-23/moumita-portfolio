import React, { useState } from 'react';
import { 
  Cpu, 
  Code, 
  Server, 
  Cloud, 
  BarChart3, 
  Database, 
  Terminal, 
  Sparkles,
  Zap,
  Layers,
  HardDrive,
  Activity,
  ShieldCheck,
  TrendingUp,
  FileCode,
  Coffee,
  Globe,
  PieChart,
  Layout,
  Monitor,
  CloudRain
} from 'lucide-react';
import TiltCard from './3d/TiltCard';
import { technicalSkills } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

const iconMap = {
  FileCode,
  Coffee,
  Cpu,
  Code,
  Layout,
  Server,
  Layers,
  Database,
  Zap,
  HardDrive,
  Cloud,
  ShieldCheck,
  Activity,
  BarChart3,
  TrendingUp,
  PieChart,
  Terminal,
  Monitor,
  CloudRain,
  Globe
};

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...technicalSkills.map(c => c.category)];

  const filteredCategories = selectedCategory === "All" 
    ? technicalSkills 
    : technicalSkills.filter(c => c.category === selectedCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-space-900/60 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Skills & Core Disciplines
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Practical experience spanning modern programming languages, cloud infrastructure on AWS, and data visualization.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  playClickSound();
                  setSelectedCategory(cat);
                }}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(0,242,254,0.4)] scale-105'
                    : 'bg-space-850 text-slate-300 hover:text-white hover:bg-space-800 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="space-y-10">
          {filteredCategories.map((catGroup, cIdx) => (
            <div key={cIdx} className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="font-display font-bold text-lg text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    {catGroup.category}
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">{catGroup.description}</p>
                </div>
                <span className="text-xs font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-500/20">
                  {catGroup.skills.length} competencies
                </span>
              </div>

              {/* Grid of skills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {catGroup.skills.map((skill, sIdx) => {
                  const Icon = iconMap[skill.icon] || Code;
                  return (
                    <TiltCard
                      key={sIdx}
                      className="p-4 glass-panel hover:border-cyan-500/40 transition-all group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="p-2 rounded-xl bg-space-950 border border-white/10 group-hover:border-cyan-500/40 text-cyan-400 transition-colors">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-white group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </h4>
                            <span className="text-[10px] font-mono text-slate-400">
                              {skill.tag}
                            </span>
                          </div>
                        </div>
                        <span className="text-xs font-mono font-bold text-cyan-400">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="w-full h-1.5 bg-space-950 rounded-full overflow-hidden border border-white/5">
                        <div 
                          className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:brightness-125"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </TiltCard>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
