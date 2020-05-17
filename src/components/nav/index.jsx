import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Nav = ({ children }) => {
  return (
    <div className="nav">
      <div className="nav__left">
        <NavLink
          activeClassName="nav__link-active"
          className="nav__link"
          to="/home"
        >
          <span className="icon">&#127968;</span> Home
        </NavLink>
        <NavLink
          activeClassName="nav__link-active"
          className="nav__link"
          to="/albums"
        >
          <span className="icon">&#128214;</span> Albumes
        </NavLink>
        <NavLink
          activeClassName="nav__link-active"
          className="nav__link"
          to="/artists"
        >
          <span className="icon">&#127908;</span>
          Artista
        </NavLink>
      </div>
      <div className="nav__center">{children}</div>
      <div className="nav__right"></div>
    </div>
  );
};

export default Nav;
