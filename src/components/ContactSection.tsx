import React, { useState } from 'react';
import { Github, Send, Check, Copy, ArrowUp, MapPin, Sparkles, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    senderEmail: '',
    topic: 'Collaboration & Projects',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedGithub, setCopiedGithub] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.message) return;

    setIsSubmitting(true);
    // Simulate swift client validation and submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleCopyGithub = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.github);
    setCopiedGithub(true);
    setTimeout(() => setCopiedGithub(false), 2500);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[#0A0910] border-t border-white/[0.08]">
      {/* Background soft cinematic glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-[#A78BFA]/10 to-transparent blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Left Column: Heading & Context */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono text-[#A78BFA] uppercase tracking-wider">
              <span>Initiate Conversation</span>
              <span>·</span>
              <span>Open to Ideas</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F7FC] text-balance">
              Let's build something meaningful.
            </h2>

            <p className="text-base sm:text-lg text-[#A9A6B5] leading-relaxed">
              I'm open to connecting with people who enjoy technology, creativity, and building useful products.
            </p>

            <div className="pt-4 space-y-4">
              {/* Location Card */}
              <div className="flex items-center gap-3 text-sm text-[#A9A6B5] bg-[#12111A]/80 border border-white/5 p-4 rounded-xl">
                <MapPin className="w-5 h-5 text-[#67E8F9] shrink-0" />
                <div>
                  <span className="text-[#F8F7FC] font-medium block">
                    {PERSONAL_INFO.location}
                  </span>
                  <span className="text-xs text-[#A9A6B5]">
                    Quad AI School of Technology · CSE (AI &amp; ML)
                  </span>
                </div>
              </div>

              {/* Verified GitHub Card */}
              <div className="p-5 rounded-xl bg-[#181721] border border-white/[0.08] hover:border-[#A78BFA]/40 transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-white/5 text-[#F8F7FC]">
                      <Github className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-[#A78BFA] block">
                        VERIFIED REPOSITORY
                      </span>
                      <span className="text-sm font-semibold text-[#F8F7FC]">
                        github.com/Pratyushsharma28
                      </span>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#67E8F9] hover:text-[#F8F7FC] transition-colors"
                    title="Open GitHub profile"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs text-[#A9A6B5]">
                  <span>Explore open-source projects &amp; code</span>
                  <button
                    type="button"
                    onClick={handleCopyGithub}
                    className="flex items-center gap-1.5 text-[#A78BFA] hover:text-[#F8F7FC] transition-colors font-mono cursor-pointer"
                  >
                    {copiedGithub ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Link</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Working Interactive Message Composer */}
          <div className="lg:col-span-7 bg-[#181721] border border-white/[0.08] rounded-2xl p-6 sm:p-10 shadow-2xl shadow-black/50">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#A78BFA]/20 to-[#67E8F9]/20 border border-[#67E8F9]/40 flex items-center justify-center mx-auto text-[#67E8F9]">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-[#F8F7FC]">
                  Message Prepared
                </h3>
                <p className="text-sm text-[#A9A6B5] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {formState.name}! I look forward to connecting and discussing {formState.topic.toLowerCase()}.
                </p>
                <div className="pt-4 flex justify-center gap-4">
                  <a
                    href={`mailto:pratyush2865@gmail.com?subject=${encodeURIComponent(
                      `[Portfolio Contact - ${formState.topic}] from ${formState.name}`
                    )}&body=${encodeURIComponent(
                      `Hi Pratyush,\n\n${formState.message}\n\nSender: ${formState.name} (${formState.senderEmail || 'N/A'})`
                    )}`}
                    className="px-5 py-2.5 text-xs font-semibold text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] rounded-lg shadow-md hover:brightness-110 transition-all inline-flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Launch in Mail Client</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', senderEmail: '', topic: 'Collaboration & Projects', message: '' });
                    }}
                    className="px-4 py-2.5 text-xs text-[#A9A6B5] hover:text-[#F8F7FC] bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                  <span className="text-xs font-mono text-[#67E8F9] uppercase tracking-wider">
                    DIRECT MESSAGE DISPATCH
                  </span>
                  <span className="text-xs text-[#A9A6B5] font-mono">
                    Direct Contact Form
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-[#A9A6B5] block">
                      YOUR NAME *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#12111A] border border-white/10 focus:border-[#A78BFA] focus:outline-none text-sm text-[#F8F7FC] placeholder:text-[#A9A6B5]/40 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-[#A9A6B5] block">
                      EMAIL OR CONTACT HANDLE
                    </label>
                    <input
                      id="contact-email"
                      type="text"
                      placeholder="e.g. alex@company.com"
                      value={formState.senderEmail}
                      onChange={(e) => setFormState({ ...formState, senderEmail: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#12111A] border border-white/10 focus:border-[#A78BFA] focus:outline-none text-sm text-[#F8F7FC] placeholder:text-[#A9A6B5]/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="text-xs font-mono text-[#A9A6B5] block">
                    TOPIC OF DISCUSSION
                  </label>
                  <select
                    id="contact-topic"
                    value={formState.topic}
                    onChange={(e) => setFormState({ ...formState, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#12111A] border border-white/10 focus:border-[#A78BFA] focus:outline-none text-sm text-[#F8F7FC] transition-colors"
                  >
                    <option value="Collaboration & Projects">Collaboration &amp; Building Projects</option>
                    <option value="Smart India Hackathon">Hackathons &amp; SIH 2026</option>
                    <option value="AI & Machine Learning">AI &amp; Machine Learning Ideas</option>
                    <option value="Quad AI School Discussion">Academic &amp; Student Inquiries</option>
                    <option value="General Tech Chat">General Tech Connection</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-[#A9A6B5] block">
                    MESSAGE OR INQUIRY *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me what you're working on or how we could build something great together..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#12111A] border border-white/10 focus:border-[#A78BFA] focus:outline-none text-sm text-[#F8F7FC] placeholder:text-[#A9A6B5]/40 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-[#A9A6B5]">
                    No spam. Response typically within 24–48 hours.
                  </span>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-[#0B0B10] bg-gradient-to-r from-[#A78BFA] to-[#67E8F9] hover:brightness-110 active:scale-95 rounded-lg shadow-md transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Cinematic Footer Section */}
        <div className="pt-10 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#A9A6B5]">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[#F8F7FC] font-semibold">Made by Pratyush Sharma</span>
            <span>·</span>
            <span>Quad AI School of Technology</span>
            <span>·</span>
            <span>2026–2030</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F8F7FC] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="hover:text-[#A78BFA] transition-colors flex items-center gap-1.5 font-mono cursor-pointer"
              title="Return to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
