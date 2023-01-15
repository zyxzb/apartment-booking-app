import styled from 'styled-components';

export const Wrapper = styled.nav`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.is50 ? '20px 30px 20px' : '30px 30px 30px')};
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid #fffcf612;
  transition: 0.3s ease-in-out;
  .links-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    @media (min-width: 1100px) {
      display: flex;
      align-items: center;
    }
    a {
      margin: 0 10px;
    }
    .btn {
      padding: 5px 10px;
      margin-left: 1.5rem;
    }
  }
  .toggle-sidebar {
    cursor: pointer;
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    svg {
      font-size: 2rem;
    }
    @media (min-width: 1100px) {
      display: none;
    }
  }
  .tel {
    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    display: none;
    @media (min-width: 1100px) {
      display: block;
    }
  }
`;
