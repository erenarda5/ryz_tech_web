import Image from "next/image";

const brands = [
  { src: "/icons/loles-logo.png", alt: "Lole's", width: 168, height: 45 },
  {
    src: "/icons/gods-logo.png",
    alt: "Gods Next Door",
    width: 272,
    height: 38,
  },
  { src: "/icons/momenta-logo.png", alt: "Momenta", width: 266, height: 32 },
  {
    src: "/icons/michaels-logo.png",
    alt: "Michael's",
    width: 265,
    height: 39,
  },
];

export default function Brands() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
        Markalarımız
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-8">
        {brands.map((brand) => (
          <Image
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
            className="h-auto w-32 object-contain md:w-40"
          />
        ))}
      </div>
    </section>
  );
}
