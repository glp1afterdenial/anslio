import { Metadata } from "next";
import { Contact } from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your business and get a free quote within 24 hours. No sales calls, no pressure — just a clear plan and honest pricing.",
};

export default function ContactPage() {
  return <Contact />;
}
