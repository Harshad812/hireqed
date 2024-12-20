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
      <div className="2xl:py-[100px] xl:py-[90px] lg:py-[80px] md:py-[70px] py-[60px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            {/* Header Menu */}
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Solution for Every Technology
              </h2>
            </div>
            <div className="flex flex-col gap-[60px]">
              <div className="flex justify-center gap-4">
                {titleData.map((tab, index) => (
                  <button
                    key={tab.id}
                    onClick={() => handleMenuClick(index)}
                    className={`text-base font-medium py-2.5 mx-2.5 hover:text-primary-200 transition-all duration-300 ease-in border-b-2  ${selectedTab === index
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
                    <div key={tab.id} className="px-[84px]">
                      <div className="flex items-center justify-between flex-wrap gap-x-[102px] gap-y-12">
                        {languagesIconData[tabIndex]?.map((icon) => (
                          <div
                            key={icon.id}
                            className="flex items-center justify-center"
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

