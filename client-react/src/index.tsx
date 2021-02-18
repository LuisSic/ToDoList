import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import { Router } from 'react-router-dom';
import history from './helper/history';
import { Auth0ProviderWithHistory } from '../src/auth/auth0-provider-with-history';
ReactDOM.render(
  <Router history={history}>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </Router>,
  document.getElementById('root')
);
