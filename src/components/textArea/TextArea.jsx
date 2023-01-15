import React from 'react';
import Star from 'components/atoms/Star';
import Polygon1 from 'components/atoms/Polygon1';
import Vector3 from 'components/atoms/Vector3';
import { Wrapper } from './TextArea.styles';

const TextArea = () => {
  return (
    <Wrapper>
      <div className='main-info'>
        <span className='h1'>
          WW<span>Apartments</span>
        </span>
        <p>ROOMS // RESTAURANT // CONGRESS HALL // WINE BAR</p>
      </div>
      <div className='since-section'>
        <div>
          <Star />
          <span>Since 2020</span>
        </div>
        <p>
          The luxurious hotel in the most beautiful European city with an
          exclusive restaurant, conference-hall, and art-bar.
        </p>
      </div>
      <div className='button-wrapper'>
        <Polygon1 />
        <Vector3 />
      </div>
    </Wrapper>
  );
};

export default TextArea;
