import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/home';
import Turmas from '../pages/turmas';
import Navigation from '../components/navigation/index';

const Routes = () => {
  return (
    <Switch>
      <Navigation>
        <Route exact path="/" component={Home} />
        <Route exact path="/turmas" component={Turmas} />
      </Navigation>
    </Switch>
  );
};

export default Routes;
