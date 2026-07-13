"use client";

import { useState } from "react";

const CONVERSION_RATE = 0.01;

function formatTL(value: number) {
  return value.toLocaleString("tr-TR", { maximumFractionDigits: 0 });
}

export default function BudgetCalculator() {
  const [revenue, setRevenue] = useState("");
  const [aov, setAov] = useState("");
  const [cpc, setCpc] = useState("");
  const [result, setResult] = useState<{
    orders: number;
    clicks: number;
    budget: number;
  } | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const r = parseFloat(revenue.replace(",", "."));
    const a = parseFloat(aov.replace(",", "."));
    const c = parseFloat(cpc.replace(",", "."));
    if (!r || !a || !c || a <= 0) {
      setResult(null);
      return;
    }
    const orders = r / a;
    const clicks = orders / CONVERSION_RATE;
    const budget = clicks * c;
    setResult({ orders, clicks, budget });
  }

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-foreground/[0.04] p-8 md:p-10">
      <h2 className="text-center text-2xl font-bold text-foreground">
        Reklam Bütçe Hesaplayıcı
      </h2>
      <p className="mt-2 text-center text-foreground/70">
        Aylık Gelir Hedefinize Göre Tahmini Reklam Harcamanızı Hesaplayın
      </p>

      <form onSubmit={handleCalculate} className="mt-8 flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-center font-bold text-foreground">
            Aylık Gelir Hedefiniz Nedir?
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              placeholder="200.000 örn."
              value={revenue}
              onChange={(e) => setRevenue(e.target.value)}
              className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 pr-10 text-foreground outline-none focus:border-brand-to"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">
              ₺
            </span>
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-center font-bold text-foreground">
            Satışlarınızın Ortalama Sepet Tutarı Ne Kadar?
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              placeholder="400 örn."
              value={aov}
              onChange={(e) => setAov(e.target.value)}
              className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 pr-10 text-foreground outline-none focus:border-brand-to"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">
              ₺
            </span>
          </div>
        </label>

        <label className="flex flex-col gap-2">
          <span className="text-center font-bold text-foreground">
            Ortalama Tıklama Başına Maliyetiniz Ne Kadar?
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              placeholder="3 örn."
              value={cpc}
              onChange={(e) => setCpc(e.target.value)}
              className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 pr-10 text-foreground outline-none focus:border-brand-to"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">
              ₺
            </span>
          </div>
        </label>

        <button
          type="submit"
          className="mx-auto rounded-2xl bg-brand-from px-8 py-3 font-semibold text-background transition hover:opacity-90"
        >
          Bütçenizi Hesaplayın
        </button>
      </form>

      {result && (
        <div className="mt-8 rounded-2xl bg-background p-6 text-center">
          <p className="text-sm text-foreground/60">
            Tahmini Aylık Reklam Bütçeniz
          </p>
          <p className="mt-1 text-3xl font-bold text-foreground">
            {formatTL(result.budget)} ₺
          </p>
          <div className="mt-4 flex flex-col gap-1 text-sm text-foreground/70">
            <p>Hedefinize ulaşmak için gereken sipariş sayısı: {formatTL(result.orders)}</p>
            <p>
              %1 dönüşüm oranıyla gereken tıklama sayısı:{" "}
              {formatTL(result.clicks)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
