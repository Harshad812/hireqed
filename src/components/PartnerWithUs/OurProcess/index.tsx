"use client";
import { Button } from "@/components/Button";
import { OurProcessData } from "@/constants/data";
import { FC } from "react";
import Slider from "react-slick";

interface OurProcessCardProps {
  step: string;
  title: string;
  description: string;
}

const OurProcessCard: FC<OurProcessCardProps> = ({
  step,
  title,
  description,
}) => {
  return (
    <div className="bg-white shadow-card rounded-lg lg:px-8 sm:px-6 px-4 sm:pt-8 pt-7 2xl:pb-16 pb-12">
      <div className="flex flex-col items-start lg:gap-6 gap-4">
        <div className="flex flex-col gap-3">
          <span className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-xs">
            {step}
          </span>
          <h2 className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium 2xl:text-[40px] 2xl:leading-[54px] xl:leading-normal sm:leading-normal xl:text-4xl sm:text-3xl text-2xl">
            {title}
          </h2>
        </div>
        <div>
          <p className="2xl:text-xl sm:text-lg text-base font-normal text-gray-600 font-source">
            {description}
          </p>
        </div>
        <Button
          variant="fill"
          label="Contact Us"
          type="submit"
          className="sm:py-4 py-3 px-8 lg:text-base sm:text-sm text-xs font-medium sm:rounded-lg rounded text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
        />
      </div>
    </div>
  );
};

export const OurProcess = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    swipeToSlide: true,
    dragging: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section>
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="xl:bg-primary-gradient xl:rounded-lg 2xl:py-[88px] xl:py-20 2xl:px-[118px] xl:px-[100px]">
            <div className="flex xl:flex-row flex-col items-center justify-between xl:gap-7 gap-10">
              <div className="xl:flex hidden flex-col gap-6 w-full 2xl:max-w-[448px] xl:max-w-[370px]">
                <h2 className="text-white font-semibold 2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px]">
                  {" Our Process? It’s Simple."}
                </h2>
                <p className="text-primary-800 font-normal text-xl font-source">
                  {
                    "Our streamlined process ensures every project is handled smoothly from start to finish."
                  }
                </p>
              </div>
              <div className="xl:hidden flex flex-col xl:items-start xl:text-start text-center items-center lg:gap-6 gap-5 w-full 2xl:max-w-[448px] xl:max-w-[370px] md:max-w-[460px]">
                <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent font-semibold 2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px]">
                  {"Our Process? It’s Simple."}
                </h2>
                <p className="text-gray-600 font-normal text-xl font-source">
                  {
                    "Our streamlined process ensures every project is handled smoothly from start to finish."
                  }
                </p>
              </div>

              <div className="w-full 2xl:max-w-[586px] xl:p-0 p-px xl:max-w-[520px] xl:max-h-[420px] grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-9 md:gap-8 gap-6">
                <Slider {...settings}>
                  {OurProcessData?.map((process, index) => (
                    <div key={index} className="p-4">
                      <OurProcessCard
                        step={process.step}
                        title={process.title}
                        description={process.description}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
