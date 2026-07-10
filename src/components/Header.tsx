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
              className="absolute right-8 top-10 z-10 flex h-10 w-10 items-center justify-center text-4xl leading-none text-card-foreground md:right-14 md:top-12"
            >
              ×
            </button>
            <div className="flex min-h-full flex-col justify-between gap-10 px-8 py-10 md:px-14 md:py-12">
              <nav className="flex flex-col gap-8 md:gap-10">
                {navGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="mb-3 text-2xl font-semibold text-card-foreground">
                      {group.title}
                    </h3>
                    <ul className="flex flex-col gap-2">
                      {group.links.map((link) => (
                        <li key={link.href}>
                          <Link
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-card-foreground/90 hover:text-card-foreground"
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
                  className="inline-block rounded-full bg-cta px-6 py-3 font-semibold text-card-foreground transition hover:opacity-90"
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
