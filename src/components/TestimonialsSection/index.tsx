"use client";

import React from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { testimonials } from "@/constants/data";

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
              <Slider {...settings} className="testimonials-slider">
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
