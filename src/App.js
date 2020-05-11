import React from 'react';
import Navb from './components/Navbar';
import Sustantive from './components/Sustantive';
import Landing from './components/Landing';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Verben from './components/Verben';

function App() {
  return (
    <Router>
      <Navb></Navb>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/sustantive" component={Sustantive}></Route>
        <Route path="/verben" component={Verben}></Route>
      </Switch>
    </Router>
  );
}

export default App;
