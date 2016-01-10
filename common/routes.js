import React from 'react';
import {Route, IndexRoute} from 'react-router';
import AppView from './views/App';
import HomeView from './views/home';

export default (
  <Route path="/" component={AppView}>
    <IndexRoute component={HomeView} />
  </Route>
);
