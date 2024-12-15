import { Button } from "@/components/Button";
import { CollaborationImage, ExcellenceImage, FlawlessCommunicationImage } from "@/images";
import Image from "next/image";

export const OurCoreValues = () => {

    return (
        <section>
            <div className="py-[100px]">
                <div className="container">
                    <div className="flex flex-col gap-12 w-full mx-auto max-w-[1046px]">
                        <div className="text-center w-full mx-auto max-w-[1020px]">
                            <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                                Our Core Values Shape Every Step Toward Excellence
                            </h2>
                        </div>
                        <div className="grid grid-cols-3 gap-6">
                            <div className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 hover:bg-primary-gradient group min-h-[224px]">
                                <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset group-hover:text-white">
                                    Trustworthiness
                                </h2>
                                <p className="text-gray-600 text-base font-source font-normal group-hover:text-white">
                                    We foster an environment of honesty and reliability, ensuring our clients and partners can count on us.
                                </p>
                            </div>
                            <div className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 hover:bg-primary-gradient group min-h-[224px]">
                                <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset group-hover:text-white">
                                    Integrity First
                                </h2>
                                <p className="text-gray-600 text-base font-source font-normal group-hover:text-white">
                                    We are committed to transparency in all our actions, ensuring that our clients and team members are informed and engaged.
                                </p>
                            </div>
                            <div className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 hover:bg-primary-gradient group min-h-[224px]">
                                <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent group-hover:text-fill-unset group-hover:text-white">
                                    Quality
                                </h2>
                                <p className="text-gray-600 text-base font-source font-normal group-hover:text-white">
                                    We are dedicated to delivering exceptional results in every project, striving for continuous improvement and attention to detail.
                                </p>
                            </div>
                            <div className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 min-h-[451px]">
                                <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent">
                                    Excellence
                                </h2>
                                <p className="text-gray-600 text-base font-source font-normal min-h-[80px]">
                                    We are never satisfied with "good enough." Every project, every solution is an opportunity to exceed expectations.
                                </p>
                                <div className="">
                                    <Image
                                        src={ExcellenceImage}
                                        alt="Excellence Image"
                                        className="mx-auto"
                                        width={182}
                                        height={149}
                                        priority={true}
                                    />
                                </div>
                            </div>
                            <div className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 min-h-[451px]">
                                <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent">
                                    Flawless Communication
                                </h2>
                                <p className="text-gray-600 text-base font-source font-normal min-h-[80px]">
                                    We value clear and open communication, ensuring that everyone is informed, engaged, and empowered to contribute.
                                </p>
                                <div className="">
                                    <Image
                                        src={FlawlessCommunicationImage}
                                        alt="FlawlessCommunication Image"
                                        className="mx-auto"
                                        width={298}
                                        height={183}
                                        priority={true}
                                    />
                                </div>
                            </div>
                            <div className="shadow-card rounded-lg py-7 px-4 flex flex-col gap-6 min-h-[451px]">
                                <h2 className="text-[28px] leading-[36px] inline-block font-semibold bg-primary-gradient bg-clip-text text-fill-transparent">
                                    Collaboration
                                </h2>
                                <p className="text-gray-600 text-base font-source font-normal min-h-[80px]">
                                    We believe that teamwork and open communication lead to better solutions, empowering every team member to contribute to our shared goals.
                                </p>
                                <div className="">
                                    <Image
                                        src={CollaborationImage}
                                        alt="Collaboration Image"
                                        className="mx-auto"
                                        width={217}
                                        height={191}
                                        priority={true}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};
