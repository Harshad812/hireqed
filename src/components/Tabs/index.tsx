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
      <div className="flex justify-center gap-4">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2.5 text-base font-medium border-b-2 ${activeTab === index
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
