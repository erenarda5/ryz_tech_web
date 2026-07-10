import Link from "next/link";
import { navGroups } from "@/lib/nav-links";

const descriptions: Record<string, string> = {
  "Dijital Pazarlama":
    "Meta, Google, TikTok, LinkedIn ve Yandex üzerinden ölçülebilir, optimize edilmiş reklamcılık. Verilere dayalı kararlarla bütçenizi en verimli şekilde kullanıyoruz.",
  "Yaratıcı Prodüksiyon":
    "Kaydırmayı durduran video, görsel ve içerikler. UGC & AIGC yaklaşımıyla marka kimliğinizle uyumlu, platforma özel, dönüştüren kreatifler üretiriz.",
  "Pazaryeri Yönetimi":
    "Amazon, Trendyol ve Hepsiburada gibi pazaryerlerinde satıcı panel yönetimi, ürün optimizasyonu ve kampanya yönetimi ile satışlarınızı büyütüyoruz.",
  "Dijital Ürün ve Çözümler":
    "Shopify mağaza kurulumu ve CRO odaklı iyileştirmelerle markanızın dijital varlığını güçlendiriyoruz.",
  "Kampanya ve İçerik Stratejisi":
    "Marka konumlandırmasından içerik mimarisine — büyümeyi yönlendiren stratejik zemin. Veriyle desteklenen yaratıcılık.",
  "UI / UX - Web Tasarım":
    "Shopify mağaza kurulumu, web sitesi tasarım & geliştirme ve CRO odaklı iyileştirmelerle markanızın dijital varlığını güçlendiriyoruz.",
};

const services = navGroups[0].links.map((link) => ({
  ...link,
  description: descriptions[link.label] ?? "",
}));

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <h2 className="mb-8 font-semibold text-foreground">Hizmetlerimiz</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.href}
            className="relative rounded-lg bg-gradient-to-br from-brand-from to-brand-to p-6 pb-12 text-card-foreground"
          >
            <span className="absolute right-5 top-5 h-4 w-4 rounded-full bg-cta" />
            <h3 className="mb-2 pr-8 font-semibold">{service.label}</h3>
            <p className="text-sm text-card-foreground/85">
              {service.description}
            </p>
            <Link
              href={service.href}
              className="absolute bottom-5 right-6 text-sm underline underline-offset-2 hover:text-card-foreground/80"
            >
              Detayları İncele
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
