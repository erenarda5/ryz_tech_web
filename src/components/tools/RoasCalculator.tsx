"use client";

import { useState } from "react";

function formatTL(value: number) {
  return value.toLocaleString("tr-TR", { maximumFractionDigits: 2 });
}

export default function RoasCalculator() {
  const [price, setPrice] = useState("");
  const [productCost, setProductCost] = useState("");
  const [shipping, setShipping] = useState("");
  const [commission, setCommission] = useState("");
  const [other, setOther] = useState("");
  const [result, setResult] = useState<{
    totalCost: number;
    breakEvenRoas: number | null;
    netProfit: number;
  } | null>(null);

  function handleCalculate(e: React.FormEvent) {
    e.preventDefault();
    const p = parseFloat(price.replace(",", "."));
    const values = [productCost, shipping, commission, other].map((v) =>
      parseFloat(v.replace(",", ".")),
    );
    if (!p || values.some((v) => Number.isNaN(v))) {
      setResult(null);
      return;
    }
    const totalCost = values.reduce((sum, v) => sum + v, 0);
    if (totalCost <= 0) {
      setResult(null);
      return;
    }
    const netProfit = p - totalCost;
    // ROAS = Gelir / Reklam Harcaması. Başabaş noktasında reklam harcamanız
    // net kârınıza (fiyat - toplam maliyet) eşit olur, bu yüzden doğru
    // formül fiyatı toplam maliyete değil, net kâra bölmektir.
    const breakEvenRoas = netProfit > 0 ? p / netProfit : null;
    setResult({ totalCost, breakEvenRoas, netProfit });
  }

  const fields = [
    {
      label: "Ürün Maliyeti",
      value: productCost,
      set: setProductCost,
      placeholder: "300 örn.",
    },
    {
      label: "Kargo&Paketleme",
      value: shipping,
      set: setShipping,
      placeholder: "50 örn.",
    },
    {
      label: "Komisyon Ücretleri",
      value: commission,
      set: setCommission,
      placeholder: "80 örn.",
    },
    {
      label: "Diğer Giderler",
      value: other,
      set: setOther,
      placeholder: "20 örn.",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl rounded-2xl bg-foreground/[0.04] p-8 md:p-10">
      <h2 className="text-center text-2xl font-bold text-foreground">
        ROAS Hesaplayıcı
      </h2>
      <p className="mt-2 text-center text-foreground/70">
        Zarar Etmeden Satış Yapabilmeniz İçin Gerekli Minimum ROAS Oranını
        Hesaplayın
      </p>

      <form onSubmit={handleCalculate} className="mt-8 flex flex-col gap-6">
        <label className="flex flex-col gap-2">
          <span className="text-center font-bold text-foreground">
            Satış Fiyatınız Nedir?
          </span>
          <div className="relative">
            <input
              type="text"
              inputMode="decimal"
              placeholder="1.000 örn."
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 pr-10 text-foreground outline-none focus:border-brand-to"
            />
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">
              ₺
            </span>
          </div>
        </label>

        <div>
          <p className="mb-4 text-center font-bold text-foreground">
            Ürün Başına Maliyetleriniz Ne Kadar?
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {fields.map((field) => (
              <label key={field.label} className="flex flex-col gap-2">
                <span className="text-sm text-foreground/70">
                  {field.label}
                </span>
                <div className="relative">
                  <input
                    type="text"
                    inputMode="decimal"
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={(e) => field.set(e.target.value)}
                    className="w-full rounded-xl border border-foreground/15 bg-background px-4 py-3 pr-10 text-foreground outline-none focus:border-brand-to"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-foreground/50">
                    ₺
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="mx-auto rounded-2xl bg-brand-from px-8 py-3 font-semibold text-background transition hover:opacity-90"
        >
          Bütçenizi Hesaplayın
        </button>
      </form>

      {result && (
        <div className="mt-8 rounded-2xl bg-background p-6 text-center">
          {result.breakEvenRoas !== null ? (
            <>
              <p className="text-sm text-foreground/60">
                Minimum (Başabaş) ROAS Değeriniz
              </p>
              <p className="mt-1 text-3xl font-bold text-foreground">
                {result.breakEvenRoas.toFixed(2)}x
              </p>
              <div className="mt-4 flex flex-col gap-1 text-sm text-foreground/70">
                <p>Ürün başına toplam maliyetiniz: {formatTL(result.totalCost)} ₺</p>
                <p>Reklamsız net kârınız: {formatTL(result.netProfit)} ₺</p>
              </div>
              <p className="mt-4 text-sm font-semibold text-cta">
                Bu oranın altındaki ROAS değerleri zarara yol açar.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-foreground/60">Sonuç</p>
              <p className="mt-1 text-xl font-bold text-cta">
                Bu maliyetlerle kâr marjınız yok
              </p>
              <p className="mt-4 text-sm text-foreground/70">
                Ürün başına toplam maliyetiniz ({formatTL(result.totalCost)}{" "}
                ₺) satış fiyatınıza eşit veya ondan yüksek. Reklam
                harcamasından bağımsız olarak hiçbir ROAS değeri bu satışı
                kârlı hale getiremez — önce fiyat veya maliyet
                kalemlerinizi gözden geçirmeniz gerekir.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
