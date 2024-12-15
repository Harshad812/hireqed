import {
  AboutUsSection,
  BannerSection,
  OurProcess,
  PartnerWithHireQED,
  PromoSection,
  TestimonialsSection,
  WhyPartnerWithUs,
} from "@/components";
import { PartnerWithUsHeroImage } from "@/images";

export const PartnerWithUsContainer = () => {
  return (
    <div>
      <BannerSection
        title="Become a Partner with HireQED.ai"
        description="Join our dynamic network of professionals and vendors committed to delivering top-notch solutions"
        image={PartnerWithUsHeroImage}
        button={{
          primaryLabel: "Join Now",
          secondaryLabel: "Get Started",
        }}
      />
      <PartnerWithHireQED />
      <OurProcess />
      <WhyPartnerWithUs />
      <AboutUsSection title="We aim to empower organizations by connecting them with the right talent swiftly and efficiently, simplifying the hiring process to ensure quality, reliability, and a seamless experience for any project." button={true} />
      <TestimonialsSection />
      <PromoSection />
    </div>
  );
};
