import Link from "next/link";

export default function CtaBanner() {
  return (
    <div className="flex flex-col items-start gap-6 rounded-2xl bg-foreground/[0.04] p-8 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h3 className="text-xl font-bold text-foreground md:text-2xl">
          Hizmetlerimizi Denemek İçin Hemen Bize Ulaşabilirsin
        </h3>
        <p className="mt-2 text-sm text-foreground/70">
          Projenizden kısaca bahsedin, size özel bir teklifi hemen
          hazırlayalım
        </p>
      </div>
      <Link
        href="/ucretsiz-teklif"
        className="inline-block shrink-0 rounded-2xl bg-cta px-6 py-3 font-semibold text-card-foreground transition hover:opacity-90"
      >
        Ücretsiz Teklif Al
      </Link>
    </div>
  );
}
