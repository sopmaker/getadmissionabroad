import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Study Abroad Destinations — US, UK, Canada, Australia, UAE",
  description:
    "Specialised study abroad guidance for the US, UK, Canada, Australia, and UAE — university selection, requirements, and application strategy for Indian students.",
};

const countries = [
  {
    id: "us",
    flag: "🇺🇸",
    name: "United States",
    intro:
      "The US remains the most popular destination for Indian students — offering the broadest range of programs, research opportunities, and post-study work options.",
    universities: [
      "Ivy League (Harvard, Princeton, Columbia, Penn, Cornell, Dartmouth, Brown, Yale)",
      "Top Liberal Arts Colleges (Williams, Amherst, Swarthmore)",
      "Strong Research Universities (MIT, Stanford, Caltech, UChicago)",
      "State Flagships (UCLA, Michigan, UNC, Georgia Tech)",
    ],
    requirements: [
      "SAT/ACT (optional at many schools, but recommended for competitive profiles)",
      "TOEFL / IELTS for English proficiency",
      "Common App or Coalition App for most undergrad programs",
      "GRE/GMAT for graduate programs",
      "Strong SOPs, LORs, and essays — the differentiating factor",
    ],
    prakashNote:
      "The US has the most complex application system — essays matter enormously. I help students craft a consistent narrative across all their schools so the application reads as one coherent story.",
  },
  {
    id: "uk",
    flag: "🇬🇧",
    name: "United Kingdom",
    intro:
      "The UK offers 3-year undergraduate degrees and 1-year master's programs — making it a cost-efficient option with world-class universities.",
    universities: [
      "Oxford and Cambridge (highly competitive, subject-specific interviews)",
      "Russell Group: Imperial, LSE, UCL, Edinburgh, Manchester, Bristol, Warwick",
      "Strong arts/design schools: RCA, UAL",
      "Business: LBS, Said, Judge",
    ],
    requirements: [
      "UCAS application (centralised) — up to 5 choices for undergrad",
      "Personal Statement (single, not school-specific)",
      "IELTS typically required (6.5–7.5 depending on school)",
      "A-levels / IB / CBSE/ISC conversion for entry requirements",
    ],
    prakashNote:
      "The UK personal statement is a single document that goes to all 5 schools — it needs to be versatile yet focused. Getting this right is crucial, and we work through multiple drafts.",
  },
  {
    id: "canada",
    flag: "🇨🇦",
    name: "Canada",
    intro:
      "Canada combines top-ranked universities, a welcoming immigration pathway (PGWP), and strong quality of life — making it increasingly popular with Indian students.",
    universities: [
      "University of Toronto, McGill University",
      "UBC (University of British Columbia)",
      "University of Waterloo (strong for STEM and Co-op)",
      "Queens, McMaster, Western, Simon Fraser",
    ],
    requirements: [
      "Academic transcripts with strong grades",
      "IELTS / TOEFL / Duolingo English Test",
      "SOP / Personal Statement (varies by school)",
      "Reference letters",
      "No standardised test (SAT/ACT) required for most undergrad",
    ],
    prakashNote:
      "Canada's co-op programs at Waterloo and UBC are exceptional for STEM students. The post-graduation work permit (PGWP) pathway to PR is a major draw — we factor this into university selection.",
  },
  {
    id: "australia",
    flag: "🇦🇺",
    name: "Australia",
    intro:
      "Australia's Group of Eight universities rank among the world's best, with strong programs in engineering, medicine, business, and the natural sciences.",
    universities: [
      "University of Melbourne, ANU (Australian National University)",
      "University of Sydney, UNSW",
      "Monash University, UQ (University of Queensland)",
      "University of Adelaide, University of Western Australia",
    ],
    requirements: [
      "Strong academic record",
      "IELTS / TOEFL / PTE Academic",
      "SOP and reference letters",
      "Work experience (for postgrad programs)",
    ],
    prakashNote:
      "Australian universities value research experience and clear career intent. We help students frame their academic journey and goals in a way that resonates with Australian admissions committees.",
  },
  {
    id: "uae",
    flag: "🇦🇪",
    name: "UAE",
    intro:
      "The UAE hosts campuses of some of the world's most prestigious universities — including NYU Abu Dhabi and Sorbonne Abu Dhabi — offering a globally recognised education in a tax-free, international environment.",
    universities: [
      "NYU Abu Dhabi (highly selective, full scholarships available)",
      "Sorbonne Abu Dhabi",
      "American University in Dubai (AUD)",
      "University of Birmingham Dubai",
      "Heriot-Watt University Dubai",
    ],
    requirements: [
      "Strong academic record (especially for NYU Abu Dhabi)",
      "SAT/ACT for some programs",
      "IELTS / TOEFL",
      "Essays and short answers (NYU AD has a unique supplemental)",
    ],
    prakashNote:
      "NYU Abu Dhabi is one of the most selective universities in the world — but also one of the most generous with scholarships. If your profile is strong, it's worth a serious application.",
  },
];

export default function CountriesPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">
            Study Abroad Destinations{" "}
            <span className="text-[#c9a84c]">We Specialise In</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl">
            Deep knowledge of universities, admission processes, and what makes strong applications — across five major destinations.
          </p>
        </Container>
      </section>

      {countries.map((country, idx) => (
        <section
          key={country.id}
          id={country.id}
          className={`py-16 ${idx % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
        >
          <Container>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-5xl">{country.flag}</span>
              <div>
                <h2 className="text-3xl font-bold text-[#1a2744]">{country.name}</h2>
              </div>
            </div>
            <p className="text-gray-600 mb-8 max-w-2xl">{country.intro}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-[#1a2744] mb-3">Key Universities</h3>
                <ul className="space-y-2">
                  {country.universities.map((u) => (
                    <li key={u} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[#c9a84c] mt-0.5">→</span> {u}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-[#1a2744] mb-3">Key Requirements</h3>
                <ul className="space-y-2">
                  {country.requirements.map((r) => (
                    <li key={r} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-[#c9a84c] mt-0.5">✓</span> {r}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 border border-amber-100">
                <h3 className="font-bold text-[#1a2744] mb-2 text-sm">Prakash&apos;s Note</h3>
                <p className="text-gray-700 text-sm italic leading-relaxed">&ldquo;{country.prakashNote}&rdquo;</p>
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="py-16 bg-[#1a2744] text-white text-center">
        <Container>
          <SectionTitle title="Not Sure Which Country Is Right for You?" />
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">
            Book a free call with Prakash. He&apos;ll help you evaluate your options based on your profile, goals, and budget — honestly.
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
