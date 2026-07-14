import Image from "next/image";

export default function BlogPostHero({
  title,
  date,
  readTime,
  tags,
}: {
  title: string;
  date: string;
  readTime: string;
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
        <h1 className="max-w-3xl text-4xl font-bold text-card-foreground md:text-5xl">
          {title}
        </h1>
        <div className="mt-5 flex items-center gap-4 text-sm text-card-foreground/80">
          <span className="flex items-center gap-1.5">
            <Image
              src="/icons/takvim-white.svg"
              alt=""
              width={16}
              height={16}
            />
            {date}
          </span>
          <span className="flex items-center gap-1.5">
            <Image
              src="/icons/saat-white.svg"
              alt=""
              width={16}
              height={16}
            />
            {readTime}
          </span>
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
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
