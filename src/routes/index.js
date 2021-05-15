import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/home';
import Navigation from '../components/navigation/index';

const Routes = () => {
  return (
    <Switch>
      <Navigation>
        <Route exact path="/" component={Home} />
      </Navigation>
    </Switch>
  );
};

export default Routes;
