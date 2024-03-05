"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
const Cards = () => {
  const swiperRefSmall = useRef(null);

  const goNextSmall = () => {
    if (swiperRefSmall.current && swiperRefSmall.current.swiper) {
      swiperRefSmall.current.swiper.slideNext();
    }
  };

  const goPrevSmall = () => {
    if (swiperRefSmall.current && swiperRefSmall.current.swiper) {
      swiperRefSmall.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (swiperRefSmall.current && swiperRefSmall.current.swiper) {
      swiperRefSmall.current.swiper.update();
    }
  });

  return (
    <>
      <div className="lg:block hidden">
        <div className="bg-[#E6F6FE] gap-6 py-12 px-9 flex rounded-xl items-center justify-center">
          <div className="bg-[#FFFFFF] w-full h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
            <img src="/images/teeth.svg" alt="" />
            <p className="text-2xl font-medium text-[#011632]">
              Root Canal Treatment
            </p>
            <p className="text-lg font-medium text-[#3C4959] text-center">
              Root canal treatment (endodontics) is a dental procedure used to
              treat infection at the centre of a tooth.
            </p>
            <div className="flex gap-2  cursor-pointer">
              <p className="text-base text-[#011632] underline font-semibold">
                Learn More{" "}
              </p>
              <img src="/images/Right Circle.svg" alt="" />
            </div>
          </div>

          <div className="bg-[#FFFFFF] w-full h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
            <img src="/images/lip.svg" alt="" />
            <p className="text-2xl font-medium text-[#011632]">
              Cosmetic Dentist
            </p>
            <p className="text-lg font-medium text-[#3C4959] text-center">
              Cosmetic dentistry is the branch of dentistry that focuses on
              improving the appearance of your smile.
            </p>
            <div className="flex gap-2  cursor-pointer">
              <p className="text-base text-[#011632] underline font-semibold">
                Learn More{" "}
              </p>
              <img src="/images/Right Circle.svg" alt="" />
            </div>
          </div>

          <div className="bg-[#FFFFFF] w-full h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
            <img src="/images/jaw.svg" alt="" />
            <p className="text-2xl font-medium text-[#011632]">
              Dental Implants
            </p>
            <p className="text-lg font-medium text-[#3C4959] text-center">
              A dental implant is an artificial tooth root that’s placed into
              your jaw to hold a prosthetic tooth or bridge.
            </p>
            <div className="flex gap-2 cursor-pointer">
              <p className="text-base text-[#011632] underline font-semibold">
                Learn More{" "}
              </p>
              <img src="/images/Right Circle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block bg-[#E6F6FE]">
        <div className=" gap-6 py-12 px-5 lg:px-9  h-full w-full flex  rounded-xl items-center justify-center">
          <Swiper
            ref={swiperRefSmall}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
                <img src="/images/teeth.svg" alt="" />
                <p className="text-2xl font-medium text-[#011632]">
                  Root Canal Treatment
                </p>
                <p className="text-lg font-medium text-[#3C4959] text-center">
                  Root canal treatment (endodontics) is a dental procedure used
                  to treat infection at the centre of a tooth.
                </p>
                <div className="flex gap-2  cursor-pointer">
                  <p className="text-base text-[#011632] underline font-semibold">
                    Learn More{" "}
                  </p>
                  <img src="/images/Right Circle.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
                <img src="/images/lip.svg" alt="" />
                <p className="text-2xl font-medium text-[#011632]">
                  Cosmetic Dentist
                </p>
                <p className="text-lg font-medium text-[#3C4959] text-center">
                  Cosmetic dentistry is the branch of dentistry that focuses on
                  improving the appearance of your smile.
                </p>
                <div className="flex gap-2  cursor-pointer">
                  <p className="text-base text-[#011632] underline font-semibold">
                    Learn More{" "}
                  </p>
                  <img src="/images/Right Circle.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
                <img src="/images/jaw.svg" alt="" />
                <p className="text-2xl font-medium text-[#011632]">
                  Dental Implants
                </p>
                <p className="text-lg font-medium text-[#3C4959] text-center">
                  A dental implant is an artificial tooth root that’s placed
                  into your jaw to hold a prosthetic tooth or bridge.
                </p>
                <div className="flex gap-2 cursor-pointer">
                  <p className="text-base text-[#011632] underline font-semibold">
                    Learn More{" "}
                  </p>
                  <img src="/images/Right Circle.svg" alt="" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="flex items-center justify-center gap-3 mt-10 pb-[30px]">
          <img
            src="/images/arrowwhiteleft.svg"
            alt=""
            className="cursor-pointer"
            onClick={goPrevSmall}
          />
          <img
            src="/images/arrowwhiteright.svg"
            alt=""
            className="cursor-pointer"
            onClick={goNextSmall}
          />
        </div>
      </div>
    </>
  );
};

export default Cards;
