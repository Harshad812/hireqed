import Image from "next/image";
import heroBg from "../../../images/bg-home.png";
import dashboardImage from "../../../images/Dashboard.png";
import { Button } from "@/components/Button";
import { HiringImage1, HiringImage2 } from "@/images";

export const HiringJourney = () => {
    return (
        <section className="hero-section">
            <div className="py-[100px]">
                <div className="container">
                    <div className="flex flex-col gap-12">
                        <div className="text-center">
                            <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Your Hiring Journey Starts Here</h2>
                        </div>
                        <div className="flex flex-col gap-16">
                            <div className="flex flex-col gap-[100px]">
                                <div className="flex flex-row justify-between items-center">
                                    <div className="">
                                        <Image
                                            src={HiringImage1}
                                            alt="Hiring Image"
                                            className="w-full h-full"
                                            priority={true}
                                        />
                                    </div>
                                    <div className="shadow-card rounded-lg pt-8 pb-16 px-8 w-full max-w-[589px]">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col items-start gap-3">
                                                <span className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block text-xs font-medium uppercase">STEP 1</span>
                                                <h2 className="text-[40px] leading-[52px] inline-block font-medium bg-primary-gradient bg-clip-text text-fill-transparent">Register & Get Access</h2>
                                            </div>
                                            <div className="">
                                                <p className="text-xl leading-[26px] text-gray-600 font-normal font-sourceSans">
                                                    <b>Sign Up:</b> Begin by registering your organization on HireQED.ai with our quick and easy sign-up process.
                                                </p>
                                                <p className="text-xl leading-[26px] text-gray-600 font-normal font-sourceSans">
                                                    <b>Access Granted:</b> Receive immediate access to our comprehensive platform, tailored to meet all your hiring needs
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex flex-row-reverse justify-between items-center">
                                    <div className="">
                                        <Image
                                            src={HiringImage2}
                                            alt="Hiring Image"
                                            className="w-full h-full"
                                            priority={true}
                                        />
                                    </div>
                                    <div className="shadow-card rounded-lg pt-8 pb-16 px-8 w-full max-w-[589px]">
                                        <div className="flex flex-col gap-6">
                                            <div className="flex flex-col items-start gap-3">
                                                <span className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block text-xs font-medium uppercase">STEP 2</span>
                                                <h2 className="text-[40px] leading-[52px] inline-block font-medium bg-primary-gradient bg-clip-text text-fill-transparent">Project Setup</h2>
                                            </div>
                                            <div className="">
                                                <p className="text-xl leading-[26px] text-gray-600 font-normal font-sourceSans">
                                                    Define your project requirements, timelines, and specific needs. Whether it’s a short-term assignment or a long-term project, our platform allows you to set up multiple projects with ease.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-center">
                                <Button
                                    variant="fill"
                                    label="Register Now"
                                    type="submit"
                                    className="py-4 px-12 text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
