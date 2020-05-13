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
