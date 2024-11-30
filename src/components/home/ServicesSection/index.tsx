import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Button";
import { Tabs } from "@/components/Tabs";
import { servicesData } from "@/constants/data";
import { IllustrationImage } from "@/images";

interface ContentProps {
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  buttonLabel: string;
}

export const Content: React.FC<ContentProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  buttonLabel,
}) => {
  return (
    <div className="">
      <div className="flex flex-col gap-14">
        <div className="flex flex-col gap-4">
          <div className="size-12">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full"
              priority={true}
            />
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-[40px] leading-[52px] font-medium bg-primary-gradient bg-clip-text text-fill-transparent inline-block">
              {title}
            </h3>
            <p className="text-gray-600 text-xl font-normal font-sourceSans">
              {description}
            </p>
          </div>
        </div>
        <div className="">
          <Button
            variant="fill"
            label={buttonLabel}
            type="submit"
            className="py-4 px-8 text-base leading-5 font-poppins font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
          />
        </div>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Elevating Your Projects with Expert Solutions
              </h2>
            </div>
            <div className="shadow-card rounded-lg flex flex-row">
              <div className="py-[61px] px-[60px] w-full max-w-[calc(100%-444px)]">
                <div className="flex flex-col gap-20">
                  {/* Loop through servicesData */}
                  <Tabs tabs={servicesData.map((item) => item.title)}>
                    {servicesData.map((service) => (
                      <div key={service.id}>
                        <Content
                          title={service.title}
                          description={service.description}
                          imageSrc={service.imageSrc}
                          imageAlt={service.imageAlt}
                          buttonLabel={service.buttonLabel}
                        />
                      </div>
                    ))}
                  </Tabs>
                </div>
              </div>
              <div className="">
                <Image
                  src={IllustrationImage}
                  alt="service-image"
                  className="w-full h-full object-contain"
                  priority={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
