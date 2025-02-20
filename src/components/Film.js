import React from "react";
import FilmStrip1 from "../Images/1.png";
import FilmStrip2 from "../Images/2.png";
import FilmStrip3 from "../Images/3.png";
import "./Film.css";

const Film = () => {
  return (
    <div className="film-strip-container">
      <div className="film-strip-track film-strip-track-1">
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
        <img src={FilmStrip1} alt="Moving Film Strip1" className="film-strip" />
      </div>
      <div className="film-strip-track film-strip-track-2">
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
        <img src={FilmStrip2} alt="Moving Film Strip2" className="film-strip" />
      </div>
      <div className="film-strip-track film-strip-track-3">
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
        <img src={FilmStrip3} alt="Moving Film Strip3" className="film-strip" />
      </div>
    </div>
  );
};

export default Film;