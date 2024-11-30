import {
  AboutUsSection,
  HeroSection,
  MapSection,
  PromoSection,
  ServicesSection,
  SolutionTechnology,
  TestimonialsSection,
  WhyUsSection,
} from "@/components";
import { languagesIconData, titleData } from "@/constants/data";

export const HomeContainer = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <SolutionTechnology
        titleData={titleData}
        languagesIconData={languagesIconData}
      />
      <ServicesSection />
      <WhyUsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <MapSection />
      <PromoSection />
    </div>
  );
};
