import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background-color: transparent;
  padding: 0 clamp(30px, 3vw, 5vw);
  height: 500px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 1s ease;
  z-index: 12;
  background-size: 100%;

  ::before,
  ::after {
    content: "";
    display: table;
  }
  ::after {
    clear: both;
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
`;
