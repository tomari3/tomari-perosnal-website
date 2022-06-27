import { createGlobalStyle } from "styled-components";
import px2vw from "../utils/px2vw";

export const Global = createGlobalStyle`

@import url('//fonts.googleapis.com/css2?family=Hahmlet:wght@306&family=Raleway:ital,wght@0,100;0,300;0,400;0,500;0,700;0,800;1,100;1,200;1,400;1,600&display=swap');


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: var(--primary-bg);
    color: var(--primary-text);
    transition: all ease .5s;
    position: relative;
    
  }
  :root {

    font-family: 'Raleway', sans-serif;
    --head-font: 'Hamlet', serif;
    
    --primary-bg: ${({ theme }) => theme.primaryBG};
    --primary-text: ${({ theme }) => theme.primaryText};
    --primary-accent: ${({ theme }) => theme.primaryAccent};
    
    --gradient-blue1: ${({ theme }) => theme.gradientBlue1};;
    --gradient-blue2: ${({ theme }) => theme.gradientBlue2};;
    --gradient-blue3: ${({ theme }) => theme.gradientBlue3};;
    --gradient-pink1: ${({ theme }) => theme.gradientPink1};;
    --gradient-pink2: ${({ theme }) => theme.gradientPink2};;
    --gradient-pink3: ${({ theme }) => theme.gradientPink3};;
    
    
    --size: clamp(600px, 50vmax, 60vmax);

    --bg-opacity: ${({ theme }) => theme.bgOpacity};;    


      /* @media (min-width: 768px) {
        font-size: ${px2vw(18)};
      }

      @media (min-width: 1024px) {
        font-size: ${px2vw(16)};
      } */
    }
`;

export default Global;
