import React from "react";
import PhoneNumberForm from "./PhoneInput";
import DateInput from "./DatePicker";

const ContactHero = () => {
  return (
    <>
      <div className="flex flex-col gap-y-5  items-start justify-start md:items-center md:justify-center text-center pt-10 lg:pt-20">
        <div className="text-start md:text-center px-5">
          <h1 className="text-4xl lg:text-[62px] leading-normal tracking-tight font-semibold text-[#011632]">
            Get in touch
          </h1>
          <img
            src="/images/ArticleVector.svg"
            alt=""
            className="w-full -mt-2 lg:-mt-5"
          />
        </div>

        <p className="text-[#3C4959] text-lg font-normal">
          Book an Appointment to treat your teeth right now.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row items-start lg:gap-9 gap-y-24 justify-center mt-20 px-5">
        <div className="flex flex-col gap-y-5 w-full lg:w-[503px]">
          <div className="relative bg-[#25B4F8]  rounded-xl">
            <img src="/images/map.png" alt="" className="w-full h-full lg:h-[325px] lg:invisible visible" />
            <div className="absolute bottom-5 xl:mx-9 w-full lg:w-[428px] h-[100px] lg:h-[118px]  lg:px-5 rounded-xl flex items-center bg-[#25B4F8] contactShadow gap-2 lg:gap-4">
              <div>
                <div className="bg-[#25B4F8] flex items-center justify-center text-center rounded-full w-[53px] h-[53px]">
                  <img src="/images/pin 1.svg" alt="" className=""/>
                </div>
              </div>
              <div>
                <p className="text-[#011632] lg:text-lg font-medium">
                  Office Address
                </p>
                <p className="text-[#3C4959] text-base">
                  1441 Morris Ave, Union, NJ 07083
                </p>
              </div>
            </div>
          </div>

          <div className=" h-[118px] px-5 rounded-xl flex items-center bg-[#FFFFFF] contactShadow gap-4">
            <div>
              <div className="bg-[#1376F8] flex items-center justify-center text-center rounded-full w-[53px] h-[53px]">
                <img src="/images/time 1.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="text-[#011632] lg:text-lg font-medium">
                Office Timings
              </p>
              <p className="text-[#3C4959] text-base">
                Monday - Saturday (9:00am to 5pm) Sunday (Closed)
              </p>
            </div>
          </div>
          <div className=" h-[118px] px-5 rounded-xl flex items-center bg-[#FFFFFF] contactShadow gap-4">
            <div>
              <div className="bg-[#1376F8] flex items-center justify-center text-center rounded-full w-[53px] h-[53px]">
                <img src="/images/pin 1.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="text-[#011632] lg:text-lg font-medium">
                Emai Address
              </p>
              <p className="text-[#3C4959] text-base">Smile01@gmail.com</p>
            </div>
          </div>
          <div className=" h-[118px] px-5 rounded-xl flex items-center bg-[#FFFFFF] contactShadow gap-4">
            <div>
              <div className="bg-[#1376F8] flex items-center justify-center text-center rounded-full w-[53px] h-[53px]">
                <img src="/images/telephone (1) 1.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="text-[#011632] lg:text-lg font-medium">
                Phone Number
              </p>
              <p className="text-[#3C4959] text-base">0900-78601</p>
            </div>
          </div>
          <div className=" h-[118px] px-5 rounded-xl flex items-center bg-[#FFFFFF] contactShadow gap-4">
            <div>
              <div className="bg-[#1376F8] flex items-center justify-center text-center rounded-full w-[53px] h-[53px]">
                <img src="/images/live-chat 1.svg" alt="" />
              </div>
            </div>
            <div>
              <p className="text-[#011632] lg:text-lg font-medium">Live chat</p>
              <p className="text-[#3C4959] text-base">+1-2064512559</p>
            </div>
          </div>
        </div>
        <div className="border border-[#25B4F8] w-full lg:w-[589px] flex flex-col items-center justify-center rounded-xl py-8 px-5 lg:px-8">
          <div className="mt-10 flex flex-col gap-y-3">
            <div className="flex lg:flex-row flex-col gap-4 lg:gap-8">
              <div className="">
                <label
                  htmlFor="first-name"
                  className="block text-lg font-medium leading-6 text-[#3C4959]"
                >
                  First name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="first-name"
                    id="first-name"
                    autoComplete="given-name"
                    placeholder="First name"
                    className="block w-full px-4 outline-none rounded-md h-[55px] text-[#667085]  placeholder:text-[#667085] border border-[#D0D5DD]"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="last-name"
                  className="block text-lg font-medium leading-6 text-[#3C4959]"
                >
                  Last name
                </label>
                <div className="mt-[10px]">
                  <input
                    type="text"
                    name="last-name"
                    id="last-name"
                    autoComplete="family-name"
                    placeholder="Last name"
                    className="block w-full px-4 outline-none rounded-md h-[55px] text-[#667085]  placeholder:text-[#667085] border border-[#D0D5DD]"
                  />
                </div>
              </div>
            </div>
            <div className="">
              <label
                htmlFor="email"
                className="block text-lg font-medium leading-6 text-[#3C4959]"
              >
                Email address
              </label>
              <div className=" mt-[10px]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="w-full px-4 outline-none rounded-md h-[55px] text-[#667085]  placeholder:text-[#667085] border border-[#D0D5DD]"
                />
              </div>
            </div>

            <PhoneNumberForm />
            <DateInput />
            <div className="">
              <label
                htmlFor="message"
                className="block text-lg font-medium leading-6 text-[#3C4959]"
              >
                Your message
              </label>
              <div className=" mt-[10px]">
                <textarea
                  id="message"
                  rows="7"
                  className="block w-full outline-none px-4 rounded-md  text-[#667085]  placeholder:text-[#667085] border border-[#D0D5DD]"
                ></textarea>
              </div>
            </div>
          </div>

          <button className="bg-[#1376F8] w-[229px] mt-10 lg:block hidden rounded-xl h-[55px] text-base font-semibold text-white">
            Book an appointment
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactHero;
