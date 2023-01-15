import React from 'react';
import { CiPhone, CiMail } from 'react-icons/ci';
import Group4596 from 'components/atoms/Group4596';
import { FooterWrapper } from './Footer.styles';

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-section'>
        <h4 className='title'>
          <span>{'/ '}</span>About Us
        </h4>
        <p className='text'>
          The five-star hotel in a beautiful European city with a modern
          restaurant, conference-hall, and art-bar.
        </p>
        <p className='copy'>
          &#169; {new Date().getFullYear()}
          {` All rights reserved. `}
          <b>WWApartments</b>
        </p>
      </div>
      <div className='footer-section'>
        <h4 className='title'>
          <span>{'/ '}</span>News
        </h4>
        <p className='text'>
          Sign up to our newsletter not to miss exclusive offers and information
          about the upcoming events.
        </p>
        <form action=''>
          <input type='text' placeholder='EMAIL' />
          <button type='submit'>
            <Group4596 />
          </button>
        </form>
      </div>
      <div className='footer-section'>
        <h4 className='title'>
          <span>{'/ '}</span>Contact
        </h4>
        <p className='text'>
          Sign up to our newsletter not to miss exclusive offers and information
          about the upcoming events.
        </p>
        <ul>
          <li>
            <a href='tel:+38 032 297 50 20'>
              <CiPhone />
            </a>
          </li>
          <li>
            <a href='mailto:'>
              {' '}
              <CiMail />
            </a>
          </li>
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
