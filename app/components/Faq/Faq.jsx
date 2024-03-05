import React from "react";
import FaqItem from "./FaqItem";

const Faq = () => {
  return (
    <>
      <div className="lg:block hidden">
        <div className="flex flex-col gap-y-5 items-center justify-center text-center pt-[100px]">
          <div>
            <p className="text-[42px] leading-normal font-bold text-[#011632] ">
              Frequently Ask Question
            </p>
            <img src="/images/faqline.svg" alt="" className="-mt-3 " />
            <div className="text-lg font-normal text-[#3C4959] mt-5">
              <p>
                We use only the best quality materials on the market in order
              </p>
              <p> to provide the best products to our patients.</p>
            </div>
          </div>
        </div> 
      </div>

      <div className="lg:hidden block">
        <div className="flex md:items-center md:justify-center gap-2 justify-start px-5  pt-[100px]">
          <p className="text-4xl md:text-[42px] leading-normal font-bold text-[#011632]">
            Frequently
            <img src="/images/ArticleVector.svg" alt="" className="-mt-3 " />
          </p>
          <p className="text-4xl md:text-[42px] leading-normal font-bold text-[#011632]">
            Ask
          </p>
        </div>
        <p className="text-4xl md:text-[42px] md:text-center leading-normal font-bold text-[#011632] px-5">
          Question
        </p>
        <p className="md:text-center px-5 mx-auto w-full md:w-[388px] text-lg font-normal text-[#3C4959]">
          We use only the best quality materials on the market in order to
          provide the best products to our patients, So don’t worry about
          anything and book yourself.
        </p>
      </div>

      <FaqItem />

      <div className="flex items-center justify-center">
        <div className="flex flex-col lg:flex-row p-2 md:p-10 bg-[#011632] rounded-xl mt-10 md:mt-20 gap-5 md:gap-20">
          <div className="">
            <div className="flex flex-col items-start  md:items-center">
              <div className="text-[36px] tracking-tighter w-full lg:w-[500px] lg:text-[42px] font-semibold text-white mt-3 md:mt-7">
                <p className="hidden lg:block">
                  Dental Website that&apos;s gonna shake the game rules up.
                </p>
                <p className="block lg:hidden">
                  Website builder that&apos;s gonna shake the game rules up.
                </p>
              </div>
              <p className="text-white text-base w-full lg:w-[500px] md:text-lg mt-3">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </p>
            </div>
            <button className="w-[150px] h-[55px] mt-[30px] bg-[#1376F8] text-base font-semibold text-white rounded-lg">
              Learn More
            </button>
          </div>
          <div className="mt-[50px] lg:mt-0">
            <img
              src="/images/Rectangle 663.png"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
