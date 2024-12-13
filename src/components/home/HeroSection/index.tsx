import Image from "next/image";
import heroBg from "../../../images/bg-home.png";
import dashboardImage from "../../../images/Dashboard.png";
import { Button } from "@/components/Button";
import { TypewriterText } from "@/components/TypewriterText";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="pb-[100px]">
        <div className="container">
          <div className="relative">
            <div className="relative z-10 w-full max-w-[1199px] mx-auto">
              <div className="pt-[120px] pb-[100px] px-[70px] flex flex-col gap-8">
                <div className="px-[40px]">
                  <h1 className="text-[64px] leading-[96px] font-semibold text-white">
                    We simplify your search for the right talent{" "}
                    <span className="text-accent-300 inline">
                      <TypewriterText
                        texts={[
                          "at faster speed",
                          "at competitive price",
                          "from global pool",
                        ]}
                        typingSpeed={150}
                      />
                    </span>
                  </h1>
                </div>
                <div className="">
                  <p className="text-gray-200 text-xl font-normal font-sourceSans text-center">
                    In today’s fast-paced business world, finding the right
                    resources can be challenging. <br />
                    At HireQED.ai, we make it easy-connecting you with the
                    perfect match for any project, whether short-term or
                    long-term.
                  </p>
                </div>
                <div className="flex justify-center gap-6">
                  <Button
                    variant="outline"
                    label="Request a Demo"
                    type="submit"
                    className="py-4 px-8 text-base leading-5 font-medium rounded-lg text-white border-gray-300 hover:bg-primary-300 hover:border-primary-300 transition-all duration-500 ease-in"
                  />
                  <Button
                    variant="fill"
                    label="Learn More"
                    type="submit"
                    className="py-4 px-12 text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                  />
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full min-h-[1023px] rounded-lg overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-75">
              <Image
                src={heroBg}
                alt="Hero Background"
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
            <div className="max-w-[1152px]  relative z-10 mx-auto shadow-sm hover:shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in hover:scale-[1.02]">
              <Image
                src={dashboardImage}
                alt="Dashboard Image"
                className="w-full h-full"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
