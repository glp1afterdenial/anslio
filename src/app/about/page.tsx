import { Metadata } from "next";
import { About } from "@/components/About";

export const metadata: Metadata = {
  title: "About",
  description:
    "Anslio is a one-person web design studio in Jacksonville, FL. I build custom, hand-coded websites for small businesses — fast, affordable, and fully owned by you.",
};

export default function AboutPage() {
  return <About />;
}
