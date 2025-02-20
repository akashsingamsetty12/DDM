import React, { useState } from "react";
import Logo from "./components/Logo";
import EventList from "./components/EventList";
import "./App.css";
import Bio from "./components/Bio";
import ScrollArrow from "./components/ScrollArrow.js";
import Film from "./components/Film";
import Cinema from "./components/Cinema";

function App() {
  const [showEventList, setShowEventList] = useState(false);
  const [showCinema, setShowCinema] = useState(false);

  const handleArrowClick = () => {
    setShowEventList(true);
  };

  const handleBackClick = () => {
    setShowEventList(false);
  };
  const handleCloseCinema = () => {
    setShowCinema(false);
  };

  return (
    <div className="container">
      {!showEventList && <Film />}

      <Logo />
      <Bio />
      <ScrollArrow onClick={handleArrowClick} />
      {showEventList && (
        <div className="event-list show ani">
          <button className="back-button" onClick={handleBackClick}>
            X
          </button>
          <div className="ab">
            <EventList />
          </div>
        </div>
      )}

      {showCinema && <Cinema onClose={handleCloseCinema} />}
    </div>
  );
}

export default App;
