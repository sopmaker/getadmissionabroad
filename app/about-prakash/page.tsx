import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About Prakash — Founder, Get Admission Abroad",
  description:
    "Learn about Prakash, the founder of Get Admission Abroad — his background, philosophy, and why he built a founder-led consulting practice based in Delhi.",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Prakash",
  jobTitle: "Founder, Get Admission Abroad",
  worksFor: {
    "@type": "LocalBusiness",
    name: "Get Admission Abroad",
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  },
  sameAs: ["https://www.instagram.com/sopwriterprakash/"],
};

export default function AboutPrakashPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      <section className="bg-[#1a2744] text-white py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-4">Founder & Lead Consultant</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Meet Prakash
              </h1>
              <div className="mt-3 h-1 w-12 bg-[#c9a84c] rounded-full mb-6" />
              <p className="text-gray-300 leading-relaxed">
                Prakash founded Get Admission Abroad with a clear principle: every student deserves honest, personalised guidance — not a production-line consultancy where they&apos;re handed off to a junior and never speak to a senior advisor again.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Based in Delhi, he works directly with students and families across India who are targeting universities in the US, UK, Canada, Australia, and UAE. From the first profile call to the last application submission, Prakash is personally involved at every step.
              </p>

              {/* Credential highlights */}
              <div className="mt-8 grid grid-cols-2 gap-3">
                {[
                  { number: "8+", label: "Years' Experience" },
                  { number: "500+", label: "Students Guided" },
                  { number: "5", label: "Countries Covered" },
                  { number: "5.0★", label: "Google Rating" },
                ].map((c) => (
                  <div key={c.label} className="bg-white/8 border border-white/10 rounded-2xl px-5 py-4">
                    <p className="text-2xl font-bold text-[#c9a84c]">{c.number}</p>
                    <p className="text-xs text-gray-400 mt-1">{c.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/sopwriterprakash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white/10 border border-white/30 text-white text-sm font-semibold rounded-xl hover:bg-white/20 transition-colors"
                >
                  📷 @sopwriterprakash
                </a>
                <Link href="/book" className="px-5 py-2.5 btn-gold-shimmer text-white text-sm font-bold rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  Book a Call
                </Link>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-72 h-[420px] md:w-80 md:h-[460px] rounded-3xl overflow-hidden shadow-2xl ring-2 ring-[#c9a84c]/30">
                  <Image
                    src="https://getadmissionabroad.in/wp-content/uploads/2026/04/prakash-sop-india.jpg"
                    alt="Prakash — Founder, Get Admission Abroad"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0e1829]/80 to-transparent" />
                  <div className="absolute bottom-2 left-4 right-4">
                    <p className="text-white font-bold text-sm">Prakash</p>
                    <p className="text-[#c9a84c] text-xs font-medium">Founder · Get Admission Abroad, Delhi</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🏆</span>
                    <div>
                      <p className="text-xs font-bold text-[#1a2744]">100% Founder-Led</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Origin Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-2">In His Own Words</p>
            <h2 className="text-3xl font-bold text-[#1a2744] mb-2">Why I Started This Practice</h2>
            <div className="h-1 w-10 bg-[#c9a84c] rounded-full mb-8" />
            <div className="space-y-5 text-gray-600 leading-relaxed">
              <p>
                The study abroad consulting industry in India has a problem: most large consultancies operate like factories. Students pay significant fees, fill out forms, and are assigned to junior counsellors who follow a template. The founder is never involved. The guidance is generic. And outcomes vary wildly.
              </p>
              <p>
                I started Get Admission Abroad because I believed there was a better way — and a real need for it. Students applying to competitive programs deserve a consultant who actually understands the nuances of each university&apos;s culture, each program&apos;s priorities, and each student&apos;s unique story.
              </p>
              <p>
                That&apos;s what I do. It&apos;s not scalable in the traditional sense — and that&apos;s intentional. I work with a limited number of students at a time so I can genuinely serve each one. Quality over volume, always.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* My Standards */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-2">My Commitments</p>
              <h2 className="text-3xl font-bold text-[#1a2744] mb-2">My Standards</h2>
              <div className="h-1 w-10 bg-[#c9a84c] rounded-full mb-8" />
              <ul className="space-y-5">
                {[
                  {
                    title: "Honesty before optimism",
                    desc: "I will tell you what I genuinely think about your chances — even if it's not what you want to hear. That honesty is what makes the guidance valuable.",
                  },
                  {
                    title: "No templates",
                    desc: "Every SOP, every application strategy, every shortlist is built from scratch. Your story is yours — it shouldn't sound like anyone else's.",
                  },
                  {
                    title: "You always know where things stand",
                    desc: "I don't believe in black-box consulting. You'll always know what we're doing, why we're doing it, and what's coming next.",
                  },
                  {
                    title: "I'm reachable",
                    desc: "No ticketing systems, no response windows. If something urgent comes up, you can reach me — and I'll respond.",
                  },
                ].map((standard) => (
                  <li key={standard.title} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <span className="mt-0.5 w-7 h-7 rounded-xl bg-[#c9a84c]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3.5 h-3.5 text-[#c9a84c]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <div>
                      <p className="font-semibold text-[#1a2744] text-sm">{standard.title}</p>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{standard.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-bold text-[#c9a84c] uppercase tracking-widest mb-2">How We Work</p>
              <h2 className="text-3xl font-bold text-[#1a2744] mb-2">My Process</h2>
              <div className="h-1 w-10 bg-[#c9a84c] rounded-full mb-8" />
              <ol className="space-y-5">
                {[
                  { step: 1, title: "Free Discovery Call", desc: "15 minutes. You explain your situation. I give you my honest initial read." },
                  { step: 2, title: "Profile Deep-Dive", desc: "We go through everything — grades, activities, goals, timeline, target countries." },
                  { step: 3, title: "Strategy Document", desc: "You get a written plan: shortlist, narrative direction, and execution timeline." },
                  { step: 4, title: "Execution", desc: "We build the application together — essays, documents, portal submissions." },
                  { step: 5, title: "Decision Support", desc: "When offers come in, I help you evaluate and decide with clarity." },
                ].map((step) => (
                  <li key={step.step} className="flex gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                    <div className="w-8 h-8 bg-[#1a2744] text-white rounded-xl flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {step.step}
                    </div>
                    <div>
                      <p className="font-semibold text-[#1a2744] text-sm">{step.title}</p>
                      <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111c36] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-full mb-6">
              <span className="text-[#c9a84c] text-xs font-semibold tracking-wide uppercase">Free · No Obligation · 15 Minutes</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Let&apos;s Talk</h2>
            <p className="mt-4 text-gray-300 max-w-lg mx-auto leading-relaxed">
              Book a free 15-minute call and decide for yourself if this is the right fit. No hard sell, no commitment.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/book" className="px-8 py-3.5 btn-gold-shimmer text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                Book a Free Call
              </Link>
              <a
                href="https://www.instagram.com/sopwriterprakash/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white/10 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
