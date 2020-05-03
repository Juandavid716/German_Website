import React from "react";
import "../css/box.css";

function Box(props) {
  return (
    <div className="box-father">
      <div className="box">
        <div className={props.color}>
          <h2> {props.title}</h2>
          <p>{props.text}</p>
        </div>
      </div>
    </div>
  );
}

export default Box;
