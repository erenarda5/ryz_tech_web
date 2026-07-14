"use client";

import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/FadeIn";

const testimonials = [
  {
    quote:
      "RYZ Tech ile çalışmak büyük bir rahatlık sağladı. İhtiyaçlarımıza her zaman hızlı çözümler üretip yaratıcı yaklaşımlarıyla markamızı bir üst seviyeye taşıdılar.",
    name: "Elif Diri",
    title: "Lole's - Diora Kimya",
  },
  {
    quote:
      "Profesyonel yaklaşımları sayesinde satışlarımızda gözle görülür bir artış yakaladık. RYZ Tech ekibiyle çalışmaktan çok memnunuz.",
    name: "Ege Sürekli",
    title: "Momenta Yaşam",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const hasMultiple = testimonials.length > 1;
  const testimonial = testimonials[index];

  function goTo(delta: number) {
    setIndex((i) => (i + delta + testimonials.length) % testimonials.length);
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-4 md:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
        İş Ortaklarımız Ne Diyor
      </h2>
      <FadeIn className="flex items-center justify-center gap-6">
        <button
          type="button"
          disabled={!hasMultiple}
          onClick={() => goTo(-1)}
          aria-label="Önceki yorum"
          className="shrink-0 transition-transform duration-200 hover:-translate-x-0.5 disabled:cursor-default disabled:hover:translate-x-0"
        >
          <Image
            src="/icons/buton-sol.png"
            alt=""
            width={66}
            height={68}
            className="h-9 w-auto"
          />
        </button>

        <div key={index} className="max-w-2xl animate-fade-in-up text-center">
          <p className="text-foreground">&ldquo;{testimonial.quote}&rdquo;</p>
          <p className="mt-4 font-semibold text-foreground">
            {testimonial.name}
          </p>
          <p className="text-sm text-foreground/70">{testimonial.title}</p>
        </div>

        <button
          type="button"
          disabled={!hasMultiple}
          onClick={() => goTo(1)}
          aria-label="Sonraki yorum"
          className="shrink-0 transition-transform duration-200 hover:translate-x-0.5 disabled:cursor-default disabled:hover:translate-x-0"
        >
          <Image
            src="/icons/buton-sag.png"
            alt=""
            width={66}
            height={68}
            className="h-9 w-auto"
          />
        </button>
      </FadeIn>
    </section>
  );
}
