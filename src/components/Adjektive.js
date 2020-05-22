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
    c1: "bekannt / unbekannt ",
    c2: "conocido /desconocido ",
  },
  {
    c1: "bequem /unbequem ",
    c2: "cómodo /incómodo ",
  },
  {
    c1: "breit / eng ",
    c2: "amplio / ancho ",
  },
  {
    c1: "fröhlich / traurig ",
    c2: "Alegre /Triste ",
  },
  {
    c1: "froh / sauer ",
    c2: "Contento / enojado ",
  },
  {
    c1: "ganz / kaputt ",
    c2: "completo / roto ",
  },
  {
    c1: "frei / besetzt ",
    c2: "libre / ocupado ",
  },
  {
    c1: "heiß / kalt ",
    c2: "caliente / frio ",
  },
  {
    c1: "gut / schlecht ",
    c2: "bueno / malo ",
  },
  {
    c1: "glücklich / unglücklich ",
    c2: "feliz / infeliz ",
  },
  {
    c1: "hungrig / satt ",
    c2: "hambriento / lleno ",
  },
  {
    c1: "offen / geschlossen ",
    c2: "abierto / cerrado ",
  },
  {
    c1: "pünktlich / unpünktlich ",
    c2: "puntual / impuntual ",
  },
  {
    c1: "durstig / gesättigt ",
    c2: "Sediento / saciado ",
  },
  {
    c1: "nett-schön / hässlich ",
    c2: "bonito / feo ",
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
