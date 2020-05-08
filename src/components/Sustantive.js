import React, { useState } from "react";
import Box from "./box";
import { Searchbar } from "./Searchbar";
import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyCx9HEmUqV_aaqiqC6EVa73vWMB9Zk_a_k",
  authDomain: "imgs-german-site.firebaseapp.com",
  databaseURL: "https://imgs-german-site.firebaseio.com",
  projectId: "imgs-german-site",
  storageBucket: "imgs-german-site.appspot.com",
  messagingSenderId: "570171886493",
  appId: "1:570171886493:web:580e228f8c4c726abd7d74",
  measurementId: "G-3NTB4F3RSG",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export const Sustantive = () => {
  const [url, setUrl] = useState("");

  const [karte] = useState([
    {
      title: "Der Ort",
      color: "Blue",
      text: " Die Orten",
      traduccion: " El lugar / los lugares",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/DerOrt.jpg?alt=media&token=8f1a3bf4-c9e8-4d85-9168-8986557c0b82",
    },
    {
      title: "Die Milch",
      color: "Red",
      text: "Ohne plural",
      traduccion: "La leche",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/DieMilch.jpg?alt=media&token=64cf9397-1114-4a2a-9894-8d65a9122863",
    },
    {
      title: "Das Bier",
      color: "Green",
      text: "Die Biere",
      traduccion: "La cerveza / las cervezas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/DasBier.jpg?alt=media&token=d85cca6c-dd6b-4bde-9239-9d27f5d7f6aa",
    },
    {
      title: "Der Herr",
      color: "Blue",
      text: " Die Herren",
      traduccion: " El señor / los señores",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/man.jpg?alt=media&token=8d668f58-1ba9-46e3-8037-23bf0610dbda",
    },
    {
      title: "Die Frau",
      color: "Red",
      text: "Die Frauen",
      traduccion: "La señora / las señoras",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/frau.jpg?alt=media&token=bff7c1a0-c6d7-44bb-ab6f-5eb52f03d24c",
    },
    {
      title: "Das Alphabet",
      color: "Green",
      text: "Die Alphabete",
      traduccion: "El alfabeto / los alfabetos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/alphabet.jpg?alt=media&token=48a68336-58b8-4161-8f41-b91378a80ba3",
    },
    {
      title: "Der Schrank",
      color: "Blue",
      text: "Die Schränke",
      traduccion: "El gabinete / los gabinetes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/schrank.jpg?alt=media&token=e40a9fc2-1012-4438-8f31-88afd2010028",
    },
    {
      title: "Das Bett",
      color: "Green",
      text: "Die Better",
      traduccion: "La cama / las camas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/bett.jpg?alt=media&token=4aaa9f1c-b3b8-4167-98cc-d35209c80f16",
    },
    {
      title: "Die Lampe",
      color: "Red",
      text: "Die Lampen",
      traduccion: "La lampara / las lamparas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/lamp.jpg?alt=media&token=4a26d3b4-0ac2-489a-8da8-8a4b06d3409c",
    },
    {
      title: "Das Sofa",
      color: "Green",
      text: "Die Sofas",
      traduccion: "El sofa / Los sofas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/sofa.jpg?alt=media&token=3b6c6deb-eaf0-46e3-a3b7-3cb1aaacbd52",
    },
    {
      title: "Der Teppich",
      color: "Blue",
      text: "Die Teppiche",
      traduccion: "La alfombra / las alfombras",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/tappich.jpg?alt=media&token=67eef144-f18b-448c-8d68-81e14844151b",
    },
    {
      title: "Der Sessel",
      color: "Blue",
      text: "Die Sessels",
      traduccion: "El sillón / Los sillones",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/sessel.jpg?alt=media&token=c8de68d2-589e-4f94-a6b7-7d451e71d293",
    },
    {
      title: "Der Stuhl",
      color: "Blue",
      text: "Die Stühle",
      traduccion: "La silla / las sillas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/stuhl.jpg?alt=media&token=d36d5683-bd7a-4a40-ac1c-eb324a988d14",
    },
    {
      title: "Der Spiegel",
      color: "Blue",
      text: "Die Spiegels",
      traduccion: "El espejo / los espejos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/spiegel.jpg?alt=media&token=ee6debe5-c981-47f0-b123-1b92d274181f",
    },
    {
      title: "Der Schreibtisch",
      color: "Blue",
      text: "Die Schreibtische",
      traduccion: "El escritorio / los escritorios",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/schreibtisch.jpg?alt=media&token=1e940d13-9e4f-42d5-93df-3d74e6129c6d",
    },
    {
      title: "Das Buch",
      color: "Green",
      text: "Die Bücher",
      traduccion: "El libro / los libros",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/buch.jpg?alt=media&token=b66e7d96-ad39-40b9-aae8-b4e2e96d8626",
    },
    {
      title: "Die Stehlampe",
      color: "Red",
      text: "Die Stehlampen",
      traduccion: "La Lampara de piso / las lamparas de piso",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/stehlampe.jpg?alt=media&token=c77d3f1e-d9e8-4d05-a510-fd71d1fabddb",
    },
  ]);

  return (
    <div className="sustantive-container">
      <Searchbar karte={karte} />
    </div>
  );
};

export default Sustantive;
