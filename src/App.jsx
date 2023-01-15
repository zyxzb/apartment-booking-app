import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './assets/styles/GlobalStyle';
import { theme } from './assets/styles/theme';
import Template from 'components/templates/Template';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppProvider } from 'context/context';
import Home from 'pages/homePage/Home';
import Apartments from 'pages/apartmentsPage/Apartments';
import SingleApartment from 'pages/singleApartment/SingleApartment';
import CartPage from 'pages/cartPage/CartPage';
import CheckoutPage from 'pages/checkoutPage/CheckoutPage';
import PrivateRoute from 'pages/PrivateRoute';
import ErrorPage from 'pages/errorPage/ErrorPage';
import AuthWrapper from 'pages/AuthWrapper';

function App() {
  return (
    <AuthWrapper>
      <AppProvider>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Template>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<CartPage />} />
                <Route path='/apartments' element={<Apartments />} />
                <Route path='/apartments/:id' element={<SingleApartment />} />
                <Route
                  path='/checkout'
                  element={
                    <PrivateRoute>
                      <CheckoutPage />
                    </PrivateRoute>
                  }
                />
                <Route path='*' element={<ErrorPage />} />
              </Routes>
            </Template>
          </ThemeProvider>
        </BrowserRouter>
      </AppProvider>
    </AuthWrapper>
  );
}

export default App;
