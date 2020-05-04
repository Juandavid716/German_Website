import React from "react";
import "../css/nav.css";

function Navb() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-sons">
          <span> Verben </span>
          <span> Sustantive</span>
          <span> Adjektive</span>
        </div>
      </div>
      <div className="search-bar">
        <input
          type="text"
          className="myInput"
          placeholder="Search for names.."
        ></input>
      </div>
    </div>
  );
}

export default Navb;
