import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Polygon5 from 'components/atoms/Polygon5';
import { ApartmentWrapper } from './Apartment.styles';
import gsap from 'gsap';
import { RiPinDistanceLine } from 'react-icons/ri';
import { IoPricetagsOutline } from 'react-icons/io5';
import { IoMdCheckmark } from 'react-icons/io';
import { useGlobalContext } from 'context/context';

const Apartment = ({ apartment, apartments }) => {
  const { id, name, description, location, distance, price } = apartment;
  const { handleSctollToTop } = useGlobalContext();
  const image = useRef(null);
  const tl = useRef(null);

  useEffect(() => {
    tl.current = gsap.timeline();
    tl.current.set(image.current, { autoAlpha: 0 }).to(image.current, {
      autoAlpha: 1,
      duration: 1.2,
    });
  }, []);

  return (
    <ApartmentWrapper key={name}>
      <div className='img-wrapper' ref={image}>
        <img
          src={apartment.image[0].url}
          alt='apartmrnt_image'
          loading='lazy'
        />
        <Link
          to={`/apartments/${id}`}
          className='polygon-box'
          onClick={handleSctollToTop}
        >
          <Polygon5 />
          <span>Book apartment</span>
        </Link>
      </div>
      <div className='content'>
        <p className='title'>{name}</p>
        <p className='desc'>{description.substr(0, 250) + '...'}</p>
        <p className='distance'>
          <RiPinDistanceLine /> {location} - {distance}m from center of Warsaw
        </p>
        <div>
          <IoMdCheckmark />
          <p className='check-dates'>
            Check available dates
            <a href='https://www.booking.com/'>on Booking</a>
            and pay here with a 10% discount
          </p>
        </div>
        <p className='price'>
          {' '}
          <IoPricetagsOutline /> {price}
          PLN / NIGHT
        </p>
        <span className='index'>
          <strong>0{apartments.indexOf(apartment) + 1}</strong>/0
          {apartments.length}
        </span>
        <Link
          to={`/apartments/${id}`}
          className='btn book-btn'
          onClick={handleSctollToTop}
        >
          Book apartment
        </Link>
      </div>
    </ApartmentWrapper>
  );
};

export default Apartment;
