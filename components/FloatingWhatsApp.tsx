"use client";

const WHATSAPP = "https://api.whatsapp.com/send?phone=+91%208447385389&text=Hi%20Prakash%2C%20I%20want%20to%20know%20more%20about%20study%20abroad%20consulting.";

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
    >
      {/* Tooltip */}
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#1a2744] text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
        Chat with Prakash
      </span>

      {/* Button with pulse ring */}
      <span className="relative flex h-14 w-14">
        <span className="whatsapp-ring absolute inline-flex h-full w-full rounded-full" />
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] shadow-lg hover:scale-110 transition-transform duration-200">
          {/* WhatsApp SVG icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-7 h-7 fill-white"
          >
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.476 2.027 7.783L0 32l8.427-2.01A15.938 15.938 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 01-6.763-1.844l-.485-.287-5.002 1.193 1.217-4.874-.317-.5A13.267 13.267 0 012.667 16C2.667 8.637 8.637 2.667 16 2.667S29.333 8.637 29.333 16 23.363 29.333 16 29.333zm7.273-9.89c-.398-.199-2.355-1.162-2.72-1.295-.365-.133-.631-.199-.897.2-.266.397-1.03 1.294-1.263 1.56-.233.266-.465.3-.863.1-.398-.2-1.681-.62-3.202-1.977-1.184-1.056-1.983-2.361-2.215-2.759-.233-.398-.025-.613.175-.81.18-.178.398-.465.597-.698.2-.233.266-.398.398-.664.133-.266.067-.498-.033-.697-.1-.2-.897-2.162-1.23-2.96-.323-.777-.65-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.395 1.362-1.395 3.322s1.428 3.853 1.627 4.119c.2.266 2.81 4.291 6.809 6.017 4 1.726 4 1.152 4.72 1.08.72-.072 2.354-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.764-.465z" />
          </svg>
        </span>
      </span>
    </a>
  );
}
