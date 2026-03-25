import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesPreview from "@/components/sections/ServicesPreview";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/sections/FAQSection";
import BusinessInfoSection from "@/components/sections/BusinessInfoSection";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutPreview />
        <ServicesPreview />
        <PortfolioPreview />
        <BusinessInfoSection />
        <CTASection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}