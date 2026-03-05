"use client";

import Link from "next/link";
import { BlogPost as BlogPostType } from "@/data/blog-posts";
import { AnimateIn } from "@/components/AnimateIn";

function renderContent(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={i}
          className="text-2xl font-heading text-ink mt-10 mb-4"
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("- **")) {
      const listItems: React.ReactNode[] = [];
      while (i < lines.length && lines[i].startsWith("- ")) {
        const text = lines[i].replace(/^- /, "");
        const parts = text.split(/(\*\*.*?\*\*)/);
        listItems.push(
          <li key={i} className="text-ink/70 leading-relaxed">
            {parts.map((part, j) =>
              part.startsWith("**") && part.endsWith("**") ? (
                <strong key={j} className="text-ink font-medium">
                  {part.slice(2, -2)}
                </strong>
              ) : (
                part
              )
            )}
          </li>
        );
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 space-y-2 my-4">
          {listItems}
        </ul>
      );
      continue;
    } else if (line.trim() === "") {
      // skip empty lines
    } else {
      const parts = line.split(/(\*\*.*?\*\*)/);
      elements.push(
        <p key={i} className="text-ink/70 leading-relaxed my-4">
          {parts.map((part, j) =>
            part.startsWith("**") && part.endsWith("**") ? (
              <strong key={j} className="text-ink font-medium">
                {part.slice(2, -2)}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      );
    }
    i++;
  }

  return elements;
}

export function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="pt-32 pb-24 px-6">
      <article className="max-w-3xl mx-auto">
        <AnimateIn>
          <Link
            href="/blog"
            className="text-sm text-terracotta hover:text-terracotta-dark transition-colors mb-8 inline-block"
          >
            ← Back to Blog
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <time className="text-sm text-warm-gray">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="text-sm text-warm-gray">·</span>
            <span className="text-sm text-warm-gray">{post.readTime}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ink mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-10">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white text-ink/50 px-3 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="bg-white rounded-2xl p-8 md:p-12">
            {renderContent(post.content)}
          </div>
        </AnimateIn>
      </article>
    </div>
  );
}
