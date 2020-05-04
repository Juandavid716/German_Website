import React from "react";
import "../css/box.css";

function Box(props) {
  return (
    <div className="box-father">
      <div className="box">
        <div className={props.color}>
          <h2> {props.title}</h2>
          <p>
            <em> {props.text}</em>
          </p>
          <p>
            <b> {props.traduccion}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
