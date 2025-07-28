import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import WorkGallery from "@/components/work-gallery";
import ReviewsSection from "@/components/reviews-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkGallery />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
