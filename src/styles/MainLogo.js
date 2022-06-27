import styled from "styled-components";

export const MainLogo = styled.h1`
  font-size: 1rem;
  cursor: pointer;
  font-weight: bold;
  text-transform: uppercase;
  color: var(--primary-text);
  transform: ${({ rotate }) => `rotate(${rotate}deg)`};
  transition: var(--default-transition);
`;
