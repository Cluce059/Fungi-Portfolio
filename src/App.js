import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Nav';
import Boletes from './components/pages/Boletes';
import Gilled from './components/pages/Gilled';
import Polypores from './components/pages/Polypores';
import Unclassified from './components/pages/Unclassified';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/Gilled' component={Gilled} />
      <Route path='/Polypores' component={Polypores} />
      <Route path='/Boletes' component={Boletes} />
      <Route path='/Unclassified' component={Unclassified} />
      <Route path='/Contact' component={Contact} />
    </Switch>
  </Router>
  );
}

export default App;