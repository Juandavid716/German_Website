import React from "react";
import "../css/box.css";

function Boxadj(props) {
  return (
    <div className="box-father">
      <div className="box">
        <img className="img-box" alt={props.c1} src={props.imagen} />
        <div className="father-adj">
          <div className="texto-adj">
            <p>
              <em> {props.c1}</em>
              <em> {props.c2}</em>
            </p>
          </div>
        </div>

        <p></p>
      </div>
    </div>
  );
}

export default Boxadj;
