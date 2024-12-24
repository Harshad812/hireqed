import { Button } from "@/components/Button";
import { MapImage } from "@/images";
import Image from "next/image";

interface MapSectionProps {
  title: string;
  description: string;
}

export const MapSection = ({ title, description }: MapSectionProps) => {
  return (
    <section className="">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col 2xl:gap-16 xl:gap-14 lg:gap-12 md:gap-10 gap-8">
            <div className="flex flex-col xl:gap-12 md:gap-11 gap-10">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">{title}</h2>
              <div className="w-full max-w-[775px] mx-auto text-center">
                <p className="text-gray-600 xl:text-xl md:text-lg text-base font-normal font-source">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="relative w-full mx-auto 2xl:max-w-[1320px] xl:max-w-[1120px] lg:max-w-[940px] max-w-[710px]">
                <div className="">
                  <Image
                    src={MapImage}
                    alt="service-image"
                    className="w-full h-full object-contain"
                    priority={true}
                  />
                </div>
                <div className="absolute 2xl:top-[108px] lg:top-[70px] top-[50px] 2xl:left-[88px] lg:left-[68px] left-[38px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] lg:max-w-[210px] max-w-[180px]">
                    <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">North America</h2>
                    <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">United States of America and Canada</p>
                  </div>
                </div>
                <div className="absolute 2xl:top-[210px] xl:top-[165px] lg:top-[115px] top-[85px] 2xl:left-[448px] xl:left-[378px] lg:left-[288px] left-[238px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] lg:max-w-[210px] max-w-[180px]">
                    <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Europe</h2>
                    <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">UK, Germany, Ireland and France</p>
                  </div>
                </div>
                <div className="absolute 2xl:top-[326px] xl:top-[276px] lg:top-[225px] top-[175px] 2xl:right-[302px] xl:right-[270px] lg:right-[220px] right-[150px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] lg:max-w-[210px] max-w-[180px]">
                    <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Middle East</h2>
                    <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">UAE, Saudi Arabia, Oman, Qatar and Kuwait</p>
                  </div>
                </div>
                <div className="absolute 2xl:bottom-[135px] xl:bottom-[105px] lg:bottom-[85px] bottom-[55px] 2xl:left-[367px] xl:left-[315px] lg:left-[265px] left-[200px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] lg:max-w-[210px] max-w-[180px]">
                    <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Africa</h2>
                    <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">South Africa, Nigeria and Botswana</p>
                  </div>
                </div>
                <div className="absolute 2xl:bottom-[111px] xl:bottom-[100px] lg:bottom-[80px] bottom-[60px] 2xl:right-[96px] xl:right-[90px] lg:right-[80px] right-[60px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] lg:max-w-[210px] max-w-[180px]">
                    <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Asia</h2>
                    <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">India, Singapore, Malaysia and Thailand</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="fill"
                  label="See all locations"
                  type="submit"
                  className="py-4 px-12 min-w-[240px] text-base leading-5 font-poppins font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
