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
          />
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((v) => !v)}
          className="relative z-[60] flex h-10 w-10 items-center justify-center"
        >
          {isOpen ? (
            <span className="text-3xl leading-none text-card-foreground">
              ×
            </span>
          ) : (
            <Image
              src="/icons/hamburger-menu.svg"
              alt=""
              width={28}
              height={20}
            />
          )}
        </button>
      </div>

      {isOpen && (
        <>
          <button
            type="button"
            aria-label="Menüyü kapat"
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-40 bg-foreground/40"
          />
          <div className="absolute right-0 top-0 z-50 max-h-[calc(100vh-1rem)] w-[90vw] max-w-sm overflow-y-auto rounded-bl-2xl bg-gradient-to-b from-brand-from to-brand-to px-8 pt-24 pb-10 shadow-xl">
            <nav className="flex flex-col gap-8">
              {navGroups.map((group) => (
                <div key={group.title}>
                  <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-card-foreground/60">
                    {group.title}
                  </h3>
                  <ul className="flex flex-col gap-2">
                    {group.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          onClick={() => setIsOpen(false)}
                          className="text-card-foreground hover:text-accent-to"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
