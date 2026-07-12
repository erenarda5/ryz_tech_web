"use client";

import { useState } from "react";

export default function ContactForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Yeni Proje Talebi${company ? ` - ${company}` : ""}`,
    );
    const body = encodeURIComponent(
      `İsim: ${firstName} ${lastName}\nE-posta: ${email}\nWeb Sitesi / Şirket Adı: ${company}\n\nMesaj:\n${message}`,
    );
    window.location.href = `mailto:info@ryztechdigital.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="rounded-2xl bg-foreground/[0.04] p-8 md:p-10">
      <h2 className="text-2xl font-bold text-foreground md:text-3xl">
        Hemen İletişime Geçin
      </h2>
      <p className="mt-2 text-foreground/70">
        Markanız İçin En Uygun Stratejileri Hemen Görüşelim.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
            İsim
            <input
              type="text"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="rounded-xl border border-foreground/15 bg-background px-4 py-3 font-normal text-foreground outline-none focus:border-brand-to"
            />
          </label>
          <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
            Soyisim
            <input
              type="text"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="rounded-xl border border-foreground/15 bg-background px-4 py-3 font-normal text-foreground outline-none focus:border-brand-to"
            />
          </label>
        </div>

        <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
          E-Posta
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-xl border border-foreground/15 bg-background px-4 py-3 font-normal text-foreground outline-none focus:border-brand-to"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
          Web Sitesi veya Şirket Adı
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="rounded-xl border border-foreground/15 bg-background px-4 py-3 font-normal text-foreground outline-none focus:border-brand-to"
          />
        </label>

        <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
          Mesajınız
          <textarea
            required
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="resize-none rounded-xl border border-foreground/15 bg-background px-4 py-3 font-normal text-foreground outline-none focus:border-brand-to"
          />
        </label>

        <button
          type="submit"
          className="mt-2 self-start rounded-2xl bg-cta px-8 py-3 font-semibold text-card-foreground transition hover:opacity-90"
        >
          Gönder
        </button>
      </form>
    </div>
  );
}
