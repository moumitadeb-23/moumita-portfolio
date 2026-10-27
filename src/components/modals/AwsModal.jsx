import React, { useState } from 'react';
import { 
  X, 
  Cloud, 
  Server, 
  Zap, 
  HardDrive, 
  Activity, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Terminal
} from 'lucide-react';
import { playClickSound, playSuccessSound } from '../../utils/audio';

export default function AwsModal({ project, onClose }) {
  const [pipelineState, setPipelineState] = useState('idle'); // idle, uploading, lambda, caching, complete
  const [logs, setLogs] = useState([
    "[SYSTEM] AWS Serverless Pipeline Initialized.",
    "[CONFIG] S3 Input Bucket: 'moumita-raw-media-bucket'",
    "[CONFIG] S3 Output Bucket: 'moumita-optimized-cdn-bucket'",
    "[CONFIG] Lambda Function: 'ImageAutoResizeAndOptimizeHandler'",
    "[READY] Awaiting test media upload payload..."
  ]);

  const runSimulation = () => {
    playClickSound();
    setPipelineState('uploading');
    setLogs(prev => [
      ...prev,
      ">>> [EVENT: 12:00:01] User initiated 3.8 MB raw image upload...",
      ">>> [S3:PUT] Object stored in s3://moumita-raw-media-bucket/hero_banner.png",
      ">>> [S3:EVENT] ObjectCreated:Put emitted to AWS Lambda"
    ]);

    setTimeout(() => {
      setPipelineState('lambda');
      setLogs(prev => [
        ...prev,
        ">>> [LAMBDA:START] Execution Id: 8f9b2d1-e90a-48f0-b998-11acbf01",
        ">>> [LAMBDA:COMPUTE] Pillow engine loaded image buffer (3840x2160 px)",
        ">>> [LAMBDA:OPTIMIZE] Generated 3 responsive tiers: 1920px (WebP), 1280px (WebP), 640px (WebP)",
        ">>> [LAMBDA:SAVINGS] Size compressed from 3.8 MB -> 412 KB (-89.1% reduction!)",
        ">>> [LAMBDA:REPORT] Duration: 342.15 ms | Memory Used: 128 MB | Billed: 343 ms"
      ]);
    }, 1800);

    setTimeout(() => {
      setPipelineState('caching');
      setLogs(prev => [
        ...prev,
        ">>> [S3:PUT] Writing optimized assets to s3://moumita-optimized-cdn-bucket/",
        ">>> [CLOUDFRONT] Invalidating edge cache & distributing to closest PoP edge node",
        ">>> [EDGE] Global latency benchmark: 38 ms"
      ]);
    }, 3600);

    setTimeout(() => {
      setPipelineState('complete');
      playSuccessSound();
      setLogs(prev => [
        ...prev,
        "=== [SUCCESS] Automated serverless pipeline round-trip finished with 0 errors! ==="
      ]);
    }, 5000);
  };

  const resetSimulation = () => {
    playClickSound();
    setPipelineState('idle');
    setLogs([
      "[SYSTEM] Simulator reset.",
      "[READY] Ready to test another media payload."
    ]);
  };

  const pipelineSteps = [
    { id: 'uploading', label: '1. S3 Raw Upload', icon: HardDrive, desc: 'Object stored in ingestion bucket' },
    { id: 'lambda', label: '2. Lambda Trigger', icon: Zap, desc: 'Auto-resizing & WebP compression' },
    { id: 'caching', label: '3. Edge Caching', icon: Cloud, desc: 'Distribution via CDN PoPs' },
    { id: 'complete', label: '4. Delivery Ready', icon: CheckCircle2, desc: 'Sub-second low latency asset' }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel-glow border-amber-500/30 overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-space-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
              <Cloud className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-amber-400">
                Interactive AWS Serverless Pipeline Simulator
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
          {/* Architecture overview summary */}
          <div className="p-4 rounded-xl bg-space-950 border border-white/10">
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">
              Architecture Blueprint
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Interactive Pipeline Visualizer */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-amber-400" />
                Live Architecture State
              </span>
              <div className="flex items-center gap-2">
                {pipelineState === 'idle' ? (
                  <button
                    onClick={runSimulation}
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-300 hover:to-orange-300 shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    <span>Run Simulation</span>
                  </button>
                ) : (
                  <button
                    onClick={resetSimulation}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-slate-300 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Reset</span>
                  </button>
                )}
              </div>
            </div>

            {/* Pipeline Stage Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {pipelineSteps.map((step, idx) => {
                const Icon = step.icon;
                const isActive = pipelineState === step.id;
                const isPassed = 
                  (step.id === 'uploading' && ['lambda', 'caching', 'complete'].includes(pipelineState)) ||
                  (step.id === 'lambda' && ['caching', 'complete'].includes(pipelineState)) ||
                  (step.id === 'caching' && pipelineState === 'complete');

                return (
                  <div
                    key={step.id}
                    className={`p-3.5 rounded-xl border transition-all ${
                      isActive
                        ? 'bg-amber-950/40 border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.3)] scale-102'
                        : isPassed
                        ? 'bg-space-950 border-emerald-500/40 text-emerald-400'
                        : 'bg-space-950 border-white/5 opacity-60'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400 animate-bounce' : isPassed ? 'text-emerald-400' : 'text-slate-400'}`} />
                      {isPassed && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />}
                    </div>
                    <div className="text-xs font-bold text-white mb-0.5">{step.label}</div>
                    <div className="text-[11px] text-slate-400 leading-tight">{step.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CloudWatch Real-Time Execution Logs */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                AWS CloudWatch Log Stream
              </span>
              <span className="text-[11px] text-emerald-400">Stream Status: ACTIVE</span>
            </div>

            <div className="p-3.5 rounded-xl bg-space-950 border border-white/10 font-mono text-xs text-slate-300 max-h-48 overflow-y-auto space-y-1">
              {logs.map((log, lIdx) => (
                <div 
                  key={lIdx} 
                  className={`${
                    log.includes('SUCCESS') 
                      ? 'text-emerald-400 font-bold' 
                      : log.includes('LAMBDA:SAVINGS')
                      ? 'text-amber-300 font-semibold'
                      : log.includes('>>>')
                      ? 'text-cyan-300'
                      : 'text-slate-400'
                  }`}
                >
                  {log}
                </div>
              ))}
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

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              onClick={() => playClickSound()}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-space-850 hover:bg-space-800 border border-white/10 transition-all hover:border-amber-400"
            >
              <span>View GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
