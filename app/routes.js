import React from 'react';

import { Route,
         Redirect,
         IndexRoute } from 'react-router';

import c from './pages';

const routes =
  <Route>
    <Redirect from='/' to='/contacts' />
    <Route path='users'>
      <Route path='sign_in' component={c.Sessions.New} />
      <Route path='sign_up' component={c.Users.New} />
    </Route>
    <Route component={c.Layout.Application}>
      <Route path='contacts'>
        <IndexRoute component={c.Contacts.Collection} />
        <Route path=':contactId' component={c.Contacts.Show} />
      </Route>
    </Route>
  </Route>;

export default routes;
