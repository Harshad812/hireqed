import { GoalIcon, HeadsetIcon, MapIcon, settingIcon, } from "@/components/Icons";

export const ExperienceEfficiency = () => {
    const ExperienceEfficiencyData = [
        {
            id: 1,
            title: "Commitment to Efficiency",
            description:
                "At HireQED.ai, we streamline the hiring process to make it as efficient and effective as possible.",
            logo: <settingIcon />,
        },
        {
            id: 2,
            title: "Comprehensive Support",
            description:
                "Our platform is designed to handle every aspect of your project, from inception to completion",
            logo: <HeadsetIcon />,
        },
        {
            id: 3,
            title: "Focus on What Matters",
            description:
                "Leverage our robust tools and resources, allowing you to concentrate on driving your projects forward while we manage the talent.",
            logo: <GoalIcon />,
        },
        {
            id: 4,
            title: "Get Started Today",
            description:
                "Register with us to embark on a seamless hiring journey. Achieving your project goals has never been easier with HireQED.ai.",
            logo: <MapIcon />,
        },
    ];
    return (
        <section className="hero-section">
            <div className="py-[100px]">
                <div className="container">
                    <div className="flex flex-col gap-12">
                        <div className="text-center">
                            <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Experience Efficiency and Excellence</h2>
                        </div>
                        <div className="grid grid-cols-4 gap-6">
                            {ExperienceEfficiencyData.map((items, index) => (
                                <div className="bg-white rounded-lg py-7 px-4 shadow-card min-h-[324px] hover:bg-primary-gradient group">
                                    <div className="flex flex-col gap-4">
                                        <div className="size-12">
                                            {items.logo}
                                        </div>
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
