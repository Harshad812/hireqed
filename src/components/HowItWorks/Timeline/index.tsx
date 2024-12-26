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
        className={`flex items-center justify-center w-14 h-14 ${gradient} rounded-full`}
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

    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      itemRefs.current.forEach((item) => {
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
    <div className="flex flex-col h-full absolute top-0 -z-1 left-1/2 -translate-x-1/2 lg:py-[112px]">
      {steps.map((step, index) => (
        <div
          key={index}
          ref={(el) => {
            itemRefs.current[index] = el;
          }}
          data-index={index}
          className={clsx("flex flex-col flex-1 items-center", {
            "h-[387px]": index === 0,
            "h-[420px]": index === 1,
            "h-[440px]": index === 2,
            "h-[394px]": index === 3,
            "h-[418px]": index === 4,
            "h-[457px]": index === 5,
            "h-[545px]": index === 6,
          })}
        >
          <TimelineItem
            gradient={`${activeSteps.includes(index)
                ? "bg-primary-gradient"
                : "bg-primary-1100"
              }`}
            icon={
              <div className="">
                <step.Icon
                  strokeWidth="2"
                  className="w-8 h-8"
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
