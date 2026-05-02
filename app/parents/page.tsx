import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "For Parents — A Transparent, Trustworthy Process",
  description:
    "For parents of students applying abroad: understand our process, timeline, costs, and how Prakash ensures a transparent and ethical admissions journey.",
};

const faqs = [
  {
    q: "How do we know the process is moving forward?",
    a: "Prakash provides weekly updates and maintains a shared task tracker. You always know what's been done, what's next, and what's due.",
  },
  {
    q: "What if my child's profile isn't strong enough for top universities?",
    a: "We give honest assessments from day one. We build a balanced list: some aspirational schools, some strong matches, and some safe admits. The goal is a good outcome — not false hope.",
  },
  {
    q: "Can we speak directly with Prakash?",
    a: "Absolutely. Prakash is not a brand behind a team — he's a founder who works directly with every family. You can call, WhatsApp, or email him at any point.",
  },
  {
    q: "How are fees structured?",
    a: "Fees vary by the scope of service and are clearly discussed upfront. There are no hidden charges. Everything is documented before we begin.",
  },
  {
    q: "What if my child is in 11th grade — is it too early to start?",
    a: "Not at all. Starting early is actually ideal. The earlier we begin, the more we can do to strengthen the profile before applications open.",
  },
  {
    q: "Do you guarantee admission?",
    a: "No. Anyone who guarantees admission is misleading you. What we guarantee is an honest, thorough, professionally executed application — one that gives your child the best realistic chance.",
  },
];

export default function ParentsPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            For Parents:{" "}
            <span className="text-[#c9a84c]">A Transparent, Trustworthy Process</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            We understand that sending your child abroad is one of the most significant decisions your family will make. Here&apos;s exactly how we approach it.
          </p>
        </Container>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div>
              <SectionTitle title="What We Do" align="left" />
              <p className="mt-4 text-gray-600 leading-relaxed">
                Get Admission Abroad is a founder-led consulting practice. Every student is personally guided by Prakash — from the first call to the final admit. There are no junior counsellors, no handoffs, and no one-size-fits-all plans.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Profile evaluation and honest assessment of realistic options",
                  "University shortlisting based on fit, not just rankings",
                  "Full application strategy and execution",
                  "SOP, LOR, and all documentation — crafted personally",
                  "Deadline management and submission tracking",
                  "Post-admit guidance for final decisions",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#c9a84c] mt-0.5 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: "📊",
                  title: "Timeline Clarity",
                  desc: "You get a month-by-month plan from the start. Every milestone, every deadline is visible and tracked.",
                },
                {
                  icon: "💰",
                  title: "Cost Transparency",
                  desc: "Fees are discussed and agreed upon upfront. No surprise add-ons. No vague 'packages' — just clear scope and clear pricing.",
                },
                {
                  icon: "🤝",
                  title: "Ethical Approach",
                  desc: "We don't make promises we can't keep. We won't oversell reach schools or dismiss reasonable targets. Your child's long-term success matters more than our short-term business.",
                },
                {
                  icon: "📲",
                  title: "Direct Access",
                  desc: "You can reach Prakash directly at any time — by WhatsApp, call, or email. Not a helpdesk. Not a chatbot.",
                },
              ].map((card) => (
                <div key={card.title} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div className="text-2xl flex-shrink-0">{card.icon}</div>
                  <div>
                    <h3 className="font-semibold text-[#1a2744] text-sm">{card.title}</h3>
                    <p className="text-gray-600 text-sm mt-0.5">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Note from Prakash */}
      <section className="py-16 bg-amber-50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">💬</div>
            <blockquote className="text-lg text-gray-700 italic leading-relaxed">
              &ldquo;I started this practice because I saw how much anxiety and confusion the study abroad process creates for families — especially when a consultant is vague, unreachable, or oversells outcomes. My goal is the opposite: you should always know exactly where things stand, what I&apos;m doing, and why. That&apos;s the standard I hold myself to with every family.&rdquo;
            </blockquote>
            <p className="mt-4 font-semibold text-[#1a2744]">— Prakash, Founder</p>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="Questions Parents Ask" />
          <div className="mt-10 max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-xl p-6">
                <h3 className="font-bold text-[#1a2744] mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2744] text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold">Let&apos;s Have a Conversation</h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Book a free 15-minute call with Prakash — with or without your child. Ask everything you need to feel comfortable about the process.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="px-8 py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors">
              Book a Free Call
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=+91%208447385389"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              💬 WhatsApp Prakash
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
