import ContactHero from "@/app/components/ContactHero/ContactHero";
import ContactFaq from "@/app/components/Faq/ContactFaq";
import Footer from "@/app/components/Footer/Footer";
import HeaderTwo from "@/app/components/Header/HeaderTwo";
import React from "react";

const page = () => {
  return (
    <>
      <div className="linear pt-10">
        <HeaderTwo />
        <ContactHero />
      </div>
      <ContactFaq />
      <Footer className="mt-[100px]"/>
    </>
  );
};

export default page;
