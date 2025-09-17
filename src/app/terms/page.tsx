import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { TermsContent } from "@/components/sections/terms-content";

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <TermsContent />
      </main>
      <Footer />
    </div>
  );
}
