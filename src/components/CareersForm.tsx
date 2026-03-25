"use client";

import { useState, FormEvent } from "react";

type Props = {
  role: string;
  onClose: () => void;
};

export default function CareersForm({ role, onClose }: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    interest: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Careers Inquiry — ${role} — ${form.name}`);
    const body = encodeURIComponent(
      `Role: ${role}\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nLinkedIn: ${form.linkedin}\n\nWhy interested:\n${form.interest}`
    );
    window.location.href = `mailto:james@2ndststrategy.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-14 h-14 rounded-full bg-accent-blue/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-accent-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-navy-900 font-bold text-lg mb-2">Application sent</h3>
        <p className="text-slate-500 text-sm mb-6">Your email client should have opened with your details pre-filled.</p>
        <button onClick={onClose} className="btn-outline text-sm px-6 py-2.5">Close</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-800 mb-1.5">
            Name <span className="text-accent-blue">*</span>
          </label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Your full name"
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-800 mb-1.5">
            Email <span className="text-accent-blue">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            placeholder="you@firm.com"
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm"
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-navy-800 mb-1.5">Phone <span className="text-accent-blue">*</span></label>
          <input
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            placeholder="+1 (312) 555-0100"
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-navy-800 mb-1.5">LinkedIn Profile <span className="text-accent-blue">*</span></label>
          <input
            type="url"
            required
            value={form.linkedin}
            onChange={(e) => setForm({ ...form, linkedin: e.target.value })}
            placeholder="linkedin.com/in/yourname"
            className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold text-navy-800 mb-1.5">
          Why are you interested? <span className="text-accent-blue">*</span>
        </label>
        <textarea
          required
          rows={4}
          value={form.interest}
          onChange={(e) => setForm({ ...form, interest: e.target.value })}
          placeholder="Tell us about your background and what draws you to 2nd St Strategy..."
          className="w-full bg-white border border-slate-300 rounded-lg px-3 py-2.5 text-navy-900 placeholder-slate-400 focus:outline-none focus:border-accent-blue focus:ring-1 focus:ring-accent-blue/30 text-sm resize-none"
        />
      </div>
      <div className="flex items-center gap-3 pt-1">
        <button type="submit" className="btn-primary text-sm px-6 py-2.5">
          Submit application
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
        <button type="button" onClick={onClose} className="text-sm text-slate-400 hover:text-slate-600 transition-colors">
          Cancel
        </button>
      </div>
    </form>
  );
}
