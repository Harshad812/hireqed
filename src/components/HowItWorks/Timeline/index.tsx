"use client";
import {
  AdminIcon,
  CheckListIcon,
  DocumentIcon,
  GroupIcon,
  HandSakeIcon,
  SearchIcon,
  TodoListIcon,
  WalletIcon,
} from "@/components/Icons";
import clsx from "clsx";
import { FC, useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  gradient: string;
  icon: JSX.Element;
}

const TimelineItem: FC<TimelineItemProps> = ({ gradient, icon }) => {
  return (
    <div className="flex flex-col items-center">
      {/* Icon Circle */}
      <div
        className={`flex items-center justify-center xl:w-14 sm:w-12 w-8 xl:h-14 sm:h-12 h-8 ${gradient} rounded-full`}
      >
        {icon}
      </div>
    </div>
  );
};

export const Timeline: React.FC = () => {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0",
            10
          );
          if (entry.isIntersecting) {
            setActiveSteps((prev) => Array.from(new Set([...prev, index])));
          } else {
            setActiveSteps((prev) => prev.filter((step) => step !== index));
          }
        });
      },
      { threshold: 0.5 } // Adjust as needed
    );

    const currentRefs = itemRefs.current;
    currentRefs.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      currentRefs.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const steps = [
    { Icon: AdminIcon, stroke: false },
    { Icon: DocumentIcon, stroke: false },
    { Icon: SearchIcon, stroke: true },
    { Icon: CheckListIcon, stroke: false },
    { Icon: GroupIcon, stroke: false },
    { Icon: HandSakeIcon, stroke: true },
    { Icon: TodoListIcon, stroke: false },
    { Icon: WalletIcon, stroke: false },
  ];

  return (
    <div className="flex flex-col h-full absolute top-0 -z-1 left-1/2 -translate-x-1/2 2xl:py-[112px] lg:py-[100px]">
      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          data-index={index}
          className={clsx("flex flex-col items-center", {
            "lg:h-[410px] sm:h-[730px] h-[630px]": index === 0,
            "lg:h-[420px] sm:h-[700px] h-[640px]": index === 1,
            "2xl:h-[440px] lg:h-[470px] sm:h-[740px] h-[700px]": index === 2,
            "lg:h-[394px] sm:h-[670px] h-[615px]": index === 3,
            "2xl:h-[418px] lg:h-[440px] md:h-[730px] sm:h-[720px] h-[650px]":
              index === 4,
            "lg:h-[470px] sm:h-[720px] h-[630px]": index === 5,
            "2xl:h-[545px] xl:h-[495px] lg:h-[570px] sm:h-[840px] h-[780px]":
              index === 6,
          })}
        >
          <TimelineItem
            gradient={`${
              activeSteps.includes(index)
                ? "bg-primary-gradient"
                : "bg-primary-1100"
            }`}
            icon={
              <div className="">
                <step.Icon
                  strokeWidth="2"
                  className="xl:w-8 sm:w-6 w-4 xl:h-8 sm:h-6 h-4"
                  fill={
                    !step.stroke
                      ? activeSteps.includes(index)
                        ? "white"
                        : "url(#paint0_linear_1231_2113)"
                      : "none"
                  }
                  stroke={
                    step.stroke
                      ? activeSteps.includes(index)
                        ? "white"
                        : "url(#paint0_linear_1231_3041)"
                      : "none"
                  }
                />
              </div>
            }
          />

          {/* Horizontal Line Between Items */}
          {index < steps.length - 1 && (
            <div className="w-px flex-grow border-primary-1000 bg-primary-1000"></div>
          )}
        </div>
      ))}
    </div>
  );
};
