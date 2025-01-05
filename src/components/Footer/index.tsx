import { socialMediaData } from "@/constants/data";
import { Logo } from "@/images";
import Image from "next/image";

export const Footer = () => {
  return (
    <section className="2xl:pt-[80px] xl:pt-[70px] md:pt-[60px] pt-[50px]">
      <div className="bg-primary-900 sm:pt-20 pt-14 lg:pb-20 md:pb-14 sm:pb-12 pb-10">
        <div className="container">
          <div className="flex flex-col sm:gap-20 gap-5">
            <div className="flex md:flex-row flex-col flex-wrap justify-between 2xl:gap-20 xl:gap-16 md:gap-10 sm:gap-8 gap-4">
              <div className="flex flex-col gap-6 w-full 2xl:max-w-[378px] lg:max-w-[290px] mr-auto">
                <div>
                  <Image
                    src={Logo}
                    alt="Logo"
                    className="md:w-[211px] sm:w-[160px] w-[125px]"
                  />
                </div>
                <div className="lg:max-w-full max-w-[300px] w-full">
                  <p className="text-gray-500 text-xs font-normal">
                    Empowering businesses with tailored tech solutions,
                    innovative AI offerings, and unmatched expertise in digital
                    transformation. Your partner in navigating the future of
                    work.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black sm:text-base text-sm font-medium lg:mx-2.5 my-2.5">
                  Solutions
                </h6>
                <ul className="flex flex-col items-start sm:gap-3 gap-0.5">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black sm:text-base text-sm font-medium lg:mx-2.5 my-2.5">
                  Why HireQED?
                </h6>
                <ul className="flex flex-col items-start sm:gap-3 gap-0.5">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black sm:text-base text-sm font-medium lg:mx-2.5 my-2.5">
                  Hire from Us
                </h6>
                <ul className="flex flex-col items-start sm:gap-3 gap-0.5">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black sm:text-base text-sm font-medium lg:mx-2.5 my-2.5">
                  Partner with Us
                </h6>
                <ul className="flex flex-col items-start sm:gap-3 gap-0.5">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 inline-block lg:px-2.5 sm:py-2.5 py-2 sm:text-base text-[10px] font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:border-t md:border-gray-300 md:pt-10">
              <div className="flex md:flex-row flex-col-reverse md:items-center justify-between md:gap-3 gap-5">
                <div className="md:border-0 border-t border-gray-300 md:pt-0 pt-5">
                  <p className="text-gray-400 lg:text-base md:text-sm sm:text-xs text-[8px] font-medium">
                    @2024 HireQED All rights Reserved
                  </p>
                </div>
                <div className="">
                  <ul className="flex items-center xl:gap-8 md:gap-7 sm:gap-6 gap-5">
                    {socialMediaData.map((items, index) => (
                      <li key={index} className="flex">
                        <a
                          href={items.link}
                          className="inline-block"
                          target="_blank"
                        >
                          {items.logo && (
                            <items.logo className="xl:w-8 xl:h-8 md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5" />
                          )}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
