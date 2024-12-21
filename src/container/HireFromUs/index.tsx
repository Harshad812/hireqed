import {
  BannerSection,
  ExperienceEfficiency,
  HiringJourney,
  PromoSection,
  TestimonialsSection,
} from "@/components";
import { HireUsHeroImage } from "@/images";

export const HireFromUsContainer = () => {
  return (
    <div>
      <BannerSection
        title="Effortlessly find the Right Talent with HireQED.ai"
        description="Revolutionizing resource augmentation with innovative tools and top-tier talent."
        image={HireUsHeroImage}
        button={{
          primaryLabel: "Sign Up",
          secondaryLabel: "Learn More",
        }}
      />
      <HiringJourney />
      <ExperienceEfficiency />
      <TestimonialsSection />
      <PromoSection withImage />
    </div>
  );
};
