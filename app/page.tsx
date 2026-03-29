import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";
import FAQSection from "@/components/FAQSection";

export const metadata: Metadata = {
  title: "Get Admission Abroad — Founder-Led Study Abroad Consulting, Delhi",
  description:
    "Prakash personally guides students from Delhi through every step of studying abroad — profile building, university shortlisting, applications, and documentation. US, UK, Canada, Australia, UAE.",
};

const WHATSAPP = "https://api.whatsapp.com/send?phone=+91%208447385389";

const testimonials = [
  {
    name: "Ankita Dwivedi",
    text: "I had a really smooth experience with this consultancy while applying for my studies abroad. They guided me through every step from university shortlisting to application and documentation. What I appreciated the most was their responsiveness and clarity in communication. Highly recommend to anyone planning to study abroad!",
  },
  {
    name: "Bushra Sayeed Imam",
    text: "The best service you can get for admissions guidance — within one's budget and time frame. Not just documentation help but also guidance and suggestions throughout. Finally got into my dream college.",
  },
  {
    name: "Pranjal Sethi",
    text: "Thank you so much for the help. It really means a lot to me — I got my offer letter and I can't thank enough. God bless you.",
  },
  {
    name: "Mahima Choudhary",
    text: "I just wanted to express my heartfelt gratitude for all the help in crafting a compelling statement of purpose that helped me get into my dream university. The assistance made a real difference, and I could not have done it without you.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="relative bg-[#111c36] text-white overflow-hidden">
        {/* Decorative background rings */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/5" />
          <div className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full border border-white/5" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#c9a84c]/5 blur-3xl" />
        </div>

        <Container className="relative py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-full mb-6">
                <span className="text-[#c9a84c]">⭐</span>
                <span className="text-xs font-semibold text-[#c9a84c] tracking-wide uppercase">5-Star Rated · Delhi&apos;s Founder-Led Consultancy</span>
              </div>

              <h1 className="animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Get Admitted to Top Universities Abroad —{" "}
                <span className="text-gradient-gold">Led Personally by Prakash</span>
              </h1>

              <p className="animate-fade-in-up delay-200 mt-6 text-lg text-gray-300 leading-relaxed max-w-lg">
                Every step handled with strategy, honesty, and complete transparency. You work directly with Prakash — never a junior counsellor.
              </p>

              <div className="animate-fade-in-up delay-300 mt-8 flex flex-wrap gap-3">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 px-7 py-3.5 btn-gold-shimmer text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow text-sm"
                >
                  Book a Free Call
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-sm backdrop-blur-sm"
                >
                  💬 WhatsApp Us
                </a>
              </div>

              {/* Trust chips */}
              <div className="animate-fade-in-up delay-400 mt-8 flex flex-wrap gap-2">
                {["Delhi-based", "Founder-led", "STEM to Humanities", "Ivy to Top-30 Universities"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 bg-white/8 border border-white/15 rounded-full text-xs font-medium text-gray-300"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* Prakash photo card */}
            <div className="animate-scale-in delay-300 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-72 h-[420px] md:w-80 md:h-[460px] rounded-3xl overflow-hidden shadow-2xl ring-4 ring-[#c9a84c]/30">
                  <Image
                    src="https://sop-writer.in/wp-content/uploads/2026/02/prakash-sop-india.jpg"
                    alt="Prakash — Founder, Get Admission Abroad"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  {/* Overlay gradient at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111c36]/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-bold text-sm">Prakash</p>
                    <p className="text-[#c9a84c] text-xs font-medium">Founder · Get Admission Abroad</p>
                  </div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🏆</span>
                    <div>
                      <p className="text-xs font-bold text-[#1a2744]">100% Founder-Led</p>
                      <p className="text-xs text-gray-500">No juniors, ever</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Social Proof Bar ───────────────────────────────────── */}
      <section className="bg-white border-b border-gray-100">
        <Container>
          <div className="py-5 grid grid-cols-2 md:grid-cols-4 gap-4 text-center divide-x divide-gray-100">
            {[
              { icon: "🌍", label: "5 Countries", sub: "US · UK · Canada · Australia · UAE" },
              { icon: "🎓", label: "Ivy to Top-30", sub: "Universities we target" },
              { icon: "📝", label: "All Documents", sub: "SOP · LOR · Essays · CV" },
              { icon: "⭐", label: "5.0 Google Rating", sub: "Verified student reviews" },
            ].map((s) => (
              <div key={s.label} className="px-4">
                <div className="text-xl">{s.icon}</div>
                <p className="font-bold text-[#1a2744] text-sm mt-1">{s.label}</p>
                <p className="text-xs text-gray-500 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Note from Prakash ─────────────────────────────────── */}
      <section className="py-16 bg-amber-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white rounded-2xl shadow-sm border border-amber-100 p-8 md:p-10">
              <div className="absolute top-6 left-6 text-6xl text-[#c9a84c]/20 font-serif leading-none select-none">&ldquo;</div>
              <p className="text-lg text-gray-700 leading-relaxed relative z-10">
                Hi, I&apos;m Prakash. Get Admission Abroad is a founder-led practice — not a call-centre consultancy. I personally guide every student and family through the entire admissions journey: from profile evaluation and university shortlisting to application strategy and documentation. Whether you&apos;re planning 18 months ahead or facing a deadline in weeks, you&apos;ll always know exactly what we&apos;re doing and why.
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#1a2744] flex items-center justify-center text-white font-bold text-sm">P</div>
                <div>
                  <p className="font-bold text-[#1a2744]">Prakash</p>
                  <p className="text-sm text-gray-500">Founder · Get Admission Abroad, Delhi</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Students vs Parents ────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="Who Do We Work With?" subtitle="Whether you're the student or the parent writing the cheque — we've got you covered." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Students */}
            <div className="group relative bg-[#1a2744] text-white rounded-3xl p-8 overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c9a84c]/10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-2xl font-bold mb-2">For Students</h3>
                <p className="text-gray-400 text-sm mb-6">Your complete admissions partner — from profile to admit.</p>
                <ul className="space-y-3">
                  {[
                    "Profile building from early stage",
                    "Strategic university shortlisting",
                    "Complete application execution",
                    "SOP, LOR, and all documentation",
                    "Honest fit assessment — no over-promising",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-200">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-[#c9a84c]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#c9a84c] text-xs">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/services"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 bg-[#c9a84c] text-white font-semibold rounded-xl hover:bg-[#b8973b] text-sm transition-colors"
                >
                  Explore Services →
                </Link>
              </div>
            </div>

            {/* Parents */}
            <div className="group relative bg-amber-50 border-2 border-[#c9a84c]/30 rounded-3xl p-8 overflow-hidden card-hover">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#c9a84c]/10 -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="text-4xl mb-4">👨‍👩‍👧</div>
                <h3 className="text-2xl font-bold text-[#1a2744] mb-2">For Parents</h3>
                <p className="text-gray-500 text-sm mb-6">Full transparency so you&apos;re never left in the dark.</p>
                <ul className="space-y-3">
                  {[
                    "Full transparency on process and costs",
                    "Clear timeline with milestones",
                    "Weekly progress updates",
                    "Ethical guidance — no fake promises",
                    "Direct access to Prakash at all times",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="mt-0.5 w-4 h-4 rounded-full bg-[#1a2744]/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#1a2744] text-xs">✓</span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/parents"
                  className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 bg-[#1a2744] text-white font-semibold rounded-xl hover:bg-[#243561] text-sm transition-colors"
                >
                  Parents&apos; Guide →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── How the Process Works ─────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle title="How It Works" subtitle="Four clear steps from enquiry to admit." />
          <div className="mt-14 relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-0.5 bg-gradient-to-r from-[#c9a84c]/0 via-[#c9a84c]/40 to-[#c9a84c]/0" />
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {[
                { step: "01", icon: "📞", title: "Free Discovery Call", desc: "15 minutes with Prakash. Honest initial feedback on your profile and realistic options.", delay: "delay-100" },
                { step: "02", icon: "🔍", title: "Profile Deep Dive", desc: "Detailed assessment of academics, activities, and goals. Target range set.", delay: "delay-200" },
                { step: "03", icon: "✍️", title: "Strategy & Execution", desc: "Shortlist finalised, essays crafted, applications built — every step guided.", delay: "delay-300" },
                { step: "04", icon: "🎉", title: "Submit & Decide", desc: "All materials submitted before deadlines. Post-admit guidance to pick the right offer.", delay: "delay-400" },
              ].map((s, i) => (
                <div key={s.step} className={`text-center animate-fade-in-up ${s.delay}`}>
                  <div className="relative inline-flex">
                    <div className="w-16 h-16 bg-[#1a2744] text-white rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                      <span className="text-2xl">{s.icon}</span>
                    </div>
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#c9a84c] text-white text-xs font-bold flex items-center justify-center shadow">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="mt-4 font-bold text-[#1a2744] text-base">{s.title}</h3>
                  <p className="mt-2 text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3 bg-[#1a2744] text-white font-semibold rounded-xl hover:bg-[#243561] text-sm transition-colors shadow-sm"
            >
              Start with a Free Call →
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Services Summary ──────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle title="What We Offer" subtitle="Every service personally handled by Prakash." />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏗️",
                stage: "Early Stage — 12–18 months out",
                title: "Profile Building Mentorship",
                desc: "Identify your strengths, close gaps, build a compelling narrative before a single application is written.",
                href: "/services#profile",
                color: "border-blue-100 hover:border-blue-300",
                badge: "bg-blue-50 text-blue-700",
              },
              {
                icon: "🎯",
                stage: "Core Service — 4–6 months out",
                title: "University Admissions Strategy",
                desc: "Research-backed shortlisting, school-specific positioning, and full application management.",
                href: "/services#strategy",
                color: "border-[#c9a84c]/30 hover:border-[#c9a84c]",
                badge: "bg-amber-50 text-amber-700",
              },
              {
                icon: "📝",
                stage: "Also Standalone — any stage",
                title: "Documentation & Storytelling",
                desc: "SOPs, personal statements, LORs, and every supporting document crafted precisely for each school.",
                href: "/services#documentation",
                color: "border-green-100 hover:border-green-300",
                badge: "bg-green-50 text-green-700",
              },
            ].map((svc) => (
              <Link
                key={svc.title}
                href={svc.href}
                className={`group flex flex-col rounded-2xl border-2 p-7 card-hover transition-colors ${svc.color}`}
              >
                <div className="text-4xl mb-4">{svc.icon}</div>
                <span className={`text-xs font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full w-fit mb-3 ${svc.badge}`}>
                  {svc.stage}
                </span>
                <h3 className="text-lg font-bold text-[#1a2744] mb-2 group-hover:text-[#c9a84c] transition-colors">{svc.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{svc.desc}</p>
                <span className="mt-5 text-sm font-semibold text-[#c9a84c] flex items-center gap-1">
                  Learn more
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Where Are You in Your Journey ────────────────────── */}
      <section className="py-20 bg-[#1a2744] text-white">
        <Container>
          <SectionTitle
            light
            title="Where Are You in Your Journey?"
            subtitle="Wherever you are, there's a tailored plan."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "📅",
                title: "6–18 Months Out",
                label: "Best time to start",
                labelColor: "bg-green-500",
                desc: "We build your profile, identify gaps, choose targets, and prepare a full strategy so nothing is rushed.",
                next: "Start with a profile evaluation call.",
                cta: "/book",
                delay: "delay-150",
              },
              {
                icon: "⏱️",
                title: "3–6 Months Out",
                label: "Application season",
                labelColor: "bg-amber-500",
                desc: "We finalise your shortlist, build your narrative, and begin documentation immediately.",
                next: "Book a call to map your deadlines.",
                cta: "/book",
                delay: "delay-300",
              },
              {
                icon: "🚨",
                title: "0–8 Weeks to Deadline",
                label: "Urgent — contact now",
                labelColor: "bg-red-500",
                desc: "Tight timelines need disciplined execution. We prioritise the right schools and get materials submission-ready.",
                next: "WhatsApp us now — time matters.",
                cta: WHATSAPP,
                delay: "delay-450",
              },
            ].map((tile) => (
              <div key={tile.title} className={`bg-white/8 border border-white/10 rounded-2xl p-7 animate-fade-in-up ${tile.delay}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{tile.icon}</div>
                  <span className={`${tile.labelColor} text-white text-xs font-bold px-2.5 py-1 rounded-full`}>
                    {tile.label}
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-2">{tile.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tile.desc}</p>
                <div className="mt-5 pt-5 border-t border-white/10">
                  <p className="text-xs text-[#c9a84c] font-semibold uppercase tracking-wide mb-2">Next Step</p>
                  <a
                    href={tile.cta}
                    target={tile.cta.startsWith("http") ? "_blank" : undefined}
                    rel={tile.cta.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm text-white hover:text-[#c9a84c] transition-colors font-medium"
                  >
                    {tile.next} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Countries ─────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle title="Countries We Specialise In" />
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {[
              { flag: "🇺🇸", country: "United States", note: "Ivy, State & Liberal Arts", href: "/countries#us" },
              { flag: "🇬🇧", country: "United Kingdom", note: "Russell Group · Oxbridge", href: "/countries#uk" },
              { flag: "🇨🇦", country: "Canada", note: "UBC, Toronto, McGill", href: "/countries#canada" },
              { flag: "🇦🇺", country: "Australia", note: "Group of Eight unis", href: "/countries#australia" },
              { flag: "🇦🇪", country: "UAE", note: "NYU Abu Dhabi & more", href: "/countries#uae" },
            ].map((c) => (
              <Link
                key={c.country}
                href={c.href}
                className="group bg-white rounded-2xl p-5 text-center shadow-sm border-2 border-transparent hover:border-[#c9a84c] card-hover transition-colors"
              >
                <div className="text-5xl mb-3">{c.flag}</div>
                <p className="font-bold text-[#1a2744] text-sm group-hover:text-[#c9a84c] transition-colors">{c.country}</p>
                <p className="text-xs text-gray-400 mt-1">{c.note}</p>
              </Link>
            ))}
          </div>
          <p className="mt-6 text-center">
            <Link href="/countries" className="text-sm font-semibold text-[#1a2744] underline underline-offset-4 hover:text-[#c9a84c] transition-colors">
              Explore all destinations →
            </Link>
          </p>
        </Container>
      </section>

      {/* ── Testimonials ──────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="What Students Say"
            subtitle="Verified Google Reviews from real students."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/success-stories" className="inline-flex items-center gap-1 text-sm font-semibold text-[#1a2744] underline underline-offset-4 hover:text-[#c9a84c] transition-colors">
              Read more success stories →
            </Link>
          </div>
        </Container>
      </section>

      {/* ── Us vs Others (Comparison) ─────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionTitle
            title="Why Prakash Over a Typical Consultancy?"
            subtitle="Honest comparison — you decide."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-gray-200 shadow-sm">
            <div className="grid grid-cols-3 bg-[#1a2744] text-white text-sm font-semibold px-6 py-4">
              <div className="col-span-1 text-gray-400">Feature</div>
              <div className="col-span-1 text-center text-[#c9a84c]">Get Admission Abroad</div>
              <div className="col-span-1 text-center text-gray-400">Typical Consultancy</div>
            </div>
            {[
              ["Who guides you?", "Founder (Prakash) — always", "Junior counsellor after initial call"],
              ["Templates used?", "Never — built from scratch", "Often — same SOPs for many"],
              ["University shortlisting", "Research-backed + honest", "Schools that look impressive"],
              ["Communication", "Direct, WhatsApp/call", "Ticketing system / scheduler"],
              ["Success fee pressure?", "None — we're honest", "Can lead to over-promising"],
              ["Progress updates", "Weekly, proactive", "When you ask"],
            ].map(([feature, us, them], i) => (
              <div
                key={feature}
                className={`grid grid-cols-3 px-6 py-4 text-sm gap-4 items-center ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}
              >
                <div className="font-medium text-gray-700 col-span-1">{feature}</div>
                <div className="col-span-1 text-center">
                  <span className="inline-flex items-center gap-1 text-green-700 font-medium">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {us}
                  </span>
                </div>
                <div className="col-span-1 text-center text-gray-500">{them}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── What "Personalised" Actually Means ────────────────── */}
      <section className="py-20 bg-[#1a2744] text-white">
        <Container>
          <SectionTitle
            light
            title='What "Personalised" Actually Means Here'
            subtitle="Not a buzzword. Here's what it looks like in practice."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              {
                icon: "🚫",
                title: "No templates, ever",
                desc: "Every SOP, every shortlist, every strategy is built from scratch for your specific profile, goals, and target programs.",
              },
              {
                icon: "👤",
                title: "Prakash is personally involved",
                desc: "There are no junior counsellors or handoffs. You communicate directly with Prakash throughout the entire process.",
              },
              {
                icon: "🔍",
                title: "Honest profile assessment",
                desc: "We tell you the truth about your chances — both the realistic targets and the aspirational ones. No over-promising.",
              },
              {
                icon: "📋",
                title: "Execution discipline",
                desc: "Deadlines are tracked, documents reviewed multiple times, and nothing goes out the door without a final quality check.",
              },
            ].map((pt) => (
              <div key={pt.title} className="flex gap-5 p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl flex-shrink-0 mt-0.5">{pt.icon}</div>
                <div>
                  <h3 className="font-bold text-[#c9a84c] mb-1.5 text-base">{pt.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Free Resources ────────────────────────────────────── */}
      <section className="py-20 bg-amber-50">
        <Container>
          <SectionTitle
            title="Free Resources — No Sign-Up Needed"
            subtitle="Get these directly on WhatsApp."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📋",
                title: "Study Abroad Timeline Checklist",
                desc: "Month-by-month plan from research to admit — tailored for Indian students.",
                badge: "Most popular",
              },
              {
                icon: "📊",
                title: "University Shortlisting Worksheet",
                desc: "A structured template to evaluate and compare universities based on your profile.",
                badge: "For students",
              },
              {
                icon: "📁",
                title: "Document Checklist",
                desc: "Every document you need for applications to US, UK, Canada, Australia, and UAE.",
                badge: "For parents too",
              },
            ].map((r) => (
              <a
                key={r.title}
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-2xl p-7 shadow-sm border border-amber-100 card-hover flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{r.icon}</div>
                  <span className="text-xs font-semibold bg-[#c9a84c]/10 text-[#b8973b] px-2.5 py-1 rounded-full">{r.badge}</span>
                </div>
                <h3 className="font-bold text-[#1a2744] mb-2">{r.title}</h3>
                <p className="text-gray-500 text-sm mb-5 flex-1">{r.desc}</p>
                <span className="text-sm font-bold text-[#c9a84c] group-hover:text-[#b8973b] flex items-center gap-1 transition-colors">
                  Get via WhatsApp →
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <Container>
          <SectionTitle
            title="Frequently Asked Questions"
            subtitle="Things students and parents commonly ask before working with Prakash."
          />
          <div className="mt-12 max-w-3xl mx-auto">
            <FAQSection />
          </div>
        </Container>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="py-20 bg-[#111c36] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#c9a84c]/5 rounded-full blur-3xl" />
        </div>
        <Container className="relative">
          <div className="max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#c9a84c]/15 border border-[#c9a84c]/30 rounded-full mb-6">
              <span className="text-[#c9a84c] text-xs font-semibold tracking-wide uppercase">Free · No Obligation · 15 Minutes</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Ready to Get Clarity<br />on Your Profile?
            </h2>
            <p className="mt-5 text-lg text-gray-300 leading-relaxed">
              Book a free call with Prakash. You&apos;ll leave knowing your realistic options, timeline, and next step — no strings attached.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/book"
                className="px-8 py-4 btn-gold-shimmer text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow text-base"
              >
                Book a Free Call
              </Link>
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors text-base backdrop-blur-sm"
              >
                💬 WhatsApp Prakash
              </a>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Prefer email? <a href="mailto:getadmissionabroad.in@gmail.com" className="text-[#c9a84c] hover:underline">getadmissionabroad.in@gmail.com</a>
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
