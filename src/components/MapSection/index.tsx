import { Button } from "@/components/Button";
import { AfricaMap, AsiaMap, EuropeMap, MapImage, MiddleEastMap, NorthAmericaMap } from "@/images";
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
            <div className="flex flex-col sm:gap-12 gap-10">
              <div className="relative w-full mx-auto 2xl:max-w-[1320px] xl:max-w-[1120px] lg:max-w-[940px] sm:max-w-[400px] max-w-[325px]">
                <div className="lg:block hidden">
                  <Image
                    src={MapImage}
                    alt="Map Image"
                    className="w-full h-full object-contain"
                    priority={true}
                  />
                </div>
                <div className="lg:block flex flex-col md:gap-16 gap-12">
                  <div className="lg:static relative">
                    <div className="lg:hidden block">
                      <Image
                        src={NorthAmericaMap}
                        alt="NorthAmerica Map"
                        className="w-full h-full object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="absolute 2xl:top-[108px] lg:top-[70px] sm:top-[50px] top-[20px] 2xl:left-[88px] lg:left-[68px] sm:left-[50px] left-[20px]">
                      <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] sm:max-w-[210px] max-w-[188px] ">
                        <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">North America</h2>
                        <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">United States of America and Canada</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:static relative">
                    <div className="lg:hidden block">
                      <Image
                        src={AfricaMap}
                        alt="Africa Map"
                        className="w-full h-full object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="absolute 2xl:bottom-[135px] xl:bottom-[105px] lg:bottom-[85px] sm:bottom-[345px] bottom-[275px] 2xl:left-[367px] xl:left-[315px] lg:left-[265px] sm:left-[160px] left-[120px]">
                      <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] sm:max-w-[210px] max-w-[188px] ">
                        <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Africa</h2>
                        <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">South Africa, Nigeria and Botswana</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:static relative">
                    <div className="lg:hidden block">
                      <Image
                        src={EuropeMap}
                        alt="Europe Map"
                        className="w-full h-full object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="absolute 2xl:top-[210px] xl:top-[165px] lg:top-[115px] sm:top-[45px] top-[15px] 2xl:left-[448px] xl:left-[378px] lg:left-[288px] sm:left-[48px] left-[20px]">
                      <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] sm:max-w-[210px] max-w-[188px] ">
                        <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Europe</h2>
                        <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">UK, Germany, Ireland and France</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:static relative">
                    <div className="lg:hidden block">
                      <Image
                        src={MiddleEastMap}
                        alt="MiddleEast Map"
                        className="w-full h-full object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="absolute 2xl:top-[326px] xl:top-[276px] lg:top-[225px] top-[0px] 2xl:right-[302px] xl:right-[270px] lg:right-[220px] right-[15px]">
                      <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] sm:max-w-[210px] max-w-[188px] ">
                        <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Middle East</h2>
                        <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">UAE, Saudi Arabia, Oman, Qatar and Kuwait</p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:static relative">
                    <div className="lg:hidden block">
                      <Image
                        src={AsiaMap}
                        alt="Asia Map"
                        className="w-full h-full object-contain"
                        priority={true}
                      />
                    </div>
                    <div className="absolute 2xl:bottom-[111px] xl:bottom-[100px] lg:bottom-[80px] sm:bottom-[160px] bottom-[120px] 2xl:right-[96px] xl:right-[90px] lg:right-[80px] sm:right-[160px] right-[115px]">
                      <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded xl:px-8 lg:px-5 px-4 xl:py-4 py-3 w-full 2xl:max-w-[280px] xl:max-w-[250px] sm:max-w-[210px] max-w-[188px] ">
                        <h2 className="text-primary-400 font-medium xl:text-xl lg:text-lg text-base capitalize">Asia</h2>
                        <p className="text-gray-600 font-normal font-source xl:text-base lg:text-sm text-xs xl:leading-5">India, Singapore, Malaysia and Thailand</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="fill"
                  label="See all locations"
                  type="submit"
                  className="sm:py-4 py-3 sm:px-12 px-8 sm:min-w-[240px] min-w-[180px] lg:text-base sm:text-sm text-xs leading-5 font-poppins font-medium sm:rounded-lg rounded text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
