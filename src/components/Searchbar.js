import React, { useState } from "react";
import Box from "./box";
import { TableSustantive } from "./Table";
export const Searchbar = (props) => {
  const [word, setWord] = useState("");
  // console.log(props.check);

  const [filterDisplay, setFilterDisplay] = useState(props.karte);
  const [state, setstate] = useState(props.karte);
  const [active, setactive] = useState(false);
  let prueba = [];
  function change(e) {
    if (e === "Der") {
      console.log("HOLA");
      prueba = props.karte.filter((karte) => karte.color.includes("Blue"));
      setFilterDisplay(prueba);
      setstate(prueba);
      setactive(false);
    } else if (e === "Die") {
      prueba = props.karte.filter((karte) => karte.color.includes("Red"));
      setFilterDisplay(prueba);
      setstate(prueba);
      setactive(false);
    } else if (e === "Das") {
      prueba = props.karte.filter((karte) => karte.color.includes("Green"));
      setFilterDisplay(prueba);
      setstate(prueba);
      setactive(false);
    } else if (e === "Alles") {
      setFilterDisplay(props.karte);
      setstate(props.karte);
      setactive(false);
    } else if (e === "table-vocab") {
      let listwords = props.karte.map((karte) => {
        return {
          wordgenre: karte.title,
          plural: karte.text,
          meaning: karte.traduccion,
          color: karte.color,
        };
      });
      setWord(listwords);
      setactive(true);
      setFilterDisplay([]);
    }
    document.getElementById("search-input").value = "";
  }
  const handleChange = (e) => {
    let oldList = state.map((karte) => {
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

      setFilterDisplay(newList);
    } else {
      setFilterDisplay(oldList);
    }
  };

  return (
    <div className="search-bar container">
      <div className="botones-op">
        <button
          className="button gray"
          value="Alles"
          onClick={(e) => change(e.target.value)}
        >
          Alles
        </button>
        <button
          className="button Blue"
          value="Der"
          onClick={(e) => change(e.target.value)}
        >
          Der Articles
        </button>
        <button
          className="button Red"
          value="Die"
          onClick={(e) => change(e.target.value)}
        >
          Die articles
        </button>
        <button
          className="button Green"
          value="Das"
          onClick={(e) => change(e.target.value)}
        >
          Das articles
        </button>
        <button
          className="button Green"
          value="table-vocab"
          onClick={(e) => change(e.target.value)}
        >
          Table wortschätz
        </button>
      </div>
      <input
        id="search-input"
        onChange={(e) => handleChange(e.target.value)}
        className="myInput"
        placeholder="schreibe ein Substantiv.."
      ></input>

      {active && (
        <div>
          <TableSustantive data={word} />;
        </div>
      )}
      {!active && (
        <div className="pos">
          <div>
            {" "}
            Anzahl von Substantive: {filterDisplay.length} von{" "}
            {props.karte.length}
          </div>
          {filterDisplay.map((karte) => {
            return (
              <Box
                title={karte.title}
                color={karte.color}
                text={karte.text}
                traduccion={karte.traduccion}
                imagen={karte.imagen}
                key={karte.title}
                update={props.update}
                listen={props.listen}
                getimg={props.getimg}
                prueba={props.prueba}
                funct={true}
              ></Box>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Searchbar;
