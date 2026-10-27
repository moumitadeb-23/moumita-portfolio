import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  ShieldCheck,
  Building2,
  FileCheck2
} from 'lucide-react';
import TiltCard from './3d/TiltCard';
import { certifications } from '../data/portfolioData';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function CertificationsSection() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-space-900/60 border-t border-b border-white/5">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Certifications & Industry Training
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Rigorous hands-on programs completed in Python software development, Data Science, AWS Cloud, and Enterprise ERP.
          </p>
        </div>

        {/* 4 Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, idx) => (
            <TiltCard
              key={idx}
              className="p-6 glass-panel flex flex-col justify-between hover:border-cyan-500/40 transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-tr ${cert.color} text-slate-950 font-bold shadow-md`}>
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                  </span>
                </div>

                <h3 className="font-display font-bold text-base text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {cert.title}
                </h3>
                <div className="text-xs font-mono text-cyan-400 mb-2">
                  {cert.domain}
                </div>
                <div className="text-xs text-slate-300 font-medium flex items-center gap-1.5 mb-3">
                  <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{cert.issuer}</span>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                {/* Highlights */}
                <div className="space-y-1 mb-4">
                  {cert.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="text-[11px] text-slate-300 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">Cred ID: VERIFIED</span>
                <button
                  onClick={() => {
                    playSuccessSound();
                    setSelectedCert(cert);
                  }}
                  className="text-xs font-medium text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition-colors"
                >
                  <span>View Details</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-space-950/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-2xl glass-panel-glow border-cyan-500/30 p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-cyan-400" />
                <h3 className="font-display font-bold text-white text-base">Certificate Credential Details</h3>
              </div>
              <button
                onClick={() => { playClickSound(); setSelectedCert(null); }}
                className="text-slate-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="p-4 rounded-xl bg-space-950 border border-white/10 space-y-2">
              <div className="text-sm font-bold text-white">{selectedCert.title}</div>
              <div className="text-xs font-mono text-cyan-400">Awarded by: {selectedCert.issuer}</div>
              <div className="text-xs text-slate-300 leading-relaxed pt-2">
                {selectedCert.description}
              </div>
            </div>

            <div className="space-y-1.5 text-xs text-slate-300">
              <div className="font-semibold text-white">Competencies Evaluated:</div>
              {selectedCert.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-2 text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex justify-end">
              <button
                onClick={() => { playClickSound(); setSelectedCert(null); }}
                className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
