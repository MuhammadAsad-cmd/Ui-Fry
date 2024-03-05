"use client";
import { News } from "@/app/Data";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Blog = () => {
  const swiperRefSmall = useRef(null);
  const swiperRefLarge = useRef(null);

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

  const goNextLarge = () => {
    if (swiperRefLarge.current && swiperRefLarge.current.swiper) {
      swiperRefLarge.current.swiper.slideNext();
    }
  };

  const goPrevLarge = () => {
    if (swiperRefLarge.current && swiperRefLarge.current.swiper) {
      swiperRefLarge.current.swiper.slidePrev();
    }
  };

  useEffect(() => {
    if (swiperRefLarge.current && !swiperRefLarge.current.swiper) {
      const swiperInstance = new Swiper(swiperRefLarge.current, {
        modules: [Navigation],
        spaceBetween: 20,
        slidesPerView: 3.3,
      });
      swiperRefLarge.current.swiper = swiperInstance;
    }
  }, []);

  return (
    <>
      <div className="flex flex-col gap-y-5 items-start justify-start md:items-center md:justify-center text-center pt-10 lg:pt-20">
        <div className="text-start md:text-center px-5">
          <h1 className="text-4xl lg:text-[62px] leading-normal tracking-tight font-semibold text-[#011632]">
            Blogs
          </h1>
          <img
            src="/images/ArticleVector.svg"
            alt=""
            className="w-[112px] md:w-full -mt-3 lg:-mt-6"
          />
        </div>
        <div className="text-base lg:w-[526px] px-5 mt-2 md:mt-5 w-full md:text-lg lg:text-xl font-normal text-[#3C4959]">
          <p className="lg:block hidden">
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
          <p className="lg:hidden block text-base lg:w-[526px] text-start md:text-center mt-2 md:mt-5 w-full md:text-lg lg:text-xl font-normal text-[#3C4959]">
            We use only the best quality materials on the market in order to
            provide the best products to our patients, So don’t worry about
            anything and book yourself.
          </p>

          <form class="max-w-md mx-auto mt-10 ">
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center justify-center ps-3 pointer-events-none">
                <img src="/images/Search.svg" alt="" />
              </div>
              <input
                type="search"
                id="default-search"
                class="block w-full md:w-[341px]  h-[55px] ps-10 text-base text-[#CFCFCF] border outline-none rounded-lg"
                placeholder="Search"
                required
              />
            </div>
          </form>
        </div>
      </div>

      <div className="md:block hidden">
        <div className="ml-5 lg:ml-20 mt-20">
          <Swiper
            ref={swiperRefLarge}
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3.3}
            className="mySwiper"
          >
            {News.map((article) => (
              <SwiperSlide key={article.id}>
                <div className="bg-[#E6F6FE] p-5 h-full rounded-xl">
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
            onClick={goPrevLarge}
          />
          <img
            src="/images/arrowright.svg"
            alt=""
            className="cursor-pointer"
            onClick={goNextLarge}
          />
        </div>
      </div>

      <div className="md:hidden block">
        <div className="bg-[#E6F6FE] gap-6 py-[10px] px-5 mt-[50px]  h-full w-full flex  rounded-xl items-center justify-center">
          <Swiper
            modules={[Navigation]}
            ref={swiperRefSmall}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="mySwiper"
          >
            {News.map((article) => (
              <SwiperSlide key={article.id}>
                <div
                  className="bg-[#E6F6FE] h-full rounded-xl"
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

export default Blog;
