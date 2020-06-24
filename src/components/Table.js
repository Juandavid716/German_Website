import React from "react";
import "../index.css";
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
        {" "}
        <h3> {props.array.title}</h3>{" "}
      </div>
      <div className="tablas">
        <table>
          <tbody>{table}</tbody>
        </table>
      </div>
    </div>
  );
}
function TableSustantive(props) {
  const data = props.data;
  let listwords = data.map((karte) => {
    return {
      wordgenre: karte.wordgenre,
      plural: karte.plural,
      meaning: karte.meaning,
      color: karte.color,
    };
  });

  console.log(listwords);
  // const items = [];
  // const pal = [];
  const maintable = [];
  listwords.forEach((element) => {
    maintable.push(
      <tr key={element.wordgenre}>
        <td>{element.wordgenre}</td>
        <td>{element.plural}</td>
        <td>{element.meaning}</td>
        <td>{element.color}</td>
      </tr>
    );
  });

  // for (let index = 0; index < listwords.length; index++) {
  //   items.push(<tr key={index}>{elements[index]}</tr>);
  //   pal.push(<tr key={index}>{palabras[index]}</tr>);
  // }

  return (
    <div className="tablas-ft">
      <div className="tablas">
        <table>
          <thead>
            <th>Artikel </th>
            <th>Plural</th>
            <th>Bedeutung</th>
            <th>Übersetzung</th>
          </thead>
          <tbody>{maintable}</tbody>
        </table>
      </div>
    </div>
  );
}
export { Table, TableSustantive };
