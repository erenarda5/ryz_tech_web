import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28">
      <Image
        src="/images/landing-page-hero.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <h1 className="max-w-2xl text-4xl font-bold leading-tight text-card-foreground md:text-5xl">
          Dijital Dünyada
          <br />
          <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
            Fark Yaratıyoruz
          </span>
        </h1>
        <p className="mt-6 max-w-xl font-semibold text-card-foreground/90">
          Reklam, kreatif prodüksiyon ve pazaryeri yönetimini verilerle
          optimize ediyor, markanızı hızlıca büyütüyoruz.
        </p>
        <Link
          href="/ucretsiz-teklif"
          className="mt-8 inline-block rounded-2xl bg-cta px-6 py-3 font-semibold text-card-foreground transition hover:opacity-90"
        >
          Ücretsiz Teklif Al
        </Link>
      </div>
    </section>
  );
}
