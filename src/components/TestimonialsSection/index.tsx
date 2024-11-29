import { Button } from "@/components/Button";

import ClientImg from "../../images/client-img.png";
import Image from "next/image";

export const TestimonialsSection = () => {
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Hear from our clients</h2>
            </div>
            <div className="w-full max-w-[1206px] mx-auto">
              <div className="shadow-card rounded-lg overflow-hidden flex min-h-[422px]">
                <div className="w-full max-w-[356px]">
                  <Image
                    src={ClientImg}
                    alt="service-image"
                    className="w-full h-full object-cover"
                    priority={true}
                  />
                </div>
                <div className="px-[94px] py-10 flex flex-col items-center justify-center w-full max-w-[calc(100%-356px)]">
                  <div className="flex flex-col gap-8">
                    <p className="font-sourceSans text-[28px] leading-[36px] font-normal text-gray-600">HireQED made finding the right talent effortless. Their platform connected us with top professionals in no time, allowing us to focus on delivering results</p>
                    <div className="">
                      <h6 className="font-light text-2xl text-gray-600 font-sourceSans">John S.,</h6>
                      <h6 className="font-light text-2xl text-gray-600 font-sourceSans">Project Manager at Tech Innovators</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
