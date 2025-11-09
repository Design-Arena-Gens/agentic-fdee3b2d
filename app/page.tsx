import { NavBar } from "@/components/landing/NavBar";
import { Hero } from "@/components/landing/Hero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { EditorDemo } from "@/components/landing/EditorDemo";
import { PartnersMarquee } from "@/components/landing/PartnersMarquee";
import { Showcase } from "@/components/landing/Showcase";
import { PersonaHighlights } from "@/components/landing/PersonaHighlights";
import { Testimonials } from "@/components/landing/Testimonials";
import { Pricing } from "@/components/landing/Pricing";
import { Roadmap } from "@/components/landing/Roadmap";
import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

export default function Page() {
  return (
    <div className="min-h-screen bg-surface text-white">
      <NavBar />
      <main>
        <Hero />
        <PartnersMarquee />
        <FeatureGrid />
        <EditorDemo />
        <Showcase />
        <PersonaHighlights />
        <Testimonials />
        <Roadmap />
        <Pricing />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
