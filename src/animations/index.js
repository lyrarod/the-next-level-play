export const fadeIn = (x = 0, y = 0, delay = 0, duration = 1.5) => {
  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        delay,
        duration,
        // type: "spring",
      },
    },
  };
};
