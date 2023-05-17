import React from "react";
import { ReactComponent as Arrow } from "../../galary/svg/arrow.svg";
import { ReactComponent as Location } from "../../galary/svg/location.svg";
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
          <Location className={style.location} />
          <input type="text" className={style.input} />

          <button type="submit" className={style.searchebutton}>
            <span className={style.buttontext}>Search</span>
            <Arrow className={style.arrow} />
          </button>
        </form>
        <p className={style.listtitle}>Our Partnership</p>
        <ul className={style.partnerslist}>
          <li>
            {" "}
            <a
              href="https://www.instagram.com/travelochka/"
              className={`${style.partnersitem} ${style.travelochka}`}
            >
              travelochka
            </a>{" "}
          </li>
          <li>
            {" "}
            <a
              href="https://www.airbnb.com.ua/"
              className={`${style.partnersitem} ${style.airbnb}`}
            >
              airbnb
            </a>
          </li>
          <li>
            {" "}
            <a
              href="http://ww11.o-ticket.com/"
              className={`${style.partnersitem} ${style.tiketcom}`}
            >
              tiketcom
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.tripadvisorsupport.com/ru-RU/hc/traveler"
              className={`${style.partnersitem} ${style.tripedvisor}`}
            >
              tripedvisor
            </a>
          </li>
        </ul>
      </div>
      <div className={style.bgimage}></div>
    </div>
  );
};

export default Hero;
