import React from "react";
import { ReactComponent as Logo } from "../../galary/svg/for-sprite/logo.svg";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.sectionwrapper}>
      <Logo></Logo>
      <div>
        <span>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </span>
        <il>
          <li>facebook</li>
          <li>twittwr</li>
          <li>insta</li>
        </il>
      </div>
      <div>
        <div>
          <p>Property</p>
          <ul>
            <li>House</li>
            <li>Apartment</li>
            <li>Villa</li>
          </ul>
        </div>
        <div>
          <p>Article</p>
          <ul>
            <li>New Article</li>
            <li>Popular Article</li>
            <li>Most Read</li>
            <li>Tips & Tricks</li>
          </ul>
        </div>
        <div>
          <p>Contact</p>
          <ul>
            <li>2464 Royal Ln. Mesa, New Jersey 45463</li>
            <li>(671) 555-0110</li>
            <li>info@hounter.com</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
