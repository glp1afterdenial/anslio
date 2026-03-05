import { Metadata } from "next";
import { Blog } from "@/components/Blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips and resources for small business owners on getting online, making your website faster, and reaching more customers.",
};

export default function BlogPage() {
  return <Blog />;
}
