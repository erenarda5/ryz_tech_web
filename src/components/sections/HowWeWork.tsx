import Image from "next/image";

const steps = [
  {
    number: "01",
    numberImage: "/images/1-sayi.png",
    numberWidth: 144,
    numberHeight: 94,
    title: "Keşif",
    icon: "/icons/kesif-icon.png",
    width: 201,
    height: 150,
    description:
      "Hedeflerinizi, pazarınızı ve rakiplerinizi derinlemesine anlıyoruz ve analiz ediyoruz.",
  },
  {
    number: "02",
    numberImage: "/images/2-sayi.png",
    numberWidth: 141,
    numberHeight: 94,
    title: "Strateji",
    icon: "/icons/strateji-icon.png",
    width: 191,
    height: 252,
    description:
      "Kanal seçimi, mesaj mimarisi ve bütçe planlamasını net KPI'larla belirliyoruz.",
  },
  {
    number: "03",
    numberImage: "/images/3-sayi.png",
    numberWidth: 139,
    numberHeight: 94,
    title: "Üretim",
    icon: "/icons/uretim-icon.png",
    width: 171,
    height: 283,
    description:
      "Kreatif üretim, kampanya kurulumu ve tüm teknik altyapıyı hayata geçiriyoruz.",
  },
  {
    number: "04",
    numberImage: "/images/4-sayi.png",
    numberWidth: 144,
    numberHeight: 94,
    title: "Optimizasyon",
    icon: "/icons/optimizasyon-icon.png",
    width: 148,
    height: 238,
    description:
      "A/B testler, gerçek zamanlı raporlama ve sürekli iyileştirme döngüsüyle büyütüyoruz.",
  },
];

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <h2 className="mb-8 font-semibold text-foreground">Nasıl Çalışıyoruz</h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number}>
            <div className="flex h-28 w-28 items-center justify-center">
              <Image
                src={step.icon}
                alt=""
                width={step.width}
                height={step.height}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div className="relative mt-3">
              <Image
                src={step.numberImage}
                alt=""
                aria-hidden
                width={step.numberWidth}
                height={step.numberHeight}
                className="pointer-events-none absolute -left-2 -top-7 h-16 w-auto opacity-40"
              />
              <h3 className="relative font-semibold text-foreground">
                {step.title}
              </h3>
            </div>
            <p className="mt-1 text-sm text-foreground/70">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
