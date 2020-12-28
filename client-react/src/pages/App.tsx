import '../sass/main.scss';
import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Home from './Home/Home';
import Team from './Team/Team';
import Support from '../pages/Support/Spport';
import history from '../helper/history';

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/team" component={Team} />
        <Route exact path="/support" component={Support} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
