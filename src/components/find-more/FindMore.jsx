import React from "react";
import { ReactComponent as House } from "../../galary/svg/for-sprite/house.svg";
import { ReactComponent as Villa } from "../../galary/svg/for-sprite/villa.svg";
import { ReactComponent as Apartment } from "../../galary/svg/for-sprite/apartment.svg";
import { ReactComponent as Arrow } from "../../galary/svg/for-sprite/arrow.svg";
import style from "./FindMore.module.scss";

const FindMore = () => {
  return (
    <div className={style.section}>
      <p className={style.sectionname}>
        See tips and trick from our partnership
      </p>
      <h2 className={style.sectiotitle}>
        Find out more about selling and buying homes
      </h2>
      <button className={style.button}>More Artikel</button>
      <div className={style.sectionwrapper}>
        <ul className={style.articlelist}>
          <li className={style.articleitem}>
            <div className={style.articleimgwrapper}>
              <img
                src="https://best-espana.com/d/elitnaya-villa-lyuks-v-ispanii-syerra-kortina-01.jpg"
                alt=""
                className={style.articleimg}
              />
            </div>
            <div>
              <div className={style.sellerwrapper}>
                <img
                  src="https://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg"
                  alt=""
                  className={style.sellerPhoto}
                />
                <p className={style.articleselname}>Dianne Russell</p>
              </div>
              <h4 className={style.articletitle}>
                The things we need to check when we want to buy a house
              </h4>
              <span className={style.articledate}>
                4 min read | 25 Apr 2021
              </span>
            </div>
          </li>
          <li className={style.articleitem}>
            <div className={style.articleimgwrapper}>
              <img
                src="https://tabairarealestate.com/media/images/properties/thumbnails/o_1dkvc4o1o46p183bfias4gfk01j_w_1024x800.jpg"
                alt=""
                className={style.articleimg}
              />
            </div>
            <div>
              <div className={style.sellerwrapper}>
                <img
                  src="https://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg"
                  alt=""
                  className={style.sellerPhoto}
                />
                <p className={style.articleselname}>Dianne Russell</p>
              </div>
              <h4 className={style.articletitle}>
                The things we need to check when we want to buy a house
              </h4>
              <span className={style.articledate}>
                4 min read | 25 Apr 2021
              </span>
            </div>
          </li>
          <li className={style.articleitem}>
            <div className={style.articleimgwrapper}>
              <img
                src="https://ik.imagekit.io/e41gztlv7tj/catalog/c118d35978b742488d1aef40e297bc25/8fd9_thumb.jpg"
                alt=""
                className={style.articleimg}
              />
            </div>
            <div>
              <div className={style.sellerwrapper}>
                <img
                  src="https://www.volynpost.com/img/modules/news/e/1c/fced9d71d3a27fb3bf5751597e4451ce/cb-cv2px3xu5qo.jpg"
                  alt=""
                  className={style.sellerPhoto}
                />
                <p className={style.articleselname}>Dianne Russell</p>
              </div>
              <h4 className={style.articletitle}>
                The things we need to check when we want to buy a house
              </h4>
              <span className={style.articledate}>
                4 min read | 25 Apr 2021
              </span>
            </div>
          </li>
        </ul>
        <div>
          <div className={style.rightarticleimgwrapper}>
            <img
              src="https://static.prian.ru/c/435x315/uploads/2022_09/20/20220920091756843360254o.jpg"
              alt=""
              className={style.reihtarticleimg}
            />
          </div>
          <div>
            <div className={style.sellerwrapper}>
              <img
                src="https://www.volynpost.com/img/modules/news/7/6c/aff84ee884aa9094f27910b5582da6c7/top-photo.jpg"
                alt=""
                className={style.sellerPhoto}
              />
              <p>Cameron Williamson</p>
            </div>
          </div>
          <h4 className={style.rightarticletitle}>
            12 Things to know before buying a house
          </h4>
          <p className={style.rightarticltext}>
            Want to buy a house but are unsure about what we should know, here I
            will try to explain what we should know and check when we want to
            buy a house
          </p>
          <span className={style.articledate}>8 min read | 25 Apr 2021</span>
        </div>
      </div>
    </div>
  );
};

export default FindMore;
