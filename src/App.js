import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Nav';
import Teeth from './components/Teeth';
import gillsAndRidges from './components/gillsAndRidges';
import Polypores from './components/Polypores';
import Others from './components/Others';
import Home from './pages/Home';
import Contact from './components/Contact';
import NoMatch from './pages/NoMatch';
import { keepTheme } from './utils/theme';

function App() {
  useEffect(() => {
    keepTheme();
});

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
      <Route component={NoMatch} />
    </Switch>
  </Router>
  );
}

export default App;