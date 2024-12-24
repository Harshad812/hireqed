import { Button } from "@/components/Button";
interface AboutUsSectionProps {
  title: string;
  withButton: boolean;
}

export const AboutUsSection = ({ title, withButton }: AboutUsSectionProps) => {
  return (
    <section className="">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="bg-primary-gradient rounded-lg overflow-hidden">
            <div className="2xl:py-[160px] lg:py-[120px] py-[100px] 2xl:px-[116px] lg:px-[100px] md:px-[80px] sm:px-[40px] px-4 bg-about-bg bg-no-repeat bg-[length:100%_100%]">
              <div className="text-center flex flex-col sm:items-center justify-center md:gap-12 sm:gap-9 gap-6">
                <h2 className="2xl:text-[40px] 2xl:leading-[54px] xl:leading-normal sm:leading-normal xl:text-4xl sm:text-3xl text-2xl font-semibold text-white">
                  {title}
                </h2>
                {withButton && (
                  <Button
                    variant="outline"
                    label="More About Us"
                    type="submit"
                    className="sm:py-4 py-3 sm:mx-0 mx-[11px] px-8 text-base  leading-5 font-medium rounded-lg capitalize text-white border-white hover:bg-white-100 transition-all duration-500 ease-in"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
