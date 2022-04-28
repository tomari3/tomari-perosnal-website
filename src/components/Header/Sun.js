import { motion } from "framer-motion";

export const Sun = () => {
  return (
    <motion.svg
      class="sun-and-moon"
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <circle
        class="sun"
        cx="12"
        cy="12"
        r="6"
        // mask="url(#moon-mask)"
        fill="var(--primary-text)"
      />
      <g class="sun-beams" stroke="var(--primary-text)">
        <circle cx="12" cy="3" r="1" fill="var(--primary-text)" />
        <circle cx="18" cy="6" r="1" fill="var(--primary-text)" />
        <circle cx="21" cy="12" r="1" fill="var(--primary-text)" />
        <circle cx="18" cy="18" r="1" fill="var(--primary-text)" />
        <circle cx="12" cy="21" r="1" fill="var(--primary-text)" />
        <circle cx="5" cy="18" r="1" fill="var(--primary-text)" />
        <circle cx="3" cy="12" r="1" fill="var(--primary-text)" />
        <circle cx="6" cy="5" r="1" fill="var(--primary-text)" />
      </g>
    </motion.svg>
  );
};
