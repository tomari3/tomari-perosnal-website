import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  background-color: transparent;
  padding: 0 clamp(30px, 3vw, 5vw);
  height: clamp(20px, 10vh, 15vh);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* position: relative; */
  transition: background-color 1s ease;
  z-index: 12;
`;
