import { Button } from "@/components/Button";
import Image from "next/image";
import PromoImage from "./../../images/Dashboard-hero.png";
import { FC } from "react";
import clsx from "clsx";

interface PromoSectionProps {
  withImage?: boolean;
}

export const PromoSection: FC<PromoSectionProps> = ({ withImage }) => {
  return (
    <section className="">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="">
            {withImage && (
              <div className="lg:mx-[50px] md:mx-10 sm:mx-7 mx-[7px] xl:mb-[-135px] lg:mb-[-100px] sm:mb-[-60px] mb-[-30px] shadow-card rounded-lg">
                <Image
                  src={PromoImage}
                  alt="Promo image"
                  className="w-full h-full object-cover"
                  priority={true}
                />
              </div>
            )}
            <div
              className={clsx(
                "bg-primary-gradient relative z-10 rounded-lg overflow-hidden sm:px-14 px-4 py-8",
                { "px-14 py-8": withImage, "py-[94px]": !withImage }
              )}
            >
              <div className="flex lg:flex-row flex-col justify-between sm:items-center lg:gap-0 gap-6">
                <div className="w-full 2xl:max-w-[622px] xl:max-w-[550px] max-w-[370px] lg:text-start text-center flex flex-col gap-2">
                  <h2 className="text-[32px] leading-[42px] font-semibold text-white">
                    Ready to get started?
                  </h2>
                  <p className="text-primary-800 text-base font-normal font-source">
                    Discover how we can help you achieve your project goals with
                    unparalleled ease and efficiency
                  </p>
                </div>
                <div className="flex sm:flex-row flex-col xl:gap-6 sm:gap-5 gap-4">
                  <Button
                    variant="outline"
                    label="Request a Demo"
                    type="submit"
                    className="sm:py-4 py-3 px-8 min-w-[198px] lg:text-base sm:text-sm text-xs leading-5 font-medium sm:rounded-lg rounded text-white border-white hover:bg-white-100 transition-all duration-500 ease-in"
                  />
                  <Button
                    variant="fill"
                    label="Join HireQED"
                    type="submit"
                    className="sm:py-4 py-3 px-12 min-w-[198px] lg:text-base sm:text-sm text-xs leading-5 font-medium sm:rounded-lg rounded text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
