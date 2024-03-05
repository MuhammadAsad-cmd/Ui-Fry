import AboutHero from "@/app/components/AboutHero/AboutHero";
import AboutSpec from "@/app/components/AboutSpec/AboutSpec";
import AboutTech from "@/app/components/AboutTech/AboutTech";
import Blog from "@/app/components/BlogHeroSection/Blog";
import Footer from "@/app/components/Footer/Footer";
import HeaderTwo from "@/app/components/Header/HeaderTwo";
import Specialist from "@/app/components/Specialist/Specialist";
import Welcome from "@/app/components/Welcome/Welcome";
import React from "react";

const page = () => {
  return (
    <>
      <div className="linear pt-10">
        <HeaderTwo />
        <AboutHero />
      </div>
      <AboutSpec />
      <AboutTech/>
      <Welcome />
      <Footer />
    </>
  );
};

export default page;
