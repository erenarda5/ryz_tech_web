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
      <h2 className="mb-8 font-semibold text-foreground">Markalarımız</h2>
      <div className="flex flex-wrap items-center gap-x-14 gap-y-6">
        {brands.map((brand) => (
          <div
            key={brand.alt}
            className="flex h-9 w-32 items-center justify-center md:h-10"
          >
            <Image
              src={brand.src}
              alt={brand.alt}
              width={brand.width}
              height={brand.height}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
