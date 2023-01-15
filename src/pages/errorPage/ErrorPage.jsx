import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <Wrapper>
      <section>
        <h1>404</h1>
        <h2>Sorry, this page cannot be found</h2>
        <Link to='/' className='btn'>
          Back to Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.white};
  h1 {
    font-size: 8rem;
  }
  h2 {
    text-transform: none;
    margin-bottom: 2rem;
  }
`;

export default ErrorPage;
