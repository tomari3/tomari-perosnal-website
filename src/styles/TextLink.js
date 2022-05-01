import styled from "styled-components";
import { Link } from "react-router-dom";

export const TextLink = styled(Link)`
  color: var(--primary-text);
  font-weight: ${(props) => (props.bold ? "bold" : "400")};
  font-size: 1rem;
  cursor: pointer;
  transition: var(--default-transition);
`;
