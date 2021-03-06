import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: transparent;
  height: 500px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  transition: background-color 1s ease;
  z-index: 8;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 80% / 2);
    width: 80%;
    height: 1px;
    background-color: black;
  }

  .animated-wrapper {
    overflow: hidden;
    position: absolute;
    left: 0px;
    bottom: 0;
    width: 100%;
    height: inherit;
    isolation: isolate;
    z-index: -1;
  }

  .dot {
    --size: 500px;
    position: absolute;
    bottom: -200px;
    left: 0;
    width: calc(var(--size));
    height: var(--size);
    mix-blend-mode: color-dodge;
    border-radius: var(--size);
    filter: blur(calc(var(--size) / 6));
    will-change: transform;
    display: block;

    :nth-child(1) {
      --size: 600px;
      background: var(--gradient-blue2);
    }
    :nth-child(2) {
      left: 400px;
      background: var(--gradient-pink1);
    }
    :nth-child(3) {
      left: 70%;
      bottom: 60%;
      background: var(--gradient-pink1);
    }
    :nth-child(4) {
      mix-blend-mode: normal;
      --size: 900px;
      left: 80%;
      bottom: 50%;
      background: var(--primary-bg);
    }
  }

  .grid-wrapper {
    /* position: absolute; */
    --grid-size: 30vmin;
    --grid-line: 8;
    height: var(--grid-size);
    aspect-ratio: 1;
    display: grid;
    grid-template-columns: repeat(
      var(--grid-line),
      calc(var(--grid-size) / var(--grid-line))
    );
    grid-template-rows: repeat(
      var(--grid-line),
      calc(var(--grid-size) / var(--grid-line))
    );
    justify-content: center;
    align-items: center;
    z-index: -1;
  }

  .grid-dot-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid-dot {
    mix-blend-mode: overlay;
    background-color: var(--primary-text);
    transform-origin: center;
    /* filter: blur(2px); */
  }

  /* .grid-dot-wrapper:hover .grid-dot {
    transform: scale(2.5);
  } */
`;
