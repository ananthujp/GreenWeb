const animImg = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.0 } },
  exit: { opacity: 0 },
};
const animH1 = {
  initial: { opacity: 0, x: -200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  exit: { opacity: 0, x: 200, transition: { duration: 0.6 } },
};
const animH2 = {
  initial: { opacity: 0, x: 200 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
  exit: { opacity: 0, x: -200, transition: { duration: 0.6 } },
};
const animMainDiv = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, delay: 0.0 } },
  exit: { opacity: 1, transition: { duration: 0.5 } },
};
const animVar = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};
export { animImg, animH1, animH2, animMainDiv, animVar };
