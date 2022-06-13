import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    font-size: 10px;
    --fs-default: 1.8rem;
    --fw-regular: 400;
    --fw-header: 500;
    --fw-bold: 600;
    --lh-regular: 1;
    --ff-body: 'Source Sans Pro', sans-serif;
    --ff-header: 'Kanit', sans-serif;
    --gray1: #333333;
    --gray2: #4F4F4F;
    --gray4: #BDBDBD;
    --gray5: #E0E0E0;
    --white: #fff;
    --green: #27AE60;
  }
  body {
    font-family: 'Mulish', sans-serif;
    font-size: var(--fs-default);
    line-height: var(--lh-regular);
    font-weight: var(--fw-bold);
    padding: 0 5%;
    color: var(--gray1)
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  h1{
    font-weight: var(--fw-bold);
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  li {
    list-style: none;
  }
  button {
    padding: 9px 25px;
    font-size: var(--ff-body);
    font-family: inherit;
    font-weight: 500;
    background-color: var(--green);
    color: var(--white);
    border: none;
    outline: none;
    border-radius: 5px;
    text-transform: capitalize;
  }
  input{
    padding: 9px 25px;
    font-size: var(--ff-body);
    font-family: inherit;
    font-weight: 600;
    outline:none;
    border-radius: 5px;
    border: 1px solid var(--gray2)
  }
  button:hover,
  a:hover {
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }
`;
export default GlobalStyles;
