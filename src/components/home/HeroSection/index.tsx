import Image from "next/image";
import heroBg from "../../../images/bg-home.png";
import dashboardImage from "../../../images/Dashboard-hero.png";
import { Button } from "@/components/Button";
import { TypewriterText } from "@/components/TypewriterText";

export const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="2xl:pb-[80px] xl:pb-[70px] md:pb-[60px] pb-[50px]">
        <div className="container">
          <div className="relative">
            <div className="relative z-10 w-full max-w-[1199px] mx-auto">
              <div className="xl:pt-[120px] lg:pt-[90px] pt-[80px] xl:pb-[100px] lg:pb-[80px] pb-[60px] lg:px-[70px] sm:px-[60px] px-[15px] flex flex-col gap-8">
                <div className="">
                  <h1 className="2xl:text-[64px] xl:text-6xl lg:text-5xl md:text-4xl text-[32px] 2xl:leading-[96px] xl:leading-snug lg:leading-snug md:leading-snug leading-snug md:text-start text-center font-semibold text-white">
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
                  <p className="text-gray-200 xl:text-xl lg:text-lg text-base font-normal font-source text-center">
                    In today’s fast-paced business world, finding the right
                    resources can be challenging. <br className="lg:block hidden" />
                    At HireQED.ai, we make it easy-connecting you with the
                    perfect match for any project, whether short-term or
                    long-term.
                  </p>
                </div>
                <div className="flex md:flex-row flex-col justify-center lg:gap-6 md:gap-5 gap-4">
                  <Button
                    variant="outline"
                    label="Request a Demo"
                    type="submit"
                    className="sm:py-4 py-3 px-8 lg:text-base sm:text-sm text-xs leading-5 font-medium rounded-lg text-white border-gray-300 hover:bg-primary-300 hover:border-primary-300 transition-all duration-500 ease-in"
                  />
                  <Button
                    variant="fill"
                    label="Learn More"
                    type="submit"
                    className="sm:py-4 py-3 px-12 lg:text-base sm:text-sm text-xs leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                  />
                </div>
              </div>
            </div>
            <div className="absolute bg-black-100 top-0 left-0 w-full 2xl:h-[1023px] xl:h-[880px] lg:h-[750px] md:h-[610px] sm:h-[710px] h-[710px] rounded-lg overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-75">
              <Image
                src={heroBg}
                alt="Hero Background"
                className="w-full h-full object-cover sm:object-center object-[-280px_0px]"
                priority={true}
              />
            </div>
            <div className="4xl:max-w-[1300px] 2xl:max-w-[1152px] xl:max-w-[940px] lg:max-w-[800px] md:max-w-[600px] sm:max-w-[460px]  relative z-10 sm:mx-auto mx-[5px] shadow-sm hover:shadow-md rounded-lg overflow-hidden transition-all duration-300 ease-in hover:scale-[1.02]">
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
