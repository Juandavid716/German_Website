import React, { useState } from "react";

import { Searchbar } from "./Searchbar";
//import firebase from 'firebase/app';
import "firebase/storage";
// import firebaseConfig from "./fbconfig";

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
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
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/frucht.jpg?alt=media&token=940dda47-3dc3-46a7-88ce-0795adb105ec",
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
      color: "Red",
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
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/sohn.jpg?alt=media&token=a7e896b0-418a-4915-aa36-b7be7b588bd4",
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
    {
      title: "Der Balkon",
      color: "Blue",
      text: "Die Balkons/Baklone",
      traduccion: "El balcon / los balcones",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/balkon.jpg?alt=media&token=a063025c-796a-42cd-8dd4-868263b57387",
    },
    {
      title: "Die Tür",
      color: "Red",
      text: "Die	Türen",
      traduccion: "La puerta / las puertas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/door.jpg?alt=media&token=588f0fcf-e76e-4b52-9ede-cbc27b7ffff7",
    },
    {
      title: "Das Badezimmer",
      color: "Green",
      text: "Die Badezimmer",
      traduccion: "El baño / los baños",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/badezimmer.jpg?alt=media&token=3bc8dbf6-2386-4388-b3c5-9a25460657b5",
    },
    {
      
      title: "Der Fußboden",
      color: "Blue",
      text: "Die Fußböden",
      traduccion: "El piso /los pisos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fussboden.jpg?alt=media&token=1f82a3b8-dcd6-4edc-a010-95425183a44f",
    },
    {
      title: "Der Baum",
      color: "Blue",
      text: "Die Bäume",
      traduccion: "El arbol / los arboles",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/baum.jpg?alt=media&token=14f1466e-0596-44a1-bbbc-797f53dc9680",
    },
    {
      title: "Der	Garten",
      color: "Blue",
      text: "Die	Gärten",
      traduccion: "El jardin / los jardines",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/garten.jpg?alt=media&token=96492bba-29ad-4b78-abc3-5ce1d44c37f8",
    },
    {
      title: "Die Wand",
      color: "Red",
      text: "Die	Wände",
      traduccion: "La pared / las paredes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/wand.jpg?alt=media&token=d6bfb8b2-7385-44a0-9f2b-3d1840f3807f",
    },
    {
      title: "Das	Zimmer",
      color: "Green",
      text: "Die Zimmer",
      traduccion: "El cuarto /los cuartos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/zimmer.jpg?alt=media&token=4e24e485-7693-4956-8e0c-20732a3effc3",
    },
    {
      title: "Das	Fenster",
      color: "Green",
      text: "Die Fenster",
      traduccion: "La ventana /las ventanas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fenster.jpg?alt=media&token=f94558fe-5a65-4ab6-a0d5-6a8e9bc62914",
    },
    {
      title: "Das	Schlafzimmer",
      color: "Green",
      text: "Die	Schlafzimmer",
      traduccion: "El dormitorio / los dormitorios",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/schlafzimmer.jpg?alt=media&token=57c0f479-9356-46f5-851a-9d938c9460dc",
    },
    {
      title: "Das Flugzeug",
      color: "Green",
      text: "Die	Flugzeuge",
      traduccion: "El avión / los aviones",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/avion.jpg?alt=media&token=06fd91a8-48c6-49c0-b00c-71532cb7f8ce",
    },
    {
      title: "Die	Küche",
      color: "Red",
      text: "Die	Küchen",
      traduccion: "La cocina / las cocinas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/kuche.jpg?alt=media&token=398d702d-5052-4c65-b2fc-6f072806de0e",
    },
    {
      title: "Das	Wohnzimmer",
      color: "Green",
      text: "Die	Wohnzimmer",
      traduccion: "La sala de estar / Las salas de estar",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/wohnzimmer.jpg?alt=media&token=99f765b8-e7c4-4311-8e9a-4b5141f550cd",
    },
    {
      title: "Das	Fleisch",
      color: "Green",
      text: "Das	Fleische",
      traduccion: "La carne / las carnes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fleisch.jpg?alt=media&token=ac2a37c4-7f78-4673-8153-9e521037ae41",
    },
    {
      title: "Das Auto",
      color: "Green",
      text: "Die Autos",
      traduccion: "El auto / los autos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/Auto.jpg?alt=media&token=ed1d4323-1515-41cd-a8b7-990855ea469f",
    },
    {
      title: "Der Fisch",
      color: "Blue",
      text: "Die Fische",
      traduccion: "El pescado / los pescados",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fisch.jpg?alt=media&token=198499a8-6dc3-43da-9cce-42c7b03059e1",
    },
    {
      title: "Der	Käse",
      color: "Blue",
      text: "Die	Käse",
      traduccion: "El queso / los quesos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/kase.jpg?alt=media&token=8504e068-9f8c-4fab-8474-8ab9cce084a5",
    },
    {
      title: "Das Ei",
      color: "Green",
      text: "Die Eier",
      traduccion: "El huevo / los huevos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/ei.jpg?alt=media&token=20d715aa-5f02-434b-b73a-4a36ee608377",
    },
    {
      title: "Die	Oma/großmütter",
      color: "Red",
      text: "Die Omas/großmütter",
      traduccion: "la abuela / las abuelas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/oma.jpg?alt=media&token=30010fa0-679b-426b-a45f-4c813b40e072",
    },
    {
      title: "Die Mutter",
      color: "Red",
      text: "Die Mütter",
      traduccion: "La madre / las madres",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/mutter.jpg?alt=media&token=9368596a-94f4-4d1f-a87f-ed5129c2c1f5",
    },
    {
      title: "Der	Opa/großvater",
      color: "Blue",
      text: "Die Opas/großväter",
      traduccion: "El abuelo / los abuelos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/opa.jpg?alt=media&token=c5fe2150-28a7-4f57-8948-5b3e5a395b5d",
    },
    {
      title: "Der Vater",
      color: "Blue",
      text: "die	Väter",
      traduccion: "El padre / los padres",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/vater.jpg?alt=media&token=2fe3d2a5-95ce-45bc-8a9f-4b3018e2f870",
    },
    {
      title: "Das Abendessen",
      color: "Green",
      text: "Die Abendessen",
      traduccion: "La cena / las cenas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/abendessen.jpg?alt=media&token=7d267515-5096-444e-a107-80bc301db504",
    },
    {
      title: "Das	Frühstück",
      color: "Green",
      text: "Die	Frühstücke",
      traduccion: "El desayuno / los desayunos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/fr%C3%BChstuck.jpg?alt=media&token=84659909-0747-4c68-96fb-5cb6dfe652be",
    },
    {
      title: "Das Huhn",
      color: "Green",
      text: "Die Hühner",
      traduccion: "El pollo / los pollos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/pollo.jpg?alt=media&token=ae0c29e8-1beb-45c3-8bc6-e9a0b46997f8",
    },
    {
      title: "Das	Brot",
      color: "Green",
      text: "Die Brote",
      traduccion: "El pan/ los panes",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/brot.jpg?alt=media&token=f7c64800-549b-4d4d-8c48-f4ae208d1fb1",
    },
    {
      title: "Die Katze/ Der Kater",
      color: "Red",
      text: "Die Katzen / Kater",
      traduccion: "El gato(a)/ los(a) gatos(a)",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/katze.jpg?alt=media&token=417a3a5c-bbc7-4897-af11-c4ed2f90624c",
    },
    {
      title: "Das Mittagessen",
      color: "Green",
      text: "Die Mittagessens",
      traduccion: "El almuerzo / los almuerzos",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/mittagessen.jpg?alt=media&token=9347b887-3c5f-426f-b7c7-455d744a5e11",
    },
    {
      title: "Das Lied",
      color: "Green",
      text: "Die Lieder",
      traduccion: "La cancion / las canciones",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/lied.jpg?alt=media&token=29907764-93d0-4604-a11d-49761bb7d0b2",
    },
    {
      title: "Der Wagen",
      color: "Blue",
      text: "Die Wagen",
      traduccion: "El carro / los carros",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/wagen.jpg?alt=media&token=e8c087a6-74fa-4112-81b0-f0224ccc351f",
    },
    {
      title: "Der Hund",
      color: "Blue",
      text: "Die Hunde",
      traduccion: "El perro / los perros",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/hund.jpg?alt=media&token=320bae98-4158-4605-8f37-232fde3cc914",
    },
    {
      title: "Der	Bleistift",
      color: "Blue",
      text: "Die	Bleistifte",
      traduccion: "",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/bleistift.jpg?alt=media&token=106cd16d-38df-448b-8c72-98fc0d7b9ebf",
    },
    {
      title: "Die Schule",
      color: "Red",
      text: "Die Schulen",
      traduccion: "La escuela/ las escuelas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/schule.jpg?alt=media&token=7980df50-af0c-4494-bf34-44c9cf639519",
    },
    {
      title: "Die Liebe",
      color: "Red",
      text: "Die Lieben",
      traduccion: "El amor / los amores",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/liebe.jpg?alt=media&token=f3d6fa54-2819-4c28-a880-72d8a8a5ea77",
    },
    {
      title: "Der	Kühlschrank",
      color: "Blue",
      text: "Die	Kühlschränke",
      traduccion: "La nevera / las neveras",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/k%C3%BChlschrank.jpg?alt=media&token=e86672ec-3f73-403a-9b56-d764b208da9a",
    },
    {
      title: "Die Uhr / Stunde",
      color: "Red",
      text: "Die Uhren/ Stunden",
      traduccion: "La hora / las horas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/uhrstunde.jpg?alt=media&token=cca7f3b8-c0b0-4643-bd0f-13585de6a550",
    },
    {
      title: "Die	Flasche",
      color: "Red",
      text: "Die	Flaschen",
      traduccion: "La botella/ las botellas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/flasche.jpg?alt=media&token=c561ae66-e344-412f-89a0-387dddaf0617",
    },
    {
      title: "Das Leben",
      color: "Green",
      text: "Die Lebens",
      traduccion: "La vida / las vidas",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/vida.jpg?alt=media&token=a57eedda-7518-41c6-8679-2e817177798c",
    },
    {
      title: "Der	Geburtstag",
      color: "Blue",
      text: "Die	Geburtstage",
      traduccion: "El cumpleaños/ los cumpleaños",
      imagen:
        "https://firebasestorage.googleapis.com/v0/b/imgs-german-site.appspot.com/o/geburstag.jpg?alt=media&token=c82103f1-31c0-4bf2-95de-c7ad923a1798",
    },
    
  ]);

  return (
    <div className="sustantive-container">
      <Searchbar karte={karte} />
    </div>
  );
};

export default Sustantive;
