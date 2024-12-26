import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/Button";

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
  textStyle
}: BannerSectionProps) => {
  return (
    <section className="banner-section">
      <div className="2xl:pb-[80px] xl:pb-[70px] md:pb-[60px] pb-[50px]">
        <div className="container">
          <div className="relative rounded-lg overflow-hidden 2xl:py-[120px] py-[100px] 2xl:px-[114px] px-[100px] flex flex-col justify-center">
            <div className={`relative z-10 flex flex-col gap-8 w-full ${textStyle}`}>
              <div className="flex flex-col sm:gap-4 gap-6">
                <h1 className="text-white font-semibold 2xl:text-[56px] xl:text-[50px] lg:text-[46px] md:text-[40px] sm:text-[36px] text-[32px] 2xl:leading-[73px] xl:leading-[63px] lg:leading-[58px] md:leading-[50px] sm:leading-[45px] leading-[42px]">
                  {title}
                </h1>
                <p className="xl:text-xl md:text-lg text-base font-normal font-source text-gray-200">
                  {description}
                </p>
              </div>
              {button && (
                <div className="flex gap-6">
                  <Button
                    variant="fill"
                    label={button.primaryLabel}
                    type="submit"
                    className="py-4 px-12 text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                  />
                  <Button
                    variant="outline"
                    label={button.secondaryLabel}
                    type="submit"
                    className="py-4 px-8 text-base leading-5 font-medium rounded-lg text-white border-gray-300 hover:bg-primary-300 hover:border-primary-300 transition-all duration-500 ease-in"
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
