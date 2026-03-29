import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Study Abroad Services — Profile to Admits",
  description:
    "Profile building, university admissions strategy, and documentation support — personally handled by Prakash for students applying abroad from India.",
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Study Abroad Consulting",
  provider: {
    "@type": "LocalBusiness",
    name: "Get Admission Abroad",
    address: { "@type": "PostalAddress", addressLocality: "Delhi", addressCountry: "IN" },
  },
  areaServed: ["US", "UK", "CA", "AU", "AE"],
  description:
    "Founder-led study abroad consulting: profile building, admissions strategy, and documentation support for international university applications.",
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#1a2744] text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
            Study Abroad Services —{" "}
            <span className="text-[#c9a84c]">Profile to Admits</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Every service is personally delivered by Prakash — from your first profile call to the day you submit your final application.
          </p>
        </Container>
      </section>

      {/* Service 1: Profile Building */}
      <section id="profile" className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">Early Stage</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1a2744]">Profile Building Mentorship</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                For students who are 12–18 months away from applications. This is the most impactful phase — when you can actually change your profile, not just document it.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Comprehensive profile evaluation (academics, ECs, work/research)",
                  "Gap identification and how to address them",
                  "Activity and achievement planning",
                  "Building a narrative that connects your past to your future goals",
                  "Initial university target range development",
                  "Regular check-ins as you execute",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[#c9a84c] mt-0.5 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-gray-500 italic">
                Best started 12–18 months before your application cycle.
              </p>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="font-bold text-[#1a2744] mb-2">Who this is for</h3>
              <p className="text-gray-600 text-sm mb-4">
                Students in 11th/12th grade or early undergrad who want to apply to top universities in 1–2 years and want to build the strongest possible profile before doing so.
              </p>
              <h3 className="font-bold text-[#1a2744] mb-2">What you get</h3>
              <p className="text-gray-600 text-sm">
                A clear, actionable plan for the months ahead — with Prakash available to guide, review, and adjust as you progress.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service 2: Admissions Strategy */}
      <section id="strategy" className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-[#1a2744] text-white rounded-2xl p-8">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold text-[#c9a84c] mb-2">Core service</h3>
              <p className="text-gray-300 text-sm mb-4">
                This is the full admissions management service — from shortlisting through final submit.
              </p>
              <h3 className="font-bold text-[#c9a84c] mb-2">Timeline</h3>
              <p className="text-gray-300 text-sm">
                Typically starts 4–6 months before your first application deadline. Earlier is always better.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">Core Service</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1a2744]">University Admissions Strategy &amp; Applications</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Research-backed shortlisting, school-specific positioning, and complete application management — from common app essays to final submission.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Research-backed university shortlisting (reach/match/safety)",
                  "School-specific positioning and narrative development",
                  "Common App / UCAS / individual portals managed",
                  "Essay strategy and multiple draft reviews",
                  "Supplemental essays for each school",
                  "Interview preparation",
                  "Application status tracking and deadline management",
                  "Post-admit decision guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[#c9a84c] mt-0.5 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Service 3: Documentation */}
      <section id="documentation" className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">Also Available Standalone</span>
              <h2 className="mt-2 text-3xl font-bold text-[#1a2744]">Documentation &amp; Storytelling Support</h2>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Your SOP is often the single most important thing the admissions committee reads. We make sure it tells the right story — authentically, compellingly, and aligned to each school.
              </p>
              <ul className="mt-6 space-y-3 text-gray-700">
                {[
                  "Statement of Purpose (SOP) — full drafting and multiple revisions",
                  "Personal Statement for UK/other systems",
                  "Letter of Recommendation (LOR) — strategy + drafts for professors/employers",
                  "Resume/CV for academic applications",
                  "Research Proposal writing",
                  "Scholarship essays and motivation letters",
                  "Tailored for each school's specific requirements",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <span className="text-[#c9a84c] mt-0.5 font-bold">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-2xl p-8 border border-amber-100">
              <div className="text-4xl mb-4">📝</div>
              <blockquote className="text-gray-700 italic text-sm leading-relaxed">
                &ldquo;A compelling SOP doesn&apos;t just describe what you&apos;ve done — it explains why you&apos;re the right fit for this specific program, at this specific school, right now. That takes real thought, not templates.&rdquo;
              </blockquote>
              <p className="mt-3 text-xs font-semibold text-[#1a2744]">— Prakash</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Process Flow */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle title="How the Process Works" subtitle="From first call to final admit." />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Free Discovery Call", desc: "15 minutes with Prakash. You explain your profile and goals. He gives you honest initial feedback." },
              { step: "02", title: "Profile Evaluation", desc: "Detailed assessment of your academics, activities, and goals. Realistic target range identified." },
              { step: "03", title: "Strategy &amp; Execution", desc: "Shortlist finalised, essays written, applications built — with constant guidance at every step." },
              { step: "04", title: "Submit &amp; Decide", desc: "All materials submitted before deadlines. Post-admit guidance to pick the right offer." },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="w-12 h-12 bg-[#1a2744] text-white rounded-full flex items-center justify-center mx-auto font-bold text-lg">
                  {s.step}
                </div>
                <h3 className="mt-3 font-bold text-[#1a2744]" dangerouslySetInnerHTML={{ __html: s.title }} />
                <p className="mt-2 text-gray-600 text-sm" dangerouslySetInnerHTML={{ __html: s.desc }} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2744] text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold">Ready to Start?</h2>
          <p className="mt-3 text-gray-300">Book a free 15-minute call with Prakash — no commitment required.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="px-8 py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors">
              Book a Free Call
            </Link>
            <Link href="/contact" className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors">
              Get in Touch
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
