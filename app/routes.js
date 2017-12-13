import React from 'react';

import { Route,
         Redirect,
         IndexRoute } from 'react-router';

import c from './pages';

const routes =
  <Route>
    <Redirect from='/' to='/dashboard' />
    <Route path='users'>
      <Route path='sign_in' component={c.Sessions.New} />
      <Route path='sign_up' component={c.Users.New} />
    </Route>
    <Route component={c.Layout.Application}>
      <Route path='dashboard' component={c.Dashboard} />
      <Route path='accounts/:accountId'>
        <Route path='organizations'>
          <IndexRoute component={c.Organizations.Collection} />
          <Route path='new' component={c.Organizations.New} />
          <Route path=':organizationId' component={c.Organizations.Show} />
        </Route>
        <Route path='contacts'>
          <IndexRoute component={c.Contacts.Collection} />
          <Route path=':contactId' component={c.Contacts.Show} />
        </Route>
      </Route>
    </Route>
  </Route>;

export default routes;
