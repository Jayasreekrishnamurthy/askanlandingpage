import React from "react";
import { Navbar } from "../Navbar/navbar";
import Banner from "../Banner/banner";
import Videopart from "../videopart/videopart";
import Gallarymain from "../Gallary/gallarymain";
import Services from "../Services/Services";
import Footer from "../Footer/Footer";
import Clients from "../Clients/Clients";

const Home = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Services />
      <Videopart />
      <Gallarymain />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
