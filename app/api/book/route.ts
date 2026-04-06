import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendBookingEmails } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, message, date, slot } = body;

    if (!name || !email || !phone || !message || !date || !slot) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json({ error: "Phone must be 10 digits." }, { status: 400 });
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    // Save booking
    const booking = await prisma.booking.create({
      data: { name, email, phone, message, date, slot },
    });

    // Send emails (gracefully skipped if SMTP not configured)
    await sendBookingEmails({ name, email, phone, message, date, slot });

    return NextResponse.json({ success: true, id: booking.id });
  } catch (err) {
    console.error("Booking error:", err);
    return NextResponse.json({ error: "Internal server error." }, { status: 500 });
  }
}
