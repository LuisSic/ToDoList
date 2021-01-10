import '../sass/main.scss';
import React from 'react';
import history from '../helper/history';
import { Router, Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { Team } from './Team/Team';
import { Support } from '../pages/Support/Spport';
import { Task } from './Task';
import { Pricing } from '../pages/Pricing/Pricing';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Routes } from '../Routes';
import { ScrollToTopControlller } from '../components/Scroll/ScrollTop';
import { ScrollArrow } from '../components/Scroll/ScrollArrow';
const App = () => {
  return (
    <Router history={history}>
      <ScrollToTopControlller />
      <Header />
      <Switch>
        <Route exact path={Routes.PRICING} component={Pricing} />
        <Route exact path={Routes.TEAM} component={Team} />
        <Route exact path={Routes.SUPPORT} component={Support} />
        <Route exact path={Routes.TASK} component={Task} />
        <Route path={Routes.HOME} component={Home} />
      </Switch>
      <Footer />
      <ScrollArrow />
    </Router>
  );
};

export default App;
