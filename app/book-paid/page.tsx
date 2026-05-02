import type { Metadata } from "next";
import Container from "@/components/Container";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Book a Paid Strategy Call with Prakash",
  description:
    "Book a paid deep-dive call with Prakash from Get Admission Abroad. Ideal for detailed profile review, shortlisting, and action planning.",
};

export default function BookPaidPage() {
  return (
    <>
      <section className="bg-[#1a2744] text-white py-12">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold">
            Book a <span className="text-[#c9a84c]">Paid Strategy Call</span>
          </h1>
          <p className="mt-3 text-lg text-gray-300 max-w-xl">
            A deep-dive session for detailed profile feedback, university shortlisting, and a concrete action plan.
          </p>
          <p className="mt-2 text-sm text-gray-400">
            Paid consultation fee details are shared after you submit the request.
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
