import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

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
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#1a2744] to-[#243561] text-white py-16 md:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                Get Admission to Top Universities Abroad —{" "}
                <span className="text-[#c9a84c]">Led Personally by Prakash</span>
              </h1>
              <p className="mt-5 text-lg text-gray-200 leading-relaxed">
                From profile planning to final applications — every step handled with strategy, honesty, and complete transparency. No handoffs to juniors. You work directly with Prakash.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/book"
                  className="px-7 py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors text-sm"
                >
                  Book a Free Call
                </Link>
                <Link
                  href="/parents"
                  className="px-7 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors text-sm"
                >
                  For Parents
                </Link>
              </div>

              {/* Trust chips */}
              <div className="mt-8 flex flex-wrap gap-3">
                {["Delhi-based", "Founder-led", "STEM to Humanities", "Ivy to Top-30 Universities"].map((chip) => (
                  <span
                    key={chip}
                    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-200"
                  >
                    ✓ {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-96 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://sop-writer.in/wp-content/uploads/2026/02/prakash-sop-india.jpg"
                  alt="Prakash — Founder, Get Admission Abroad"
                  fill
                  className="object-cover"
                  priority
                  unoptimized
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Note from Prakash */}
      <section className="py-16 bg-amber-50">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="border-l-4 border-[#c9a84c] pl-6 py-2">
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "Hi, I'm Prakash. Get Admission Abroad is a founder-led practice — not a call-centre consultancy. I personally guide every student and family through the entire admissions journey: from profile evaluation and university shortlisting to application strategy and documentation. Whether you're planning 18 months ahead or facing a deadline in weeks, you'll always know exactly what we're doing and why."
              </p>
              <p className="mt-4 font-semibold text-[#1a2744]">
                — Prakash, Founder, Get Admission Abroad (Delhi)
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Students vs Parents */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="Who Are You?" subtitle="We work with both students and their families." />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#1a2744] text-white rounded-2xl p-8">
              <div className="text-3xl mb-3">🎓</div>
              <h3 className="text-2xl font-bold mb-4">For Students</h3>
              <ul className="space-y-3 text-gray-200 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Profile building from early stage</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Strategic university shortlisting</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Complete application execution</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> SOP, LOR, and all documentation</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Honest fit assessment — no over-promising</li>
              </ul>
              <Link
                href="/services"
                className="mt-6 inline-block px-6 py-2 bg-[#c9a84c] text-white font-semibold rounded-lg hover:bg-[#b8973b] text-sm transition-colors"
              >
                Explore Services
              </Link>
            </div>

            <div className="bg-amber-50 border-2 border-[#c9a84c] rounded-2xl p-8">
              <div className="text-3xl mb-3">👨‍👩‍👧</div>
              <h3 className="text-2xl font-bold text-[#1a2744] mb-4">For Parents</h3>
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Full transparency on process and costs</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Clear timeline with milestones</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Weekly progress updates</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Ethical guidance — no fake promises</li>
                <li className="flex items-start gap-2"><span className="text-[#c9a84c] mt-0.5">✓</span> Direct access to Prakash at all times</li>
              </ul>
              <Link
                href="/parents"
                className="mt-6 inline-block px-6 py-2 bg-[#1a2744] text-white font-semibold rounded-lg hover:bg-[#243561] text-sm transition-colors"
              >
                For Parents →
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Timeline Planner */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            title="Where Are You in Your Journey?"
            subtitle="Wherever you are, there's a plan for you."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "📅",
                title: "6–18 Months Out",
                desc: "The best time to start. We build your profile, identify gaps, choose targets, and prepare a full strategy so nothing is rushed.",
                next: "Start with a profile evaluation call.",
              },
              {
                icon: "⏱️",
                title: "3–6 Months Out",
                desc: "Applications are approaching. We finalise your shortlist, build your narrative, and begin documentation immediately.",
                next: "Book a call to map your deadlines.",
              },
              {
                icon: "🚨",
                title: "0–8 Weeks to Deadline",
                desc: "Tight timelines need disciplined execution. We prioritise the right schools and get your materials submission-ready.",
                next: "WhatsApp us now — time matters.",
              },
            ].map((tile) => (
              <div key={tile.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-4xl mb-3">{tile.icon}</div>
                <h3 className="text-lg font-bold text-[#1a2744] mb-2">{tile.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{tile.desc}</p>
                <p className="mt-4 text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">
                  Next Step: {tile.next}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Services Summary */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle title="How We Work Together" />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🏗️",
                title: "Profile Building Mentorship",
                desc: "For students 12–18 months before applications. We identify your strengths, close gaps, and build a compelling narrative before a single application is written.",
                stage: "Early stage",
              },
              {
                icon: "🎯",
                title: "University Admissions Strategy & Applications",
                desc: "Research-backed shortlisting, school-specific positioning, and full application management — from common app essays to final submission.",
                stage: "Core service",
              },
              {
                icon: "📝",
                title: "Documentation & Storytelling Support",
                desc: "SOPs, personal statements, LORs, and every supporting document crafted with precision — tailored to each school's culture and requirements.",
                stage: "Available standalone",
              },
            ].map((svc) => (
              <div key={svc.title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{svc.icon}</div>
                <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">{svc.stage}</span>
                <h3 className="text-lg font-bold text-[#1a2744] mt-1 mb-2">{svc.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-gray-500">
            From STEM to humanities, Ivy-level aspirations to strong program-fit universities.
          </p>
          <div className="mt-6 text-center">
            <Link
              href="/services"
              className="px-7 py-3 bg-[#1a2744] text-white font-semibold rounded-lg hover:bg-[#243561] text-sm transition-colors inline-block"
            >
              View All Services
            </Link>
          </div>
        </Container>
      </section>

      {/* Countries */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle title="Countries We Specialise In" />
          <div className="mt-10 grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { flag: "🇺🇸", country: "United States", note: "Ivy League, State Universities, Liberal Arts", href: "/countries#us" },
              { flag: "🇬🇧", country: "United Kingdom", note: "Russell Group, Oxbridge, Arts schools", href: "/countries#uk" },
              { flag: "🇨🇦", country: "Canada", note: "UBC, Toronto, McGill and more", href: "/countries#canada" },
              { flag: "🇦🇺", country: "Australia", note: "Group of Eight universities", href: "/countries#australia" },
              { flag: "🇦🇪", country: "UAE", note: "NYU Abu Dhabi, top programs", href: "/countries#uae" },
            ].map((c) => (
              <Link
                key={c.country}
                href={c.href}
                className="bg-white rounded-xl p-4 text-center shadow-sm border border-gray-100 hover:border-[#c9a84c] hover:shadow-md transition-all group"
              >
                <div className="text-4xl mb-2">{c.flag}</div>
                <div className="font-semibold text-[#1a2744] text-sm group-hover:text-[#c9a84c] transition-colors">{c.country}</div>
                <div className="text-xs text-gray-500 mt-1">{c.note}</div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/countries" className="text-sm font-semibold text-[#1a2744] underline hover:text-[#c9a84c]">
              Explore all destinations →
            </Link>
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            title="What Students Say"
            subtitle="Real reviews from students we've worked with."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/success-stories" className="text-sm font-semibold text-[#1a2744] underline hover:text-[#c9a84c]">
              Read more success stories →
            </Link>
          </div>
        </Container>
      </section>

      {/* What Personalised Means */}
      <section className="py-16 bg-[#1a2744] text-white">
        <Container>
          <SectionTitle
            title='What "Personalised" Actually Means Here'
            subtitle="Not a buzzword. Here's what it looks like in practice."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                desc: "Deadlines are tracked, documents are reviewed multiple times, and nothing goes out the door without a final quality check.",
              },
            ].map((pt) => (
              <div key={pt.title} className="flex gap-4">
                <div className="text-2xl flex-shrink-0">{pt.icon}</div>
                <div>
                  <h3 className="font-bold text-[#c9a84c] mb-1">{pt.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{pt.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Free Resources */}
      <section className="py-16 bg-amber-50">
        <Container>
          <SectionTitle
            title="Free Resources to Help You Plan"
            subtitle="Get these directly on WhatsApp — no sign-up needed."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "📋", title: "Study Abroad Timeline Checklist", desc: "Month-by-month plan from research to admit — tailored for Indian students." },
              { icon: "📊", title: "University Shortlisting Worksheet", desc: "A structured template to evaluate and compare universities based on your profile." },
              { icon: "📁", title: "Document Checklist", desc: "Every document you need for applications to US, UK, Canada, Australia, and UAE." },
            ].map((r) => (
              <div key={r.title} className="bg-white rounded-xl p-6 shadow-sm border border-amber-100">
                <div className="text-3xl mb-3">{r.icon}</div>
                <h3 className="font-semibold text-[#1a2744] mb-2">{r.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{r.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[#c9a84c] hover:text-[#b8973b]"
                >
                  Get via WhatsApp →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#1a2744] text-white text-center">
        <Container>
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Clarity on Your Profile?</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-xl mx-auto">
            Book a 15-minute call with Prakash. You&apos;ll leave knowing your realistic options, timeline, and next step.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/book"
              className="px-8 py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors"
            >
              Book a Call
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              💬 WhatsApp Us
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
