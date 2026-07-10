import Link from "next/link";

const posts = [
  {
    slug: "ugc-vs-aigc",
    title: "UGC vs AIGC: Hangi İçerik Formatı Daha İyi Dönüşüm Sağlıyor?",
    date: "3 Şubat 2025",
    readTime: "6dk Okuma",
    excerpt:
      "Kullanıcı kaynaklı içerikler (UGC) ile yapay zeka destekli görsel üretimi (AIGC) arasındaki farklar, avantajlar ve hangi durumda hangisini kullanmanız gerektiği hakkında kapsamlı bir rehber.",
  },
  {
    slug: "meta-reklamlarinda-roas-nasil-artirilir",
    title: "Meta Reklamlarında ROAS Nasıl Artırılır? 5 Temel Strateji",
    date: "15 Ocak 2025",
    readTime: "5dk Okuma",
    excerpt:
      "Reklam bütçenizden en yüksek verimi almak için kreatif test döngüsü, audience segmentasyonu ve bid stratejilerini nasıl doğru kurgulamanız gerektiğini açıklıyoruz.",
  },
];

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 md:px-10">
      <h2 className="mb-8 font-semibold text-foreground">
        Son Blog Yazılarımız
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg bg-foreground/[0.04] p-6"
          >
            <h3 className="font-semibold text-foreground">{post.title}</h3>
            <div className="mt-3 flex items-center gap-4 text-sm text-foreground/60">
              <span>📅 {post.date}</span>
              <span>🕐 {post.readTime}</span>
            </div>
            <p className="mt-3 text-sm text-foreground/80">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sm font-semibold underline underline-offset-2"
            >
              Devamını Oku
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-block rounded-full border border-foreground/20 px-6 py-2.5 text-sm font-semibold text-foreground"
        >
          Tüm Blog Yazılarını Gör
        </Link>
      </div>
    </section>
  );
}
