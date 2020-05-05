import React from "react";
import { NavLink } from "react-router-dom";

function Navb() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-sons">
          <NavLink to="/" className="nav-link">
            Verben
          </NavLink>
          <NavLink to="/sustantive" className="nav-link">
            Sustantive
          </NavLink>
          <NavLink to="/adjektive" className="nav-link">
            Adjektive
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navb;
