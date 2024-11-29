import { Button } from "@/components/Button";

export const AboutUsSection = () => {
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="bg-primary-gradient rounded-lg overflow-hidden">
            <div className=" py-[160px] px-[116px] bg-about-bg bg-no-repeat bg-[length:100%_100%]">
              <div className="text-center flex flex-col items-center justify-center gap-12">
                <h2 className="text-[40px] leading-[54px] font-semibold text-white">
                  We aim to empower organizations by connecting them with the right talent swiftly and efficiently, simplifying the hiring process to ensure quality, reliability, and a seamless experience for any project.
                </h2>
                <Button
                  variant="outline"
                  label="More About Us"
                  type="submit"
                  className="py-4 px-8 text-base leading-5 font-medium rounded-lg capitalize text-white border-white hover:bg-white-100 transition-all duration-500 ease-in"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
