import React, { useState } from 'react';
import Box from './box';

export const Searchbar = (props) => {
  //const [word, setWord] = useState("");

  const [filterDisplay, setFilterDisplay] = useState(props.karte);

  const handleChange = (e) => {
    let oldList = props.karte.map((karte) => {
      return {
        title: karte.title,
        color: karte.color,
        text: karte.text,
        traduccion: karte.traduccion,
        imagen: karte.imagen,
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
        placeholder="schreibe ein Substantiv.."
      ></input>
      <div className="pos">
        {filterDisplay.map((karte) => {
          return (
            <Box
              title={karte.title}
              color={karte.color}
              text={karte.text}
              traduccion={karte.traduccion}
              imagen={karte.imagen}
            ></Box>
          );
        })}
      </div>
    </div>
  );
};

export default Searchbar;
