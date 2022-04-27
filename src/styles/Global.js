import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,200&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {

      font-family: 'Montserrat', sans-serif;

      --primary-bg: white;
      --primary-text: black;
      --primary-accent: #EAD7D1;

      --gradient-blue1: #a4fae5;
      --gradient-blue2: #99d2d7;
      --gradient-blue3: #c7f0f4;
      --gradient-pink1: #f794af;
      --gradient-pink2: #ee95b5;
      --gradient-pink3: #e6859f;
      
      /* --gradient-blue1: #1b2925;
      --gradient-blue2: #152224;
      --gradient-blue3: #192426;
      --gradient-pink1: #32181f;
      --gradient-pink2: #3c252d;
      --gradient-pink3: #36131c; */

      font-size: ${px2vw(32)};

      @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      }
    }
`;

export default Global;
