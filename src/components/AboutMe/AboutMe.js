import React from "react";
import "./AboutMe.css";
import "../../App.css";
import {
  FaAndroid,
  FaJava,
  FaReact,
  FaUnity,
  FaWindows,
  FaGoogle,
  FaPython,
} from "react-icons/fa";
import { DiMysql, DiGit } from "react-icons/di";

function AboutMe() {
  return (
    <div id="aboutMe">
      <div id="holder">
        <div class="wrapper">
          <p class="title">About Me</p>
          <p class="body">
            <br />
            My name is Malcom. I'm a developer living in Singapore with
            experience in Mobile and Game Development. I also spend time on
            Webdev and Machine Learning. My interests include 3D Modeling,
            Rigging.
            <br /> <br />
            Currently I'm a student at Nanyang Technological University getting
            my Bachelors in Computer Science. Check out my past projects below!
          </p>
        </div>
        <hr class="solid" />
        <div class="wrapper">
          <p class="title">Skills</p>
          <p class="body">
            <br /> A list of some of the skills I've learnt!
          </p>
          <div id="skillHolder">
            <div class="skillItem">
              <FaAndroid size="5rem" color="grey" />
              <p>Android</p>
            </div>
            <div class="skillItem">
              <FaJava size="5rem" color="grey" />
              <p>Java</p>
            </div>
            <div class="skillItem">
              <FaReact size="5rem" color="grey" />
              <p>React</p>
            </div>
            <div class="skillItem">
              <FaUnity size="5rem" color="grey" />
              <p>Unity</p>
            </div>
            <div class="skillItem">
              <FaWindows size="5rem" color="grey" />
              <p>C , C# , C++</p>
            </div>
            <div class="skillItem">
              <DiGit size="5rem" color="grey" />
              <p>Git</p>
            </div>
            <div class="skillItem">
              <DiMysql size="5rem" color="grey" />
              <p>SQL</p>
            </div>
            <div class="skillItem">
              <FaPython size="5rem" color="grey" />
              <p>Python</p>
            </div>
            <div class="skillItem">
              <FaGoogle size="5rem" color="grey" />
              <p>Google API Services, Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
