import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Neler Yapıyoruz | RYZTECH Digital Agency",
  description:
    "Dijital pazarlamadan yaratıcı prodüksiyona, pazaryeri yönetiminden UI/UX tasarıma kadar RYZTECH'in sunduğu tüm hizmetler.",
};

type Stat = { value: string; label: string; sub: string };

type Service = {
  title: string;
  href: string;
  description: string;
  image: string | null;
  stats: Stat[];
};

const services: Service[] = [
  {
    title: "Dijital Pazarlama",
    href: "/hizmetler/dijital-pazarlama",
    description:
      "Meta, Google, TikTok, LinkedIn ve Yandex platformlarında ölçülebilir, tamamen optimize edilmiş reklam stratejileri kurguluyoruz. Veriye dayalı analitik içgörülerle, dijital pazarlama bütçenizi en yüksek yatırım getirisi sağlayacak şekilde yönetiyoruz.",
    image: null,
    stats: [
      { value: "4.2x", label: "Ortalama ROAS", sub: "+ 38%" },
      { value: "-41%", label: "CAC Düşüşü", sub: "YoY" },
      { value: "+67%", label: "CTR İyileştirme", sub: "90 Günde" },
    ],
  },
  {
    title: "Yaratıcı Prodüksiyon",
    href: "/hizmetler/yaratici-produksiyon",
    description:
      "Dijital mecraların dinamiklerine uygun, kullanıcı etkileşimini en üst seviyeye çıkaran video ve görsel içerikler geliştiriyoruz. UGC ve AIGC yaklaşımlarımızla, marka kimliğinizle tamamen uyumlu ve dönüşüm odaklı kreatif çözümler üretiyoruz.",
    image: "/images/yaratici-prod.png",
    stats: [
      { value: "34%", label: "Hook Rate", sub: "+ 22pp" },
      { value: "+89%", label: "Watch Time", sub: "Öncekine Oranla" },
      { value: "+156%", label: "Kreatif CTR", sub: "60 Günde" },
    ],
  },
  {
    title: "Pazaryeri Yönetimi",
    href: "/hizmetler/pazaryeri-yonetimi",
    description:
      "Amazon, Trendyol ve Hepsiburada gibi lider pazaryerlerindeki mağaza süreçlerinizi uçtan uca yönetiyoruz. Ürün optimizasyonu ve stratejik kampanya kurgularıyla markanızın dijital pazarlardaki satış hacmini büyütüyoruz.",
    image: "/images/pazaryeri-yon.png",
    stats: [
      { value: "3.8x", label: "Ortalama ROAS", sub: "+ 45%" },
      { value: "+120%", label: "Satış Artışı", sub: "3 Ayda" },
      { value: "Top 10", label: "Sıralama", sub: "90 Günde" },
    ],
  },
  {
    title: "Dijital Ürün ve Çözümler",
    href: "/hizmetler/dijital-urun-ve-cozumler",
    description:
      "Shopify mağaza kurulumu ve dönüşüm oranı optimizasyonu (CRO) süreçlerinizi uçtan uca kurguluyoruz. Teknik altyapı entegrasyonları ve kullanıcı deneyimi iyileştirmeleriyle markanızın dijital varlığını ve satış performansını güçlendiriyoruz.",
    image: null,
    stats: [
      { value: "+68%", label: "Dönüşüm Artışı", sub: "CRO Sonrası" },
      { value: "95+", label: "Sayfa Hızı", sub: "PageSpeed Skoru" },
      { value: "+150%", label: "Satış Büyümesi", sub: "Launch Sonrası" },
    ],
  },
  {
    title: "Kampanya ve İçerik Stratejisi",
    href: "/hizmetler/kampanya-ve-icerik-stratejisi",
    description:
      "Marka konumlandırmasından içerik mimarisine uzanan tüm süreçlerde, sürdürülebilir büyümeyi hedefleyen stratejik bir temel oluşturuyoruz. Kreatif kurgularımızı veri analitiğiyle destekleyerek, markanızın dijital performansını en üst seviyeye çıkarıyoruz.",
    image: "/images/kampanya-icerik.png",
    stats: [
      { value: "+210%", label: "Büyüme", sub: "6 Ayda" },
      { value: "5.8%", label: "Engagement Rate", sub: "+3.2pp" },
      { value: "+89%", label: "Lead Kalitesi", sub: "MQL Dönüşümü" },
    ],
  },
  {
    title: "UI / UX - Web Tasarım",
    href: "/hizmetler/ui-ux-web-tasarim",
    description:
      "Kullanıcı davranışlarını temel alarak, estetik ve işlevselliği bir arada sunan responsive arayüz tasarımları geliştiriyoruz. Wireframe mimarileri ve kullanıcı akış diyagramlarıyla, dijital varlıklarınızı kullanıcı dostu ve dönüşüm odaklı platformlara dönüştürüyoruz.",
    image: "/images/ui-ux.png",
    stats: [
      { value: "Veri Eklenecek", label: "", sub: "6 Ayda" },
      { value: "Veri Eklenecek", label: "", sub: "6 Ayda" },
      { value: "Veri Eklenecek", label: "", sub: "6 Ayda" },
    ],
  },
];

function StatCard({ stat }: { stat: Stat }) {
  return (
    <div className="rounded-xl bg-foreground/[0.04] px-4 py-3">
      <p className="text-foreground">
        <span className="font-bold">{stat.value}</span>
        {stat.label && <span className="ml-1 text-sm">{stat.label}</span>}
      </p>
      <p className="mt-0.5 text-xs text-foreground/50">{stat.sub}</p>
    </div>
  );
}

export default function NelerYapiyoruzPage() {
  return (
    <>
      <PageHero title="Neler Yapıyoruz" image="/images/hero-beyond-2.png" />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6 py-16 md:px-10">
        {services.map((service, i) => (
          <div
            key={service.href}
            className="grid items-center gap-8 md:grid-cols-2 md:gap-14"
          >
            <div className={i % 2 === 1 ? "md:order-2" : undefined}>
              {service.image ? (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={531}
                  height={274}
                  quality={100}
                  className="aspect-[16/9] w-full rounded-2xl object-cover"
                />
              ) : (
                <div className="aspect-[16/9] w-full rounded-2xl bg-gradient-to-br from-brand-from to-brand-to" />
              )}
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground md:text-3xl">
                {service.title}
              </h2>
              <p className="mt-4 text-foreground/80">{service.description}</p>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {service.stats.map((stat, idx) => (
                  <StatCard key={idx} stat={stat} />
                ))}
              </div>

              <Link
                href={service.href}
                className="mt-6 inline-block text-sm font-semibold text-foreground underline underline-offset-2"
              >
                Detayları İncele
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
