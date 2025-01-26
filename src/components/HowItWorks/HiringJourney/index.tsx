import Image from "next/image";
import { Button } from "@/components/Button";
import { HiringImage1 } from "@/images";
import { FC } from "react";
import clsx from "clsx";
import { Timeline } from "../Timeline";

interface HiringJourneyDetailsData {
  step: number;
  title: string;
  description:
    | {
        key: string;
        value: string;
      }[]
    | string;
}

const HiringJourneyDetailsData: HiringJourneyDetailsData[] = [
  {
    step: 1,
    title: "Register & Get Access",
    description: [
      {
        key: "Sign Up",
        value:
          "Begin by registering your organization on HireQED.ai with our quick and easy sign-up process.",
      },
      {
        key: "Access Granted",
        value:
          "Receive immediate access to our comprehensive platform, tailored to meet all your hiring needs.",
      },
    ],
  },
  {
    step: 2,
    title: "Project Setup",
    description:
      "Define your project requirements, timelines, and specific needs. Whether it’s a short-term assignment or a long-term project, our platform allows you to set up multiple projects with ease.",
  },
  {
    step: 3,
    title: "Search Candidates",
    description: [
      {
        key: "Extensive Search Options",
        value:
          "Utilize our advanced search filters to find candidates that match your specific criteria. Filter by skills, experience, location, availability, and more.",
      },
      {
        key: "Diverse Talent Pool",
        value:
          "Browse through a vast pool of pre-vetted professionals and vendors to find the perfect fit for your project.",
      },
    ],
  },
  {
    step: 4,
    title: "Shortlist Candidates",
    description:
      "Compare candidates based on their profiles, experiences, and skill sets. Shortlist those who meet your project requirements for further evaluation.",
  },
  {
    step: 5,
    title: "Interview Candidates",
    description: [
      {
        key: "Schedule Interviews",
        value:
          "Use our integrated scheduling tool to arrange interviews at your convenience.",
      },
      {
        key: "Conduct Interviews",
        value:
          "Carry out interviews directly through our platform using video conferencing tools, ensuring a seamless interview process.",
      },
    ],
  },
  {
    step: 6,
    title: "Select & Hire Candidates",
    description: [
      {
        key: "Final Selection",
        value: "After interviews, select the best candidate for your project.",
      },
      {
        key: "Offer and Onboard",
        value:
          "Extend an offer and onboard the selected candidate, all within the HireQED platform. Our system ensures a smooth and efficient onboarding process.",
      },
    ],
  },
  {
    step: 7,
    title: "Track Tasks, Timesheets & Performances",
    description: [
      {
        key: "Task Management",
        value:
          "Assign tasks and track progress to ensure your project stays on schedule.",
      },
      {
        key: "Timesheet Monitoring",
        value:
          "Keep track of hours worked with our timesheet feature, making it easy to manage and verify work completed.",
      },
      {
        key: "Performance Tracking",
        value:
          "Monitor performance metrics and provide feedback to ensure high-quality work and continuous improvement.",
      },
    ],
  },
  {
    step: 8,
    title: "Initiate Payments",
    description: [
      {
        key: "Seamless Payments",
        value:
          "Handle all financial transactions through our secure payment gateway.",
      },
      {
        key: "Payment Schedules",
        value:
          "Set up and manage payment schedules, ensuring timely and accurate compensation for your hired resources.",
      },
    ],
  },
];

interface HiringJourneyDetailsCardProps {
  item: HiringJourneyDetailsData;
}

const HiringJourneyDetailsCard: FC<HiringJourneyDetailsCardProps> = ({
  item,
}) => {
  return (
    <div className="shadow-card bg-white rounded-lg xl:pt-8 pt-7 sm:pb-16 pb-14 xl:px-8 md:px-6 sm:px-5 px-4 w-full 2xl:max-w-[589px] xl:max-w-[490px] lg:max-w-[420px] sm:max-w-[550px] xs:max-w-[388px] max-w-[328px] font-source">
      <div className="flex flex-col md:gap-6 sm:gap-5 gap-3">
        <div className="flex flex-col items-start sm:gap-3 gap-1">
          <span className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block text-xs font-medium uppercase">
            {`Step ${item.step}`}
          </span>
          <h2 className="2xl:text-[40px] sm:text-4xl text-2xl 2xl:leading-[52px] inline-block font-medium bg-primary-gradient bg-clip-text text-fill-transparent">
            {item.title}
          </h2>
        </div>
        <div className="">
          {Array.isArray(item?.description) ? (
            <div className="flex flex-col">
              {item?.description?.map((item, i) => (
                <p
                  className="sm:text-xl text-base sm:leading-[26px] text-gray-600 font-light font-source"
                  key={i}
                >
                  <b className="font-semibold">{item.key}:</b>{" "}
                  <span className="font-normal">{item.value}</span>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-xl leading-[26px] text-gray-600 font-normal font-source">
              {item?.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export const HiringJourney = () => {
  return (
    <section className="hero-section font-source" id="hire-journey-start">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Your Hiring Journey Starts Here
              </h2>
            </div>
            <div className="flex flex-col gap-16">
              <div className="relative lg:pt-0 sm:pt-[80px] pt-[50px]">
                <Timeline />
                <div className="flex flex-col xl:gap-[100px] lg:gap-20 sm:gap-24 gap-20">
                  {HiringJourneyDetailsData.map((items, index) => (
                    <div
                      className={clsx(
                        "flex lg:flex-row flex-col-reverse justify-between items-center lg:gap-0 gap-14",
                        {
                          "lg:flex-row-reverse flex-col-reverse":
                            index % 2 !== 0,
                        }
                      )}
                      key={index}
                    >
                      <div className="">
                        <Image
                          src={HiringImage1}
                          alt="Hiring Image"
                          className="xl:w-[469px] sm:w-[420px] xs:w-[388px] w-[328px] xl:h-[287px] h-auto"
                          priority={true}
                        />
                      </div>

                      <HiringJourneyDetailsCard item={items} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  variant="fill"
                  label="Register Now"
                  type="submit"
                  className="py-4 px-12 text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
