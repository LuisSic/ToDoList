import '../sass/main.scss';
import React from 'react';
import history from '../helper/history';
import { Router, Route, Switch } from 'react-router-dom';
import { Task } from './Task';
import { Routes } from '../Routes';
import { ScrollToTopControlller } from '../components/Scroll/ScrollTop';
import { ScrollArrow } from '../components/Scroll/ScrollArrow';
import { Main } from './Main';
const App = () => {
  return (
    <Router history={history}>
      <ScrollToTopControlller />
      <Switch>
        <Route exact path={`${Routes.TASK}/:id?`} component={Task} />
        <Route path={Routes.HOME} component={Main} />
      </Switch>
      <ScrollArrow />
    </Router>
  );
};

export default App;
