export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
}

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$500",
    description: "A clean, professional site for freelancers and solo businesses.",
    features: [
      "Up to 3 pages",
      "Looks great on every device",
      "Contact form",
      "1 round of revisions",
      "Ready in 2 weeks",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    price: "$1,000",
    description: "For growing businesses that want to stand out online and get found by customers.",
    features: [
      "Up to 7 pages",
      "Built to rank on Google",
      "Google Maps on your site",
      "3 rounds of revisions",
      "Visitor tracking setup",
      "Ready in 3 weeks",
    ],
    popular: true,
    cta: "Most Popular",
  },
  {
    name: "Premium",
    price: "$2,000",
    description: "A full-featured site for established businesses ready to go all in online.",
    features: [
      "Up to 15 pages",
      "Online booking integration",
      "Blog included",
      "Maximum Google visibility",
      "Unlimited revisions (30 days)",
      "Ready in 4 weeks",
    ],
    cta: "Go Premium",
  },
];

export const maintenanceAddon = {
  name: "Maintenance",
  price: "$35/mo",
  description: "Totally optional. Your site runs perfectly on its own — this is for businesses that want someone to handle updates for them.",
  features: [
    "Website updates (up to 2/month)",
    "Monthly visitor reports",
    "Priority support",
    "Speed monitoring",
  ],
};
