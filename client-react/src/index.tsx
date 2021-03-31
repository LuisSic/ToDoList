import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './pages/App';
import history from './helper/history';
import { Auth0ProviderWithHistory } from '../src/auth/auth0-provider-with-history';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>,
  document.getElementById('root')
);
