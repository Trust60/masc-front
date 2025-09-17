import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Courses } from "@/components/sections/courses";
import { Reviews } from "@/components/sections/reviews";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <Hero />
        <Features />
        <Courses />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
