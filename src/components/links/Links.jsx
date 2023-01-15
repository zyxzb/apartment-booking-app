import React from 'react';
import { useGlobalContext } from 'context/context';
import { NavLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import { LinksWrapper } from './Links.styles';
import { useUserContext } from 'context/auth-context';

const Links = () => {
  const { topAndClose, closeSidebar } = useGlobalContext();
  const { myUser } = useUserContext();

  return (
    <LinksWrapper>
      <ul>
        <li>
          <NavLink to='/' onClick={topAndClose}>
            HOME
          </NavLink>
          <Link to='/#about' onClick={closeSidebar}>
            ABOUT
          </Link>
          <Link to='/#contact' onClick={closeSidebar}>
            CONTACT
          </Link>
          <NavLink to='/apartments' onClick={topAndClose}>
            APARTMENTS
          </NavLink>
          <NavLink to='/cart' onClick={topAndClose}>
            CART
          </NavLink>
          {myUser ? (
            <NavLink to='/checkout' onClick={topAndClose}>
              CHECKOUT
            </NavLink>
          ) : null}
        </li>
      </ul>
    </LinksWrapper>
  );
};

export default Links;
