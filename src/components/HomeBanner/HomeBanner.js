import React from "react";
import "./HomeBanner.css";
import "../../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
      <div className="homeBannerContainer">
        <div id="homeBannerWrapper">
          <div id="homeBannerContent">
            <h1>Hello!</h1>
            <h2>I'm Malcom</h2>
            <h3>Student|Developer</h3>
            <Button
              variant="outlined"
              color="primary"
              endIcon={<KeyboardArrowDownIcon />}
              style={{
                marginRight: "20px",
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
              }}
            >
              Resume
            </Button>
            <Button
              variant="outlined"
              color="primary"
              style={{
                marginRight: "20px",
              }}
              onClick={() => {
                document
                  .getElementById("homeCardContainer")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              Latest Projects
            </Button>
          </div>
        </div>
        <img src={"/images/landing-bg.jpg"} alt={"Home Banner Background"} />
      </div>
    </ThemeProvider>
  );
}

export default HomeBanner;
