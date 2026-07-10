import Image from "next/image";
import Link from "next/link";
import { navGroups } from "@/lib/nav-links";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      <Image
        src="/images/footer.png"
        alt=""
        fill
        className="-z-10 object-cover"
      />
      <div className="mx-auto flex max-w-7xl flex-col gap-12 px-6 py-14 md:flex-row md:justify-between md:px-10">
        <div className="flex flex-col items-start gap-5">
          <Image
            src="/icons/footler-logo.png"
            alt="RYZTECH Digital Agency"
            width={161}
            height={96}
            className="h-auto w-32"
          />
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Image src="/icons/insta-icon.png" alt="" width={20} height={20} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/icons/linkedin-icon.png"
                alt=""
                width={20}
                height={20}
              />
            </a>
            <a href="#" aria-label="Türkçe">
              <Image src="/icons/tr-icon.png" alt="" width={62} height={20} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:gap-x-16">
          {navGroups.map((group) => (
            <div key={group.title}>
              <h3 className="mb-4 font-semibold text-card-foreground">
                {group.title}
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-card-foreground/85 hover:text-card-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
