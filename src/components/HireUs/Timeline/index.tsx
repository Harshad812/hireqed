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
        className={`flex items-center justify-center w-12 h-12 ${gradient} rounded-full`}
      >
        {icon}
      </div>
    </div>
  );
};

export const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-between h-full absolute left-1/2 transform -translate-x-1/2">
      {Array(7)
        .fill(0)
        .map((_, index) => (
          <div className="flex flex-col items-center space-y-8" key={index}>
            {/* Timeline Item */}
            <TimelineItem
              gradient="bg-gradient-to-r from-blue-400 to-blue-600"
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-white"
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
            {index < 6 && (
              <div className="w-px flex-grow border-gray-300 opacity-50 bg-gray-300"></div>
            )}
          </div>
        ))}
    </div>
  );
};
