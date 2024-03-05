import React from "react";

const Specialist = () => {
  return (
    <>
      <div className="bg-[#E6F6FE] flex flex-col items-center justify-center mt-10  px-5 lg:mt-20">
        <div className="flex flex-col gap-y-5 items-center justify-center text-start md:text-center pt-10 lg:pt-20">
          <div>
            <p className="text-3xl lg:text-4xl leading-normal tracking-tight font-semibold text-[#011632]">
              Meet our specialists
            </p>
            <img
              src="/images/ArticleVector.svg"
              alt="Line"
              className="ml-20 -mt-21 lg:ml-40"
            />
          </div>
          <div className="text-base  lg:w-[629px] w-full md:text-lg lg:text-xl font-normal text-[#3C4959]">
            <p>
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-5 2xl:px-20 py-10 lg:py-20 ">
          <div className="relative">
            <img
              src="/images/Mask group.png"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <div className="absolute bottom-12 lg:bottom-8 left-3">
              <img src="/images/Rectangle 679.png" alt="" className="w-full" />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="ml-6 text-white">
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    Jim Carrey
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-medium">
                    Orthodontist
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/image 7.png"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <div className="absolute bottom-12 lg:bottom-8 left-3">
              <img src="/images/Rectangle 679.png" alt="" className="w-full" />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="ml-6 text-white">
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    Wade Warren
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-medium">
                    Endodontist.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/image 8.png"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <div className="absolute bottom-12 lg:bottom-8 left-3">
              <img src="/images/Rectangle 679.png" alt="" className="w-full" />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="ml-6 text-white">
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    Jenny Wilson
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-medium">
                    Periodontist.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="/images/image 9.png"
              alt=""
              className="rounded-xl w-full h-full"
            />
            <div className="absolute bottom-12 lg:bottom-8 left-3">
              <img src="/images/Rectangle 679.png" alt="" className="w-full" />
              <div className="absolute inset-y-0 left-0 flex items-center">
                <div className="ml-6 text-white">
                  <p className="text-base md:text-lg lg:text-xl font-medium">
                    Jacob Jones
                  </p>
                  <p className="text-xs md:text-base lg:text-lg font-medium">
                    Pediatric Dentist.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialist;
