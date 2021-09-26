import styled from "styled-components";

export const Section = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  min-height: 100vh;
  height: fit-content;
  width: 100%;
  padding-top: 10vh;
`;

export const SectionBody = styled.div`
  text-align: center;
  max-width: ${(props) => (props.project ? "90vw" : "60vw")};
  margin-left: auto;
  margin-right: auto;
`;

export const SubSection = styled.div`
  text-align: center;
`;

export const SectionTitle = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 2.8em;
  font-weight: 500;
`;

export const SectionText = styled.p`
  font-family: "Roboto Slab", serif;
  font-size: 1.2em;
  font-weight: 300;
`;
