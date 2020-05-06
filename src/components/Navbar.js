import React from "react";
import { NavLink } from "react-router-dom";
import iconimg from "../imgs/germany_18269.png";
function Navb() {
  return (
    <div>
      <div className="navbar">
        <NavLink className="nav-img" to="/">
          <img src={iconimg} className="nav-iconimg"/>
        </NavLink>
        <div className="navbar-sons">
          <NavLink to="/verben" className="nav-link">
            Verben
          </NavLink>
          <NavLink to="/sustantive" className="nav-link">
            Sustantive
          </NavLink>
          <NavLink to="/Adjektive" className="nav-link">
            Adjektive
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navb;
