import Image from "next/image";
import heroBg from "../../../images/bg-home.png";
import dashboardImage from "../../../images/Dashboard.png";
import { Button } from "@/components/Button";
import { globeIcon, rocketIcon, settingIcon, toolIcon } from "@/components/Icons";
import { Icon2 } from "@/components/Icons/Icon2";
import { Icon1 } from "@/components/Icons/Icon1";
import { Icon3 } from "@/components/Icons/Icon3";

export const WhyUsSection = () => {
  const cardData = [
    {
      id: 1,
      logo: globeIcon,
      title: "Vast pool of Resources",
      description: "Access a diverse network of qualified professionals and reliable vendors tailored to meet your project demands."
    },
    {
      id: 2,
      logo: settingIcon,
      title: "Streamlined  Process",
      description: "Manage everything from searching and interviewing to onboarding and performance tracking on a single platform."
    },
    {
      id: 3,
      logo: toolIcon,
      title: "One-Stop Solution",
      description: "Whether you need IT specialists, marketing experts, or project managers, we have the right match for you, supporting your projects from start to finish."
    },
    {
      id: 4,
      logo: rocketIcon,
      title: "Efficiency at Speed",
      description: "Accelerate your hiring process and secure the right talent swiftly, allowing you to focus on driving your projects to success."
    },
    {
      id: 5,
      logo: Icon2,
      title: "Competitive Pricing",
      description: "Enjoy competitive pricing models that suit your budget, offering the best value without compromising on quality."
    },
    {
      id: 6,
      logo: Icon1,
      title: "Global Resources",
      description: "Connect with professionals from around the world, giving you the flexibility to find the perfect match for your project needs."
    },
    {
      id: 7,
      logo: Icon3,
      title: "User-Friendly Experience",
      description: "Navigate our intuitive platform with ease, filtering based on your specific requirements and managing engagements seamlessly."
    }
  ]
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Why makes us unique?</h2>
            </div>
            <div className="">
              <div className="flex justify-center flex-wrap gap-6">
                {cardData.map((items, index) => (
                  <div key={index} className="bg-white rounded-lg py-7 px-4 shadow-card min-h-[324px] basis-[calc(25%-18px)] hover:bg-primary-gradient group">
                    <div className="flex flex-col gap-4">
                      <div className="">
                        {items.logo && <items.logo />}
                      </div>
                      <div className="flex flex-col gap-6">
                        <h2 className="text-[28px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset min-h-[84px] group-hover:text-white">{items.title}</h2>
                        <p className="text-gray-600 text-base font-normal font-sourceSans group-hover:text-white">{items.description}</p>
                      </div>
                    </div>

                  </div>
                ))}
              </div >
            </div >
          </div >
        </div >
      </div >
    </section >
  );
};
