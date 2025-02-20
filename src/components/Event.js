import React, { useState } from "react";
import "./Event.css";
import Modal from "./Modal";

const Event = ({ event, isOpen, onOpen, onClose }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);

  const handleRegisterClick = () => {
    setIsRedirecting(true);

    setTimeout(() => {
      window.open(event.link, "_blank"); // Open in new tab
      setIsRedirecting(false);
    }, 2000); // 2 seconds delay
  };

  return (
    <li className="event-item">
      <img src={event.image} alt={event.name} className="event-image" />
      <div className="event-details">
        <h3>{event.name}</h3>
        <button onClick={onOpen} className="event-button">Get Details</button>
      </div>

      {isOpen && (
        <Modal onClose={onClose}>
          <h2>{event.name}</h2>
          <p>{event.text}</p>

          <img src={event.image} alt={event.name} className="modal-image" />
          <button className="register-button" onClick={handleRegisterClick} disabled={isRedirecting}>
            {isRedirecting ? "Redirecting..." : "Register Now"}
          </button>
        </Modal>
      )}
    </li>
  );
};

export default Event;
