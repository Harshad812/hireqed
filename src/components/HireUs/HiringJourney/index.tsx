import Image from "next/image";
import { Button } from "@/components/Button";
import { HiringImage1, HiringImage2 } from "@/images";
import { FC } from "react";
import clsx from "clsx";

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
    <div className="shadow-card rounded-lg pt-8 pb-16 px-8 w-full max-w-[589px] font-source">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col items-start gap-3">
          <span className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block text-xs font-medium uppercase">
            {`Step ${item.step}`}
          </span>
          <h2 className="text-[40px] leading-[52px] inline-block font-medium bg-primary-gradient bg-clip-text text-fill-transparent">
            {item.title}
          </h2>
        </div>
        <div className="">
          {Array.isArray(item?.description) ? (
            <div className="flex flex-col">
              {item?.description?.map((item, i) => (
                <p
                  className="text-xl leading-[26px] text-gray-600 font-light font-sourceSans"
                  key={i}
                >
                  <b className="font-semibold">{item.key}:</b>{" "}
                  <span className="font-normal">{item.value}</span>
                </p>
              ))}
            </div>
          ) : (
            <p className="text-xl leading-[26px] text-gray-600 font-normal font-sourceSans">
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
    <section className="hero-section font-source">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Your Hiring Journey Starts Here
              </h2>
            </div>
            <div className="relative">
              {/* <Timeline /> */}

              <div className="flex flex-col gap-16">
                <div className="flex flex-col gap-[100px]">
                  {HiringJourneyDetailsData.map((items, index) => (
                    <div
                      className={clsx(
                        "flex flex-row justify-between items-center",
                        {
                          "flex-row-reverse": index % 2 !== 0,
                        }
                      )}
                      key={index}
                    >
                      <div className="">
                        <Image
                          src={HiringImage1}
                          alt="Hiring Image"
                          className="w-[469px] h-[287px] "
                          priority={true}
                        />
                      </div>

                      <HiringJourneyDetailsCard item={items} />
                    </div>
                  ))}
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
      </div>
    </section>
  );
};
