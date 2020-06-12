import React, { useState } from "react";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
import firebase from "firebase/app";
import { useUser } from "reactfire";
import "./fbconfig";

//import "./storagefiles";
export default (props) => {
  const [verb, setverb] = useState({ adj: false, verb: false, sus: true });
  const user = useUser();
  //const firebase = useFirebaseApp();
  //const auth = firebase.auth();
  const db = firebase.database();

  function addSus(e) {
    e.preventDefault();
    const form = document.forms[0];

    //event.preventDefault();
    //var nameValue = document.getElementById("text-title").value;

    const file = form["img"].files[0];
    const userData = {
      title: form["text-title"].value,
      color: form["text-color"].value,
      text: form["text-plural"].value,
      traduccion: form["text-trd"].value,
      imagen: "",
    };

    const refStorage = firebase.storage().ref(`images/${file.name}`);

    const task = refStorage.put(file);
    task.on(
      firebase.storage.TaskEvent.STATE_CHANGED,
      function (snapshot) {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function (error) {
        // Handle unsuccessful uploads
      },
      function () {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        task.snapshot.ref.getDownloadURL().then(function (downloadURL) {
          userData.imagen = downloadURL;
          db.ref(`objetos/${userData.title}`).set(userData);
          console.log("File available at", downloadURL);
          var elements = document.getElementsByTagName("input");
          for (var ii = 0; ii < elements.length; ii++) {
            if (elements[ii].type === "text" || elements[ii].type === "file") {
              elements[ii].value = "";
            }
          }
        });
      }
    );
  }
  function addAdj(e) {
    e.preventDefault();
    const form = document.forms[0];

    //event.preventDefault();
    //var nameValue = document.getElementById("text-title").value;

    const userData = {
      c1: form["text-c1"].value,
      c2: form["text-c2"].value,
    };

    db.ref(`adj/${userData.title}`).set(userData);
    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
      if (elements[ii].type === "text") {
        elements[ii].value = "";
      }
    }
  }
  function addVerb(e) {
    e.preventDefault();
    const form = document.forms[0];

    //event.preventDefault();
    //var nameValue = document.getElementById("text-title").value;

    const userData = {
      title: form["text-title-verb"].value,
      mean: form["text-mean"].value,
      c1: "Ich " + form["text-ich"].value,
      c2: "Du " + form["text-du"].value,
      c3: "Er/sie/es " + form["text-er"].value,
      c4: "Ihr " + form["text-ihr"].value,
      c5: "Wir/Sie " + form["text-wir"].value,
      color: form["text-color-verb"].value,
    };

    db.ref(`verbos/${userData.title}`).set(userData);
    var elements = document.getElementsByTagName("input");
    for (var ii = 0; ii < elements.length; ii++) {
      if (elements[ii].type === "text") {
        elements[ii].value = "";
      }
    }
  }
  function seleccion(e) {
    //console.log(e);

    if (e === "Verbo") {
      setverb({ adj: false, verb: true, sus: false });
      console.log(true);
    } else if (e === "Sustantivo") {
      setverb({ adj: false, verb: false, sus: true });
    } else if (e === "Adjetivo") {
      setverb({ adj: true, verb: false, sus: false });
    }
  }

  return (
    <div>
      {user && verb.sus && (
        <div className="auth-div">
          <form
            id="form-name"
            name="form-name"
            className="formulario-auth box-form"
            onSubmit={addSus}
          >
            <h3 id="form-title"> Añadir palabras! </h3>
            <label htmlFor="text-tipo-1">
              Elige el tipo de palabra a agregar:
            </label>

            <select
              name="text-tipo"
              id="text-tipo-1"
              onChange={(e) => seleccion(e.target.value)}
            >
              <option value="Sustantivo">Sustantivo</option>
              <option value="Verbo">Verbo</option>
              <option value="Adjetivo">Adjetivo</option>
            </select>

            <label htmlFor="text-title"> Titulo: </label>

            <input type="text" id="text-title" name="text-title" required />
            <label htmlFor="text-plural"> Plural: </label>
            <input type="text" id="text-plural" name="text-plural" required />
            <label htmlFor="img">Seleccionar imagen:</label>
            <input type="file" id="img" name="img" accept="image/*"></input>
            <label htmlFor="text-trd"> Traducción: </label>
            <input type="text" name="" id="text-trd" required />
            <label htmlFor="text-color">Elige un color:</label>

            <select name="text-color" id="text-color">
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Green">Green</option>
            </select>

            <button type="submit" className="button-verb button ">
              Agregar
            </button>
          </form>
        </div>
      )}
      {user && verb.verb && (
        <div className="auth-div">
          <form
            id="form-name"
            name="form-name"
            className="formulario-auth box-form"
            onSubmit={addVerb}
          >
            <h3 id="form-title"> Añadir palabras! </h3>
            <div className="d-flex w-100">
              <div className="w-50">
                <label htmlFor="text-tipo-2">Tipo de palabra:</label>

                <select
                  name="text-tipo"
                  id="text-tipo-2"
                  onChange={(e) => seleccion(e.target.value)}
                >
                  <option value="Verbo">Verbo</option>
                  <option value="Sustantivo">Sustantivo</option>
                  <option value="Adjetivo">Adjetivo</option>
                </select>
              </div>

              <div className="w-50">
                <label htmlFor="text-tipo-3">Elige un color:</label>
                <select name="text-color-verb" id="text-tipo-3">
                  <option value="purple">purple</option>
                  <option value="Rose">Rose</option>
                  <option value="Green">Green</option>
                </select>
              </div>
            </div>
            <label htmlFor="text-title-verb"> Titulo: </label>
            <input
              type="text"
              id="text-title-verb"
              name="text-title-verb"
              required
            />
            <label htmlFor="text-mean"> Significado: </label>
            <input type="text" id="text-mean" name="text-mean" required />

            <label htmlFor="text-ich"> ich: </label>
            <input type="text" id="text-ich" name="text-ich" required />
            <label htmlFor="text-du"> du: </label>
            <input type="text" id="text-du" name="text-du" required />
            <label htmlFor="text-er"> er/sie/es: </label>
            <input type="text" id="text-er" name="text-er" required />
            <label htmlFor="text-ihr"> ihr: </label>
            <input type="text" name="text-ihr" id="text-ihr" required />
            <label htmlFor="text-wir"> wir/Sie: </label>
            <input type="text" name="text-wir" id="text-wir" required />

            <button type="submit" className="button-verb button ">
              Agregar
            </button>
          </form>
        </div>
        //<Route component={Page404} />
      )}{" "}
      {user && verb.adj && (
        <div className="auth-div">
          <form
            id="form-name"
            name="form-name"
            className="formulario-auth box-form"
            onSubmit={addAdj}
          >
            <h3 id="form-title"> Añadir palabras! </h3>
            <label htmlFor="text-tipo-4">
              Elige el tipo de palabra a agregar:
            </label>
            <div className="text-tipo">
              <select
                name="text-tipo"
                id="text-tipo-4"
                onChange={(e) => seleccion(e.target.value)}
              >
                <option value="Verbo">Verbo</option>
                <option value="Sustantivo">Sustantivo</option>
                <option value="Adjetivo">Adjetivo</option>
              </select>
            </div>

            <label htmlFor="text-c1"> Adjetivo: </label>
            <input type="text-c1" id="text-c1" name="text-c1" required />

            <label htmlFor="text-c2"> Traduccion: </label>
            <input type="text-c2" id="text-c2" name="text-c2" required />

            <button type="submit" className="button-verb button ">
              Agregar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
