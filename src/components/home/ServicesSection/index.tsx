"use client";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Button";
import { Tabs } from "@/components/Tabs";
import { servicesData } from "@/constants/data";
import { IllustrationImage } from "@/images";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

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
    <div className="lg:px-0 sm:px-[30px] px-3">
      <div className="flex flex-col xl:gap-14 md:gap-12 sm:gap-10 gap-8">
        <div className="flex flex-col gap-4">
          <div className="sm:size-12 size-8">
            <Image
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full"
              priority={true}
            />
          </div>
          <div className="flex flex-col sm:gap-6 gap-4">
            <h3 className="2xl:text-[40px] 2xl:leading-[52px] lg:text-4xl sm:text-3xl text-2xl font-medium bg-primary-gradient bg-clip-text text-fill-transparent inline-block">
              {title}
            </h3>
            <p className="text-gray-600 xl:text-xl md:text-lg text-base font-normal font-source">
              {description}
            </p>
          </div>
        </div>
        <div className="">
          <Button
            variant="fill"
            label={buttonLabel}
            type="submit"
            className="sm:py-4 py-3 px-8 text-base leading-5 font-poppins font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
          />
        </div>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  const searchParams = useSearchParams();
  const serviceQuery = searchParams.get("service");
  const [selectedTab, setSelectedTab] = useState(0);

  const scrollToServices = (serviceName: string) => {
    const newUrl = `/?service=${encodeURIComponent(serviceName)}#services`;
    window.history.pushState(null, "", newUrl);
    const target = document.getElementById("services");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (serviceQuery) {
      scrollToServices(serviceQuery);
      const tabIndex = servicesData.findIndex(
        (service) => service.title.toLowerCase() === serviceQuery.toLowerCase()
      );
      if (tabIndex !== -1) {
        setSelectedTab(tabIndex);
      }
    }
  }, [serviceQuery]);

  return (
    <section className="" id="services">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col md:gap-12 gap-10">
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Elevating Your Projects with Expert Solutions
              </h2>
            </div>
            <div className="shadow-card rounded-lg flex lg:flex-row flex-col">
              <div className="2xl:py-[61px] lg:py-12 md:py-10 sm:py-7 py-4 laptop:ps-[60px] 2xl:ps-[50px] lg:ps-[30px] laptop:pe-[60px] 2xl:pe-[30px] xl:pe-[30px] w-full 2xl:max-w-[calc(100%-440px)] lg:max-w-[calc(100%-400px)]">
                <div className="flex flex-col gap-20">
                  {/* Loop through servicesData */}
                  <Tabs
                    tabs={servicesData.map((item) => item.title)}
                    defaultIndex={selectedTab}
                  >
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
              <div className="w-full 2xl:max-w-[440px] lg:max-w-[400px]">
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
