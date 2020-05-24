import React from "react";
import "../index.css";
function Table(props) {
  const elements = props.array.wörter;
  const palabras = props.array.pal;
  const items = [];
  const pal = [];
  console.log();
  for (let index = 0; index < elements.length; index++) {
    items.push(<tr key={index}>{elements[index]}</tr>);
    pal.push(<tr key={index}>{palabras[index]}</tr>);
  }
  return (
    <div className="tablas-ft">
      <div className="title-tables">
        {" "}
        <b> {props.array.title}</b>{" "}
      </div>
      <div className="tablas">
        <table>
          <td>{items}</td>
          <td>{pal}</td>
        </table>
      </div>
    </div>
  );
}

export default Table;
