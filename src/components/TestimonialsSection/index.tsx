"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { testimonials } from "@/constants/data";
import { RightArrow } from "../Icons";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="custom-arrow custom-next md:size-12 sm:size-10 size-8 rounded border border-gray-300 flex justify-center items-center cursor-pointer text-primary-400 bg-white absolute sm:top-1/2 bottom-0 sm:translate-y-[-50%] sm:right-0 right-[36%] z-10 hover:shadow-2xl transition-all duration-300 ease-in"
    onClick={onClick}
  >
    <RightArrow className="sm:w-[11px] w-2" />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div
    className="custom-arrow custom-prev md:size-12 sm:size-10 size-8 rounded border border-gray-300 flex justify-center items-center cursor-pointer text-primary-400 bg-white absolute sm:top-1/2 bottom-0 sm:translate-y-[-50%] rotate-180 sm:left-0 left-[36%] z-10 hover:shadow-2xl transition-all duration-300 ease-in"
    onClick={onClick}
  >
    <RightArrow className="sm:w-[11px] w-2" />
  </div>
);

export const TestimonialsSection = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="">
      <div className="2xl:py-[80px] xl:py-[70px] md:py-[60px] py-[50px]">
        <div className="container">
          <div className="flex flex-col md:gap-12 gap-10">
            <div className="text-center">
              <h2 className="2xl:text-5xl lg:text-4xl sm:text-3xl text-2xl 2xl:leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Hear from our clients
              </h2>
            </div>
            <div className="w-full max-w-[1206px] mx-auto">
              <Slider
                {...settings}
                className="testimonials-slider sm:px-5 sm:pb-0 pb-[90px]"
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    className="w-full max-w-[1206px] mx-auto p-px"
                    key={index}
                  >
                    <div className="shadow-card rounded-lg overflow-hidden flex sm:flex-row flex-col lg:min-h-[422px] md:min-h-[300px] sm:min-h-[250px]">
                      <div className="w-full lg:max-w-[356px] md:max-w-[280px] sm:max-w-[200px] sm:h-auto h-[340px]">
                        <Image
                          src={testimonial.image}
                          alt="service-image"
                          className="w-full h-full object-cover"
                          priority={true}
                        />
                      </div>
                      <div className="xl:px-[94px] lg:px-[60px] md:px-10 sm:px-5 px-4 md:py-10 sm:py-5 py-8 flex flex-col items-center justify-center w-full lg:max-w-[calc(100%-356px)] md:max-w-[calc(100%-280px)] sm:max-w-[calc(100%-200px)]">
                        <div className="flex flex-col md:gap-8 gap-2">
                          <p className="font-source 2xl:text-[28px] xl:text-2xl lg:text-xl md:text-lg text-base 2xl:leading-[36px] font-normal text-gray-600">
                            {testimonial.feedback}
                          </p>
                          <div className="">
                            <h6 className="font-light xl:text-2xl lg:text-xl md:text-lg text-base text-gray-600 font-source">
                              {testimonial.name}
                            </h6>
                            <h6 className="font-light xl:text-2xl lg:text-xl md:text-lg text-base text-gray-600 font-source">
                              {testimonial.position}
                            </h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
