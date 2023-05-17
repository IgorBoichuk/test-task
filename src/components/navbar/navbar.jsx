import React from "react";
import { ReactComponent as Logo } from "../../galary/svg/logo.svg";
import { ReactComponent as Arrow } from "../../galary/svg/arrow.svg";
import style from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <a href="/" className={style.logolink}>
        <Logo></Logo>
      </a>
      <ul className={style.navlist}>
        <li className={style.navitem}>About Us</li>
        <li className={style.navitem}>Article</li>
        <li className={style.navitem}>
          Property
          <Arrow className={style.navarrow} />
        </li>
      </ul>
      <div className={style.signup}>
        <span>Sign Up!</span>
      </div>
    </nav>
  );
};

export default Navbar;
