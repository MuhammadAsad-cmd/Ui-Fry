"use client";
import { News } from "@/app/Data";
import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Articles = () => {
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
      <div className="md:block hidden">
        <div className="mx-5 lg:mx-20 mt-10 md:mt-[100px]">
          <div className="flex flex-col gap-y-5 lg:flex-row justify-between">
            <div className="flex flex-col gap-y-5">
              <div>
                <p className="text-[42px] leading-normal font-bold text-[#011632]">
                  News & Articles
                </p>
                <img src="/images/faqline.svg" alt="" className="-mt-3 w-[323px]" />
              </div>
              <div className="text-lg font-normal text-[#3C4959]">
                <p>
                  We use only the best quality materials on the market in order
                </p>
                <p> to provide the best products to our patients.</p>
              </div>
            </div>
            <div className=" mt-5 md:mt-0">
              <button className="bg-[#1376F8] w-[145px] rounded-xl h-[55px] text-base font-semibold text-white">
                View All
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mx-5 xl:mx-14">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-[30px]">
            {News.map((article) => (
              <div
                key={article.id}
                className="bg-[#E6F6FE] p-5 h-full rounded-xl"
              >
                <img src={article.imageUrl} alt="" className="w-full" />
                <button className="mt-[22px] w-[97px] h-[35px] bg-[#011632] text-base font-medium text-[#FFFFFF] rounded-lg">
                  {article.button}
                </button>

                <p className="text-[#011632] text-lg font-medium mt-[14px]">
                  {article.title}
                </p>
                <p className="text-[#3C4959] text-lg font-normal mt-[10px]">
                  {article.description}
                </p>
                <div>
                  <p className="text-end text-[#011632] text-base font-normal mt-[2px]">
                    {article.writer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-10 mx-5 md:mx-20">
          <button className="bg-[#1376F8] w-[186px] rounded-xl h-[55px] text-base font-semibold text-white">
            Check out more
          </button>
        </div>
      </div>

      <div className="md:hidden block">
        <div className="flex flex-col gap-y-5 items-center px-5 lg:px-20 mt-[100px]">
          <p className="text-4xl leading-normal font-semibold text-[#011632]">
            News & Articles
          </p>
          <img src="/images/faqline.svg" alt="" className="-mt-7 w-[323px]" />
          <p className="text-lg font-normal text-[#3C4959]">
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>
        </div>
        <div className="bg-[#E6F6FE] gap-6 py-[10px] px-5 mt-[50px]  h-full w-full flex  rounded-xl items-center justify-center">
          <Swiper
            ref={swiperRefSmall}
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
          >
            {News.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="bg-[#E6F6FE] h-full rounded-xl">
                  <img src={article.imageUrl} alt="" className="w-full" />
                  <button className="mt-[22px] w-[97px] h-[35px] bg-[#011632] text-base font-medium text-[#FFFFFF] rounded-lg">
                    {article.button}
                  </button>

                  <p className="text-[#011632] text-lg font-medium mt-[14px]">
                    {article.title}
                  </p>
                  <p className="text-[#3C4959] text-lg font-normal mt-[10px]">
                    {article.description}
                  </p>
                  <div>
                    <p className="text-end text-[#011632] text-base font-normal mt-[2px]">
                      {article.writer}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center gap-3 mt-[50px]">
          <img
            src="/images/arrowleft.svg"
            alt=""
            className="cursor-pointer"
            onClick={goPrevSmall}
          />
          <img
            src="/images/arrowright.svg"
            alt=""
            className="cursor-pointer"
            onClick={goNextSmall}
          />
        </div>
      </div>
    </>
  );
};

export default Articles;
