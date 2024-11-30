import {
  AboutUsSection,

  BannerSection,

  HeroSection,

  MapSection,
  PromoSection,
  ServicesSection,
  SolutionTechnology,
  TestimonialsSection,
  WhyUsSection,
} from "@/components";
import { ExperienceEfficiency, HiringJourney } from "@/components/HireUs";
import { languagesIconData, titleData } from "@/constants/data";
import { HireUsHeroImage, IllustrationImage } from "@/images";

export const HomeContainer = () => {
  return (
    <div className="flex flex-col">
      {/* <BannerSection title="Effortlessly find the Right Talent with HireQED.ai"
        description="Revolutionizing resource augmentation with innovative tools and top-tier talent."
        image={HireUsHeroImage}
        button={{
          primaryLabel: "Sign Up",
          secondaryLabel: "Learn More",
        }}
      />
      <HiringJourney />
      <ExperienceEfficiency /> */}

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
