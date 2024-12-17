import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Security } from "@/components/Security";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";
import { AppStores } from "@/components/AppStores";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <HowItWorks />
      <Security />
      <Testimonials />
      <AppStores />
      <CTA />
    </div>
  );
};

export default Index;