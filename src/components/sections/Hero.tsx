import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-36 pb-20 md:px-10 md:pt-44 md:pb-28">
      <Image
        src="/images/landing-page-hero.png"
        alt=""
        fill
        priority
        className="-z-10 object-cover"
      />
      <div className="mx-auto max-w-7xl">
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-card-foreground md:text-5xl">
          Dijital Dünyada{" "}
          <span className="bg-gradient-to-r from-accent-from to-accent-to bg-clip-text text-transparent">
            Fark Yaratıyoruz
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-card-foreground/90">
          Performans pazarlamadan yaratıcı prodüksiyona — ölçülebilir
          sonuçlar, kalıcı marka izleri. Markanızın gerçek potansiyelini
          birlikte ortaya çıkarıyoruz.
        </p>
        <Link
          href="/iletisim"
          className="mt-8 inline-block rounded-md bg-cta px-6 py-3 font-semibold text-card-foreground transition hover:opacity-90"
        >
          İletişime Geç
        </Link>
      </div>
    </section>
  );
}
