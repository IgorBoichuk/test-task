// import React, { Component } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import { featuredHouses } from "../../data/data";
import style from "./slider.module.scss";

const AutoPlay = () => {
  // this.next = this.next.bind(this);
  //   this.previous = this.previous.bind(this);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3.05,
    slidesToScroll: 1,
    arrows: true,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       dots: true,
    //       infinite: true,
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       autoplay: true,
    //       speed: 3000,
    //       autoplaySpeed: 3000,
    //       cssEase: "linear",
    //     },
    //   },
    // ],
  };

  return (
    <div>
      <Slider {...settings}>
        {featuredHouses.map((item) => (
          <div className={style.cardlist}>
            <div className={style.carditem}>
              <div className={style.cardimagewrapper}>
                <img
                  src={item.photo}
                  alt={item.title}
                  className={style.cardimage}
                />
              </div>
              <h4 className={style.cardtitle}>{item.title}</h4>
              <span className={style.cardprice}>$ {item.price}</span>
              <div className={style.sellerwrapper}>
                <img
                  src={item.sellerPhoto}
                  alt={item.sellerName}
                  className={style.sellerPhoto}
                />
                <div className={style.sellerinfowrapper}>
                  <p className={style.cardsellername}>{item.sellerName}</p>
                  <p className={style.cardlocation}>{item.houseLocation}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default AutoPlay;
