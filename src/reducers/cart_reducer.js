import { ADD_TO_CART, CLEAR_CART, COUNT_CART_TOTALS } from 'utils/actions';

const cart_reducer = (state, action) => {
  // ADD TO CART

  if (action.type === ADD_TO_CART) {
    const { id, nights, price, name } = action.payload;

    const tempItem = state.cart.find((i) => i.id === id);

    if (tempItem) {
      const tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === id) {
          let newNights = nights;
          return {
            ...cartItem,
            nights: newNights,
          };
        } else {
          return cartItem;
        }
      });
      return {
        ...state,
        cart: tempCart,
      };
    } else {
      const newItem = {
        id: id,
        name: name,
        nights: nights,
        price: price,
      };
      return {
        ...state,
        cart: [...state.cart, newItem],
      };
    }
  }

  // CLEAR CARD

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === COUNT_CART_TOTALS) {
    const { total_nights, total_amount } = state.cart.reduce(
      (total, cart_item) => {
        const { price, nights } = cart_item;

        total.total_nights += nights;
        total.total_amount += price * nights;

        return total;
      },
      {
        total_nights: 0,
        total_amount: 0,
      },
    );
    return {
      ...state,
      total_nights,
      total_amount,
    };
  }
  throw new Error(`No Matching "${action.type}" - action type`);
};

export default cart_reducer;
