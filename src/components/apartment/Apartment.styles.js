import styled from 'styled-components';

export const ApartmentWrapper = styled.div `
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: max-content;
  position: relative;
  @media (min-width: 992px) {
    flex-direction: row;
    height: 300px;
  }
  .img-wrapper {
    flex: 1;
    img {
      border-radius: 5px;
      height: 300px;
      object-fit: cover;
      width: 100%;
      @media (min-width: 992px) {
        height: 100%;
        min-width: 350px;
      }
    }
  }
  .content {
    flex: 4;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;
    .title {
      font-size: 1.8rem;
      font-weight: bold;
    }
    p, div {
      font-size: 0.85rem;
      display: flex;
      align-items: center;
      svg {
        margin-right: 10px;
      }
      a {
        margin: 0 3px;
        display: inline;
      }
    }
    .check-dates {
      display: inline;
      @media (min-width: 768px) {
        margin-right: 120px;
      }
    }
    .distance {
      @media (min-width: 768px) {
        margin-right: 120px;
      }
    }
    .price {
      font-size: 1.2rem;
      font-weight: bold;
    }
    .index {
      position: absolute;
      top: 0;
      right: 0;
      display: none;
      @media (min-width: 768px) {
        display: block;
      }
    }
  }
  .content > *:not(:last-child) {
    margin-bottom: 20px;
    @media (min-width: 992px) {
      margin-bottom: 0;
    }
  }

  .polygon-box {
    cursor: pointer;
    position: absolute;
    bottom: 15px;
    right: 15px;
    z-index: 1;
    display: none;
    @media (min-width: 768px) {
      display: flex;
    }
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
    font-style: italic;
    position: absolute;
    text-align: center;
    top: 50%;
    transform: translateY(-60%);
  }
  .book-btn {
    display: block;
    @media (min-width: 768px) {
      display: none;
    }
  }
`;