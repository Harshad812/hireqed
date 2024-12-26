"use client";

import React, { FC, useRef, useState } from "react";
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
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const sliderSettings: Settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    adaptiveHeight: true,
    beforeChange: (_, next) => setSelectedTab(next), // Sync slider index with active tab
  };

  const handleMenuClick = (index: number) => {
    setSelectedTab(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section>
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col md:gap-12 gap-10">
            {/* Header Menu */}
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Solution for Every Technology
              </h2>
            </div>
            <div className="flex flex-col lg:gap-[60px] md:gap-10 sm:gap-8 gap-6">
              <div className="flex lg:justify-center whitespace-nowrap overflow-auto xl:gap-4 gap-3">
                {titleData.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => handleMenuClick(index)}
                    className={`xl:text-base md:text-sm sm:text-xs text-[10px] font-medium lg:py-2.5 sm:py-2 py-1 xl:mx-2.5 mx-2 hover:text-primary-200 transition-all duration-300 ease-in border-b-2  ${selectedTab === index
                      ? "text-primary-200 border-primary-200"
                      : "text-primary-400 border-transparent"
                      }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>
              {/* Slider */}
              <div className="">
                <Slider ref={sliderRef} {...sliderSettings}>
                  {titleData.map((tab, tabIndex) => (
                    <div key={tab.id} className="2xl:px-[84px]">
                      <div className="flex items-center sm:justify-between flex-wrap xl:gap-x-[102px] lg:gap-x-[92px] md:gap-x-[60px] sm:gap-x-[42px] gap-x-6 lg:gap-y-12 md:gap-y-10 sm:gap-y-8 gap-y-6">
                        {languagesIconData[tabIndex]?.map((icon) => (
                          <div
                            key={icon.id}
                            className="flex items-center justify-center 2xl:min-w-16 lg:min-w-14 md:min-w-12 sm:min-w-10 min-w-8 2xl:max-w-16 lg:max-w-14 md:max-w-12 sm:max-w-10 max-w-8 2xl:min-h-16 lg:min-h-14 md:min-h-12 sm:min-h-10 min-h-8 2xl:max-h-16 lg:max-h-14 md:max-h-12 sm:max-h-10 max-h-8"
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
      </div>
    </section>
  );
};

