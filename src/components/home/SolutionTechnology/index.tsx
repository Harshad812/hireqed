import Image from "next/image";
import heroBg from "../../../images/bg-home.png";
import dashboardImage from "../../../images/Dashboard.png";
import { Button } from "@/components/Button";
import { title } from "process";
import PythonLogo from "./../../../images/python-logo.svg";
import RustLogo from "../../../images/rust-logo.svg";
import JavascriptLogo from "../../../images/javascript-logo.svg";
import TypescriptLogo from "../../../images/typescript-logo.svg";
import CsSarpLogo from "../../../images/csharp-logo.svg";
import cplusplusLogo from "../../../images/cplusplus-logo.svg";
import RubyLogo from "../../../images/ruby-logo.svg";
import GoLogo from "../../../images/go-logo.svg";
import RLogo from "../../../images/r-logo.svg";
import JavaLogo from "../../../images/java-logo.svg";
import DartLogo from "../../../images/dart-logo.svg";
import PhpLogo from "../../../images/php-logo.svg";
import SwiftLogo from "../../../images/swift-logo.svg";
import KotlinLogo from "../../../images/kotlin-logo.svg";

export const SolutionTechnology = () => {
  const titleData = [
    {
      id: 1,
      title: "Tools & Programming Languages"
    },
    {
      id: 2,
      title: "Cloud Computing & DevOps"
    },
    {
      id: 3,
      title: "Databases"
    },
    {
      id: 4,
      title: "Big Data & Analytics"
    },
    {
      id: 5,
      title: "Machine Learning & AI"
    },
  ]
  const languagesIconData = [
    {
      id: 1,
      logo: PythonLogo,
      alt: "python-logo"
    },
    {
      id: 2,
      logo: RustLogo,
      alt: "rust-logo"
    },
    {
      id: 3,
      logo: JavascriptLogo,
      alt: "javascript-logo"
    },
    {
      id: 4,
      logo: TypescriptLogo,
      alt: "typescript-logo"
    },
    {
      id: 5,
      logo: CsSarpLogo,
      alt: "c-sarp-logo"
    },
    {
      id: 6,
      logo: cplusplusLogo,
      alt: "c-plus-logo"
    },
    {
      id: 7,
      logo: RubyLogo,
      alt: "ruby-logo"
    },
    {
      id: 8,
      logo: GoLogo,
      alt: "go-logo"
    },
    {
      id: 9,
      logo: RLogo,
      alt: "r-logo"
    },
    {
      id: 10,
      logo: JavaLogo,
      alt: "java-logo"
    },
    {
      id: 11,
      logo: DartLogo,
      alt: "dart-logo"
    },
    {
      id: 12,
      logo: PhpLogo,
      alt: "php-logo"
    },
    {
      id: 13,
      logo: SwiftLogo,
      alt: "swift-logo"
    },
    {
      id: 14,
      logo: KotlinLogo,
      alt: "kotlin-logo"
    },
  ]
  return (
    <section className="">
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">Solution for Every Technology</h2>
            </div>
            <div className="">
              <div className="flex flex-col gap-[60px]">
                <div className="flex justify-center gap-4">
                  {titleData.map((items, index) => (
                    <div className="" key={index}>
                      <span className="block text-primary-400 text-base font-medium p-2.5 hover:text-primary-200 transition-all duration-300 ease-in">{items.title}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between flex-wrap gap-x-[102px] gap-y-12 px-[84px]">
                  {languagesIconData.map((items, index) => (
                    <div className="" key={index}>
                      <Image
                        src={items.logo}
                        alt={items.alt}
                        className="w-full h-full object-cover"
                        priority={true}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
