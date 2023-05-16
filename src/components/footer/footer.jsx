import React from "react";
import { ReactComponent as Logo } from "../../galary/svg/logo.svg";
import { ReactComponent as Facebook } from "../../galary/svg/facebook.svg";
import { ReactComponent as Twitter } from "../../galary/svg/twitter.svg";
import { ReactComponent as Instagram } from "../../galary/svg/instagram.svg";
import style from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={style.sectionwrapper}>
      <div className={style.footerleft}>
        <Logo className={style.logo}></Logo>
        <span className={style.footertext}>
          We provide information about properties such as houses, villas and
          apartments to help people find their dream home
        </span>
        <ul className={style.sociallist}>
          <li className={style.socialitem}>
            <a href="/" className={style.sociallink}>
              <Facebook className={style.icon} />
            </a>
          </li>
          <li className={style.socialitem}>
            <a href="/" className={style.sociallink}>
              <Twitter className={style.icon} />
            </a>
          </li>
          <li className={style.socialitem}>
            <a href="/" className={style.sociallink}>
              <Instagram className={style.icon} />
            </a>
          </li>
        </ul>
      </div>
      <div className={style.footerright}>
        <div>
          <p className={style.footerlistname}>Property</p>
          <ul className={style.footerlist}>
            <li>
              <a href="/" className={style.footerlink}>
                House
              </a>
            </li>
            <li>
              <a href="/" className={style.footerlink}>
                Apartment
              </a>
            </li>
            <li>
              <a href="/" className={style.footerlink}>
                Villa
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={style.footerlistname}>Article</p>
          <ul className={style.footerlist}>
            <li>
              <a href="/" className={style.footerlink}>
                New Article
              </a>
            </li>
            <li>
              <a href="/" className={style.footerlink}>
                Popular Article
              </a>
            </li>
            <li>
              <a href="/" className={style.footerlink}>
                Most Read
              </a>
            </li>
            <li>
              <a href="/" className={style.footerlink}>
                Tips & Tricks
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className={style.footerlistname}>Contact</p>
          <ul className={style.footerlist}>
            <li className={style.footerlink}>
              2464 Royal Ln. Mesa, New Jersey 45463
            </li>
            <li>
              <a href="tel:+380961111111" className={style.footerlink}>
                +38 096 111 11 11
              </a>
            </li>
            <li>
              <a href="mailto:info@hounter.com" className={style.footerlink}>
                info@hounter.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
