import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const HeaderWrapper = styled.header`
  background-color: var(--primary-bg);
  padding: 1rem ${px2vw(108)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  max-height: 50px;
  transition: background-color 1s ease;
`;
