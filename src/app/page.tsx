import { Hero } from "@/components/home/Hero";
import { PageSpeedProof } from "@/components/home/PageSpeedProof";
import { WhyStatic } from "@/components/home/WhyStatic";
import { BuiltForYou } from "@/components/home/BuiltForYou";
import { ComparisonTable } from "@/components/home/ComparisonTable";
import { Pricing } from "@/components/home/Pricing";
import { Process } from "@/components/home/Process";
import { FAQ } from "@/components/home/FAQ";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <PageSpeedProof />
      <WhyStatic />
      <BuiltForYou />
      <ComparisonTable />
      <Pricing />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
