import React from "react";
import { ReactComponent as House } from "../../galary/svg/for-sprite/house.svg";
import { ReactComponent as Villa } from "../../galary/svg/for-sprite/villa.svg";
import { ReactComponent as Apartment } from "../../galary/svg/for-sprite/apartment.svg";
import { ReactComponent as Arrow } from "../../galary/svg/for-sprite/arrow.svg";
import style from "./review.module.scss";

const Review = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectionname}>See Our Review</p>
    </div>
  );
};

export default Review;
