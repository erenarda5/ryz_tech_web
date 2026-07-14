import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FadeIn from "@/components/FadeIn";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Sahadan Sonuçlar | RYZTECH Digital Agency",
  description:
    "RYZTECH'in yürüttüğü projelerden gerçek sonuçlar ve örnek vaka çalışmaları.",
};

const banners = [
  "from-brand-from to-brand-to",
  "from-foreground to-brand-from",
  "from-brand-to to-accent-from",
  "from-accent-from to-accent-to",
];

export default function SahadanSonuclarPage() {
  return (
    <>
      <PageHero title="Sahadan Sonuçlar" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {caseStudies.map((study, i) => (
            <FadeIn key={study.slug} delay={i * 70}>
              <div className="overflow-hidden rounded-2xl bg-foreground/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div
                  className={`flex h-32 items-center justify-center bg-gradient-to-br p-6 ${banners[i % banners.length]}`}
                >
                  <div className="flex h-14 w-40 items-center justify-center rounded-lg bg-card-foreground px-4">
                    <Image
                      src={study.logo}
                      alt={study.title}
                      width={study.logoWidth}
                      height={study.logoHeight}
                      quality={100}
                      className={`max-w-full object-contain ${study.logoMaxHeight ?? "max-h-7"}`}
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between p-6">
                  <div>
                    <h2 className="text-xl font-bold text-foreground">
                      {study.cardTitle}
                    </h2>
                    <p className="mt-2 text-sm text-foreground/70">
                      {study.cardSummary}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-foreground/[0.06] px-3 py-1 text-xs text-foreground/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link
                    href={`/sahadan-sonuclar/${study.slug}`}
                    className="mt-4 inline-block self-end text-sm font-semibold underline underline-offset-2"
                  >
                    Devamını Oku
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
