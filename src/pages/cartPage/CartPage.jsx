import React from 'react';
import { useCartContext } from 'context/cart_context';
import { useUserContext } from 'context/auth-context';
import { Wrapper } from './CartPage.styles';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cart, clearCart, total_amount, total_nights } = useCartContext();
  const { myUser, loginWithRedirect } = useUserContext();

  if (cart.length < 1) {
    return (
      <Wrapper>
        <div>
          <h2>No items in cart</h2>
          <Link className='btn' to='/apartments'>
            back to apartments
          </Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h2>
        {cart.length} {cart.length > 1 ? 'places' : 'place'} /{total_nights}{' '}
        {total_nights > 1 ? 'nights' : 'night'}
      </h2>
      <div className='section-center'>
        <div className='headers'>
          <span>name</span>
          <span>nights</span>
          <span>price/night</span>
          <span>subtotal</span>
        </div>
        <div className='section-center'>
          {cart.map((apartment) => {
            const { name, nights, price } = apartment;
            return (
              <div className='cart-item' key={apartment.id}>
                <p>{name}</p>
                <p>{nights}</p>
                <p>{price} zł</p>
                <p>{price * nights} zł</p>
              </div>
            );
          })}
        </div>
        <hr />
        <div className='control-buttons'>
          <Link to='/apartments' className='btn'>
            back to apartments
          </Link>
          <button type='button' className='btn' onClick={clearCart}>
            Clean
          </button>
        </div>
        <section className='total'>
          <div>
            <p>
              Order total:{' '}
              <span>
                <b>{total_amount}zł</b>
              </span>
            </p>
            {myUser ? (
              <Link to='/checkout' className='btn'>
                Checkout
              </Link>
            ) : (
              <button type='button' className='btn' onClick={loginWithRedirect}>
                Login to pay
              </button>
            )}
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default CartPage;
