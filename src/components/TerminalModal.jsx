import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  Terminal as TerminalIcon, 
  Maximize2, 
  Minimize2, 
  CornerDownLeft,
  Trash2,
  Sparkles
} from 'lucide-react';
import { personalInfo, education, technicalSkills, projects, certifications } from '../data/portfolioData';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function TerminalModal({ isOpen, onClose, onOpenResume }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'output', text: "✨ Welcome to Moumita Deb's Interactive Developer Terminal (v2.4.0-release)" },
    { type: 'output', text: "Type 'help' to inspect available system commands or click shortcut chips below." }
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText) => {
    const rawCmd = cmdText.trim();
    const cmd = rawCmd.toLowerCase();

    if (!rawCmd) return;

    playClickSound();

    const newHistory = [...history, { type: 'input', text: `moumita@portfolio:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'output',
          text: 
`AVAILABLE CLI COMMANDS:
  help        - List all interactive terminal commands
  bio         - Display career objective & biographical summary
  education   - Show degree, university (MAKAUT), and high scores (9.04 CGPA)
  skills      - Formatted hierarchy of all technical competencies
  projects    - Summary of the 3 featured systems & repositories
  certs       - List verified certifications (Infosys, Cisco, SAP, AWS)
  contact     - Display direct email, phone, location, and social links
  resume      - Launch digital resume viewer
  clear       - Clear terminal session history
  matrix      - Trigger digital rain Easter egg
  exit        - Close terminal interface`
        });
        break;

      case 'bio':
      case 'about':
        newHistory.push({
          type: 'output',
          text: `NAME: ${personalInfo.name}
ROLE: ${personalInfo.title}
OBJECTIVE: ${personalInfo.careerObjective}
LOCATION: ${personalInfo.location}`
        });
        break;

      case 'education':
        newHistory.push({
          type: 'output',
          text: education.map(e => `• [${e.year}] ${e.course} @ ${e.institute} (${e.board}) -> ${e.score}`).join('\n')
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'output',
          text: technicalSkills.map(cat => 
            `=== ${cat.category.toUpperCase()} ===\n` +
            cat.skills.map(s => `  - ${s.name.padEnd(20)} [${s.tag}] (Proficiency: ${s.level}%)`).join('\n')
          ).join('\n\n')
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'output',
          text: projects.map(p => 
            `• ${p.title.toUpperCase()}
  Tagline: ${p.tagline}
  Stack: ${p.technologies.join(', ')}
  GitHub: ${p.github}`
          ).join('\n\n')
        });
        break;

      case 'certs':
      case 'certifications':
        newHistory.push({
          type: 'output',
          text: certifications.map(c => `• ${c.title} — ${c.issuer} (${c.domain})`).join('\n')
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'output',
          text: `EMAIL:    ${personalInfo.email}
PHONE:    ${personalInfo.phone}
LOCATION: ${personalInfo.location}
GITHUB:   ${personalInfo.socials.github}
LINKEDIN: ${personalInfo.socials.linkedin}`
        });
        break;

      case 'resume':
        newHistory.push({ type: 'output', text: "Opening digital resume..." });
        playSuccessSound();
        onOpenResume();
        break;

      case 'matrix':
        newHistory.push({
          type: 'output',
          text: "01001101 01101111 01110101 01101101 01101001 01110100 01100001 00100000 01000100 01100101 01100010\nWake up, developer... The matrix is powered by AWS Serverless & Python."
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `command not found: '${rawCmd}'. Type 'help' for available commands.`
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  const quickCommands = ['help', 'bio', 'education', 'skills', 'projects', 'certs', 'contact', 'resume', 'clear'];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl rounded-2xl glass-panel-glow border-cyan-500/40 shadow-2xl overflow-hidden flex flex-col h-[520px]">
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-space-900 border-b border-white/10 select-none">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block cursor-pointer" onClick={onClose} />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
            <span className="text-xs font-mono text-slate-300 ml-2 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
              moumita@portfolio-bash: ~
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => { playClickSound(); setHistory([]); }}
              title="Clear Terminal Output"
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => { playClickSound(); onClose(); }}
              className="p-1 rounded text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="px-4 py-2 bg-space-950/90 border-b border-white/5 flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono">
          <span className="text-slate-500 shrink-0">Quick run:</span>
          {quickCommands.map((q) => (
            <button
              key={q}
              onClick={() => handleCommand(q)}
              className="px-2 py-0.5 rounded bg-white/5 hover:bg-cyan-500/20 text-cyan-300 hover:text-cyan-200 border border-white/5 hover:border-cyan-500/30 transition-all shrink-0"
            >
              {q}
            </button>
          ))}
        </div>

        {/* Output Stream */}
        <div className="flex-1 p-4 overflow-y-auto font-mono text-xs text-slate-300 space-y-2.5 bg-space-950">
          {history.map((item, idx) => (
            <div 
              key={idx}
              className={`leading-relaxed whitespace-pre-wrap ${
                item.type === 'input' 
                  ? 'text-cyan-400 font-semibold' 
                  : item.type === 'error'
                  ? 'text-rose-400'
                  : 'text-slate-300'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Command Input Prompt */}
        <div className="px-4 py-3 bg-space-900 border-t border-white/10 flex items-center gap-2">
          <span className="font-mono text-xs text-cyan-400 font-semibold shrink-0">
            moumita@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type 'help' or command..."
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs text-white placeholder-slate-600"
          />
          <button
            onClick={() => handleCommand(inputVal)}
            className="p-1 rounded bg-cyan-500/20 text-cyan-400 hover:bg-cyan-500/30 transition-colors"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
