import React, { useEffect, useContext, useReducer } from 'react';
import reducer from '../reducers/cart_reducer';
import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS } from 'utils/actions';

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart');
  if (cart) {
    return JSON.parse(localStorage.getItem('cart'));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  total_nights: 0,
  total_amount: 0,
};

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // add to cart

  const addToCart = (id, nights, price, name) => {
    dispatch({
      type: ADD_TO_CART,
      payload: { id, nights, price, name },
    });
  };

  //  clear cart

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  // local storage

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS });
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider value={{ ...state, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
// make sure use
export const useCartContext = () => {
  return useContext(CartContext);
};
