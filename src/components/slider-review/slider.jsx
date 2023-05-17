import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";

import { featuredHouses } from "../../data/data-reviw";
import style from "./slider.module.scss";

const AutoPlay = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,

    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.6,
    slidesToScroll: 1,
    arrows: false,

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
              <div className={style.cardbottom}>
                <div className={style.cardbottomwrapper}>
                  <h4 className={style.cardtitle}>{item.title}</h4>
                  <p>{item.textreview}</p>
                  <div className={style.sellerwrapper}>
                    <img
                      src={item.reviwerPhoto}
                      alt={item.reviwerName}
                      className={style.reviwerPhoto}
                    />
                    <div className={style.sellerinfowrapper}>
                      <p className={style.cardsellername}>{item.reviwerName}</p>
                      <p>{item.reviwerPosition}</p>
                      <p className={style.cardraiting}>{item.raiting}</p>
                    </div>
                  </div>
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
