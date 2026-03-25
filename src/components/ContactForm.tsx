"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    firm: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Inquiry from ${formState.name} – ${formState.firm}`
    );
    const body = encodeURIComponent(
      `Name: ${formState.name}\nFirm: ${formState.firm}\nEmail: ${formState.email}\n\n${formState.message}`
    );
    window.location.href = `mailto:james@2ndststrategy.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="card-base border-accent-blue/30 text-center py-16">
        <div className="w-16 h-16 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy-900 font-bold text-xl mb-3">Message sent</h3>
        <p className="text-slate-500">
          Your email client should have opened. If not, email{" "}
          <a href="mailto:james@2ndststrategy.com" className="text-accent-blue hover:underline">
            james@2ndststrategy.com
          </a>{" "}
          directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">
            Name <span className="text-accent-blue">*</span>
          </label>
          <input
            type="text"
            required
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            placeholder="James Smith"
            className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-colors text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-navy-800 mb-2">
            Firm <span className="text-accent-blue">*</span>
          </label>
          <input
            type="text"
            required
            value={formState.firm}
            onChange={(e) => setFormState({ ...formState, firm: e.target.value })}
            placeholder="Acme Capital Partners"
            className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-colors text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-800 mb-2">
          Email <span className="text-accent-blue">*</span>
        </label>
        <input
          type="email"
          required
          value={formState.email}
          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
          placeholder="you@yourfirm.com"
          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-colors text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-800 mb-2">
          Message <span className="text-accent-blue">*</span>
        </label>
        <textarea
          required
          rows={6}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          placeholder="Tell us about the deal or project — sector, stage, timeline, and core commercial questions you're trying to answer."
          className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full sm:w-auto justify-center sm:justify-start text-sm px-8 py-3.5"
      >
        Send message
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

      <p className="text-slate-400 text-xs">
        This form opens your email client. Or email directly:{" "}
        <a
          href="mailto:james@2ndststrategy.com"
          className="text-slate-500 hover:text-accent-blue transition-colors"
        >
          james@2ndststrategy.com
        </a>
      </p>
    </form>
  );
}
