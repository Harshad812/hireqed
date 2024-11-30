"use client";

import React, { FC, useRef } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface TitleData {
  id: number;
  title: string;
}

interface LanguageIcon {
  id: number;
  logo: string;
  alt: string;
}

interface SolutionTechnologyProps {
  titleData: TitleData[];
  languagesIconData: LanguageIcon[][];
}

export const SolutionTechnology: FC<SolutionTechnologyProps> = ({
  titleData,
  languagesIconData,
}) => {
  const sliderRef = useRef<Slider | null>(null);

  const sliderSettings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
  };

  const handleMenuClick = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section>
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex justify-center gap-8 mb-8">
              {titleData.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => handleMenuClick(index)}
                  className="text-lg font-medium text-gray-600 hover:text-gray-900 focus:outline-none"
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Slider */}
            <div className="">
              <Slider ref={sliderRef} {...sliderSettings}>
                {titleData.map((tab, tabIndex) => (
                  <div key={tab.id} className="px-[84px] min-h-[300px]">
                    <div className="flex items-center justify-between flex-wrap gap-x-[102px] gap-y-12">
                      {languagesIconData[tabIndex]?.map((icon) => (
                        <div
                          key={icon.id}
                          className="w-24 h-24 flex items-center justify-center"
                        >
                          <Image
                            src={icon.logo}
                            alt={icon.alt}
                            className="w-full h-full object-contain"
                            priority
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
