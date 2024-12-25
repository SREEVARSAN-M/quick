// src/fonts/calsans.js
import { createGlobalStyle } from 'styled-components';

export const calsans = createGlobalStyle`
  @font-face {
    font-family: 'CalSans';
    src: url('/path/to/CalSans.woff2') format('woff2'),
         url('/path/to/CalSans.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
`;
