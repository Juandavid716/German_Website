import React from "react";
import "../css/box.css";
import { useUser } from "reactfire";
function Box(props) {
  const user = useUser();
  return (
    <div className="box-father">
      <div className="box">
        <div className={`box-text ${props.color}`}>
          <h1> {props.title}</h1>

          {user && (
            <div className="delete-button">
              <span className="material-icons btn-del">delete</span>
            </div>
          )}
          <p>
            <em> {props.text}</em>
          </p>
          <img className="img-box" alt={props.title} src={props.imagen} />
          <p>
            <b> {props.traduccion}</b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Box;
