import React, { useState, useEffect } from 'react';
import { IoPricetagsOutline } from 'react-icons/io5';
import { AiOutlineNumber } from 'react-icons/ai';
import { FaBaby } from 'react-icons/fa';
import { BsPersonFill } from 'react-icons/bs';
import { DateRange } from 'react-date-range';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCartContext } from 'context/cart_context';
import { Link } from 'react-router-dom';
import format from 'date-fns/format';

const ApartmentDetails = ({ singleApartment, id }) => {
  const {
    description,
    distance,
    location,
    name,
    price,
    rooms,
    children,
    adults,
  } = singleApartment;
  const [nights, setNights] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const { addToCart } = useCartContext();

  useEffect(() => {
    setNights(
      Number(
        `${format(date[0].endDate, 'dd') - format(date[0].startDate, 'dd')}`,
      ),
    );
  }, [date]);

  const handleAddToCart = () => {
    if (nights > 0) {
      addToCart(id, nights, price, name);
      toast.success('ADDED TO THE CARD!');
    } else {
      toast.error('CHOOSE AT LEAST 1 NIGHT!');
    }
  };
  return (
    <section className='content'>
      <div>
        <h1>{name}</h1>
        <h2>
          {location} - {distance} m from center of Warsaw
        </h2>
      </div>
      <div className='content-center'>
        <div className='details'>
          <div>
            <p className='detail'>
              <IoPricetagsOutline /> {price} PLN / NIGHT
            </p>
            <p className='detail'>
              <AiOutlineNumber />
              {rooms} {rooms > 1 ? 'ROOMS' : 'ROOM'}
            </p>
            <p className='detail'>
              <FaBaby />
              {children} {children > 1 ? 'CHILDREN' : 'CHILD'}
            </p>
            <p className='detail'>
              <BsPersonFill />
              {adults} {adults > 1 ? 'ADULT' : 'ADULTS'}
            </p>
          </div>
          <div className='book-details'>
            <span className='date-range'>
              {`${format(date[0].startDate, 'dd/MM/yyyy')} - ${format(
                date[0].endDate,
                'dd/MM/yyyy',
              )}`}
            </span>
            <span className={nights === 0 ? 'select' : null}>
              {nights === 0
                ? `select a date range`
                : nights === 1
                ? `${nights} night`
                : `${nights} nights`}
            </span>
            <span>
              <b>Final price: {price * nights}zł</b>{' '}
            </span>
          </div>
        </div>
        <div className='calendar-container'>
          <DateRange
            className='calendar'
            editableDateInputs={true}
            onChange={(item) => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            rangeColors={['#313f38']}
          />
          {/* or <input type='date' /> */}
        </div>
      </div>
      <p>{description}</p>
      <hr />
      <Link className='btn' onClick={handleAddToCart}>
        add to cart
      </Link>
      <ToastContainer autoClose={2500} position='top-center' theme='dark' />
    </section>
  );
};

export default ApartmentDetails;
