import styled from "styled-components";

export const Section = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  height: fit-content;
  width: 100%;
  padding-top: ${(props) => (props.nopadding ? "0px" : "80px")};
  min-height: 100vh;
  display: flex;
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 80px 48px 0;
    flex-direction: column;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: ${(props) => (props.nopadding ? "0" : "16px 16px 0")};
    flex-direction: column;
  }
`;

export const SectionBody = styled.div`
  text-align: center;
  max-width: ${(props) => (props.project ? "80vw" : "60vw")};
  margin-left: auto;
  margin-right: auto;

  @media ${(props) => props.theme.breakpoints.md} {
     max-width: ${(props) => (props.project ? "90vw" : "80vw")};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    max-width: 100%};
  }
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
