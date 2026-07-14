import Image from "next/image";
import Link from "next/link";
import { navGroups } from "@/lib/nav-links";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden">
      <Image
        src="/images/footer.png"
        alt=""
        fill
        quality={100}
        sizes="100vw"
        className="-z-10 object-cover"
      />
      <div className="mx-auto flex max-w-[1600px] flex-col gap-12 px-6 py-14 md:flex-row md:items-start md:pl-12 md:pr-72">
        <div className="flex flex-col items-center gap-4">
          <Link href="/">
            <Image
              src="/icons/footer-logo.png"
              alt="RYZTECH Digital Agency"
              width={161}
              height={96}
              quality={100}
              className="h-auto w-60 md:w-64"
            />
          </Link>
          <div className="flex items-center gap-3 text-card-foreground">
            <a
              href="https://www.instagram.com/ryz.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:opacity-80"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://tr.linkedin.com/company/ryz-tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:opacity-80"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a href="#" aria-label="Türkçe">
              <Image src="/icons/tr-icon.svg" alt="" width={62} height={20} />
            </a>
          </div>
          <p className="text-xs text-card-foreground/60">
            © 2026 RYZ Tech. Tüm hakları saklıdır.
          </p>
        </div>

        <div className="flex md:flex-1 md:justify-center">
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 md:flex md:gap-x-24">
            {navGroups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-4 font-semibold text-card-foreground">
                  {group.titleHref ? (
                    <Link
                      href={group.titleHref}
                      className="hover:text-card-foreground/80"
                    >
                      {group.title}
                    </Link>
                  ) : (
                    group.title
                  )}
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
      </div>
    </footer>
  );
}
