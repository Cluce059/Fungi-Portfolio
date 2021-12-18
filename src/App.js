import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Nav';
import Teeth from './components/pages/Teeth';
import gillsAndRidges from './components/pages/gillsAndRidges';
import Polypores from './components/pages/Polypores';
import Others from './components/pages/Others';
import Home from './components/pages/Home';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/gillsAndRidges' component={gillsAndRidges} />
      <Route path='/Polypores' component={Polypores} />
      <Route path='/Teeth' component={Teeth} />
      <Route path='/Others' component={Others} />
      <Route path='/Contact' component={Contact} />
    </Switch>
  </Router>
  );
}

export default App;