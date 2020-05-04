import React from 'react';
import Navb from './components/Navbar';
import Box from './components/box';
const cards = [
  {
    title: 'Hallo',
    color: 'Blue',
    text: 'Hola',
  },
  { title: 'Willkommen', color: 'Red', text: 'Bienvenido' },
  {
    title: 'Danke',
    color: 'Green',
    text: 'Gracias',
  },
];
function App() {
  const boxes = cards.map((card, key) => {
    return (
      <Box
        title={card.title}
        color={card.color}
        text={card.text}
        key={key}
      ></Box>
    );
  });
  return (
    <div>
      <Navb></Navb>
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

export default App;
