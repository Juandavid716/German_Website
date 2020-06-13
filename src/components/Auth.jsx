import React, { useState } from "react";
import "firebase/auth";
import { Link } from "react-router-dom";
import { useFirebaseApp, useUser } from "reactfire";

export default (props) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const firebase = useFirebaseApp();
  const user = useUser();

  // Creación de usuario
  // const submit = async () => {
  //   await firebase.auth().createUserWithEmailAndPassword(email, pass);
  // };
  // Log in

  const login = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, pass);
  };

  return (
    <div className="auth-div">
      {!user && (
        <div className="formulario-auth box-form">
          <h3> Bienvenido </h3>
          <label htmlFor="email"> Correo electrónico</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
            required
          />
          <label htmlFor="password">Contraseña </label>
          <input
            type="password"
            id="password"
            onChange={(e) => setpass(e.target.value)}
            required
          />
          <button className="button-verb button " onClick={login}>
            Iniciar sesión
          </button>
        </div>
      )}
      {user && (
        <Link to="/" className="button-notlog button">
          Volver al menú principal
        </Link>
      )}
    </div>
  );
};
