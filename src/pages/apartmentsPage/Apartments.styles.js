import styled from 'styled-components';

export const Wrapper = styled.div `
  color: ${({ theme }) => theme.colors.primary};
  .title-wrapper {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding-top: 190px;
    padding-bottom: 80px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    justify-content: space-between;
    position: relative;
    @media (max-width: 768px) {
      grid-template-rows: 1fr, max-content;
    }
    h1 {
      grid-column: 1/-1;
      grid-row: 1/-1;
      text-transform: uppercase;
      font-size: 130px;
      font-weight: 300;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.colors.secondary};
      @media (max-width: 1365px) {
        font-size: 90px;
      }
      @media (max-width: 992px) {
        font-size: 75px;
      }
      @media (max-width: 768px) {
        text-align: center;
        margin: 0 auto;
        border-bottom: 1px solid #fffcf612;
        margin-bottom: 40px;
      }
      @media (max-width: 450px) {
        font-size: 60px;
      }
    }
    .desc {
      grid-column: 4/5;
      grid-row: 1/-1;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      opacity: 0.8;
      font-size: 16px;
      line-height: 28px;
      margin: auto;
      @media (max-width: 768px) {
        grid-column: 1/-1;
        grid-row: 2/3;
        text-align: center;
      }
    }
    div {
      grid-row: 1/2;
      grid-column: 3/4;
      margin: auto;
      cursor: auto;
      @media (max-width: 1139px) {
        display: none;
      }
      svg {
        cursor: auto;
      }
    }
  }
  .qty {
    position: absolute;
    bottom: 30px;
    right: 30px;
    font-style: italic;
    color: ${({ theme }) => theme.colors.secondary};
    @media (max-width: 768px) {
      bottom: -50px;
      color: ${({ theme }) => theme.colors.primary};
      font-weight: bold;
    }
  }
  .apartments-wrapper {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 100px 5vw;
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    @media (min-width: 1200px) {
      flex-direction: row;
    }
    .list-wrapper {
      flex: 4;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }
  }
  .load-err {
    width: 100%;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;