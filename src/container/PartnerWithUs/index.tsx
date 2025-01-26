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
        textStyle="xl:max-w-[570px] max-w-[510px]"
      />
      <PartnerWithHireQED />
      <OurProcess />
      <WhyPartnerWithUs />
      <AboutUsSection
        title="We aim to empower organizations by connecting them with the right resources swiftly and efficiently, streamlining the process to ensure quality, reliability, and a seamless experience for any project. Our platform enables businesses to access a diverse network of skilled professionals and trusted vendors, fostering collaboration and driving success across industries."
        withButton={true}
      />
      <TestimonialsSection />
      <PromoSection />
    </div>
  );
};
