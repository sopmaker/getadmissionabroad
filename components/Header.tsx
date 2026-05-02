"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Countries", href: "/countries" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Parents", href: "/parents" },
  { label: "About Prakash", href: "/about-prakash" },
  { label: "Contact", href: "/contact" },
];

const WHATSAPP = "https://api.whatsapp.com/send?phone=+91%208447385389";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? "shadow-md" : "border-b border-gray-100"
      }`}
    >
      {/* Announcement bar */}
      <div className="bg-[#1a2744] text-white text-center text-xs py-2 px-4 font-medium">
        🎓 Free 15-min profile evaluation call —&nbsp;
        <Link href="/book" className="underline underline-offset-2 hover:text-[#c9a84c] transition-colors">
          Book now, no commitment required
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="http://getadmissionabroad.in/wp-content/uploads/2022/02/logo-remove-bg-transparent.png"
              alt="Get Admission Abroad"
              width={160}
              height={48}
              unoptimized
              className="h-10 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[#1a2744]"
                      : "text-gray-600 hover:text-[#1a2744] hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#c9a84c] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-[#25d366] transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4 fill-current text-[#25d366]" viewBox="0 0 32 32">
                <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.783L0 32l8.427-2.01A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.763-1.844l-.485-.287-5.002 1.193 1.217-4.874-.317-.5A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.273-9.89c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.2-.266.397-1.03 1.294-1.263 1.56-.233.266-.465.3-.863.1-.398-.2-1.681-.62-3.202-1.977-1.184-1.056-1.983-2.361-2.215-2.759-.233-.398-.025-.613.175-.81.18-.178.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.162-1.23-2.96-.323-.777-.65-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.853 1.627 4.119c.2.266 2.81 4.291 6.809 6.017 4 1.726 4 1.152 4.72 1.08.72-.072 2.354-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.764-.465z" />
              </svg>
              WhatsApp
            </a>
            <Link
              href="/book"
              className="px-5 py-2 btn-gold-shimmer text-white text-sm font-bold rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              Book a Free Call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#1a2744] hover:bg-gray-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-1 shadow-lg">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-2 py-2.5 px-3 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-amber-50 text-[#1a2744] border-l-2 border-[#c9a84c]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#1a2744]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-3 border-t border-gray-100 space-y-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#25d366]/10 border border-[#25d366]/30 text-[#1a5c2e] font-semibold rounded-lg text-sm hover:bg-[#25d366]/20 transition-colors"
            >
              💬 WhatsApp Prakash
            </a>
            <Link
              href="/book"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full py-2.5 px-4 btn-gold-shimmer text-white font-bold rounded-lg text-sm shadow-sm"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
