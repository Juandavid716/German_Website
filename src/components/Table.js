import React from 'react';
import '../index.css';
function Table(props) {
  const elements = props.array.wörter;
  const palabras = props.array.pal;
  // const items = [];
  // const pal = [];
  const table = [];

  for (let index = 0; index < elements.length; index++) {
    table.push(
      <tr key={index}>
        <td>{elements[index]}</td>
        <td>{palabras[index]}</td>
      </tr>
    );
    // items.push(<tr key={index}>{elements[index]}</tr>);
    // pal.push(<tr key={index}>{palabras[index]}</tr>);
  }

  return (
    <div className="tablas-ft">
      <div className="table-title">
        {' '}
        <h3> {props.array.title}</h3>{' '}
      </div>
      <div className="tablas">
        <table>
          <tbody>{table}</tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
