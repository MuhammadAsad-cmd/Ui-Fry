import React from "react";
import FaqItem from "./FaqItem";

const ContactFaq = () => {
  return (
    <>
      <div className="flex flex-col mt-[70px] gap-y-5 items-center justify-center text-center pt-[100px]">
        <div>
          <p className="text-[42px] leading-normal font-bold text-[#011632]">
            Frequently Ask Question
          </p>
          <img
            src="/images/ArticleVector.svg"
            alt=""
            className="w-full -mt-2 invisible lg:visible"
          />
        </div>
        <div className="text-lg font-normal text-[#3C4959]">
          <p>We use only the best quality materials on the market in order</p>
          <p> to provide the best products to our patients.</p>
        </div>
      </div>

      <FaqItem />
    </>
  );
};

export default ContactFaq;
