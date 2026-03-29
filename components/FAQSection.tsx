"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How is working with Prakash different from a large consultancy?",
    a: "At large consultancies, you're assigned to a junior counsellor after an initial meeting with a senior. With Prakash, you work directly with him at every stage — from your first call to your final submission. No handoffs, no templates, no generic advice. Every strategy is built from scratch for your specific profile.",
  },
  {
    q: "My profile is not very strong. Can you still help me?",
    a: "Absolutely. Prakash has helped students with average GPAs and limited extracurriculars secure strong admits by focusing on genuine narrative, honest positioning, and selecting the right target programs. The goal is to find the best fit for who you are — not to misrepresent you.",
  },
  {
    q: "Do you guarantee admissions?",
    a: "No. Nobody ethical can guarantee admissions — the process involves human decisions. What Prakash can guarantee is that you'll have the strongest possible application, an honest assessment of your chances at every school on your list, and a strategy built around your real profile.",
  },
  {
    q: "How early should I start?",
    a: "The earlier the better. If you're 12–18 months from applications, Prakash can work with you on profile building — which can actually change your outcomes. If you're 3–6 months out, full application management is available. Even with 6–8 weeks to a deadline, focused documentation support is possible.",
  },
  {
    q: "Do you only serve students in Delhi?",
    a: "Prakash is Delhi-based but works with students from all over India — and sometimes internationally. All consultations and review sessions can happen remotely over video call, WhatsApp, or email.",
  },
  {
    q: "What subjects and programs do you cover?",
    a: "From engineering and CS to humanities, public policy, medicine, business, and the arts. Prakash has helped students apply to STEM programs, MBAs, MiM, MPP, LLM, public health, and fine arts programs — at universities ranging from Ivy League to strong program-fit schools.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
          >
            <span className="font-semibold text-[#1a2744] text-sm md:text-base leading-snug">
              {faq.q}
            </span>
            <span
              className={`flex-shrink-0 w-7 h-7 rounded-full border-2 border-[#c9a84c] flex items-center justify-center text-[#c9a84c] transition-transform duration-300 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
              </svg>
            </span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed animate-fade-in bg-amber-50/40 border-t border-amber-100">
              <p className="pt-4">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
