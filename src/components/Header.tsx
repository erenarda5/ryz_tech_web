"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { navGroups } from "@/lib/nav-links";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
        <Link href="/" className="shrink-0">
          <Image
            src="/icons/hero-logo.png"
            alt="RYZTECH Digital Agency"
            width={190}
            height={45}
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
            <div className="flex min-h-full flex-col justify-center gap-12 px-8 py-10 md:px-14 md:py-12">
              <nav className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-3">
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-4 text-2xl font-bold text-card-foreground md:text-3xl">
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
                    <ul className="flex flex-col gap-3">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-card-foreground/90 hover:text-card-foreground md:text-lg"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>

              <div className="flex justify-end">
                <Link
                  href="/iletisim"
                  onClick={() => setIsOpen(false)}
                  className="inline-block rounded-full bg-cta px-8 py-4 text-lg font-semibold text-card-foreground transition hover:opacity-90"
                >
                  Ücretsiz Teklif Al
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
