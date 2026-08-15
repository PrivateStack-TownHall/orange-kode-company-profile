// Shared Framer Motion variants used across the site for consistent,
// deliberate animation rather than scattering ad-hoc variants per file.

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6 } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

export const containerFast = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06 },
  },
};

// Standard viewport props for scroll-triggered reveals
export const viewportOnce = { once: true, margin: "-80px" };
