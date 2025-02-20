import React from 'react';
import './Event.css'; 
import Modal from './Modal';

const Event = ({ event, isOpen, onOpen, onClose }) => {
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
        </Modal>
      )}
    </li>
  );
};

export default Event;
