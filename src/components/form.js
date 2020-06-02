import React from "react";
import "firebase/auth";
import { useUser } from "reactfire";

export default (props) => {
  const user = useUser();

  return (
    <div className="auth-div">
      {user && (
        <div className="formulario-auth box-form">
          <h3 id="form-title"> Añadir palabras! </h3>
          <label htmlFor="text-title"> Titulo: </label>
          <input type="text" id="text-title" required />
          <label htmlFor="text-plural"> Plural: </label>
          <input type="text" id="text-plural" required />
          <label for="img">Seleccionar imagen:</label>
          <input type="file" id="img" name="img" accept="image/*"></input>
          <label htmlFor="text-trd"> Traducción: </label>
          <input type="text" id="text-trd" required />
          <button className="button-verb button ">Agregar</button>
        </div>
      )}
      {!user && (
        <div></div>
        //<Route component={Page404} />
      )}
    </div>
  );
};
