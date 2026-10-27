import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  ArrowRight,
  TrendingUp,
  Cloud,
  Heart,
  Eye
} from 'lucide-react';
import TiltCard from './3d/TiltCard';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';
import AwsModal from './modals/AwsModal';
import FinanceModal from './modals/FinanceModal';
import BloodBankModal from './modals/BloodBankModal';
import { playClickSound } from '../utils/audio';

export default function ProjectsSection() {
  const [activeModal, setActiveModal] = useState(null); // 'finance-analytics', 'serverless-image-sizer', 'blood-bank-system'

  const openProjectModal = (projectId) => {
    playClickSound();
    setActiveModal(projectId);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  const getProjectIcon = (type) => {
    if (type === 'analytics') return TrendingUp;
    if (type === 'cloud') return Cloud;
    return Heart;
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-space-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Technical Systems</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Projects & Architecture
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Interactive software platforms built with Python, AWS Serverless, and full-stack web stacks.
          </p>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((proj) => {
            const Icon = getProjectIcon(proj.type);
            return (
              <TiltCard
                key={proj.id}
                className="p-6 glass-panel flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
                glowColor={proj.glowColor}
              >
                <div>
                  {/* Card Header & Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-2xl bg-gradient-to-tr ${proj.accentColor} text-slate-950 shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/30">
                      GitHub
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5">
                    {proj.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {proj.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <ul className="space-y-2 mb-6">
                    {proj.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-400">
                        <span className="text-cyan-400 mt-0.5">•</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-white/5">
                    {proj.technologies.slice(0, 4).map((tech, tIdx) => (
                      <span 
                        key={tIdx}
                        className="px-2 py-0.5 rounded-md bg-space-900 text-[11px] font-mono text-slate-300 border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {proj.technologies.length > 4 && (
                      <span className="px-2 py-0.5 rounded-md bg-space-900 text-[11px] font-mono text-cyan-400">
                        +{proj.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Interactive Trigger Button */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openProjectModal(proj.id)}
                      className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-md shadow-cyan-950/40 transition-all hover:scale-102"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Interactive Simulator</span>
                    </button>

                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => playClickSound()}
                      title="View GitHub Repository"
                      className="p-2.5 rounded-xl bg-space-850 hover:bg-space-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            );
          })}
        </div>
      </div>

      {/* Render active interactive simulation modal */}
      {activeModal === 'serverless-image-sizer' && (
        <AwsModal 
          project={projects.find(p => p.id === 'serverless-image-sizer')} 
          onClose={closeModal} 
        />
      )}

      {activeModal === 'finance-analytics' && (
        <FinanceModal 
          project={projects.find(p => p.id === 'finance-analytics')} 
          onClose={closeModal} 
        />
      )}

      {activeModal === 'blood-bank-system' && (
        <BloodBankModal 
          project={projects.find(p => p.id === 'blood-bank-system')} 
          onClose={closeModal} 
        />
      )}
    </section>
  );
}
