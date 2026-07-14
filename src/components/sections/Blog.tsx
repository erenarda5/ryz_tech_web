import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import FadeIn from "@/components/FadeIn";
import { blogPosts } from "@/lib/blog-posts";

export default function Blog() {
  const posts = blogPosts.slice(0, 2);

  return (
    <section className="mx-auto max-w-7xl px-6 pt-4 pb-12 md:px-10">
      <h2 className="mb-8 text-2xl font-semibold text-foreground md:text-3xl">
        Son Blog Yazılarımız
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 80}>
            <BlogCard post={post} />
          </FadeIn>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/blog"
          className="inline-block rounded-full bg-brand-from px-6 py-2.5 text-sm font-semibold text-background"
        >
          Tüm Blog Yazılarını Gör
        </Link>
      </div>
    </section>
  );
}
