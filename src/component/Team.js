import React from "react";
import FixedNavbar from "./FixedNavbar";
import HeroSection from "./HeroSection";
import Heading from "../component/utils/Heading";
import style from "../styles/team.module.css";
import Founders from "./Founders";
import FOUNDERS from "../component/utils/founderdetails";
import Teammate from "./Teammate";
import TEAM from "../component/utils/teamdetails"

const Team = () => {
  return (
    <div>
      <FixedNavbar />
      <HeroSection title={"We love tech as much as you"} coloredTitle={"do!"} />
      <div>
        <Heading title={"We believe in Team!"} />
        <p className={style.textCenter}>
          We are a group of seasoned professionals from across a broad range of
          industries - united by our love for all things tech.
        </p>
      </div>

      {/* meet our founders */}
      <Heading title={"Meet our Founders"} />
      <div className={style.foundersection}>
        {FOUNDERS.map((founder, index) => {
          return <Founders key={index} founder={founder} />;
        })}
      </div>

      {/* meet our team */}
      <Heading title={"Meet our Team!"} />
      <p className={style.textCenter}>We are proud to have built a team of some of the best and the brightest in the business.</p>
      <div className={style.teammatedersection}>
        {
          TEAM.map((data, index) => {
            return <Teammate data={data} key={index}/>
          })
        }
      </div>
      
    </div>
  );
};

export default Team;
