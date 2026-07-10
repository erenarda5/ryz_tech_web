import Image from "next/image";

const testimonials = [
  {
    quote:
      "RYZ ile çalışmak harikaydı. Yaratıcı yaklaşım ve profesyonel deneyimleri sayesinde proje istediğimiz seviyeye geldi çok hızlı çalıştılar, iletişimleri harikaydı",
    name: "Ahmet Yılmaz",
    title: "Proje Yöneticisi",
  },
];

export default function Testimonials() {
  const testimonial = testimonials[0];
  const hasMultiple = testimonials.length > 1;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
        İş Ortaklarımız Ne Diyor
      </h2>
      <div className="flex items-center justify-center gap-6">
        <button
          type="button"
          disabled={!hasMultiple}
          aria-label="Önceki yorum"
          className="shrink-0 disabled:cursor-default"
        >
          <Image src="/icons/buton-sol.png" alt="" width={66} height={68} />
        </button>

        <div className="max-w-2xl text-center">
          <p className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
          <div className="mt-4 text-cta">{"★".repeat(5)}</div>
          <p className="mt-4 font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-foreground/70">{testimonial.title}</p>
        </div>

        <button
          type="button"
          disabled={!hasMultiple}
          aria-label="Sonraki yorum"
          className="shrink-0 disabled:cursor-default"
        >
          <Image src="/icons/buton-sag.png" alt="" width={66} height={68} />
        </button>
      </div>
    </section>
  );
}
