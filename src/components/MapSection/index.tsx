import { Button } from "@/components/Button";

export const MapSection = () => {
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-12">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Connecting Across Continents</h2>
              <div className="w-full max-w-[775px] mx-auto text-center">
                <p className="text-gray-600 text-xl font-normal font-sourceSans">
                  With strategic hubs in the USA and India, we empower businesses across six continents, offering tailored solutions that drive growth and innovation.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-12">
              <div className="">

              </div>
              <div className="flex justify-center">
                <Button
                  variant="fill"
                  label="See all locations"
                  type="submit"
                  className="py-4 px-12 min-w-[240px] text-base leading-5 font-poppins font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
