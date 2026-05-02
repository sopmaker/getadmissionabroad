import nodemailer from "nodemailer";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;");

export async function sendBookingEmails({
  name,
  email,
  phone,
  message,
  date,
  slot,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  slot: string;
}) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("SMTP not configured, skipping email");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const safe = {
    name: escapeHtml(name),
    email: escapeHtml(email),
    phone: escapeHtml(phone),
    message: escapeHtml(message),
    date: escapeHtml(date),
    slot: escapeHtml(slot),
  };

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.OWNER_EMAIL || "getadmissionabroad.in@gmail.com",
    subject: `New Booking: ${name} — ${date} at ${slot} IST`,
    html: `<h2>New Booking</h2><p><strong>Name:</strong> ${safe.name}</p><p><strong>Email:</strong> ${safe.email}</p><p><strong>Phone:</strong> ${safe.phone}</p><p><strong>Date:</strong> ${safe.date}</p><p><strong>Time Slot:</strong> ${safe.slot} IST</p><p><strong>Requirement:</strong> ${safe.message}</p>`,
  });

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: email,
    subject: `Your call with Prakash is confirmed — ${date} at ${slot} IST`,
    html: `<h2>Booking Confirmed!</h2><p>Hi ${safe.name},</p><p>Your call with Prakash (Get Admission Abroad) is confirmed for <strong>${safe.date} at ${safe.slot} IST</strong>.</p><p>He'll reach out on your WhatsApp/phone before the call. If you need to reschedule, reply to this email or WhatsApp: +91 8447385389.</p><p>Best,<br>Prakash<br>Get Admission Abroad</p>`,
  });
}
