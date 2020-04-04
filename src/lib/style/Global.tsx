import React from 'react';
import { createGlobalStyle } from "styled-components";
import { normalize } from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  html {
    font-size: 10px;
    background-color: ${({ theme }) => theme.colors.Primary};
  }
  
  body {
    margin: 0;
    padding: 0;
  }
  
  * {
    box-sizing: border-box;
  }
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Sailec-Bold';
  }
  
  
`