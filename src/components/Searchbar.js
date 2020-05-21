import React, { useState } from "react";
import Box from "./box";

export const Searchbar = (props) => {
  //const [word, setWord] = useState("");
  // console.log(props.check);
  const [filterDisplay, setFilterDisplay] = useState(props.karte);
  const [check, setCheck] = useState(false);
  const [checkDie, setCheckDie] = useState(false);
  const [checkDas, setCheckDas] = useState(false);
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

    if (e !== "") {
      let newList = [];
      //setWord(e);

      newList = oldList.filter(
        (karte) =>
          karte.title.toLowerCase().includes(e.toLowerCase()) ||
          karte.traduccion.toLowerCase().includes(e.toLowerCase())
      );
      if (
        (check === true && checkDas === true) ||
        (check === true && checkDie === true) ||
        (checkDas === true && checkDie === true) ||
        (check === true && checkDie === true && checkDas === true) ||
        check === true ||
        checkDas === true ||
        checkDie === true
      ) {
        let vectorfinal = [];
        let tmp = [];
        if (check === true) {
          tmp = newList.filter((filtro) => filtro.color.includes("Blue"));
          vectorfinal = vectorfinal.concat(tmp);
        }
        if (checkDie === true) {
          tmp = newList.filter((filtro) => filtro.color.includes("Red"));
          vectorfinal = vectorfinal.concat(tmp);
        }
        if (checkDas === true) {
          tmp = newList.filter((filtro) => filtro.color.includes("Green"));
          vectorfinal = vectorfinal.concat(tmp);
        }

        setFilterDisplay(vectorfinal);
      } else {
        setFilterDisplay(newList);
      }
    } else {
      let tmp = [];
      let oldvaluefinal = [];
      if (check === true || checkDas === true || checkDas === true) {
        if (check === true) {
          tmp = oldList.filter((filtro) => filtro.color.includes("Blue"));
          oldvaluefinal = oldvaluefinal.concat(tmp);
        }
        if (checkDie === true) {
          tmp = oldList.filter((filtro) => filtro.color.includes("Red"));
          oldvaluefinal = oldvaluefinal.concat(tmp);
        }
        if (checkDas === true) {
          tmp = oldList.filter((filtro) => filtro.color.includes("Green"));
          oldvaluefinal = oldvaluefinal.concat(tmp);
        }
        if (check === true && checkDas === true && checkDie === true) {
          oldvaluefinal = oldList;
        }
        setFilterDisplay(oldvaluefinal);
      } else {
        setFilterDisplay(oldList);
      }
    }
  };

  return (
    <div className="search-bar container">
      <input
        onChange={(e) => handleChange(e.target.value)}
        className="myInput"
        placeholder="schreibe ein Substantiv.."
      ></input>
      <input
        id="der-art"
        type="checkbox"
        onChange={(e) => setCheck(e.target.checked)}
      ></input>
      <label htmlFor="der-art" style={{ marginLeft: 8 }}>
        Der article
      </label>

      <input
        id="die-art"
        type="checkbox"
        onChange={(e) => setCheckDie(e.target.checked)}
      ></input>
      <label htmlFor="die-art" style={{ marginLeft: 8 }}>
        Die article
      </label>

      <input
        id="das-art"
        type="checkbox"
        onChange={(e) => setCheckDas(e.target.checked)}
      ></input>
      <label htmlFor="das-art" style={{ marginLeft: 8 }}>
        Das article
      </label>

      <div>
        {" "}
        Anzahl von Substantive: {filterDisplay.length} von {props.karte.length}
      </div>
      <div className="pos">
        {filterDisplay.map((karte) => {
          return (
            <Box
              title={karte.title}
              color={karte.color}
              text={karte.text}
              traduccion={karte.traduccion}
              imagen={karte.imagen}
              key={karte.title}
            ></Box>
          );
        })}
      </div>
    </div>
  );
};

export default Searchbar;
