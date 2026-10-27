import React, { useState } from 'react';
import { 
  X, 
  TrendingUp, 
  DollarSign, 
  PieChart, 
  Sparkles, 
  Bot, 
  ArrowUpRight, 
  ArrowDownRight,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { playClickSound, playSuccessSound } from '../../utils/audio';

export default function FinanceModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [aiGenerating, setAiGenerating] = useState(false);
  const [aiInsights, setAiInsights] = useState([
    "💡 Based on your past 30 days of telemetry, recurring cloud & SaaS expenses rose by 8.4%. Consider reserved instances.",
    "📈 Projected monthly surplus: $2,070 (+14% above your target benchmark)."
  ]);

  const generateNewInsight = () => {
    playClickSound();
    setAiGenerating(true);
    setTimeout(() => {
      setAiGenerating(false);
      playSuccessSound();
      const tips = [
        "🎯 AI Recommendation: Shifting $450 from discretionary dining to index investments accelerates your 2027 financial target by 4 months.",
        "⚡ Automated Budget Alert: Utilities and entertainment remained within 85% of assigned budget limits this cycle.",
        "📊 Portfolio Asset Rebalance: Technology sector represents 44% of your total holdings. Consider diversifying across commodities."
      ];
      const randomTip = tips[Math.floor(Math.random() * tips.length)];
      setAiInsights(prev => [randomTip, ...prev]);
    }, 1200);
  };

  const categories = [
    { name: 'Investments', amount: '$1,200', pct: '28%', color: 'bg-cyan-400' },
    { name: 'Living & Housing', amount: '$1,100', pct: '26%', color: 'bg-purple-400' },
    { name: 'Cloud Infrastructure', amount: '$420', pct: '10%', color: 'bg-blue-400' },
    { name: 'Learning & Books', amount: '$280', pct: '7%', color: 'bg-emerald-400' },
    { name: 'Savings Reserve', amount: '$1,250', pct: '29%', color: 'bg-teal-400' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel-glow border-cyan-500/30 overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-space-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-cyan-400">
                Interactive Dashboard & AI Insights Engine (Deployed on PythonAnywhere)
              </p>
            </div>
          </div>
          <button
            onClick={() => { playClickSound(); onClose(); }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          <p className="text-xs sm:text-sm text-slate-300">
            {project.longDescription}
          </p>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="p-4 rounded-xl bg-space-950 border border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Total Income Tracked</span>
                <span className="flex items-center text-emerald-400 font-mono text-[11px]">
                  <ArrowUpRight className="w-3 h-3" /> +12.4%
                </span>
              </div>
              <div className="text-2xl font-display font-bold text-white">$4,250.00</div>
              <div className="text-[11px] font-mono text-slate-500 mt-1">Multi-source income aggregator</div>
            </div>

            <div className="p-4 rounded-xl bg-space-950 border border-white/10">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Monthly Expenses</span>
                <span className="flex items-center text-cyan-400 font-mono text-[11px]">
                  <ArrowDownRight className="w-3 h-3" /> -4.1%
                </span>
              </div>
              <div className="text-2xl font-display font-bold text-white">$2,180.00</div>
              <div className="text-[11px] font-mono text-slate-500 mt-1">Categorized tracking</div>
            </div>

            <div className="p-4 rounded-xl bg-space-950 border border-emerald-500/30">
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span>Net Savings Surplus</span>
                <span className="text-emerald-400 font-mono text-[11px]">Budget Target Met</span>
              </div>
              <div className="text-2xl font-display font-bold text-emerald-400">$2,070.00</div>
              <div className="text-[11px] font-mono text-slate-500 mt-1">48.7% Savings Rate</div>
            </div>
          </div>

          {/* Breakdown & AI Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Category Bars */}
            <div className="lg:col-span-6 p-4 rounded-xl bg-space-950 border border-white/10 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase text-slate-400">Expense Allocation Breakdown</span>
                <span className="text-[11px] font-mono text-cyan-400">Live Python Calculation</span>
              </div>
              <div className="space-y-2.5">
                {categories.map((c, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{c.name}</span>
                      <span className="font-mono text-slate-400">{c.amount} ({c.pct})</span>
                    </div>
                    <div className="w-full h-1.5 bg-space-900 rounded-full overflow-hidden">
                      <div className={`h-full ${c.color} rounded-full`} style={{ width: c.pct }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Financial Insights Assistant */}
            <div className="lg:col-span-6 p-4 rounded-xl bg-space-950 border border-purple-500/30 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4 text-purple-400" />
                    <span className="text-xs font-mono uppercase text-purple-300 font-semibold">
                      AI Advisory Engine
                    </span>
                  </div>
                  <button
                    onClick={generateNewInsight}
                    disabled={aiGenerating}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-mono text-cyan-300 bg-cyan-950 border border-cyan-500/30 hover:bg-cyan-900/40 transition-colors disabled:opacity-50"
                  >
                    <Sparkles className="w-3 h-3 text-cyan-400" />
                    <span>{aiGenerating ? "Analyzing..." : "Ask AI"}</span>
                  </button>
                </div>

                <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                  {aiInsights.map((tip, tIdx) => (
                    <div key={tIdx} className="p-2.5 rounded-lg bg-space-900 border border-white/5 text-xs text-slate-300 leading-relaxed">
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-400 border-t border-white/5 pt-2 flex items-center justify-between">
                <span>Model: Personal Finance Heuristics v2</span>
                <span className="text-emerald-400">● Live on PythonAnywhere</span>
              </div>
            </div>
          </div>

          {/* Tech Badges & GitHub Link */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-md bg-white/5 text-[11px] font-mono text-slate-300 border border-white/10">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={() => playClickSound()}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-space-850 hover:bg-space-800 border border-white/10 transition-all hover:border-cyan-400"
              >
                <span>GitHub Repository</span>
                <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
