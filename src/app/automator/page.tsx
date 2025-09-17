import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Instructor } from "@/components/sections/instructor";
import { AutomatorHero } from "@/components/sections/automator-hero";
import { AutomatorReasons } from "@/components/sections/automator-reasons";
import { AutomatorProgram } from "@/components/sections/automator-program";
import { AutomatorPricing } from "@/components/sections/automator-pricing";
import { AutomatorReviews } from "@/components/sections/automator-reviews";
import { AutomatorCTA } from "@/components/sections/automator-cta";

export default function AutomatorPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <AutomatorHero />
        <AutomatorReasons />
        <Instructor />
        <AutomatorProgram />
        <AutomatorPricing />
        <AutomatorReviews />
        <AutomatorCTA />
      </main>
      <Footer />
    </div>
  );
}
