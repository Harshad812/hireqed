import { Button } from "@/components/Button";

export const OurProcess = () => {
  return (
    <section>
      <div className="py-[100px]">
        <div className="container">
          <div className="bg-primary-gradient rounded-lg py-[88px] px-[118px]">
            <div className="flex items-center justify-between gap-7">
              <div className="flex flex-col gap-6 w-full max-w-[448px]">
                <h2 className="text-white font-semibold text-5xl leading-[62px]">
                  Our Process? It’s Simple.
                </h2>
                <p className="text-primary-800 font-normal text-xl font-sourceSans">
                  Our streamlined process ensures every project is handled
                  smoothly from start to finish.
                </p>
              </div>
              <div className="bg-white shadow-card rounded-lg px-8 pt-8 pb-16 w-full max-w-[586px]">
                <div className="flex flex-col items-start gap-6">
                  <div className="flex flex-col gap-3">
                    <span className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-xs">
                      STEP 1
                    </span>
                    <h2 className="inline-block bg-primary-gradient bg-clip-text text-fill-transparent font-medium text-[40px] leading-[52px]">
                      Get in Touch
                    </h2>
                  </div>
                  <div>
                    <p className="text-xl font-normal text-gray-600 font-sourceSans">
                      {`
                      Reach out to our team to talk about the best way we can
                      work together. We'll see how our partnership can fit your
                      business goals and the unique value you can offer. Our
                      team will help you step-by-step through the onboarding
                      process, making sure everything starts smoothly and
                      easily.
                    `}
                    </p>
                  </div>
                  <Button
                    variant="fill"
                    label="Contact Us"
                    type="submit"
                    className="py-4 px-8 text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
