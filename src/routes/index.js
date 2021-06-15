import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import Home from '../pages/home';
import Store from '../pages/store';
import Navigation from '../components/navigation/index';
import Cart from '../pages/cart';
import Login from '../pages/login';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Navigation>
        <Route isProtect exact path="/" component={Home} />
        <Route isProtect exact path="/store" component={Store} />
        <Route isProtect exact path="/cart" component={Cart} />
      </Navigation>
    </Switch>
  );
};

export default Routes;
