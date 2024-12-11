import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./pages/Hero";
import Banner from "./components/banner/Banner";
import BannerCount from "./components/banner/BannerCount";
import WhoWe from "./components/Whowe";
import Footer from "./components/Footer";
import Membership from "./components/Membership";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Banner />
      <WhoWe />
      <BannerCount />
      <Membership/>
      <Footer />
    </div>
  );
};

export default App;
