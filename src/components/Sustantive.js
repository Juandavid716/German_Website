import React, { useState } from "react";

import { Searchbar } from "./Searchbar";
import firebase from "firebase/app";
import "firebase/storage";
import firebaseConfig from "./fbconfig";

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// const storage = firebase.storage();
export const Sustantive = () => {
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
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/bier.jpg?alt=media&token=7b8f2348-e7f8-4577-b593-3e56751b27c5",
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
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/teppich.jpg?alt=media&token=0b2387a8-8059-4364-8d41-2858b00e3552",
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
    {
      title: "Der Apfel",
      color: "Blue",
      text: "Die Äpfel",
      traduccion: "La manzana / las manzanas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/apfel.jpg?alt=media&token=54c56e1a-b455-468f-8c5f-0ab46ad016d8",
    },
    {
      title: "Das Kino",
      color: "Green",
      text: "Die Kinos",
      traduccion: "El cine / los cines",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/architecture-room-indoors-auditorium-109669.jpg?alt=media&token=17a19ad1-839b-4d01-b594-180ea0808f3a",
    },
    {
      title: "Das Obst",
      color: "Green",
      text: "Ohne Pl ",
      traduccion: "La fruta",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fruta.jpg?alt=media&token=18ac4e0f-5730-4645-a7dc-952ff281ef2d",
    },
    {
      title: "Die Frucht",
      color: "Red",
      text: "Die Früchte ",
      traduccion: "La fruta / las frutas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fruta.jpg?alt=media&token=18ac4e0f-5730-4645-a7dc-952ff281ef2d",
    },
    {
      title: "Das Restaurant",
      color: "Green",
      text: "Die Restaurants ",
      traduccion: "El restaurante / los restaurantes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/restaurant.jpg?alt=media&token=2d58df92-c0b8-48a6-a282-c0e8d3cc9c53",
    },
    {
      title: "Der Orangensaft",
      color: "Blue",
      text: "Die Orangensäafte ",
      traduccion: "El jugo de naranja / los jugos de naranja",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/jugonaranja.jpg?alt=media&token=ae3c928d-3fc5-45ec-a03e-4df5fca998e4",
    },
    {
      title: "Der Flughafen",
      color: "Blue",
      text: "Die Flughäfen ",
      traduccion: "El aeropuerto / los aeropuertos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/flughafen.jpg?alt=media&token=35788adb-1d23-436b-9ee3-6c1b5e2321eb",
    },
    {
      title: "Die Studentin",
      color: "Red",
      text: "Die Studentinnen",
      traduccion: "La estudiante / las estudiantes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/studentinnen.jpg?alt=media&token=5054b550-6b03-4e1d-a443-e6525a7b0347",
    },
    {
      title: "Der Student",
      color: "Blue",
      text: "Die Studenten",
      traduccion: "el estudiante / los estudiantes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/student.jpg?alt=media&token=d2afe19d-5aa0-47e7-aacb-fd758d01739d",
    },
    {
      title: "Das Land",
      color: "Green",
      text: "Die Länder",
      traduccion: "El pais / los paises",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/assorted-country-flag-lot-1174136.jpg?alt=media&token=36e1b6cf-b55b-4055-aa65-5a4486c511dd",
    },
    {
      title: "Das Haus",
      color: "Green",
      text: "Die Häuser",
      traduccion: "La casa / las casas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/hause.jpg?alt=media&token=bf00b8cd-b245-44c8-9a79-09fae997e124",
    },
    {
      title: "Die Lehrerin",
      color: "Rose",
      text: "Die Lehrerinnen",
      traduccion: "La profesora / las profesoras",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/lehrerin.jpg?alt=media&token=2bb1eb0c-661b-4cc8-a52b-5a3d0e452230",
    },
    {
      title: "Der Lehrer",
      color: "Blue",
      text: "Die Lehrers",
      traduccion: "el profesor / las profesoras",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/lehrer.jpg?alt=media&token=6d19c6d9-6040-4325-8be3-baea4802859f",
    },
    {
      title: "Die Limonade",
      color: "Red",
      text: "Die Limonaden",
      traduccion: "La limonada / las limonadas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/limonade.jpg?alt=media&token=18b268e8-f783-4725-9abf-2d6ec560ec07",
    },
    {
      title: "Das Hotel",
      color: "Green",
      text: "Das Hotels",
      traduccion: "El hotel / los hoteles",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/hotel.jpg?alt=media&token=fc24c1fd-df1d-4aee-b71b-1ecfe3cea958",
    },
    {
      title: "Der Name",
      color: "Blue",
      text: "Die Namen",
      traduccion: "El nombre / los nombres",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/name.jpg?alt=media&token=c3d813eb-f60a-4ff0-aa35-49758182a8e7",
    },
    {
      title: "Die Schwester",
      color: "Red",
      text: "Die Schwestern",
      traduccion: "La hermana / las hermanas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/schwester.jpg?alt=media&token=65eaef64-4c9f-4689-b79d-df4ec5616862",
    },
    {
      title: "Der Bus",
      color: "Blue",
      text: "Die Busse",
      traduccion: "El bus / los buses",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/bus.jpg?alt=media&token=97637151-3165-4c2a-a9b0-17611debbac6",
    },
    {
      title: "Die Stadt",
      color: "Red",
      text: "Die Städte",
      traduccion: "La ciudad / las ciudades",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/stadt.jpg?alt=media&token=92f0c211-fb6f-419d-823b-7a8d412af0fc",
    },
    {
      title: "Der Kaffee",
      color: "Blue",
      text: "Die Kaffees",
      traduccion: "El cafe/ los cafes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/koffe.jpg?alt=media&token=45870921-5e7c-4e60-96f6-6f4062a08b97",
    },
    {
      title: "Das Wasser",
      color: "Green",
      text: "Die Wassers",
      traduccion: "El agua/ las aguas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/wasser.jpg?alt=media&token=a0a56a8a-bdeb-411f-bd05-6bf90d2ce332",
    },
    {
      title: "Das Wasser",
      color: "Green",
      text: "Die Wassers",
      traduccion: "El agua/ las aguas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/wasser.jpg?alt=media&token=a0a56a8a-bdeb-411f-bd05-6bf90d2ce332",
    },
    {
      title: "Das Cola",
      color: "Green",
      text: "Die Colas",
      traduccion: "La cola/ las colas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/cola.jpg?alt=media&token=df27b632-25cf-4133-a4f1-59189c7ac150",
    },
    {
      title: "Der Tee",
      color: "Blue",
      text: "Die Tees",
      traduccion: "El té/ los tés",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/tee.jpg?alt=media&token=390b3eb7-d560-4f88-8208-4901188f038a",
    },
    {
      title: "Das Theater",
      color: "Green",
      text: "Die Theaters",
      traduccion: "El teatro/ los teatros",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/theater.jpg?alt=media&token=87974122-f875-450c-af83-14e282aabcff",
    },
    {
      title: "Die Musik",
      color: "Red",
      text: "Die Musiken",
      traduccion: "La música/ Las músicas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/musik.jpg?alt=media&token=6dba769b-8e1a-4db6-ae3e-0ee4358a8712",
    },
    {
      title: "Der Sohn",
      color: "Blue",
      text: "Die Söhne",
      traduccion: "El hijo/ los hijos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/sohn.jpg?alt=media&token=bcce4e62-3c7c-41c4-8fca-b00ca6fc260f",
    },
    {
      title: "Das Eis",
      color: "Green",
      text: "Die Eises",
      traduccion: "El helado/hielo / los helados/hielos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/eis.jpg?alt=media&token=9731749e-38dc-48bc-882f-ceb83a2e5e21",
    },
    {
      title: "Die Straße",
      color: "Red",
      text: "Die Straßen",
      traduccion: "La calle / las calles",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/diestrasse.jpg?alt=media&token=0f2c118d-e5dd-4727-b13f-5584955178cb",
    },
    {
      title: "Der Bruder",
      color: "Blue",
      text: "Die Brüder",
      traduccion: "El hermano / los hermanos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/bruder.jpg?alt=media&token=bbc5c629-c99c-4ad8-9380-d414b6e86a8b",
    },
    {
      title: "Die Tochter",
      color: "Red",
      text: "Die Töchter",
      traduccion: "La hija / las hijas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/tochter.jpg?alt=media&token=d8d9012c-73aa-4ba6-b8e0-8085cb3c0599",
    },
  ]);

  return (
    <div className="sustantive-container">
      <Searchbar karte={karte} />
    </div>
  );
};

export default Sustantive;
