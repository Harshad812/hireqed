import Image from "next/image";
import { Button } from "@/components/Button";
import { title } from "process";
import IconsServicesLogo from "./../../../images/Icons-Services-logo.svg";
import IllustrationImage from "../../../images/Illustration-img.png";

export const ServicesSection = () => {
  const ServicesTitleData = [
    {
      id: 1,
      title: "IT Services & Resources"
    },
    {
      id: 2,
      title: "Analytics & AI Offerings"
    },
    {
      id: 3,
      title: "Digital Transformation"
    },
    {
      id: 4,
      title: "Tech Consultation"
    },
  ]
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Elevating Your Projects with Expert Solutions</h2>
            </div>
            <div className="shadow-card rounded-lg flex flex-row">
              <div className="py-[61px] px-[60px] w-full max-w-[calc(100%-444px)]">
                <div className="flex flex-col gap-20">
                  <div className="flex items-center gap-4">
                    {ServicesTitleData.map((items, index) => (
                      <div className="" key={index}>
                        <span className="block text-primary-400 text-base font-medium p-2.5 hover:text-primary-200 transition-all duration-300 ease-in">{items.title}</span>
                      </div>
                    ))}
                  </div>
                  <div className="">
                    <div className="flex flex-col gap-14">
                      <div className="flex flex-col gap-4">
                        <div className="size-12">
                          <Image
                            src={IconsServicesLogo}
                            alt=""
                            className="w-full h-full"
                            priority={true}
                          />
                        </div>
                        <div className="flex flex-col gap-6">
                          <h3 className="text-[40px] leading-[52px] font-medium bg-primary-gradient bg-clip-text text-fill-transparent inline-block">IT Services & Resources</h3>
                          <p className="text-gray-600 text-xl font-normal font-sourceSans">
                            Connect with top-tier IT professionals, including developers, system admins, and support specialists, tailored to your project needs. Flexible options for both short and long-term engagements.
                          </p>
                        </div>
                      </div>
                      <div className="">
                        <Button
                          variant="fill"
                          label="Learn More"
                          type="submit"
                          className="py-4 px-8 text-base leading-5 font-poppins font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                        />
                      </div>
                    </div>
                  </div>
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
