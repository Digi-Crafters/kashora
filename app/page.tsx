import React from "react";
import HeroSection from "./components/demo_one/Hero";
import OurCraft from "./components/demo_one/OurCraft";
import SignatureCollection from "./components/demo_one/SignatureCollection";
import OurStory from "./components/demo_one/OurStory";
import Contact from "./components/demo_one/Contact";
import Footer from "./components/demo_one/Footer";

const page = () => {
  return <div className="overflow-x-hidden">
    <HeroSection/>
    <OurCraft/>
    <SignatureCollection/>
    <OurStory/>
    <Contact/>
    <Footer/>
  </div>;
};

export default page;
