import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  font-size: 20px;
  padding: 60px 30px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }

  .footer-section {
    display: flex;
    flex-direction: column;
    min-height: 220px;
    height: max-content;
    @media (max-width: 768px) {
      min-height: 200px;
    }
    .title {
      text-transform: uppercase;
      margin-bottom: 2rem;
      @media (max-width: 768px) {
        margin-bottom: 1rem;
      }
      span {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }
    .text {
      margin-bottom: auto;
    }
    .copy {
      opacity: 0.45;
    }
    form {
      background-color: transparent;
      border: 1px solid gray;
      height: 40px;
      margin: 0;
      padding: 5px;
      display: flex;
      width: max-content;
      input {
        height: 100%;
        border: none;
        background-color: transparent;
        outline: none;
        color: ${({ theme }) => theme.colors.white};
        padding: 10px;
        letter-spacing: 1px;
      }
      button {
        cursor: pointer;
        border: none;
        background-color: transparent;
        outline: none;
        height: 100%;
        border-left: 1px solid #ffffff50;
        padding: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg {
          opacity: 0.6;
        }
        &:hover svg {
          opacity: 1;
        }
      }
    }
    p {
      margin: 0;
      font-size: 16px;
    }
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        display: flex;
        svg {
          width: 25px;
          height: 25px;
          margin-right: 20px;
          color: ${({ theme }) => theme.colors.secondary};
          cursor: pointer;
          border-bottom: 1px solid transparent;
          &:hover {
            border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
          }
        }
      }
    }
  }
`;
