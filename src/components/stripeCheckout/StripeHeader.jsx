import styled from 'styled-components';

export const WrapperArticle = styled.article`
  color: ${({ theme }) => theme.colors.primary};
  p {
    font-size: 2rem;
    :last-child {
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    span {
      font-weight: bold;
    }
  }
  h4 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;
