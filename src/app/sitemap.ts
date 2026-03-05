import { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: siteConfig.url, lastModified: new Date(), priority: 1.0 },
    { url: `${siteConfig.url}/services`, lastModified: new Date(), priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), priority: 0.8 },
    { url: `${siteConfig.url}/blog`, lastModified: new Date(), priority: 0.7 },
  ];

  const posts = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    priority: 0.6,
  }));

  return [...pages, ...posts];
}
