import React, { Component } from "react";
import firebase from "firebase/app";
import { Searchverben } from "./Searchverben";
import "firebase/database";
class Verben extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
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
          c5: "Wir/Sie möchten",
          color: "Rose",
        },
        {
          title: "Müssen",
          mean: "Deber",
          c1: "Ich muss",
          c2: " Du musst",
          c3: "Er/sie/es muss",
          c4: "Ihr müsst",
          c5: "Wir/Sie müssen",
          color: "Rose",
        },
        {
          title: "Dürfen",
          mean: "Permitir/dejar (May)",
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
        {
          title: "Besuchen",
          mean: "Visitar",
          c1: "Ich besuche",
          c2: " Du besuchst",
          c3: "Er/sie/es besucht",
          c4: "Ihr besucht",
          c5: "Wir/Sie besuchen",
          color: "",
        },
        {
          title: "Lernen",
          mean: "Aprender",
          c1: "Ich lerne",
          c2: " Du lernst",
          c3: "Er/sie/es lernt",
          c4: "Ihr lernt",
          c5: "Wir/Sie lernen",
          color: "",
        },
        {
          title: "Reden",
          mean: "Hablar",
          c1: "Ich rede",
          c2: " Du redest",
          c3: "Er/sie/es redet",
          c4: "Ihr redet",
          c5: "Wir/Sie reden",
          color: "",
        },
        {
          title: "Studieren",
          mean: "Estudiar",
          c1: "Ich studiere",
          c2: " Du studierest",
          c3: "Er/sie/es studiert",
          c4: "Ihr studiert",
          c5: "Wir/Sie studieren",
          color: "",
        },
        {
          title: "Heißen",
          mean: "Llamarse",
          c1: "Ich heiße",
          c2: " Du heißt",
          c3: "Er/sie/es heißt",
          c4: "Ihr heißt",
          c5: "Wir/Sie heißen",
          color: "",
        },
        {
          title: "Arbeiten",
          mean: "Trabajar",
          c1: "Ich arbeite",
          c2: " Du arbeitest",
          c3: "Er/sie/es arbeitet",
          c4: "Ihr arbeitet",
          c5: "Wir/Sie arbeiten",
          color: "",
        },
        {
          title: "Fahren",
          mean: "Conducir/ir",
          c1: "Ich fahre",
          c2: " Du fährest",
          c3: "Er/sie/es fährt",
          c4: "Ihr fahrt",
          c5: "Wir/Sie fahren",
          color: "purple",
        },
        {
          title: "Finden",
          mean: "Encontrar",
          c1: "Ich finde",
          c2: " Du findest",
          c3: "Er/sie/es findet",
          c4: "Ihr findet",
          c5: "Wir/Sie finden",
          color: "",
        },
        {
          title: "Sehen",
          mean: "Ver",
          c1: "Ich sehe",
          c2: " Du siehst",
          c3: "Er/sie/es sieht",
          c4: "Ihr seht",
          c5: "Wir/Sie sehen",
          color: "purple",
        },
        {
          title: "Sagen",
          mean: "Decir",
          c1: "Ich sage",
          c2: " Du sagest",
          c3: "Er/sie/es sagt",
          c4: "Ihr sagt",
          c5: "Wir/Sie sagen",
          color: "",
        },
        {
          title: "Spielen",
          mean: "Jugar",
          c1: "Ich spiele",
          c2: " Du spielst",
          c3: "Er/sie/es spielt",
          c4: "Ihr spielt",
          c5: "Wir/Sie spielen",
          color: "",
        },
        {
          title: "Denken",
          mean: "Pensar",
          c1: "Ich denke",
          c2: " Du denkst",
          c3: "Er/sie/es denkt",
          c4: "Ihr denkt",
          c5: "Wir/Sie denken",
          color: "",
        },
        {
          title: "Glauben",
          mean: "Creer/pensar",
          c1: "Ich glaube",
          c2: " Du glaubst",
          c3: "Er/sie/es glaubt",
          c4: "Ihr glaubt",
          c5: "Wir/Sie glauben",
          color: "",
        },
        {
          title: "Lassen",
          mean: "Mandar a hacer algo/permitir",
          c1: "Ich lasse",
          c2: " Du lässt",
          c3: "Er/sie/es lässt",
          c4: "Ihr lasst",
          c5: "Wir/Sie lassen",
          color: "Rose",
        },
        {
          title: "Reisen",
          mean: "Viajar",
          c1: "Ich reise",
          c2: " Du reist",
          c3: "Er/sie/es reist",
          c4: "Ihr reist",
          c5: "Wir/Sie reisen",
          color: "",
        },
        {
          title: "Verstehen",
          mean: "Entender",
          c1: "Ich verstehe",
          c2: " Du verstehst",
          c3: "Er/sie/es versteht",
          c4: "Ihr versteht",
          c5: "Wir/Sie verstehen",
          color: "",
        },
        {
          title: "Wollen",
          mean: "Querer",
          c1: "Ich will",
          c2: " Du willst",
          c3: "Er/sie/es will",
          c4: "Ihr wollt",
          c5: "Wir/Sie wollen",
          color: "Rose",
        },
        {
          title: "Sollen",
          mean: "Deber(sugerencia) (Should)",
          c1: "Ich soll",
          c2: " Du sollst",
          c3: "Er/sie/es soll",
          c4: "Ihr sollt",
          c5: "Wir/Sie sollen",
          color: "Rose",
        },
        {
          title: "Mögen",
          mean: "Gustar",
          c1: "Ich mag",
          c2: " Du magst",
          c3: "Er/sie/es mag",
          c4: "Ihr mögt",
          c5: "Wir/Sie mögen",
          color: "Rose",
        },
        {
          title: "Kochen",
          mean: "Cocinar",
          c1: "Ich koche",
          c2: " Du kochest",
          c3: "Er/sie/es kocht",
          c4: "Ihr kocht",
          c5: "Wir/Sie kochen",
          color: "",
        },
        {
          title: "Suchen",
          mean: "Buscar",
          c1: "Ich suche",
          c2: " Du suchst",
          c3: "Er/sie/es sucht",
          c4: "Ihr sucht",
          c5: "Wir/Sie suchen",
          color: "",
        },
        {
          title: "Waschen",
          mean: "Lavar",
          c1: "Ich wasche",
          c2: " Du wäschst",
          c3: "Er/sie/es wäscht",
          c4: "Ihr wascht",
          c5: "Wir/Sie waschen",
          color: "purple",
        },
        {
          title: "Duschen",
          mean: "Duchar",
          c1: "Ich dusche",
          c2: " Du duschst",
          c3: "Er/sie/es duscht",
          c4: "Ihr duscht",
          c5: "Wir/Sie duschen",
          color: "",
        },
        {
          title: "lesen",
          mean: "Leer",
          c1: "Ich lese",
          c2: " Du liest",
          c3: "Er/sie/es liest",
          c4: "Ihr lest",
          c5: "Wir/Sie lesen",
          color: "purple",
        },
        {
          title: "Essen",
          mean: "Comer",
          c1: "Ich esse",
          c2: " Du isst",
          c3: "Er/sie/es isst",
          c4: "Ihr esst",
          c5: "Wir/Sie essen",
          color: "purple",
        },
        {
          title: "Schlafen",
          mean: "Dormir",
          c1: "Ich schlafe",
          c2: " Du schälfst",
          c3: "Er/sie/es schälft",
          c4: "Ihr schlaft",
          c5: "Wir/Sie schlafen",
          color: "purple",
        },
        {
          title: "Laufen",
          mean: "Correr",
          c1: "Ich laufe",
          c2: " Du läufst",
          c3: "Er/sie/es läuft",
          c4: "Ihr lauft",
          c5: "Wir/Sie laufen",
          color: "purple",
        },
        {
          title: "Helfen",
          mean: "Ayudar",
          c1: "Ich helfe",
          c2: " Du hilfst",
          c3: "Er/sie/es hilft",
          c4: "Ihr helft",
          c5: "Wir/Sie helfen",
          color: "purple",
        },
        {
          title: "Tragen",
          mean: "Llevar",
          c1: "Ich trage",
          c2: " Du trägst",
          c3: "Er/sie/es trägt",
          c4: "Ihr tragt",
          c5: "Wir/Sie tragen",
          color: "purple",
        },
        {
          title: "Fordern",
          mean: "Exigir/reclamar",
          c1: "Ich trage",
          c2: " Du forderst",
          c3: "Er/sie/es fordert",
          c4: "Ihr fordern",
          c5: "Wir/Sie  fordert",
          color: "",
        },
        {
          title: "ändern",
          mean: "Cambiar",
          c1: "Ich ändere",
          c2: " Du änderst",
          c3: "Er/sie/es ändert",
          c4: "Ihr ändert",
          c5: "Wir/Sie  ändern",
          color: "",
        },
        {
          title: "Brauchen",
          mean: "Necesitar",
          c1: "Ich brauche",
          c2: " Du brauchst",
          c3: "Er/sie/es braucht",
          c4: "Ihr braucht",
          c5: "Wir/Sie  brauchen",
          color: "",
        },
        {
          title: "Vergessen",
          mean: "Olvidar",
          c1: "Ich vergesse",
          c2: " Du vergisst",
          c3: "Er/sie/es vergisst",
          c4: "Ihr braucht",
          c5: "Wir/Sie  brauchen",
          color: "",
        },
        {
          title: "Versuchen",
          mean: "Intentar",
          c1: "Ich versuche",
          c2: " Du versuchst",
          c3: "Er/sie/es versucht",
          c4: "Ihr versucht",
          c5: "Wir/Sie  versuchen",
          color: "",
        },
        {
          title: "Bestellen",
          mean: "Ordenar",
          c1: "Ich bestelle",
          c2: " Du bestellst",
          c3: "Er/sie/es bestellt",
          c4: "Ihr bestellt",
          c5: "Wir/Sie bestellen",
          color: "",
        },
        {
          title: "Auf|stehen",
          mean: "Levantarse",
          c1: "Ich stehe auf",
          c2: " Du stehst auf",
          c3: "Er/sie/es steht auf",
          c4: "Ihr steht auf",
          c5: "Wir/Sie stehen auf",
          color: "Green",
        },
        {
          title: "An|fahren",
          mean: "Alejarse(Expulsar)",
          c1: "Ich fahre an",
          c2: " Du fährst an",
          c3: "Er/sie/es fährt an",
          c4: "Ihr fährt an",
          c5: "Wir/Sie fahren an",
          color: "Green",
        },
        {
          title: "Bereiten",
          mean: "Preparar",
          c1: "Ich bereite",
          c2: " Du bereitest",
          c3: "Er/sie/es bereitet",
          c4: "Ihr bereitet",
          c5: "Wir/Sie bereiten",
          color: "",
        },
        {
          title: "An|fangen",
          mean: "Empezar",
          c1: "Ich fange an",
          c2: " Du fängst an",
          c3: "Er/sie/es fängt an",
          c4: "Ihr fangt an",
          c5: "Wir/Sie fangen an",
          color: "Green",
        },
        {
          title: "Beginnen",
          mean: "Empezar",
          c1: "Ich beginne",
          c2: " Du beginnst",
          c3: "Er/sie/es beginnt",
          c4: "Ihr beginnt",
          c5: "Wir/Sie beginnen",
          color: "",
        },
        {
          title: "fort|setzen",
          mean: "Continuar",
          c1: "Ich setze fort",
          c2: " Du setzt fort",
          c3: "Er/sie/es setzt fort",
          c4: "Ihr setzt fort",
          c5: "Wir/Sie setzen fort",
          color: "Green",
        },
        {
          title: "Geben",
          mean: "Dar",
          c1: "Ich gebe",
          c2: " Du gibst",
          c3: "Er/sie/es gibt",
          c4: "Ihr setzt gebt",
          c5: "Wir/Sie geben",
          color: "Rose",
        },

        {
          title: "Folgen",
          mean: "seguir",
          c1: "Ich folge",
          c2: " Du folgst",
          c3: "Er/sie/es folgt",
          c4: "Ihr setzt folgt",
          c5: "Wir/Sie folgen",
          color: "",
        },
        {
          title: "Kämmen",
          mean: "Peinar",
          c1: "Ich kämme",
          c2: " Du kämmst",
          c3: "Er/sie/es kämmt",
          c4: "Ihr setzt kämmt",
          c5: "Wir/Sie kämmen",
          color: "",
        },
        {
          title: "Rennen",
          mean: "Correr",
          c1: "Ich renne",
          c2: " Du rennst",
          c3: "Er/sie/es rennt",
          c4: "Ihr setzt rennt",
          c5: "Wir/Sie rennen",
          color: "",
        },
        {
          title: "Sich setzen",
          mean: "Sentarse (Acusativo)",
          c1: "Ich setze mich",
          c2: " Du setzt dich",
          c3: "Er/sie/es setzt sich",
          c4: "Ihr setzt euch",
          c5: "Wir/Sie setzen uns/sich",
          color: "Green",
        },
        {
          title: "Setzen",
          mean: "Poner",
          c1: "Ich setze ",
          c2: " Du setzt ",
          c3: "Er/sie/es setzt ",
          c4: "Ihr setzt ",
          c5: "Wir/Sie setzen",
          color: "",
        },
        {
          title: " ändern",
          mean: "Cambiar",
          c1: "Ich ändere ",
          c2: " Du änderst ",
          c3: "Er/sie/es ändert ",
          c4: "Ihr ändert ",
          c5: "Wir/Sie ändern",
          color: "",
        },
        {
          title: "Grüßen",
          mean: "Saludar",
          c1: "Ich grüßen ",
          c2: " Du grüßt ",
          c3: "Er/sie/es grüßt ",
          c4: "Ihr grüßt ",
          c5: "Wir/Sie grüßen",
          color: "",
        },
        {
          title: "Bezahlen",
          mean: "Pagar",
          c1: "Ich bezahle",
          c2: " Du bezahlst ",
          c3: "Er/sie/es bezahlt",
          c4: "Ihr bezahlt ",
          c5: "Wir/Sie bezahlen",
          color: "",
        },
        {
          title: "Aus|gehen",
          mean: "Salir",
          c1: "Ich gehe aus",
          c2: " Du gehst aus ",
          c3: "Er/sie/es geht aus",
          c4: "Ihr geht aus ",
          c5: "Wir/Sie gehen aus",
          color: "Green",
        },
        {
          title: "Treffen",
          mean: "Reunirse",
          c1: "Ich treffe",
          c2: " Du triffst",
          c3: "Er/sie/es trifft",
          c4: "Ihr trefft",
          c5: "Wir/Sie treffen",
          color: "Green",
        },
        {
          title: "Kennen",
          mean: "Conocerse",
          c1: "Ich kenne",
          c2: " Du kennst",
          c3: "Er/sie/es kennt",
          c4: "Ihr kennt",
          c5: "Wir/Sie kennen",
          color: "",
        },
        {
          title: "Ab|sagen",
          mean: "Cancelar",
          c1: "Ich sage ab",
          c2: " Du sagst ab",
          c3: "Er/sie/es sagt ab",
          c4: "Ihr sagt ab",
          c5: "Wir/Sie sagen ab",
          color: "Green",
        },
        {
          title: "Lieben",
          mean: "amar",
          c1: "Ich liebe",
          c2: " Du liebst",
          c3: "Er/sie/es liebt",
          c4: "Ihr liebt",
          c5: "Wir/Sie lieben",
          color: "",
        },
        {
          title: "Fallen",
          mean: "caerse",
          c1: "Ich falle",
          c2: " Du fallst",
          c3: "Er/sie/es fallt",
          c4: "Ihr fallt",
          c5: "Wir/Sie fallen",
          color: "",
        },
        {
          title: "Backen",
          mean: "hornear",
          c1: "Ich backe",
          c2: " Du backst",
          c3: "Er/sie/es backt",
          c4: "Ihr backt",
          c5: "Wir/Sie backen",
          color: "",
        },
        {
          title: "üben",
          mean: "practicar",
          c1: "Ich übe",
          c2: " Du übst",
          c3: "Er/sie/es übt",
          c4: "Ihr übt",
          c5: "Wir/Sie üben",
          color: "",
        },
        {
          title: "Schenken",
          mean: "Regalar",
          c1: "Ich schenke",
          c2: " Du schenkst",
          c3: "Er/sie/es schenkt",
          c4: "Ihr schenkt",
          c5: "Wir/Sie schenken",
          color: "",
        },
        {
          title: "Behalten",
          mean: "guardar/mantener",
          c1: "Ich behalte",
          c2: " Du behältst",
          c3: "Er/sie/es behält",
          c4: "Ihr behalt",
          c5: "Wir/Sie behalten",
          color: "Rose",
        },
        {
          title: "Benutzen",
          mean: "usar",
          c1: "Ich benutze",
          c2: " Du benutzt",
          c3: "Er/sie/es benutzen",
          c4: "Ihr benutzt",
          c5: "Wir/Sie benutzen",
          color: "",
        },
        {
          title: "sitzen",
          mean: "estar sentado (Dativo)",
          c1: "Ich sitze",
          c2: " Du sitzt",
          c3: "Er/sie/es sitzt",
          c4: "Ihr sitzt",
          c5: "Wir/Sie sitzen",
          color: "",
        },
        {
          title: "stehen",
          mean: "estar de pie (Dativo)",
          c1: "Ich stehe",
          c2: " Du stehst",
          c3: "Er/sie/es steht",
          c4: "Ihr steht",
          c5: "Wir/Sie stehen",
          color: "",
        },
        {
          title: "liegen",
          mean: "estar acostado /puesto de forma horizontal (dativo)",
          c1: "Ich liege",
          c2: " Du liegst",
          c3: "Er/sie/es liegt",
          c4: "Ihr liegt",
          c5: "Wir/Sie liegen",
          color: "",
        },
        {
          title: "legen",
          mean: "poner de forma horizontal (acusativo)",
          c1: "Ich lege",
          c2: " Du legst",
          c3: "Er/sie/es legt",
          c4: "Ihr legt",
          c5: "Wir/Sie legen",
          color: "",
        },
        {
          title: "stellen",
          mean: "poner de pie (acusativo)",
          c1: "Ich stelle",
          c2: " Du stellst",
          c3: "Er/sie/es stellt",
          c4: "Ihr stellt",
          c5: "Wir/Sie stellen",
          color: "",
        },
        {
          title: "Hängen",
          mean: "colgar (dativo) / estar colgado (akk)",
          c1: "Ich hänge",
          c2: " Du hängst",
          c3: "Er/sie/es hängt",
          c4: "Ihr hängt",
          c5: "Wir/Sie hängen",
          color: "",
        },
      ],
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    var data1 = [];
    var data2 = {};
    var fireBaseResponse = firebase.database().ref("verbos/");
    var contador = this.state.list.length;
    var stateCopy = Object.assign({}, this.state);
    fireBaseResponse.once("value").then((snapshot) => {
      snapshot.forEach((item, index) => {
        var temp = item.val();

        data2 = temp;
        data1.push(data2);
        stateCopy.list[contador] = temp;

        contador++;
        return false;
      });

      this.setState(stateCopy);
    });
  };
  render() {
    return (
      <div className="sustantive-container">
        <Searchverben karte={this.state.list} />
      </div>
    );
  }
}

export default Verben;
