"use client";

import Image from "next/image";
import { Tabs } from "@/components";
import { FC } from "react";

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
  return (
    <section>
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Solution for Every Technology
              </h2>
            </div>
            <div className="flex flex-col gap-[60px]">
              <div className="flex items-center justify-center gap-4">
                {titleData.map((item, index) => (
                  <div className="cursor-pointer p-2.5 text-base font-medium text-primary-400 hover:text-primary-200 transition-all duration-300 ease-in">{item.title}</div>
                ))}
              </div>
              <div className="">
                {languagesIconData.map((iconGroup, tabIndex) => (
                  <div
                    className="flex items-center justify-between flex-wrap gap-x-[102px] gap-y-12 px-[84px]"
                    key={tabIndex}
                  >
                    {iconGroup.map((icon) => (
                      <div key={icon.id}>
                        <Image
                          src={icon.logo}
                          alt={icon.alt}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            {/* <div>
              <Tabs tabs={titleData.map((item) => item.title)}>
                {languagesIconData.map((iconGroup, tabIndex) => (
                  <div
                    className="flex items-center justify-between flex-wrap gap-x-[102px] gap-y-12 px-[84px]"
                    key={tabIndex}
                  >
                    {iconGroup.map((icon) => (
                      <div key={icon.id}>
                        <Image
                          src={icon.logo}
                          alt={icon.alt}
                          className="w-full h-full object-cover"
                          priority
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </Tabs>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};
