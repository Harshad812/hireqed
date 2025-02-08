"use client";

import React, { ReactNode, useEffect, useState } from "react";

interface TabsProps {
  tabs: string[];
  children: ReactNode;
  defaultIndex?: number;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  children,
  defaultIndex = 0,
}) => {
  const [activeTab, setActiveTab] = useState(defaultIndex);

  useEffect(() => {
    setActiveTab(defaultIndex);
  }, [defaultIndex]);

  return (
    <div className="tabs">
      {/* Tab Navigation */}
      <div className="flex xl:justify-between laptop:gap-4 gap-6 lg:ms-0 sm:ms-[30px] ms-3 whitespace-nowrap no-scrollbar overflow-auto">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer lg:py-2.5 sm:py-2 py-1 xl:text-base md:text-sm sm:text-xs text-[10px] font-medium border-b-2 ${
              activeTab === index
                ? "text-primary-200 border-b-2 border-primary-200"
                : "text-primary-400 hover:text-primary-200 border-transparent"
            } transition-all duration-300 ease-in`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content mt-8">
        {React.Children.toArray(children)[activeTab]}
      </div>
    </div>
  );
};
