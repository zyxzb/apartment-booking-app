import React from 'react';
import Banner from 'assets/images/banner.jpg';
// import Form from './Form';
import Polygon5 from 'components/atoms/Polygon5';
import { BannerWrapper } from './BannerSection.styles';
import { HashLink as Link } from 'react-router-hash-link';
import { useGlobalContext } from 'context/context';

const BannerSection = () => {
  const { handleSctollToTop } = useGlobalContext();

  return (
    <BannerWrapper>
      <img src={Banner} alt='banner' srcSet='' />
      {/* <Form /> */}
      <Link
        to='/apartments'
        className='book-apartments'
        onClick={handleSctollToTop}
      >
        <Polygon5 />
        <span>
          Book
          <br />
          apartments
        </span>
      </Link>
    </BannerWrapper>
  );
};

export default BannerSection;
