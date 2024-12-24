import { Button } from "@/components/Button";

export const ContactUsForm = () => {
  return (
    <section>
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex justify-between gap-10 w-full max-w-[1156px] mx-auto">
            <div className="flex flex-col gap-12 w-full max-w-[566px]">
              <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block font-medium text-[32px] leading-[42px]">
                How can we help you?
              </h2>
              <div className="">
                <form action="" className="flex flex-col gap-12">
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium text-base"
                      htmlFor="Name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name="Name"
                      id="Name"
                      placeholder="Enter Your full name here"
                      className="shadow-card w-full rounded py-[22px] px-8 text-gray-600 placeholder:text-gray-600 font-normal outline-none leading-5 text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium text-base"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      name="Email"
                      id="Email"
                      placeholder="Enter Your email here"
                      className="shadow-card w-full rounded py-[22px] px-8 text-gray-600 placeholder:text-gray-600 font-normal outline-none leading-5 text-base"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium text-base"
                      htmlFor="PhoneNumber"
                    >
                      Phone Number
                    </label>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium text-base"
                      htmlFor="Message"
                    >
                      Tell us what you need help with
                    </label>
                    <textarea
                      name="Message"
                      id="Message"
                      placeholder="Message"
                      className="shadow-card w-full rounded py-[22px] px-8 text-gray-600 placeholder:text-gray-600 font-normal outline-none leading-5 text-base min-h-[160px] resize-none"
                    ></textarea>
                  </div>
                  <div className="flex flex-col items-center gap-8">
                    <Button
                      variant="fill"
                      label="Submit"
                      type="submit"
                      className="py-4 px-12 w-full text-base leading-5 font-medium rounded-lg text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                    />
                    <a
                      href="#"
                      className="text-primary-400 text-base font-medium"
                    >
                      {`
                      We'll get back to you soon to help you
                    `}
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col gap-12 w-full max-w-[350px]">
              <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block font-medium text-[32px] leading-[42px]">
                Contact Information
              </h2>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h6 className="text-primary-400 text-xl font-medium">
                    Email
                  </h6>
                  <ul className="*:text-xl *:leading-[30px] *:font-normal *:font-source *:text-gray-600">
                    <li>
                      <span className="font-semibold">General Inquiries:</span>{" "}
                      info@hireqed.ai
                    </li>
                    <li>
                      <span className="font-semibold">Support:</span>{" "}
                      support@hireqed.ai
                    </li>
                    <li>
                      <span className="font-semibold">Partnerships:</span>{" "}
                      partners@hireqed.ai
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3">
                  <h6 className="text-primary-400 text-xl font-medium">
                    Phone
                  </h6>
                  <ul className="*:text-xl *:leading-[30px] *:font-normal *:font-source *:text-gray-600">
                    <li>
                      <span className="font-semibold">USA:</span> +1 (800)
                      123-4567
                    </li>
                    <li>
                      <span className="font-semibold">UK:</span> +44 (20) 1234
                      5678
                    </li>
                    <li>
                      <span className="font-semibold">UAE:</span> +971 (4) 123
                      4567
                    </li>
                    <li>
                      <span className="font-semibold">Saudi Arabia:</span> +966
                      (11) 123 4567
                    </li>
                    <li>
                      <span className="font-semibold">India:</span> +91 (124)
                      123 4567
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
