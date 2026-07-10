"use client";

import { useMemo, useState } from "react";
import BlogCard from "@/components/BlogCard";
import type { BlogPost } from "@/lib/blog-posts";

const PAGE_SIZE = 8;
const ALL = "Hepsi";

export default function BlogListing({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [page, setPage] = useState(1);

  const filteredPosts = useMemo(
    () =>
      activeCategory === ALL
        ? posts
        : posts.filter((post) => post.tags.includes(activeCategory)),
    [posts, activeCategory],
  );

  const totalPages = Math.max(1, Math.ceil(filteredPosts.length / PAGE_SIZE));
  const currentPosts = filteredPosts.slice(
    (page - 1) * PAGE_SIZE,
    page * PAGE_SIZE,
  );

  function selectCategory(category: string) {
    setActiveCategory(category);
    setPage(1);
  }

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => selectCategory(category)}
            className={
              category === activeCategory
                ? "rounded-full bg-brand-from px-6 py-2 text-sm font-semibold text-background"
                : "rounded-full border border-foreground/20 px-6 py-2 text-sm font-semibold text-foreground hover:border-foreground/40"
            }
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 min-h-[220px]">
        {currentPosts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {currentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <p className="text-foreground/60">
            Bu kategoride henüz yazı bulunmuyor.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setPage(n)}
              className={
                n === page
                  ? "flex h-9 w-9 items-center justify-center rounded-full bg-brand-from text-sm font-semibold text-background"
                  : "flex h-9 w-9 items-center justify-center rounded-full bg-foreground/[0.06] text-sm font-semibold text-foreground hover:bg-foreground/10"
              }
            >
              {n}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
