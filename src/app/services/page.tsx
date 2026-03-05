import { Metadata } from "next";
import { Services } from "@/components/Services";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description:
    "Custom website packages starting at $500. One-time pricing, no monthly fees. Starter ($500), Professional ($1,000), and Premium ($2,000) — every site is hand-built around your brand.",
};

export default function ServicesPage() {
  return <Services />;
}
