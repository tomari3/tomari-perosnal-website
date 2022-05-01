import { motion } from "framer-motion";

export const Moon = () => {
  return (
    <motion.svg
      className="sun-and-moon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <circle
        className="sun"
        cx="12"
        cy="12"
        r="6"
        mask="url(#moon-mask)"
        fill="var(--primary-text)"
      />
      <g className="sun-beams" stroke="var(--primary-text)">
        …
      </g>
      <mask className="moon" id="moon-mask">
        <rect x="0" y="0" width="100%" height="100%" fill="white" />
        <circle cx="18" cy="10" r="6" fill="black" />
      </mask>
    </motion.svg>
  );
};
