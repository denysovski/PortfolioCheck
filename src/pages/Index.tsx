import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { MarqueeSection } from "@/components/MarqueeSection";
import { WorkSection } from "@/components/WorkSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { SocialFloating } from "@/components/SocialFloating";
import { useLenis } from "@/hooks/use-lenis";
import { useGsapReveal } from "@/hooks/use-gsap";

const Index = () => {
  useLenis();
  const containerRef = useGsapReveal();

  return (
    <div ref={containerRef}>
      <Navbar />
      <SocialFloating />
      <HeroSection />
      <MarqueeSection />
      <WorkSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
};

export default Index;
