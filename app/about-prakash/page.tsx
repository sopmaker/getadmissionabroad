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

      <section className="bg-[#1a2744] text-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                About{" "}
                <span className="text-[#c9a84c]">Prakash</span>
                <br />
                <span className="text-2xl font-normal text-gray-300">Founder, Get Admission Abroad</span>
              </h1>
              <p className="mt-6 text-gray-300 leading-relaxed">
                Prakash founded Get Admission Abroad with a clear principle: every student deserves honest, personalised guidance — not a production-line consultancy where they're handed off to a junior and never speak to a senior advisor again.
              </p>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Based in Delhi, he works directly with students and families across India who are targeting universities in the US, UK, Canada, Australia, and UAE. From the first profile call to the last application submission, Prakash is personally involved at every step.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://www.instagram.com/sopwriterprakash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white/10 border border-white/30 text-white text-sm font-semibold rounded-lg hover:bg-white/20 transition-colors"
                >
                  📷 @sopwriterprakash
                </a>
                <Link href="/book" className="px-5 py-2 bg-[#c9a84c] text-white text-sm font-semibold rounded-lg hover:bg-[#b8973b] transition-colors">
                  Book a Call
                </Link>
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

      {/* Origin Story */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a2744] mb-6">Why I Started This Practice</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
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
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744] mb-6">My Standards</h2>
              <ul className="space-y-4">
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
                  <li key={standard.title} className="flex gap-3">
                    <span className="text-[#c9a84c] font-bold mt-0.5">→</span>
                    <div>
                      <span className="font-semibold text-[#1a2744]">{standard.title}:</span>{" "}
                      <span className="text-gray-600 text-sm">{standard.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#1a2744] mb-6">My Process</h2>
              <ol className="space-y-5">
                {[
                  { step: 1, title: "Free Discovery Call", desc: "15 minutes. You explain your situation. I give you my honest initial read." },
                  { step: 2, title: "Profile Deep-Dive", desc: "We go through everything — grades, activities, goals, timeline, target countries." },
                  { step: 3, title: "Strategy Document", desc: "You get a written plan: shortlist, narrative direction, and execution timeline." },
                  { step: 4, title: "Execution", desc: "We build the application together — essays, documents, portal submissions." },
                  { step: 5, title: "Decision Support", desc: "When offers come in, I help you evaluate and decide with clarity." },
                ].map((step) => (
                  <li key={step.step} className="flex gap-4">
                    <div className="w-8 h-8 bg-[#1a2744] text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                      {step.step}
                    </div>
                    <div>
                      <span className="font-semibold text-[#1a2744]">{step.title}:</span>{" "}
                      <span className="text-gray-600 text-sm">{step.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2744] text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold">Let&apos;s Talk</h2>
          <p className="mt-3 text-gray-300 max-w-lg mx-auto">
            Book a free 15-minute call and decide for yourself if this is the right fit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/book" className="px-8 py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors">
              Book a Free Call
            </Link>
            <a
              href="https://www.instagram.com/sopwriterprakash/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/10 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/20 transition-colors"
            >
              Follow on Instagram
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
