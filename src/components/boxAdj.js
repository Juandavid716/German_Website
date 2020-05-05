import React from "react";
import "../css/box.css";

function Boxadj(props) {
  return (
    <div className="box-father">
      <div className="box">
        <h2> {props.c1}</h2>
        <h3> {props.mean}</h3>
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
  );
}

export default Boxadj;
