import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./css/fonts.css";
import "./index.css";
import "./css/nav.css";
import "./css/box.css";
import App from "./App";
import firebaseConfig from "./components/fbconfig";
import { FirebaseAppProvider } from "reactfire";
ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <Suspense fallback={"Connecting"}>
        <App className="proof" />
      </Suspense>
    </React.StrictMode>
    ,
  </FirebaseAppProvider>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
