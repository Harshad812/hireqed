"use client";

import { Button } from "@/components/Button";
import axios from "axios";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [phone, setPhone] = useState("");
  const [isLoader, setIsLoader] = useState(false);

  const handlePhoneChange = (value: string) => {
    setPhone(value);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsLoader(true);
      const response = await axios("/api/send-mail", {
        method: "POST",
        data: { ...form, phoneNumber: phone },
      });

      if (response.status === 201) {
        alert("Mail sent successfully.");
        setForm({
          name: "",
          email: "",
          message: "",
        });
        setPhone("");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <section>
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex lg:flex-row flex-col justify-between lg:gap-10 gap-20 w-full 2xl:max-w-[1156px] xl:max-w-[955px] max-w-[855px] mx-auto">
            <div className="flex flex-col xl:gap-12 md:gap-10 sm:gap-8 gap-6 w-full 2xl:max-w-[566px] lg:max-w-[500px]">
              <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block font-medium xl:text-[32px] sm:text-3xl text-2xl xl:leading-[42px]">
                How can we help you?
              </h2>
              <div className="">
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col xl:gap-12 md:gap-10 sm:gap-9 gap-[34px]"
                >
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium md:text-base sm:text-sm text-xs"
                      htmlFor="Name"
                    >
                      Name
                    </label>
                    <input
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your full name here"
                      className="shadow-card w-full rounded xl:py-[22px] sm:py-5 py-4 xl:px-8 sm:px-6 px-4 text-gray-600 placeholder:text-gray-600 font-normal outline-none md:leading-5 md:text-base sm:text-sm text-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium md:text-base sm:text-sm text-xs"
                      htmlFor="Email"
                    >
                      Email
                    </label>
                    <input
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter Your email here"
                      className="shadow-card w-full rounded xl:py-[22px] sm:py-5 py-4 xl:px-8 sm:px-6 px-4 text-gray-600 placeholder:text-gray-600 font-normal outline-none md:leading-5 md:text-base sm:text-sm text-xs"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium md:text-base sm:text-sm text-xs"
                      htmlFor="PhoneNumber"
                    >
                      Phone Number
                    </label>
                    <div className="custom-phone-input">
                      <PhoneInput
                        country={"in"}
                        value={phone}
                        onChange={handlePhoneChange}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <label
                      className="text-primary-400 block font-medium md:text-base sm:text-sm text-xs"
                      htmlFor="Message"
                    >
                      Tell us what you need help with
                    </label>
                    <textarea
                      value={form.message}
                      onChange={handleChange}
                      name="message"
                      id="message"
                      placeholder="Message"
                      className="shadow-card w-full rounded xl:py-[22px] sm:py-5 py-4 xl:px-8 sm:px-6 px-4 text-gray-600 placeholder:text-gray-600 font-normal outline-none md:leading-5 md:text-base sm:text-sm text-xs sm:min-h-[160px] min-h-[120px] resize-none"
                    />
                  </div>
                  <div className="flex flex-col items-center text-center md:gap-8 sm:gap-6 gap-4 lg:max-w-none max-w-[275px] mx-auto">
                    <Button
                      loading={isLoader}
                      variant="fill"
                      label="Submit"
                      type="submit"
                      className="sm:py-4 py-3 sm:px-12 px-8 w-full lg:text-base sm:text-sm text-xs font-medium sm:rounded-lg rounded text-white border-0 bg-accent-300 hover:bg-accent-200 transition-all duration-500 ease-in"
                    />
                    <a
                      href="#"
                      className="text-primary-400 lg:text-base md:text-sm text-xs font-medium"
                    >
                      {`
                      We'll get back to you soon to help you
                    `}
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-col xl:gap-12 md:gap-10 sm:gap-8 gap-6 w-full lg:max-w-[350px]">
              <h2 className="bg-primary-gradient bg-clip-text text-fill-transparent inline-block font-medium xl:text-[32px] sm:text-3xl text-2xl xl:leading-[42px]">
                Contact Information
              </h2>
              <div className="flex flex-col sm:gap-6 gap-5">
                <div className="flex flex-col gap-3">
                  <h6 className="text-primary-400 text-xl font-medium">
                    Email
                  </h6>
                  <ul className="xl:*:text-xl sm:text-lg text-base xl:*:leading-[30px] *:font-normal *:font-source *:text-gray-600">
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
                  <ul className="xl:*:text-xl sm:text-lg text-base xl:*:leading-[30px] *:font-normal *:font-source *:text-gray-600">
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
