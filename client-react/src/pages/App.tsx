import '../sass/main.scss';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import history from '../helper/history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
