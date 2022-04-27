import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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
  "linear-gradient(-45deg,var(--gradient-blue1),var(--gradient-pink1),var(--gradient-pink2),var(--gradient-blue2),var(--gradient-blue3),var(--gradient-pink3))";

export const Wrapper = styled(motion.div)`
  background: ${(props) => (props.colored ? Gradient : "var(--primary-bg)")};
  background-size: 400% 400%;
  animation: ${clouds} 10s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
`;
