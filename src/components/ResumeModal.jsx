import React from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ExternalLink, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  FolderGit2, 
  Award,
  FileText
} from 'lucide-react';
import { personalInfo, education, technicalSkills, projects, certifications, personalityTraits } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    playClickSound();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel-glow border-cyan-500/30 overflow-hidden shadow-2xl my-8 bg-slate-950 text-slate-100 flex flex-col max-h-[90vh]">
        {/* Modal Controls Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-space-900 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-cyan-400" />
            <span className="font-display font-bold text-sm text-white">Digital Resume — Moumita Deb</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={() => { playClickSound(); onClose(); }}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Document View */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 font-sans text-xs sm:text-sm bg-[#090d16]">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 text-center sm:text-left flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-extrabold text-white tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-cyan-400 font-mono text-xs mt-1">
                {personalInfo.location}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-slate-300 text-xs mt-2">
                <span>Phone: <strong className="text-white">{personalInfo.phone}</strong></span>
                <span>Email: <strong className="text-white">{personalInfo.email}</strong></span>
              </div>
            </div>

            <div className="flex sm:flex-col gap-2 shrink-0 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                LinkedIn: moumita-deb
              </span>
              <span className="px-2.5 py-1 rounded bg-purple-950 text-purple-300 border border-purple-500/30">
                GitHub: moumitadeb
              </span>
            </div>
          </div>

          {/* Career Objective */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
              Career Objective
            </h2>
            <p className="text-slate-300 leading-relaxed text-xs">
              {personalInfo.careerObjective}
            </p>
          </div>

          {/* Educational Qualification */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-3">
              Educational Qualification
            </h2>
            <div className="rounded-xl border border-white/10 overflow-hidden">
              <table className="w-full text-left text-xs">
                <thead className="bg-white/5 font-mono text-[11px] text-slate-400">
                  <tr>
                    <th className="p-2.5">Course</th>
                    <th className="p-2.5">Institute</th>
                    <th className="p-2.5">Board</th>
                    <th className="p-2.5">CGPA/%</th>
                    <th className="p-2.5">Year</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {education.map((edu, idx) => (
                    <tr key={idx} className="hover:bg-white/5">
                      <td className="p-2.5 font-semibold text-white">{edu.course}</td>
                      <td className="p-2.5">{edu.institute}</td>
                      <td className="p-2.5">{edu.board}</td>
                      <td className="p-2.5 font-mono font-bold text-cyan-300">{edu.score}</td>
                      <td className="p-2.5 font-mono">{edu.year}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div>• <strong>Languages:</strong> C, Python, Java, HTML, CSS, JavaScript</div>
              <div>• <strong>Frameworks:</strong> Java Spring Boot, Flask</div>
              <div>• <strong>Database:</strong> MySQL, DBMS</div>
              <div>• <strong>Cloud:</strong> AWS — EC2, IAM, S3, Lambda, CloudWatch</div>
              <div>• <strong>Data Analytics:</strong> Power BI, DAX</div>
              <div>• <strong>Operating Systems:</strong> Linux, Windows</div>
              <div>• <strong>Core Areas:</strong> Data Analytics, Web Development, Cloud Computing</div>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-3">
              Projects
            </h2>
            <div className="space-y-4">
              {projects.map((p, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-white text-xs">{p.title}</span>
                    <span className="text-[11px] font-mono text-cyan-400">GitHub</span>
                  </div>
                  <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-0.5">
                    {p.features.map((f, fIdx) => (
                      <li key={fIdx}>{f}</li>
                    ))}
                  </ul>
                  <div className="text-[11px] font-mono text-slate-400 pt-1">
                    Tech: {p.technologies.join(' | ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
              Certifications
            </h2>
            <div className="space-y-1 text-xs text-slate-300">
              {certifications.map((c, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-cyan-400">•</span>
                  <span><strong>{c.title}</strong> — {c.issuer}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Personality Traits */}
          <div>
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-white/10 pb-1 mb-2">
              Personality Traits
            </h2>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-300">
              {personalityTraits.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-emerald-400">✔</span>
                  <span>{t.trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
