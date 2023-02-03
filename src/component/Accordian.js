import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import style from "../styles/accordian.module.css";

const Accordian = ({ title, description }) => {
  const [toggal, setToggal] = useState(false);
  return (
    <div className={style.container}>
      <div className={style.title} onClick={() => setToggal(!toggal)}>
        <p>{title}</p>
        {
            toggal ? <FaMinus /> : <FaPlus />
        }
      </div>
      {toggal && (
        <div className={style.description}>
          <p>{description}</p>
        </div>
      )}
      <hr />
    </div>
  );
};

export default Accordian;
