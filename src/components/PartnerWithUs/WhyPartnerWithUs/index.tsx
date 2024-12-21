import {
  EyeIcon,
  GraphIcon,
  HeadsetIcon,
  SeamlessIntegrationIcon,
  SettingIcon,
} from "@/components/Icons";

export const WhyPartnerWithUs = () => {
  const whyPartnerData = [
    {
      id: 1,
      logo: <SettingIcon />,

      title: "Expanded Opportunities",
      description:
        "Gain access to a vast pool of clients looking for diverse expertise and services.",
    },
    {
      id: 2,
      logo: <HeadsetIcon />,

      title: "Comprehensive Support",
      description:
        "Our team is dedicated to supporting you at every step, ensuring a successful and rewarding partnership.",
    },
    {
      id: 3,
      logo: <SeamlessIntegrationIcon />,

      title: "Seamless Integration",
      description:
        "Our platform ensures a smooth and efficient process from onboarding to project completion.",
    },
    {
      id: 4,
      logo: <EyeIcon />,

      title: "Increased Visibility",
      description:
        "Detailed resource profiles enhance your visibility and increase your chances of being selected for projects.",
    },
    {
      id: 5,
      logo: <GraphIcon />,

      title: "Collaborative Growth",
      description:
        "Join a network of professionals and vendors committed to delivering excellence and driving innovation.",
    },
  ];
  return (
    <section>
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12 w-full max-w-[1040px] mx-auto">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] font-semibold inline-block bg-primary-gradient bg-clip-text text-fill-transparent">
                Why partner with HireQED.ai?
              </h2>
            </div>
            <div className="flex justify-center flex-wrap gap-6">
              {whyPartnerData.map((items, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg py-7 px-4 shadow-card min-h-[324px] basis-[calc(33.51%-18px)] hover:bg-primary-gradient group"
                >
                  <div className="flex flex-col gap-4">
                    <div className="">{items.logo}</div>
                    <div className="flex flex-col gap-6">
                      <h2 className="text-[28px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset min-h-[84px] group-hover:text-white">
                        {items.title}
                      </h2>
                      <p className="text-gray-600 text-base font-normal font-sourceSans group-hover:text-white">
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
