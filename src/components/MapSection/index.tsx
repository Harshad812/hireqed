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
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-12">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">{title}</h2>
              <div className="w-full max-w-[775px] mx-auto text-center">
                <p className="text-gray-600 text-xl font-normal font-sourceSans">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="relative mx-9">
                <div className="">
                  <Image
                    src={MapImage}
                    alt="service-image"
                    className="w-full h-full object-contain"
                    priority={true}
                  />
                </div>
                <div className="absolute top-[108px] left-[88px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded px-8 py-4 w-full max-w-[280px]">
                    <h2 className="text-primary-400 font-medium text-xl capitalize">North America</h2>
                    <p className="text-gray-600 font-normal font-sourceSans text-base leading-5">United States of America and Canada</p>
                  </div>
                </div>
                <div className="absolute top-[210px] left-[448px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded px-8 py-4 w-full max-w-[280px]">
                    <h2 className="text-primary-400 font-medium text-xl capitalize">Europe</h2>
                    <p className="text-gray-600 font-normal font-sourceSans text-base leading-5">UK, Germany, Ireland and France</p>
                  </div>
                </div>
                <div className="absolute top-[326px] right-[302px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded px-8 py-4 w-full max-w-[280px]">
                    <h2 className="text-primary-400 font-medium text-xl capitalize">Middle East</h2>
                    <p className="text-gray-600 font-normal font-sourceSans text-base leading-5">UAE, Saudi Arabia, Oman, Qatar and Kuwait</p>
                  </div>
                </div>
                <div className="absolute bottom-[135px] left-[367px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded px-8 py-4 w-full max-w-[280px]">
                    <h2 className="text-primary-400 font-medium text-xl capitalize">Africa</h2>
                    <p className="text-gray-600 font-normal font-sourceSans text-base leading-5">South Africa, Nigeria and Botswana</p>
                  </div>
                </div>
                <div className="absolute bottom-[111px] right-[96px]">
                  <div className="flex flex-col gap-0.5 bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in rounded px-8 py-4 w-full max-w-[280px]">
                    <h2 className="text-primary-400 font-medium text-xl capitalize">Asia</h2>
                    <p className="text-gray-600 font-normal font-sourceSans text-base leading-5">India, Singapore, Malaysia and Thailand</p>
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
