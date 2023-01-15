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
  .headers {
    display: flex;
    justify-content: space-between;
    span {
      text-transform: capitalize;
      width: 25%;
      text-align: center;
      font-weight: bold;
    }
  }
  .cart-item {
    display: flex;
    justify-content: space-between;
    padding: 30px 0;
    position: relative;
    :not(:last-child)::after {
      content: '';
      background-color: lightgray;
      position: absolute;
      bottom: 0;
      left: 40%;
      height: 1px;
      width: 90%;
      display: flex;
      transform: translateX(-40%);
    }
    @media (min-width: 576px) {
      font-size: 1.5rem;
    }
    p {
      width: 25%;
      text-align: center;
    }
    p:last-child {
      font-weight: bold;
    }
  }
  .control-buttons {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    button {
      background-color: ${({ theme }) => theme.colors.primary};
      color: white;
    }
  }
  .total {
    width: 100%;
    height: 250px;
    border: 1px solid lightgray;
    border-radius: 5px;
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 100%;
      p {
        margin-bottom: 40px;
        font-size: 2rem;
        text-transform: capitalize;
      }
    }
  }
`;
