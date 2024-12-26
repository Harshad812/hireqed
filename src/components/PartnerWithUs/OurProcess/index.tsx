import { Button } from "@/components/Button";

export const OurProcess = () => {
  return (
    <section>
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="xl:bg-primary-gradient xl:rounded-lg 2xl:py-[88px] xl:py-20 2xl:px-[118px] xl:px-[100px]">
            <div className="flex xl:flex-row flex-col items-center justify-between xl:gap-7 gap-10">
              <div className="xl:flex hidden flex-col gap-6 w-full 2xl:max-w-[448px] xl:max-w-[370px]">
                <h2 className="text-white font-semibold 2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px]">
                  {" Our Process? It’s Simple."}
                </h2>
                <p className="text-primary-800 font-normal text-xl font-source">
                  {
                    "Our streamlined process ensures every project is handled smoothly from start to finish."
                  }
                </p>
              </div>
              <div className="xl:hidden flex flex-col xl:items-start xl:text-start text-center items-center lg:gap-6 gap-5 w-full 2xl:max-w-[448px] xl:max-w-[370px] md:max-w-[460px]">
                <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent font-semibold 2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px]">
                  {"Our Process? It’s Simple."}
                </h2>
                <p className="text-gray-600 font-normal text-xl font-source">
                  {
                    "Our streamlined process ensures every project is handled smoothly from start to finish."
                  }
                </p>
              </div>
              <div className="w-full 2xl:max-w-[586px] xl:p-0 p-px xl:max-w-[520px] xl:max-h-[420px] grid xl:grid-cols-1 md:grid-cols-2 grid-cols-1 xl:gap-10 lg:gap-9 md:gap-8 gap-6 no-scrollbar overflow-y-auto">
                <div className="bg-white shadow-card rounded-lg lg:px-8 sm:px-6 px-4 sm:pt-8 pt-7 2xl:pb-16 pb-12">
                  <div className="flex flex-col items-start lg:gap-6 gap-4">
                    <div className="flex flex-col gap-3">
                      <span className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-xs">
                        STEP 1
                      </span>
                      <h2 className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium 2xl:text-[40px] 2xl:leading-[54px] xl:leading-normal sm:leading-normal xl:text-4xl sm:text-3xl text-2xl">
                        Get in Touch
                      </h2>
                    </div>
                    <div>
                      <p className="2xl:text-xl sm:text-lg text-base font-normal text-gray-600 font-source">
                        {
                          "Reach out to our team to talk about the best way we can work together. We'll see how our partnership can fit your business goals and the unique value you can offer. Our team will help you step-by-step through the onboarding process, making sure everything starts smoothly and easily."
                        }
                      </p>
                    </div>
                    <Button
                      variant="fill"
                      label="Contact Us"
                      type="submit"
                      className="sm:py-4 py-3 px-8 lg:text-base sm:text-sm text-xs font-medium sm:rounded-lg rounded text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                    />
                  </div>
                </div>
                <div className="bg-white shadow-card rounded-lg lg:px-8 sm:px-6 px-4 sm:pt-8 pt-7 2xl:pb-16 pb-12">
                  <div className="flex flex-col items-start lg:gap-6 gap-4">
                    <div className="flex flex-col gap-3">
                      <span className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-xs">
                        STEP 2
                      </span>
                      <h2 className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium 2xl:text-[40px] 2xl:leading-[54px] xl:leading-normal sm:leading-normal xl:text-4xl sm:text-3xl text-2xl">
                        Add your Resources
                      </h2>
                    </div>
                    <div>
                      <p className="2xl:text-xl sm:text-lg text-base font-normal text-gray-600 font-source">
                        {
                          "Start by adding your resources to our platform. Whether you have IT professionals, consultants, product developers, researchers, or other specialists, we welcome a wide range of talents. Our simple, user-friendly interface allows you to upload resource information quickly and accurately."
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-card rounded-lg lg:px-8 sm:px-6 px-4 sm:pt-8 pt-7 2xl:pb-16 pb-12">
                  <div className="flex flex-col items-start lg:gap-6 gap-4">
                    <div className="flex flex-col gap-3">
                      <span className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-xs">
                        STEP 3
                      </span>
                      <h2 className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium 2xl:text-[40px] 2xl:leading-[54px] xl:leading-normal sm:leading-normal xl:text-4xl sm:text-3xl text-2xl">
                        Complete Resource Profiles
                      </h2>
                    </div>
                    <div>
                      <p className="2xl:text-xl sm:text-lg text-base font-normal text-gray-600 font-source">
                        {
                          "Create detailed profiles for each of your resources, including their qualifications, experience, skills, certifications, and other relevant details that help clients make informed choices. Well-documented profiles boost visibility and improve the chances of your resources being selected for projects."
                        }
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-white shadow-card rounded-lg lg:px-8 sm:px-6 px-4 sm:pt-8 pt-7 2xl:pb-16 pb-12">
                  <div className="flex flex-col items-start lg:gap-6 gap-4">
                    <div className="flex flex-col gap-3">
                      <span className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-xs">
                        STEP 4
                      </span>
                      <h2 className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium 2xl:text-[40px] 2xl:leading-[54px] xl:leading-normal sm:leading-normal xl:text-4xl sm:text-3xl text-2xl">
                        Go Live
                      </h2>
                    </div>
                    <div>
                      <p className="2xl:text-xl sm:text-lg text-base font-normal text-gray-600 font-source">
                        {
                          "Once your resources are onboarded and the profiles are complete, you’re all set to go live on our platform. Start connecting with clients and discovering new opportunities. Our platform streamlines the entire process, from initial engagement to project delivery."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
