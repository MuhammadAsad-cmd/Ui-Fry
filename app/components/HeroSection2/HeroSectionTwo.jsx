import React from "react";

const HeroSectionTwo = () => {
  return (
    <>
      <div className="mt-[100px] lg:mt-28 flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <div className="flex flex-col-reverse lg:flex-row px-5 lg:px-[108px] py-10 lg:py-20 bg-[#E6F6FE] rounded-xl gap-y-10 lg:gap-y-0 lg:gap-x-32">
            <div className="flex justify-center">
              <img
                src="/images/Rectangle 631.png"
                alt=""
                className="max-w-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-center w-full max-w-full lg:max-w-[522px] gap-5">
              <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#011632]">
                Why Choose Smile For All Your Dental Treatments?
              </p>
              <p className="text-base lg:text-lg font-normal text-[#3C4959]">
                We use only the best quality materials on the market <br /> in
                order to provide the best products to our patients.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <img src="/images/list.svg" alt="" />
                  <p className="text-[#3C4959] text-lg font-medium">
                    Top quality dental team
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/list.svg" alt="" />
                  <p className="text-[#3C4959] text-lg font-medium">
                    State of the art dental services
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/list.svg" alt="" />
                  <p className="text-[#3C4959] text-lg font-medium">
                    Discount on all dental treatment
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <img src="/images/list.svg" alt="" />
                  <p className="text-[#3C4959] text-lg font-medium">
                    Enrollment is quick and easy
                  </p>
                </div>
              </div>

              <button className="bg-[#1376F8] w-full lg:w-[229px] mt-5 lg:mt-10 rounded-xl h-[55px] text-base font-semibold text-white">
                Book an appointment
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="flex flex-col lg:flex-row lg:px-[100px] px-5 lg:py-20 py-[50px]  rounded-xl gap-y-[50px] mt-[100px] lg:mt-28 gap-x-28">
            <div className="flex flex-col justify-center w-full max-w-full lg:max-w-[522px] gap-5">
              <p className="text-3xl lg:text-4xl font-semibold text-[#011632]">
                Leave your worries at the door and enjoy a healthier, more
                precise smile
              </p>
              <p className="text-base lg:text-lg font-normal text-[#3C4959]">
                We use only the best quality materials on the market in order to
                provide the best products to our patients.
              </p>

              <button className="bg-[#1376F8] w-full lg:w-[229px] mt-5 lg:mt-10 rounded-xl h-[55px] text-base font-semibold text-white">
                Book an appointment
              </button>
            </div>
            <div className="lg:block hidden">
              <div className="relative">
                <img src="/images/Rectangle 645.png" alt="" className="" />
                <img
                  src="/images/image 4.png"
                  alt=""
                  className="absolute rounded-xl -left-[30px] top-[30px] bottom-0"
                />
              </div>
            </div>
            <div className="lg:hidden block">
              <img
                src="/images/image 4.png"
                alt=""
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
        </div>

       
      </div>
    </>
  );
};

export default HeroSectionTwo;
