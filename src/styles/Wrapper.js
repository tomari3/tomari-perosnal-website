import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.section)`
  background: radial-gradient(
    circle,
    var(--gradient-pink1) 0%,
    var(--gradient-pink2) 20%,
    var(--gradient-pink3) 40%,
    var(--gradient-blue1) 60%,
    var(--gradient-blue2) 80%,
    var(--gradient-blue3) 100%
  );
  background-size: 200% 200%;
`;
