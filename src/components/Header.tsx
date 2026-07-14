"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navGroups } from "@/lib/nav-links";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/icons/hero-logo.svg"
            alt="RYZTECH Digital Agency"
            width={220}
            height={52}
            priority
            quality={100}
          />
        </Link>

        {!isOpen && (
          <button
            type="button"
            aria-label="Menüyü aç"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="flex h-10 w-10 items-center justify-center"
          >
            <Image
              src="/icons/hamburger-menu.svg"
              alt=""
              width={28}
              height={20}
            />
          </button>
        )}
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-foreground/40"
          />
          <div className="fixed inset-4 z-50 overflow-y-auto rounded-3xl shadow-xl md:inset-8">
            <Image
              src="/images/hamburger-menu.png"
              alt=""
              fill
              quality={100}
              sizes="100vw"
              className="-z-10 object-cover"
            />

            <button
              type="button"
              aria-label="Menüyü kapat"
              onClick={() => setIsOpen(false)}
              className="absolute right-8 top-10 z-10 flex h-10 w-10 items-center justify-center text-card-foreground md:right-14 md:top-12"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4L20 20M20 4L4 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <div className="flex h-full flex-col overflow-y-auto pl-10 pr-8 py-10 md:pl-24 md:pr-14 md:py-12">
              <div className="flex flex-1 items-center">
                <div className="flex w-full items-end justify-between gap-8">
                  <nav className="flex flex-col gap-7 md:gap-9">
                    {navGroups.map((group) => (
                      <div key={group.title}>
                        <h3 className="mb-2.5 text-2xl font-bold text-card-foreground md:mb-4 md:text-5xl">
                          {group.titleHref ? (
                            <Link
                              href={group.titleHref}
                              onClick={() => setIsOpen(false)}
                              className="hover:text-card-foreground/80"
                            >
                              {group.title}
                            </Link>
                          ) : (
                            group.title
                          )}
                        </h3>
                        <ul className="flex flex-col gap-1.5 md:gap-2">
                          {group.links.map((link) => (
                            <li key={link.href}>
                              <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base text-card-foreground/90 hover:text-card-foreground md:text-xl"
                              >
                                {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </nav>

                  <div className="flex flex-col items-center gap-6">
                    <div className="hidden flex-col items-center gap-5 md:flex">
                      <Image
                        src="/icons/footer-logo.png"
                        alt="RYZTECH Digital Agency"
                        width={161}
                        height={96}
                        quality={100}
                        className="h-auto w-52"
                      />
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
                          <Image
                            src="/icons/tr-icon.svg"
                            alt=""
                            width={62}
                            height={20}
                          />
                        </a>
                      </div>
                    </div>
                    <Link
                      href="/ucretsiz-teklif"
                      onClick={() => setIsOpen(false)}
                      className="inline-block rounded-full bg-cta px-6 py-3 text-base font-semibold text-card-foreground transition hover:opacity-90"
                    >
                      Ücretsiz Teklif Al
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
