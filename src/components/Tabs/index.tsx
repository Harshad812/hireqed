"use client";

import React, { ReactNode, useState } from "react";

interface TabsProps {
  tabs: string[]; // Array of tab titles
  children: ReactNode; // Tab content
}

export const Tabs: React.FC<TabsProps> = ({ tabs, children }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="tabs">
      {/* Tab Navigation */}
      <div className="flex xl:justify-between laptop:gap-4 gap-6 lg:ms-0 sm:ms-[30px] ms-3 whitespace-nowrap overflow-auto">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer lg:py-2.5 sm:py-2 py-1 xl:text-base md:text-sm sm:text-xs text-[10px] font-medium border-b-2 ${activeTab === index
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
