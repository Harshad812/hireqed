import {
  BannerSection,
  ExperienceEfficiency,
  HiringJourney,
  PromoSection,
  TestimonialsSection,
} from "@/components";
import { HireUsHeroImage } from "@/images";

export const HowItWorksContainer = () => {
  return (
    <div>
      <BannerSection
        title="Effortlessly find the Right Resources with HireQED.ai"
        description="Revolutionizing resource augmentation with innovative tools and top-tier talent."
        image={HireUsHeroImage}
        button={{
          primaryLabel: "Sign Up",
          secondaryLabel: "Learn More",
        }}
        textStyle="max-w-[574px]"
      />
      <HiringJourney />
      <ExperienceEfficiency />
      <TestimonialsSection />
      <PromoSection withImage />
    </div>
  );
};
