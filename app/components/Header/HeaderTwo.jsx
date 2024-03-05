"use client";
import React, { useState } from "react";
import Link from "next/link";

const HeaderTwo = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-[#FFFFFF]  rounded-xl mx-5 md:mx-20">
        <div className="flex items-center justify-between px-2 md:px-5 lg:px-10 py-4 text-center">
          <Link href="/">
          <img src="/images/Logo1.svg" alt="" className="" />
          </Link>
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
          <div className="flex items-center gap-[16px]">
            <div className="xl:block hidden">
              <img src="/images/headerImg.png" alt="" />
            </div>
            <div>
              {menuOpen ? (
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden"
                >
                  <img src="/images/menu.svg" alt="" />
                </button>
              ) : (
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden"
                >
                  <img src="/images/menu.svg" alt="" />
                </button>
              )}
            </div>
            <button className="lg:block hidden w-[140px] h-[55px] bg-[#1376F8] text-white rounded-xl">
              Book Now
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="lg:hidden block">
            <div className="flex flex-col text-start px-5 bg-[#FFFFFF] md:bg-[#E6F6FE] ">
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
    </>
  );
};

export default HeaderTwo;
