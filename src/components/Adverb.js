import React, { Component } from "react";
import Table from "./Table";
const array = [
  {
    title: "Temporales",
    wörter: ["vorgestern", "gestern", "heute", "morgen", "übermorgen"],
    pal: ["antes de ayer", "ayer", "hoy", "mañana", "pasado mañana"],
  },
  {
    title: "Temporales Subjetivos",
    wörter: [
      "damals",
      "früher",
      "jetzt",
      "sofort",
      "gleich",
      "bald",
      "später",
      "dann",
    ],
    pal: [
      "entonces",
      "antes",
      "ahora",
      "inmediatamente",
      "inmediatamente",
      "pronto",
      "más tarde",
      "luego",
    ],
  },
  {
    title: "Frecuencia",
    wörter: [
      "immer",
      "fast immer",
      "meistens",
      "häufig",
      "ab und zu",
      "manchmal",
      "selten",
      "fast nie",
      "nie",
    ],
    pal: [
      "siempre",
      "casi siempre",
      "la mayoria de veces",
      "frecuentemente",
      "en ocasiones",
      "a veces",
      "más pocas veces",
      "casi nunca",
      "nunca",
    ],
  },
  {
    title: "Frecuencia diaria",
    wörter: ["morgens", "nachmittags", "abends", "nachts"],
    pal: [
      "por las mañanas",
      "por las tardes",
      "por las tardes",
      "por las noches",
    ],
  },
  {
    title: "Locales",
    wörter: [
      "vorn",
      "hinten",
      "links",
      "rechts",
      "oben",
      "unten",
      "innen",
      "aussen",
      "hier",
      "da",
      "dort",
      "überall",
    ],
    pal: [
      "delante",
      "detrás",
      "a la izquierda",
      "a la derecha",
      "arriba",
      "abajo",
      "dentro",
      "fuera",
      "aquí",
      "ahí",
      "allí",
      "en todas partes",
      "en ningún sitio",
    ],
  },
  {
    title: "De movimiento",
    wörter: [
      "aufwärts",
      "abwärts",
      "vorwärts",
      "ruckwärts",
      "heimwärts",
      "westwärts",
      "bergauf",
      "bergab",
    ],
    pal: [
      "hacia arriba",
      "hacia abajo",
      "hacia adelante",
      "hacia atrás",
      "hacia casa",
      "hacia el oeste",
      "cuesta arriba",
      "cuesta abajo",
    ],
  },
  {
    title: "Modales",
    wörter: [
      "erstens",
      "zweitens",
      "drittens",
      "auch",
      "ebenfalls",
      "außerdem",
    ],
    pal: [
      "en primer lugar",
      "en segundo lugar",
      "en tercer lugar",
      "también",
      "también",
      "además",
    ],
  },
];
const prepositions = [
  {
    title: "Wechselpräpositionen",
    wörter: [
      "an",
      "in",
      "auf",
      "über",
      "unter",
      "hinter",
      "vor",
      "zwischen",
      "neben",
    ],
    pal: [
      "en/sobre (vertical)",
      "en (dentro)",
      "en/sobre (horizontal)",
      "sobre/encima",
      "debajo",
      "detras",
      "delante de",
      "entre",
      "cerca de (next to)",
    ],
  },
];
const pronouns = [
  {
    title: "Personal pronouns (Nominativ)",
    wörter: ["ich", "du", "Er", "sie", "es", "wir", "ihr", "sie", "Sie"],
    pal: [
      "yo",
      "tu",
      "el",
      "ella",
      "esto",
      "nosotros",
      "ustedes",
      "ellos",
      "usted",
    ],
  },
];
class Adverb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: array,
    };
  }
  change(event) {
    if (event === "Adverb") {
      this.setState({ array: array });
    } else if (event === "Präpositionen") {
      this.setState({ array: prepositions });
    } else if (event === "pronouns") {
      this.setState({ array: pronouns });
    }
  }
  render() {
    return (
      <div className="tables-container">
        <div className="adverb-botons">
          <button
            className="button gray button-adv"
            value="Adverb"
            onClick={(e) => this.change(e.target.value)}
          >
            Adverb
          </button>
          <button
            className="button gray button-adv"
            value="Präpositionen"
            onClick={(e) => this.change(e.target.value)}
          >
            Präpositionen
          </button>
          <button
            className="button gray button-adv"
            value="pronouns"
            onClick={(e) => this.change(e.target.value)}
          >
            Pronouns
          </button>
        </div>

        {this.state.array.map((karte, index) => {
          return (
            <Table key={index} array={karte}>
              {" "}
            </Table>
          );
        })}
      </div>
    );
  }
}

export default Adverb;
