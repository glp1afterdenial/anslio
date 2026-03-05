export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-your-website-doesnt-need-to-be-complicated",
    title: "Why Your Website Doesn\u2019t Need to Be Complicated",
    excerpt:
      "Your business website doesn\u2019t need a monthly subscription, a complicated dashboard, or a maintenance plan. Here\u2019s why a simpler approach gets better results.",
    content: `
Most small business websites are straightforward: a few pages, some photos, a contact form, maybe a menu or price list. Yet most website companies will steer you toward platforms that are built for way more complexity than you need.

## The Problem with Typical Website Platforms

Platforms like WordPress power a lot of the web, but that power comes with baggage:

- **Security risks** \u2014 These platforms are the #1 target for hackers. They need constant software updates to stay safe.
- **Slow load times** \u2014 Every time someone visits your site, it has to assemble the page from scratch. That takes time.
- **Monthly fees** \u2014 You\u2019re paying to keep a server running 24/7, even if your site only gets 50 visitors a day.
- **Constant upkeep** \u2014 Software updates, plugin updates, backups \u2014 things break if you don\u2019t stay on top of it.

## A Simpler Way to Build

The sites we build are different. Every page is pre-built and ready to load the instant someone visits. No behind-the-scenes processing, no moving parts that can break.

This means:

- **Blazing fast** \u2014 Pages load in under 1 second. Google rewards this with better placement in search results.
- **Virtually unhackable** \u2014 There\u2019s nothing to exploit. No admin panel, no login page, no database.
- **Free to keep online** \u2014 Top-tier hosting platforms offer free hosting for sites like these.
- **Zero maintenance** \u2014 No updates, no patches, no \u201cyour site is down\u201d emergencies.

## But What About Content Updates?

This is where most people hesitate. \u201cWhat if I need to change something?\u201d

Simple \u2014 you tell us what to change, and we handle it. Usually within 24 hours. For clients on our optional maintenance plan, this is included at no extra cost.

## The Bottom Line

If your website is mostly informational \u2014 and most small business sites are \u2014 a simpler approach gives you better speed, better security, and lower costs than any subscription platform.

Your website should work for you, not the other way around.
    `.trim(),
    date: "2026-02-15",
    readTime: "4 min read",
    tags: ["Websites", "Small Business", "Speed"],
  },
  {
    slug: "why-website-speed-matters",
    title: "Why Website Speed Matters for Your Business",
    excerpt:
      "Google scores every website from 0 to 100 on speed and quality. Here\u2019s what that means for your business, and why our sites consistently score perfect.",
    content: `
If you\u2019ve ever wondered how fast your website loads, Google has a free tool that grades it on a scale of 0 to 100. Most business websites score somewhere between 40 and 70. Ours hit 100.

## What Google Measures

Google looks at four things when it grades your website:

1. **Speed** \u2014 How fast your site loads and becomes usable
2. **Accessibility** \u2014 Whether your site works for everyone, including people using screen readers
3. **Best Practices** \u2014 Whether your site follows modern web standards and is free of errors
4. **Search Visibility** \u2014 Whether Google can properly find and list your site in search results

Each area gets its own score. A perfect 100 in Speed means your site loads exceptionally fast.

## Why This Matters for Your Business

Google has been clear: faster websites rank higher in search results. But it\u2019s not just about search rankings:

- **53% of visitors** leave a site if it takes longer than 3 seconds to load
- **A 1-second delay** in load time can reduce sales inquiries by 7%
- **Visitors perceive** fast sites as more professional and trustworthy

## Why Our Sites Score So Well

The way we build websites is fundamentally different from platforms like Squarespace or WordPress:

- **Pages are ready instantly** \u2014 No waiting for a server to build the page
- **No unnecessary bloat** \u2014 We only include what your site actually needs
- **Optimized from the start** \u2014 Images, fonts, and design are all fine-tuned during the build process
- **Served from the closest location** \u2014 Your site is cached globally, so it loads fast no matter where your visitors are

## What This Means for You

Every site we build targets a perfect score on Google\u2019s speed test. We don\u2019t just check a box \u2014 we engineer for speed from the ground up.

The result? A site that loads faster than your competitors\u2019, ranks higher on Google, and makes a stronger first impression on every visitor.
    `.trim(),
    date: "2026-02-28",
    readTime: "3 min read",
    tags: ["Website Speed", "Google", "Business Tips"],
  },
];
