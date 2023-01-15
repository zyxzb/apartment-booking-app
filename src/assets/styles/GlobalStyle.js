import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

html{
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*, *::after, *::before{
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}
body{
  font-family: 'Synonym', sans-serif;
  background-color: ${({ theme }) => theme.colors.primary};
}
a, button, input{
  font-family: 'Synonym', sans-serif;

}
.section-center {
  margin: 0 auto;
  width: 90vw;
}
.section-center-p {
  margin: 0 auto;
  padding: 0 5vw;
}
.btn {
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  padding: 15px;
  font-size: 1.2rem;
  border-radius: 5px;
  width: max-content;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  text-transform: capitalize;
}
h1, h2, h3,
.h1, .h2{
  font-family: 'Melodrama';
}
`;
