import styled from "styled-components";

export const SubWrapper = styled.section`
  background-color: var(--primary-bg);
  padding: 2rem 0;
  position: relative;
  &::after {
    position: absolute;
    content: "";
    width: 80%;
    left: calc(50% - 80% / 2);
    bottom: 0;
  }
`;
