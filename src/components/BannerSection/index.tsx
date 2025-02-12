"use client";

import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

interface BannerSectionProps {
  title: string;
  description: string;
  image: StaticImageData;
  button?: {
    primaryLabel: string;
    primaryOnClick?: () => void;
    secondaryLabel?: string;
    secondaryOnClick?: () => void;
  };
  textStyle?: string;
}
export const BannerSection = ({
  title,
  description,
  image,
  button,
  textStyle,
}: BannerSectionProps) => {
  const router = useRouter();

  return (
    <section className="banner-section">
      <div className="2xl:pb-[80px] xl:pb-[70px] md:pb-[60px] pb-[50px]">
        <div className="container">
          <div className="relative rounded-lg overflow-hidden 2xl:py-[120px] lg:py-[100px] py-20 2xl:px-[114px] lg:px-[100px] md:px-[60px] sm:px-[40px] px-[14px] flex flex-col justify-center">
            <div
              className={`relative z-10 flex flex-col gap-8 w-full ${textStyle}`}
            >
              <div className="flex flex-col sm:gap-4 gap-6">
                <h1 className="text-white font-semibold 2xl:text-[56px] xl:text-[50px] lg:text-[46px] md:text-[40px] sm:text-[36px] text-[32px] 2xl:leading-[73px] xl:leading-[63px] lg:leading-[58px] md:leading-[50px] sm:leading-[45px] leading-[42px]">
                  {title}
                </h1>
                <p className="xl:text-xl md:text-lg text-base font-normal font-source text-gray-200">
                  {description}
                </p>
              </div>
              {button && (
                <div className="flex sm:flex-row flex-col sm:gap-6 gap-4 sm:px-0 px-[13px]">
                  <Button
                    onClick={() => router.push("/contact-us")}
                    variant="fill"
                    label={button.primaryLabel}
                    className="sm:py-4 py-3 px-12 lg:text-base sm:text-sm text-xs font-medium sm:rounded-lg rounded text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                  />
                  <Button
                    onClick={() =>
                      router.push("/hire-from-us/#hire-journey-start")
                    }
                    variant="outline"
                    label={button.secondaryLabel}
                    className="sm:py-4 py-3 px-8 lg:text-base sm:text-sm text-xs font-medium sm:rounded-lg rounded text-white border-gray-300 hover:bg-primary-300 hover:border-primary-300 transition-all duration-500 ease-in"
                  />
                </div>
              )}
            </div>
            <div className="absolute top-0 left-0 w-full h-full before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-75">
              <Image
                src={image}
                alt="Hero Background"
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
