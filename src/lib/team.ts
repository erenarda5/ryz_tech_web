export type TeamMember = {
  name: string;
  title: string;
  bio: string;
  photo: string;
};

export const team: TeamMember[] = [
  {
    name: "Ahmet Faruk Akça",
    title: "Co-Founder & Digital Marketing Manager",
    bio: "Dijital pazarlamanın farklı kanallarında derinlemesine uzmanlaşarak, Meta, Google, TikTok ve LinkedIn üzerindeki kampanyalarla markaların ölçeklenmesine öncülük ediyor.",
    photo: "/images/ahmet.jfif",
  },
  {
    name: "Ersagun İslamoğulları",
    title: "Co-Founder & Digital Product Manager",
    bio: "Dijital ürün geliştirme ve teknoloji deneyimini büyüme odaklı bir bakış açısıyla birleştirerek, web ve e-ticaret çözümleriyle markalara güçlü bir dijital temel kazandırıyor.",
    photo: "/images/ersagun.webp",
  },
  {
    name: "Eren Arda",
    title: "Creative Content & UI/UX Design Intern",
    bio: "İletişim ve Tasarım bölümü son sınıf öğrencisi olarak ekibimizde stajyer olarak yer alıyor; kreatif içerik üretimi ve UI/UX tasarım süreçlerinde destek sağlıyor.",
    photo: "/images/eren.png",
  },
];
