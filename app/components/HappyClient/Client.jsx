"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Client = () => {
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
    if (swiperRefSmall.current && swiperRefSmall.current.swiper) {
      swiperRefSmall.current.swiper.update();
    }
    if (swiperRefLarge.current && swiperRefLarge.current.swiper) {
      swiperRefLarge.current.swiper.update();
    }
  });

  return (
    <>
      <div className="flex flex-col gap-y-5 items-center justify-center text-center pt-[60px]">
        <div>
          <p className="text-[42px] leading-normal font-bold text-[#011632]">
            Our Happy Clients
          </p>
        </div>
        <div className="text-lg font-normal text-[#3C4959]">
          <p>We use only the best quality materials on the market in order</p>
          <p> to provide the best products to our patients.</p>
        </div>
      </div>

      <div className="lg:block hidden">
        <div className="mt-20">
          <Swiper
            modules={[Navigation]}
            ref={swiperRefLarge}
            spaceBetween={30}
            slidesPerView={3}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-7 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/images/Ellipse 35.png"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-7 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/images/client2.png"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-7 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/images/client3.png"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-7 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/images/Ellipse 35.png"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-7 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/images/Ellipse 35.png"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
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

      <div className="lg:hidden block">
        <div className=" gap-6 py-12 px-5 lg:px-9  h-full w-full flex  rounded-xl items-center justify-center">
          <Swiper
            modules={[Navigation]}
            ref={swiperRefSmall}
            spaceBetween={30}
            slidesPerView={1}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-2 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="/images/Ellipse 35.png"
                    alt=""
                    className="w-[70px] h-[70px]"
                  />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-2 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/client2.png" alt="" />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-3 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/client3.png" alt="" />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-2 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/client2.png" alt="" />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-[#FFFFFF]  p-2 rounded-xl Shadow">
                <div className="flex items-center justify-start gap-2">
                  <img src="/images/Ellipse 35.png" alt="" />
                  <div>
                    <p className="text-2xl text-[#011632] font-medium">
                      Thomas daniel
                    </p>
                    <div className="flex gap-[1px] mt-1">
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                      <img src="/images/Star 2.svg" alt="" />
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-[#3C4959] text-base font-normal">
                  Phosfluorescently synergize covalent outsourcing through
                  functional strategic theme areas. Assertively scale strategic
                  portals without distinctive relationships. Holisticly
                  cultivate tactical e-services before fully researched sources.
                </p>
              </div>
            </SwiperSlide>
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

export default Client;
