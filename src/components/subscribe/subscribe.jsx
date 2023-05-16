import React from "react";
import { ReactComponent as House } from "../../galary/svg/for-sprite/house.svg";
import { ReactComponent as Villa } from "../../galary/svg/for-sprite/villa.svg";
import { ReactComponent as Apartment } from "../../galary/svg/for-sprite/apartment.svg";
import { ReactComponent as Arrow } from "../../galary/svg/for-sprite/arrow.svg";
import style from "./subscribe.module.scss";

const Subscribe = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectiontitle}>
        Subscribe For More Info and update from Hounter
      </p>
      <form action="submit" className={style.form}>
        <input type="email" className={style.input} />
        <button type="submit" className={style.button}>
        <span className={style.buttontext}>Subsribe Now</span>          
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
