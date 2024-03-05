import React from "react";

const AboutHero = () => {
  return (
    <>
    <div className="md:block hidden">
      <div className="flex flex-col gap-y-5 items-start justify-start md:items-center md:justify-center text-center pt-10 lg:pt-20">
        <div className="text-start md:text-center px-5">
          <h1 className="text-4xl lg:text-[62px] leading-normal tracking-tight font-semibold text-[#011632]">
            About Us
          </h1>
          <img
            src="/images/ArticleVector.svg"
            alt=""
            className="w-[275px] -mt-3"
          />
        </div>
      </div>
      </div>

        <div className="mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-14 ml-0 px-5 lg:ml-20 mt-8 lg:mt-20 ">
          <div className="text-left w-full lg:w-[650px]">
            <h1 className="text-[#011632] text-[42px] font-semibold">
              Our Mission
            </h1>
            <p className="text-lg text-[#3C4959] font-normal mt-5">
              At Northern Heights Dental, people come first. We help each of our
              patients to achieve optimal wellness and health by using a whole
              body approach to oral health. This means not just focusing on
              cavities, but focusing on; cranio-facial development, bite and
              joint balance, oral flora, proper muscle balance/function, and
              bio-compatibility of dental materials. Great care and planning
              ensure that everything we do helps promote overall health and
              well-being.
            </p>

            <p className="text-[#011632] text-2xl font-medium mt-8">
              More than anything else we love creating happy, healthy smiles.
            </p>

            <p className="text-[#3C4959] text-lg font-normal mt-8">
              We work hard to stay up to date with the most advanced techniques
              and technologies to ensure that our patients receive the best care
              possible. Our office utilizes 3D CBCT radiographs to allow for
              guided surgical and endodontic protocols. This enables these
              procedures to be performed digitally before they are performed
              surgically to ensure optimal results. 3D imaging also is utilized
              for the analysis of airway growth and development. We also use the
              best 3D optical scanner for all of our dental restoration and
              Invisalign impressions. Dr. Williams is a strong advocate for
              using microsurgical techniques, which means less discomfort and
              faster healing times.
            </p>
          </div>
          <div className="">
            <img src="/images/about.png" alt="" className="mx-auto lg:mx-0" />
          </div>
        </div>
    </>
  );
};

export default AboutHero;
