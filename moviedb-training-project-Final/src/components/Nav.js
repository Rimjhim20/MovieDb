import React, { useState, useEffect } from "react";
import "../styles/nav.scss";
const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1 className="nav_logo">Movie.db</h1>

      <img
        className="nav__profile"
        src=" https://avatars.githubusercontent.com/u/71636845?v=4"
        alt="logo"
      />
    </div>
  );
};

export default Nav;
