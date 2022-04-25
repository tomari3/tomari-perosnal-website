import styled from "styled-components";
import px2vw from "../utils/px2vw";
// import { Link } from "react-router-dom";

export const TextLink = styled.a`
  color: var(--color-primary);
  font-weight: bold;
  font-size: ${px2vw(42)};
  cursor: pointer;
`;
