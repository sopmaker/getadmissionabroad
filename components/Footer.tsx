import Link from "next/link";
import Image from "next/image";

const WHATSAPP = "https://api.whatsapp.com/send?phone=+91%208447385389";
const INSTAGRAM = "https://www.instagram.com/sopwriterprakash/";

export default function Footer() {
  const year = new Date().getFullYear();

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Get Admission Abroad",
    url: "https://getadmissionabroad.in",
    email: "getadmissionabroad.in@gmail.com",
    telephone: "+918447385389",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Delhi",
      addressCountry: "IN",
    },
    sameAs: [INSTAGRAM, WHATSAPP],
  };

  return (
    <footer className="bg-[#0e1829] text-white mt-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Pre-footer CTA strip */}
      <div className="bg-[#c9a84c]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white font-semibold text-sm">
            🎓 Ready to start your study abroad journey?
          </p>
          <div className="flex items-center gap-3">
            <Link
              href="/book"
              className="px-5 py-2 bg-white text-[#1a2744] text-sm font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Book a Free Call
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#1a2744] text-white text-sm font-semibold rounded-lg hover:bg-[#243561] transition-colors"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/">
              <Image
                src="http://getadmissionabroad.in/wp-content/uploads/2022/02/logo-remove-bg-transparent.png"
                alt="Get Admission Abroad"
                width={160}
                height={48}
                unoptimized
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
              Founder-led study abroad consulting based in Delhi. Prakash personally guides every student — no juniors, no templates.
            </p>
            <div className="mt-5 space-y-2.5 text-sm text-gray-400">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#c9a84c] transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-[#25d366]/10 flex items-center justify-center text-base flex-shrink-0">💬</span>
                +91 8447385389
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 hover:text-[#c9a84c] transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center text-base flex-shrink-0">📷</span>
                @sopwriterprakash
              </a>
              <a
                href="mailto:getadmissionabroad.in@gmail.com"
                className="flex items-center gap-2.5 hover:text-[#c9a84c] transition-colors"
              >
                <span className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center text-base flex-shrink-0">✉️</span>
                getadmissionabroad.in@gmail.com
              </a>
              <div className="flex items-center gap-2.5 text-gray-500">
                <span className="w-8 h-8 rounded-lg bg-gray-700 flex items-center justify-center text-base flex-shrink-0">📍</span>
                Delhi, India
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/services#profile" className="hover:text-white transition-colors">Profile Building</Link></li>
              <li><Link href="/services#strategy" className="hover:text-white transition-colors">Admissions Strategy</Link></li>
              <li><Link href="/services#documentation" className="hover:text-white transition-colors">Documentation Help</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">Countries</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/countries#us" className="hover:text-white transition-colors">🇺🇸 United States</Link></li>
              <li><Link href="/countries#uk" className="hover:text-white transition-colors">🇬🇧 United Kingdom</Link></li>
              <li><Link href="/countries#canada" className="hover:text-white transition-colors">🇨🇦 Canada</Link></li>
              <li><Link href="/countries#australia" className="hover:text-white transition-colors">🇦🇺 Australia</Link></li>
              <li><Link href="/countries#uae" className="hover:text-white transition-colors">🇦🇪 UAE</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link href="/about-prakash" className="hover:text-white transition-colors">About Prakash</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/parents" className="hover:text-white transition-colors">For Parents</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Quick CTA */}
          <div className="md:col-span-2">
            <h3 className="font-bold text-[#c9a84c] mb-4 text-sm uppercase tracking-wider">Get Started</h3>
            <p className="text-xs text-gray-500 mb-4 leading-relaxed">
              15-minute free call. No obligation. Leave with clarity on your options.
            </p>
            <Link
              href="/book"
              className="block text-center px-4 py-2.5 bg-[#c9a84c] text-white text-sm font-bold rounded-lg hover:bg-[#b8973b] transition-colors"
            >
              Book Now →
            </Link>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-center px-4 py-2.5 border border-[#25d366]/30 text-[#25d366] text-sm font-semibold rounded-lg hover:bg-[#25d366]/10 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Get Admission Abroad. Delhi, India. All rights reserved.</p>
          <p>Founder-led · No templates · No juniors</p>
        </div>
      </div>
    </footer>
  );
}
