import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import { InstagramIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export const metadata: Metadata = {
  title: "İletişim | RYZTECH Digital Agency",
  description: "RYZTECH ile iletişime geçin, projeniz için hemen teklif alın.",
};

const contactDetails = [
  {
    label: "Adres",
    value: "Merkez Mah. Hasat Sk. No:52/1 Şişli/İstanbul",
    href: undefined,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M20 10.5c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10.5" r="2.75" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "Telefon",
    value: "0542 142 1301",
    href: "tel:+905421421301",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2 2C9.4 21 3 14.6 3 6a2 2 0 0 1 1-2Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "E-Posta",
    value: "info@ryztechdigital.com",
    href: "mailto:info@ryztechdigital.com",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function IletisimPage() {
  return (
    <>
      <PageHero title="İletişim" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-2xl font-bold text-foreground">
              RYZ Tech Ofis
            </h2>

            <div className="mt-6 flex flex-col gap-5">
              {contactDetails.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground">
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-sm text-foreground/60">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="font-semibold text-foreground hover:text-brand-to"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-foreground">
                        {item.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <a
                href="https://www.instagram.com/ryz.tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground transition hover:bg-foreground/10"
              >
                <InstagramIcon className="h-[18px] w-[18px]" />
              </a>
              <a
                href="https://tr.linkedin.com/company/ryz-tech"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground/[0.06] text-foreground transition hover:bg-foreground/10"
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </>
  );
}
