import styled, { keyframes } from "styled-components";
import px2vw from "../utils/px2vw";
import vwfr2s from "../utils/vwfr2s";

const vw = Math.max(
  document.documentElement.clientWidth || 0,
  window.innerWidth || 0
);

const slide1 = keyframes`
    0% {
      opacity: 1;

    transform: translate3d(-150vw, 0, 0); // minus size + gao
  }
  100% {
    opacity: 1;

    transform: translate3d(150vw, 0, 0); // size + gap
  }
`;
const slide2 = keyframes`
    0% {
    opacity: 1;
    transform: translate3d(-305vw, 0, 0); // twice size + gao
  }
  100% {
    opacity: 1;
    transform: translate3d(-0, 0, 0); // zero
  }
`;

export const TechSlideShowWrapper = styled.section`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 5vw;
  div.slide {
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);
      height: 30%;
    }

    svg {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      height: 100%;
      color: var(--primary-text);
      font-size: ${px2vw(72)};
      text-transform: uppercase;
      cursor: pointer;
      transition: all 0.2s cubic-bezier(0.65, 0.05, 0.36, 1);

      &:hover {
      }
    }
  }

  &:hover > .slide {
    animation-play-state: paused;
  }

  div.slide-1 {
    flex: 1 0 150vw;
    justify-content: space-between;
    padding: 1 1ch;
    animation: ${slide1} linear infinite;
    animation-duration: ${vwfr2s(vw, 500)};
    animation-delay: calc(${vwfr2s(vw, 500)} / 2);
    opacity: 0;
  }

  div.slide-2 {
    flex: 1 0 150vw;
    justify-content: space-evenly;
    animation: ${slide2} linear infinite;
    animation-duration: ${vwfr2s(vw, 500)};
  }
`;
