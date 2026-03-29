"use client";

export default function QuickContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = fd.get("name") as string;
    const message = fd.get("message") as string;
    const text = encodeURIComponent(`Hi Prakash, my name is ${name}. ${message}`);
    window.open(
      `https://api.whatsapp.com/send?phone=+91%208447385389&text=${text}`,
      "_blank"
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name *</label>
        <input
          name="name"
          required
          type="text"
          placeholder="e.g. Riya Sharma"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Message *</label>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="e.g. I'm a final year engineering student looking to apply for MS in CS in the US. Can we discuss my profile?"
          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2744]"
        />
      </div>
      <button
        type="submit"
        className="w-full py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors text-sm"
      >
        💬 Open WhatsApp with Message
      </button>
    </form>
  );
}
