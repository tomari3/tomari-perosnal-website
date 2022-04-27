import styled, { keyframes } from "styled-components";
// import px2vw from "../utils/px2vw";

const wiggle = keyframes`
    0% {
        transform: perspective(10px);
    }
    50% {
      transform: perspective(10px);


    }
    100% {
      transform: perspective(10px);

    }
`;

export const HomeTextBlock = styled.h1`
  font-size: 12vmin;
  text-transform: uppercase;
  display: grid;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: max-content;
  /* line-height: 1.5ch; */

  &:nth-child(2) {
    margin-bottom: 1ch;
    align-self: flex-end;
  }

  &:nth-child(4) {
    align-self: flex-end;
  }

  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    width: ${(props) => (props.active ? "100%" : "0px")};
    border-bottom: 10px solid var(--primary-bg);
    border-radius: 10px;
    transition: all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  }
`;
