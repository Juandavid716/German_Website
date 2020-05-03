import React from "react";
import Navb from "./components/Navbar";
import Box from "./components/box";
const cards = [
  {
    title: "Hallo",
    color: "Blue",
    text: "Hola",
  },
  { title: "Willkommen", color: "Red", text: "Bienvenido" },
  {
    title: "Danke",
    color: "Green",
    text: "Gracias",
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
      <div className="pos">{boxes}</div>
    </div>
  );
}

export default App;
