// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import PokemonDetails from './components/PokemonDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/pokemon/:id" component={PokemonDetails} />
      </Switch>
    </Router>
  );
}

export default App;
