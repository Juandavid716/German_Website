import React, { useState } from "react";
import Boxadj from "./boxadj";

export const Searchadj = (props) => {
  // const [word, setWord] = useState("");

  const [filterDisplay, setFilterDisplay] = useState(props.karte);

  const handleChange = (e) => {
    let oldList = props.karte.map((karte) => {
      return {
        c1: karte.c1,
        c2: karte.c2,
        imagen: karte.imagen,
      };
    });

    if (e !== "") {
      let newList = [];
      //setWord(e);

      newList = oldList.filter((karte) =>
        karte.title.toLowerCase().includes(e.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(oldList);
    }
  };

  return (
    <div className="search-bar">
      <input
        onChange={(e) => handleChange(e.target.value)}
        className="myInput"
        placeholder="Search for names.."
      ></input>
      <section className="container">
        <div className="pos">
          {filterDisplay.map((karte) => {
            return (
              <Boxadj
                c1={karte.c1}
                c2={karte.c2}
                imagen={karte.imagen}
              ></Boxadj>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Searchadj;
