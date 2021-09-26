import React from "react";
import "../../App.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import Footer from "../Footer";
import AboutMe from "../AboutMe/AboutMe";
import Projects from "../Projects/Projects";

function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Footer></Footer>
    </>
  );
}

export default Home;
