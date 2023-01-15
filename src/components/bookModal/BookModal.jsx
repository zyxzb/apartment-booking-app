import React, { useState, useEffect } from 'react';
import { GrClose } from 'react-icons/gr';
import { ModalWrapper } from './BookModal.styles';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';
import Polygon5 from 'components/atoms/Polygon5';

const BookModal = ({ handleSetModal, price, name }) => {
  const [nights, setNights] = useState(0);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  useEffect(() => {
    setNights(
      Number(
        `${format(date[0].endDate, 'dd') - format(date[0].startDate, 'dd')}`
      )
    );
  }, [date]);

  return (
    <ModalWrapper>
      <div className='modal'>
        <div className='modal-top'>
          <div className='close'>
            <GrClose onClick={handleSetModal} />
          </div>
        </div>
        <div className='modal-content'>
          <div className='calendar'>
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
            />
          </div>
          <div className='details'>
            <p>{name}</p>
            <span className='date-range'>
              {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(
                date[0].endDate,
                'dd/MM/yyyy'
              )}`}
            </span>
            <span className={nights === 0 && 'select'}>
              {nights === 0
                ? `select a date range`
                : nights === 1
                ? `${nights} night`
                : `${nights} nights`}
            </span>
            <span>
              {' '}
              <b>Final price: {price * nights}zł</b>{' '}
            </span>
            <div className='book-now'>
              <Polygon5 />
              <span>Book now</span>
            </div>
          </div>
        </div>
      </div>
      <div className='bgc-filter'></div>
    </ModalWrapper>
  );
};

export default BookModal;
