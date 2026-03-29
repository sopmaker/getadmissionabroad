import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import TestimonialCard from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Student Success Stories — Admits from Top Universities Abroad",
  description:
    "Real outcomes from students guided by Prakash — from Ivy-level admits to strong program-fit universities in the US, UK, Canada, Australia, and UAE.",
};

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

const anonymisedStories = [
  {
    profile: "Engineering graduate, CGPA 8.4, internship at a product startup",
    target: "MS in Computer Science — United States",
    result: "Admits from 3 universities in the top-20 CS rankings, including a partial scholarship",
    note: "Profile was initially dismissed as 'average' by another consultancy. Prakash identified differentiating factors and built a strong research narrative.",
  },
  {
    profile: "Commerce graduate, work experience at a Big 4 firm (2 years)",
    target: "MBA / MiM — United Kingdom",
    result: "Admit from a Russell Group university with a strong scholarship offer",
    note: "Application built around leadership experience and a clear post-MBA career story — not just GMAT scores.",
  },
  {
    profile: "Humanities student, interest in public policy and international relations",
    target: "Master of Public Policy — Canada and UK",
    result: "Offers from two top programs; accepted Canadian offer with PGWP pathway",
    note: "Documentation-only engagement — SOP and LORs. Student had been struggling to articulate her research interests before working with Prakash.",
  },
  {
    profile: "MBBS graduate from a Tier-2 medical college",
    target: "Public Health / Epidemiology — Australia",
    result: "Admit from a Group of Eight university",
    note: "Medical background required a carefully crafted motivation letter connecting clinical experience to public health research goals.",
  },
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">
            Student{" "}
            <span className="text-[#c9a84c]">Success Stories</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Every student who works with Prakash receives a strategy built for their specific profile. Here are some of the outcomes.
          </p>
        </Container>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <Container>
          <SectionTitle
            title="What Students Are Saying"
            subtitle="Verified Google Reviews from students we've worked with."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} name={t.name} text={t.text} />
            ))}
          </div>
        </Container>
      </section>

      {/* Anonymised Stories */}
      <section className="py-16 bg-gray-50">
        <Container>
          <SectionTitle
            title="Student Outcomes"
            subtitle="Anonymised to protect privacy. Results reflect real engagements."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {anonymisedStories.map((story, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">Profile</span>
                    <p className="text-sm text-gray-700 mt-0.5">{story.profile}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#c9a84c] uppercase tracking-wide">Target</span>
                    <p className="text-sm text-gray-700 mt-0.5">{story.target}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-green-600 uppercase tracking-wide">Result</span>
                    <p className="text-sm font-semibold text-[#1a2744] mt-0.5">{story.result}</p>
                  </div>
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-xs text-gray-500 italic">{story.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#1a2744] text-white text-center">
        <Container>
          <h2 className="text-3xl font-bold">Your Story Could Be Next</h2>
          <p className="mt-3 text-gray-300 max-w-xl mx-auto">
            Book a free call with Prakash and find out what a realistic, well-executed application can achieve for your profile.
          </p>
          <div className="mt-8">
            <Link
              href="/book"
              className="px-8 py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors inline-block"
            >
              Book a Free Call
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
