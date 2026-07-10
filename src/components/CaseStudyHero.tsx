import Image from "next/image";

export default function CaseStudyHero({
  title,
  tags,
}: {
  title: string;
  tags: string[];
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
        <p className="mt-2 text-lg text-card-foreground/80">
          Growth Engine - Örnek Vaka Çalışması
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-card-foreground/30 bg-card-foreground/5 px-4 py-1.5 text-sm text-card-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
