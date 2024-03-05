"use client";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


const AboutTech = () => {
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
    if (swiperRefSmall.current && !swiperRefSmall.current.swiper) {
      const swiperInstance = new Swiper(swiperRefSmall.current, {
        modules: [Navigation],
        spaceBetween: 30,
        slidesPerView: 1,
      });
      swiperRefSmall.current.swiper = swiperInstance;
    } else if (swiperRefSmall.current && swiperRefSmall.current.swiper) {
      swiperRefSmall.current.swiper.update();
    }
  }, []);
  

  return (
    <>
      <div className="flex flex-col gap-y-5 items-center justify-center text-start md:text-center pt-[60px] lg:pt-20">
        <div>
          <p className="text-[42px] leading-normal tracking-tight font-semibold text-[#011632]">
            Latest Technology
          </p>
        </div>
        <div className="text-lg  lg:w-[629px] w-full md:text-lg lg:text-xl text-center font-normal text-[#3C4959]">
          <p>
            Thanks to major technological advancements, dentistry allows
            treating the most complex cases with less time and more efficiency.
          </p>
        </div>
      </div>

      <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-5 ml-0 px-5 md:px-10 lg:px-20 mt-8 lg:mt-20 ">
        <div className="">
          <img
            src="/images/abouttech.png"
            alt=""
            className="mx-auto lg:mx-0 rounded-lg"
          />
        </div>
        <div className="text-left w-full lg:w-[650px]">
          <h1 className="text-[#011632] text-2xl font-medium">
            The Future of Dentistry is Digital:
          </h1>
          <p className="text-lg text-[#3C4959] font-normal mt-5">
            Dentists today already utilize software to capture insights in
            clinical decision-making. These practices will continue to develop
            to integrate AI algorithms that enable clinicians to find the best
            modalities for their patients.
          </p>

          <p className="text-lg text-[#3C4959] font-normal mt-7">
            In the 21st century, digital radiographs and 3D imaging have become
            the standard of dental care. Using an intraoral scanner with
            digitized data for 3D dental impressions (vs. polyvinyl siloxane and
            rubber base impressions) for a dental crown is now commonplace.
          </p>
          <p className="text-lg text-[#3C4959] font-normal mt-7">
            Artificial intelligence is laying the groundwork for the future of
            the dental industry. Dental robots can now perform functions such as
            filling cavities and cleaning or extracting teeth
          </p>
        </div>
      </div>
      <div className="lg:block hidden">
        <div className="bg-[#011632] py-12 px-6 md:px-9 lg:px-20 mt-8 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-center justify-center">
          <div className="bg-[#FFFFFF] flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
            <img src="/images/teeth.svg" alt="" />
            <p className="text-2xl font-medium text-[#011632]">
              Root Canal Treatment
            </p>
            <p className="text-lg font-medium text-[#3C4959]">
              Root canal treatment (endodontics) is a dental procedure used to
              treat infection at the centre of a tooth.
            </p>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <p className="text-base text-[#011632] underline font-semibold">
                Learn More{" "}
              </p>
              <img src="/images/Right Circle.svg" alt="" />
            </div>
          </div>

          <div className="bg-[#FFFFFF] flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
            <img src="/images/lip.svg" alt="" />
            <p className="text-2xl font-medium text-[#011632]">
              Cosmetic Dentist
            </p>
            <p className="text-lg font-medium text-[#3C4959]">
              Cosmetic dentistry is the branch of dentistry that focuses on
              improving the appearance of your smile.
            </p>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <p className="text-base text-[#011632] underline font-semibold">
                Learn More{" "}
              </p>
              <img src="/images/Right Circle.svg" alt="" />
            </div>
          </div>

          <div className="bg-[#FFFFFF] flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
            <img src="/images/jaw.svg" alt="" />
            <p className="text-2xl font-medium text-[#011632]">
              Dental Implants
            </p>
            <p className="text-lg font-medium text-[#3C4959]">
              A dental implant is an artificial tooth root that’s placed into
              your jaw to hold a prosthetic tooth or bridge.
            </p>
            <div className="flex items-center justify-center gap-2 cursor-pointer">
              <p className="text-base text-[#011632] underline font-semibold">
                Learn More{" "}
              </p>
              <img src="/images/Right Circle.svg" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="lg:hidden block bg-[#011632]">
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

export default AboutTech;
