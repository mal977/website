import React, { useState } from "react";
import Icon from "@mui/material/Icon";
import { Link } from "react-router-dom";
import { common } from "@mui/material/colors";
import "./NavBar.css";

function NavBar() {
  const [active, setNavMenuActive] = useState(false);

  const handleClick = () => setNavMenuActive(!active);
  const closeMobileMenu = () => setNavMenuActive(false);
  return (
    <>
      <nav className="navBar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={() => {
                  closeMobileMenu();
                  document
                    .getElementById("root")
                    .scrollIntoView({ behavior: "smooth" });
                }}>
            Malcom
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <Icon style={{ color: common.white, fontSize: 40 }}>
              {active ? "clear" : "menu"}
            </Icon>
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to=""
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  document
                    .getElementById("aboutMe")
                    .scrollIntoView({ behavior: "smooth" });
                }}
              >
                About Me!
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to=""
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  document
                    .getElementById("projects")
                    .scrollIntoView({ behavior: "smooth" });
                }}              >
                Past Projects
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
