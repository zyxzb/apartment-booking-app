import React from 'react';
import { Wrapper } from './Nav.styles';
import { AiOutlineMenu } from 'react-icons/ai';
import { useGlobalContext } from 'context/context';
import Links from 'components/links/Links';
import LogoSection from 'components/atoms/LogoSection';
import { useUserContext } from 'context/auth-context';
import { useCartContext } from 'context/cart_context';

const Nav = () => {
  const { openSidebar, is50 } = useGlobalContext();
  const { clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <>
      <Wrapper is50={is50}>
        <LogoSection />
        <div className='links-wrapper'>
          <Links />
          {myUser ? (
            <button
              type='button'
              className='btn'
              onClick={() => {
                clearCart();
                logout({ returnTo: window.location.origin });
              }}
            >
              Logout
            </button>
          ) : (
            <button type='button' className='btn' onClick={loginWithRedirect}>
              Login
            </button>
          )}
        </div>
        <a className='tel' href='tel:+38 032 297 50 20'>
          +38 032 297 50 20
        </a>
        <button type='button' className='toggle-sidebar' onClick={openSidebar}>
          <AiOutlineMenu />
        </button>
      </Wrapper>
    </>
  );
};

export default Nav;
