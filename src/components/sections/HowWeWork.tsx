import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Keşif",
    icon: "/icons/kesif-icon.png",
    width: 201,
    height: 150,
    description:
      "Hedeflerinizi, pazarınızı ve rakiplerinizi derinlemesine anlıyoruz ve analiz ediyoruz.",
  },
  {
    number: "02",
    title: "Strateji",
    icon: "/icons/strateji-icon.png",
    width: 191,
    height: 252,
    description:
      "Kanal seçimi, mesaj mimarisi ve bütçe planlamasını net KPI'larla belirliyoruz.",
  },
  {
    number: "03",
    title: "Üretim",
    icon: "/icons/uretim-icon.png",
    width: 171,
    height: 283,
    description:
      "Kreatif üretim, kampanya kurulumu ve tüm teknik altyapıyı hayata geçiriyoruz.",
  },
  {
    number: "04",
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
      <div className="grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4">
        {steps.map((step) => (
          <div key={step.number}>
            <Image
              src={step.icon}
              alt=""
              width={step.width}
              height={step.height}
              className="h-28 w-auto object-contain"
            />
            <div className="relative mt-2">
              <span
                aria-hidden
                className="pointer-events-none absolute -left-1 -top-3 text-4xl font-semibold text-foreground/10"
              >
                {step.number}
              </span>
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
