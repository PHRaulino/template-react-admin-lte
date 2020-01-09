import React from 'react';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { DashBoard } from '../pages/index.js'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/dashboard' component={DashBoard} />
      <Redirect for='*' to='/dashboard'/>
    </Switch>
  </BrowserRouter>
);

export default Routes;
