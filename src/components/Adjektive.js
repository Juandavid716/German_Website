import React, { Component } from "react";

import { Searchadj } from "./Searchadj";
const karte = [
  {
    c1: "Viejo",
    c2: "Joven",
    imagen:
      "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/adjektives%20imgs%2Faltvsjung.jpg?alt=media&token=41bbfb1f-ba1a-46c1-9840-5a33c1847de1",
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
