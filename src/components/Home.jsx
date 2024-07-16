// src/App.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Hero from "./Hero";
import Another from "./Another";
import Abouthome from "./Abouthome";
import BottomBar from "./BottomBar";
import Articlespage from "./Articlepage";

const Home = () => {
  return (
    <div className="container mx-auto">
      <BottomBar />
      <Navbar />
      <Hero />
      {/* <Articlespage /> */}
      <Another />
      <Abouthome />

      <Footer />
    </div>
  );
};

export default Home;
