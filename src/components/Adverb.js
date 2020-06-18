import React, { Component } from "react";
import Table from "./Table";
import Box from "./box";
import { useUser } from "reactfire";
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
  {
    title: "Akkusative Präpositionen",
    wörter: ["bis", "durch", "für", "gegen", "ohne", "um"],
    pal: [
      "hasta",
      "a través de, por medio de ",
      "para, por (tiempo)",
      "contra",
      "sin",
      "alrededor de, por(tiempo)",
    ],
  },
  {
    title: "Dative Präpositionen",
    wörter: [
      "ab",
      "aus",
      "außer",
      "bei",
      "gegenüber",
      "mit",
      "nach",
      "von",
      "seit",
      "zu",
      "entsprechend",
    ],
    pal: [
      "a partir de, desde",
      "de (lugar, procedencia)",
      "sin, excepto",
      "junto a",
      "enfrente a",
      "con",
      "hacia, después",
      "de",
      "desde",
      "hacia, a , a casa de",
      "según",
    ],
  },
];
const pronouns = [
  {
    title: "Personal pronouns (Nominativ)",
    wörter: ["ich", "du", "er", "sie", "es", "wir", "ihr", "sie", "Sie"],
    pal: [
      "yo / me",
      "tu / you",
      "el / him",
      "ella / her",
      "esto / it",
      "nosotros / us",
      "ustedes / you",
      "ellos / them",
      "usted / you",
    ],
  },
  {
    title: "Personal pronouns (Accusative)",
    wörter: ["mich", "dich", "ihn", "sie", "es", "uns", "euch", "sie", "Sie"],
    pal: ["me", "you", "him", "her", "it", "us", "you", "them", "you"],
  },
  {
    title: "Personal pronouns (Dative)",
    wörter: [
      "mir",
      "dir",
      "ihm",
      "ihr",
      "ihm",
      "uns",
      "euch",
      "ihnen",
      "ihnen",
    ],
    pal: [
      "to me",
      "to you",
      "to him",
      "to her",
      "to it",
      "to us",
      "to you",
      "to them",
      "you",
    ],
  },
  {
    title: "reflexive pronouns",
    wörter: [
      "mich",
      "dich",
      "sich",
      "sich",
      "sich",
      "uns",
      "euch",
      "sich",
      "sich",
    ],
    pal: [
      "myself",
      "yourself",
      "himself",
      "herself",
      "itself",
      "ourselves",
      "yourselves",
      "themselves",
      "yourself",
    ],
  },
  {
    title: "possesive adjectives",
    wörter: [
      "mein/meine",
      "dein/deine",
      "sein/seine",
      "ihr/ihre",
      "sein/seine",
      "unser/unsere",
      "euer/eure",
      "ihr/ihre",
      "ihr/ihre",
    ],
    pal: ["my", "your", "his", "her", "its", "our", "your", "their", "your"],
  },
];
class Adverb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: array,
      words: false,
    };
    const user = useUser();
  }

  change(event) {
    if (event === "Adverb") {
      this.setState({ array: array, words: false });
    } else if (event === "Präpositionen") {
      this.setState({ array: prepositions, words: false });
    } else if (event === "pronouns") {
      this.setState({ array: pronouns, words: false });
    } else if (event === "vocab") {
      this.setState({ words: true });
    }
  }

  render() {
    return (
      <section className="container">
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
          <button
            className="button gray button-adv"
            value="vocab"
            onClick={(e) => this.change(e.target.value)}
          >
            Vocab Trainer
          </button>
        </div>

        <div className="tables-container">
          {!this.state.words &&
            this.state.array.map((karte, index) => {
              return (
                <Table key={index} array={karte}>
                  {" "}
                </Table>
              );
            })}{" "}
        </div>

        {this.state.words && (
          <div className="pos">
            <Box
              title={"Der Ort"}
              color={"Blue"}
              text={"sdf"}
              traduccion={"sdfd"}
              imagen={"../imgs/DerOrt.jpg"}
              key={"sdfsdf"}
              update={"sdf"}
              funct={false}
            ></Box>
            <button className="button gray">Siguiente </button>
          </div>
        )}
      </section>
    );
  }
}

export default Adverb;
