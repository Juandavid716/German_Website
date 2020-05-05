import React from 'react';
import Navb from './components/Navbar';
import Sustantive from './components/Sustantive';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navb></Navb>
      <Switch>
        <Route path="/" exact component={Sustantive} />
      </Switch>
    </Router>
  );
}

export default App;
