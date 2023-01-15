import React from 'react';
import styled from 'styled-components';
import Vector3 from './Vector3';

export const Wrapper = styled.div`
  grid-row: 7/8;
  grid-column: 7/8;
  margin-left: 100px;
  position: relative;
  height: max-content;
  @media (max-width: 768px) {
    display: none;
  }
  svg:nth-of-type(2) {
    top: 65%;
  }
  p {
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    line-height: 28px;
    span {
      font-style: italic;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

const Polygon2 = () => {
  return (
    <Wrapper>
      <svg
        width='192'
        height='200'
        viewBox='0 0 192 200'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          opacity='0.32'
          d='M37.5305 19.5236L96 0.525732L154.47 19.5236L190.606 69.2608V130.739L154.469 180.476L96 199.474L37.5305 180.476L1.39435 130.739V69.2608L37.5305 19.5236Z'
          stroke='#FFFCF6'
        />
      </svg>
      <p>
        Our <br /> <span>apartments</span>
      </p>
      <Vector3 />
    </Wrapper>
  );
};

export default Polygon2;
