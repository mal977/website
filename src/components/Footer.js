import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-contact">
        <h2 className="footer-contact-heading">
          Contact me through these social links!
        </h2>
        <h3>MalcomTeh@gmail.com</h3>

        <div className="footer-contact-container">
          <Link
            className={"social-media-links"}
            to={{ pathname: "https://www.linkedin.com/" }}
            target="_blank"
          >
            <img alt="Linkedin" src="images/social_icons/Linkedin.svg" />
          </Link>
          <Link
            className={"social-media-links"}
            to={{ pathname: "https://www.Bitbucket.com/" }}
            target="_blank"
          >
            {" "}
            <img alt="Github" src="images/social_icons/Github.svg" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
