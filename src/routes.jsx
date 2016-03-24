import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import AppContainer from './containers/AppContainer';
import NotFoundView from './components/NotFound';

export default (
  <Route path="/">
    <IndexRoute component={AppContainer} />
    <Route path="404" component={NotFoundView} />
    <Redirect from="*" to="404" />
  </Route>
);
