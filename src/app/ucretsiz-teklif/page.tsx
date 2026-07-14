import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import TeklifForm from "@/components/TeklifForm";

export const metadata: Metadata = {
  title: "Ücretsiz Teklif Al | RYZTECH Digital Agency",
  description:
    "Birkaç adımda projenizi anlatın, size özel hazırladığımız teklifi ekibimiz en kısa sürede sizinle paylaşsın.",
};

export default function UcretsizTeklifPage() {
  return (
    <>
      <PageHero title="Ücretsiz Teklif Al" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <TeklifForm />
      </div>
    </>
  );
}
