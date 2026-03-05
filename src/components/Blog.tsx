"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { blogPosts } from "@/data/blog-posts";
import { AnimateIn } from "@/components/AnimateIn";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Blog() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateIn className="text-center mb-12">
          <p className="text-terracotta font-medium mb-3">Blog</p>
          <h1 className="text-4xl md:text-5xl font-heading text-ink mb-4">
            Tips & Resources
          </h1>
          <p className="text-lg text-ink/60 max-w-xl mx-auto">
            Practical advice on getting your business online, making your site
            faster, and reaching more customers.
          </p>
        </AnimateIn>

        <div ref={ref} className="space-y-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={false}
              animate={
                shouldShow
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.4,
                delay: shouldShow ? i * 0.1 : 0,
                ease: "easeOut" as const,
              }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="card-gradient-border block bg-white rounded-2xl p-8 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <time className="text-xs text-warm-gray">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span className="text-xs text-warm-gray">&middot;</span>
                  <span className="text-xs text-warm-gray">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading text-2xl text-ink group-hover:text-terracotta transition-colors mb-2">
                  {post.title}
                </h2>
                <p className="text-ink/60 text-sm leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-paper text-ink/50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
