import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import AppView from './views/App';
import HomeView from './views/home';

export default (
  <Route component={AppView}>
    <IndexRoute component={HomeView} />
    <Route path="*" component={HomeView} />
  </Route>
);
