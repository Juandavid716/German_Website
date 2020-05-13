import React, { Component } from "react";

import { Searchadj } from "./Searchadj";
const karte = [
  {
    c1: "Alt / Jung",
    c2: "Viejo / Joven",
  },
  {
    c1: "Alt / Jung",
    c2: "Viejo / Joven",
  },
  {
    c1: "Alt / Jung",
    c2: "Viejo / Joven",
  },
  {
    c1: "Alt / Jung",
    c2: "Viejo / Joven",
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
