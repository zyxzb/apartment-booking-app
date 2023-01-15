import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 100px 0;
  display: grid;
  min-height: 100vh;
  grid-template-rows: 1px repeat(7, 150px);
  grid-template-columns: repeat(8, 1fr);
  background-color: ${({ theme }) => theme.colors.primary};
  overflow: hidden;
  @media (max-width: 768px) {
    grid-template-rows: 1px repeat(6, 150px);
  }

  .Elipse_18 {
    grid-column: 1/7;
    img {
      width: 100%;
    }
  }
  .Vector_6 {
    grid-column: 7/9;
    img {
      width: 1px;
      height: 600px;
    }
  }
  .Vector_14 {
    grid-column: 4/9;
    grid-row: 1/2;
    display: flex;
    img {
      width: 100%;
      height: 1px;
    }
  }
  .space-img {
    grid-column: 1/4;
    grid-row: 3/9;
    @media (max-width: 768px) {
      grid-column: 1/9;
      grid-row: 4/6;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      @media (max-width: 768px) {
        padding: 0;
      }
    }
  }
  .space2-img {
    grid-column: 7/9;
    grid-row: 3/6;
    @media (max-width: 768px) {
      display: none;
    }
    img {
      padding-left: 100px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .about-us {
    grid-column: 5/7;
    grid-row: 4/5;
    color: ${({ theme }) => theme.colors.white};
    text-align: right;
    margin-right: 40px;
    font-size: 120px;
    line-height: 110px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.secondary};
    .us {
      color: ${({ theme }) => theme.colors.white};
    }
    @media (max-width: 768px) {
      grid-column: 1/9;
      grid-row: 3/5;
      font-size: 90px;
      line-height: 65px;
      margin: -50px auto auto 0;
      .us {
        margin-left: auto;
      }
    }
    @media (max-width: 576px) {
      font-size: 65px;
    }
  }
  .quality {
    grid-column: 5/6;
    grid-row: 7/8;
    font-family: 'Miracle';
    color: ${({ theme }) => theme.colors.white};
    letter-spacing: 2px;
    font-size: 30px;
    @media (max-width: 1024px) {
      grid-row: 6/7;
    }
    @media (max-width: 768px) {
      grid-column: 1/13;
      grid-row: 6/7;
      text-align: left;
      align-self: center;
    }
  }
  .desc {
    grid-column: 5/7;
    grid-row: 8/9;
    margin-right: 20px;
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.white};
    opacity: 0.64;
    text-align: left;
    vertical-align: top;
    line-height: 24px;
    @media (max-width: 1024px) {
      grid-row: 7/9;
    }
    @media (max-width: 768px) {
      grid-column: 1/8;
      grid-row: 7/9;
      text-align: left;
    }
  }
  .label-container {
    width: 140px;
    height: 140px;
    grid-column: 7/8;
    grid-row: 3/4;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -70%;
    @media (max-width: 768px) {
      grid-column: 1/8;
      grid-row: 7/9;
      margin: auto -70px 0 auto;
      transform: rotate(90deg);
    }
  }
`;
