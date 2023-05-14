import React from "react";
import { ReactComponent as Arrow } from "../../galary/svg/for-sprite/arrow.svg";
import style from "./hero.module.scss";

const Hero = () => {
  return (
    <div className={style.sectionwrapper}>
      <div className={style.sectioncontentwrapper}>
        <h1 className={style.title}>
          find the place to live{" "}
          <span className={style.titlemod}>your dreams</span> easily here
        </h1>
        <p className={style.herotext}>
          Everything you need about finding your place to live will be here,
          where it will be easier for you
        </p>
        <form action="submit" className={style.form}>
          <input type="text" className={style.input} />
          <button type="button" className={style.searchebutton}>
            <span className={style.buttontext}>Search</span>
            <Arrow className={style.arrow} />
          </button>
        </form>
        <p className={style.listtitle}>Our Partnership</p>
        <ul className={style.partnerslist}>
          <li className={`${style.partnersitem} ${style.travelochka}`}></li>
          <li className={`${style.partnersitem} ${style.tiketcom}`}></li>
          <li className={`${style.partnersitem} ${style.airbnb}`}></li>
          <li className={`${style.partnersitem} ${style.tripedvisor}`}></li>
        </ul>
      </div>
      <div className={style.bgimage}></div>
    </div>
  );
};

export default Hero;
