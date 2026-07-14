export type CaseStudy = {
  slug: string;
  title: string;
  cardTitle: string;
  cardSummary: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  logoMaxHeight?: string;
  website: string;
  tags: string[];
  highlights: { title: string; sub: string }[];
  summary: string;
  goal: string;
  solution: string;
  results: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "loles",
    title: "Lole's",
    cardTitle: "Lole's Growth Engine",
    cardSummary:
      "Doğal bakım markasının Türkiye pazarına girişini ve büyüme sistemini kurduk.",
    logo: "/icons/loles-case.png",
    logoWidth: 1211,
    logoHeight: 476,
    logoMaxHeight: "max-h-8",
    website: "https://loles.com.tr/",
    tags: ["Meta Ads", "Google Ads", "Shopify", "UGC", "Kreatif Strateji"],
    highlights: [
      { title: "3 Kanal Kurulumu", sub: "Meta, Google, Shopify" },
      { title: "40+ Aylık Kreatif Test", sub: "Sürekli Optimizasyon" },
      { title: "Uçtan Uca Yönetim", sub: "Operasyon + Strateji" },
    ],
    summary:
      "Lole's, Diora Kimya çatısı altında yer alan doğal bakım markasıdır. Markanın Türkiye pazarına girişini yönettik ve performans pazarlaması, kreatif strateji/prodüksiyon ile Shopify operasyonlarını tek çatı altında birleştiren bir büyüme sistemi kurduk.",
    goal: "Türkiye'de sürdürülebilir büyüme ve kârlı, ölçeklenebilir bir müşteri kazanım yapısı oluşturmak. Kreatif üretimi test döngüleriyle sistematik hale getirmek. Shopify panel ve operasyonlarını hızlandırıp dönüşüm odaklı optimizasyonu geliştirmek.",
    solution:
      "Meta ve Google hesaplarını segmentasyon ve retargeting stratejisiyle yeniden yapılandırdık. UGC yaklaşımıyla statik ve video test eden bir kreatif strateji geliştirdik. Kazanan formatları ölçeklemek için sürekli kreatif test döngüleri kurduk. Ürün akışları ve dönüşüm optimizasyonunu kapsayan Shopify panel ve kampanya operasyonlarını yönettik.",
    results:
      "Lole's için ölçeklenebilir bir büyüme altyapısı kurduk: performans istikrarı arttı, operasyonlar hızlandı, kazanan kreatif formatlar belirlendi ve veriye dayalı optimizasyon rutinleri oluşturuldu.",
  },
  {
    slug: "michaels",
    title: "Michael's",
    cardTitle: "Michael's Growth Engine",
    cardSummary:
      "Shopify üzerinden web sitesi kurulumu ve dijital büyüme altyapısı oluşturduk.",
    logo: "/icons/michaels-logo-case.png",
    logoWidth: 265,
    logoHeight: 39,
    website: "https://www.michaelsofficial.com/tr",
    tags: ["Shopify", "Web Tasarım", "Meta Ads", "Google Ads", "E-ticaret"],
    highlights: [
      { title: "Satışa Hazır Altyapı", sub: "Shopify Kurulumu" },
      { title: "Tutarlı Marka Dili", sub: "Uçtan Uca Kimlik" },
      { title: "Ölçülebilir Büyüme", sub: "Performans Odaklı" },
    ],
    summary:
      "Michael's için Shopify üzerinden web sitesini kurduk ve dijital büyüme altyapısını oluşturduk. Marka dilini ve büyüme süreçlerini tek bir çatı altında yapılandırıyoruz.",
    goal: "Tutarlı bir marka dili ve ölçülebilir büyüme sağlamak. Satışa hazır, profesyonel bir e-ticaret altyapısı oluşturmak.",
    solution:
      "Ürün taksonomisi ve site mimarisiyle Shopify mağazasını kurduk. Kampanya yönetim akışlarıyla Meta ve Google reklam hesaplarını oluşturduk. İçerik stratejisi yönlendirmesi ve uygulama önerileri sunduk.",
    results:
      "Michael's için satışa hazır Shopify altyapısı ve performans pazarlama operasyonları kuruldu; ölçülebilir büyümeye uygun sürdürülebilir bir yönetim düzeni oluşturuldu.",
  },
  {
    slug: "momenta-yasam",
    title: "Momenta Yaşam",
    cardTitle: "Momenta Yaşam Growth Engine",
    cardSummary:
      "Satış süreçlerini uçtan uca yönetip ROAS ve dönüşüm hedeflerine odaklandık.",
    logo: "/icons/momenta-logo-case2.png",
    logoWidth: 3823,
    logoHeight: 528,
    website: "https://momentasaglik.com/",
    tags: ["Meta Ads", "AIGC", "Raporlama", "Kampanya Stratejisi"],
    highlights: [
      { title: "AIGC Kreatif Hız", sub: "AI Destekli Üretim Sistemi" },
      { title: "Haftalık Raporlama", sub: "Düzenli Performans Takibi" },
      { title: "Sürekli Optimizasyon", sub: "Daha İyi Ölçekleme" },
    ],
    summary:
      "Momenta Yaşam'ın satış süreçlerini uçtan uca yönetiyoruz: kampanya stratejisini kuruyor, reklamları optimize ediyor ve performansı düzenli olarak raporluyoruz. Kreatif üretimi statik ve AI görselleriyle hızlandırarak büyüme döngüsünü sürekli besliyoruz.",
    goal: "Daha iyi ROAS, daha güçlü dönüşüm ve sürdürülebilir büyüme. Kreatif test hızını artırmak ve optimizasyon döngüsünü netleştirmek.",
    solution:
      "Kampanya stratejisi ve kanal yönetimi: kurulum, optimizasyon, ölçekleme. Düzenli performans raporlama ve aksiyon planları. Statik + AIGC (Yapay Zeka destekli) kreatif üretimiyle hızlı test/iterasyon. Ürün & fiyatlandırma çalışmalarına destek.",
    results:
      "Daha hızlı kreatif test ve daha net optimizasyon döngüsüyle ROAS ve dönüşüm hedeflerine odaklanan, sürdürülebilir büyümeyi destekleyen bir satış sistemi kuruldu.",
  },
  {
    slug: "gods-next-door",
    title: "Gods Next Door",
    cardTitle: "Gods Next Door Growth Engine",
    cardSummary:
      "360° pazarlama yaklaşımıyla sıfırdan 6 haneli ciro seviyesine taşıdık.",
    logo: "/icons/gods-logo-case.png",
    logoWidth: 272,
    logoHeight: 38,
    website: "https://www.godsnextdoor.com/",
    tags: [
      "Meta Ads",
      "İçerik Yönetimi",
      "Kampanya Stratejisi",
      "Ürün Seçimi",
    ],
    highlights: [
      { title: "6 Haneli Ciro", sub: "Sıfırdan Kurulan Sistem" },
      { title: "360° Yönetim", sub: "Tam Kapsamlı Yaklaşım" },
      { title: "Sezon Planı Hazır", sub: "Ölçeklenebilir Ürün Listesi" },
    ],
    summary:
      "360° pazarlama yaklaşımıyla reklam performansı, içerik yönetimi ve kampanya stratejisini uçtan uca yönetiyoruz.",
    goal: "Ölçeklenebilir bir büyüme altyapısı kurmak ve yeni sezonda büyüyecek ürünleri, sıfırdan inşa edilen dijital pazarlama temeli üzerinden belirlemek.",
    solution:
      "Kampanya stratejisi: ürün odaklı plan, sezon kurgusu, bütçe dağılımı. Reklam performans yönetimi ve sürekli optimizasyon. İçerik yönetimi: kreatif plan + üretim akışı + test/iterasyon.",
    results:
      "Kurulan 360° büyüme sistemiyle marka sıfırdan 6 haneli ciro seviyesine geldi; yeni sezon için ölçeklenecek ürün listesi ve kampanya planı hazırlandı.",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
