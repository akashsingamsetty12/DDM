import React, { useState } from 'react';
import './EventList.css';
import Event from './Event';

const events = [
  {
    name: "Photography Challenge",
    time: "10:00 AM",
    image: "https://th.bing.com/th/id/OIP.HMEyED8JmPSDdJOeWEs5EgHaF7?w=203&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfpp2u8dJHCvrMW5P4WYKS1vvghKawm5L5r5IcCC5kNo6grBg/viewform?usp=sharing",
    text: "Capture the best moments with your camera!"
    
  },
  {
    name: "Reel Competition",
    time: "11:00 AM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIVlm55KQE8rEdRtpjJ3X2DD_Dg8Lno8phOHUKS4_azXG25ZQfkw0YR64VueipZDbjuhw&usqp=CAU",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSfK-zXZpvuWy5QO0fObUl1InE7cV8ssIVtJ4PZfPhLG5P1Exw/viewform?usp=header",
    text: "Show your creativity in short video form."
  },
  {
    name: "Short Film Competition",
    time: "12:00 PM",
    image: "https://th.bing.com/th/id/OIP.U0EOU_l2NFvRDGV2cfHBMQHaE8?w=242&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://forms.gle/5zvLdP2BQmn5CXKR9",
    text: "Tell a compelling story in a short film."
  },
  {
    name: "Ad's - Remaking",
    time: "01:00 PM",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6sRqlD7melaKeu4imFHqM8ZOzb1U6rK6XLsetEFD2hA690B9gtOrL3dMAJ09IBfJt8ok&usqp=CAU",
    link: "https://forms.gle/7k7oKNSgWDvsZUek9",
    text: "Recreate iconic advertisements."
  },
  {
    name: "Meme-King",
    time: "02:00 PM",
    image: "https://images.filmibeat.com/img/2013/11/08-brahmanandam-welcome-back.jpg",
    link: "https://forms.gle/a9F1jTccFBobNDcY9",
    text: "Be the king of memes!"
  },
  {
    name: "Story Telling",
    time: "03:00 PM",
    image: "https://th.bing.com/th/id/OIP.iwIpbNuocpJSxbfnyKgARwHaE8?w=235&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    link: "https://forms.gle/dS9GV79f6D6oBrrj7",
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
      <p>Created by Singamsetty akash</p>
    </div>
  );
};

export default EventList;
