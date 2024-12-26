import {
  GoalIcon,
  HeadsetIcon,
  MapIcon,
  SettingIcon,
} from "@/components/Icons";
import clsx from "clsx";

export const ExperienceEfficiency = () => {
  const ExperienceEfficiencyData = [
    {
      id: 1,
      title: "Commitment to Efficiency",
      description:
        "At HireQED.ai, we streamline the hiring process to make it as efficient and effective as possible.",
      logo: SettingIcon,
      stroke: false,
    },
    {
      id: 2,
      title: "Comprehensive Support",
      description:
        "Our platform is designed to handle every aspect of your project, from inception to completion",
      logo: HeadsetIcon,
      stroke: true,
    },
    {
      id: 3,
      title: "Focus on What Matters",
      description:
        "Leverage our robust tools and resources, allowing you to concentrate on driving your projects forward while we manage the talent.",
      logo: GoalIcon,
      stroke: false,
    },
    {
      id: 4,
      title: "Get Started Today",
      description:
        "Register with us to embark on a seamless hiring journey. Achieving your project goals has never been easier with HireQED.ai.",
      logo: MapIcon,
      stroke: true,
    },
  ];
  return (
    <section className="hero-section">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col md:gap-12 gap-10">
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Experience Efficiency and Excellence
              </h2>
            </div>
            <div className="grid xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 sm:gap-6 gap-8">
              {ExperienceEfficiencyData.map((items, index) => (
                <div
                  className="bg-white rounded-lg py-7 px-4 shadow-card sm:min-h-[324px] min-h-[280px] hover:bg-primary-gradient group"
                  key={index}
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
                      <h2 className="sm:text-[28px] text-2xl sm:leading-normal inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset xl:min-h-[84px] group-hover:text-white">
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
