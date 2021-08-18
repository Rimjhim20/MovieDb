import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../styles/card.scss";
import play from "../assets/play2.svg";
import arrow from "../assets/arrow.svg";
import black from "../assets/Rectangle.png";

const Card = ({fetchUrl}) => {
  const [movies,setMovies ] = useState([])
  useEffect(() =>{
    async function fetchData(){
      const request =await axios.get(fetchUrl)
    
    setMovies(request.data.results);
    return request
    }
    fetchData();

  },[fetchUrl] )
  return (
    <div class="card">
      <div class="card__wrapper">
        {movies.map((ani) => {
          return (
            <div className="card__data">
              <div className="item">
                {" "}
                <img
                  className="card__img"
                  src={`https://image.tmdb.org/t/p/original/${ani.backdrop_path}`}
                  alt={ani.title}
                />
                <div className="card__hidden">
                <img className="card__bottomimg" src={black} alt=" "/>
                  <div className="card__content">
                    <h3>{ani.title} </h3>
                    <Link to={`/${ani.id}`}>
                      <div className="card__images"> </div>
                      <img className=" card__play" src={play} alt=" "/>
                      <img className=" card__arrow" src={arrow} alt=" "/>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Card
