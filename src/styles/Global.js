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
