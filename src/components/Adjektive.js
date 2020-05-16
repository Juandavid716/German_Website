import React, { Component } from "react";

import { Searchadj } from "./Searchadj";
const karte = [
  {
    c1: "alt / jung",
    c2: "viejo / joven",
  },
  {
    c1: "groß / klein",
    c2: "grande / pequeño",
  },
  {
    c1: "hell / dunkel",
    c2: "brillante / oscuro",
  },
  {
    c1: "lang / kurz",
    c2: "largo / corto",
  },
  {
    c1: "gemütlich / ungemütlich",
    c2: "comodo / incomodo",
  },
  {
    c1: "angenehm /unangenehm ",
    c2: "agradable /desagradable ",
  },
  {
    c1: "anwesend /abwesend ",
    c2: "presente /ausente ",
  },
  {
    c1: "bekannt /unbekannt ",
    c2: "conocido /desconocido ",
  },
  {
    c1: "bequem /unbequem ",
    c2: "cómodo /incómodo ",
  },
  {
    c1: "breit /eng ",
    c2: "amplio /ancho ",
  },
];

class Adjektive extends Component {
  render() {
    return (
      <div className="sustantive-container">
        <Searchadj karte={karte} />
      </div>
    );
  }
}

export default Adjektive;
