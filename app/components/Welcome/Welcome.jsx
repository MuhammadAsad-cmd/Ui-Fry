import React from "react";

const Welcome = () => {
  return (
    <>
      <div className="mt-[100px] lg:mt-28 flex flex-col justify-center items-center">
        <div className="flex flex-col lg:w-[629px] w-full gap-y-5 px-5 items-center justify-center text-start lg:text-center mt-10 lg:mt-20">
          <div className="flex flex-col items-center justify-center">
            <div className="text-center">
              <p className="text-3xl sm:text-[36px] leading-40 font-semibold text-[#011632]">
                We’re{" "}
                <span className="relative">
                  {" "}
                  welcoming{" "}
                  <img
                    src="/images/ArticleVector.svg"
                    alt="Line"
                    className="left-0 md:left-3 absolute"
                  />{" "}
                </span>{" "}
                new patients and can’t wait to meet you.
              </p>
            </div>
          </div>

          <div className="text-base md:text-lg lg:text-xl font-normal text-[#3C4959] text-start">
            <p className="lg:hidden block text-center">
              We use only the best quality materials on the market in order to
              provide the best products to our patients, So don’t worry about
              anything and book yourself.
            </p>
            <p className="lg:block hidden text-center">
              We use only the best quality materials on the market in order to
              provide the best products to our patients.
            </p>
          </div>
        </div>

        <div className="mt-[50px] px-5 flex items-center justify-center">
          <img
            src="/images/Group2.png"
            alt=""
            className="w-full h-full lg:block hidden"
          />
          <div className="relative">
            <img
              src="/images/playlist.png"
              alt=""
              className="w-full h-full lg:hidden block"
            />
            <img
              src="/images/play.svg"
              alt=""
              className="absolute inset-0 m-auto"
            />
          </div>
        </div>
        <button className="w-[173px] h-[55px] bg-[#1376F8] rounded-xl mt-10 text-base font-semibold text-white">
          Watch Playlist
        </button>
      </div>
    </>
  );
};

export default Welcome;
