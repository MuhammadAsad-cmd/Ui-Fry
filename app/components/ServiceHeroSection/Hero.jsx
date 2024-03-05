import React from "react";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 items-start justify-start md:items-center md:justify-center text-center pt-10 lg:pt-20">
        <div className="text-start md:text-center px-5">
          <h1 className="text-4xl lg:text-[62px] leading-normal tracking-tight font-semibold text-[#011632]">
            Services
          </h1>
          <img
            src="/images/serviceVector.svg"
            alt=""
            className="w-[184px] md:w-full -mt-3 lg:-mt-6"
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
        </div>
      </div>

      <div className="gap-x-4 md:gap-x-[60px] mt-10 md:mt-20 gap-y-4 md:gap-y-[50px] py-6 md:py-12 px-4 md:px-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 rounded-xl items-center justify-center">
        <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
          <img src="/images/teeth.svg" alt="" />
          <p className="text-2xl font-medium text-[#011632]">
            Root Canal Treatment
          </p>
          <p className="text-lg font-medium text-[#3C4959]">
            Root canal treatment (endodontics) is a dental procedure used to
            treat infection at the centre of a tooth.
          </p>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-base text-[#011632] underline font-semibold">
              Learn More{" "}
            </p>
            <img src="/images/Right Circle.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
          <img src="/images/lip.svg" alt="" />
          <p className="text-2xl font-medium text-[#011632]">
            Cosmetic Dentist
          </p>
          <p className="text-lg font-medium text-[#3C4959]">
            Cosmetic dentistry is the branch of dentistry that focuses on
            improving the appearance of your smile.
          </p>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-base text-[#011632] underline font-semibold">
              Learn More{" "}
            </p>
            <img src="/images/Right Circle.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
          <img src="/images/jaw.svg" alt="" />
          <p className="text-2xl font-medium text-[#011632]">Dental Implants</p>
          <p className="text-lg font-medium text-[#3C4959]">
            A dental implant is an artificial tooth root that’s placed into your
            jaw to hold a prosthetic tooth or bridge.
          </p>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-base text-[#011632] underline font-semibold">
              Learn More{" "}
            </p>
            <img src="/images/Right Circle.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
          <img src="/images/teeth.svg" alt="" />
          <p className="text-2xl font-medium text-[#011632]">Teeth Whitening</p>
          <p className="text-lg font-medium text-[#3C4959]">
            It&apos;s never been easier to brighten your smile at home. There
            are all kinds of products you can try.
          </p>

          <div className="flex gap-2 cursor-pointer">
            <p className="text-base text-[#011632] underline font-semibold">
              Learn More{" "}
            </p>
            <img src="/images/Right Circle.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
          <img src="/images/emerency.svg" alt="" />
          <p className="text-2xl font-medium text-[#011632]">
            Emergency Dentistry
          </p>
          <p className="text-lg font-medium text-[#3C4959]">
            In general, any dental problem that needs immediate treatment to
            stop bleeding, alleviate severe pain.
          </p>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-base text-[#011632] underline font-semibold">
              Learn More{" "}
            </p>
            <img src="/images/Right Circle.svg" alt="" />
          </div>
        </div>
        <div className="bg-[#FFFFFF] h-full flex flex-col p-5 rounded-xl gap-4 items-center justify-center text-center">
          <img src="/images/preventation.svg" alt="" />
          <p className="text-2xl font-medium text-[#011632]">Prevention</p>
          <p className="text-lg font-medium text-[#3C4959]">
            Preventive dentistry is dental care that helps maintain good oral
            health. a combination of regular dental.
          </p>
          <div className="flex gap-2 cursor-pointer">
            <p className="text-base text-[#011632] underline font-semibold">
              Learn More{" "}
            </p>
            <img src="/images/Right Circle.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
