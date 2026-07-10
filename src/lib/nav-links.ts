export type NavLink = {
  label: string;
  href: string;
};

export type NavGroup = {
  title: string;
  titleHref?: string;
  links: NavLink[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Neler Yapıyoruz",
    titleHref: "/neler-yapiyoruz",
    links: [
      { label: "Dijital Pazarlama", href: "/hizmetler/dijital-pazarlama" },
      {
        label: "Yaratıcı Prodüksiyon",
        href: "/hizmetler/yaratici-produksiyon",
      },
      { label: "Pazaryeri Yönetimi", href: "/hizmetler/pazaryeri-yonetimi" },
      {
        label: "Dijital Ürün ve Çözümler",
        href: "/hizmetler/dijital-urun-ve-cozumler",
      },
      {
        label: "Kampanya ve İçerik Stratejisi",
        href: "/hizmetler/kampanya-ve-icerik-stratejisi",
      },
      { label: "UI / UX - Web Tasarım", href: "/hizmetler/ui-ux-web-tasarim" },
    ],
  },
  {
    title: "Hakkımızda",
    links: [
      { label: "Sahadan Sonuçlar", href: "/sahadan-sonuclar" },
      { label: "Ekibimiz", href: "/ekibimiz" },
      { label: "İletişim", href: "/iletisim" },
      { label: "Blog", href: "/blog" },
      { label: "S.S.S", href: "/sss" },
    ],
  },
  {
    title: "Araçlar",
    links: [
      { label: "Bütçe Dağıtıcı", href: "/araclar/butce-dagitici" },
      { label: "Bütçe Hesaplayıcı", href: "/araclar/butce-hesaplayici" },
      { label: "ROAS Hesaplayıcı", href: "/araclar/roas-hesaplayici" },
    ],
  },
];
