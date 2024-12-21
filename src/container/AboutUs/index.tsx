import {
  AboutUsSection,
  BannerSection,
  PromoSection,
  TestimonialsSection,
} from "@/components";
import { OurCoreValues, OurCulture, OurSection } from "@/components/AboutUs";
import { AboutUsHeroImage } from "@/images";

export const AboutUsContainer = () => {
  return (
    <div>
      <BannerSection
        title="Redefining Talent Solutions for a Smarter Tomorrow"
        description="At HireQED, we connect businesses with top talent and cutting-edge services, driving efficiency and growth through technology and innovation. Our mission is to simplify hiring and resource management, ensuring organizations achieve their goals with the right people at the right time."
        image={AboutUsHeroImage}
      />
      <OurSection />
      <OurCoreValues />
      <AboutUsSection
        title="Our leadership is driven by integrity and a commitment to empower teams. By promoting open communication and fostering innovation, we lead with purpose and accountability."
        withButton={false}
      />
      <OurCulture />
      <TestimonialsSection />
      <PromoSection />
    </div>
  );
};
