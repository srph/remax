import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';

export default (
  <Route component={require('./views/App')}>
    <IndexRoute component={require('./views/main')} />
  </Route>
);
