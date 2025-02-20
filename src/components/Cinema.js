import React from "react";
import "./Cinema.css";

const Cinema = ({ onClose }) => {
  return (
    <div className="cinema-overlay">
      <div className="cinema-content">
        <h2>Welcome to the DDM-01</h2>
        <p>Wait for a while and explore the Events</p>
        <button className="close-button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Cinema;
