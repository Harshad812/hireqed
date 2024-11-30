import { socialMediaData } from "@/constants/data";
import { Logo } from "../Icons";

export const Footer = () => {
  return (
    <section className="pt-[100px]">
      <div className="bg-primary-900 py-20">
        <div className="container">
          <div className="flex flex-col gap-20">
            <div className="flex gap-20">
              <div className="flex flex-col gap-6 w-full max-w-[378px] mr-auto">
                <div>
                  <Logo />
                </div>
                <p className="text-gray-500 text-xs font-normal">
                  Empowering businesses with tailored tech solutions, innovative
                  AI offerings, and unmatched expertise in digital
                  transformation. Your partner in navigating the future of work.
                </p>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black text-base font-medium m-2.5">
                  Solutions
                </h6>
                <ul className="flex flex-col items-start gap-3">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black text-base font-medium m-2.5">
                  Why HireQED?
                </h6>
                <ul className="flex flex-col items-start gap-3">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black text-base font-medium m-2.5">
                  Hire from Us
                </h6>
                <ul className="flex flex-col items-start gap-3">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-0.5">
                <h6 className="text-black text-base font-medium m-2.5">
                  Partner with Us
                </h6>
                <ul className="flex flex-col items-start gap-3">
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-primary-400 p-2.5 text-base font-medium hover:text-primary-200 transition-all duration-300 ease-in"
                    >
                      Link 4
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-300 pt-10">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-gray-400 text-base font-medium">
                    @2024 HireQED All rights Reserved
                  </p>
                </div>
                <div className="">
                  <ul className="flex items-center gap-8">
                    {socialMediaData.map((items, index) => (
                      <li key={index} className="flex">
                        <a href={items.link} className="inline-block">
                          {items.logo && <items.logo />}
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
