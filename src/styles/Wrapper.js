import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const gradient =
  "radial-gradient(circle,var(--gradient-blue1) 0%, var(--gradient-pink1) 20%, var(--gradient-blue2) 40%, var(--gradient-pink2) 60%, var(--gradient-blue3) 80%,var(--gradient-pink3) 100% );";

export const Wrapper = styled(motion.section)`
  background: ${gradient};
  background-size: 1500% 1500%;
`;
