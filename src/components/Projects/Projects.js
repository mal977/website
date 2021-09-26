import React from "react";
import "./Projects.css";
import {
  Section,
  SectionBody,
  SubSection,
  SectionTitle,
  SectionText,
} from "../../styles/GlobalComponents/index";

import { projects } from "../constants/constants.js";
import {
  BlogCard,
  CardInfo,
  HeaderThree,
  Img,
  TagList,
  Tag,
  Hr,
  TitleContent,
  HeaderTwo,
  ExternalLinks,
  UtilityList,
  GridContainer
} from "./ProjectsStyles.js";

function Projects() {
  return (
    <Section id="projects">
      <SectionBody project>
        <SectionTitle>Projects</SectionTitle>
        <GridContainer>
          {projects.map(
            ({ id, image, title, description, tags, visit, source }) => (
              <div>
                <BlogCard key={id}>
                  <Img src={image}></Img>
                  <TitleContent>
                    <HeaderThree title>{title}</HeaderThree>
                  </TitleContent>
                  <CardInfo>{description}</CardInfo>
                  <div>
                    <Hr />
                    <TitleContent>
                      <HeaderTwo>Technologies Used</HeaderTwo>
                    </TitleContent>
                    <TagList>
                      {tags.map((tag, i) => (
                        <Tag key={i}>{tag}</Tag>
                      ))}
                    </TagList>
                  </div>
                  <UtilityList>
                    {visit != null && (
                      <ExternalLinks href={visit}>Visit</ExternalLinks>
                    )}
                    {source != null && (
                      <ExternalLinks href={source}>Code</ExternalLinks>
                    )}
                  </UtilityList>
                </BlogCard>
              </div>
            )
          )}
        </GridContainer>
      </SectionBody>
    </Section>
  );
}

export default Projects;
