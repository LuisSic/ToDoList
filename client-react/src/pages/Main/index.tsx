import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from '../Home/Home';
import { Team } from '../Team/Team';
import { Support } from '../Support/Spport';
import { Task } from '../Task';
import { Pricing } from '../Pricing/Pricing';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Routes } from '../../Routes';
export const Main = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path={Routes.PRICING} component={Pricing} />
        <Route exact path={Routes.TEAM} component={Team} />
        <Route exact path={Routes.SUPPORT} component={Support} />
        <Route exact path={Routes.TASK} component={Task} />
        <Route path={Routes.HOME} component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};
