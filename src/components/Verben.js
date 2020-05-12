import React, { Component } from "react";

import { Searchverben } from "./Searchverben";
const karte = [
  {
    title: "Gehen",
    mean: "Ir",
    c1: "Ich gehe",
    c2: " Du gehst",
    c3: "Er/sie/es geht",
    c4: "Ihr geht",
    c5: "Wir/Sie gehen",
    color: "",
  },
  {
    title: "Tanzen",
    mean: "Bailar",
    c1: "Ich tanze",
    c2: " Du tanzt",
    c3: "Er/sie/es tanzt",
    c4: "Ihr tanzt",
    c5: "Wir/Sie tanzen",
    color: "",
  },
  {
    title: "Sein",
    mean: "Ser",
    c1: "Ich bin",
    c2: " Du bist",
    c3: "Er/sie/es ist",
    c4: "Ihr seid",
    c5: "Wir/Sie sind",
    color: "",
  },
  {
    title: "Haben",
    mean: "Tener",
    c1: "Ich habe",
    c2: " Du habst",
    c3: "Er/sie/es hat",
    c4: "Ihr habt",
    c5: "Wir/Sie haben",
    color: "",
  },
  {
    title: "Können",
    mean: "Poder / saber (Posibilidad)",
    c1: "Ich kann",
    c2: " Du kannst",
    c3: "Er/sie/es kann",
    c4: "Ihr könt",
    c5: "Wir/Sie können",
    color: "Rose",
  },
  {
    title: "Möchten",
    mean: "Me gustaria",
    c1: "Ich möchte",
    c2: " Du möchtest",
    c3: "Er/sie/es möchtet",
    c4: "Ihr möchtet",
    c5: "Wir/Sie öchten",
    color: "Rose",
  },
  {
    title: "Must",
    mean: "Deber",
    c1: "Ich muss",
    c2: " Du musst",
    c3: "Er/sie/es muss",
    c4: "Ihr müsst",
    c5: "Wir/Sie mussen",
    color: "Rose",
  },
  {
    title: "Dürfen",
    mean: "Permitir/dejar",
    c1: "Ich darf",
    c2: " Du darfst",
    c3: "Er/sie/es darf",
    c4: "Ihr dürft",
    c5: "Wir/Sie dürfen",
    color: "Rose",
  },
  {
    title: "Nehmen",
    mean: "Tomar",
    c1: "Ich nimmst",
    c2: " Du nimmt",
    c3: "Er/sie/es nehmen",
    c4: "Ihr nehmt",
    c5: "Wir/Sie nehmen",
    color: "purple",
  },
  {
    title: "Machen",
    mean: "Hacer",
    c1: "Ich mache",
    c2: " Du machest",
    c3: "Er/sie/es macht",
    c4: "Ihr macht",
    c5: "Wir/Sie machen",
    color: "",
  },
  {
    title: "Hören",
    mean: "Escuchar",
    c1: "Ich höre",
    c2: " Du hörest",
    c3: "Er/sie/es hört",
    c4: "Ihr hört",
    c5: "Wir/Sie hören",
    color: "",
  },
];

class Verben extends Component {
  render() {
    return (
      <div className="sustantive-container">
        <Searchverben karte={karte} />
      </div>
    );
  }
}

export default Verben;
