import React from 'react'
import "../styles/body.scss";

import requests from "../api/data";
import black from "../assets/Rectangle.png";
import Card from "./Card";
const Body = () => {
  return (
    <div className="body">
      <img className="body__bottom" src={black} alt={black} />{" "}
      <div className="body__cardWrapper">
        <h1 className="body__h"> Top Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage1} />{" "}
        <h1 className="body__h"> Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage2} />{" "}
        <h1 className="body__h"> Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage3} />{" "}
        <h1 className="body__h"> Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage4} />{" "}
        <h1 className="body__h"> Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage5} />{" "}
        <h1 className="body__h"> Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage6} />{" "}
        <h1 className="body__h"> Movies </h1>{" "}
        <Card className="body__card" fetchUrl={requests.fetchPage7} />{" "}
      </div>{" "}
    </div>
  )
}

export default Body
