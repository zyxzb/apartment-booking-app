import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  span {
    font-size: 1.5rem;
    .secondary {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const LogoSection = () => {
  return (
    <LogoWrapper>
      <Link to='/#'>
        <span>
          WWA
          <span className='secondary'>partments</span>{' '}
        </span>
      </Link>
    </LogoWrapper>
  );
};
export default LogoSection;
