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
}
export const BannerSection = ({
  title,
  description,
  image,
  button,
}: BannerSectionProps) => {
  return (
    <section className="banner-section">
      <div className="pb-[100px]">
        <div className="container">
          <div className="relative rounded-lg overflow-hidden py-[120px] px-[114px] flex flex-col justify-center">
            <div className="relative z-10 flex flex-col gap-8 w-full max-w-[574px]">
              <div className="flex flex-col gap-4">
                <h1 className="text-white font-semibold text-[56px] leading-[73px] ">
                  {title}
                </h1>
                <p className="text-xl font-normal font-sourceSans text-gray-200">
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
