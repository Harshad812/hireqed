import clsx from "clsx";
import { FC } from "react";

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

export const Timeline = () => {
  return (
    <div className="flex flex-col h-full absolute top-0 -z-1 left-1/2 -translate-x-1/2 lg:py-[112px]">
      {Array(8)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
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
              gradient={` ${index === 0 ? "bg-primary-gradient" : "bg-primary-1100"}`}
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 19.07A1.5 1.5 0 016.5 19H17.5a1.5 1.5 0 011.379.93M12 15.5a4 4 0 100-8 4 4 0 000 8z"
                  />
                </svg>
              }
            />

            {/* Horizontal Line Between Items */}
            {index < 7 && (
              <div className="w-px flex-grow border-primary-1000 bg-primary-1000"></div>
            )}
          </div>
        ))
      }
    </div >
  );
};
