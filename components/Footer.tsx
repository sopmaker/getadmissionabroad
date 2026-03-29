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
    <footer className="bg-[#1a2744] text-white mt-auto">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
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
            <p className="mt-3 text-sm text-gray-300">
              Founder-led study abroad consulting based in Delhi, India.
            </p>
            <div className="mt-4 space-y-2 text-sm text-gray-300">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors"
              >
                <span>💬</span> WhatsApp: +91 8447385389
              </a>
              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors"
              >
                <span>📷</span> @sopwriterprakash
              </a>
              <a
                href="mailto:getadmissionabroad.in@gmail.com"
                className="flex items-center gap-2 hover:text-[#c9a84c] transition-colors"
              >
                <span>✉️</span> getadmissionabroad.in@gmail.com
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#c9a84c] mb-3">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/services#profile" className="hover:text-white transition-colors">Profile Building</Link></li>
              <li><Link href="/services#strategy" className="hover:text-white transition-colors">Admissions Strategy</Link></li>
              <li><Link href="/services#documentation" className="hover:text-white transition-colors">Documentation Support</Link></li>
              <li><Link href="/book" className="hover:text-white transition-colors">Book a Call</Link></li>
            </ul>
          </div>

          {/* Countries */}
          <div>
            <h3 className="font-semibold text-[#c9a84c] mb-3">Countries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/countries#us" className="hover:text-white transition-colors">United States</Link></li>
              <li><Link href="/countries#uk" className="hover:text-white transition-colors">United Kingdom</Link></li>
              <li><Link href="/countries#canada" className="hover:text-white transition-colors">Canada</Link></li>
              <li><Link href="/countries#australia" className="hover:text-white transition-colors">Australia</Link></li>
              <li><Link href="/countries#uae" className="hover:text-white transition-colors">UAE</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[#c9a84c] mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link href="/about-prakash" className="hover:text-white transition-colors">About Prakash</Link></li>
              <li><Link href="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="/parents" className="hover:text-white transition-colors">For Parents</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-center text-sm text-gray-400">
          <p>© {year} Get Admission Abroad. Delhi, India. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
