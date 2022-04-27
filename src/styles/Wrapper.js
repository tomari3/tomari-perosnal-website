import styled, { keyframes } from "styled-components";

const clouds = keyframes`
   0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;

    }
`;

const Gradient =
  "linear-gradient(-45deg,#c7f0f4,#f794af,#ee95b5,#99d2d7,#a4fae5,#e6859f)";

export const Wrapper = styled.div`
  /* height: ${(props) => (props.primary ? "100vh" : "auto")};
  width: ${(props) => (props.primary ? "100vw" : "auto")}; */

  background: ${(props) => (props.color ? Gradient : "var(--primary-bg)")};
  background-size: 400% 400%;
  animation: ${clouds} 10s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
`;
