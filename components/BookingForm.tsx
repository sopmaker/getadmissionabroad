"use client";

import { useState, useMemo } from "react";

function generateSlots() {
  const slots: string[] = [];
  for (let h = 10; h <= 20; h++) {
    ["00", "30"].forEach((m) => {
      if (h === 20 && m === "30") return;
      const hour12 = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? "PM" : "AM";
      slots.push(`${String(hour12).padStart(2, "0")}:${m} ${ampm}`);
    });
  }
  return slots;
}

const TIME_SLOTS = generateSlots();

function generateDates() {
  const dates: Date[] = [];
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  for (let i = 1; i <= 30; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    if (d.getDay() !== 0) {
      dates.push(d);
    }
  }
  return dates;
}

const AVAILABLE_DATES = generateDates();

const MONTH_NAMES = [
  "January","February","March","April","May","June",
  "July","August","September","October","November","December",
];
const DAY_NAMES = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function BookingForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string>("");
  const [form, setForm] = useState<FormData>({ name: "", email: "", phone: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedData, setConfirmedData] = useState<{ date: string; slot: string; name: string } | null>(null);

  const formatDateDisplay = (d: Date) =>
    `${DAY_NAMES[d.getDay()]}, ${d.getDate()} ${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;

  const formatDateValue = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;

  const groupedDates = useMemo(() => {
    const groups: Record<string, Date[]> = {};
    AVAILABLE_DATES.forEach((d) => {
      const key = `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
      if (!groups[key]) groups[key] = [];
      groups[key].push(d);
    });
    return groups;
  }, []);

  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    if (!selectedDate) { setError("Please select a date."); return; }
    if (!selectedSlot) { setError("Please select a time slot."); return; }
    if (!/^\d{10}$/.test(form.phone)) { setError("Phone must be a 10-digit number."); return; }

    setLoading(true);
    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          date: formatDateValue(selectedDate),
          slot: selectedSlot,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
      } else {
        setConfirmedData({
          date: formatDateDisplay(selectedDate),
          slot: selectedSlot,
          name: form.name,
        });
        setConfirmed(true);
      }
    } catch {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  if (confirmed && confirmedData) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <div className="text-6xl mb-4">✅</div>
        <h2 className="text-2xl font-bold text-[#1a2744] mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Hi <strong>{confirmedData.name}</strong>, your call with Prakash is booked for{" "}
          <strong>{confirmedData.date}</strong> at <strong>{confirmedData.slot} IST</strong>.
        </p>
        <p className="text-sm text-gray-500">
          You&apos;ll receive a confirmation email shortly. Prakash will reach out on WhatsApp/phone before the call.
        </p>
        <a
          href="https://api.whatsapp.com/send?phone=+91%208447385389"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm"
        >
          💬 WhatsApp Prakash
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Step 1: Select Date */}
      <div>
        <h2 className="text-lg font-bold text-[#1a2744] mb-4">1. Select a Date</h2>
        <div className="space-y-4">
          {Object.entries(groupedDates).map(([month, dates]) => (
            <div key={month}>
              <div className="text-sm font-semibold text-gray-500 mb-2">{month}</div>
              <div className="flex flex-wrap gap-2">
                {dates.map((d) => {
                  const isSelected =
                    selectedDate && formatDateValue(d) === formatDateValue(selectedDate);
                  return (
                    <button
                      key={d.toISOString()}
                      type="button"
                      onClick={() => { setSelectedDate(d); setSelectedSlot(""); }}
                      className={`flex flex-col items-center px-3 py-2 rounded-lg border text-xs font-medium transition-colors ${
                        isSelected
                          ? "bg-[#1a2744] text-white border-[#1a2744]"
                          : "bg-white text-gray-700 border-gray-200 hover:border-[#c9a84c]"
                      }`}
                    >
                      <span className="text-xs">{DAY_NAMES[d.getDay()]}</span>
                      <span className="text-lg font-bold leading-tight">{d.getDate()}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Step 2: Select Slot */}
      {selectedDate && (
        <div>
          <h2 className="text-lg font-bold text-[#1a2744] mb-4">
            2. Select a Time Slot — {formatDateDisplay(selectedDate)}
          </h2>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {TIME_SLOTS.map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                className={`py-2 px-3 rounded-lg border text-xs font-medium transition-colors ${
                  selectedSlot === slot
                    ? "bg-[#1a2744] text-white border-[#1a2744]"
                    : "bg-white text-gray-700 border-gray-200 hover:border-[#c9a84c]"
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Personal Details */}
      {selectedSlot && (
        <div>
          <h2 className="text-lg font-bold text-[#1a2744] mb-4">3. Your Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                name="name"
                required
                value={form.name}
                onChange={handleInput}
                type="text"
                placeholder="e.g. Riya Sharma"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                name="email"
                required
                value={form.email}
                onChange={handleInput}
                type="email"
                placeholder="e.g. riya@email.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number (10 digits) *</label>
              <input
                name="phone"
                required
                value={form.phone}
                onChange={handleInput}
                type="tel"
                placeholder="e.g. 9876543210"
                maxLength={10}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Your Requirement *</label>
              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleInput}
                rows={3}
                placeholder="e.g. I'm a final year B.Tech student looking to apply for MS in CS in the US next year."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mt-6">
            <div className="p-4 bg-amber-50 border border-amber-100 rounded-lg text-sm text-gray-700 mb-4">
              <strong>Booking Summary:</strong> {formatDateDisplay(selectedDate!)} at {selectedSlot} IST
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-[#c9a84c] text-white font-bold rounded-lg hover:bg-[#b8973b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Booking..." : "Confirm Booking"}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
