import React from "react";
import { ReactComponent as House } from "../../galary/svg/for-sprite/house.svg";
import { ReactComponent as Villa } from "../../galary/svg/for-sprite/villa.svg";
import { ReactComponent as Apartment } from "../../galary/svg/for-sprite/apartment.svg";
import { ReactComponent as Arrow } from "../../galary/svg/for-sprite/arrow.svg";
import style from "./sell.module.scss";

const Sell = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectionname}>Ready to Sell!</p>
    </div>
  );
};

export default Sell;
