import React from "react";
import style from "../styles/home.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className={style.container}>
        <div>
          <h1 className={style.heading}>
            <span className={style.colored}>
              {" "}
              Pre-assessed, super skilled talent
            </span>{" "}
            <br /> meets global tech opportunities.
          </h1>
          <h2 className={style.subheading}>
            Get Trained. Get Discovered. Get Hired.
          </h2>
          <div className={style.buttons}>
            <a href="/">I'm A Job Seeker</a>
            <a href="/">I'm A Recruiter</a>
          </div>
        </div>
        {/* scroll animation */}
        <div className={style.animation}>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Home;
