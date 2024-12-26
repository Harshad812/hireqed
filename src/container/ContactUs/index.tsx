import {
  BannerSection,
  ContactUsForm,
  MapSection,
  PromoSection,
} from "@/components";
import { ContactUsHeroImage } from "@/images";

export const ContactUsContainer = () => {
  return (
    <div>
      <BannerSection
        title="Your Professional Support, Just a Message Away"
        description="We are here to help you with all your professional needs. Whether you have questions, need support, or want to learn more about our services, please feel free to reach out to us."
        image={ContactUsHeroImage}
        textStyle="max-w-[749px]"
      />
      <ContactUsForm />
      <MapSection
        title="Our Locations"
        description="With strategic hubs in the USA and India, we empower businesses across six continents, offering tailored solutions that drive growth and innovation."
      />
      <PromoSection />
    </div>
  );
};
