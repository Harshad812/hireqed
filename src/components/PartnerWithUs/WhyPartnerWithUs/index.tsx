import {
  EyeIcon,
  GraphIcon,
  HeadsetIcon,
  SeamlessIntegrationIcon,
  SettingIcon,
} from "@/components/Icons";
import clsx from "clsx";
//className="sm:w-12 w-8 sm:h-12 h-8"
export const WhyPartnerWithUs = () => {
  const whyPartnerData = [
    {
      id: 1,
      logo: SettingIcon,

      title: "Expanded Opportunities",
      description:
        "Gain access to a vast pool of clients looking for diverse expertise and services.",
      stroke: false,
    },
    {
      id: 2,
      logo: HeadsetIcon,

      title: "Comprehensive Support",
      description:
        "Our team is dedicated to supporting you at every step, ensuring a successful and rewarding partnership.",
      stroke: true,
    },
    {
      id: 3,
      logo: SeamlessIntegrationIcon,

      title: "Seamless Integration",
      description:
        "Our platform ensures a smooth and efficient process from onboarding to project completion.",
      stroke: false,
    },
    {
      id: 4,
      logo: EyeIcon,

      title: "Increased Visibility",
      description:
        "Detailed resource profiles enhance your visibility and increase your chances of being selected for projects.",
      stroke: true,
    },
    {
      id: 5,
      logo: GraphIcon,

      title: "Collaborative Growth",
      description:
        "Join a network of professionals and vendors committed to delivering excellence and driving innovation.",
      stroke: false,
    },
  ];
  return (
    <section id="why-partner-with-us">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col lg:gap-12 md:gap-10 gap-8 w-full xl:max-w-[1040px] xl:px-0 sm:px-5 px-[18px] mx-auto">
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] font-semibold inline-block bg-primary-gradient bg-clip-text text-fill-transparent">
                Why partner with HireQED.ai?
              </h2>
            </div>
            <div className="flex justify-center flex-wrap sm:gap-6 gap-10">
              {whyPartnerData.map((items, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg py-7 md:px-4 sm:px-8 px-4 shadow-card lg:min-h-[324px] md:min-h-[300px] min-h-[280px] lg:basis-[calc(33.51%-18px)] md:basis-[calc(50.8%-18px)] hover:bg-primary-gradient group"
                >
                  <div className="flex flex-col sm:gap-4 gap-2">
                    <div className="">
                      <items.logo
                        className={clsx(
                          "sm:w-12 w-8 sm:h-12 h-8 transition-stroke duration-300 ease-in-out",
                          {
                            "group-hover:stroke-white": items.stroke,
                            "group-hover:fill-white": !items.stroke,
                          }
                        )}
                        fill={
                          !items.stroke
                            ? "url(#paint1_linear_797_1540)"
                            : "none"
                        }
                        stroke={
                          items.stroke ? "url(#paint6_linear_861_2178)" : "none"
                        }
                      />
                    </div>
                    <div className="flex flex-col sm:gap-6 gap-3">
                      <h2 className="sm:text-[28px] text-2xl sm:leading-normal inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset md:min-h-[84px] group-hover:text-white">
                        {items.title}
                      </h2>
                      <p className="text-gray-600 text-base font-normal font-source group-hover:text-white">
                        {items.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
