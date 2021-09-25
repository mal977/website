import React from "react";
import "../../App.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCards from "../HomeCards";
import Footer from "../Footer";
import AboutMe from "../AboutMe/AboutMe";

function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <AboutMe></AboutMe>
      <div id={"homeCardContainer"}>
        <HomeCards></HomeCards>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
