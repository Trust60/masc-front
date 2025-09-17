import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { PrivacyContent } from "@/components/sections/privacy-content";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <PrivacyContent />
      </main>
      <Footer />
    </div>
  );
}
