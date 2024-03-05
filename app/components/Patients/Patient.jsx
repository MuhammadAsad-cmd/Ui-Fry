import React from "react";

const Patient = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="max-w-screen-lg mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 2xl:gap-40 gap-[50px] lg:gap-40 mt-[120px] px-5">
            <div>
              <p className="text-4xl font-bold text-[#011632]">
                We’re welcoming new patients and can’t wait to meet you.
              </p>
              <p className="mt-5 text-[#3C4959] text-lg font-normal">
                We use only the best quality materials on the market in order to
                provide the best products to our patients, So don’t worry about
                anything and book yourself.
              </p>
              <form className="max-w-md mx-auto mt-10">
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only "
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <img src="/images/Call.svg" alt="" />
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full  h-[55px] ps-10 text-base text-[#CFCFCF] border outline-none rounded-lg"
                    placeholder="Enter your Phone Number"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-0 bottom-0 bg-[#1376F8] font-semibold rounded-r-lg text-base h-[55px] w-[150px]"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:block hidden">
              <div className="relative">
                <img
                  src="/images/Rectangle 645.png"
                  alt=""
                  className="h-full w-full object-cover"
                />
                <img
                  src="/images/Rectangle 633.png"
                  alt=""
                  className="w-full h-full absolute -left-[30px] top-[30px] bottom-0 object-cover"
                />
              </div>
            </div>

            <div className="lg:hidden block">
              <img
                src="/images/Rectangle 633.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;
