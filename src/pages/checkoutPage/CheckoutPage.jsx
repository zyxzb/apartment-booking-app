import { useCartContext } from 'context/cart_context';
import React from 'react';
import { Wrapper } from './CheckoutPage.styles';
import { Link } from 'react-router-dom';
import StripeCheckout from 'components/stripeCheckout/StripeCheckout';

const CheckoutPage = () => {
  const { cart } = useCartContext();
  return (
    <Wrapper>
      {cart.length < 1 ? (
        <div>
          <h2>Your Cart is Empty</h2>
          <Link to='/apartments' className='btn'>
            back to apartments
          </Link>
        </div>
      ) : (
        <StripeCheckout />
      )}
    </Wrapper>
  );
};

export default CheckoutPage;
