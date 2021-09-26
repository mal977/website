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
import {
  Section,
  SectionBody,
  SubSection,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents/index";

function AboutMe() {
  return (
    <Section id="aboutMe">
      <SectionBody>
        <SubSection>
          <SectionTitle>About Me</SectionTitle>
          <SectionText>
            <br />
            My name is Malcom. I'm a developer living in Singapore with
            experience in Mobile and Game Development. I also spend time on
            Webdev and Machine Learning. My interests include 3D Modeling,
            Rigging.
            <br /> <br />
            Currently I'm a student at Nanyang Technological University getting
            my Bachelors in Computer Science. Check out my past projects below!
          </SectionText>
        </SubSection>
        <hr class="solid" />
        <SubSection>
          <SectionTitle>Skills</SectionTitle>
          <SectionText>
            <br /> A list of some of the skills I've learnt!
          </SectionText>
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
        </SubSection>
      </SectionBody>
    </Section>
  );
}

export default AboutMe;
