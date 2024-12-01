"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { testimonials } from "@/constants/data";
import { RightArrow } from "../Icons";

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="custom-arrow custom-next size-12 rounded border border-gray-300 flex justify-center items-center cursor-pointer text-primary-400 bg-white absolute top-1/2 translate-y-[-50%] right-0 z-10 hover:shadow-2xl transition-all duration-300 ease-in" onClick={onClick}>
    <RightArrow />
  </div>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <div className="custom-arrow custom-prev size-12 rounded border border-gray-300 flex justify-center items-center cursor-pointer text-primary-400 bg-white absolute top-1/2 translate-y-[-50%] rotate-180 left-0 z-10 hover:shadow-2xl transition-all duration-300 ease-in" onClick={onClick}>
    <RightArrow />
  </div>
);


export const TestimonialsSection = () => {
  const settings: Settings = {
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
      <div className="py-[100px]">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="text-center">
              <h2 className="text-5xl leading-[62px] inline-block font-semibold text-center bg-primary-gradient bg-clip-text text-fill-transparent">
                Hear from our clients
              </h2>
            </div>
            <div className="w-full max-w-[1206px] mx-auto">
              <Slider {...settings} className="testimonials-slider px-5">
                {testimonials.map((testimonial, index) => (
                  <div className="w-full max-w-[1206px] mx-auto" key={index}>
                    <div className="shadow-card rounded-lg overflow-hidden flex min-h-[422px]">
                      <div className="w-full max-w-[356px]">
                        <Image
                          src={testimonial.image}
                          alt="service-image"
                          className="w-full h-full object-cover"
                          priority={true}
                        />
                      </div>
                      <div className="px-[94px] py-10 flex flex-col items-center justify-center w-full max-w-[calc(100%-356px)]">
                        <div className="flex flex-col gap-8">
                          <p className="font-sourceSans text-[28px] leading-[36px] font-normal text-gray-600">
                            {testimonial.feedback}
                          </p>
                          <div className="">
                            <h6 className="font-light text-2xl text-gray-600 font-sourceSans">
                              {testimonial.name}
                            </h6>
                            <h6 className="font-light text-2xl text-gray-600 font-sourceSans">
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
