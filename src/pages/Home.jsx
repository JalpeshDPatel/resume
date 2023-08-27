import React, { useState } from "react";
import NavBar from "../components/navbar/NavBar";
import Hero from "../components/hero/Hero";
import Skills from "../components/skills/Skills";
import Footer from "../components/footer/Footer";
import Contact from "../components/contact/Contact";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
