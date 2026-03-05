import Link from "next/link";
import { siteConfig } from "@/data/site-config";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-ink text-paper/80 relative overflow-hidden">
      {/* Subtle accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-terracotta/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-heading text-2xl text-paper mb-3">
              {siteConfig.name}
            </h3>
            <p className="text-paper/50 text-sm leading-relaxed">
              Custom websites for small businesses and professionals.
              Fast, affordable, and 100% yours. {siteConfig.location}.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-paper mb-4 text-sm uppercase tracking-wider">
              Pages
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-paper/50 hover:text-terracotta transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
          <div>
            <h4 className="font-medium text-paper mb-4 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-terracotta hover:text-terracotta-dark transition-colors text-sm"
            >
              {siteConfig.email}
            </a>
            <p className="text-paper/50 text-sm mt-2">
              {siteConfig.location}
            </p>
          </div>
        </div>
        <div className="border-t border-paper/10 mt-12 pt-8 text-center text-paper/30 text-sm">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
