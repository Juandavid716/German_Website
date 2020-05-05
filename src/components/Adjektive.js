import React from "react";
import Boxadj from "./boxAdj";

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

function Adjektive() {
  const boxes = cards.map((card, key) => {
    return (
      <Boxadj
        title={card.title}
        mean={card.mean}
        c1={card.c1}
        c2={card.c2}
        c3={card.c3}
        c4={card.c4}
        c5={card.c5}
        key={key}
      ></Boxadj>
    );
  });

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
    </div>
  );
}

export default Adjektive;
