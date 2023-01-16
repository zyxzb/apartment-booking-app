import React from 'react';
import { useGlobalContext } from 'context/context';
import { TfiClose } from 'react-icons/tfi';
import { SidebarWrapper } from './Sidebar.styles';
import Links from 'components/links/Links';
import LogoSection from 'components/atoms/LogoSection';
import { useUserContext } from 'context/auth-context';
import { useCartContext } from 'context/cart_context';

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar, is50 } = useGlobalContext();
  const { clearCart } = useCartContext();
  const { loginWithRedirect, myUser, logout } = useUserContext();

  return (
    <SidebarWrapper
      is50={is50}
      className={isSidebarOpen ? 'sidebar-open' : null}
    >
      <div className='top'>
        <LogoSection />
        <button type='button' aria-label='close menu'>
          <TfiClose className='close-sidebar' onClick={closeSidebar} />
        </button>
      </div>
      <div className='center'>
        <Links />
        {myUser ? (
          <button
            type='button'
            className='btn'
            aria-label='logout'
            onClick={() => {
              clearCart();
              logout({ returnTo: window.location.origin });
            }}
          >
            Logout
          </button>
        ) : (
          <button
            type='button'
            className='btn'
            aria-label='login'
            onClick={loginWithRedirect}
          >
            Login
          </button>
        )}
      </div>
      <div className='bottom'>
        <a href='tel:+38 032 297 50 20' aria-label='phone number'>
          +38 032 297 50 20
        </a>
        <p>
          8 Lystopadovoho <br /> Chynu, Lviv
        </p>
        <div className='socials'>
          <a
            href='https://facebook.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Facebook
          </a>{' '}
          /
          <a
            href='https://instagram.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Instagram
          </a>
          /
          <a
            href='https://twitter.com/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Twitter
          </a>
        </div>
      </div>
    </SidebarWrapper>
  );
};
export default Sidebar;
