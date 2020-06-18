import React, { useState } from "react";
import Boxver from "./boxver";

export const Searchverben = (props) => {
  // const [word, setWord] = useState("");

  const [filterDisplay, setFilterDisplay] = useState(props.karte);
  const [state, setstate] = useState(props.karte);

  function change(e) {
    let tmp = [];
    if (e === "Präteritum") {
      state.forEach((element) => {
        if (element.fact === "pasado") {
          tmp.push(element);
        }
      });

      setFilterDisplay(tmp);
    } else if (e === "Präsens") {
      setFilterDisplay(props.karte);
      setstate(props.karte);
    } else if (e === "Perfekt") {
      state.forEach((element) => {
        if (element.fact === "perfecto") {
          tmp.push(element);
        }
      });

      setFilterDisplay(tmp);
    }
    document.getElementById("search-input").value = "";
  }
  const handleChange = (e) => {
    let oldList = state.map((karte) => {
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
    console.log(oldList);
    if (e !== "") {
      let newList = [];
      //setWord(e);

      newList = oldList.filter(
        (karte) =>
          karte.title.toLowerCase().includes(e.toLowerCase()) ||
          karte.mean.toLowerCase().includes(e.toLowerCase())
      );

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(oldList);
    }
  };

  return (
    <div className="search-bar container">
      <div className="botones-op">
        <button
          className="button-verb button"
          value="Präteritum"
          onClick={(e) => change(e.target.value)}
        >
          Präteritum
        </button>
        <button
          className="button-verb button"
          value="Präsens"
          onClick={(e) => change(e.target.value)}
        >
          Präsens
        </button>
        <button
          className="button-verb button"
          value="Perfekt"
          onClick={(e) => change(e.target.value)}
        >
          Perfekt
        </button>
      </div>

      <input
        id="search-input"
        onChange={(e) => handleChange(e.target.value)}
        className="myInput"
        placeholder="schreibe ein Verb.."
      ></input>
      <div className="bartext">
        {" "}
        Anzahl der Verben: {filterDisplay.length} von {props.karte.length}
      </div>

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
              key={karte.title}
            ></Boxver>
          );
        })}
      </div>
    </div>
  );
};

export default Searchverben;
