import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import RoasCalculator from "@/components/tools/RoasCalculator";

export const metadata: Metadata = {
  title: "ROAS Hesaplayıcı | RYZTECH Digital Agency",
  description:
    "Ürün maliyetlerinize göre başabaş (minimum) ROAS değerinizi ücretsiz hesaplayın. ROAS nedir, nasıl hesaplanır ve ideal ROAS değeri ne olmalı öğrenin.",
};

export default function RoasHesaplayiciPage() {
  return (
    <>
      <PageHero title="ROAS Hesaplayıcı" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <RoasCalculator />

        <div className="mx-auto mt-16 flex max-w-3xl flex-col gap-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground">
              ROAS Nedir?
            </h2>
            <p className="mt-3 text-foreground/80">
              ROAS (Return on Ad Spend), reklama harcadığınız her 1 TL
              karşılığında elde ettiğiniz geliri gösteren temel bir
              performans metriğidir. Örneğin ROAS değeriniz 4 ise, harcadığınız
              her 1 TL reklam bütçesi karşılığında 4 TL gelir elde ediyorsunuz
              demektir. ROAS, kampanya performansını karşılaştırmanın ve
              bütçenizi hangi kanala, hangi ürüne yönlendireceğinize karar
              vermenin en hızlı yoludur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              İdeal ROAS Değeri Ne Olmalı?
            </h2>
            <p className="mt-3 text-foreground/80">
              "İyi" bir ROAS, sektöre, kâr marjına ve maliyet yapınıza göre
              değişir; herkese uyan tek bir sayı yoktur. Genel bir referans
              olarak e-ticarette 3x-4x arası bir ROAS makul kabul edilir, ancak
              gerçek referans noktanız kendi{" "}
              <strong className="text-foreground">
                başabaş ROAS
              </strong>{" "}
              değeriniz olmalıdır — yani ürün maliyetleriniz, kargo, komisyon
              ve diğer giderleriniz düşüldükten sonra ne kâr ne zarar
              ettiğiniz nokta. Başabaş noktasının altındaki her ROAS değeri,
              o satışta zarar ettiğiniz anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              Başabaş ROAS Nasıl Hesaplanır?
            </h2>
            <p className="mt-3 text-foreground/80">
              Önce ürün maliyeti, kargo &amp; paketleme, komisyon ücretleri ve
              diğer giderlerinizi toplayarak toplam maliyetinizi bulursunuz.
              Satış fiyatınızdan bu toplam maliyeti çıkardığınızda, reklam
              harcamasından önceki net kârınıza ulaşırsınız — başabaş
              noktasında reklama harcayabileceğiniz üst sınır tam olarak bu
              kâr kadardır. ROAS, gelirinizi reklam harcamanıza böldüğünüz
              için başabaş ROAS'ı bulmak üzere satış fiyatınızı bu net kâra
              bölersiniz.
            </p>
            <p className="mt-3 text-foreground/80">
              Örneğin 500 TL'ye sattığınız bir ürünün toplam maliyeti 300 TL
              ise, net kârınız 200 TL'dir. Başabaş ROAS değeriniz 500 ÷ 200 =
              2.5'tir — yani bu üründe kâra geçmek için her 1 TL'lik reklam
              harcamasından en az 2.5 TL gelir elde etmeniz gerekir. Bu
              değerin altına düşen bir ROAS, o satışta zarar ettiğiniz
              anlamına gelir.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground">
              Bu Hesaplayıcı Nasıl Çalışıyor?
            </h2>
            <p className="mt-3 text-foreground/80">
              Yukarıdaki araca satış fiyatınızı ve ürün başına tüm
              maliyetlerinizi girdiğinizde, toplam maliyetinizi, reklamsız
              net kârınızı ve zarar etmeden çalışabileceğiniz minimum ROAS
              değerinizi anında hesaplıyoruz. Bu sayıyı Meta Ads, Google Ads
              veya diğer reklam panellerinizdeki gerçek ROAS değerinizle
              karşılaştırarak kampanyalarınızın gerçekten kârlı olup
              olmadığını net şekilde görebilirsiniz.
            </p>
          </section>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <CtaBanner />
        </div>
      </div>
    </>
  );
}
