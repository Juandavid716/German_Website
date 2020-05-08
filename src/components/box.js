import React from "react";
import "../css/box.css";

function Box(props) {
  return (
    <div className="box-father">
      <div className="box">
        <div className={`box-text ${props.color}`}>
          <h2 className="Title"> {props.title}</h2>
          <p>
            <em> {props.text}</em>
          </p>
          <img className="img-box" src={props.imagen} />
          <p>
            <b> {props.traduccion}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
