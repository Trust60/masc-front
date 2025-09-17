import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Instructor } from "@/components/sections/instructor";
import { AIExpertHero } from "@/components/sections/ai-expert-hero";
import { AIExpertReasons } from "@/components/sections/ai-expert-reasons";
import { AIExpertProgram } from "@/components/sections/ai-expert-program";
import { AIExpertBenefits } from "@/components/sections/ai-expert-benefits";
import { AIExpertTarget } from "@/components/sections/ai-expert-target";
import { AIExpertPricing } from "@/components/sections/ai-expert-pricing";
import { AIExpertReviews } from "@/components/sections/ai-expert-reviews";
import { AIExpertCTA } from "@/components/sections/ai-expert-cta";

export default function AIExpertPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AIExpertHero />
        <AIExpertReasons />
        <AIExpertProgram />
        <AIExpertBenefits />
        <AIExpertTarget />
        <Instructor />
        <AIExpertPricing />
        <AIExpertReviews />
        <AIExpertCTA />
      </main>
      <Footer />
    </div>
  );
}
