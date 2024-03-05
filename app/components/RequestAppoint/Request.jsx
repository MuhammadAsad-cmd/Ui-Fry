import React from "react";

const Request = () => {
  return (
    <>
      <div className="bg-[#011632] flex flex-col items-center justify-center mt-10 px-5 lg:mt-20 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-y-10 lg:gap-20 py-10 lg:py-[50px]">
          <div className="flex items-center justify-center">
            <div className="flex flex-col lg:flex-row   rounded-xl">
              <div className="flex flex-col justify-center w-full max-w-full lg:max-w-[571px] gap-5">
                <p className="text-[42px] font-semibold text-[#FFFFFF] text-center lg:text-left">
                  Leave your worries at the door and enjoy a healthier, more
                  precise smile
                </p>
                <p className="text-base lg:text-lg font-normal text-[#FFFFFF] text-center lg:text-left">
                  We use only the best quality materials on the market in order
                  to provide the best products to our patients, So don’t worry
                  about anything and book yourself.
                </p>

                <button className="bg-[#1376F8] w-full lg:w-[174px] mt-5 lg:mt-10 rounded-xl h-[55px] text-base font-semibold text-white flex items-center justify-center  gap-x-[10px] mx-auto lg:ml-0">
                  Learn More
                  <img src="/images/Arrow - Right Circle.svg" alt="" />
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#FFFFFF] py-5 lg:py-[30px] rounded-2xl">
            <form className="max-w-md mx-auto lg:max-w-sm px-5">
              <h1 className="text-[#011632] text-2xl font-semibold text-center ">
                Request Appointment
              </h1>
              <div className="mb-5 mt-5 lg:mt-10">
                <input
                  type="text"
                  id="name"
                  className="block w-full p-4 text-gray-900 border border-[#9C9C9C] rounded-lg bg-gray-50 text-base outline-none"
                  placeholder="Full Name"
                />
              </div>
              <div className="mb-5">
                <input
                  type="tel"
                  id="number"
                  className="block w-full p-4 text-gray-900 border border-[#9C9C9C] rounded-lg bg-gray-50 text-base outline-none"
                  placeholder="Phone Number"
                />
              </div>
              <div className="mb-5">
                <input
                  type="email"
                  id="email"
                  className="block w-full p-4 text-gray-900 border border-[#9C9C9C] rounded-lg bg-gray-50 text-base outline-none"
                  placeholder="Email Address"
                />
              </div>
              <button
                type="submit"
                className="text-white w-full h-[45px] bg-[#1376F8] mx-auto font-semibold flex items-center justify-center mt-[30px] rounded-lg text-base "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Request;
