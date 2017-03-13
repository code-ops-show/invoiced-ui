import React from 'react';

import { Route,
         Redirect,
         IndexRoute } from 'react-router';

import c from './components';

const routes =
  <Route component={c.Layout.Application}>
    <Redirect from='/' to='/contacts' />
    <Route path='users'>
      <Route path='sign_in' component={c.Sessions.New} />
    </Route>
    <Route path='contacts'>
      <IndexRoute component={c.Contacts.Collection} />
      <Route path=':contactId' component={c.Contacts.Show} />
    </Route>
  </Route>;

export default routes;
