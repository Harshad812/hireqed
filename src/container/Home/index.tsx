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
    <div className="">
      <HeroSection />
      <SolutionTechnology
        titleData={titleData}
        languagesIconData={languagesIconData}
      />
      <ServicesSection />
      <WhyUsSection />
      <AboutUsSection />
      <TestimonialsSection />
      <MapSection
        title="Connecting Across Continents"
        description="With strategic hubs in the USA and India, we empower businesses across six continents, offering tailored solutions that drive growth and innovation."
      />
      <PromoSection withImage />
    </div>
  );
};
