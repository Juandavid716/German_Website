import React from "react";
import "../css/box.css";

function Boxver(props) {
  return (
    <div className="box-father">
      <div className="box">
        <div className={`box-text ${props.color}`}>
          <h1> {props.title}</h1>
          <h2> {props.mean}</h2>
          <h3> {props.c1}</h3>
          <p>
            <em> {props.c2}</em>
          </p>
          <p>
            <em> {props.c3}</em>
          </p>
          <p>
            <em> {props.c4}</em>
          </p>
          <p>
            <em> {props.c5}</em>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Boxver;
