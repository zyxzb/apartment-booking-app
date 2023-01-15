import styled from 'styled-components';

export const LinksWrapper = styled.div`
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      a {
        position: relative;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        font-size: ${({ theme }) => theme.fontSize.xs};
        &::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0%;
          height: 1px;
          background-color: ${({ theme }) => theme.colors.secondary};
          transition: 0.3s ease-in-out;
        }
        &:hover::after {
          width: 100%;
        }
        &.active {
          color: ${({ theme }) => theme.colors.secondary};
        }
      }
    }
  }
`;
