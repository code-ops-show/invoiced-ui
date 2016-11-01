import 'purecss/build/pure.css';

import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';

import { Provider } from 'mobx-react';

import routes from './routes';
import stores from './stores';

render(
  <Provider contacts={stores.contacts}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.getElementById('app')
);
