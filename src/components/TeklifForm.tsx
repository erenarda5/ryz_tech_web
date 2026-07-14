"use client";

import { useState } from "react";
import { navGroups } from "@/lib/nav-links";

const services = navGroups[0].links.map((link) => link.label);

const stepTitles = [
  "Firma Bilgileriniz",
  "İlgilendiğiniz Hizmetler",
  "Hedef ve Bütçeniz",
  "İletişim Bilgileriniz",
];

const sectors = [
  "E-ticaret",
  "Perakende",
  "Kozmetik / Kişisel Bakım",
  "Gıda",
  "Moda / Tekstil",
  "Sağlık",
  "Teknoloji",
  "Diğer",
];

const companySizes = [
  "1-10 çalışan",
  "11-50 çalışan",
  "51-200 çalışan",
  "200+ çalışan",
];

const goals = [
  "Satışları artırmak",
  "Marka bilinirliğini artırmak",
  "Web sitesi / uygulama geliştirmek",
  "Pazaryeri satışlarını büyütmek",
  "Diğer",
];

const budgets = [
  "10.000 TL altı",
  "10.000 - 50.000 TL",
  "50.000 - 150.000 TL",
  "150.000 TL üzeri",
];

type FormState = {
  companyName: string;
  sector: string;
  companySize: string;
  hasAgency: string;
  selectedServices: string[];
  goal: string;
  budget: string;
  notes: string;
  name: string;
  email: string;
  phone: string;
  website: string;
};

const initialState: FormState = {
  companyName: "",
  sector: "",
  companySize: "",
  hasAgency: "",
  selectedServices: [],
  goal: "",
  budget: "",
  notes: "",
  name: "",
  email: "",
  phone: "",
  website: "",
};

const inputClass =
  "rounded-xl border border-foreground/15 bg-background px-4 py-3 font-normal text-foreground outline-none focus:border-brand-to";

export default function TeklifForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>(initialState);
  const [error, setError] = useState("");
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function toggleService(label: string) {
    setForm((f) => ({
      ...f,
      selectedServices: f.selectedServices.includes(label)
        ? f.selectedServices.filter((s) => s !== label)
        : [...f.selectedServices, label],
    }));
  }

  function validateStep() {
    if (step === 0) {
      if (
        !form.companyName ||
        !form.sector ||
        !form.companySize ||
        !form.hasAgency
      ) {
        setError("Lütfen tüm alanları doldurun.");
        return false;
      }
    }
    if (step === 1 && form.selectedServices.length === 0) {
      setError("Lütfen en az bir hizmet seçin.");
      return false;
    }
    if (step === 2 && (!form.goal || !form.budget)) {
      setError("Lütfen tüm alanları doldurun.");
      return false;
    }
    setError("");
    return true;
  }

  function handleNext() {
    if (!validateStep()) return;
    setStep((s) => Math.min(s + 1, stepTitles.length - 1));
  }

  function handleBack() {
    setError("");
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      setError("Lütfen tüm alanları doldurun.");
      return;
    }
    setError("");
    setSubmitStatus("loading");

    const subject = `Ücretsiz Teklif Talebi - ${form.companyName}`;
    const text = `Firma Adı: ${form.companyName}\nSektör: ${form.sector}\nFirma Büyüklüğü: ${form.companySize}\nŞu anda ajans/danışmanla çalışıyor mu: ${form.hasAgency}\n\nİlgilenilen Hizmetler: ${form.selectedServices.join(", ")}\n\nAna Hedef: ${form.goal}\nAylık Bütçe: ${form.budget}\nNotlar: ${form.notes}\n\nAd Soyad: ${form.name}\nE-posta: ${form.email}\nTelefon: ${form.phone}\nWeb Sitesi: ${form.website}`;

    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, text, replyTo: form.email }),
      });

      if (!res.ok) throw new Error("Gönderim başarısız");
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  }

  const progress = ((step + 1) / stepTitles.length) * 100;

  if (submitStatus === "success") {
    return (
      <div className="mx-auto max-w-2xl rounded-2xl bg-foreground/[0.04] p-8 text-center md:p-10">
        <h2 className="text-2xl font-bold text-foreground">Teşekkürler!</h2>
        <p className="mt-3 text-foreground/70">
          Talebiniz bize ulaştı, en kısa sürede size dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-foreground/[0.04] p-8 md:p-10">
      <div className="mb-8">
        <div className="flex items-center justify-between text-sm font-semibold text-foreground/70">
          <span>{stepTitles[step]}</span>
          <span>
            {step + 1}/{stepTitles.length}
          </span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-foreground/10">
          <div
            className="h-full rounded-full bg-gradient-to-r from-brand-from to-brand-to transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {step === 0 && (
          <>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Firma Adı
              <input
                type="text"
                value={form.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Sektörünüz
              <select
                value={form.sector}
                onChange={(e) => update("sector", e.target.value)}
                className={inputClass}
              >
                <option value="">Seçiniz</option>
                {sectors.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Firma Büyüklüğü
              <select
                value={form.companySize}
                onChange={(e) => update("companySize", e.target.value)}
                className={inputClass}
              >
                <option value="">Seçiniz</option>
                {companySizes.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
            <div className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Şu anda bir ajans veya danışmanla çalışıyor musunuz?
              <div className="flex gap-6 font-normal">
                {["Evet", "Hayır"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="hasAgency"
                      checked={form.hasAgency === opt}
                      onChange={() => update("hasAgency", opt)}
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {step === 1 && (
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {services.map((label) => (
              <label
                key={label}
                className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                  form.selectedServices.includes(label)
                    ? "border-brand-to bg-brand-to/5 text-foreground"
                    : "border-foreground/15 text-foreground/80"
                }`}
              >
                <input
                  type="checkbox"
                  checked={form.selectedServices.includes(label)}
                  onChange={() => toggleService(label)}
                  className="h-4 w-4"
                />
                {label}
              </label>
            ))}
          </div>
        )}

        {step === 2 && (
          <>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Ana Hedefiniz
              <select
                value={form.goal}
                onChange={(e) => update("goal", e.target.value)}
                className={inputClass}
              >
                <option value="">Seçiniz</option>
                {goals.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Aylık Pazarlama Bütçeniz
              <select
                value={form.budget}
                onChange={(e) => update("budget", e.target.value)}
                className={inputClass}
              >
                <option value="">Seçiniz</option>
                {budgets.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Eklemek İstedikleriniz (opsiyonel)
              <textarea
                rows={4}
                value={form.notes}
                onChange={(e) => update("notes", e.target.value)}
                className={`resize-none ${inputClass}`}
              />
            </label>
          </>
        )}

        {step === 3 && (
          <>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Ad Soyad
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                />
              </label>
              <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
                Telefon
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                />
              </label>
            </div>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              E-Posta
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                className={inputClass}
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-semibold text-foreground">
              Web Sitesi (opsiyonel)
              <input
                type="text"
                value={form.website}
                onChange={(e) => update("website", e.target.value)}
                className={inputClass}
              />
            </label>
          </>
        )}

        {error && <p className="text-sm font-semibold text-cta">{error}</p>}
        {submitStatus === "error" && (
          <p className="text-sm font-semibold text-cta">
            Bir şeyler ters gitti, lütfen tekrar deneyin veya bizi doğrudan
            arayın.
          </p>
        )}

        <div className="mt-2 flex items-center justify-between">
          {step > 0 ? (
            <button
              type="button"
              onClick={handleBack}
              className="rounded-2xl border border-foreground/15 px-6 py-3 font-semibold text-foreground transition hover:bg-foreground/5"
            >
              Geri
            </button>
          ) : (
            <span />
          )}

          {step < stepTitles.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className="rounded-2xl bg-cta px-8 py-3 font-semibold text-card-foreground transition hover:opacity-90"
            >
              İleri
            </button>
          ) : (
            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="rounded-2xl bg-cta px-8 py-3 font-semibold text-card-foreground transition hover:opacity-90 disabled:opacity-60"
            >
              {submitStatus === "loading" ? "Gönderiliyor..." : "Gönder"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
