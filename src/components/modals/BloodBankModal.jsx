import React, { useState } from 'react';
import { 
  X, 
  Heart, 
  Database, 
  Users, 
  Plus, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';
import { playClickSound, playSuccessSound } from '../../utils/audio';

export default function BloodBankModal({ project, onClose }) {
  const [bloodStock, setBloodStock] = useState([
    { group: 'O+', units: 28, status: 'Optimal' },
    { group: 'A+', units: 19, status: 'Optimal' },
    { group: 'B+', units: 24, status: 'Optimal' },
    { group: 'AB+', units: 9, status: 'Normal' },
    { group: 'O-', units: 4, status: 'Critical Low' },
    { group: 'A-', units: 6, status: 'Low' },
    { group: 'B-', units: 5, status: 'Low' },
    { group: 'AB-', units: 2, status: 'Critical Low' },
  ]);

  const [donors, setDonors] = useState([
    { id: 'DON-104', name: 'Debabrata Sen', blood: 'O+', contact: '+91 98310-XXXXX', city: 'Hooghly', status: 'Eligible' },
    { id: 'DON-105', name: 'Priya Mukherjee', blood: 'B+', contact: '+91 98302-XXXXX', city: 'Kolkata', status: 'Eligible' },
    { id: 'DON-106', name: 'Rahul Roy', blood: 'O-', contact: '+91 98319-XXXXX', city: 'Konnagar', status: 'Eligible' }
  ]);

  const [showSimulateAlert, setShowSimulateAlert] = useState(false);

  const simulateNewDonation = () => {
    playClickSound();
    // Increase O- by 1 unit
    setBloodStock(prev => prev.map(item => item.group === 'O-' ? { ...item, units: item.units + 1, status: 'Low' } : item));
    const newDonor = {
      id: `DON-${107 + Math.floor(Math.random() * 50)}`,
      name: 'Voluntary Donor (Simulated)',
      blood: 'O-',
      contact: '+91 98300-XXXXX',
      city: 'Hooghly',
      status: 'Verified & Logged'
    };
    setDonors(prev => [newDonor, ...prev]);
    setShowSimulateAlert(true);
    playSuccessSound();
    setTimeout(() => setShowSimulateAlert(false), 3500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-space-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl rounded-2xl glass-panel-glow border-rose-500/30 overflow-hidden shadow-2xl my-8">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-white/10 bg-space-900/90">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <Heart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-rose-400">
                Database CRUD Operations & Real-Time Donor Coordination Platform
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

          {/* Blood Stock Grid */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono uppercase text-slate-400">Real-Time Blood Inventory Units (MySQL DB)</span>
              <button
                onClick={simulateNewDonation}
                className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition-colors shadow-sm"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Simulate Donor Registration</span>
              </button>
            </div>

            {showSimulateAlert && (
              <div className="p-3 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Database updated! 1 unit added to O- stock. Transaction committed to MySQL table.</span>
              </div>
            )}

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {bloodStock.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-space-950 border border-white/5 flex items-center justify-between">
                  <div>
                    <span className="text-base font-display font-bold text-white">{item.group}</span>
                    <div className="text-[10px] font-mono text-slate-400">{item.status}</div>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-mono font-bold text-rose-400">{item.units}</span>
                    <div className="text-[10px] text-slate-500">units</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Donor Register Table */}
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase text-slate-400">Verified Voluntary Donors Table</span>
            <div className="rounded-xl border border-white/10 bg-space-950 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-space-900 border-b border-white/10 text-slate-400 font-mono text-[11px]">
                  <tr>
                    <th className="p-2.5">Donor ID</th>
                    <th className="p-2.5">Name</th>
                    <th className="p-2.5">Blood Group</th>
                    <th className="p-2.5">District</th>
                    <th className="p-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-300">
                  {donors.map((d, idx) => (
                    <tr key={idx} className="hover:bg-white/5">
                      <td className="p-2.5 font-mono text-cyan-400">{d.id}</td>
                      <td className="p-2.5 font-medium text-white">{d.name}</td>
                      <td className="p-2.5">
                        <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 font-bold font-mono">
                          {d.blood}
                        </span>
                      </td>
                      <td className="p-2.5">{d.city}</td>
                      <td className="p-2.5 text-emerald-400 font-mono text-[11px]">{d.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-space-850 hover:bg-space-800 border border-white/10 transition-all hover:border-rose-400"
            >
              <span>GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-rose-400" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
