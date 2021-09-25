import React from "react";
import "../../App.css";
import HomeBanner from "../HomeBanner/HomeBanner";
import HomeCards from "../HomeCards";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <HomeBanner></HomeBanner>
      <div className={"homeCardContainer"}>
        <HomeCards></HomeCards>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Home;
