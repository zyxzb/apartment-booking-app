import styled from 'styled-components';
import { LinksWrapper } from 'components/links/Links.styles';

export const SidebarWrapper = styled.aside`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  z-index: 99999;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: all ease-in-out 0.3s;
  visibility: hidden;
  transform: translateX(-100%);
  opacity: 0;
  padding: 30px 30px;
  color: ${({ theme }) => theme.colors.white};
  &.sidebar-open {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
  }
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    button {
      background-color: transparent;
      border: none;
      svg {
        font-size: 2rem;
        color: ${({ theme }) => theme.colors.white};
      }
    }
  }
  .center {
    min-height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    ${LinksWrapper} {
      margin-bottom: 1rem;
      ul {
        li {
          display: flex;
          flex-direction: column;
          a {
            width: max-content;
            font-size: 1.5rem;
            margin-bottom: 1rem;
            @media screen and (max-height: 650px) {
              font-size: 1rem;
            }
          }
        }
      }
    }
    button {
      margin: 0 auto;
      @media screen and (max-height: 650px) {
        font-size: 1rem;
        padding: 10px;
      }
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
    p,
    a {
      font-size: 1rem;
    }
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.white};
    }
  }
  .socials {
    justify-content: center;
    flex-wrap: wrap;
    display: flex;
    gap: 10px;
  }
`;
