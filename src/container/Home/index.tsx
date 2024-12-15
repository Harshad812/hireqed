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
      <AboutUsSection title="We aim to empower organizations by connecting them with the right talent swiftly and efficiently, simplifying the hiring process to ensure quality, reliability, and a seamless experience for any project." button={true} />
      <TestimonialsSection />
      <MapSection
        title="Connecting Across Continents"
        description="With strategic hubs in the USA and India, we empower businesses across six continents, offering tailored solutions that drive growth and innovation."
      />
      <PromoSection withImage />
    </div>
  );
};
