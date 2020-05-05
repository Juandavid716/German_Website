import React from 'react';
import Box from './box';

const cards = [
  {
    title: 'Der Ort',
    color: 'Blue',
    text: ' Die Orten',
    traduccion: ' El lugar / los lugares',
  },
  {
    title: 'Die Milch',
    color: 'Red',
    text: 'Ohne plural',
    traduccion: 'La leche',
  },
  {
    title: 'Das Bier',
    color: 'Green',
    text: 'Die Biere',
    traduccion: 'La cerveza / las cervezas',
  },
  {
    title: 'Der Herr',
    color: 'Blue',
    text: ' Die Herren',
    traduccion: ' El señor / los señores',
  },
  {
    title: 'Die Frau',
    color: 'Red',
    text: 'Die Frauen',
    traduccion: 'La señora / las señoras',
  },
  {
    title: 'Das Alphabet',
    color: 'Green',
    text: 'Die Alphabete',
    traduccion: 'El alfabeto / los alfabetos',
  },
];

function Sustantive() {
  const boxes = cards.map((card, key) => {
    return (
      <Box
        title={card.title}
        color={card.color}
        text={card.text}
        traduccion={card.traduccion}
        key={key}
      ></Box>
    );
  });

  return (
    <div>
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

export default Sustantive;
