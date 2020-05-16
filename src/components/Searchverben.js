import React, { useState } from 'react';
import Boxver from './boxver';

export const Searchverben = (props) => {
  // const [word, setWord] = useState("");

  const [filterDisplay, setFilterDisplay] = useState(props.karte);

  const handleChange = (e) => {
    let oldList = props.karte.map((karte) => {
      return {
        title: karte.title,
        mean: karte.mean,
        c1: karte.c1,
        c2: karte.c2,
        c3: karte.c3,
        c4: karte.c4,
        c5: karte.c5,
        color: karte.color,
      };
    });

    if (e !== '') {
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
    <div className="search-bar container">
      <input
        onChange={(e) => handleChange(e.target.value)}
        className="myInput"
        placeholder="schreibe ein Verb.."
      ></input>

      <div className="pos">
        {filterDisplay.map((karte) => {
          return (
            <Boxver
              title={karte.title}
              mean={karte.mean}
              c1={karte.c1}
              c2={karte.c2}
              c3={karte.c3}
              c4={karte.c4}
              c5={karte.c5}
              color={karte.color}
            ></Boxver>
          );
        })}
      </div>
    </div>
  );
};

export default Searchverben;
