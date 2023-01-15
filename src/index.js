import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { ApartmentsProvider } from 'context/apartments_context';
import { CartProvider } from 'context/cart_context';
import { FilterProvider } from 'context/filter_context';
import { UserProvider } from 'context/auth-context';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTH0_DOMAIN}
    clientId={process.env.REACT_APP_AUTH0_CLIENT_ID}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ApartmentsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ApartmentsProvider>
    </UserProvider>
  </Auth0Provider>,
);
