"use client";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="h-[90px] lg:h-auto mt-10 rounded-xl lg:mx-20 relative">
        <div className="flex flex-row items-center justify-between px-5 lg:px-10 py-4 text-center">
          <img src="/images/Logo1.svg" alt="" className="" />
          <div className="hidden lg:flex gap-10 text-base justify-center items-center text-[#011632] font-semibold">
            <Link href="/">
              <p className="">Home</p>
            </Link>
            <Link href="/pages/Services">
              <p className="">Services</p>
            </Link>
            <Link href="/pages/Blogs">
              <p className="">Blogs</p>
            </Link>
            <Link href="/pages/About">
              <p className="">About</p>
            </Link>
            <Link href="/pages/Contact">
              <p className=" ">Contact</p>
            </Link>
          </div>
          <div className="lg:hidden relative">
            <img
              src="/images/Frame 14.svg"
              alt=""
              className="cursor-pointer"
              onClick={toggleMenu}
            />
          </div>
        </div>

        <div className="w-full h-[3px] bg-[#011632] mt-5 hidden lg:block"></div>

        {menuOpen && (
          <div className="lg:hidden block absolute top-[90px] left-0 w-full z-50">
            <div className="flex flex-col w-full h-full text-start px-5 bg-[#f0f9f5]">
              <Link href="/">
                <p className="p-4 cursor-pointer">Home</p>
              </Link>
              <Link href="/pages/Services">
                <p className="p-4 cursor-pointer">Services</p>
              </Link>
              <Link href="/pages/Blogs">
                <p className="p-4 cursor-pointer">Blogs</p>
              </Link>
              <Link href="/pages/About">
                <p className="p-4 cursor-pointer">About</p>
              </Link>
              <Link href="/pages/Contact">
                <p className="p-4 cursor-pointer">Contact</p>
              </Link>
            </div>
          </div>
        )}
      </div>

      <div className="mt-5 lg:mt-10 rounded-xl mx-5 lg:mx-20">
        <div className="hidden lg:flex flex-col lg:flex-row items-center justify-between px-5 lg:px-10 py-4 text-center">
          <p className="text-sm lg:text-base">
            All rights reserved ® uifry.com | Terms and conditions apply!
          </p>
          <div className="flex gap-5 text-base  items-center text-[#011632] font-semibold">
            <a href="#" className="">
              <img src="/images/facebook.svg" alt="" />
            </a>
            <a href="#" className="">
              <img src="/images/youtube.svg" alt="" />
            </a>
            <a href="#" className="">
              <img src="/images/instagram.svg" alt="" />
            </a>
            <a href="#" className="">
              <img src="/images/linkedin.svg" alt="" />
            </a>
            <a href="#" className=" ">
              <img src="/images/twitter.svg" alt="" />
            </a>
          </div>
        </div>

        <div className="mt-[30px] block lg:hidden">
          <p className="text-lg font-medium text-[#3C4959]">
            All our PRO level features at your fingertips.
          </p>
          <p className="mt-1 border-b-2 text-[#011632] text-lg font-semibold">
            Follow us on
          </p>

          <div className="flex gap-[10px] mt-[10px] text-base  items-center text-[#011632] font-semibold">
            <a href="#" className="">
              <img src="/images/Facebook Circled.svg" alt="" />
            </a>
            <a href="#" className="">
              <img src="/images/Instagramcircle.svg" alt="" />
            </a>

            <a href="#" className="">
              <img src="/images/LinkedIn Circled.svg" alt="" />
            </a>
            <a href="#" className=" ">
              <img src="/images/Twitter Circled.svg" alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#011632] text-[#FFFFFF] text-sm py-4 text-center mt-14 font-medium lg:hidden block ">
        Uifry by M.Aze, CopyRights are protected by Uifry
      </div>
    </>
  );
};

export default Footer;
