import React from "react";

import style from "./review.module.scss";
import AutoPlay from "../slider-review/slider";

const Review = () => {
  return (
    <div className={style.sectionwrapper}>
      <p className={style.sectionname}>See Our Review</p>
      <h2 className={style.sectiotitle}>What Our User Say About Us</h2>
      <AutoPlay />
    </div>
  );
};

export default Review;
