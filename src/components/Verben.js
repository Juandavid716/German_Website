import React, { Component } from "react";
import Boxver from "./boxver";
import { render } from "@testing-library/react";

const cards = [
  {
    title: "Gehen",
    mean: "Ir",
    c1: "Ich gehe",
    c2: " Du gehst",
    c3: "Er/sie/es geht",
    c4: "Ihr geht",
    c5: "Wir/Sie gehen",
  },
];
const boxes = cards.map((card, key) => {
  return (
    <Boxver
      title={card.title}
      mean={card.mean}
      c1={card.c1}
      c2={card.c2}
      c3={card.c3}
      c4={card.c4}
      c5={card.c5}
      key={key}
    ></Boxver>
  );
});

class Verben extends Component {
  constructor(args) {
    super(args);
    this.state = {
      counter: 1,
    };
  }
  render() {
    return (
      <div className="sustantive-container">
        <section className="container">
          <div className="search-bar">
            <input
              type="text"
              className="myInput"
              placeholder="Search for names.."
            ></input>
          </div>
          <div className="pos">{boxes}</div>
        </section>
        <div>
          > <span>Contador {this.state.counter}</span>
        </div>
      </div>
    );
  }
}

export default Verben;
