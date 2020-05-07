import React, { useState } from "react";
import Box from "./box";
import { Searchbar } from "./Searchbar";

export const Sustantive = () => {
  const [karte] = useState([
    {
      title: "Der Ort",
      color: "Blue",
      text: " Die Orten",
      traduccion: " El lugar / los lugares",
    },
    {
      title: "Die Milch",
      color: "Red",
      text: "Ohne plural",
      traduccion: "La leche",
    },
    {
      title: "Das Bier",
      color: "Green",
      text: "Die Biere",
      traduccion: "La cerveza / las cervezas",
    },
    {
      title: "Der Herr",
      color: "Blue",
      text: " Die Herren",
      traduccion: " El señor / los señores",
    },
    {
      title: "Die Frau",
      color: "Red",
      text: "Die Frauen",
      traduccion: "La señora / las señoras",
    },
    {
      title: "Das Alphabet",
      color: "Green",
      text: "Die Alphabete",
      traduccion: "El alfabeto / los alfabetos",
    },
    {
      title: "Der Schrank",
      color: "Blue",
      text: "Die Schränke",
      traduccion: "El gabinete / los gabinetes",
    },
    {
      title: "Das Bett",
      color: "Green",
      text: "Die Better",
      traduccion: "La cama / las camas",
    },
    {
      title: "Die Lampe",
      color: "Red",
      text: "Die Lampen",
      traduccion: "La lampara / las lamparas",
    },
    {
      title: "Das Sofa",
      color: "Green",
      text: "Die Sofas",
      traduccion: "El sofa / Los sofas",
    },
    {
      title: "Der Teppich",
      color: "Blue",
      text: "Die Teppiche",
      traduccion: "La alfombra / las alfombras",
    },
    {
      title: "Der Sessel",
      color: "Blue",
      text: "Die Sessels",
      traduccion: "El sillón / Los sillones",
    },
    {
      title: "Der Stuhl",
      color: "Blue",
      text: "Die Stühle",
      traduccion: "La silla / las sillas",
    },
    {
      title: "Der Spiegel",
      color: "Blue",
      text: "Die Spiegels",
      traduccion: "El espejo / los espejos",
    },
    {
      title: "Der Schreibtisch",
      color: "Blue",
      text: "Die Schreibtische",
      traduccion: "El pupitre / los pupitres",
    },
    {
      title: "Das Buch",
      color: "Green",
      text: "Die Bücher",
      traduccion: "El libro / los libros",
    },
    {
      title: "Die Stehlampe",
      color: "Red",
      text: "Die Stehlampen",
      traduccion: "La Lampara de piso / las lamparas de piso",
    },
  ]);

  return (
    <div className="sustantive-container">
      <Searchbar karte={karte} />
    </div>
  );
};

export default Sustantive;
