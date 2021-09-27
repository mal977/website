import React from "react";
import "../../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Pdf from "../../files/malcom_resume_website.pdf";
import { Section } from "../../styles/GlobalComponents/index.js"
import { HomeBannerWrapper, HomeBannerContent, HomeBannerImg, HomeButtonHolder, HomeButton } from "./HomeBannerStyles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffa726",
      darker: "#053e85",
    },
  },
});

function HomeBanner() {
  return (
    <ThemeProvider theme={theme}>
      <Section nopadding>
        <HomeBannerWrapper>
          <HomeBannerContent>
            <h1>Hello!</h1>
            <h2 style={{ fontSize: "1em" }}>I'm Malcom</h2>
            <h3 style={{
              fontFamily: ['Hahmlet', 'sans-serif'],
              fontSize: "0.4em",
              color: "rgba(150, 150, 150, 0.829)",
              display: "block"
            }}>Student|Developer</h3>
            <HomeButtonHolder>
              <Button className="btn"
                variant="outlined"
                color="primary"
                endIcon={<KeyboardArrowDownIcon />}
                style={{
                  marginRight: "20px",
                  marginBottom: "20px",
                }}
                onClick={() => {
                  document
                    .getElementById("aboutMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Scroll Down
              </Button>
              <Button
                variant="outlined"
                color="primary"
                endIcon={<AttachFileIcon />}
                style={{
                  marginRight: "20px",
                  marginBottom: "20px",
                }}
                href={Pdf}
              >
                Resume
              </Button>
              <Button
                variant="outlined"
                color="primary"
                style={{
                  marginBottom: "20px",
                  marginRight: "20px",
                }}
                onClick={() => {
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                Latest Projects
              </Button>
            </HomeButtonHolder>
          </HomeBannerContent>
        </HomeBannerWrapper>
        <HomeBannerImg src={"images/landing-bg.jpg"} alt={"Home Banner Background"} />
      </Section>
    </ThemeProvider>
  );
}

export default HomeBanner;
