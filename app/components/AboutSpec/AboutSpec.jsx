import React from "react";

const AboutSpec = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5 items-center justify-center text-start md:text-center pt-10 lg:pt-20">
        <div>
          <p className="text-3xl lg:text-4xl leading-normal tracking-tight font-semibold text-[#011632]">
            Meet our specialists
          </p>
        </div>
        <div className="text-base  lg:w-[629px] w-full md:text-lg lg:text-xl text-center font-normal text-[#3C4959]">
          <p>
            We use only the best quality materials on the market in order to
            provide the best products to our patients.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col lg:flex-row bg-[#E6F6FE]  lg:bg-white lg:w-full w-[388px]  rounded-lg gap-x-[30px] items-center justify-center mt-[60px]  mx-8 px-5">
          <div>
            <img
              src="/images/aboutspec.png"
              alt=""
              className="lg:w-full w-[388px]"
            />
          </div>
          <div className=" w-full lg:w-[730px]  rounded-b-xl pb-5 px-5 ">
            <h1 className="text-[#011632] text-2xl font-semibold lg:mt-0 mt-10">
              DR. Brent
              <span className="text-base font-normal">
                ( Specility in General & Cosmetic Service )
              </span>
            </h1>
            <p className="text-[#3C4959] text-lg font-normal mt-16 lg:mt-5">
              Dr. Brent provides general and cosmetic dentistry services at
              Northern Heights Dental in Flagstaff, Arizona. He has extensive
              experience in general and cosmetic dentistry, including full mouth
              restoration, dental veneers, crowns, bridges, dental implants,
              wisdom teeth extractions, Invisalign, and dentures. Dr. Brent and
              his younger sister grew up in Massachusetts with a mother who
              worked as a hygienist and a grandfather who was a general dentist.
            </p>
            <button className="bg-[#1376F8] mt-9 w-[229px]  rounded-xl h-[55px] text-base font-semibold text-white">
              Book an appointment
            </button>
          </div>
        </div>

        <hr className="mt-[50px] mx-5 lg:mx-20  bg-[#ECECEC] h-[1px] w-full" />

        <div className="flex flex-col bg-[#E6F6FE]  lg:bg-white lg:w-full w-[388px]  rounded-lg lg:flex-row gap-x-[30px] items-center  justify-center mt-[60px] mx-8 px-5">
          <div>
            <img
              src="/images/aboutspec2.png"
              alt=""
              className="lg:w-full w-[388px]"
            />
          </div>
          <div className=" w-full lg:w-[730px] pb-5 px-5 lg:bg-white ">
            <h1 className="text-[#011632] text-2xl font-semibold lg:mt-0 mt-10">
              DR. Ashish J. Vashi
              <span className="text-base font-normal">
                ( Specility in implant dentistry )
              </span>
            </h1>
            <p className="text-[#3C4959] text-lg font-normal mt-16 lg:mt-5">
              Dr. Ashish J. Vashi has been practicing general, cosmetic and
              implant dentistry in California for over 18 years. He believes in
              giving the highest quality dentistry in a comfortable, caring
              environment. He strives to get to know his patients, not just
              their teeth.including full mouth restoration, dental veneers,
              crowns, bridges, dental implants, wisdom teeth extractions,
              Invisalign, and dentures.
            </p>
            <button className="bg-[#1376F8] mt-9 w-[229px]  rounded-xl h-[55px] text-base font-semibold text-white">
              Book an appointment
            </button>
          </div>
        </div>

        <hr className="mt-[50px] mx-5 lg:mx-20  bg-[#ECECEC] h-[1px] w-full" />

        <div className="flex flex-col bg-[#E6F6FE]  lg:bg-white lg:w-full w-[388px]  rounded-lg lg:flex-row gap-x-[30px] items-center  justify-center mt-[60px] mx-8 px-5">
          <div>
            <img src="/images/aboutspec3.png" alt="" className="lg:w-full w-[388px] "/>
          </div>
          <div className=" w-full lg:w-[730px] bg-[#E6F6FE] rounded-b-xl pb-5 px-5 lg:bg-white ">
            <h1 className="text-[#011632] text-2xl font-semibold lg:mt-0 mt-10">
              Dr. James Connors
              <span className="text-base font-normal">
                ( Specility in Oral Surgeon )
              </span>
            </h1>
            <p className="text-[#3C4959] text-lg font-normal mt-16 lg:mt-5">
              When it comes to oral surgeons, few can compare to the modern-day
              legend that is Dr. James Connors. As our oral and maxillofacial
              surgery specialist, Dr. Connors will brighten your day with his
              seasoned expertise, welcoming conversations, and – of course – his
              signature rotation of fun bowties. Dr. Connors and his younger
              sister grew up in Massachusetts with a mother who worked as a
              hygienist and a grandfather who was a general dentist.
            </p>
            <button className="bg-[#1376F8] mt-9 w-[229px]  rounded-xl h-[55px] text-base font-semibold text-white">
              Book an appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSpec;
