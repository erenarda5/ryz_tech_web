import Image from "next/image";
import Link from "next/link";

type Crumb = { label: string; href?: string };

export default function PageHero({
  title,
  image,
  breadcrumbs,
}: {
  title: string;
  image: string;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden px-6 pt-36 pb-16 md:px-10 md:pt-44 md:pb-20">
      <Image
        src={image}
        alt=""
        fill
        priority
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold text-card-foreground md:text-5xl">
          {title}
        </h1>
        {breadcrumbs && (
          <p className="mt-3 text-sm text-card-foreground/70">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label}>
                {i > 0 && " > "}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-card-foreground">
                    {crumb.label}
                  </Link>
                ) : (
                  crumb.label
                )}
              </span>
            ))}
          </p>
        )}
      </div>
    </section>
  );
}
