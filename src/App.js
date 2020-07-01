import React from "react";
import Navb from "./components/Navbar";
import Sustantive from "./components/Sustantive";
import Landing from "./components/Landing";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Verben from "./components/Verben";
import ScrollToTop from "./components/ScrollToTop";
import Adjektive from "./components/Adjektive";
import Adverb from "./components/Adverb";
import Auth from "./components/Auth";
import Form from "./components/form";
import VoiceComponent from "./components/VoiceComponent";
const Page404 = ({ location }) => (
  <div className="not-found">
    <h1>404 ERROR</h1>
    <h2>
      Oops! This Page <code>{location.pathname}</code> Could Not Be Found
    </h2>
    <p>
      Sorry but the page you are looking for does not exist, have been removed,
      name changed or is temporarily unavailable.
    </p>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />

      <Switch>
        <Route exact path="/">
          <Navb></Navb>
          <Landing></Landing>
        </Route>

        <Route exact path="/sustantive">
          <Navb></Navb>
          <Sustantive></Sustantive>
        </Route>
        <Route exact path="/verben">
          <Navb></Navb>
          <Verben></Verben>
        </Route>
        <Route exact path="/adjektive">
          <Navb></Navb>
          <Adjektive></Adjektive>
        </Route>
        <Route exact path="/adverb">
          <Navb></Navb>
          <Adverb></Adverb>
        </Route>
        <Route exact path="/login">
          <Auth></Auth>
        </Route>
        <Route exact path="/addword">
          <Form></Form>
        </Route>
        <Route exact path="/VoiceComponent">
          <VoiceComponent></VoiceComponent>
        </Route>
        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;
