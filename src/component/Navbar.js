import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiXMark } from "react-icons/hi2";
import style from "../styles/navbar.module.css";

const Navbar = () => {
  const [toggal, setToggal] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    if (width <= 680) {
      setToggal(false);
    } else {
      setToggal(true);
    }
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  console.log(width, toggal);
  const toggalMenu = () => {
    setToggal(!toggal);
  };

  return (
    <div className={style.navbar}>
      <div className={style.logo}>
        <Link to="/">Coffeee.io</Link>
      </div>
      <div className={style.bars}>
        <FaBars onClick={toggalMenu} />
      </div>
      <div className={style.menuItem}>
        {toggal && (
          <>
            <div className={style.closeBtn}>
              <HiXMark onClick={toggalMenu}  />
            </div>
            <Link to="about-us">About us</Link>
            <Link to="team">Team</Link>
            <Link to="contact-us">Contact us</Link>
            <Link to="campus-partners">Campus Partners</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
