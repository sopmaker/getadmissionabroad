import type { Metadata } from "next";
import Container from "@/components/Container";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Call with Prakash",
  description:
    "Book a free 15-minute call with Prakash from Get Admission Abroad. Choose your date and time — no obligation, just clarity on your profile and options.",
};

export default function BookPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">
            Book a Call with{" "}
            <span className="text-[#c9a84c]">Prakash</span>
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-xl">
            15 minutes. No obligations. You&apos;ll leave knowing your realistic options, timeline, and next step.
          </p>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-10">
            <BookingForm />
          </div>
        </Container>
      </section>
    </>
  );
}
