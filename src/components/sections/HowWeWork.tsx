import Image from "next/image";
import FadeIn from "@/components/FadeIn";

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
    iconOffset: -12,
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
    iconOffset: -12,
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
    iconOffset: -12,
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
    iconOffset: -4,
    description:
      "A/B testler, gerçek zamanlı raporlama ve sürekli iyileştirme döngüsüyle büyütüyoruz.",
  },
];

export default function HowWeWork() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-4 md:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
        Nasıl Çalışıyoruz
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-4">
        {steps.map((step, i) => (
          <FadeIn key={step.number} delay={i * 80}>
            <div>
              <div className="mx-auto flex h-40 w-40 items-center justify-center">
                <Image
                  src={step.icon}
                  alt=""
                  width={step.width}
                  height={step.height}
                  style={{ transform: `translateX(${step.iconOffset}px)` }}
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
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
