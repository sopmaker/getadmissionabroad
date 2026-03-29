import type { Metadata } from "next";
import Container from "@/components/Container";
import QuickContactForm from "@/components/QuickContactForm";

export const metadata: Metadata = {
  title: "Contact — Get Admission Abroad",
  description:
    "Contact Prakash at Get Admission Abroad — WhatsApp, Instagram, or email. Based in Delhi, India.",
};

const WHATSAPP = "https://api.whatsapp.com/send?phone=+91%208447385389";
const INSTAGRAM = "https://www.instagram.com/sopwriterprakash/";

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">
            Get in <span className="text-[#c9a84c]">Touch</span>
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-xl">
            The fastest way to reach Prakash is WhatsApp. He responds to every serious inquiry personally.
          </p>
        </Container>
      </section>

      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744] mb-6">Contact Details</h2>

              <div className="space-y-5">
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-xl hover:border-green-400 transition-colors group"
                >
                  <span className="text-3xl">💬</span>
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-green-700">WhatsApp</div>
                    <div className="text-sm text-gray-600">+91 8447385389</div>
                  </div>
                </a>

                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pink-50 border border-pink-200 rounded-xl hover:border-pink-400 transition-colors group"
                >
                  <span className="text-3xl">📷</span>
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-pink-700">Instagram</div>
                    <div className="text-sm text-gray-600">@sopwriterprakash</div>
                  </div>
                </a>

                <a
                  href="mailto:getadmissionabroad.in@gmail.com"
                  className="flex items-center gap-4 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:border-blue-400 transition-colors group"
                >
                  <span className="text-3xl">✉️</span>
                  <div>
                    <div className="font-semibold text-gray-800 group-hover:text-blue-700">Email</div>
                    <div className="text-sm text-gray-600">getadmissionabroad.in@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-gray-50 border border-gray-200 rounded-xl">
                  <span className="text-3xl">📍</span>
                  <div>
                    <div className="font-semibold text-gray-800">Location</div>
                    <div className="text-sm text-gray-600">Delhi, India</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact / WhatsApp Redirect */}
            <div>
              <h2 className="text-2xl font-bold text-[#1a2744] mb-6">Quick Message</h2>
              <p className="text-gray-600 text-sm mb-6">
                Fill in your details below and we&apos;ll connect you directly to Prakash on WhatsApp with your message pre-filled.
              </p>
              <QuickContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
