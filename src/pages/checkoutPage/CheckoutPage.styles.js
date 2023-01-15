import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  padding: 150px 0 100px;
  background-color: ${({ theme }) => theme.colors.white};
  display: grid;
  place-items: center;
  text-align: center;
  h2 {
    margin-bottom: 60px;
    font-weight: bold;
    font-size: 2.5rem;
  }
`;
