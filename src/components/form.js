import React from "react";
import "firebase/auth";
import "firebase/database";
import firebase from "firebase/app";
import { useUser } from "reactfire";
import "./fbconfig";
//import "./storagefiles";
export default (props) => {
  const user = useUser();
  //const firebase = useFirebaseApp();
  //const auth = firebase.auth();
  const db = firebase.database();

  function prueba(e) {
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

    // task.on(
    //   "state_changed",
    //   null,
    //   (err) => {
    //     console.log(err);
    //   },
    //   () => {
    //     task.snapshot.ref.getDownloadURL().then((url) => {
    //       alert(url);
    //       userData.img = url;
    //       db.ref("/objetos/").set(userData);
    //     });
    //   }
    // );
  }
  return (
    <div className="auth-div">
      {user && (
        <form
          id="form-name"
          name="form-name"
          className="formulario-auth box-form"
          onSubmit={prueba}
        >
          <h3 id="form-title"> Añadir palabras! </h3>
          <label htmlFor="text-title"> Titulo: </label>

          <input type="text" id="text-title" name="text-title" required />
          <label htmlFor="text-plural"> Plural: </label>
          <input type="text" id="text-plural" name="text-plural" required />
          <label for="img">Seleccionar imagen:</label>
          <input type="file" id="img" name="img" accept="image/*"></input>
          <label htmlFor="text-trd"> Traducción: </label>
          <input type="text" name="" id="text-trd" required />
          <label for="cars">Elige un color:</label>

          <select name="text-color" id="text-color">
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
          </select>

          <button type="submit" className="button-verb button ">
            Agregar
          </button>
        </form>
      )}
      {!user && (
        <div></div>
        //<Route component={Page404} />
      )}
    </div>
  );
};