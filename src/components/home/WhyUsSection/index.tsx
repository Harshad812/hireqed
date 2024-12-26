import { whyUsData } from "@/constants/data";
import clsx from "clsx";
import { FC, SVGProps } from "react";

interface WhyUsItemsDetails {
  id: number;
  logo: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  stroke: boolean;
}

interface WhyUsCardProps {
  items: WhyUsItemsDetails;
}

const WhyUsCard: FC<WhyUsCardProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-lg py-7 md:px-4 px-8 shadow-card lg:min-h-[324px] md:min-h-[300px] min-h-[280px] 2xl:basis-[calc(25%-18px)] xl:basis-[calc(30%-18px)] lg:basis-[calc(33.5%-18px)] md:basis-[calc(50%-18px)] hover:bg-primary-gradient group">
      <div className="flex flex-col sm:gap-4 gap-2">
        <div className="">
          {
            <items.logo
              className={clsx(
                "sm:w-12 w-8 sm:h-12 h-8 transition-stroke duration-300 ease-in-out",
                {
                  "group-hover:stroke-white": items.stroke,
                  "group-hover:fill-white": !items.stroke,
                }
              )}
              fill={!items.stroke ? "url(#paint1_linear_797_1540)" : "none"}
              stroke={items.stroke ? "url(#paint0_linear_797_1750)" : "none"}
            />
          }
        </div>
        <div className="flex flex-col sm:gap-6 gap-3">
          <h2 className="sm:text-[28px] text-2xl sm:leading-normal inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset md:min-h-[84px] group-hover:text-white">
            {items.title}
          </h2>
          <p className="text-gray-600 text-base font-normal font-source group-hover:text-white">
            {items.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const WhyUsSection = () => {
  return (
    <section className="">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col md:gap-12 gap-10">
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Why makes us unique?
              </h2>
            </div>
            <div className="mdsm:px-0 px-[18px]">
              <div className="flex justify-center flex-wrap sm:gap-6 gap-10">
                {whyUsData.map((items, index) => (
                  <WhyUsCard items={items} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
