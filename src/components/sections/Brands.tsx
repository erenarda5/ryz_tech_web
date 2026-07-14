"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const brands = [
  {
    src: "/icons/loles-logo.png",
    alt: "Lole's",
    width: 168,
    height: 45,
    className: "h-8 w-auto object-contain md:h-10",
  },
  {
    src: "/icons/gods-logo.png",
    alt: "Gods Next Door",
    width: 272,
    height: 38,
    className: "h-[27px] w-auto object-contain md:h-[34px]",
  },
  {
    src: "/icons/momenta-logo.png",
    alt: "Momenta",
    width: 266,
    height: 32,
    className: "h-6 w-auto object-contain md:h-[31px]",
  },
  {
    src: "/icons/michaels-logo.png",
    alt: "Michael's",
    width: 265,
    height: 39,
    className: "h-7 w-auto object-contain md:h-[35px]",
  },
];

export default function Brands() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    function check() {
      if (!el) return;
      setAtStart(el.scrollLeft < 8);
      setAtEnd(el.scrollWidth - el.clientWidth - el.scrollLeft < 8);
    }

    check();
    el.addEventListener("scroll", check);
    const observer = new ResizeObserver(check);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", check);
      observer.disconnect();
    };
  }, []);

  const maskImage = atStart
    ? atEnd
      ? "none"
      : "linear-gradient(to right, black 80%, transparent 100%)"
    : atEnd
      ? "linear-gradient(to right, transparent 0%, black 20%)"
      : "linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)";

  return (
    <section className="mx-auto max-w-7xl px-6 pt-12 pb-4 md:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
        Markalarımız
      </h2>
      <div
        ref={scrollRef}
        style={{ WebkitMaskImage: maskImage, maskImage }}
        className="flex items-center gap-x-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-between md:gap-y-8 md:overflow-visible [&::-webkit-scrollbar]:hidden"
      >
        {brands.map((brand) => (
          <Image
            key={brand.alt}
            src={brand.src}
            alt={brand.alt}
            width={brand.width}
            height={brand.height}
            quality={100}
            className={`shrink-0 ${brand.className}`}
          />
        ))}
      </div>
    </section>
  );
}
