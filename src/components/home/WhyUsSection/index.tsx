import { whyUsData } from "@/constants/data";
import { FC, SVGProps } from "react";

interface WhyUsItemsDetails {
  id: number;
  logo: FC<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

interface WhyUsCardProps {
  items: WhyUsItemsDetails;
}

const WhyUsCard: FC<WhyUsCardProps> = ({ items }) => {
  return (
    <div className="bg-white rounded-lg py-7 px-4 shadow-card min-h-[324px] basis-[calc(25%-18px)] hover:bg-primary-gradient group">
      <div className="flex flex-col gap-4">
        <div className="">{<items.logo />}</div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[28px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset min-h-[84px] group-hover:text-white">
            {items.title}
          </h2>
          <p className="text-gray-600 text-base font-normal font-sourceSans group-hover:text-white">
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
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Why makes us unique?
              </h2>
            </div>
            <div className="">
              <div className="flex justify-center flex-wrap gap-6">
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
