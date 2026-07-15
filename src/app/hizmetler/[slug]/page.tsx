import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQAccordion from "@/components/FAQAccordion";
import { services, getService } from "@/lib/services";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: `${service.title} | RYZTECH Digital Agency`,
    description: service.intro[0],
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <>
      <PageHero
        title={service.title}
        image={service.heroImage}
        breadcrumbs={[
          { label: "Neler Yapıyoruz", href: "/neler-yapiyoruz" },
          { label: service.title },
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <Link
          href="/neler-yapiyoruz"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-70"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 12H5M5 12L12 19M5 12L12 5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Tüm Hizmetleri Gör
        </Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-foreground">
              Genel Bakış
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              {service.intro.map((p) => (
                <p key={p} className="text-foreground/80">
                  {p}
                </p>
              ))}
            </div>

            <h2 className="mt-10 text-2xl font-bold text-foreground">
              Nasıl Yaklaşıyoruz
            </h2>
            <div className="mt-4 flex flex-col gap-4">
              <p className="text-foreground/80">{service.approach[0]}</p>
              {service.approachImage && (
                <Image
                  src={service.approachImage}
                  alt=""
                  width={1920}
                  height={1080}
                  quality={100}
                  className="w-full rounded-2xl border border-foreground/10"
                />
              )}
              {service.approach.slice(1).map((p) => (
                <p key={p} className="text-foreground/80">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <aside className="flex flex-col gap-4">
            <div className="rounded-2xl bg-foreground/[0.04] p-6">
              <h3 className="font-bold text-foreground">
                Araç ve Platformlar
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full bg-brand-from px-4 py-2 text-sm font-semibold text-background"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-foreground/[0.04] p-6">
              <h3 className="font-bold text-foreground">Teslim Edilenler</h3>
              <ul className="mt-4 flex flex-col gap-2.5 text-sm text-foreground/80">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <Link
              href="/ucretsiz-teklif"
              className="inline-block rounded-2xl bg-cta px-6 py-3 text-center font-semibold text-card-foreground transition hover:opacity-90"
            >
              Ücretsiz Teklif Al
            </Link>
          </aside>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-6">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <CtaBanner />
        </div>
      </div>
    </>
  );
}
