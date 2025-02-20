import React from "react";
import "./ScrollArrow.css";
import arrow from "../Images/arrow.png";

const ScrollArrow = ({ onClick }) => {
  return (
    <div className="scroll" onClick={onClick}>
      <img src={arrow} alt="arrow" className="arrow" />
    </div>
  );
};

export default ScrollArrow;
