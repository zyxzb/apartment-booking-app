import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 150px;
  padding-bottom: 100px;
  .top {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button {
      background-color: ${({ theme }) => theme.colors.secondary};
      border: none;
      padding: 15px;
      font-size: 1.2rem;
      border-radius: 5px;
      cursor: pointer;
      color: ${({ theme }) => theme.colors.primary};
    }
  }
  .center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
    .content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h1 {
        font-size: 3rem;
      }
      .content-center {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .details {
          flex: 1;
          min-width: 250px;
          .detail {
            font-size: 1.3rem;
            display: flex;
            align-items: center;
            margin: 5px 0;
            svg {
              margin-right: 5px;
            }
          }
        }
        .book-details {
          display: flex;
          flex-direction: column;
          margin: 25px 0;
          span {
            font-size: 1.3rem;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
        }
        .calendar-container {
          flex: 1;
          .calendar {
            border: 1px solid ${({ theme }) => theme.colors.secondary};
            border-radius: 5px;
          }
        }
      }
    }
    .content > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
  @media (min-width: 992px) {
    .top {
      flex-direction: row;
    }
    .center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export const ActionWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
