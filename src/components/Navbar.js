import React from "react";
import { NavLink } from "react-router-dom";
import iconimg from "../imgs/germany_18269.png";

import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";

function Navb() {
  const user = useUser();
  const firebase = useFirebaseApp();
  const logout = async () => {
    await firebase.auth().signOut();
  };

  const login = (
    <>
      <NavLink to="/login" className="nav-link">
        Log In
      </NavLink>
    </>
  );
  // const logexit = (
  //   <>
  //     <NavLink to="/" onclick={logout} className="nav-link">
  //       Log out
  //     </NavLink>
  //   </>
  // );
  return (
    <div>
      <div className="navbar">
        <NavLink className="nav-img" to="/">
          <img src={iconimg} className="nav-iconimg" alt="Logo" />
        </NavLink>
        <div className="navbar-sons">
          <NavLink to="/verben" className="nav-link">
            Verben
          </NavLink>
          <NavLink to="/sustantive" className="nav-link">
            Substantive
          </NavLink>
          <NavLink to="/adjektive" className="nav-link">
            Adjektive
          </NavLink>
          <NavLink to="/adverb" className="nav-link">
            Adverb
          </NavLink>
          <NavLink to="/VOiceComponent" className="nav-link">
            +
          </NavLink>
          {!user && login}{" "}
          {user && (
            <NavLink to="/" onClick={logout} className="nav-link">
              Log out
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navb;
