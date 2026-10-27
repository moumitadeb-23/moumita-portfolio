import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles,
  MessageSquareCode,
  FileText
} from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from './3d/TiltCard';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function ContactSection({ onOpenResume }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const copyToClipboard = (text, type) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      playSuccessSound();

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Clear after 4 seconds
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-space-950">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <MessageSquareCode className="w-3.5 h-3.5" />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-white tracking-tight">
            Get in Touch
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Interested in software development, cloud computing, or data analytics roles? Feel free to reach out directly.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard className="p-6 sm:p-8 glass-panel-glow flex flex-col justify-between h-full">
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Whether you have an internship opportunity, full-time role, or technical collaboration, I'm just a message away.
                </p>

                {/* Contact Items */}
                <div className="space-y-4">
                  {/* Email */}
                  <div className="p-3.5 rounded-xl bg-space-900/80 border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400">Email Address</div>
                        <a 
                          href={`mailto:${personalInfo.email}`}
                          className="text-xs font-semibold text-white hover:text-cyan-400 transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personalInfo.email, 'email')}
                      title="Copy Email"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    >
                      {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="p-3.5 rounded-xl bg-space-900/80 border border-white/5 flex items-center justify-between group hover:border-cyan-500/30 transition-all">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-slate-400">Phone & WhatsApp</div>
                        <a 
                          href={`tel:${personalInfo.phone}`}
                          className="text-xs font-semibold text-white hover:text-purple-400 transition-colors"
                        >
                          {personalInfo.phone}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                      title="Copy Phone"
                      className="p-1.5 rounded-lg text-slate-400 hover:text-purple-400 hover:bg-white/5 transition-colors"
                    >
                      {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Location */}
                  <div className="p-3.5 rounded-xl bg-space-900/80 border border-white/5 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-slate-400">Location</div>
                      <div className="text-xs font-semibold text-white">
                        {personalInfo.location}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & Resume Links */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Profiles & Documents
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClickSound()}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-space-900 hover:bg-space-850 border border-white/10 hover:border-cyan-500/40 text-xs font-medium text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-cyan-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => playClickSound()}
                    className="flex-1 py-2.5 px-3 rounded-xl bg-space-900 hover:bg-space-850 border border-white/10 hover:border-purple-500/40 text-xs font-medium text-slate-200 hover:text-white flex items-center justify-center gap-2 transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-purple-400" />
                    <span>LinkedIn</span>
                  </a>

                  <button
                    onClick={() => { playClickSound(); onOpenResume(); }}
                    className="py-2.5 px-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/40 text-xs font-semibold text-cyan-300 flex items-center gap-1.5 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Resume</span>
                  </button>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard className="p-6 sm:p-8 glass-panel h-full">
              <h3 className="font-display font-bold text-xl text-white mb-1.5">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Have a project or opportunity? Send a direct ping below.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-3 animate-float-slow">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="font-display font-bold text-lg text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you! Your simulated message has been routed to Moumita's dashboard. She will respond promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. Alex Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-space-950 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="e.g. alex@company.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-space-950 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Subject</label>
                    <input
                      type="text"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      placeholder="e.g. Full Stack & Cloud Developer Opportunity"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-space-950 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Share project details or role description..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-space-950 border border-white/10 text-white text-xs placeholder-slate-600 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-[0_0_20px_rgba(0,242,254,0.35)] transition-all flex items-center justify-center gap-2 hover:scale-101 disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Encrypting & Dispatching...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
