import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="container mx-auto px-5 md:px-20 2xl:p-6">
        <div className="flex justify-center mt-16">
          <div className="grid grid-cols-1 xl:grid-cols-2 justify-center md:gap-6">
            <div className="">
              <p className="text-[42px] md:text-4xl lg:text-[42px] leading-tight lg:text-6xl font-semibold tracking-tight relative">
                Get Ready For Your Best Ever{" "}
                <span className="relative">
                  Dental Experience!
                  <img
                    src="/images/Vector.svg"
                    alt=""
                    className="xl:w-full w-[240px] absolute bottom-0 left-0"
                  />
                </span>
              </p>

              <p className="w-full md:w-[531px] text-base md:text-lg font-normal text-[#3C4959] mt-7 md:mt-10">
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </p>
              <div className="flex flex-row items-center md:items-start gap-3 md:gap-10 mt-10">
                <button className="bg-[#1376F8] w-[229px] lg:block hidden rounded-xl h-[55px] text-base font-semibold text-white">
                  Book an appointment
                </button>
                <button className="bg-[#1376F8] w-[153px] lg:hidden block rounded-xl h-[55px] text-base font-semibold text-white">
                  Get Started
                </button>
                <div className="flex items-center gap-4 rounded-xl h-[55px]">
                  <div>
                    <img
                      src="/images/phone.png"
                      alt=""
                      className="w-[55px] h-[55px]"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#1376F8]">
                      Dental 24H Emergency
                    </p>
                    <p className="text-[#011632] font-medium text-sm mt-1">
                      0900-78601
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#FFFFFF] shadow-lg w-full md:w-[374px] p-4 rounded-3xl mt-[50px]">
                <div className="flex justify-between items-start">
                  <div className="flex gap-2">
                    <img src="/images/Ellipse 3.png" alt="" />
                    <div>
                      <h1 className="text-[#011632] font-medium text-sm">
                        Thomas daniel
                      </h1>
                      <p className="text-[#011632] font-normal text-xs">
                        Sr Dental
                      </p>
                    </div>
                  </div>
                  <div>
                    <img src="/images/linkdin.svg" alt="" className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs font-normal mt-3 text-[#011632]">
                  Top Quality dental treatment done by field experts, Highly
                  Recommended for everyone
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-10 md:mt-0">
              <img
                src="/images/herosection.png"
                alt="Hero"
                className="w-full md:max-w-none"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
