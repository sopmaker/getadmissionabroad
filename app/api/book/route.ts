import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendBookingEmails } from "@/lib/email";

function isValidEmail(value: string) {
  if (!value || value.length > 254 || value.includes(" ")) {
    return false;
  }

  const parts = value.split("@");
  if (parts.length !== 2) {
    return false;
  }

  const [local, domain] = parts;
  if (!local || !domain || local.length > 64) {
    return false;
  }

  if (domain.startsWith(".") || domain.endsWith(".") || !domain.includes(".")) {
    return false;
  }

  return true;
}

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

    if (!isValidEmail(email)) {
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
