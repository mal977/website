import React, { useState } from "react";
import Icon from "@material-ui/core/Icon";
import { Link } from "react-router-dom";
import { common } from "@material-ui/core/colors";
import "./NavBar.css";

function NavBar() {
  const [active, setNavMenuActive] = useState(false);

  const handleClick = () => setNavMenuActive(!active);
  const closeMobileMenu = () => setNavMenuActive(false);
  return (
    <>
      <nav className="navBar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            Malcom
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <Icon style={{ color: common.white , fontSize:40}}>
              {active ? "clear" : "menu"}
            </Icon>
          </div>
          <ul className={active ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Me!
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/past-projects"
                className="nav-links"
                onClick={closeMobileMenu}
              >
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
