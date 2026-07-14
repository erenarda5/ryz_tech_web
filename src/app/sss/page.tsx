import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CtaBanner from "@/components/CtaBanner";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Sık Sorulan Sorular | RYZTECH Digital Agency",
  description:
    "2026 dijital pazarlama trendlerine göre çalışma şeklimiz hakkında markaların bize en sık sorduğu sorular ve cevapları.",
};

const faqs = [
  {
    question:
      "Google'ın yapay zeka destekli arama sonuçlarına göre SEO ve içerik çalışması yapıyor musunuz?",
    answer:
      "Evet. Artık tek hedef Google'ın ilk sayfasında görünmek değil, yapay zeka özetlerinde ve konuşma tabanlı sonuçlarda doğru bağlamda referans gösterilmek. İçeriklerinizi net, yapılandırılmış ve soru-cevap formatına uygun kurguluyor, ürün ve hizmet verilerinizi yapılandırılmış veri olarak sunuyor ve marka sesinizi tüm mecralarda tutarlı tutuyoruz.",
  },
  {
    question: "Reklam ve içerik stratejilerimizde yapay zekayı nasıl kullanıyorsunuz?",
    answer:
      "Kreatif üretimden hedef kitle analizine kadar süreçlerimizin birçok noktasında yapay zeka destekli araçlar kullanıyoruz; ama nihai kararı her zaman veriye ve deneyime dayalı olarak ekibimiz veriyor. Amacımız yapay zekayı hız ve ölçek kazandırmak için kullanmak, yaratıcılığın yerine geçirmek değil.",
  },
  {
    question:
      "Kampanyalarımızı kurgularken güncel tüketici davranışlarını nasıl dikkate alıyorsunuz?",
    answer:
      "Google Trends ve platform verilerini düzenli takip ediyoruz. Örneğin ekonomik belirsizlik dönemlerinde tüketicilerin uzun vadeli vaatler yerine anlık, erişilebilir kazanımlara yöneldiğini görüyoruz; bu yüzden kampanya ve sadakat kurgularını da uzak büyük ödüller yerine daha sık ve somut kazanımlara göre tasarlıyoruz.",
  },
  {
    question:
      "Türkiye pazarına özgü trendleri kampanyalarımıza nasıl yansıtıyorsunuz?",
    answer:
      "Türkiye'de yapay zeka destekli iş süreçlerine ve sürdürülebilirlik/sıfır atık temalı ürünlere olan ilgi hızla artıyor. Markanızı bu iki eksende (verimlilik ve somut sürdürülebilirlik) doğru konumlandırarak hem arama görünürlüğünüzü hem de marka güveninizi güçlendiriyoruz.",
  },
  {
    question: "Kısa video içerik (Reels, TikTok vb.) üretiyor musunuz?",
    answer:
      "Evet, kısa formatlı video bugün dikkat çekmenin ve marka bilinirliği yaratmanın en güçlü yollarından biri. Kısa video, mikro-influencer iş birlikleri ve kullanıcıyı içeriğin bir parçası haline getiren etkileşimli formatları stratejimizin merkezine koyuyoruz.",
  },
  {
    question: "Genç kitlelere (Gen Z) yönelik kampanya kurgulayabiliyor musunuz?",
    answer:
      "Evet. Genç kitleler marka hikayelerini yalnızca izlemek değil, o hikayenin bir parçası olmak istiyor. Bu yüzden tek yönlü reklam anlatıları yerine, kullanıcıların kendi içeriğini üretebileceği (UGC) ve markanın bir parçası hissedebileceği katılımcı kampanyalar kurguluyoruz.",
  },
  {
    question:
      "Sürdürülebilirlik mesajlarını marka iletişimimize nasıl entegre ediyorsunuz?",
    answer:
      "Belirsiz ve genel \"çevreye duyarlıyız\" söylemleri yerine somut, ölçülebilir faydaları öne çıkarıyoruz — ürününüzün dayanıklılığı, enerji verimliliği ya da kanıtlanabilir bir çevresel etkisi gibi. Tüketiciler artık kanıtlanamayan geniş kapsamlı iddialara (greenwashing) karşı daha şüpheci, biz de mesajlarınızı buna göre kurguluyoruz.",
  },
  {
    question: "Müşteri verilerimizin gizliliğine ve şeffaf kullanımına nasıl yaklaşıyorsunuz?",
    answer:
      "Üçüncü taraf çerezlerin kademeli olarak kalkmasıyla, sizin kendi topladığınız (first-party) veriye dayalı stratejiler kuruyoruz. Verinin nasıl toplandığını ve kullanıldığını şeffaf şekilde iletmek, kampanya kurgusunun ayrılmaz bir parçası — çünkü bu artık markanızın itibarını doğrudan etkileyen bir güven unsuru.",
  },
];

export default function SssPage() {
  return (
    <>
      <PageHero title="Sık Sorulan Sorular" image="/images/hero-sapka-3.png" />

      <div className="mx-auto max-w-7xl px-6 py-16 md:px-10">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground">
            Sık Sorulan Sorular
          </h2>

          <div className="mt-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-3xl">
          <CtaBanner />
        </div>
      </div>
    </>
  );
}
