import { Button } from "@/components/Button";
import Image from "next/image";
import PromoImage from "./../../images/Dashboard.png";

export const PromoSection = () => {
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="">
            <div className="mx-[50px] mb-[-135px] shadow-card rounded-lg">
              <Image
                src={PromoImage}
                alt="Promo image"
                className="w-full h-full object-cover"
                priority={true}
              />
            </div>
            <div className="bg-primary-gradient relative z-10 rounded-lg overflow-hidden px-14 py-8">
              <div className="flex justify-between items-center">
                <div className="w-full max-w-[622px] flex flex-col gap-2">
                  <h2 className="text-[32px] leading-[42px] font-semibold text-white">Ready to get started?</h2>
                  <p className="text-primary-800 text-base font-normal font-sourceSans">Discover how we can help you achieve your project goals with unparalleled ease and efficiency</p>
                </div>
                <div className="flex gap-6">
                  <Button
                    variant="outline"
                    label="Request a Demo"
                    type="submit"
                    className="py-4 px-8 min-w-[198px] text-base leading-5 font-medium rounded-lg text-white border-white hover:bg-white-100 transition-all duration-500 ease-in"
                  />
                  <Button
                    variant="fill"
                    label="Join HireQED"
                    type="submit"
                    className="py-4 px-12 min-w-[198px] text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
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
