import React, { useState } from 'react';
import './EventList.css';
import Event from './Event';
import AD from '../Images/AD.jpg';

const events = [
  {
    name: "Photography Challenge",
    place: "Auditorium",
    time: "10:00 AM",
    image: "https://th.bing.com/th/id/OIP.HMEyED8JmPSDdJOeWEs5EgHaF7?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://example.com/photography-challenge",
    text: "Capture the best moments with your camera!"
    
  },
  {
    name: "Reel Competition",
    place: "Main Hall",
    time: "11:00 AM",
    image: "https://th.bing.com/th/id/OIP.ilBRfaPfoOia_wzZ6NPJTwHaHa?w=192&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://example.com/reel-competition",
    text: "Show your creativity in short video form."
  },
  {
    name: "Short Film Competition",
    place: "Conference Room",
    time: "12:00 PM",
    image: "https://th.bing.com/th/id/OIP.U0EOU_l2NFvRDGV2cfHBMQHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://example.com/short-film-competition",
    text: "Tell a compelling story in a short film."
  },
  {
    name: "Ad's - Remaking",
    place: "Studio",
    time: "01:00 PM",
    image: AD,
    link: "https://example.com/ads-remaking",
    text: "Recreate iconic advertisements."
  },
  {
    name: "Meme-King",
    place: "Cafeteria",
    time: "02:00 PM",
    image: "https://th.bing.com/th/id/OIP.PwS2yy3cPSLHuVMi7iT4AwHaD4?w=306&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://example.com/meme-king",
    text: "Be the king of memes!"
  },
  {
    name: "Story Telling",
    place: "Library",
    time: "03:00 PM",
    image: "https://th.bing.com/th/id/OIP.iwIpbNuocpJSxbfnyKgARwHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://example.com/story-telling",
    text: "Engage your audience with a compelling story."
  }
];

const EventList = () => {
  const [activeEventIndex, setActiveEventIndex] = useState(null);

  const handleOpenModal = (index) => {
    setActiveEventIndex(index);
  };

  const handleCloseModal = () => {
    setActiveEventIndex(null);
  };

  return (
    <div className="event-list-container">
      <h2>Event List</h2>
      <ul>
        {events.map((event, index) => (
          <Event
            key={index}
            event={event}
            isOpen={index === activeEventIndex}
            onOpen={() => handleOpenModal(index)}
            onClose={handleCloseModal}
          />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
