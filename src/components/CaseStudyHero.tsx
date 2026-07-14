import Image from "next/image";

export default function CaseStudyHero({
  title,
  tags,
  website,
}: {
  title: string;
  tags: string[];
  website: string;
}) {
  return (
    <section className="relative isolate flex min-h-[400px] flex-col justify-end overflow-hidden pb-16 md:min-h-[480px] md:pb-20">
      <Image
        src="/images/hero-sapka-3.png"
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <h1 className="text-4xl font-bold text-card-foreground md:text-5xl">
          {title}
        </h1>
        <div className="mt-2 flex flex-wrap items-center gap-3">
          <p className="text-lg text-card-foreground/80">
            Growth Engine - Örnek Vaka Çalışması
          </p>
          <a
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-card-foreground hover:opacity-80"
          >
            {title} Sitesini Ziyaret Et
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17 17 7M17 7H8M17 7v9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-card-foreground px-4 py-1.5 text-sm font-semibold text-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
