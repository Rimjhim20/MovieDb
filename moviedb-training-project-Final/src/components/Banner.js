import React from "react";
import play from "../assets/play2.svg";
import list from "../assets/list.svg";
import { info } from "../api/data";
import back from "../assets/rick.jpg"
import "../styles/banner.scss";
const Banner = () => {
  console.log(info);
  return (
    <div className="banner">
      <img
        className="banner__img"
        src={back}
        alt="banner"
      />
      <div className="banner__content">
        <h1 className="banner__h1">{info[0].name} </h1>
        <h3 className="banner__h3">{info[0].overview}</h3>
        <div className="bannerbutton">
          <button className="bannerbutton__play">
            {" "}
            <img src= {play} /> <h3>Play</h3>
          </button>
          <button className="bannerbutton__list">
            <img src= {list} /> <h3>My List</h3>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
