import React from "react";
import "./Cinema.css";

const Cinema = ({ onClose }) => {
  return (
    <div className="cinema-overlay">
      <div className="cinema-content">
        <h2>Welcome to the Cinema!</h2>
        <p>Enjoy the experience.</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cinema;
