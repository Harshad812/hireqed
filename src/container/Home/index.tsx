import { AboutUsSection, MapSection, PromoSection, TestimonialsSection } from "@/components";
import { HeroSection, ServicesSection, SolutionTechnology, WhyUsSection } from "@/components/home";

export const HomeContainer = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SolutionTechnology />
      <ServicesSection />
      <WhyUsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <MapSection />
      <PromoSection />
    </div>
  );
};
