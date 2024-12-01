import Image from "next/image";
import heroBg from "../../../images/bg-home.png";
import dashboardImage from "../../../images/Dashboard.png";
import { Button } from "@/components/Button";
import { GoalIcon, HeadsetIcon, MapIcon, SettingsIcon } from "@/images";

export const ContactUsForm = () => {

    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="flex justify-between gap-10 w-full max-w-[1156px] mx-auto">
                        <div className="flex flex-col gap-12 w-full max-w-[566px]">
                            <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block font-medium text-[32px] leading-[42px]">How can we help you?</h2>
                            <div className="">

                            </div>
                        </div>
                        <div className="flex flex-col gap-12 w-full max-w-[350px]">
                            <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block font-medium text-[32px] leading-[42px]">Contact Information</h2>
                            <div className="flex flex-col gap-6">
                                <div className="flex flex-col gap-3">
                                    <h6 className="text-primary-400 text-xl font-medium">Email</h6>
                                    <ul className="*:text-xl *:leading-[30px] *:font-normal *:font-sourceSans *:text-gray-600">
                                        <li>
                                            <span className="font-semibold">General Inquiries:</span> info@hireqed.ai
                                        </li>
                                        <li>
                                            <span className="font-semibold">Support:</span>  support@hireqed.ai
                                        </li>
                                        <li>
                                            <span className="font-semibold">Partnerships:</span>  partners@hireqed.ai
                                        </li>
                                    </ul>
                                </div>
                                <div className="flex flex-col gap-3">
                                    <h6 className="text-primary-400 text-xl font-medium">Phone</h6>
                                    <ul className="*:text-xl *:leading-[30px] *:font-normal *:font-sourceSans *:text-gray-600">
                                        <li>
                                            <span className="font-semibold">USA:</span>  +1 (800) 123-4567
                                        </li>
                                        <li>
                                            <span className="font-semibold">UK:</span>   +44 (20) 1234 5678
                                        </li>
                                        <li>
                                            <span className="font-semibold">UAE:</span>   +971 (4) 123 4567
                                        </li>
                                        <li>
                                            <span className="font-semibold">Saudi Arabia:</span>   +966 (11) 123 4567
                                        </li>
                                        <li>
                                            <span className="font-semibold">India:</span>   +91 (124) 123 4567
                                        </li>
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
