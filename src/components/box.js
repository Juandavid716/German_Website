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

          {user && props.funct && (
            <div className="delete-button">
              <button
                id={props.title}
                className="material-icons btn-del"
                onClick={props.update.bind(this)}
              >
                delete
              </button>
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
