import Cards from "./components/Cards/Cards";
import Faq from "./components/Faq/Faq";
import Footer from "./components/Footer/Footer";
import Client from "./components/HappyClient/Client";
import Header from "./components/Header/page";
import HeroSection from "./components/HeroSection/page";
import HeroSectionTwo from "./components/HeroSection2/HeroSectionTwo";
import Articles from "./components/NewsArticles/Articles";
import Patient from "./components/Patients/Patient";
import Specialist from "./components/Specialist/Specialist";
import Welcome from "./components/Welcome/Welcome";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Cards />
      <Patient />
      <HeroSectionTwo />
      <Welcome/>
      <Specialist />
      <Client/>
      <Articles/>
      <Faq />
      <Footer />
    </>
  );
}
