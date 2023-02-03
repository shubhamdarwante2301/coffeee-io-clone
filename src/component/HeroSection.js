import React from "react";
import style from "../styles/hero.module.css";

const HeroSection = ({title, coloredTitle=""}) => {
  return (
    <div className={style.heroSection}>
      <div className={style.headingSection}>
        <p className={style.heading}>
          {title}
          <span className={style.pinkcolor}> {coloredTitle}</span>
        </p>
      </div>
      <div className={style.images}>
        <img src="https://www.coffeee.io/aboutusimg1.png" alt="" />
        <img
          className={style.imagetwo}
          src="https://www.coffeee.io/aboutusimg2.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
