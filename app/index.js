import 'purecss/build/pure.css';
import 'styles/init.sass';
import 'animate.css/animate.css';

import React from 'react';
import { api } from 'fronto-api';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';

import { Provider } from 'mobx-react';

import routes from './routes';
import stores from './stores';
import settings from './settings';

const endpoint = api({
  endpoint: 'http://localhost:3000/',
  header: (h) => {
    h.append('X-User-Email', localStorage.getItem('email'));
    h.append('X-User-Token', localStorage.getItem('token'));
  },
});

const models = {
  account: new stores.Account(endpoint),
};

render(
  <Provider {...stores} {...models} endpoint={endpoint} settings={settings}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
