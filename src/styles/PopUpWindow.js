import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const PopUpWindow = styled.article`
  width: ${px2vw(300)};
  padding: ${({ open }) => (open ? " 5rem 0 1rem 1rem" : "0rem 0 0rem 1rem")};

  display: flex;
  flex-direction: column;
  background-color: white;
  position: absolute;
  top: calc(1rem / 2);
  right: calc(${px2vw(108)} - 1rem / 2);
  transition: all 0.4s cubic-bezier(0.65, 0.05, 0.36, 1);
  border-radius: 10px;
  gap: ${({ open }) => (open ? px2vw(72) : "0")};

  * {
    transition: all 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55);
    opacity: ${({ open }) => (open ? "1" : "0")};
    line-height: ${({ open }) => (open ? "2ch" : "1px")};
  }
`;
