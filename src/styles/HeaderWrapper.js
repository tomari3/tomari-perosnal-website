import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const HeaderWrapper = styled.div`
  background-color: var(--primary-bg);
  padding: 1rem ${px2vw(108)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
