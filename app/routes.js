import React from 'react';

import { Route,
         Redirect,
         IndexRoute } from 'react-router';

import c from './components';

const routes =
  <Route component={c.Layout}>
    <Redirect from='/' to='/contacts' />
    <Route path='contacts'>
      <IndexRoute component={c.Collection} />
      <Route path=':contactId' component={c.Show} />
    </Route>
  </Route>;

export default routes;
