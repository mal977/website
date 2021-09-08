import React from "react";
import "./HomeBanner.css";
import "../App.css";

// const images = [
//     {
//         original: 'https://picsum.photos/id/1018/1000/600/',
//     },
//     {
//         original: '/images/mobile_top_bg.jpg',
//     },
//   ];
function HomeBanner() {
 
  return (
    <div className="homeBannerContainer">
      <h1>Malcom Teh</h1>
      <img src={"/images/mobile_top_bg.jpg"} alt={"Home Banner Background"} />
    </div>
  );
}

export default HomeBanner;
