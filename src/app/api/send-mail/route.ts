import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { subject, text, replyTo } = await request.json();

    if (!subject || !text) {
      return Response.json({ error: "Eksik alan" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"RYZTECH Website" <${process.env.GMAIL_USER}>`,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: typeof replyTo === "string" && replyTo ? replyTo : undefined,
      subject,
      text,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Mail gönderim hatası:", error);
    return Response.json({ error: "Mail gönderilemedi" }, { status: 500 });
  }
}
