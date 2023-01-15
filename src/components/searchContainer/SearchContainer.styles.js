import styled from 'styled-components';

export const Wrapper = styled.section`
  flex: 1;
  background-color: #a16d0512;
  width: 100%;
  height: 460px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 20px;
  color: ${({ theme }) => theme.colors.secondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: 1200px) {
    position: sticky;
    top: 90px;
  }
  .list-search-title {
    font-size: 1.3rem;
    text-align: center;
    margin-bottom: 15px;
  }
  .list-search-item {
    label {
      display: block;
      margin-bottom: 24px;
      font-size: 1.5rem;
      display: none;
      @media (min-width: 1200px) {
        display: block;
      }
    }
    .list-search-option {
      height: 45px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .list-search-text {
        font-size: 1rem;
        span {
          font-size: 1.5rem;
          font-weight: bold;
          color: ${({ theme }) => theme.colors.white};
        }
      }
      .list-search-option-input {
        width: 60px;
        background-color: ${({ theme }) => theme.colors.white};
        padding: 5px;
        font-size: 1rem;
        cursor: pointer;
      }
      .list-search-option-input[type='range'] {
        padding: 0;
        width: 80px;
        background: black;
      }
    }
  }
  .search-container-btn {
    height: 35px;
    background-color: ${({ theme }) => theme.colors.secondary};
    border: none;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1rem;
    cursor: pointer;
    margin-top: 15px;
  }
`;
