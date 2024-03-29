import * as React from "react";
import { motion } from "framer-motion";
function importSVG() {
  return <div></div>;
}
const animPath = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: 1,
    transition: { duration: 1.5, delay: 0.5, staggerChildren: 0.5 },
  },
  exit: { pathLength: 0, transition: { duration: 1.5 } },
};
export const GitIcon = (props) => (
  <svg
    height={25}
    width={25}
    viewBox="8 8 30 30"
    xmlns="http://www.w3.org/2000/svg"
    style={{
      backgroundColor: "transparent",
    }}
    {...props}
  >
    <path
      fill="rgba(129,128,128,1)"
      d="M10 22.304c0 5.436 3.438 10.048 8.207 11.675.6.113.819-.267.819-.593 0-.292-.01-1.066-.017-2.092-3.337.743-4.042-1.65-4.042-1.65-.546-1.422-1.332-1.8-1.332-1.8-1.09-.764.082-.748.082-.748 1.205.087 1.838 1.268 1.838 1.268 1.071 1.88 2.81 1.337 3.493 1.022.109-.795.419-1.336.762-1.645-2.665-.31-5.467-1.365-5.467-6.08 0-1.344.468-2.442 1.236-3.302-.123-.312-.535-1.562.118-3.256 0 0 1.007-.332 3.3 1.26.957-.272 1.983-.409 3.003-.413 1.02.004 2.046.141 3.005.414 2.29-1.593 3.297-1.26 3.297-1.26.654 1.693.242 2.943.12 3.255.768.86 1.232 1.958 1.232 3.302 0 4.726-2.805 5.766-5.478 6.071.43.38.814 1.131.814 2.278 0 1.646-.014 2.973-.014 3.376 0 .33.216.712.825.591C30.565 32.347 34 27.74 34 22.304 34 15.51 28.627 10 21.999 10 15.373 10 10 15.509 10 22.304Z"
    />
  </svg>
);

export const GIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24}>
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82Z"
      />
      <path
        fill="#34A853"
        d="M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24Z"
      />
      <path
        fill="#FBBC05"
        d="M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 0 0 0 10.76l3.98-3.09Z"
      />
      <path
        fill="#EA4335"
        d="M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96Z"
      />
    </svg>
  );
};
export const TwitterIcon = () => {
  return (
    <svg
      height={66}
      width={66}
      viewBox="2.55 5.9 39.9 34.2"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundColor: "transparent",
        borderRadius: "20%",
        borderColor: "rgba(0,0,0,.25)",
        borderStyle: "solid",
        borderWidth: 0,
      }}
    >
      <path
        fill="rgba(26,166,233,0.86)"
        d="M30.526 16.846a4.51 4.51 0 0 0 1.893-2.513 8.355 8.355 0 0 1-2.736 1.102A4.194 4.194 0 0 0 26.539 14c-2.38 0-4.307 2.035-4.307 4.544 0 .356.036.703.11 1.034-3.58-.19-6.754-1.996-8.88-4.747a4.724 4.724 0 0 0-.583 2.285c0 1.576.76 2.967 1.917 3.783a4.154 4.154 0 0 1-1.953-.568v.056c0 2.202 1.484 4.04 3.458 4.455a4.01 4.01 0 0 1-1.137.16c-.277 0-.548-.027-.81-.08.548 1.804 2.139 3.12 4.025 3.155-1.476 1.219-3.333 1.944-5.351 1.944-.348 0-.691-.02-1.028-.062A11.747 11.747 0 0 0 18.604 32c7.926 0 12.257-6.924 12.257-12.929 0-.197-.002-.394-.01-.587A9.006 9.006 0 0 0 33 16.13a8.257 8.257 0 0 1-2.474.715Z"
      />
    </svg>
  );
};
export const InstaIcon = () => {
  return (
    <svg
      height={66}
      width={66}
      viewBox="1.1 1.1 41.8 41.8"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundColor: "transparent",
        borderRadius: "20%",
        borderColor: "rgba(0,0,0,.25)",
        borderStyle: "solid",
        borderWidth: 0,
      }}
    >
      <path
        fill="#D3118B"
        d="M22 12.982c2.937 0 3.285.011 4.445.064 1.072.05 1.655.228 2.042.379.514.2.88.438 1.265.823.385.385.624.751.823 1.265.15.387.33.97.379 2.042.053 1.16.064 1.508.064 4.445 0 2.937-.011 3.285-.064 4.445-.05 1.072-.228 1.655-.379 2.043-.2.513-.438.88-.823 1.264a3.408 3.408 0 0 1-1.265.823c-.387.15-.97.33-2.042.379-1.16.053-1.508.064-4.445.064-2.937 0-3.285-.011-4.445-.064-1.072-.049-1.655-.228-2.042-.379-.514-.2-.88-.438-1.265-.823a3.408 3.408 0 0 1-.823-1.264c-.15-.388-.33-.97-.379-2.043-.053-1.16-.064-1.508-.064-4.445 0-2.937.011-3.285.064-4.445.049-1.072.228-1.655.379-2.042.2-.514.438-.88.823-1.265a3.408 3.408 0 0 1 1.265-.823c.387-.15.97-.33 2.042-.379 1.16-.053 1.508-.064 4.445-.064M22 11c-2.987 0-3.362.013-4.535.066-1.171.054-1.97.24-2.67.512a5.392 5.392 0 0 0-1.949 1.268 5.392 5.392 0 0 0-1.269 1.949c-.271.7-.457 1.499-.51 2.67C11.012 18.638 11 19.013 11 22s.013 3.362.066 4.535c.054 1.171.24 1.97.511 2.67a5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269c.7.271 1.499.457 2.67.51 1.173.054 1.548.067 4.535.067s3.362-.013 4.535-.066c1.171-.054 1.97-.24 2.67-.511a5.392 5.392 0 0 0 1.949-1.27 5.392 5.392 0 0 0 1.268-1.948c.272-.7.458-1.499.512-2.67.053-1.173.066-1.548.066-4.535s-.013-3.362-.066-4.535c-.054-1.171-.24-1.97-.512-2.67a5.392 5.392 0 0 0-1.268-1.949 5.392 5.392 0 0 0-1.949-1.268c-.7-.272-1.499-.458-2.67-.512C25.362 11.013 24.987 11 22 11Zm.022 5.369a5.653 5.653 0 1 0 0 11.306 5.653 5.653 0 0 0 0-11.306Zm0 9.322a3.67 3.67 0 1 1 0-7.339 3.67 3.67 0 0 1 0 7.34Zm7.137-9.584a1.31 1.31 0 1 1-2.62 0 1.31 1.31 0 0 1 2.62 0Z"
      />
    </svg>
  );
};
export const FbIcon = () => {
  return (
    <svg
      height={66}
      width={66}
      viewBox="11.05 1.65 20.9 43.7"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        backgroundColor: "transparent",
        borderRadius: "20%",
        borderColor: "rgba(0,0,0,.25)",
        borderStyle: "solid",
        borderWidth: 0,
      }}
    >
      <path
        fill="#3b5998"
        d="M23.315 35h-4.878V23.499H16v-3.963h2.437v-2.38c0-3.233 1.376-5.156 5.286-5.156h3.255v3.964h-2.034c-1.523 0-1.623.554-1.623 1.588l-.007 1.984H27l-.431 3.963h-3.255V35Z"
      />
    </svg>
  );
};
export const AboutSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350">
      <style>
        {
          ".prefix__st1{opacity:.48}.prefix__st1,.prefix__st2{fill:#fff}.prefix__st3{fill:#a797fb}.prefix__st4{fill:#e7aa36}.prefix__st5{fill:#ecbf4c}.prefix__st6{fill:#c3b7fc}.prefix__st7{fill:#dd6e5c}.prefix__st8{fill:#363271}.prefix__st9{fill:#f0c9a1}.prefix__st10{fill:#e9b588}.prefix__st11{fill:#514e92}.prefix__st13{fill:#5f5ea5}.prefix__st14{fill:#dfdbfc}.prefix__st15{fill:#e58f31}.prefix__st19{fill:#e08675}"
        }
      </style>
      <g id="prefix__OBJECTS">
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M454.3 248.9c-8 19.6 2.7 38.7 8.8 57.4 8.3 25.6 12.1 59.1-4.5 82.3-.8 1.1-1.6 2.2-2.5 3.3-17.6 20.9-45.7 23-70.9 24.7-12.8.8-25.6 1.5-38.4 2.1-20.9 1-41.8 1.6-62.6 1.9-2.3 0-4.6.1-6.9.1-17 .2-34 .1-50.9-.2-22.9-.3-45.7-.9-68.6-1.4-6.6-.1-13.1-.3-19.7-.4-15.6-.3-31.3-1.7-46.3-5.4-17-4.2-32.8-11.3-46.1-23.1-1.4-1.2-2.8-2.5-4.1-3.8-26.1-26-35.5-65-20.9-99.3 6.5-15.4 17.5-30.2 15.9-46.8-.9-9-5.4-17.1-8.8-25.5-13.2-32.3-12.9-82.1 19.4-103.6 14.4-9.6 32.4-11.3 49.6-13.4 47.3-6 78.3-46.7 121.5-63.2 26.1-10 56.2-12.6 81.7-1 23.3 10.6 38.7 33.5 62.4 42.7 21.1 8.2 44.8 4.7 66 13.2 20.6 8.3 38.4 24 48.4 43.9 11 22 12.3 48.5 4.3 71.7-5.8 16.4-20.3 27.8-26.8 43.8z"
          opacity={0.29}
          fill="#c3b7fc"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M226.2 420.5c-22.9-.3-45.7-.9-68.6-1.4-6.6-.1-13.1-.3-19.7-.4-15.6-.3-31.3-1.7-46.3-5.4-16.8-4.2-32.6-11.3-45.9-23.1L129.5 123h16l48.7 179.5 32 118z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M346.7 418.7c-20.9 1-41.8 1.6-62.6 1.9-2.3 0-4.6.1-6.9.1-17 .2-34 .1-50.9-.2-22.9-.3-45.7-.9-68.6-1.4l36.6-116.6L250.6 123h16l48.2 177.8 31.9 117.9z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M458.6 388.6c-.8 1.1-1.6 2.2-2.5 3.3-17.6 20.9-45.7 23-70.9 24.7-12.8.8-25.6 1.5-38.4 2.1-20.9 1-41.8 1.6-62.6 1.9-2.3 0-4.6.1-6.9.1l37.6-119.8 55.8-177.8h16l71.9 265.5z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st2"
          d="M436.5 163.2h-38c-8.6 0-15.7 7.1-15.7 15.7v18.3c0 6.8 4.4 12.6 10.5 14.8v11.5c0 1.9 2.3 2.9 3.6 1.5l12.1-12h27.5c8.6 0 15.7-7.1 15.7-15.7V179c0-8.7-7-15.8-15.7-15.8z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st3"
          d="M403.4 187.9c0 2.9-2.3 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2 2.9 0 5.2 2.4 5.2 5.2zM422.9 187.9c0 2.9-2.3 5.2-5.2 5.2s-5.2-2.3-5.2-5.2c0-2.9 2.3-5.2 5.2-5.2s5.2 2.4 5.2 5.2zM442.5 187.9c0 2.9-2.3 5.2-5.2 5.2-2.9 0-5.2-2.3-5.2-5.2 0-2.9 2.3-5.2 5.2-5.2 2.9 0 5.2 2.4 5.2 5.2z"
        />
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st2"
            d="M68.7 180h36.7c8.4 0 15.2 6.8 15.2 15.2v17.7c0 6.6-4.2 12.2-10.1 14.3v11.1c0 1.8-2.2 2.8-3.5 1.5l-11.7-11.7H68.7c-8.4 0-15.2-6.8-15.2-15.2v-17.7c0-8.4 6.8-15.2 15.2-15.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st3"
            d="M100.6 203.9c0 2.8 2.3 5 5 5 2.8 0 5-2.3 5-5 0-2.8-2.3-5-5-5s-5 2.2-5 5zM81.8 203.9c0 2.8 2.3 5 5 5 2.8 0 5-2.3 5-5 0-2.8-2.3-5-5-5-2.8 0-5 2.2-5 5zM62.9 203.9c0 2.8 2.3 5 5 5 2.8 0 5-2.3 5-5 0-2.8-2.3-5-5-5-2.8 0-5 2.2-5 5z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st2"
            d="M191.8 149.1h32.8c7.5 0 13.6 6.1 13.6 13.6v15.9c0 5.9-3.8 10.9-9.1 12.8v9.9c0 1.6-2 2.5-3.1 1.3l-10.4-10.4h-23.8c-7.5 0-13.6-6.1-13.6-13.6v-15.9c0-7.5 6.1-13.6 13.6-13.6z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st3"
            d="M220.4 170.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5-4.5 2-4.5 4.5zM203.5 170.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5-4.5 2-4.5 4.5zM186.6 170.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5-2-4.5-4.5-4.5-4.5 2-4.5 4.5z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st3"
            d="M376.6 44.1h2.2v69.7h-2.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st4"
            d="M377.6 113v21.2h-24.4c-1.1 0-1.7-1.4-.9-2.2l19.8-18.9.1-.1h5.4z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M402.3 134.2h-24.8V113h5.7l.1.1 19.8 18.9c.9.8.4 2.2-.8 2.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M383.3 113.1l-.1-.1h-5.7v-8.2h1.8c1.8 0 3.3 1.4 3.4 3.2l.6 5.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st3"
            d="M377.6 104.8v8.2h-5.3l-.1.1.6-5.1a3.4 3.4 0 013.4-3.2h1.4z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M371.8 41.1h12c-.5 3.4-3 6.1-6 6.1s-5.6-2.7-6-6.1z"
          />
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M256.7 44.1h2.2v69.7h-2.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st4"
              d="M257.6 113v21.2h-24.4c-1.1 0-1.7-1.4-.9-2.2l19.8-18.9.1-.1h5.4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M282.4 134.2h-24.8V113h5.7l.1.1 19.8 18.9c.9.8.3 2.2-.8 2.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st6"
              d="M263.4 113.1l-.1-.1h-5.7v-8.2h1.8c1.8 0 3.3 1.4 3.4 3.2l.6 5.1z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M257.6 104.8v8.2h-5.3l-.1.1.6-5.1a3.4 3.4 0 013.4-3.2h1.4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st6"
              d="M251.8 41.1h12c-.5 3.4-3 6.1-6 6.1-3-.1-5.5-2.7-6-6.1z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M135.9 44.1h2.2v69.7h-2.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st4"
              d="M136.9 113v21.2h-24.4c-1.1 0-1.7-1.4-.9-2.2l19.8-18.9.1-.1h5.4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M161.6 134.2h-24.8V113h5.7l.1.1 19.8 18.9c.9.8.4 2.2-.8 2.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st6"
              d="M142.7 113.1l-.1-.1h-5.7v-8.2h1.8c1.8 0 3.3 1.4 3.4 3.2l.6 5.1z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M136.9 104.8v8.2h-5.3l-.1.1.6-5.1a3.4 3.4 0 013.4-3.2h1.4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st6"
              d="M131.1 41.1h12c-.5 3.4-3 6.1-6 6.1-3.1-.1-5.6-2.7-6-6.1z"
            />
          </g>
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st2"
            d="M286.7 316.1c-7.4 1-14.3 1.6-20.8 2-8.2.5-15.8.5-22.5.3-10.1-.3-18.3-1.3-24.4-2.2.3-2.3.7-5.5 1.2-9l.6-4.2c.5-3.4 1.1-6.9 1.7-10.1.3-1.5.5-2.9.7-4.2.5-2.7.9-4.8 1.2-6.2.2-.9.4-1.7.6-2.6.4-1.3.7-2.7 1.2-4 1.1-3.3 2.4-6.5 4.1-9.4.8-1.4 1.6-2.7 2.5-3.9 1.2-1.6 2.5-3.1 3.9-4.5 1.6-1.6 3.5-3 5.5-4.2 6.2-3.7 13.8-5.2 20.7-3.1 1.5.5 2.9 1.1 4.3 1.8 3.6 2 6.7 5 9 8.5.8 1.2 1.6 2.4 2.2 3.7.2.3.3.6.4.9 1.2 2.5 2.1 5.1 2.8 7.7.5 1.7.8 3.3 1.2 5 .4 2.2.8 4.4 1.1 6.6.1.6.2 1.3.3 1.9.2 1.6.4 3.3.6 5.1.3 2.8.6 5.8.8 8.9.1 1.7.3 3.5.4 5.2.3 3.6.5 7 .7 10z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M278.9 265.8c-7.4 2.1-15.2 3.2-22.7 3.5-6.1.2-12.1-.1-18.1-1.1-2.6-.4-5.1-.9-7.7-1.7.8-1.4 1.6-2.7 2.5-3.9 2 .4 4.1.7 6.1 1 5.4.8 10.9 1.1 16.4.9 7.2-.3 14-1.5 20.8-3.4.8 1.2 1.6 2.4 2.2 3.7.2.4.3.7.5 1zM282.8 278.5c-9 3.3-18.8 5-28.2 5.3-6.1.2-12.1-.1-18.1-1.1-2.9-.5-5.8-1.1-8.6-2-.8-.3-1.8-.5-2.8-.8.4-1.3.7-2.7 1.2-4 .9.2 1.7.5 2.5.6 2.9.6 5.8 1.1 8.8 1.6 5.4.8 10.9 1.1 16.4.9 9.6-.3 18.8-2.4 27.7-5.6.4 1.8.8 3.5 1.1 5.1zM284.8 292.2c-10.4 3.6-22 5.1-33 5.1-6.5 0-13-.6-19.4-1.8-3.1-.6-6.2-1.3-9.2-2.3-.2-.1-.5-.2-.8-.2.3-1.5.5-2.9.7-4.2.4.1.7.2 1.1.3 3.1.7 6.2 1.4 9.4 1.9 5.8 1 11.7 1.5 17.6 1.5 11.5 0 22.3-2.1 33-5.4.2 1.5.4 3.3.6 5.1zM286 306.2c-11.1 3.9-23.4 5.5-35.2 5.5-6.7 0-13.4-.6-19.9-1.8-3.2-.6-6.4-1.3-9.4-2.3-.4-.1-.8-.3-1.3-.4l.6-4.2c.6.2 1.2.3 1.7.4 3.2.7 6.4 1.4 9.6 1.9 5.9 1 12 1.5 18 1.5 12.3.1 23.9-2.3 35.5-5.9.2 1.9.3 3.6.4 5.3z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st7"
            d="M243.4 318.4c-10.1-.3-18.3-1.3-24.4-2.2.9-8.4 4.3-28.2 5.5-33.6 2-9 5.6-17.9 12.3-24.4 1.6-1.6 3.5-3 5.5-4.2.4 3-.3 7.7-.2 9.8l.3 11.6c.3 14.3.7 28.7 1 43zM267.2 263.8c.1-2.4-.8-8.3 0-11.1 4.9 2.8 8.7 7.3 11.2 12.2 3.2 6.3 4.5 13.3 5.5 20.2 1.3 8.5 2.2 21.5 2.7 30.9-7.4 1-14.3 1.6-20.8 2 .3-14.2.7-28.4 1-42.7.2-3.7.3-7.6.4-11.5z"
          />
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M229.9 236.1c-2.2-3.3-2.7-7.3-3.2-11.1-1.8-12.3 3.2-25.9 15.8-30.7 6.9-2.6 14.9-3.1 21.7-.2 13.1 5.5 15.7 19.2 15 31.7-.3 5.6-2.3 11.1-6.1 15.4-3 3.5-6.6 6-11.4 6.8-11.6 2-23.7.4-31.8-11.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M262.4 231.7v21.8c0 4.3-3.5 7.8-7.8 7.8s-7.8-3.5-7.8-7.8v-21.8h15.6z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st10"
              d="M262.4 235.8v15c-3.3 1-6.7 1.7-10.1 1.7-1.8 0-3.6-.3-5.4-.8v-13.4c.9-.4 1.8-.8 2.7-1 4.1-1.3 8.4-1.8 12.8-1.5z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M233.7 224.5c0 14 7.4 25.3 19 25.3s21-11.3 21-25.3-9.4-25.3-21-25.3-19 11.3-19 25.3z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M268.4 226.8c-1 4 .9 7.9 4.1 8.7 3.2.8 6.6-1.9 7.6-5.9s-.9-7.9-4.1-8.7c-3.3-.8-6.7 1.9-7.6 5.9zM226.8 229.6c-1-4 .9-7.9 4.1-8.7 3.2-.8 6.6 1.9 7.6 5.9s-.9 7.9-4.1 8.7c-3.2.8-6.6-1.9-7.6-5.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st2"
              d="M268.1 221.7h-8.2c-2.3 0-4.2 1.9-4.2 4.2h-4.2c0-2.3-1.9-4.2-4.2-4.2h-8.2c-2.3 0-4.2 1.9-4.2 4.2v5c0 2.3 1.9 4.2 4.2 4.2h8.2c2.3 0 4.2-1.9 4.2-4.2v-2.7h4.2v2.7c0 2.3 1.9 4.2 4.2 4.2h8.2c2.3 0 4.2-1.9 4.2-4.2v-5c.1-2.3-1.8-4.2-4.2-4.2zm-18.4 9.2c0 1.3-1.1 2.4-2.4 2.4h-8.2c-1.3 0-2.4-1.1-2.4-2.4v-5c0-1.3 1.1-2.4 2.4-2.4h8.2c1.3 0 2.4 1.1 2.4 2.4v5zm20.8 0c0 1.3-1.1 2.4-2.4 2.4h-8.2c-1.3 0-2.4-1.1-2.4-2.4v-5c0-1.3 1.1-2.4 2.4-2.4h8.2c1.3 0 2.4 1.1 2.4 2.4v5z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M247 219c7.2.5 14.8.3 21.1-3 6.4-3.4 11-10.9 8.7-17.6-2.3 1.3-5.2-.2-7.6-1.4-5.4-2.9-11.4-4.8-17.5-4.7-6.1 0-12.3 2.1-16.7 6.3-3.5 3.3-7 10.7-3.9 15.3 3 4.2 11.2 4.8 15.9 5.1z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M322.2 214c-1.4 5.8-1.3 11.9-1.7 17.9-.5 6-1.6 12.2-5.1 17-1 1.4-2.2 2.7-3 4.2-.8 1.5-1 3.5-.1 4.9 1 1.6 3.1 2.1 5 2.5 1.6.3 3.3.7 4.9 1 .7.2 1.5.3 2.2.5 1 .2 1.9.4 2.9.5 2.4.3 4.8.1 7.2-.5.9-.3 1.8-.6 2.8-.5.7.1 1.3.3 1.9.5 3 .8 6.2-.1 9.2-.9 1.2-.3 2.4-.7 3.3-1.6.9-.9 1.3-2.3 1.5-3.6.4-2.6.5-5.2.6-7.8.1-5.6.3-11.1.3-16.7 0-4.9-.1-9.9-.8-14.8-.6-3.9-1.6-7.8-3.9-10.9-3.9-5.2-10.3-6.1-16.4-5.5-6.2.5-9.6 8.8-10.8 13.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M375.9 213c1.4 5.8 1.3 11.9 1.7 17.9.5 6 1.6 12.2 5.1 17 1 1.4 2.2 2.7 3 4.2.8 1.5 1 3.5.1 4.9-1 1.6-3.1 2.1-5 2.5-1.6.3-3.3.7-4.9 1-.7.2-1.5.3-2.2.5-1 .2-1.9.4-2.9.5-2.4.3-4.8.1-7.2-.5-.9-.3-1.8-.6-2.8-.5-.7.1-1.3.3-1.9.5-3 .8-6.2-.1-9.2-.9-1.2-.3-2.4-.7-3.3-1.6-.9-.9-1.3-2.3-1.5-3.6-.4-2.6-.5-5.2-.6-7.8-.1-5.6-.3-11.1-.3-16.7 0-4.9.1-9.9.8-14.8.6-3.9 1.6-7.8 3.9-10.9 3.9-5.2 10.3-6.1 16.4-5.5 6.2.5 9.6 8.8 10.8 13.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st11"
              d="M356.4 296.4c0 5.2 0 10.4.1 15.5.1 4 .2 8.1.4 12.1H349.2c-2.2 0-4.3-.1-6.4-.2-1.1 0-2.1-.1-3.1-.1h-.1c-.3 0-.7 0-1-.1-.4 0-.9 0-1.3-.1-.7 0-1.4-.1-2-.1h-.2c-.4 0-.7-.1-1.1-.1-3.4-.2-6.5-.5-9-.8h-.4c-.9-.1-1.8-.2-2.5-.4-.3 0-.5-.1-.8-.1-.2 0-.4-.1-.6-.1-.1 0-.3-.1-.4-.1-.2 0-.4-.1-.5-.1-.1 0-.1 0-.2-.1-.5-.1-.9-.3-1.2-.4 0 0-.1 0-.1-.1l-.1-.1c-1.9-2-.2-7.2.2-9.5 1-8 2.4-16 4.5-23.8 1.9-7 4.4-13.9 7.8-20.3.7-1.3 1.4-2.5 2.1-3.8 1.7-2.8 3.6-5.5 6.1-7.6.1-.1.3-.2.4-.3.4-.3.7-.5 1.1-.8l.1-.1c5.1-3.4 12.1-4.2 17.9-2.1-1.4 4.6-1.6 9.7-1.7 14.7 0 1.2 0 2.4-.1 3.6-.1 8.5-.2 17-.2 25.4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M362.7 269.2c-.3.3-.8.4-1.2.4-6.7.6-13.5.4-20.1-.6-.2-3.7-.4-7.4-.5-11.1 0-.9-.2-1.9-.3-2.9 6-4.1 14.6-4.4 20.9-.7l1.5.9c.1 4.1.1 8.3.2 12.4-.1.6-.1 1.2-.5 1.6z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M357.7 234.5v21.8c0 4.3-3.5 7.8-7.8 7.8s-7.8-3.5-7.8-7.8v-21.8h15.6z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st10"
              d="M357.7 239.7v16c-3.3-.6-7.6-1.4-8.3-1.6-2.5-.8-5-1.7-7.3-3-1.4-.8-2.8-1.6-4.1-2.6-4.9-3.7.1-5.7 4.1-7.3 4.2-1.7 8.7-2.6 13.3-2.6.4 0 .9 0 1.3.2.5.2.8.5 1 .9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M324.1 226.2c0 14 7.4 25.3 19 25.3s21-11.3 21-25.3-9.4-25.3-21-25.3-19 11.3-19 25.3z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M358.8 228.6c-1 4 .9 7.9 4.1 8.7 3.2.8 6.6-1.9 7.6-5.9s-.9-7.9-4.1-8.7c-3.2-.8-6.6 1.8-7.6 5.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M324.9 199.3c-5.1 3.5-9.3 9-9.5 15.2-.1 2.1.4 4.5 2.1 5.9.9.8 2.1 1.2 3.3 1.4 6.5 1.3 12.9-2.1 18.7-5.4-.2 2.6 3 3.9 5.5 4.3 6.5.8 13.1-.1 19.2-2.6 3.2-1.3 6.5-3.3 7.6-6.6 1.7-4.8-1.8-9.8-5.9-12.9-12-8.8-29.1-7.4-41 .7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st2"
              d="M348.9 223.5c-2.7 0-8 0-8.7 4.5h-2.9c-.6-4.5-6-4.5-8.7-4.5-2.8 0-8.8 0-8.8 5.5 0 4.4 3.9 8 8.8 8 4.5 0 8.2-3.1 8.7-7h2.9c.5 4 4.2 7 8.7 7 4.8 0 8.8-3.6 8.8-8-.1-5.5-6-5.5-8.8-5.5zm-20.4 11.6c-3.8 0-6.9-2.7-6.9-6.1 0-2.6 1.9-3.6 6.9-3.6s6.9 1 6.9 3.6c0 3.3-3.1 6.1-6.9 6.1zm20.4 0c-3.8 0-6.9-2.7-6.9-6.1 0-2.6 1.9-3.6 6.9-3.6s6.9 1 6.9 3.6c-.1 3.3-3.2 6.1-6.9 6.1z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st2"
              d="M369.3 221.8l-13.4 4.9c-.3.1-.7 0-.8-.4l-.3-1c-.1-.3 0-.7.4-.8l13.4-4.9c.3-.1.7 0 .8.4l.3 1c.1.4-.1.7-.4.8zM357.1 324.1H349.2c-2.2 0-4.3-.1-6.4-.2-1 0-2.1-.1-3.1-.1h-.1c-.3 0-.7 0-1-.1-.4 0-.9 0-1.3-.1-.7 0-1.4-.1-2-.1h-.2c-.4 0-.7-.1-1.1-.1-3.4-.2-6.5-.5-9-.8h-.4c-.9-.1-1.8-.2-2.5-.4-.3 0-.5-.1-.8-.1-.2 0-.4-.1-.6-.1-.1 0-.3-.1-.4-.1-.2 0-.4-.1-.5-.1-.1 0-.1 0-.2-.1-.5-.1-.9-.3-1.2-.4 0 0-.1 0-.1-.1l-.1-.1c-1.9-2-.2-7.2.2-9.5 1-8 2.4-16 4.5-23.8 1.9-7 4.4-13.9 7.8-20.3h26c0 1.2 0 2.4-.1 3.6-.2 8.4-.3 16.9-.3 25.4 0 5.2 0 10.4.1 15.5.1 4 .2 8.1.4 12.1h.3z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st11"
              d="M343.3 323.9c-13-.5-24-1.7-24.9-2.7-1.9-2-.2-7.2.2-9.5 1-8 2.4-16 4.5-23.8 1.9-7 4.4-13.9 7.8-20.3.7-1.3 1.4-2.5 2.1-3.8 1.7-2.8 3.6-5.5 6.1-7.6.1-.1.3-.2.4-.3.4-.3.7-.5 1.1-.8 1 2 1 5.8 1.3 7.7.4 2.9.7 5.9 1 8.9.5 6.8.6 13.5.6 20.3-.2 10.5-.2 21.2-.2 31.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st2"
              d="M366.8 234.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5.6 1.5 1.5zM332.4 311.6h-32.5c-.9 0-1.7-.7-1.9-1.6l-8.4-43.7c-.2-1.2.7-2.3 1.9-2.3H324c.9 0 1.7.7 1.9 1.6l8.4 43.7c.3 1.2-.6 2.3-1.9 2.3z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M290.8 294c.1.1.1.3.2.4 1.5 2.7 6.2 3.1 8.5 1.3.8-.6 1-2 .1-2.5.7-.4 1.1-1.2.8-2-.2-.7-1-1.3-1.9-1.3.7-.4 1.2-1.1 1.1-1.8-.1-.7-.9-1.3-1.7-1.2 3.1-.4-1.4-3.4-2.2-3.6-2.1-.6-4.2-.1-5.3 1.9-.9 1.8-.8 3.9-.5 5.9.3 1 .5 2 .9 2.9zM331.3 283.9c-1 .2-1.3 1.5-1.3 2.6-.4-.8-.5-1.6-.7-2.4-.3-.8-.7-1.6-1.5-1.9-1.3-.5-2.6.8-3.5 1.9-1.5 2.1-3 4.8-2 7.2.4 1 1.1 1.8 1.9 2.6 1.4 1.4 2.8 2.7 4.3 3.9.8.6 1.6 1.3 2.6 1.2 1.1 0 2-.9 2.5-1.8 1.4-2.3 1.2-4.6.4-7.1-.5-1.4-.3-6.7-2.7-6.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st11"
              d="M382.4 321.8c-.4.1-.9.2-1.3.3-.2 0-.4.1-.6.1-.2.1-.4.1-.7.1-.2 0-.5.1-.7.1-.5.1-1 .2-1.6.3-.3 0-.7.1-1 .2-1.2.2-2.4.3-3.7.4-.3 0-.6.1-.9.1-.6.1-1.2.1-1.7.1-.8.1-1.6.1-2.4.2-.4 0-.8.1-1.2.1h-.9-.1c-.6 0-1.2.1-1.8.1H357c-.2-4-.3-8.1-.4-12.1-.1-5.2-.2-10.4-.1-15.5 0-8.5.2-16.9.3-25.4 0-1.2 0-2.4.1-3.6.1-4.9.3-10 1.7-14.7 1 .4 2 .8 3 1.4.4.2.8.5 1.2.8.1.1.2.1.3.2.7.5 1.3 1 2 1.6 3.2 2.9 5.5 6.7 7.3 10.7.2.4.3.7.5 1.1 3.7 8.8 5.3 18.4 6.9 27.8 1.2 8.6 2.6 17.1 2.6 25.6zM356.9 324.1h.2-.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              d="M372.9 270.8c-.5 9.6-2.1 19.1-4.8 28.4-.9 3-2.1 6.5-5 9.3-2.8 2.7-6.6 4.1-10.7 4.1-2.2 0-4.4-.4-6.5-1.2-4.8-1.8-8.5-5.1-11.5-7.8L327 297c.4-.8.7-1.6 1-2.1 1.8-2.8 4.3-5.1 7.1-6.8l7.3 6.5c2.5 2.2 5 4.5 7.7 5.5 1.8.7 3.9.6 4.7-.3.8-.8 1.5-2.9 1.8-4 2.4-8.3 3.9-16.9 4.3-25.5.2-3.2 2.8-5.7 6-5.8 3.4-.1 6.1 2.8 6 6.3z"
              fill="#49498f"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M135.6 208.5c-3.9 6-5.5 13.3-5.8 20.5-.2 5.2.1 10.7-2.1 15.5-3.5 7.3-12.6 11.5-13.9 19.5-.5 2.9.3 6 1.6 8.6 1.6 2.9 4 5.5 7.1 6.7 3.1 1.2 6.8.9 9.5-1.1 1.6 2.9 4.7 4.7 7.8 5.8 3.6 1.3 7.6 2 11.3.9 3.7-1.1 6.9-4.3 7.3-8.1 2.8 2.9 7.9 2.4 10.7-.4 2.9-2.8 3.7-7.1 3-11.1-.4-2.2-1.1-4.3-2.3-6.1-5.1-7.9-16.9-10-20.5-18.6-2.5-6.1.1-12.9 2.9-18.9 2.6-5.5 9.5-19.3 1.5-23.8-6.1-3.3-15.3 6.3-18.1 10.6z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M189.9 320.4c-16.7 4.4-60.8 1.3-62.7-.7-1.8-1.9-.1-7 .2-9.3 1-7.8 2.3-15.6 4.4-23.3 2.2-8.2 5.3-16.3 9.7-23.6 1.7-2.7 3.5-5.4 6-7.4.1-.1.2-.2.4-.3 6-4.7 15-5.4 21.6-1.5 1.2.7 2.3 1.6 3.3 2.5 3.4 3.1 5.8 7.3 7.6 11.5 3.7 8.7 5.2 18 6.8 27.2 1.3 8.3 2.7 16.5 2.7 24.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M151.7 234.9v21.3c0 4.2 3.4 7.6 7.6 7.6 4.2 0 7.6-3.4 7.6-7.6v-21.3h-15.2z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st10"
              d="M151.7 240v15.7c3.3-.6 7.5-1.3 8.1-1.5 2.5-.7 4.9-1.7 7.1-2.9 1.4-.8 2.8-1.6 4-2.6 4.8-3.6-.1-5.6-4-7.2-4.1-1.7-8.5-2.5-13-2.5-.4 0-.9 0-1.3.2-.3.2-.6.5-.9.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M184.6 226.8c0 13.7-7.3 24.7-18.6 24.7-11.4 0-20.6-11.1-20.6-24.7 0-13.7 9.2-24.7 20.6-24.7 11.3 0 18.6 11.1 18.6 24.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M150.6 229.1c.9 3.9-.9 7.8-4 8.5-3.2.8-6.5-1.8-7.4-5.8-.9-3.9.9-7.8 4-8.5 3.1-.7 6.5 1.9 7.4 5.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M183.9 200.5c5 3.4 9.1 8.8 9.3 14.9.1 2.1-.4 4.4-2 5.7-.9.8-2 1.1-3.2 1.4-6.4 1.2-12.7-2.1-18.3-5.3.2 2.5-2.9 3.9-5.4 4.2-6.3.8-12.8-.1-18.7-2.5-3.1-1.3-6.3-3.2-7.5-6.4-1.7-4.7 1.8-9.6 5.7-12.6 11.6-8.7 28.3-7.3 40.1.6z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M218.2 260.8c-.2-1.6-.3-3.3-1.1-4.7-.3-.5-.7-.8-1.1-1-1-.3-1.6.3-2.1.9-2 2.3-3.9 4.8-5.5 7.4-.4-1.5-1.1-3-1.8-4.4-.2-.4-.6-.7-1.1-.7-.9 0-1.2.9-1.4 1.6l-1.2 5.7c-.1.4-.2.7-.3 1.1-10.5 11.1-15.3 14.3-24.8 19.8-2.6 1.5-5.6 3-7.8 2.7-2.7-.4-5.3-3.7-7-6.2-3.3-4.8-6.1-10-8.3-15.4-1.2-2.8-4.3-4.2-7.2-3.3-3.2 1.1-4.8 4.6-3.5 7.6 2.5 6.2 5.7 12.1 9.5 17.6 2.9 4.2 7.5 9.9 14.7 11.1.9.1 1.7.2 2.5.2 4.8 0 9.2-2.1 12.9-4.3 11.4-6.6 16-11.1 27.5-23.3 0 0 3.6-3.9 5.4-5.8.8-.9 1.6-1.8 1.9-2.9 0-1.3-.1-2.5-.2-3.7z"
            />
          </g>
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M288.2 319.4h-78.3v-51.2c0-2.5 2-4.4 4.4-4.4h69.4c2.5 0 4.4 2 4.4 4.4v51.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st14"
            d="M249 303.6c-1.6 1.3-3.6 2.1-5.8 2.1-5.1 0-9.3-4.1-9.3-9.3 0-5.1 4.1-9.3 9.3-9.3 2.2 0 4.3.8 5.8 2.1-2.1 1.7-3.4 4.3-3.4 7.2 0 2.9 1.4 5.5 3.4 7.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M252.5 296.4c0 2.9-1.3 5.5-3.4 7.2-2.1-1.7-3.4-4.3-3.4-7.2 0-2.9 1.3-5.5 3.4-7.2 2 1.7 3.4 4.3 3.4 7.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st3"
            d="M264.1 296.4c0 5.1-4.1 9.3-9.3 9.3-2.2 0-4.3-.8-5.8-2.1 2.1-1.7 3.4-4.3 3.4-7.2 0-2.9-1.3-5.5-3.4-7.2 1.6-1.3 3.6-2.1 5.8-2.1 5.2.1 9.3 4.2 9.3 9.3z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st11"
            d="M183.9 319.4h-52.6c-1.7 0-3.2-1.1-3.8-2.7-.9-2.6 1.1-5.2 3.8-5.2h52.6c1.7 0 3.2 1.1 3.8 2.7.8 2.6-1.1 5.2-3.8 5.2z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M156.8 319.4H97.5c-1.4 0-2.5-.9-2.8-2.3l-9.3-40.6c-.4-1.8 1-3.6 2.8-3.6h59.4c1.4 0 2.5.9 2.8 2.3l9.3 40.6c.4 1.9-1 3.6-2.9 3.6z"
          />
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st14"
              d="M121.9 302.1c-1.3 1-2.9 1.6-4.6 1.6-4 0-7.3-3.3-7.3-7.3s3.3-7.3 7.3-7.3c1.7 0 3.4.6 4.6 1.6-1.6 1.3-2.7 3.4-2.7 5.7.1 2.3 1.1 4.3 2.7 5.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st6"
              d="M124.6 296.4c0 2.3-1 4.3-2.7 5.7-1.6-1.3-2.7-3.4-2.7-5.7 0-2.3 1-4.3 2.7-5.7 1.7 1.4 2.7 3.4 2.7 5.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M133.9 296.4c0 4-3.3 7.3-7.3 7.3-1.7 0-3.4-.6-4.6-1.6 1.6-1.3 2.7-3.4 2.7-5.7 0-2.3-1-4.3-2.7-5.7 1.3-1 2.9-1.6 4.6-1.6 4 0 7.3 3.3 7.3 7.3z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M321.3 309.1H388v10.8h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st15"
              d="M321.3 306.9H388v4.3h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M321.3 298.3H388v10.8h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st15"
              d="M321.3 296.2H388v4.3h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M321.3 287.6H388v10.8h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st15"
              d="M321.3 285.4H388v4.3h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M321.3 276.8H388v10.8h-66.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st15"
              d="M321.3 274.7H388v4.3h-66.7z"
            />
          </g>
          <g>
            <ellipse cx={251.9} cy={429} rx={197.8} ry={25.4} fill="#d5cfff" />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M392 325.8l-.5 7.9-1.1 15.6-4.3 49.6-.7 7.9-.6 6-1.5 17.5H117l-1.6-17.8-.5-5.7-.7-7.9-4.3-49.6-1.6-23.5z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              opacity={0.19}
              fill="#514e92"
              d="M392 325.8l-1.6 23.5H109.9l-1.6-23.5z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st14"
              d="M405.5 333.7H97.4c-4.1 0-7.4-3.3-7.4-7.4 0-4.1 3.3-7.4 7.4-7.4h308.1c4.1 0 7.4 3.3 7.4 7.4 0 4.1-3.3 7.4-7.4 7.4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st13"
              d="M386.1 398.9l-.7 7.9H114.9l-.7-7.9z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              d="M50.6 362.5c-.9-4.1-.4-9.3 3.3-11.2 4.2-2.2 9 1.2 12.5 4.5-6.3-9.7-9.6-21.2-9.5-32.7 0-3.9 1-8.6 4.7-10 3.5-1.4 7.3 1.2 9.4 4.4 2 3.1 3.1 6.9 5.4 9.8-2.2-13.3-4-28 3.5-39.1 1-1.4 2.2-2.9 3.9-3.1 2.6-.4 4.7 2 6.1 4.2 4.5 7.3 6.9 15.9 6.8 24.4 1.1-3.2 3.2-6 6-8 1.7-1.2 3.8-2.1 5.9-1.7 4.4.7 6.3 6 6.8 10.5 1.6 13.2-1 26.9-7.2 38.8 3.3-3 8.2-6.1 11.8-3.4 2.2 1.7 2.5 4.9 2.3 7.7-.8 11.3-7.1 22.1-16.5 28.4-8.6 5.7-25.5 10-34.7 3.2-3.8-2.8-8.1-7.2-11.6-10.6-4.4-4.5-7.6-10.1-8.9-16.1z"
              fill="#464689"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st3"
              d="M110.2 362.4c-6 7.6-11.6 15.1-20.8 18.9.3-9.7.3-19.4-.1-29.2 0 0 .1 0 .2-.1 8-7.3 13.2-17.7 15.9-28.1.3-1-1.2-1.4-1.6-.4-3.9 9.3-7.9 17.7-14.6 25.2-.7-13.6-2.1-27.1-4.7-40-.2-1-1.8-.8-1.7.2.9 14.5 2.8 28.8 3.5 43.3 0 .9 0 1.7.1 2.6-3.3-3.3-7.1-6.2-10.1-9.9-3.7-4.4-6.3-9.5-9.9-13.9-.3-.4-.9 0-.8.4 1.4 5.3 4.9 10.3 8.3 14.6 3.5 4.4 7.6 9.4 12.6 12.2.2 7.3.2 14.5.2 21.8-3.4-2.5-7.1-4.6-10.4-7.2-4-3.2-7.7-6.7-11.6-10-.3-.3-.9.1-.6.5 5.2 7.6 13.8 15.9 22.5 19.5l-.3 12.9c0 1.7 2.5 1.7 2.6 0 .2-3.9.4-7.9.5-11.9 9.4-3.7 17.4-11.5 22-20.5.3-.7-.6-1.5-1.2-.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st19"
              d="M109.6 384.6l-.7 4.7-.8 4.8-1 6.1-.5 3.3-2 12-.5 3.4-1.9 11.8H72.6l-1.9-11.3-.5-3.5-1.9-11.8-.6-3.4-1-6.6-.8-4.8-.8-4.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st7"
              d="M109.6 384.6l-1.5 9.5H66.7l-1.6-9.5z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st13"
              d="M110.4 389.3H64.3c-2.2 0-4-1.8-4-4s1.8-4 4-4h46.1c2.2 0 4 1.8 4 4 0 2.3-1.8 4-4 4z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st2"
              d="M107.1 400.2l-.5 3.3c-3.5-1.2-7.4-.4-11.2 1.8-2.1 1.2-3.6 2.8-6.1 3.2-2.9.4-5.4-.8-7.9-2.2-4.5-2.4-9-3.7-13-2.2l-.5-3.4c1.6-.6 3.4-.9 5.2-.9 7.1.2 11.3 6.5 19.1 3.9 4.7-1.6 6.3-4.7 11.9-4.2.9.1 2 .3 3 .7zM104.6 415.5l-.5 3.4c-2.8-.2-5.8.6-8.8 2.3-2.1 1.2-3.6 2.8-6.1 3.2-2.9.4-5.4-.8-7.9-2.2-3.6-1.9-7.2-3.1-10.6-2.8l-.6-3.5c.9-.2 1.8-.2 2.8-.2 7.1.2 11.3 6.5 19.1 3.9 4.7-1.6 6.3-4.7 11.9-4.2.2 0 .5.1.7.1z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st19"
              d="M382.5 379.8c-4.4-1.5-8.6-4.4-10.8-8.5-2.2-4.1-2.1-9.6.9-13.2 3-3.6 9.1-4.4 12.5-1.2-3.1-3.2-5.7-7.1-6.5-11.5-.7-4.4.8-9.4 4.6-11.8 3.8-2.4 9.6-1.2 11.4 2.8.4-11.1 5.9-22.9 16.2-26.9 1.6-.6 3.3-1 4.9-.6 1.4.4 2.6 1.5 3.5 2.6 5.7 6.9 5.3 16.8 4.5 25.7 1.8-4 5.5-7.2 9.8-7.9 4.3-.8 9.1 1 11.4 4.7 2.4 3.7 2.1 8.7.4 12.8-1.7 4.1-4.8 7.5-7.7 10.8 2.9-2.2 7.5-.3 9.1 3 1.5 3.3.7 7.3-1.1 10.5-3.4 6.2-9.6 10.4-16.3 12.5-6.7 2.1-13.8 2.4-20.8 2.2-4.9-.1-7.9-1.7-12.3-3.2-4.2-1.7-9.2-1.3-13.7-2.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st7"
              d="M436.5 365.9c-4.2 2.8-8.2 5.9-12.4 8.8-1.9 1.3-3.8 2.7-5.8 3.8-1 .8-2.1 1.3-3.2 1.7.2-3.9.2-7.9.1-11.8 3.3-2.2 6.6-6.7 8.6-8.8 4.9-5.1 9.4-10.6 13-16.6 1-1.6-1.5-3.1-2.5-1.5-2.9 4.7-6.3 8.9-10.2 12.8-2.1 2.1-5.9 7-9.1 9-.6-11.5-2.5-22.7-5.8-33.1-.3-1-2.1-.9-2 .3 1.1 11.2 3 22.3 3.6 33.5-7.1-1.8-16-16-19.4-19.8-.9-1-2.3.3-1.8 1.4 2.6 5.9 6.9 11 11.5 15.5 1.9 1.9 6.4 7.4 10 8.3.1 4 0 8-.2 12-1.3.2-2.5-.2-3.6-1.3-9.2-2.7-17-10.1-26-13.7-.9-.4-1.7 1-1 1.6 5.1 4.6 11.4 7.8 17.4 11 3.7 2 8.6 5.8 12.9 6.3-.4 6.8-1.1 13.6-1.9 20.5-.2 2 3.2 2.5 3.5.5 1.2-7 2.1-14.3 2.6-21.7 2.8-1.2 5.6-3.4 7.6-4.7 5.5-3.6 11-7.5 15.7-12.1 1-.9-.3-2.7-1.6-1.9z"
            />
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st5"
                d="M433.7 384.6l-.8 4.7-.7 4.8-1 6.1-.5 3.3-2 12-.5 3.4-1.9 11.8h-29.7l-1.8-11.3-.5-3.5-1.9-11.8-.6-3.4-1-6.6-.8-4.8-.8-4.7z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st4"
                d="M433.7 384.6l-1.5 9.5h-41.4l-1.6-9.5z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st13"
                d="M434.5 389.3h-46.1c-2.2 0-4-1.8-4-4s1.8-4 4-4h46.1c2.2 0 4 1.8 4 4 0 2.3-1.8 4-4 4z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st2"
                d="M431.2 400.2l-.5 3.3c-3.5-1.2-7.4-.4-11.2 1.8-2.1 1.2-3.6 2.8-6.1 3.2-2.9.4-5.4-.8-7.9-2.2-4.5-2.4-9-3.7-13-2.2l-.5-3.4c1.6-.6 3.4-.9 5.2-.9 7.1.2 11.3 6.5 19.1 3.9 4.7-1.6 6.3-4.7 11.9-4.2.9.1 2 .3 3 .7zM428.7 415.5l-.5 3.4c-2.8-.2-5.8.6-8.8 2.3-2.1 1.2-3.6 2.8-6.1 3.2-2.9.4-5.4-.8-7.9-2.2-3.6-1.9-7.2-3.1-10.6-2.8l-.6-3.5c.9-.2 1.8-.2 2.8-.2 7.1.2 11.3 6.5 19.1 3.9 4.7-1.6 6.3-4.7 11.9-4.2.2 0 .5.1.7.1z"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const FeedbackSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 750 500"
    >
      <style>
        {
          ".prefix__st0{fill:#f0efff}.prefix__st1{fill:none;stroke:#d3c6fc;stroke-width:1.0481;stroke-miterlimit:10}.prefix__st4,.prefix__st5{fill:#fff}.prefix__st5{stroke:#bbabf8;stroke-width:1.0481;stroke-miterlimit:10}.prefix__st6{fill:#dae0ff}.prefix__st7{fill:#faaf3b}.prefix__st8{fill:#e8ecff}.prefix__st9{fill:#bbabf8}.prefix__st10{fill:#e6dffc}.prefix__st11{fill:#ff7aa9}.prefix__st12{fill:#fdfdfe}.prefix__st14{fill:#452828}.prefix__st15{fill:#915046}.prefix__st18{fill:#b57a68}.prefix__st20{fill:#383757}.prefix__st21{fill:none;stroke:#474463;stroke-width:1.8647;stroke-linecap:round;stroke-miterlimit:10}.prefix__st22{fill:#474463}.prefix__st23{fill:#615f7f}.prefix__st24,.prefix__st25,.prefix__st26,.prefix__st28{fill:none;stroke:#383757;stroke-width:1.8647;stroke-miterlimit:10}.prefix__st25,.prefix__st26,.prefix__st28{stroke-linecap:round}.prefix__st26,.prefix__st28{stroke:#915046;stroke-width:1.2164}.prefix__st28{stroke:#452828;stroke-width:1.8231}"
        }
      </style>
      <g id="prefix__BACKGROUND">
        <circle className="prefix__st0" cx={511.6} cy={164} r={62} />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st0"
          d="M614.1 439.4c13.1-10.1 24.7-21.8 33.4-35.9 17.6-28.6 19.6-69-2.9-93.9-25-27.7-68-26.9-105.1-23.2-37.1 3.7-79.4 6.6-106.7-18.8-22.3-20.7-27-53.8-29.3-84.1s-4.2-63-23.1-86.8c-25.7-32.2-76.9-36.1-111.4-14s-52.5 64.4-52.9 105.3c-.2 17.5.9 38.6-13.6 48.5-11.5 7.9-27.4 4-39.8-2.4-12.4-6.4-24.1-15.3-37.9-17.2-18.4-2.5-36.8 8.7-47 24.2-10.2 15.5-13.5 34.6-14.1 53.2-1.6 52.8 18.5 105.4 53.2 145h497.2z"
        />
      </g>
      <g id="prefix__OBJECTS">
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M67.5 438.7h582.6"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M511.7 432.6H341c-6.3 0-11.4 5.1-11.4 11.4h182.1v-11.4z"
          fill="#8f9af8"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M567.1 356.1H448.9c-3.3 0-6.2 2-7.5 5l-32.6 76.3c-1.3 3.1 1 6.6 4.4 6.6h122c3.3 0 6.2-2 7.5-5l31.1-72.8c2-4.8-1.5-10.1-6.7-10.1z"
          fill="#b8c3ff"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st4"
          d="M505.9 401.7c-1.8 7.3-9.2 13.3-16.5 13.3-7.3 0-11.8-5.9-10-13.3 1.8-7.3 9.2-13.3 16.5-13.3s11.8 6 10 13.3z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M329.3 449.8h207.3M417.8 455.7h110"
        />
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M612.8 170.7H342.3c-12.2 0-22.1 9.9-22.1 22.1v115.1c0 12.2 9.9 22.1 22.1 22.1h104.1l18.6 18.6 18.6-18.6h129.2c12.2 0 22.1-9.9 22.1-22.1V192.8c0-12.2-9.9-22.1-22.1-22.1z"
          />
          <circle
            transform="rotate(-22.839 370.772 217.015)"
            className="prefix__st6"
            cx={370.7}
            cy={217}
            r={23.1}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st7"
            d="M418.9 196l4.3 12.7 13.4-.1-10.8 8 4.2 12.7-10.9-7.8-10.8 8 4.1-12.8-10.9-7.8 13.4-.1zM461.6 196l4.3 12.7 13.4-.1-10.8 8 4.3 12.7-11-7.8-10.7 8 4-12.8-10.9-7.8 13.4-.1zM504.4 196l4.2 12.7 13.4-.1-10.8 8 4.3 12.7-10.9-7.8-10.8 8 4-12.8-10.9-7.8 13.4-.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st8"
            d="M547.1 196l4.2 12.7 13.4-.1-10.7 8 4.2 12.7-10.9-7.8-10.8 8 4-12.8-10.9-7.8 13.4-.1zM589.8 196l4.3 12.7 13.4-.1-10.8 8 4.2 12.7-10.9-7.8-10.8 8 4.1-12.8-11-7.8 13.5-.1z"
          />
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M346.4 250.4h20.4v5.5h-20.4zM371.9 250.4h30.6v5.5h-30.6z"
            />
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st10"
                d="M346.4 266.6h44v5.5h-44zM408.4 266.6h103v5.5h-103zM529.4 266.6h79.3v5.5h-79.3z"
              />
              <g>
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st10"
                  d="M346.4 284h98.5v5.5h-98.5zM559.5 284h49.2v5.5h-49.2zM461.6 284h86.3v5.5h-86.3z"
                />
              </g>
              <g>
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st10"
                  d="M346.4 301.4h125.7v5.5H346.4z"
                />
              </g>
            </g>
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M667.2 83.1H490.6c-8 0-14.4 6.5-14.4 14.4v35.3c0 8 6.5 14.4 14.4 14.4h176.6c8 0 14.4-6.5 14.4-14.4V97.6c0-8-6.4-14.5-14.4-14.5z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st7"
              d="M544.1 104.3l2.7 8.3h8.8l-7 5.2 2.7 8.3-7.1-5.1-7 5.2 2.6-8.4-7.1-5.1h8.7zM572 104.3l2.7 8.3h8.8l-7.1 5.2 2.8 8.3-7.1-5.1-7.1 5.2 2.7-8.4-7.1-5.1h8.7zM599.8 104.3l2.8 8.3h8.8l-7.1 5.2 2.8 8.3-7.1-5.1-7.1 5.2 2.7-8.4-7.2-5.1h8.8zM627.7 104.3l2.8 8.3h8.7l-7 5.2 2.8 8.3-7.1-5.1-7.1 5.2 2.7-8.4-7.2-5.1h8.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M655.6 104.3l2.8 8.3h8.7l-7 5.2 2.8 8.3-7.2-5.1-7 5.2 2.6-8.4-7.1-5.1h8.8z"
            />
            <circle
              transform="rotate(-80.822 508.044 112.405)"
              className="prefix__st6"
              cx={508.1}
              cy={112.4}
              r={12.9}
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M492.5 127.9h11.4v3h-11.4zM506.7 127.9h17.1v3h-17.1z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st5"
              d="M213.3 141.9H92c-5.5 0-9.9 4.4-9.9 9.9v24.3c0 5.5 4.4 9.9 9.9 9.9h121.2c5.5 0 9.9-4.4 9.9-9.9v-24.3c.1-5.5-4.3-9.9-9.8-9.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st7"
              d="M128.8 156.4l1.9 5.7h6l-4.9 3.6 1.9 5.7-4.9-3.5-4.8 3.5 1.8-5.7-4.9-3.5h6zM147.9 156.4l1.9 5.7h6l-4.8 3.6 1.9 5.7-4.9-3.5-4.8 3.5 1.8-5.7-4.9-3.5h6zM167 156.4l1.9 5.7h6.1l-4.9 3.6 1.9 5.7-4.9-3.5-4.8 3.5 1.8-5.7-4.9-3.5h6zM186.2 156.4l1.9 5.7h6l-4.8 3.6 1.9 5.7-4.9-3.5-4.9 3.5 1.9-5.7-4.9-3.5h6z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st8"
              d="M205.3 156.4l1.9 5.7h6.1l-4.9 3.6 1.9 5.7-4.9-3.5-4.8 3.5 1.8-5.7-4.9-3.5h6z"
            />
            <circle
              transform="rotate(-80.671 104.024 161.98)"
              className="prefix__st6"
              cx={104}
              cy={162}
              r={8.8}
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M93.4 172.7h7.8v2.1h-7.8zM103.1 172.7h11.7v2.1h-11.7z"
            />
          </g>
        </g>
        <g>
          <circle className="prefix__st11" cx={623.1} cy={376.9} r={26.9} />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st4"
            d="M631.2 366.7c-4.5 0-8.1 3.6-8.1 8.1 0-4.5-3.6-8.1-8.1-8.1s-8.1 3.6-8.1 8.1c0 10.1 16.2 18.6 16.2 18.6s16.2-8.5 16.2-18.6c0-4.4-3.6-8.1-8.1-8.1z"
          />
          <circle
            transform="rotate(-80.706 118.76 268.459)"
            className="prefix__st11"
            cx={118.8}
            cy={268.5}
            r={26.9}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st4"
            d="M126.8 258.3c-4.5 0-8.1 3.6-8.1 8.1 0-4.5-3.6-8.1-8.1-8.1s-8.1 3.6-8.1 8.1c0 10.1 16.2 18.6 16.2 18.6s16.2-8.5 16.2-18.6c0-4.5-3.6-8.1-8.1-8.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st9"
            d="M265.7 79.2l6.5 20.2h21.1l-17.1 12.4 6.6 20.1-17.1-12.4-17.1 12.4 6.5-20.1L238 99.4h21.1zM297.9 127.4l5 15.4h16.2l-13.1 9.5 5 15.3-13.1-9.4-13 9.4 5-15.3-13.1-9.5h16.1zM276.8 174l2.9 9h9.4l-7.6 5.5 2.9 8.9-7.6-5.5-7.6 5.5 2.9-8.9-7.6-5.5h9.4z"
          />
          <g>
            <circle
              transform="rotate(-45.001 651.658 255.105)"
              className="prefix__st9"
              cx={651.7}
              cy={255.1}
              r={34.8}
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st4"
              d="M634 238v12l24.4 5.6-24.4 5.6v12.1l45.2-17.7z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st9"
              d="M445.7 95.1c0 28.1-22.8 51-50.7 50.9-28.3-.1-48-21.7-50.7-44.6-1.8-15.1 2.3-28.6 12.3-40 10-11.5 23-17.4 38.3-17.4 27.8.1 51 22.5 50.8 51.1z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st12"
              d="M402 114.2h-13.5c-1.6 0-2.2-.5-2.2-2.1.1-7-.3-14 .2-21 .3-4.5 2.1-8.5 4.9-12.1 1.9-2.4 3.8-4.8 6-6.9.7-.7 1.1-1.5 1.1-2.5 0-1.2.1-2.4.1-3.6 0-1.5.5-2.7 1.9-3.3 1.5-.6 2.9-.3 4.1.8 1.2 1.1 1.6 2.5 2 4 .9 3.8.2 7.4-1.3 10.8-.5 1.2-1 2.4-1.6 3.5-.4.7-.1 1 .6 1.1.3.1.7 0 1 0h12.1c2.2 0 3.7 1 4.2 2.9.6 2.1-.3 4.5-2 5.5-.8.4-.8.6-.1 1.1 1.5 1 2.5 2.3 2.2 4.3-.2 1.5-1 2.5-2.4 3-.3.1-.7.1-.8.4-.1.4.4.4.6.6 1.9 1.4 2.2 5.3-.6 6.5-.5.2-.8.4-.2.9 1.2 1.2 1.3 2.7.7 4.2-.6 1.4-1.8 1.9-3.3 1.9-4.7-.1-9.2-.1-13.7 0 0-.1 0-.1 0 0zM380.9 118.2h-11.1c-1.1 0-1.6-.6-1.7-1.6-.1-.5 0-1.1 0-1.6V91.7c0-1.9.5-2.4 2.4-2.4h10c1.3 0 2 .6 2 1.9v24.6c-.2.1-.2.1 0 .2.1.9 0 1.7-1 2.1 0-.2-.1-.5-.4-.4-.5 0-.2.3-.2.5z"
            />
          </g>
        </g>
        <g>
          <defs>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              id="prefix__SVGID_1_"
              d="M67.1 206.8h359.5v232.7H67.1z"
            />
          </defs>
          <clippath id="prefix__SVGID_2_">
            <use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
          </clippath>
          <g clippath="url(#prefix__SVGID_2_)">
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st14"
              d="M262.5 243c1.4 7.2 1 14.5 1.6 21.8.5 7.3 2.2 14.8 7 20.3 4.1 4.7 10.1 7.6 13 13.1 2.2 4.2 2.2 9.3.5 13.7-1.6 4.4-4.7 8.2-8.4 11.2-12.4 10.4-31 12-45.7 5.3-14.7-6.8-25.3-21.2-28.7-37-3.5-15.8-.2-32.7 7.6-46.9 4.4-8 10.5-15.4 18.6-19.6 6.8-3.4 16.9-4.7 23.7-.6 5.9 3.5 9.6 12.4 10.8 18.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st15"
              d="M379.6 405.5s-2.6 5.7-9.4 2.3l-4.4 8.3 11 5.8 8-15-3.1-14.8s-3 1.2-2.9 4.4c0 3.1.8 9 .8 9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              d="M389.6 425c.1-3.5-1.8-6.7-4.9-8.3l-11.5-6.1-2.4 4.5 18.8 9.9z"
              fill="#994f39"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              d="M392.8 430.1c.1-3.5-1.8-6.7-4.9-8.3l-13.2-7-2.4 4.5 20.5 10.8z"
              fill="#ab6955"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st7"
              d="M377.4 378l3.8 11.4h12.1l-9.7 7.1 3.8 11.5-9.8-7-9.8 7.2 3.7-11.6-9.9-7 12.1-.1z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st18"
              d="M370 407.7l.6-4 4.6-3.7c1.4-1.1 2.2-2.8 2.2-4.6v-.5l-14.2 5.1-6.2 7.3-4 7.5 21.4 11.3 1.5-2.7c2.9-5.4.8-12.2-4.6-15l-1.3-.7z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st18"
              d="M389.6 434.2c.1-3.5-1.8-6.7-4.9-8.3l-13.2-7-2.4 4.5 20.5 10.8z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              d="M369.8 407.3c-1.3 2.1-3.1 3.9-5 5.4"
              fill="none"
              stroke="#a15545"
              strokeWidth={1.865}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit={10}
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st18"
              d="M293.2 407.2l65.2 1.1-.2 8.9-77.6 11.9z"
            />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st20"
              d="M232.8 323.5H252c9 0 17.1 5.7 20 14.3l27.8 81.3s-1.9 15-13.7 16.4c-4.4.5-8.7-1.9-10.7-5.8l-42.5-80.6v-25.6z"
            />
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st20"
                d="M281.3 405.9l62.9 2.1-20.7 26.2-39.8 2.4c-5.3.3-9.3-4.6-8-9.7l2.6-9.9 3-11.1z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st21"
                d="M293.2 407.2c-5.1 3.1-10.9 7.9-13.6 13.3M293.2 407.2c-6.7.3-14.9 1.2-19.8 5.7"
              />
            </g>
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st4"
                d="M247.1 500c-10.2 1-20.9.8-31.2-.2-16.4-1.6-30.8-9.3-44.9-17.1-2-1.1-4.1-2.3-6.1-3.5 7.4-11.8 16.9-23.9 27.8-31.6H247l17.6 48.2c-5.4 2.4-11.8 3.6-17.5 4.2z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st22"
                d="M184.1 445l-15.8-108.8 7.9-12.8h72.3l19.9 53.5s-16.6 51.5-16.6 70.6l18.3 53.1-21.6 8.3-16.6-51-18.3 50.7-56.9-23.7 27.4-39.9z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st20"
                d="M168.3 336.2l8-13h10.4l3 25.9-10 66z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st4"
                d="M245.2 323.7v61.2l-51.3-61.2z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st18"
                d="M213.7 338.4c-3.6-.9-7.1-2.1-10.5-3.6l-9.8-11.7h51.7v9c-7.2 8.6-20.9 8.8-31.4 6.3z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st23"
                d="M193.4 323.2v38.2h22l-12.2 25.7 43.5-.3z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st23"
                d="M245.2 323.2h3.3l25.6 38.2h-20.2l21.8 25.7h-30.2z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st24"
                d="M245.4 387.1c-4.9 23.3-8.6 47-13.5 70.3M256.2 462.2c-4.2 1.4-8.7 2.1-13.2 2M208.4 463.7c-8.1-.4-16.1-2.5-23.4-6.1"
              />
            </g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st22"
              d="M189.7 323.1h-19.1c-9 0-17.1 5.7-20 14.3l-27.8 81.3s.3 6 3.1 11.2c4.4 8.2 15.4 10.3 19.8 2.1l44-83.2v-25.7z"
            />
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st15"
                d="M216.3 410.5l5.3 4.5 12.6 2.9-.1-.5c-.2-1.8-1.3-3.3-2.8-4.3l-3.2-2.5.9-3.5 5.3-4.4-6.4-5.5-13.7 9 2.1 4.3z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st7"
                d="M228.6 401.6l8.7 8.3 10.7-5.7-5.3 10.9 8.8 8.3-12-1.6-5.2 10.9-2.2-11.9-12-1.6 10.6-5.7z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st15"
                d="M236.5 406s-2.7-4.2-7.6-.8l-4.4-6.1 8.9-6.2 7.9 11-1.8 10.1s-2.5-.6-2.8-3.1c-.2-2.5-.2-4.9-.2-4.9z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st18"
                d="M216.9 411.5l-5.2-7 19.4-15 1.8 2.5c3.6 5 3.4 9.5.3 11.9l-4.2 3.3-12.1 4.3z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st18"
                d="M245.4 395.9c.6-.1 1 .4.8 1-.9 2.1-2.8 3.8-5.1 4.4l-11.8 2.9-1-4 17.1-4.3zM243.8 379.2c.6-.4 1.4-.1 1.4.7.1 2.9-1.1 5.7-3.5 7.6l-11.7 9.4-3.2-4 17-13.7z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st18"
                d="M246.3 387.5c.6-.3 1.4.2 1.2.9-.5 2.8-2.3 5.3-5 6.6l-11.7 5.8-2.3-4.6 17.8-8.7z"
              />
            </g>
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st22"
                d="M143.3 402.3l64.2-.4-20 27.9-49.7 7.5c-6.4 1-11.9-4.7-10.7-11.1 1.8-10.3 6.1-23.1 16.2-23.9z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st25"
                d="M160.8 402.2l-21.1.5M160.8 402.2l-22 5.8"
              />
            </g>
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st18"
                d="M206 272l2.3 56.5c.1 2.3 2 4.1 4.2 4.1h27.8c3.5 0 5.1-4.2 2.7-6.6-5.3-5.2-10.7-14.2-10.7-29v-23.8L206 272z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st15"
                d="M218.9 272.5l13.4.6v23.8c0 6.5 1 11.9 2.7 16.3-15.5-5.2-20.6-25.8-16.1-40.7z"
              />
            </g>
            <g>
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st18"
                d="M212.9 293.1c-1.9-1.3-3.7-2.8-5.5-4.5-8.9-8.7-14.2-20.4-15.5-32.8-1.2-11.5 1.1-23 10.7-30.6 10.2-8.1 26.2-8.8 37.7-3.2 11 5.4 17.1 15.7 19.3 27.4 1.1 5.8 1.4 11.8 1.5 17.7.1 11.1-1.6 32.4-14.3 35.1-13.7 2.9-23.8-2.3-33.9-9.1z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st14"
                d="M255.6 244.6c3.7 5.2 4.7 11.8 5.7 18.1 2.3-8.1 2.3-16.8 0-24.9-1.1-3.8-2.7-7.5-5.3-10.4-2.6-2.9-6.4-5-10.3-4.9-6.2.1-13.6 8.6-7.2 13.7 1.9 1.6 5.2 1.2 7.5 1.9 3.9.9 7.3 3.1 9.6 6.5z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st14"
                d="M240.9 249.2c-4.2 3.8-9.3 6.3-14.8 7.4-5.6 1.2-12.4.9-16.7 5.4-12.8 13.7-2 30.1 4.5 43.9 3.3 6.9 6.7 15 4.9 22.8-2.3 10-12.1 14.8-21.7 14.8-15.6.1-27.7-11.5-30.9-26.5-1.6-7.7-.5-15.4 2.5-22.7 2.8-6.7 7.2-12.5 9.4-19.4 3.5-11-1.5-22.7 2.1-33.9 7.1-22.3 41.4-44.2 62.3-26 12.2 10.6 8.3 25.2-1.6 34.2z"
              />
              <motion.path
                variants={animPath}
                initial="initial"
                animate="animate"
                exit="exit"
                className="prefix__st14"
                d="M210.3 254.1c-2.8 2.7-4.6 6.4-5 10.3-.5 4.4.7 8.8 2.9 12.7l2.9-.5c.3-5 1.6-10 3.1-14.7.7-2.2 1.6-4.3 2.6-6.4-.9-3.9-4-3.8-6.5-1.4z"
              />
              <g>
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st26"
                  d="M248.1 265.3c.8 3.7 2.3 7.3 4.4 10.4.7 1.1 1.6 2.4 1.3 3.7-.3 1.2-1.5 2-2.6 2.6"
                />
                <circle
                  transform="rotate(-20.298 246.921 288.91)"
                  cx={246.9}
                  cy={288.9}
                  fill="#ff7a7a"
                  r={3.2}
                />
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st26"
                  d="M251.7 287.1c-3.3 2-7.5 2.2-11 .7"
                />
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st28"
                  d="M259.2 255.2c-2.8-1.6-5.8-1.2-8 1.1M237.1 258.1c-4-1.3-8.2-.6-11.5 1.9"
                />
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st14"
                  d="M236.3 266.8c.3 1.5-.8 3-2.3 3.3-1.5.3-3-.8-3.3-2.3-.3-1.5.8-3 2.3-3.3 1.6-.2 3.1.8 3.3 2.3z"
                />
                <circle
                  transform="rotate(-80.642 255.061 264.86)"
                  className="prefix__st14"
                  cx={255.1}
                  cy={264.9}
                  r={2.8}
                />
              </g>
              <g>
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st18"
                  d="M207.5 270.3c-1.9-1.6-4.7-2.5-7-1.6-1.9.8-3.2 2.6-3.7 4.6-.5 2-.1 4.1.5 6 2.2 6.1 8.3 10.6 14.7 10.9 1.3.1.6-10.7.4-11.7-.5-3-2.5-6.2-4.9-8.2z"
                />
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st4"
                  d="M210.2 287.4c.3 1.5-.7 3-2.3 3.2-1.5.3-3-.7-3.2-2.3-.3-1.5.7-3 2.3-3.2 1.5-.2 2.9.8 3.2 2.3z"
                />
                <motion.path
                  variants={animPath}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  className="prefix__st26"
                  d="M200.9 273.1c1.1-.9 2.8-1 4.1-.5 1.3.6 2.3 1.7 3 3 .6 1.3.9 2.8 1 4.2-.7-.7-1.9-.8-2.7-.2-.8.6-1.1 1.7-.7 2.6.4.9 1.5 1.4 2.5 1.1"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};
export const SocialSVG = () => {
  return (
    <svg
      id="prefix__\u0421\u043B\u043E\u0439_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 3500 2000"
      xmlSpace="preserve"
    >
      <style>
        {
          ".prefix__st0{opacity:.28;fill:#c9c2f9}.prefix__st2{fill:#514e92}.prefix__st5{fill:#303c60}.prefix__st6{fill:#f09959}.prefix__st7{fill:#6791c9}.prefix__st8{fill:#75a1de}.prefix__st10{fill:#e38540}.prefix__st11{fill:#f5ce5c}.prefix__st13{fill:#2e5b9a}.prefix__st15{fill:#fff}.prefix__st17{fill:#1b243d}.prefix__st18{fill:#ffd24f}.prefix__st19{fill:#edc055}.prefix__st22{fill:#0f2d5c}.prefix__st23{fill:#a797fb}.prefix__st26{fill:#d54a41}.prefix__st27{fill:#58556e}.prefix__st28{fill:#7ec1d6}.prefix__st29{fill:#8ddaf2}.prefix__st30{fill:#3e6bab}.prefix__st31{fill:#f37168}.prefix__st32{fill:#ffcb30}.prefix__st33{fill:#4578bf}.prefix__st36{fill:#255096}.prefix__st37{fill:#ffc34e}.prefix__st38{fill:#a1a654}.prefix__st39{fill:#c1c765}.prefix__st42{fill:#a8ceff}.prefix__st43{fill:#93bbf0}.prefix__st53{fill:#2e2d3d}.prefix__st57{fill:#3a384d}.prefix__st60{fill:#7a4e34}.prefix__st61{fill:#a19afc}.prefix__st62{fill:#9bd6e8}.prefix__st63{fill:#d5cfff}"
        }
      </style>
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st0"
        d="M251.11 1170.41c-122.33-535.13 232-955.25 960-1039.19 815.36-94.01 979.27 356.93 747.64 487.85-231.64 130.92-623 939.15-673.32 1097.04-50.32 157.89-862.32 206.71-1034.32-545.7zM2837.49 593.21c384.22 16.79 645.16 602.74 357.39 907.76-287.77 305.03-1355.89 195.83-1317.83-25.57 38.06-221.4 494.06-150.29 690.06-423.84s160.76-463.14 270.38-458.35z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        d="M2961.62 1757.8c-299.34-.75-968.09 12.09-1493.64 39.38-525.55 27.29-80.72 88.45 281.24 62.41 361.96-26.03 615.16 56.88 1058.18 28.88s501.53-129.8 154.22-130.67z"
        opacity={0.5}
        fill="#d5cfff"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st2"
        d="M342.85 901.65a2.51 2.51 0 01-2.4-1.79l-7.08-23.98a2.49 2.49 0 011.32-2.96l22.55-10.8c1.24-.6 2.74-.07 3.33 1.17.6 1.25.07 2.74-1.17 3.33l-20.62 9.88 6.48 21.93c.39 1.32-.37 2.71-1.69 3.11-.25.07-.49.11-.72.11zM502.09 1440.76a2.51 2.51 0 01-2.4-1.79l-13.27-44.93c-.39-1.32.37-2.71 1.69-3.11 1.32-.39 2.71.37 3.11 1.69l13.27 44.93c.39 1.32-.37 2.71-1.69 3.11-.24.07-.48.1-.71.1zm-26.54-89.85a2.51 2.51 0 01-2.4-1.79l-13.27-44.93c-.39-1.32.37-2.71 1.69-3.11 1.32-.4 2.71.37 3.11 1.69l13.27 44.93c.39 1.32-.37 2.71-1.69 3.11-.24.07-.48.1-.71.1zm-26.54-89.85a2.51 2.51 0 01-2.4-1.79l-13.27-44.93c-.39-1.32.37-2.71 1.69-3.11 1.32-.39 2.71.37 3.11 1.69l13.27 44.93c.39 1.32-.37 2.71-1.69 3.11-.24.06-.48.1-.71.1zm-26.54-89.85a2.51 2.51 0 01-2.4-1.79l-13.27-44.93c-.39-1.32.37-2.71 1.69-3.11 1.32-.4 2.71.37 3.11 1.69l13.27 44.93c.39 1.32-.37 2.71-1.69 3.11-.24.06-.48.1-.71.1zm-26.54-89.86a2.51 2.51 0 01-2.4-1.79l-13.27-44.93c-.39-1.32.37-2.71 1.69-3.11 1.32-.4 2.71.37 3.11 1.69l13.27 44.93c.39 1.32-.37 2.71-1.69 3.11-.24.07-.48.1-.71.1zm-26.54-89.85a2.51 2.51 0 01-2.4-1.79l-13.27-44.93c-.39-1.32.37-2.71 1.69-3.11 1.32-.39 2.71.37 3.11 1.69l13.27 44.93c.39 1.32-.37 2.71-1.69 3.11-.24.07-.48.1-.71.1zM522.44 1509.66c-.38 0-.77-.09-1.12-.26-.62-.31-1.08-.86-1.28-1.53l-7.08-23.98c-.39-1.32.37-2.71 1.69-3.11 1.32-.39 2.71.37 3.11 1.69l6.33 21.41 20.94-7.75c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-23.45 8.68c-.28.11-.58.16-.87.16zM592.09 1483.89c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.28.1-.58.15-.87.15zm92.42-34.19c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.3-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.58.15-.87.15zm92.42-34.19c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.58.15-.87.15zm92.42-34.2c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.3-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.58.15-.87.15zm92.42-34.19c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.58.15-.87.15zm92.42-34.19c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.58.15-.87.15zm92.42-34.2c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.59.15-.87.15zm92.42-34.19c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.59.15-.87.15zm92.41-34.19c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48.48 1.29-.18 2.73-1.48 3.21l-46.21 17.1c-.28.09-.58.15-.87.15zm92.42-34.2c-1.02 0-1.97-.62-2.34-1.63-.48-1.29.18-2.73 1.48-3.21l46.21-17.1c1.29-.48 2.73.18 3.21 1.48s-.18 2.73-1.48 3.21l-46.21 17.1c-.29.1-.58.15-.87.15zM1561.23 1146.04c-.43 0-.87-.11-1.27-.35l-20.47-12.15-22.33 8.26c-1.29.48-2.73-.18-3.21-1.48s.18-2.73 1.48-3.21l23.45-8.67c.7-.26 1.49-.19 2.14.2l21.5 12.76c1.19.7 1.58 2.24.87 3.43-.48.78-1.31 1.21-2.16 1.21zM2271.03 1567.33c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43-.48.78-1.31 1.22-2.16 1.22zm-88.73-52.66c-.43 0-.87-.11-1.27-.35l-44.36-26.33c-1.19-.7-1.58-2.24-.87-3.43s2.24-1.58 3.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43a2.53 2.53 0 01-2.16 1.22zm-88.72-52.66c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43-.48.78-1.31 1.22-2.16 1.22zm-88.73-52.66c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43a2.53 2.53 0 01-2.16 1.22zm-88.73-52.66c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43-.47.78-1.3 1.22-2.16 1.22zm-88.72-52.66c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43-.48.78-1.31 1.22-2.16 1.22zm-88.72-52.66c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43c.7-1.19 2.24-1.58 3.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43-.48.78-1.31 1.22-2.16 1.22zm-88.73-52.67c-.43 0-.87-.11-1.27-.35l-44.36-26.33a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l44.36 26.33c1.19.7 1.58 2.24.87 3.43a2.52 2.52 0 01-2.16 1.22zM2336.89 1606.42c-.44 0-.88-.12-1.28-.35l-21.5-12.76a2.495 2.495 0 01-.87-3.43 2.497 2.497 0 013.43-.87l20.16 11.97 19.64-12.8a2.5 2.5 0 112.73 4.19l-20.94 13.65c-.42.27-.9.4-1.37.4zM2402.22 1563.85c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 112.73 4.19l-44.38 28.92c-.42.27-.89.4-1.36.4zm88.76-57.84c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 013.46.73 2.5 2.5 0 01-.73 3.46l-44.38 28.92c-.42.27-.89.4-1.36.4zm88.76-57.85c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 013.46.73 2.5 2.5 0 01-.73 3.46l-44.38 28.92c-.42.27-.89.4-1.36.4zm88.77-57.84c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 112.73 4.19l-44.38 28.92c-.42.27-.89.4-1.36.4zm88.76-57.85c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 013.46.73 2.5 2.5 0 01-.73 3.46l-44.38 28.92c-.42.27-.89.4-1.36.4zm88.76-57.84c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 013.46.73 2.5 2.5 0 01-.73 3.46l-44.38 28.92c-.42.27-.89.4-1.36.4zm88.77-57.85c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l44.38-28.92a2.5 2.5 0 013.46.73 2.5 2.5 0 01-.73 3.46l-44.38 28.92c-.42.27-.89.4-1.36.4zM3023.56 1158.94c-.82 0-1.62-.4-2.1-1.13a2.5 2.5 0 01.73-3.46l20.03-13.06 4.13-23.55a2.502 2.502 0 012.89-2.03c1.36.24 2.27 1.53 2.03 2.89l-4.32 24.62a2.51 2.51 0 01-1.1 1.66l-20.94 13.65c-.41.28-.88.41-1.35.41zM3057.67 1070.19c-.14 0-.29-.01-.43-.04a2.495 2.495 0 01-2.03-2.89l8.84-50.47a2.508 2.508 0 012.89-2.03c1.36.24 2.27 1.53 2.03 2.89l-8.84 50.47a2.503 2.503 0 01-2.46 2.07zm17.68-100.94c-.14 0-.29-.01-.43-.04a2.495 2.495 0 01-2.03-2.89l8.84-50.47a2.5 2.5 0 012.89-2.03c1.36.24 2.27 1.53 2.03 2.89l-8.84 50.47a2.497 2.497 0 01-2.46 2.07zm17.69-100.95c-.14 0-.29-.01-.43-.04a2.495 2.495 0 01-2.03-2.89l8.84-50.47a2.508 2.508 0 012.89-2.03c1.36.24 2.27 1.53 2.03 2.89l-8.84 50.47a2.488 2.488 0 01-2.46 2.07zm17.69-100.95c-.14 0-.29-.01-.43-.04a2.495 2.495 0 01-2.03-2.89l8.84-50.47a2.5 2.5 0 012.89-2.03c1.36.24 2.27 1.53 2.03 2.89l-8.84 50.47a2.488 2.488 0 01-2.46 2.07zm17.69-100.94c-.14 0-.29-.01-.43-.04a2.495 2.495 0 01-2.03-2.89l8.84-50.47a2.5 2.5 0 012.89-2.03c1.36.24 2.27 1.53 2.03 2.89l-8.84 50.47a2.497 2.497 0 01-2.46 2.07zM3146.11 565.46c-.14 0-.29-.01-.43-.04a2.495 2.495 0 01-2.03-2.89l3.84-21.92-22.18-1.75a2.492 2.492 0 01-2.29-2.69c.11-1.38 1.3-2.41 2.69-2.3l24.92 1.97a2.506 2.506 0 012.27 2.92l-4.31 24.62a2.524 2.524 0 01-2.48 2.08zM403.7 845.12c-.93 0-1.83-.52-2.26-1.42a2.49 2.49 0 011.17-3.33L448 818.62c1.24-.6 2.74-.07 3.33 1.17.6 1.25.07 2.74-1.17 3.33l-45.38 21.75c-.35.17-.72.25-1.08.25zm90.76-43.49a2.505 2.505 0 01-1.09-4.76l45.38-21.75c1.25-.6 2.74-.07 3.34 1.17s.07 2.74-1.17 3.33l-45.38 21.75c-.35.18-.71.26-1.08.26zm90.77-43.49a2.505 2.505 0 01-1.09-4.76l45.38-21.75a2.49 2.49 0 013.33 1.17c.6 1.24.07 2.74-1.17 3.33l-45.38 21.75c-.34.18-.71.26-1.07.26zM676 714.65c-.93 0-1.83-.52-2.26-1.42a2.49 2.49 0 011.17-3.33l45.38-21.75a2.49 2.49 0 013.33 1.17c.6 1.25.07 2.74-1.17 3.34l-45.38 21.75c-.34.16-.71.24-1.07.24zm90.76-43.5c-.93 0-1.83-.52-2.26-1.42a2.49 2.49 0 011.17-3.33l45.38-21.75a2.49 2.49 0 013.33 1.17c.6 1.25.07 2.74-1.17 3.33l-45.38 21.75c-.34.17-.71.25-1.07.25zm90.77-43.49c-.93 0-1.83-.52-2.26-1.42-.6-1.24-.07-2.74 1.17-3.33l45.38-21.75c1.24-.59 2.74-.07 3.34 1.17.6 1.25.07 2.74-1.17 3.34l-45.38 21.75c-.35.16-.72.24-1.08.24zm90.76-43.49c-.93 0-1.83-.52-2.26-1.42a2.49 2.49 0 011.17-3.33l30.03-14.39c.12-.06.25-.11.38-.15l16.34-4.77c1.33-.39 2.71.37 3.1 1.7.39 1.33-.37 2.71-1.7 3.1l-16.14 4.71-29.85 14.3c-.34.17-.7.25-1.07.25zm94.68-33.27c-1.08 0-2.08-.71-2.4-1.8-.39-1.33.37-2.71 1.7-3.1l48.31-14.11c1.33-.39 2.71.37 3.1 1.7.39 1.33-.37 2.71-1.7 3.1l-48.31 14.11c-.23.07-.47.1-.7.1zm2032.37-16c-.07 0-.13 0-.2-.01l-50.17-3.96a2.492 2.492 0 01-2.29-2.69 2.5 2.5 0 012.69-2.3l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69a2.504 2.504 0 01-2.49 2.31zM2975 526.98c-.07 0-.13 0-.2-.01l-50.17-3.96a2.507 2.507 0 01-2.3-2.69 2.506 2.506 0 012.69-2.3l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69a2.488 2.488 0 01-2.48 2.31zm-1835.42-4.29c-1.08 0-2.08-.71-2.4-1.8-.39-1.33.37-2.71 1.7-3.1l48.31-14.11c1.33-.39 2.71.37 3.1 1.7.39 1.33-.37 2.71-1.7 3.1l-48.31 14.11c-.23.06-.47.1-.7.1zm1735.09-3.64c-.07 0-.13 0-.2-.01l-50.17-3.96a2.492 2.492 0 01-2.29-2.69c.11-1.38 1.3-2.41 2.69-2.3l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69a2.504 2.504 0 01-2.49 2.31zm-100.34-7.92c-.07 0-.13 0-.2-.01l-50.17-3.96a2.492 2.492 0 01-2.29-2.69c.11-1.38 1.31-2.4 2.69-2.3l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69-.1 1.31-1.2 2.31-2.49 2.31zM2674 503.2c-.07 0-.13 0-.2-.01l-50.17-3.96a2.492 2.492 0 01-2.29-2.69c.11-1.38 1.31-2.4 2.69-2.3l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69a2.504 2.504 0 01-2.49 2.31zm-100.34-7.93c-.07 0-.13 0-.2-.01l-50.17-3.96a2.492 2.492 0 01-2.29-2.69 2.51 2.51 0 012.69-2.29l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69-.1 1.31-1.2 2.3-2.49 2.3zm-1337.47-.8c-1.08 0-2.08-.71-2.4-1.8-.39-1.33.37-2.71 1.7-3.1l48.31-14.11a2.501 2.501 0 011.4 4.8l-48.31 14.11c-.23.07-.46.1-.7.1zm1237.14-7.12c-.07 0-.13 0-.2-.01l-50.17-3.96a2.492 2.492 0 01-2.29-2.69 2.5 2.5 0 012.69-2.3l50.17 3.96c1.38.11 2.4 1.31 2.29 2.69a2.512 2.512 0 01-2.49 2.31zm-100.27-8.58c-.1 0-.2-.01-.29-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.512 2.512 0 012.78-2.19l49.98 5.89a2.5 2.5 0 012.19 2.78 2.522 2.522 0 01-2.49 2.21zm-99.96-11.78c-.1 0-.2-.01-.3-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.508 2.508 0 012.77-2.19l49.98 5.89a2.5 2.5 0 012.19 2.78 2.487 2.487 0 01-2.47 2.21zm-940.29-.73c-1.08 0-2.08-.71-2.4-1.8-.39-1.33.37-2.71 1.7-3.1l48.31-14.11c1.32-.39 2.71.37 3.1 1.7.39 1.33-.37 2.71-1.7 3.1l-48.31 14.11c-.24.07-.47.1-.7.1zm840.33-11.05c-.1 0-.2-.01-.3-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.5 2.5 0 012.78-2.19l49.98 5.89a2.5 2.5 0 012.19 2.78 2.496 2.496 0 01-2.48 2.21zm-99.95-11.78c-.1 0-.2-.01-.3-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.5 2.5 0 012.78-2.19l49.98 5.89a2.5 2.5 0 012.19 2.78 2.496 2.496 0 01-2.48 2.21zm-643.77-5.38c-1.08 0-2.08-.71-2.4-1.8-.39-1.33.37-2.71 1.7-3.1l48.31-14.11c1.33-.39 2.71.37 3.1 1.7.39 1.33-.37 2.71-1.7 3.1l-48.31 14.11c-.23.06-.47.1-.7.1zm543.81-6.39c-.1 0-.2-.01-.3-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.5 2.5 0 012.78-2.19l49.98 5.89a2.504 2.504 0 01-.29 4.99zm-99.95-11.78c-.1 0-.2-.01-.3-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.5 2.5 0 012.78-2.19l49.98 5.89a2.504 2.504 0 01-.29 4.99zm-347.25-10.05c-1.08 0-2.08-.71-2.4-1.8-.39-1.33.37-2.71 1.7-3.1l48.31-14.11c1.33-.39 2.71.37 3.1 1.7.39 1.33-.37 2.71-1.7 3.1l-48.31 14.11c-.23.07-.47.1-.7.1zm247.29-1.73c-.1 0-.2-.01-.29-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.506 2.506 0 012.78-2.19l49.98 5.89a2.5 2.5 0 012.19 2.78 2.522 2.522 0 01-2.49 2.21zm-99.96-11.78c-.1 0-.2-.01-.29-.02l-49.98-5.89a2.5 2.5 0 01-2.19-2.78 2.508 2.508 0 012.77-2.19l49.98 5.89a2.504 2.504 0 01-.29 4.99z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st2"
        d="M380.69 887.24c-.17 0-.35-.02-.52-.06l-24.46-5.19a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l24.46 5.19c1.35.29 2.21 1.61 1.93 2.96a2.498 2.498 0 01-2.44 1.99zM1465.95 1117.62c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.506 2.506 0 01-2.44 1.99zm-98.66-20.94c-.17 0-.35-.02-.52-.05l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.507 2.507 0 01-2.44 1.98zm-98.66-20.95c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.496 2.496 0 01-2.44 1.99zm-98.66-20.94c-.17 0-.35-.02-.52-.05l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.507 2.507 0 01-2.44 1.98zm-98.66-20.95c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.496 2.496 0 01-2.44 1.99zm-98.66-20.94c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.5 2.5 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.506 2.506 0 01-2.44 1.99zm-98.66-20.94c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.506 2.506 0 01-2.44 1.99zm-98.66-20.95c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.488 2.488 0 01-2.44 1.99zm-98.66-20.94c-.17 0-.35-.02-.52-.05l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.499 2.499 0 01-2.44 1.98zm-98.66-20.95c-.17 0-.35-.02-.52-.06l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.488 2.488 0 01-2.44 1.99zm-98.66-20.94c-.17 0-.35-.02-.52-.05l-49.33-10.47a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l49.33 10.47c1.35.29 2.21 1.61 1.93 2.96a2.499 2.499 0 01-2.44 1.98zM1539.73 1133.28c-.17 0-.35-.02-.52-.05l-24.46-5.19a2.505 2.505 0 01-1.93-2.96 2.505 2.505 0 012.96-1.93l21.76 4.62 2.49-22.1a2.51 2.51 0 012.76-2.21c1.37.15 2.36 1.39 2.21 2.76l-2.8 24.84c-.08.7-.45 1.34-1.02 1.75-.42.31-.93.47-1.45.47zM1548.35 1056.76c-.09 0-.19 0-.28-.02a2.504 2.504 0 01-2.21-2.76l5.82-51.68a2.504 2.504 0 012.76-2.21c1.37.15 2.36 1.39 2.21 2.76l-5.82 51.68a2.49 2.49 0 01-2.48 2.23zm11.64-103.36c-.09 0-.19 0-.28-.02a2.504 2.504 0 01-2.21-2.76l5.82-51.68a2.51 2.51 0 012.76-2.21c1.37.15 2.36 1.39 2.21 2.76l-5.82 51.68a2.49 2.49 0 01-2.48 2.23zm11.64-103.36c-.09 0-.19 0-.28-.02a2.504 2.504 0 01-2.21-2.76l5.82-51.68a2.51 2.51 0 012.76-2.21c1.37.15 2.36 1.39 2.21 2.76l-5.82 51.68a2.498 2.498 0 01-2.48 2.23zm11.64-103.36c-.09 0-.19 0-.28-.02a2.504 2.504 0 01-2.21-2.76l5.82-51.68a2.483 2.483 0 012.76-2.2c1.37.15 2.36 1.39 2.2 2.76l-5.82 51.68a2.489 2.489 0 01-2.47 2.22zm11.64-103.36c-.09 0-.19 0-.28-.02a2.504 2.504 0 01-2.21-2.76l5.82-51.68a2.495 2.495 0 012.76-2.2c1.37.15 2.36 1.39 2.2 2.76l-5.82 51.68a2.489 2.489 0 01-2.47 2.22zm11.64-103.36c-.09 0-.19-.01-.28-.02a2.504 2.504 0 01-2.21-2.76l5.82-51.68c.15-1.37 1.4-2.36 2.76-2.2 1.37.15 2.36 1.39 2.21 2.76l-5.82 51.68a2.513 2.513 0 01-2.48 2.22zM1618.19 436.6c-.09 0-.19 0-.28-.02a2.489 2.489 0 01-2.2-2.76l2.8-24.84c.15-1.37 1.4-2.35 2.76-2.2 1.37.15 2.36 1.39 2.21 2.76l-2.8 24.84c-.16 1.27-1.24 2.22-2.49 2.22zM565.65 1531.44h-.12l-24.97-1.16a2.489 2.489 0 01-2.38-2.61 2.507 2.507 0 012.61-2.38l24.97 1.16c1.38.06 2.45 1.23 2.38 2.61a2.502 2.502 0 01-2.49 2.38zM2097.86 1602.88h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61c.06-1.38 1.26-2.44 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.502 2.502 0 01-2.49 2.38zm-102.15-4.77h-.12l-51.07-2.38c-1.38-.06-2.45-1.23-2.38-2.61s1.25-2.43 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.488 2.488 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38c-1.38-.06-2.45-1.23-2.38-2.61s1.27-2.45 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.488 2.488 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38c-1.38-.06-2.45-1.23-2.38-2.61s1.26-2.43 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61-.05 1.33-1.16 2.38-2.49 2.38zm-102.14-4.76h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61c.07-1.38 1.21-2.45 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.502 2.502 0 01-2.49 2.38zm-102.15-4.77h-.12l-51.07-2.38c-1.38-.06-2.45-1.23-2.38-2.61s1.2-2.44 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.488 2.488 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38c-1.38-.06-2.45-1.23-2.38-2.61s1.23-2.46 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.482 2.482 0 01-2.49 2.38zm-102.14-4.76h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61 2.495 2.495 0 012.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.502 2.502 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38c-1.38-.06-2.45-1.23-2.38-2.61s1.24-2.43 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.502 2.502 0 01-2.49 2.38zm-102.15-4.77h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61 2.507 2.507 0 012.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.488 2.488 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61 2.502 2.502 0 012.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.482 2.482 0 01-2.49 2.38zm-102.14-4.76h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61 2.495 2.495 0 012.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.502 2.502 0 01-2.49 2.38zm-102.15-4.77h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61c.06-1.38 1.26-2.44 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.495 2.495 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61c.06-1.38 1.22-2.46 2.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.488 2.488 0 01-2.49 2.38zm-102.15-4.76h-.12l-51.07-2.38a2.489 2.489 0 01-2.38-2.61 2.49 2.49 0 012.61-2.38l51.07 2.38c1.38.06 2.45 1.23 2.38 2.61a2.482 2.482 0 01-2.49 2.38zM2173.9 1606.42h-.12l-24.97-1.17c-1.38-.06-2.45-1.23-2.38-2.61s1.27-2.43 2.61-2.38l24.97 1.17c1.38.06 2.45 1.23 2.38 2.61a2.482 2.482 0 01-2.49 2.38zM3095.31 1231.51c-.59 0-1.18-.21-1.66-.63l-18.68-16.62a2.51 2.51 0 01-.21-3.53 2.5 2.5 0 013.53-.21l18.68 16.62c1.03.92 1.12 2.5.21 3.53-.5.56-1.18.84-1.87.84zM3039.37 1181.74c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.5.55-1.18.84-1.87.84zm-74.54-66.32c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.49.56-1.18.84-1.87.84zm-74.53-66.31c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.49.55-1.18.84-1.87.84zm-74.53-66.32c-.59 0-1.18-.21-1.66-.63L2776.85 949a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.5.56-1.19.84-1.88.84zm-74.53-66.31c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.49.55-1.18.84-1.87.84zm-74.53-66.32c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.5.56-1.18.84-1.87.84zm-74.53-66.31c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.5.55-1.18.84-1.87.84zm-74.53-66.32c-.59 0-1.18-.21-1.66-.63l-37.27-33.16a2.51 2.51 0 01-.21-3.53 2.51 2.51 0 013.53-.21l37.27 33.16c1.03.92 1.12 2.5.21 3.53-.5.56-1.19.84-1.87.84zM2443.12 651.22c-.59 0-1.18-.21-1.66-.63l-17.3-15.39-19.81 11.99c-1.18.71-2.72.34-3.43-.85a2.5 2.5 0 01.84-3.43l21.39-12.94a2.5 2.5 0 012.96.27l18.68 16.62c1.03.92 1.12 2.5.21 3.53-.51.54-1.2.83-1.88.83zM1662.65 1095.46c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.49 2.49 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.4.25-.85.37-1.29.37zm82.27-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.4.25-.85.37-1.29.37zm82.27-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.41.25-.85.37-1.29.37zm82.26-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.4.26-.85.37-1.29.37zm82.27-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.4.26-.85.37-1.29.37zm82.27-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.41.26-.85.37-1.29.37zm82.26-49.76c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.4.25-.85.37-1.29.37zm82.27-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88c1.18-.71 2.72-.34 3.43.85a2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.4.24-.85.36-1.29.36zm82.27-49.77c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l41.13-24.88c1.18-.71 2.72-.34 3.43.85a2.5 2.5 0 01-.84 3.43l-41.13 24.88c-.41.24-.85.36-1.29.36zM1600.13 1133.28c-.85 0-1.67-.43-2.14-1.21a2.5 2.5 0 01.84-3.43l21.39-12.94a2.5 2.5 0 013.43.84 2.5 2.5 0 01-.84 3.43l-21.39 12.94c-.4.26-.85.37-1.29.37zM3096.7 592.27c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l16.81-18.5a2.499 2.499 0 113.7 3.36l-16.81 18.5c-.49.55-1.17.82-1.85.82z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st2"
        d="M2337.36 1428.09c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.55-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.54-1.17.82-1.85.82zm69.03-75.99c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.55-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.54-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.51-37.99a2.499 2.499 0 113.7 3.36l-34.51 37.99c-.49.54-1.17.82-1.85.82zm69.03-75.99c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.55-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.54-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.54-1.17.82-1.85.82zm69.04-75.99c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.5.55-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.51-37.99a2.499 2.499 0 113.7 3.36l-34.51 37.99c-.49.54-1.17.82-1.85.82zm69.03-75.98c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l34.52-37.99a2.499 2.499 0 113.7 3.36l-34.52 37.99c-.49.54-1.17.82-1.85.82zM2286.03 1484.59c-.6 0-1.2-.21-1.68-.65a2.499 2.499 0 01-.17-3.53l16.81-18.5a2.499 2.499 0 113.7 3.36l-16.81 18.5c-.49.54-1.17.82-1.85.82z"
      />
      <defs>
        <circle
          id="prefix__SVGID_1_"
          transform="rotate(-45.001 1559.735 1101.454)"
          cx={1559.74}
          cy={1101.43}
          r={320.17}
        />
      </defs>
      <clipPath id="prefix__SVGID_00000155852900912199309540000012898421583926545826_">
        <use xlinkHref="#prefix__SVGID_1_" overflow="visible" />
      </clipPath>
      <circle
        transform="rotate(-45.001 1559.735 1101.454)"
        cx={1559.74}
        cy={1101.43}
        clipPath="url(#prefix__SVGID_00000155852900912199309540000012898421583926545826_)"
        fill="#d5cfff"
        r={320.17}
      />
      <g clipPath="url(#prefix__SVGID_00000155852900912199309540000012898421583926545826_)">
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M1508.01 843.52c48.64-43.32 84.35-17.48 110.95 11.4 21.2 23.02 24.16 28.12 41.67 51.97 2.6 3.54 4.6 7.47 4.68 11.86.49 26.36 13.98 137.84-1.01 176.3-17.48 44.84-233.04 65.35-233.04 65.35l76.75-316.88z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M1646.06 1120.8a2.43 2.43 0 01-2.43-2.31c-.07-1.34.97-2.49 2.31-2.56 6.33-.32 11.48-3.17 15.76-8.71 24.12-31.25 10.53-135.72-1.3-192.53-.27-1.32.57-2.61 1.89-2.88a2.43 2.43 0 012.88 1.89c2.59 12.42 11.24 56.49 13.94 102.4 2.78 47.19-1.78 78.85-13.55 94.09-5.12 6.64-11.64 10.21-19.37 10.6-.04.01-.09.01-.13.01zM1526.25 830.61c-93.47 51.67-36.48 226.46-155.02 288.77-32.84 17.26-133.75 104.87-67.63 220.38 43.25 75.56 172.5 59.27 215.06-7.6s7.59-501.55 7.59-501.55z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M1277.51 1228.2c-.11 0-.21-.01-.32-.02a2.436 2.436 0 01-2.09-2.74c.08-.62 2.12-15.36 11.46-34.89 8.6-18 25.3-43.55 56.02-63.1 54.81-34.88 91.19-67.75 134.22-229.84.34-1.3 1.68-2.07 2.98-1.73 1.3.34 2.08 1.68 1.73 2.98-20.81 78.38-41.44 131.38-64.94 166.78-21.83 32.89-44.29 48.69-71.38 65.92-56.9 36.21-65.18 93.94-65.26 94.52a2.452 2.452 0 01-2.42 2.12z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M1279.55 1182.94c-.45 0-.9-.12-1.3-.38a2.432 2.432 0 01-.76-3.36c13.57-21.48 30.86-39.1 51.38-52.37 76.97-49.78 89.71-78.41 153.32-242.39.49-1.25 1.9-1.88 3.15-1.39s1.88 1.9 1.39 3.15c-31.81 82.03-50.83 130.09-71.63 164.17-22.35 36.62-47.57 57.26-83.58 80.55-19.92 12.88-36.71 30-49.9 50.88-.47.74-1.26 1.14-2.07 1.14z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1523.02 939.68c-32.18 66.84-27.23 127.49-27.23 127.49s3.71 23.52 18.57 28.47c14.85 4.95 35.9-9.9 34.66-29.71-1.24-19.8 4.95-68.08 12.38-85.41 7.42-17.33-38.38-40.84-38.38-40.84z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st7"
          d="M1352.99 1404.09c2.03 18.24-2.53 16.72 13.68 19.76 16.21 3.04 45.09-8.11 45.09-8.11l-32.42-60.29-26.35 48.64z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1499.67 1031.27c-9.12 29.64-77.51 6.84-101.44 13.68-23.94 6.84-44.45 107.14-47.87 197.19-3.42 90.05 1.14 161.85 10.26 173.25s159.58 15.96 173.25 11.4-113.98-61.55-113.98-61.55-7.98-104.86 2.28-158.44c10.26-53.57 102.58-124.24 102.58-124.24l-25.08-51.29zM1531.59 1040.39c23.94 36.47 86.63 31.92 108.28 61.55 21.66 29.63 67.25 192.63 67.25 192.63L1755 1129.3s38.82-6.52 26.22 20.52c-22.42 48.09-30.78 203.24-55.1 225.28-27.04 24.51-53.95 4.56-69.14-38.34-14.69-41.5-51.29-131.08-77.51-165.27-26.22-34.2-54.71-88.91-54.71-88.91l6.83-42.19z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st8"
          d="M1427.87 1044.95c47.87 55.85 141.34 53.57 161.86 46.73l20.52-6.84s15.96-5.7 29.64 10.26 46.73 116.26 52.43 139.06c5.7 22.8 14.82 60.41 14.82 60.41s-24.45 29.35-24.45 58.99 10.39 29.89 10.39 29.89-30.38-6.81-37.22-25.05-68.39-183.51-68.39-183.51l-169.83 3.42 2.28 186.93s-14.82-13.68-35.33 0c-20.52 13.68-27.36 45.59-23.94 50.15s-6.84 4.56-6.84 1.14-19.38-86.63-5.7-223.41 39.89-151.6 54.71-152.74c14.79-1.13 25.05 4.57 25.05 4.57z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st7"
          d="M1686.1 1381.09c.32.11.51.11.51.11l-.51-.11z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st7"
          d="M1692.67 1298.72c-9.88 3.04-26.6 38-26.6 38s-38-82.83-49.4-197.58l-13.56 77.85c18.72 50.27 48.11 129.15 52.71 141.42 6.26 16.68 31.48 23.64 34.94 24.41-.95-.32-3.04-1.58-4.77-6.59-1-.91-6.71-3.58-7.77-4.56-9.12-8.36-5.32-28.12.76-50.15 6.09-22.04 23.57-25.84 13.69-22.8zM1425.78 1178.14l-18.84-86.12c-20.52 28.88-22.8 127.67-14.44 195.3 6.85 55.47 17.11 69.86 24.16 75.64 2.08 1.23 3.23 2.28 3.23 2.28l-2.28-186.93 8.17-.17z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st8"
          d="M1371.23 1091.26c34.96 94.23 17.48 113.23 63.48 223.83 25.69 61.77 75.23 108.28 75.23 108.28s39.89 10.26 90.05 6.84c50.15-3.42 86.87-6.87 86.87-6.87s-52.67-31.89-54.95-53.54-12.17-107.56.75-168.35c10.09-47.47-31.52-94.95-31.52-94.95l-69.53-3.42-160.38-11.82z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M1432.78 1235.64c-6.08-22.04 25.84 6.84 78.27 12.16 52.43 5.32 110.95-3.04 82.07 6.08-28.88 9.12-107.91-4.56-93.47 24.32 16.99 33.98 37.06 66.87 66.11 86.63 19 12.92 64.59 25.08 20.52 18.24-44.08-6.84-91.19-58.51-111.71-91.95s-40.43-50.56-41.79-55.48z"
          opacity={0.5}
          fill="#6791c9"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st10"
          d="M1548.89 1057.25c.46-22.75 6.01-61.57 12.51-76.73 5.32-12.42-16.68-28.01-29.58-35.85l-10.91-.47c-1.66 3.62-3.22 7.23-4.68 10.8-11.52 75.65 22.96 106.91 39.41 113.2 7.1 2.71 15.06 3.02 21.86 2.4-10.16-3.6-20.06-7.71-28.61-13.35z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st11"
          d="M1528 1091.01c-3.96 0-8.08-.48-12.16-1.47-9.53-2.32-32.28-11.16-37.57-42.89a1.38 1.38 0 011.13-1.59c.75-.12 1.46.38 1.59 1.13 5.02 30.11 26.5 38.46 35.5 40.66 13.97 3.41 28.8.26 34.48-7.32 4.55-6.07 1.81-19.01 1.78-19.14-.16-.75.31-1.48 1.06-1.64.75-.16 1.48.31 1.64 1.06.13.58 3.03 14.32-2.27 21.39-4.68 6.25-14.35 9.81-25.18 9.81z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1635.27 969.41c-7.73 40.83-25.59 73.77-55.81 67.56-30.22-6.21-61.99-49.33-53.63-90.04 8.36-40.7 39.64-68.67 69.86-62.46 30.22 6.21 49.88 30.54 39.58 84.94zM1742.83 1171.05s-55.85 150.08-58.51 165.66 2.66 25.46 4.18 25.46c1.52 0 49.02-81.31 49.02-81.31l5.31-109.81zM1745.11 1164.46c4.56-15.2-2.53-34.45-2.53-34.45l20.26 2.53-17.73 31.92z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M1767.38 1138.54h-56.54c-3.43 0-5.9-3.31-4.92-6.59l35.69-119.68a5.136 5.136 0 014.92-3.66h56.54c3.43 0 5.9 3.31 4.92 6.6l-35.69 119.68a5.158 5.158 0 01-4.92 3.65z"
          fill="#4381db"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st13"
          d="M1774.47 1138.54h-56.54c-3.43 0-5.9-3.31-4.92-6.59l35.69-119.68a5.136 5.136 0 014.92-3.66h56.54c3.43 0 5.9 3.31 4.92 6.6l-35.69 119.68a5.14 5.14 0 01-4.92 3.65z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M1733.53 1051.79c-6.03 21.72-10.09 39.56-9.06 39.84 1.02.28 6.74-17.09 12.77-38.81s10.08-39.56 9.06-39.84c-1.03-.28-6.74 17.09-12.77 38.81z"
          fill="#9cbeed"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1771.96 1174.09c1.67-19.74 18.77-38.24 25.27-44.14a9.344 9.344 0 003.07-7.01c-.09-9.84-.53-33.06-2.57-35.78-2.59-3.45-9.07-47.92-12.09-46.19-3.02 1.73.86 40.58.86 40.58s-7.34-3.45-11.23-5.18c-3.88-1.73-19.86 15.97-19.86 15.97s-7.49 18.92 12.99 10.82c24.32-9.63 6.08 17.22-10.13 34.45-13.36 14.19-1.99 17.33-1.99 17.33l10.79-.43 4.89 19.58z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st11"
          d="M1765.82 1189.74c-1.8 0-3.84-.28-5.88-.92-5.29-1.65-14.52-6.96-16.96-24.04a1.378 1.378 0 112.73-.39c2.04 14.29 8.91 19.6 14.32 21.54 4.5 1.62 8.34.96 9.37.44.08-.45.39-.85.84-1.03.71-.28 1.51.06 1.8.77.27.68.11 1.44-.42 2.02-.91.98-3.09 1.61-5.8 1.61z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st11"
          d="M1763.68 1184.85c-1.67 0-3.42-.12-5.08-.37-9.83-1.43-16.41-6.42-18.07-13.7-.17-.74.3-1.48 1.04-1.65.74-.17 1.48.3 1.65 1.04 1.51 6.63 7.45 9.55 12.17 10.83 7.05 1.92 13.89.88 14.77-.05.37-.67 1.2-.87 1.86-.5.67.37.88 1.25.51 1.91-.96 1.71-4.69 2.49-8.85 2.49z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M1600.59 990.87c-.63 0-1.26-.05-1.89-.14-9.71-1.49-15.58-13.97-13.37-28.41 2.21-14.44 11.56-24.58 21.26-23.11 9.71 1.49 15.58 13.97 13.37 28.41-2.08 13.5-10.37 23.25-19.37 23.25zm4.15-46.92c-6.43 0-12.95 8.38-14.6 19.11-1.74 11.35 2.52 21.82 9.29 22.86 6.78 1.04 13.96-7.68 15.7-19.03 1.74-11.35-2.52-21.82-9.29-22.86-.36-.06-.73-.08-1.1-.08zM1632.23 990.88c-.33 0-.65-.02-.97-.07-6.47-.99-9.87-11.48-7.89-24.4 1.98-12.92 8.36-21.91 14.83-20.92 6.48.99 9.87 11.48 7.89 24.4-.89 5.82-2.79 11.16-5.33 15.04-2.55 3.88-5.54 5.95-8.53 5.95zm5.01-41.78c-3.62 0-8.57 7.07-10.23 17.87-1.72 11.21 1.16 19.64 4.8 20.2 1.78.27 3.9-1.28 5.86-4.26 2.26-3.44 3.96-8.27 4.77-13.58 1.72-11.21-1.15-19.64-4.8-20.2-.13-.02-.26-.03-.4-.03z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M1590.09 953.11c-.22 0-.45-.03-.67-.09l-74.47-21.28a2.437 2.437 0 01-1.67-3.01 2.437 2.437 0 013.01-1.67l74.47 21.28c1.29.37 2.04 1.72 1.67 3.01a2.445 2.445 0 01-2.34 1.76z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M1643.28 906.6c-115.25 67.89-121.59 22.29-121.59 22.29l6.84-64.85 68.39 3.8 46.36 38.76z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1530.61 943.95c2.68 11.48-.98 22.14-8.18 23.82-7.2 1.68-15.21-6.26-17.89-17.73-2.68-11.48.98-22.14 8.18-23.82 7.2-1.68 15.21 6.26 17.89 17.73z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st11"
          d="M1522.71 959.03c0 2.51-2.03 4.54-4.54 4.54-2.51 0-4.54-2.03-4.54-4.54 0-2.51 2.03-4.54 4.54-4.54 2.51 0 4.54 2.03 4.54 4.54z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1555.89 1391.93s31.16-13.68 40.28-7.6c9.12 6.08 35.46 33.94 35.46 33.94l-75.74-26.34z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st13"
          d="M1629.91 1420.76c-.59.74-1.48 1.05-1.97.68l-64.11-47.73c-3.45-2.57-5.1-6.5-3.44-8.58s5.86-1.34 9.12 1.47l60.63 52.08c.47.41.36 1.34-.23 2.08z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M1461.66 1386.11s51.67 20.52 57.75 20.52c6.08 0 40.02-22.8 51.42-19.76 11.4 3.04 67.13 31.16 65.61 33.44-1.52 2.28-17.48 7.6-64.59 6.08-47.12-1.52-123.87-8.36-123.87-8.36l13.68-31.92z"
        />
      </g>
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        d="M2288.75 1748.18s-270.97-188.21-385.59-79.69c-91.52 86.65 70.94 188.45 278.77 161.08 146.29-19.27 162.87 8.72 188.49 8.11 190.67-14.61 447.59-71.66 322.56-161.28-170.32-122.09-285.53 7.34-344.88 39.56l-59.35 32.22z"
        fill="#232e4f"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st17"
        d="M2639.09 1671.88c-71.22-14.7-342.53 85.92-342.53 85.92s-236.27-71.22-292.79-78c-56.52-6.78-82.52 14.7-82.52 14.7s26.67-30.05 57.65-32.78c30.98-2.73 75.74-10.17 75.74-10.17s452.18-21.48 512.1-7.91 72.35 28.24 72.35 28.24z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st18"
        d="M2254.84 1305.63c-10.75 1.7-177.78 74.55-179.83 105.08-2.05 30.52 45.76 278.13 138.23 310.35 92.47 32.22 195.9 0 195.9 0s108.52-267.9 76.3-318.77-178.04-96.65-178.04-96.65h-52.56z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st18"
        d="M2132.08 1363.3c-159.58 85.51-198.76 239.89-156.56 273.92 29.57 23.84 141.08 76.58 237.73 73.19 96.65-3.39 187.42 5.71 187.42 5.71s165.8-33.74 198.86-83.42-58.67-211.09-140.93-257.74c-82.26-46.66-326.52-11.66-326.52-11.66z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st6"
        d="M2284.23 1402.28c-22.07 0-40.13-18.06-40.13-40.13v-135.08c0-22.07 18.06-40.13 40.13-40.13 22.07 0 40.13 18.06 40.13 40.13v135.08c0 22.07-18.06 40.13-40.13 40.13z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st10"
        d="M2284.23 1186.94c-22.07 0-40.13 18.06-40.13 40.13v110.45c23.66 19.77 46.57 9.41 80.26-16.7v-93.75c0-22.07-18.06-40.13-40.13-40.13z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st6"
        d="M2372.31 1232.53c-6.59 13.46-17.31 20.93-23.92 16.68s-6.64-18.61-.04-32.08c6.59-13.46 17.3-20.93 23.92-16.68 6.62 4.25 6.64 18.61.04 32.08zM2217.04 1218.13c7.63 12.25 9.09 27.05 3.27 33.06-5.82 6.01-16.72.95-24.35-11.3-7.63-12.25-9.09-27.05-3.27-33.06 5.82-6.01 16.72-.95 24.35 11.3z"
      />
      <ellipse
        className="prefix__st6"
        cx={2286.03}
        cy={1231.66}
        rx={69.02}
        ry={88.87}
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st19"
        d="M2436.53 1451.62c45.22 24.12 84.62 115.5 84.62 115.5s-101.74 15.83-122.84 31.65c-21.1 15.83 3.01-6.03 15.07-49.74s23.15-97.41 23.15-97.41zM2121.72 1445.04c10.55 48.23 61.04 182.89 61.04 182.89s-46.77-53.27-96.47-56.28c-49.7-3.01-68.14-3.77-67.83 8.29.06 2.38 8.29-53.51 46.73-88.17 38.44-34.68 56.53-46.73 56.53-46.73z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        d="M2424.82 1748.69h-273.04c-11 0-20.39-7.95-22.21-18.8l-32.92-196.49c-2.3-13.73 8.29-26.24 22.21-26.24h338.88c13.92 0 24.51 12.51 22.21 26.24l-32.92 196.49c-1.82 10.85-11.21 18.8-22.21 18.8z"
        fill="#2a66c6"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        d="M2424.82 1748.69h-273.04c-11 0-20.39-7.66-22.21-18.12l-32.92-189.4c-2.3-13.24 8.29-25.29 22.21-25.29h338.88c13.92 0 24.51 12.06 22.21 25.29l-32.92 189.4c-1.82 10.46-11.21 18.12-22.21 18.12z"
        fill="#63acc2"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st17"
        d="M2324.36 1826.1c-1.63-.28-176.34-44.01-215.34-11.79s130.56 32.77 161.08 25.71c30.52-7.06 54.26-13.92 54.26-13.92zM2363.36 1833.94s37.3-28.11 86.48-23.02 91.56 15.81 49.17 29.1c-42.39 13.29-86.47 14.99-106.82 13.29-20.35-1.7-28.83-19.37-28.83-19.37z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st22"
        d="M2264.01 1106.39c-44.83 13.6-29.23 139.81 22.03 135.65 51.26-4.16 53.34-58.73 49.7-94.07-3.65-35.35-25.48-55.62-71.73-41.58z"
      />
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        className="prefix__st22"
        d="M2247.89 1199.94c-12.47-11.95-29.63 25.67-22.87 42.2s-2.69 26.15 6.45 43.95-16.84-11.31-20.48-32.62c-3.64-21.31-5.72-58.21-10.92-74.84-5.2-16.63.26-45.47 23.42-51.46 23.16-5.98 28.55-16.63 37.39-17.15 8.84-.52 50.94 3.64 71.73 15.07s32.22 28.59 30.67 54.57c-1.56 25.99-8.32 92.52-14.55 103.43-6.24 10.92-9.46 8.33-7.59 2.08 1.87-6.24 8.63-43.67 3.43-57.18-5.2-13.51-2.6-46.78-16.11-49.38-13.51-2.6-10.4 20.45-26.51 22.18s-54.06-.85-54.06-.85z"
      />
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st23"
          d="M2002.17 918.68h-246.19c-7.85 0-14.19-6.42-14.09-14.27l1.3-102.28c.1-7.85 6.6-14.27 14.45-14.27h246.19c7.85 0 14.19 6.42 14.09 14.27l-1.29 102.28c-.1 7.85-6.61 14.27-14.46 14.27z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M1990.07 907.97h-221.71c-6.8 0-12.29-5.56-12.21-12.36l1.07-84.7c.09-6.8 5.72-12.36 12.52-12.36h221.71c6.8 0 12.29 5.56 12.21 12.36l-1.07 84.7c-.09 6.8-5.72 12.36-12.52 12.36z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st23"
          d="M1851.6 912.73c-1.48 53.92-27.06 70.57-27.06 70.57s11.49-30.92 2.96-45.99c-8.53-15.06-22.72-21.41-22.72-21.41l46.82-3.17zM1980.02 828.69H1837.1c-2.34 0-4.24-1.92-4.21-4.26v-.2c.03-2.34 1.97-4.26 4.32-4.26h142.92c2.34 0 4.24 1.92 4.21 4.26v.2c-.03 2.34-1.97 4.26-4.32 4.26zM1979.79 846.92h-142.92c-2.34 0-4.24-1.92-4.21-4.26v-.2c.03-2.34 1.97-4.26 4.32-4.26h142.92c2.34 0 4.24 1.92 4.21 4.26v.2c-.03 2.34-1.97 4.26-4.32 4.26zM1979.53 867.54h-142.92c-2.34 0-4.24-1.92-4.21-4.26v-.2c.03-2.34 1.97-4.26 4.32-4.26h142.92c2.34 0 4.24 1.92 4.21 4.26v.2c-.03 2.34-1.97 4.26-4.32 4.26zM1819.97 843.35c-.2 15.55-10.65 28.15-23.35 28.15-12.7 0-22.83-12.6-22.64-28.15s10.65-28.15 23.35-28.15 22.84 12.61 22.64 28.15z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st23"
          d="M2207.92 1104.96h-249.35c-7.95 0-14.37-6.5-14.27-14.45l1.31-103.59c.1-7.95 6.69-14.46 14.64-14.46h249.35c7.95 0 14.37 6.5 14.27 14.46l-1.31 103.59c-.1 7.95-6.69 14.45-14.64 14.45z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M2195.66 1094.12h-224.55c-6.89 0-12.45-5.63-12.36-12.52l1.09-85.78c.09-6.89 5.79-12.52 12.68-12.52h224.55c6.89 0 12.45 5.63 12.36 12.52l-1.09 85.78c-.09 6.89-5.8 12.52-12.68 12.52z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st23"
          d="M2089.41 1098.94c.11 54.61 25.59 71.47 25.59 71.47s-10.85-31.32-1.82-46.58c9.03-15.26 23.56-21.68 23.56-21.68l-47.33-3.21zM2109.04 1021.04H1986.9a3.92 3.92 0 01-3.92-3.98l.01-.88c.03-2.19 1.84-3.97 4.03-3.97h122.14c2.19 0 3.95 1.79 3.92 3.97l-.01.88c-.03 2.19-1.84 3.98-4.03 3.98zM2108.81 1039.51h-122.14a3.92 3.92 0 01-3.92-3.98l.01-.88c.03-2.19 1.84-3.97 4.03-3.97h122.14c2.19 0 3.95 1.79 3.92 3.97l-.01.88c-.03 2.19-1.85 3.98-4.03 3.98zM2108.54 1060.39H1986.4c-2.19 0-3.95-1.79-3.93-3.97l.01-.88c.03-2.19 1.84-3.97 4.03-3.97h122.14c2.19 0 3.95 1.79 3.92 3.97l-.01.88c-.02 2.18-1.83 3.97-4.02 3.97zM2167.84 1067.62h-17.67c-7.95 0-14.37-6.5-14.27-14.46l.46-36.14c.1-7.95 6.69-14.45 14.64-14.45h17.67c7.95 0 14.37 6.5 14.27 14.45l-.46 36.14c-.1 7.96-6.69 14.46-14.64 14.46z"
        />
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000003817435867936055610000000455128582064694173_"
            cx={953.1}
            cy={538.34}
            r={380}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000168797994437879806190000004891627207884634033_">
          <use
            xlinkHref="#prefix__SVGID_00000003817435867936055610000000455128582064694173_"
            overflow="visible"
          />
        </clipPath>
        <circle
          cx={953.1}
          cy={538.34}
          r={380}
          clipPath="url(#prefix__SVGID_00000168797994437879806190000004891627207884634033_)"
          fill="#d5cfff"
          stroke="#a69ffc"
          strokeMiterlimit={10}
        />
        <g clipPath="url(#prefix__SVGID_00000168797994437879806190000004891627207884634033_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st26"
            d="M777.49 478.39c50.27 36.3 158.25 52.13 192.69 53.99 34.44 1.86-19.12 96.81-19.12 96.81s-92.59 11.17-136.34 0-37.23-150.8-37.23-150.8z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M691.23 1419.83c.62 24.82 14.77 39.59 37.86 56.78 24.2 18.02 25.44 20-8.07 24.43-33.51 4.43-42.82-10.77-65.16-17.29-22.34-6.52-8.07-22.34-9.31-37.24-1.24-14.89-3.36-39.1-3.36-39.1l48.04 12.42zM886.71 1407.41s14.89 17.24 34.75 34.38c19.86 17.13 70.13 22.97 45.92 29.36-24.2 6.39-51.32 2.94-76.24 6.53s-46.64.12-48.5-6.53c-1.86-6.64 0-53.81 0-53.81l44.07-9.93z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M955.3 321.33c31.15-29.58 88.42 8.13 93.82 33.2 13.89 64.49 20.04 131.17 3.14 157.37-16.9 26.2-156.11 33.61-165.58 33.38-12.74-.31-20.17-43.5 4.76-71.81 24.93-28.31 36.03-79.34 40.6-105.49 5.48-31.43 18.27-41.91 23.26-46.65z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M1065.93 495.97c-.07 0-.14 0-.21-.01a1.5 1.5 0 01-1.28-1.69c7.3-52.7-2.46-112.99-24.31-150.03a1.5 1.5 0 01.53-2.05 1.5 1.5 0 012.05.53c22.16 37.58 32.08 98.65 24.69 151.97a1.47 1.47 0 01-1.47 1.28z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M1074.93 461.47h-.09c-.83-.05-1.46-.76-1.4-1.59 2.98-47.72-20.79-107.53-42.45-125.23-.64-.52-.74-1.47-.21-2.11.53-.64 1.47-.74 2.11-.21 22.21 18.14 46.58 79.17 43.55 127.75-.07.78-.73 1.39-1.51 1.39z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st28"
            d="M890.96 509.83c-10.61 75.14-20.85 216.64-51.57 251.08-30.72 34.44-47.82 116.58-47.82 116.58s99.28-54.21 139.91-187.51c12.75-41.82-18.36-139.45-25.9-148.76-7.54-9.31-14.62-31.39-14.62-31.39z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M1106.09 716.23c-6.13 7.45-22.57 43.55-30.91 43.55-28.39 0-30.49 11.13-45.89 19.29-19.78 10.47-15.59 26.53-14.2 27.46 1.4.93 43.49-6.44 57.62-15.65 11.73-7.64 20.07-11.81 25.79-20.19 5.72-8.38 38.11-32.58 38.11-32.58l-30.52-21.88z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st29"
            d="M1077.37 493.31c28.72 17.35 34 33.49 62.23 82.51 28.24 49.03 33.2 66.71 44.37 84.4 11.17 17.69 14.89 38.17-8.69 60.51-22.53 21.34-33.04 30.05-45.41 26.72-8.33-2.25-14.91-26.51-26.49-22.11-11.58 4.4 8.9-29.74 19.45-39.36 5.75-5.24 8.07-4.84 6.21-7.23-1.86-2.39-37.24-28.77-66.71-66.93-29.47-38.17 15.04-118.51 15.04-118.51z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st28"
            d="M1167.53 676.67c-13.98-6.28-31.44-5.38-44.27-2.95 3.3 2.77 5.38 4.5 5.79 5.03 1.86 2.39-.46 1.99-6.21 7.23-2.04 1.86-4.44 4.63-6.92 7.86 9.78-5.18 20.48-9.84 29.26-11.12 22.34-3.26 23.74 2.79 35.37 10.24 11.65 7.44 9.79-6.05-13.02-16.29zM1106.25 519.28c-7.69-10.51-15.89-18.12-28.88-25.97 0 0-44.51 80.34-15.03 118.51 9.36 12.12 19.31 23.04 28.59 32.39.61-25.72 3.31-83.2 15.32-124.93z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st29"
            d="M968.06 466.75c-38.48 8.69-69.53 20.04-77.47 42.36-3.86 10.83 18.46 189.59 40.8 209.45 43.12 38.33 114.19 2.48 114.19 2.48s32.27-80.37 45.07-215.28c3.33-12.17-73.62-36.06-86.03-38.55-12.41-2.48-36.56-.46-36.56-.46z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M981.02 1415s-52.72 72.97-21.07 70.39c31.65-2.58 52.32-35.16 52.32-35.16s10.98 36.95 42.63 35.23c31.65-1.72 13.8-21.08 0-43.67-13.03-21.34-13.73-43.73-13.73-43.73L981.02 1415zM985.54 501.66c-13.06 0-23.74-10.68-23.74-23.74v-88.43c0-13.06 10.68-23.74 23.74-23.74 13.06 0 23.74 10.68 23.74 23.74v88.43c0 13.06-10.68 23.74-23.74 23.74z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M985.54 365.75c-13.06 0-23.74 10.68-23.74 23.74v40.04c15.38 22.06 33.36 35.69 47.48 43.8V389.5c0-13.07-10.68-23.75-23.74-23.75z"
          />
          <ellipse
            transform="rotate(-13.202 1004.253 387.38)"
            className="prefix__st6"
            cx={1004.33}
            cy={387.4}
            rx={42.79}
            ry={58.83}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M936.74 707.91s-74 55.85-50.27 238.76c23.74 182.91 48.87 177.33 50.27 265.29 1.4 87.96 39.1 209.44 61.44 233.18 22.34 23.74 77.2-103.51 77.2-216.46 0-66 .03-97.7 15.39-201.03s12.13-254.12-49.31-319.74-104.72 0-104.72 0z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M996.67 1116.97c-.06-43.28-14.39-135.28-11.13-262.45l-94.39 125.8c22.25 148.93 44.28 149.45 45.58 231.65 1.06 66.65 22.96 152.54 43.23 200.57 13.17 4.73 22.02 10.28 24.36 17.25 3.13 9.33 5.21 14.5 6.45 16 .44-.29.89-.6 1.34-.94 1.08-7.79-4.57-47.54-10.76-105.38-10.44-97.79-4.61-179.22-4.68-222.5z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st29"
            d="M903.49 642.58c12.31 72.31 4.92 82.09-12.33 142.13-17.25 60.04-17.48 219.21-17.48 219.21s46.78 19.55 137.3 11.17c90.52-8.38 103.09-18.15 103.09-18.15s-10.29-154.99-23.3-201.06c-13.01-46.08-33.34-77.59-34.34-107.21-1.01-29.63-152.94-46.09-152.94-46.09z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st30"
            d="M959.94 1485.4c31.65-2.58 52.32-35.16 52.32-35.16s10.98 36.95 42.63 35.23c27.18-1.48 17.85-15.96 5.94-34.34-1.09 4.13-4.45 7.99-13.38 7.65-18.7-.72-36.26-23.43-36.26-23.43s-32.63 25.13-44.73 23.34c-12.1-1.79 5.89-30.89 5.9-30.91-13.47 20.79-35.62 59.51-12.42 57.62z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M739.84 418.86c-14.7-20.65-29.47-76.86-16.34-82.6 13.13-5.74 9.85-14.77 22.97-31.59 13.13-16.82 66.05-23.38 81.64 4.92 15.59 28.31 22.27 31.18 22.83 46.36.56 15.18-36.78 52.92-36.78 52.92l-74.32 9.99z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M1086.6 748.59c-4.29 6.42-8.38 11.19-11.41 11.19-28.39 0-30.49 11.13-45.89 19.29-19.78 10.47-15.59 26.53-14.2 27.46 1.4.93 43.49-6.44 57.62-15.65 11.73-7.64 20.07-11.81 25.79-20.19 1.09-1.6 3.16-3.78 5.79-6.26a130.421 130.421 0 01-17.7-15.84zM749.56 346.2s-9.31 114.6-29.79 127.12c-20.48 12.52-59.58 59.06-53.99 159.6 5.58 100.54 13.03 143.9 20.48 182.73 7.45 38.83 147.08 15.17 161.97 0 14.89-15.17 31.65-153.87 0-224.15s-67.02-110-70.75-127.38c-3.72-17.38 20.48-87.19 20.48-87.19l-48.4-30.73z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M777.11 460.35c-.47-21.91 20.86-83.43 20.86-83.43l-48.41-30.72s-2.03 24.98-6.28 52.89c6.28 38.8 18.85 53.7 33.83 61.26z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M837.94 378.39c4.66 33.66-6.93 60.02-31.17 63.38-24.24 3.36-51.94-17.55-56.6-51.22-4.66-33.66 11.2-63.68 35.44-67.04 24.24-3.35 47.67 21.22 52.33 54.88zM1103.69 507.24c14.25 8.86 25.12 31.03 18.88 49.03-6.24 18-14.88-5.1-24.38-18.31-9.5-13.21-5.16-37.34 5.5-30.72z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st30"
            d="M850.17 748.13c-9.77 117.56 23.28 382.85 23.51 442.89.23 60.04 24.21 224.21 24.21 224.21s-39.1 11.23-54.45 12.54-59.72-148.79-66.28-228.37c-6.57-79.59-48.08-220.83-48.08-220.83l14.22-242.31 106.87 11.87z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M850.17 748.13l-106.88-11.88-14.22 242.31s41.51 141.24 48.08 220.82c.09 1.04.18 2.09.28 3.16.8-122.67 36.46-175.91 74.15-305.79-3.25-57.03-4.58-110.56-1.41-148.62z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st30"
            d="M845.98 787.5c-50.27 170.34-96.34 330.91-127.06 437.03-30.72 106.12-21.49 215.2-21.49 215.2l-51.66 4.12s-58.1-174.91-19.01-269.58c39.1-94.67 20.5-151.71 27.93-240.16 8.38-99.78 22.46-172.69 22.46-172.69l168.83 26.08z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st31"
            d="M848.24 591.49c-17-37.75-35.06-66.67-48.73-88.06-6.03-.84-13.67-1.6-22.34-1.78-14.41-.29-39.49-18.77-54.45-30.91-.95 1.08-1.93 1.95-2.94 2.57-20.48 12.52-59.58 59.06-53.99 159.6 5.58 100.54-15.51 134.87-8.07 173.69 7.45 38.83 175.63 24.2 190.52 9.04 14.89-15.17 31.65-153.87 0-224.15z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st31"
            d="M717.29 449.22l-15.12 39.87 95.8 38.94 11.06-9.5s-14.79-21.53-11.06-34.57c3.72-13.03 8.07-16.76 0-19.86-8.07-3.1-36.76-8.07-54.68-14.89-17.93-6.82-22.88-8.2-26 .01z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st26"
            d="M866.22 710.47c-1.9-29.93-7.95-96.69-17.99-118.98-3.7-8.21-7.45-15.98-11.19-23.37l-12.08-5.25s-67.02-53.51-110.78-43.53c-43.75 9.98-45.61 172.97-20.48 190.83 25.13 17.87 35.36-29.9 128.31-15.07 15.14 2.42 31.82 16.55 44.21 15.37z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st30"
            d="M1022.89 758.55a4.64 4.64 0 006.47-.98l197.47-268.21a4.64 4.64 0 00-.98-6.47 4.64 4.64 0 00-6.47.98l-197.47 268.21a4.64 4.64 0 00.98 6.47z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M1238.17 493.31h-32.92c-5.48 0-9.97-4.49-9.97-9.97s4.49-9.97 9.97-9.97h32.92c5.48 0 9.97 4.49 9.97 9.97s-4.48 9.97-9.97 9.97z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M1228.45 394.9l31.71 5.35c5.99 1.01 9.41 7.41 6.91 12.95l-30.74 68.19c-1.98 4.38-6.98 6.53-11.51 4.94l-27.92-9.76c-5.05-1.77-7.56-7.43-5.48-12.36l26.94-63.78c1.68-3.95 5.85-6.25 10.09-5.53z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st30"
            d="M1226.52 400.36l26.24 4.71c4.96.89 7.78 6.53 5.72 11.41l-25.43 60.08c-1.63 3.86-5.77 5.75-9.53 4.36l-23.1-8.6c-4.18-1.56-6.26-6.55-4.54-10.89l22.29-56.19c1.39-3.49 4.85-5.51 8.35-4.88z"
          />
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st32"
              d="M1206.33 394.22c-.23 0-.47-.06-.69-.17l-35.12-18.33a1.504 1.504 0 01-.64-2.02c.38-.73 1.29-1.02 2.02-.64l35.12 18.33a1.5 1.5 0 01-.69 2.83zM1212.84 386.84c-.46 0-.92-.21-1.21-.61l-24.77-33.72a1.501 1.501 0 112.42-1.78l24.77 33.72c.49.67.35 1.61-.32 2.1-.27.19-.58.29-.89.29zM1160.88 431.44a1.5 1.5 0 01-1.43-1.04c-.25-.79.18-1.63.97-1.88l42.94-13.71c.79-.26 1.63.18 1.88.97s-.18 1.63-.97 1.89l-42.94 13.71c-.15.04-.3.06-.45.06zM1206.02 407.01c-.07 0-.14 0-.21-.02-32.7-4.68-50.59-7.51-53.18-8.42a1.502 1.502 0 01-.92-1.91c.28-.78 1.13-1.19 1.91-.92 1.35.48 9.99 2.18 52.61 8.28a1.5 1.5 0 011.27 1.7c-.1.76-.74 1.29-1.48 1.29z"
            />
          </g>
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st33"
              d="M1195.89 461.43c-1.72 4.34.36 9.33 4.54 10.89l2.8 1.04 39.73-20.2 15.52-36.68c.72-1.7.83-3.48.48-5.13l-60.87 44.53-2.2 5.55zM1204.3 473.77l19.22 7.16c3.76 1.4 7.89-.49 9.53-4.36l6.66-15.74c-11.41 3.93-26.53 9.58-35.41 12.94z"
            />
          </g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M1033.21 634.16l53.06-2.42s27.14-33.73 38.1-26.86c10.97 6.87 29.96-5.37 29.85 6.87-.12 12.24-15.52 44.06-33.93 47.32-18.41 3.26-60.52 0-60.52 0l-26.56-24.91z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st31"
            d="M729.61 509.83c31.08 2.18 136.85 95.1 184.94 129.8 66.08-10.75 145.22-9.94 145.22-9.94s16.45 31.01 15.41 33.45c-1.04 2.45-107.21 39.3-169.94 36.72-62.73-2.59-91.64-22.27-139.51-27.98-31.17-3.72-46.33 9.22-63.56-8.73-17.23-17.95-23.31-110.08-13.9-128.65 9.43-18.58 28-25.61 41.34-24.67z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M739.84 418.86c16.44-8.12 8.27-23.92 9.71-34.39 1.43-10.47-3.14-18.86.79-18.15 3.93.71 3.05 40.19 8 39.94s3.11-29.79 8.34-30.62c5.23-.82 7.28-8.17 3.18-21.11s-.82-24.43 10.26-14.17 35.69 34.05 50.05 30.77c14.36-3.28 13.54-18.05 12.31-19.69-1.23-1.64-38.15-43.08-38.15-43.08l-73.02 41.85-2.05 38.15 10.58 30.5z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M752.95 374.06c.98 9.92 1.32 24.96 2.18 27.12-6.51 2.65-14.83-2.68-18.6-11.91-3.77-9.23-3.42-21.34 3.17-23.79 4.1-1.51 12.1-2.96 13.25 8.58z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st27"
            d="M1041.98 351.79c-10.36 33.51-68.07 33.98-70.86 43.29-2.79 9.31-3.48 45.47-11.92 68.5-13.5 36.79-19.55 48.95-38.34 54.53-18.79 5.59-26.7-25.55-26.7-25.55s33.68-44.43 35.54-45.36c1.86-.93 19.59-114.5 19.59-114.5s45.11-8.27 47.44-9.49c2.33-1.21 34.91 13.21 34.91 13.21l10.34 15.37z"
          />
        </g>
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000059995475918520356490000008441345806663357628_"
            transform="rotate(-45.001 2398.12 506.554)"
            cx={2398.12}
            cy={506.52}
            r={351.03}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000146465046757609966050000007820931801875549865_">
          <use
            xlinkHref="#prefix__SVGID_00000059995475918520356490000008441345806663357628_"
            overflow="visible"
          />
        </clipPath>
        <circle
          transform="rotate(-45.001 2398.12 506.554)"
          cx={2398.12}
          cy={506.52}
          clipPath="url(#prefix__SVGID_00000146465046757609966050000007820931801875549865_)"
          fill="#d5cfff"
          stroke="#a69ffc"
          strokeMiterlimit={10}
          r={351.03}
        />
        <g clipPath="url(#prefix__SVGID_00000146465046757609966050000007820931801875549865_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st36"
            d="M2340.09 521.05s-12.29 11.44-27.66 4.05c-15.36-7.4-71.46-47.04-69.75-56.71s27.92-11.99 27.92-11.99 81.21 64.19 69.49 64.65z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st37"
            d="M2325.31 519.56c10.52-1.68-24.09-29.21-35.41-40.59-11.32-11.38-18.62-16.69-18.62-16.69s-19.35 2.36-19.35 6.11c0 3.75 55.48 48.06 55.48 48.06s13.15 3.87 17.9 3.11z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M2393.23 569.08s-20.2-34.14-29.88-43.25c-9.67-9.1-42.34-26.75-47.29-26.86-8.47-.19 29.08 25.15 29.08 25.15s-5.12 33-.57 44.95c4.55 11.95 52.35 27.88 52.35 27.88l-3.69-27.87z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st38"
            d="M2430.79 604.91s-33-49.51-40.4-46.09c-7.4 3.41-27.31 46.09-27.31 46.09s58.04 60.32 58.04 48.94c0-11.38 9.67-48.94 9.67-48.94z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M2522.06 339.78s34.14 120.64 56.9 170.71 34.14 143.4 29.59 307.28c-4.55 163.88 27.31 159.33-20.49 179.82-47.8 20.49-218.51-13.66-241.27-66.01-22.76-52.35 15.24-265.49 71.7-343.7 55.74-77.22 80.8-104.7 80.8-122.91 0-18.21-22.03-95.6-22.03-95.6l44.8-29.59z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st39"
            d="M2346.79 931.58c-22.76-52.35 15.24-265.49 71.7-343.7 25.96-35.96 45.26-61.13 58.48-79.6 27.03-16.13 56.87-31.16 85.5-39.89 5.73 16.14 11.39 30.9 16.49 42.11 22.76 50.08 34.14 143.4 29.59 307.28-4.55 163.88 27.31 159.33-20.49 179.82-47.79 20.48-218.5-13.66-241.27-66.02z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st39"
            d="M2582.76 446.76c-.57-9.37-122.15 38.69-122.91 47.8-.76 9.1-7.93 43.07-18 61.37-10.07 18.3 169.27 120.51 162.67 70.75-6.6-49.77-20.25-154.88-21.76-179.92z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M2499.19 467c.07-.69.1-1.37.1-2.03 0-18.21-22.03-95.6-22.03-95.6l44.79-29.59s7.93 28.01 18.69 62.63c-13.91 41.56-26.93 55.73-41.55 64.59z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M2396.46 398.84c9.47 42.9 39.09 73.41 73.34 65.02 25.12-6.15 63.72-41.28 51.34-92.53-10.31-42.7-45.05-71.51-79.48-63.92-34.43 7.6-54.67 48.54-45.2 91.43zM2357.58 678.11c-31.08-53.67-34.55-103.81-56.57-119.46-30.97-22.02-56.42-71.28-45.2-73.22 11.22-1.94 56.63 39.66 56.63 39.66s-11.82-16.17-9-17.52c2.82-1.35 25.7 15.25 29.25 34.87 3.55 19.61 47.49 109.77 84.35 138.64 36.86 28.88-28.38 50.71-59.46-2.97z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st38"
            d="M2558.92 542.88c55.07 13.71 29.88 180.02-16.55 278.65-46.43 98.63-133.68 13.42-166.3-10.74-12.39-9.17-20.55-18.47-25.91-26.48 10.47-58.86 28.43-122 50.59-166.43 51.97 61.01 76.69-95.29 158.17-75z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st39"
            d="M2542.37 530.94c69.25 6.94 31.33 179.82-19.31 249.62-50.64 69.8-122.72 2.28-145.48-37.94-22.76-40.21-68.85-108.59-68.85-153.07 0-8.35 17.07-10.05 37.56-8.54 19.29 1.43 106.44 121.4 106.44 121.4s29.09-177.54 89.64-171.47z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st22"
            d="M2375.31 309.39c-42.34 17.83-16.98 74.22 5.35 76.33 22.33 2.11 48.14-39.05 61.4-40.45 13.26-1.4-2.68 23.02 9.13 28.61 11.8 5.58 22.82 14.85 26.25 29.51 3.44 14.65 12.87 46.55-2.54 47.94-15.4 1.4-32.15-15.35-42.61-16.05-10.47-.7-19.56 2.33-19.56 2.33s26.58 36.74 46.09 38.84 40.81-26.43 55.98-50.55c15.17-24.11 8.72-40.18 8.72-40.18s15.52 17.46 25.28 16.07c9.77-1.4-14.65-15.35-15.35-56.52-.7-41.17-18.84-62.8-41.17-62.8s-19.54-11.36-53.64-10.47c-30.71.82-53.4 33.21-63.33 37.39z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M2468.42 393.51c-.99 10.63 4.47 19.83 12.19 20.54s14.78-7.32 15.76-17.95c.99-10.63-4.47-19.83-12.19-20.54-7.72-.72-14.77 7.32-15.76 17.95z"
          />
        </g>
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000163781246844918221270000003658581583113651358_"
            transform="rotate(-45.001 3058.644 1130.824)"
            cx={3058.64}
            cy={1130.78}
            r={251.24}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000047769633186452250740000001125293105155497884_">
          <use
            xlinkHref="#prefix__SVGID_00000163781246844918221270000003658581583113651358_"
            overflow="visible"
          />
        </clipPath>
        <circle
          transform="rotate(-45.001 3058.644 1130.824)"
          cx={3058.64}
          cy={1130.78}
          clipPath="url(#prefix__SVGID_00000047769633186452250740000001125293105155497884_)"
          fill="#d5cfff"
          stroke="#a69ffc"
          strokeMiterlimit={10}
          r={251.24}
        />
        <g clipPath="url(#prefix__SVGID_00000047769633186452250740000001125293105155497884_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M3019.08 1011.07c-19.15 38.29-3.3 82.38 34.36 97.96 37.91 15.68 79.35 6.77 98.5-31.51s4.93-84.2-31.76-102.55c-36.69-18.35-81.96-2.18-101.1 36.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M3122.27 1114.09c-1.91 0-3.01-.29-3.15-.33a2.45 2.45 0 01-1.68-3.01 2.443 2.443 0 013.01-1.68c.06.01 8.86 2.08 22.06-9.63 14.9-13.22 25.32-43.24 9.88-87.87-.44-1.27.23-2.66 1.51-3.1 1.27-.44 2.66.23 3.1 1.51 20.41 59.02-3.45 86.19-11.25 93.11-10.69 9.48-19.16 11-23.48 11z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st42"
            d="M3063.74 1160.06c-21.79 4.88-49.3 65.44-62.78 104.23-13.59 39.13-36.62 87.67-51.71 102.75-15.08 15.08-114.18 50.04-114.18 50.04s244.86.47 239.85-.01c-5.02-.48-11.18-257.01-11.18-257.01z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st43"
            d="M2933.74 1397.63c13.41-1.92 61.76 4.31 41.18-4.31s-17.71-19.63-17.71-19.63 29.21 24.42 34.47 3.07c4.54-18.41 6.28-83.41 23.51-148.56 14.24-32.3 32.88-64.62 48.55-68.13 0 0 .55 22.94 1.46 55.1-6.01 71.18-16.22 175.75-18.81 202.11-32.46.05-86.78 0-132.22-.06l-30.22-1.44c0-.01 36.38-16.23 49.79-18.15z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st42"
            d="M3143.85 1146.64s69.32 38.73 85.48 46.97-45.27 250.01-58.93 260.37c-13.66 10.36-133.93 1.78-147.63-11.27-13.69-13.05 10.51-53.12-1.34-133.33s36.14-149.47 42.31-149.31c6.17.16 46.41-13.42 46.41-13.42h33.7z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st43"
            d="M3170.4 1453.98c-13.66 10.36-99.73 10.59-136.36-.81-4.14-1.29-22.91-8.77-23.35-15.8 4.42-.83 21.97 1.28 29.1-.36 24.78-5.69 38.42-36.39 38.42-36.39s13.64-4.91 44.17-17.83 17.95-52.07 18.67-69.3c.72-17.24 30.16-73.61 85.46-116.34l5.07 2.27c3.95 39.29-48.54 244.97-61.18 254.56z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M3101.31 1393.8c-43.57 8.14-54.28 18.14-78.03 21.97-26.92 4.34-23.72 10.29-3.73 10.29s70.25.78 87.49-3.05-5.73-29.21-5.73-29.21z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st42"
            d="M3234.77 1198.15c33.39 106.76 80.73 227.91 73.19 227.91-7.54 0-199.28 7.75-206.82 1.29-7.54-6.46-5.39-31.23-4.31-34.46s109.01-22.39 109.01-22.39-14.21-27.7-19.6-81.83c-5.39-54.12 42.2-110.77 48.53-90.52z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M3118.47 1053.87l26.9 98.29s-45.45 70.95-57.95 64.64c-12.5-6.3 6.99-57.67 6.99-64.64s-19.48-78.99-19.48-78.99l43.54-19.3z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M3093.47 1157.17c.58-2.33.93-4.07.93-5.01 0-6.98-19.48-78.99-19.48-78.99l43.55-19.3 8.9 32.53c-7.78 33.6-21.81 55.98-33.9 70.77z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M3017.82 1052.24c-5.12 28.5-1.75 66.36 23.56 75.99s55.8-8.79 68.1-41.13c12.3-32.34 1.75-66.36-23.56-75.99s-61.98 7.08-68.1 41.13z"
          />
          <ellipse
            transform="rotate(-70.403 3116.883 1072.924)"
            className="prefix__st6"
            cx={3116.78}
            cy={1073.02}
            rx={19.15}
            ry={14.12}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M3017.52 1016.43c8.62 66.89 89.88 58.27 89.88 58.27s16.76-22.03 24.3-10.48c7.54 11.56-10.46-67.81-57.09-70.31-15.32-.82-57.09 22.52-57.09 22.52z"
          />
          <ellipse
            className="prefix__st5"
            cx={3144.13}
            cy={988.16}
            rx={44.01}
            ry={41.29}
          />
        </g>
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000085236088102122158660000012261985379361002674_"
            cx={522.44}
            cy={1482.09}
            r={315.09}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000161630808772896307030000000287402513676889992_">
          <use
            xlinkHref="#prefix__SVGID_00000085236088102122158660000012261985379361002674_"
            overflow="visible"
          />
        </clipPath>
        <circle
          cx={522.44}
          cy={1482.09}
          r={315.09}
          clipPath="url(#prefix__SVGID_00000161630808772896307030000000287402513676889992_)"
          fill="#d5cfff"
          stroke="#a69ffc"
          strokeMiterlimit={10}
        />
        <g clipPath="url(#prefix__SVGID_00000161630808772896307030000000287402513676889992_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st36"
            d="M675.59 1456.71s9.88 9.2 22.22 3.25c12.35-5.94 57.42-37.8 56.05-45.57-1.37-7.77-22.43-9.63-22.43-9.63s-65.26 51.58-55.84 51.95z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st37"
            d="M687.46 1455.51c-8.45-1.35 19.36-23.47 28.45-32.62 9.09-9.14 14.96-13.41 14.96-13.41s15.55 1.89 15.55 4.91-44.58 38.62-44.58 38.62-10.56 3.11-14.38 2.5z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M632.89 1495.3s16.23-27.43 24-34.75 34.02-21.5 38-21.58c6.81-.15-23.37 20.21-23.37 20.21s4.12 26.52.46 36.12c-3.66 9.6-42.06 22.4-42.06 22.4l2.97-22.4z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M602.71 1524.09s26.52-39.78 32.46-37.04c5.94 2.74 21.95 37.04 21.95 37.04s-46.64 48.47-46.64 39.32-7.77-39.32-7.77-39.32z"
            fill="#fb8627"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M529.37 1311.05s-27.43 96.93-45.72 137.17c-18.29 40.24-27.43 115.22-23.78 246.9 3.66 131.68-21.95 128.02 16.46 144.48 38.41 16.46 175.58-10.97 193.86-53.04 18.29-42.06-12.25-213.32-57.61-276.17-44.79-62.04-64.93-84.13-64.93-98.76 0-14.63 17.7-76.81 17.7-76.81l-35.98-23.77z"
          />
          <linearGradient
            id="prefix__SVGID_00000176731087192320146650000006056156600710506165_"
            gradientUnits="userSpaceOnUse"
            x1={2852.712}
            y1={1343.561}
            x2={2313.666}
            y2={1982.736}
            gradientTransform="translate(-2051.617)"
          >
            <stop offset={0} stopColor="#ffc34e" />
            <stop offset={1} stopColor="#fb8627" />
          </linearGradient>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M670.2 1786.57c18.29-42.06-12.25-213.32-57.61-276.17-20.86-28.89-36.37-49.12-46.99-63.96-21.71-12.96-45.69-25.04-68.7-32.05-4.6 12.97-9.16 24.83-13.25 33.83-18.29 40.24-27.43 115.22-23.78 246.9 3.66 131.68-21.95 128.02 16.46 144.48 38.41 16.47 175.58-10.96 193.87-53.03z"
            fill="url(#prefix__SVGID_00000176731087192320146650000006056156600710506165_)"
          />
          <linearGradient
            id="prefix__SVGID_00000181052183614904207500000009003034837149945262_"
            gradientUnits="userSpaceOnUse"
            x1={2747.432}
            y1={1254.773}
            x2={2208.385}
            y2={1893.949}
            gradientTransform="translate(-2051.617)"
          >
            <stop offset={0} stopColor="#ffc34e" />
            <stop offset={1} stopColor="#fb8627" />
          </linearGradient>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M480.6 1397.01c.46-7.53 98.15 31.09 98.76 38.41.61 7.32 6.37 34.61 14.46 49.31 8.09 14.7-136.01 96.83-130.71 56.84 5.31-39.98 16.27-124.44 17.49-144.56z"
            fill="url(#prefix__SVGID_00000181052183614904207500000009003034837149945262_)"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M547.75 1413.28c-.05-.55-.08-1.1-.08-1.63 0-14.63 17.7-76.81 17.7-76.81l-35.99-23.78s-6.37 22.5-15.02 50.32c11.18 33.39 21.64 44.78 33.39 51.9z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M619.94 1358.35c-6.65 30.13-27.46 51.56-51.51 45.66-17.64-4.32-44.76-28.99-36.06-64.99 7.24-29.99 31.64-50.23 55.83-44.89 24.18 5.34 38.39 34.09 31.74 64.22zM661.53 1582.91c24.97-43.13 27.76-83.41 45.46-95.99 24.89-17.7 45.33-57.27 36.32-58.83-9.01-1.56-45.5 31.87-45.5 31.87s9.5-13 7.23-14.08c-2.27-1.08-20.65 12.26-23.5 28.02-2.85 15.76-38.16 88.2-67.78 111.4-29.62 23.2 22.8 40.74 47.77-2.39z"
          />
          <linearGradient
            id="prefix__SVGID_00000105413802669604802930000014512625418703793831_"
            gradientUnits="userSpaceOnUse"
            x1={2872.679}
            y1={1138.742}
            x2={2502.342}
            y2={1801.233}
            gradientTransform="translate(-2051.617)"
          >
            <stop offset={0} stopColor="#ffc34e" />
            <stop offset={1} stopColor="#fb8627" />
          </linearGradient>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M499.76 1474.24c-44.25 11.02-24.01 144.65 13.3 223.9 37.3 79.25 107.41 10.78 133.63-8.63 9.95-7.37 16.51-14.84 20.82-21.28-8.41-47.29-22.84-98.02-40.65-133.73-41.77 49.03-61.63-76.55-127.1-60.26z"
            fill="url(#prefix__SVGID_00000105413802669604802930000014512625418703793831_)"
          />
          <linearGradient
            id="prefix__SVGID_00000065056776642762006770000010067959989776071354_"
            gradientUnits="userSpaceOnUse"
            x1={2840.731}
            y1={1296.138}
            x2={2265.405}
            y2={1978.331}
            gradientTransform="translate(-2051.617)"
          >
            <stop offset={0} stopColor="#ffc34e" />
            <stop offset={1} stopColor="#fb8627" />
          </linearGradient>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M513.05 1464.65c-55.65 5.58-25.18 144.48 15.51 200.57s98.61 1.83 116.89-30.48c18.29-32.31 55.32-87.25 55.32-123 0-6.71-13.72-8.08-30.18-6.86-15.5 1.15-85.52 97.54-85.52 97.54s-23.36-142.65-72.02-137.77z"
            fill="url(#prefix__SVGID_00000065056776642762006770000010067959989776071354_)"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st22"
            d="M597.78 1264.82c58.08 3.97 50.67 93.99 50.67 93.99s-47.9 1.39-62.19-2.76c-14.28-4.15-28.83-15.33-28.83-15.33s-8.79 34.1-32.79 36l-24.01 1.9s-15.84-64.73-3.31-93.91c25.96-60.52 77.81-30.22 100.46-19.89z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M534.42 1351.99c3.44 8.85 11.57 13.94 18.17 11.38 6.6-2.56 9.16-11.81 5.72-20.66-3.44-8.85-11.57-13.94-18.17-11.38-6.6 2.56-9.16 11.81-5.72 20.66z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st22"
            d="M505.73 1341.63c0-1.89-2.59-2.42-3.33-.68-5.24 12.23-16.23 33.45-29.94 34.95-19.34 2.11-157.28 13.36-111.37 119.81 29.01 67.26 50.01 94.1 21.49 119-26.24 22.91-60.86 1.34-69.5-4.44-1.05-.7-2.47-.09-2.68 1.15-2.43 14.82-10.5 85.81 58.27 84.79 76.78-1.14 113.44-70.53 82.16-134.21-31.28-63.68 30.7-79.96 33.23-115.74 2.44-34.46.61-51.86.12-55.69-.07-.52.11-1.05.48-1.43l20.59-21.09c.32-.32.49-.76.49-1.21v-25.21z"
          />
          <g>
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st22"
              d="M353.8 1622c-15.63 0-40.21-6.38-41.32-6.67-1.23-.32-2-1.53-1.78-2.78a2.444 2.444 0 012.62-2.01c.33.03 33.36 2.86 46.27-7.32 16.31-12.85 7.2-33.86-7.89-68.66-6.37-14.7-13.6-31.36-20.23-50.63-12.58-36.52.93-61.63 14.48-76.25 28.44-30.7 83.86-43.92 131.77-31.41a2.435 2.435 0 01-1.23 4.71c-1.12-.29-2.24-.57-3.37-.83-60.95 1.03-100.27 15.17-116.88 42.04-14.53 23.51-11.54 57.01 8.89 99.56 19.94 41.53 25.29 70.74 15.9 86.82-4.66 7.98-12.99 12.59-24.1 13.33-1 .07-2.04.1-3.13.1zm-17.93-6.7c7.35 1.23 15.09 2.11 20.72 1.74 9.56-.64 16.36-4.31 20.22-10.93 5.86-10.04 7.82-32.45-16.09-82.25-21.2-44.15-24.11-79.21-8.65-104.23 15.01-24.29 46.98-38.72 95.21-43.04-37.97-1.76-76.1 11-97.78 34.4-18.13 19.58-22.78 44.25-13.45 71.36 6.57 19.09 13.76 35.66 20.1 50.28 15.47 35.68 25.69 59.25 6.44 74.43-6.52 5.14-17.03 7.36-26.72 8.24z"
            />
          </g>
        </g>
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000178180821165863184840000000279586199354438320_"
            cx={1620.98}
            cy={385.34}
            r={153}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000137817713445163175980000012499220498504043683_">
          <use
            xlinkHref="#prefix__SVGID_00000178180821165863184840000000279586199354438320_"
            overflow="visible"
          />
        </clipPath>
        <circle
          cx={1620.98}
          cy={385.34}
          r={153}
          clipPath="url(#prefix__SVGID_00000137817713445163175980000012499220498504043683_)"
          fill="#d5cfff"
        />
        <g clipPath="url(#prefix__SVGID_00000137817713445163175980000012499220498504043683_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st53"
            d="M1573.64 371.22c-.38-1.14-9.89-55.72-11.02-76.95-1.14-21.23 34.11-24.26 34.11-24.26s28.81-15.54 49.66-7.58c20.85 7.96 35.04 21.35 44.51 38.03 9.48 16.68-8.34 68.66-8.34 68.66l-108.92 2.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st15"
            d="M1508.29 546.59c-.13-.9 2.43-22.38 2.53-23.25 4.8-45.23 60.56-57.95 116.2-57.95 65.37 0 109.72 11.96 116.79 58.97.21 1.38 3.98 22.91 3.79 24.36-121.16 1.66-239.31-2.13-239.31-2.13z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M1638.23 500.5c-6.48 9.56-11.23 9.96-18.26 0-5.59-7.92-24.26-25.98-24.26-35.11l7.66-91.03c0-9.13 7.47-16.6 16.6-16.6h18.26c9.13 0 16.6 7.47 16.6 16.6l3.56 91.03c0 9.13-14.35 26.53-20.16 35.11z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M1638.23 357.76h-18.26c-9.13 0-16.6 7.47-16.6 16.6l-6.65 80.75c20.5 6.53 48.18-6.74 60.42-21.35l-2.32-59.4c.01-9.13-7.46-16.6-16.59-16.6z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M1566.45 472.03l29.27 54.1s15.67-12.89 17.18-10.36c1.52 2.53-2.78 34.42-2.78 34.42s34.87.47 36.39-1.04c1.52-1.52-7.08-34.64-3.54-34.64s14.18 9.6 14.18 9.6l32.68-52.08-7.18-1.75-53.54 28.81-57.27-28.18-5.39 1.12z"
            fill="#bdccd4"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st26"
            d="M1599.92 496.95l21.74 14.59-6.74 38.71 29.32-1.64-7.32-35.21 18.01-16.45-8.46-7.97h-38.08z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st15"
            d="M1597.24 445.51l-26.88 25.58s27.39 48.71 28.91 48.71c1.52 0 23.24-26.86 23.24-26.86l13.91-.24 21.98 23.06 25.54-45.18-26.04-27.6s-22.24 42.96-26.28 43.97c-4.04 1.01-4.07 1.52-7.34-1.01-3.29-2.52-27.04-40.43-27.04-40.43z"
          />
          <ellipse
            className="prefix__st6"
            cx={1629.11}
            cy={358.69}
            rx={55.18}
            ry={75.19}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M1579.57 357.53c5.16 10.87 3.47 22.47-3.77 25.91-7.24 3.44-17.3-2.58-22.46-13.45s-3.47-22.47 3.77-25.91c7.24-3.44 17.3 2.58 22.46 13.45zM1676.15 357.53c-5.16 10.87-3.47 22.47 3.77 25.91 7.24 3.44 17.3-2.58 22.46-13.45s3.47-22.47-3.77-25.91c-7.24-3.44-17.3 2.58-22.46 13.45z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st15"
            d="M1653.59 389.54s-10.96 17.75-24.48 17.75-24.48-17.75-24.48-17.75h48.96z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st53"
            d="M1596.73 307.54c22.74-15.92 32.98-13.27 50.03 12.89 17.06 26.15 37.53 26.62 37.53 26.62l2.65-27.12s-25.41-49.15-59.52-42.71c-34.11 6.44-53.51 37.15-53.51 37.15s-1.66 57.55 3.1 59.51c4.76 1.96 5.31-18.57 8.72-22.74 3.41-4.17-3.41-23.88 1.14-32.98 4.55-9.11 9.86-10.62 9.86-10.62z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st53"
            d="M1669.89 337.1c7.94 8.69 4.93 43.21 9.1 42.83 4.17-.38 5.69-32.98 4.55-36.39-1.14-3.4-13.65-6.44-13.65-6.44z"
          />
        </g>
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000058555154284551917700000011001167636665949102_"
            cx={335.77}
            cy={875.17}
            r={153}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000078749340686204577680000016473888130122454195_">
          <use
            xlinkHref="#prefix__SVGID_00000058555154284551917700000011001167636665949102_"
            overflow="visible"
          />
        </clipPath>
        <circle
          cx={335.77}
          cy={875.17}
          r={153}
          clipPath="url(#prefix__SVGID_00000078749340686204577680000016473888130122454195_)"
          fill="#d5cfff"
          stroke="#a69ffc"
          strokeMiterlimit={10}
        />
        <g clipPath="url(#prefix__SVGID_00000078749340686204577680000016473888130122454195_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st30"
            d="M214.66 1017.45c18.51-39.81 49.83-52.57 101.27-52.57 61.24 0 101.81 37.81 110.82 70.12-109.68 1.5-212.09-17.55-212.09-17.55z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st57"
            d="M294.54 771.24c-25.93 7.28-24.79 21.85-33.43 35.37-8.64 13.52-27.42 22.54-29.67 31.55-2.25 9.01 5.78 27.79-3.76 38.31-9.54 10.52-12.77 15.78-9.01 26.29 3.76 10.52 12.02 27.04 12.77 29.3.75 2.25 11.27 18.03 24.04 20.28s36.81 6.01 48.83 11.27c12.02 5.26 50.66-6.73 72.12-5.98 21.45.75 36.06-15.05 34.56-25.57s15.82-31.55 15.78-49.58c-.05-19.36-22.54-33.8-28.55-46.58-6.01-12.77.75-35.31-21.79-48.66-14.24-8.44-24.04-7.69-35.31-11.44-11.28-3.75-30.06-9.2-46.58-4.56z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M326.09 996.67c-5.86 8.66-10.16 9.01-16.53 0-5.06-7.17-15.02-23.45-15.02-31.72v-82.47c0-8.26 6.76-15.02 15.02-15.02h16.53c8.26 0 15.02 6.76 15.02 15.02v82.47c0 8.26-9.76 23.95-15.02 31.72z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M326.09 867.46h-16.53c-8.26 0-15.02 6.76-15.02 15.02v73.58c18.56 5.91 35.49-5.84 46.58-19.07v-54.51c-.01-8.26-6.77-15.02-15.03-15.02z"
          />
          <ellipse
            className="prefix__st6"
            cx={317.82}
            cy={868.29}
            rx={49.96}
            ry={68.07}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st57"
            d="M341.11 814.12c-31.55 53.34-78.13 48.08-78.13 48.08s1.13-70.61 38.12-74.37c37-3.76 58.78 11.09 66.29 35.59 7.51 24.5 0 40.65 0 40.65s-12.02-9.39-18.03-24.41c-6-15.02-8.25-25.54-8.25-25.54z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M272.98 867.24c4.67 9.84 3.14 20.34-3.41 23.45-6.56 3.11-15.66-2.34-20.34-12.17-4.67-9.84-3.14-20.34 3.42-23.45 6.55-3.11 15.66 2.34 20.33 12.17zM360.41 867.24c-4.67 9.84-3.14 20.34 3.42 23.45 6.56 3.11 15.66-2.34 20.33-12.17 4.67-9.84 3.14-20.34-3.42-23.45-6.55-3.11-15.66 2.34-20.33 12.17z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st15"
            d="M336.6 905.21s-8.41 10.9-18.78 10.9c-10.37 0-18.78-10.9-18.78-10.9h37.56z"
          />
        </g>
      </g>
      <g>
        <defs>
          <circle
            id="prefix__SVGID_00000095328909503052455030000001818991835779133341_"
            transform="rotate(-45.001 3150.435 529.511)"
            cx={3150.43}
            cy={529.47}
            r={163.03}
          />
        </defs>
        <clipPath id="prefix__SVGID_00000028298139644277107690000008990030110540286381_">
          <use
            xlinkHref="#prefix__SVGID_00000095328909503052455030000001818991835779133341_"
            overflow="visible"
          />
        </clipPath>
        <circle
          transform="rotate(-45.001 3150.435 529.511)"
          cx={3150.43}
          cy={529.47}
          clipPath="url(#prefix__SVGID_00000028298139644277107690000008990030110540286381_)"
          fill="#d5cfff"
          stroke="#a69ffc"
          strokeMiterlimit={10}
          r={163.03}
        />
        <g clipPath="url(#prefix__SVGID_00000028298139644277107690000008990030110540286381_)">
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st60"
            d="M3065.58 505.33c0 44.8 26.97 117.08 90.6 114.76 63.63-2.32 77.7-71.22 80.16-90.66 2.47-19.45-170.76-24.1-170.76-24.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st26"
            d="M3039.07 679.75c21.01-45.2 56.57-59.67 114.96-59.67 69.52 0 105.62 25.19 115.86 61.85-40.91.56-79.85 41.23-113.7 40.92-69.19-.63-117.12-43.1-117.12-43.1z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M3165.56 656.15c-6.66 9.83-11.54 10.23-18.76 0-5.74-8.14-17.05-26.62-17.05-36v-93.62c0-9.38 7.67-17.06 17.05-17.06h18.76c9.38 0 17.06 7.67 17.06 17.06v93.62c0 9.38-11.09 27.19-17.06 36z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st10"
            d="M3165.56 509.48h-18.76c-9.38 0-17.05 7.67-17.05 17.06v83.53c21.06 6.71 40.29-6.62 52.87-21.65v-61.88c0-9.39-7.68-17.06-17.06-17.06z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M3212.89 510.43c0 42.67-25.39 77.27-56.71 77.27s-56.71-34.6-56.71-77.27c0-42.68 25.39-77.27 56.71-77.27s56.71 34.59 56.71 77.27z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st60"
            d="M3187.35 451.69c-6.74 23.76-21.51 23.49-42.1 31.29-20.59 7.8-30.43 15.66-37.17 30.86-8.59 19.38 3.9 75.9 3.9 75.9s-52.14-39.02-46.11-100.38c6.03-61.36 42.21-85.12 76.26-85.12 34.05 0 47 20.75 47 20.75s18.14.08 35.29 20.39c23.05 27.31 15.96 93.64 0 117.4-15.96 23.76-26.6 31.21-26.25 30.15.36-1.06 14.9-55.64 7.09-89.38-7.8-33.74-17.91-51.86-17.91-51.86z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st15"
            d="M3177.5 552.33s-9.54 12.37-21.32 12.37c-11.77 0-21.32-12.37-21.32-12.37h42.64z"
          />
        </g>
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M953.1 922.34c-51.84 0-102.13-10.15-149.47-30.18-45.73-19.34-86.79-47.03-122.06-82.29-35.26-35.26-62.95-76.33-82.29-122.06-20.02-47.34-30.18-97.63-30.18-149.47s10.15-102.13 30.18-149.47c19.34-45.73 47.03-86.79 82.29-122.06 35.26-35.26 76.33-62.95 122.06-82.29 47.34-20.02 97.63-30.18 149.47-30.18s102.13 10.15 149.47 30.18c45.73 19.34 86.79 47.03 122.06 82.29 35.26 35.26 62.95 76.33 82.29 122.06 20.02 47.34 30.18 97.63 30.18 149.47s-10.15 102.13-30.18 149.47c-19.34 45.73-47.03 86.79-82.29 122.06-35.26 35.26-76.33 62.95-122.06 82.29-47.35 20.02-97.63 30.18-149.47 30.18zm0-760c-207.33 0-376 168.67-376 376s168.67 376 376 376 376-168.67 376-376-168.68-376-376-376z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M2398.12 861.55c-47.93 0-94.42-9.39-138.19-27.9-42.28-17.88-80.24-43.48-112.85-76.08-32.6-32.6-58.2-70.57-76.08-112.85-18.51-43.77-27.9-90.27-27.9-138.19 0-47.93 9.39-94.42 27.9-138.19 17.88-42.28 43.48-80.24 76.08-112.85 32.6-32.6 70.57-58.2 112.85-76.08 43.77-18.51 90.27-27.9 138.19-27.9s94.42 9.39 138.19 27.9c42.28 17.88 80.24 43.48 112.85 76.08 32.6 32.6 58.2 70.57 76.08 112.85 18.51 43.77 27.9 90.27 27.9 138.19 0 47.93-9.39 94.42-27.9 138.19-17.88 42.28-43.48 80.24-76.08 112.85-32.6 32.6-70.57 58.2-112.85 76.08-43.77 18.51-90.27 27.9-138.19 27.9zm0-702.05c-191.35 0-347.03 155.67-347.03 347.03s155.67 347.03 347.03 347.03 347.03-155.68 347.03-347.03-155.68-347.03-347.03-347.03z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M3058.64 1386.02c-68.18 0-132.27-26.55-180.48-74.76-48.21-48.21-74.76-112.3-74.76-180.48s26.55-132.27 74.76-180.48c48.21-48.21 112.31-74.76 180.48-74.76s132.27 26.55 180.48 74.76c48.21 48.21 74.76 112.31 74.76 180.48s-26.55 132.27-74.76 180.48-112.3 74.76-180.48 74.76zm0-502.48c-136.33 0-247.24 110.91-247.24 247.24s110.91 247.24 247.24 247.24 247.24-110.91 247.24-247.24-110.91-247.24-247.24-247.24z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M522.44 1801.18c-85.23 0-165.37-33.19-225.63-93.46-60.27-60.27-93.46-140.4-93.46-225.63s33.19-165.36 93.46-225.63c60.27-60.27 140.4-93.46 225.63-93.46s165.36 33.19 225.63 93.46c60.27 60.27 93.46 140.4 93.46 225.63s-33.19 165.37-93.46 225.63c-60.27 60.27-140.4 93.46-225.63 93.46zm0-630.19c-171.54 0-311.09 139.56-311.09 311.09s139.56 311.09 311.09 311.09 311.09-139.56 311.09-311.09-139.55-311.09-311.09-311.09z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M1620.98 542.34c-86.57 0-157-70.43-157-157s70.43-157 157-157 157 70.43 157 157-70.43 157-157 157zm0-306c-82.16 0-149 66.84-149 149s66.84 149 149 149 149-66.84 149-149-66.84-149-149-149z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M335.77 1032.17c-86.57 0-157-70.43-157-157s70.43-157 157-157 157 70.43 157 157-70.43 157-157 157zm0-306c-82.16 0-149 66.84-149 149s66.84 149 149 149 149-66.84 149-149-66.84-149-149-149z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st61"
          d="M3150.43 696.5c-92.1 0-167.03-74.93-167.03-167.03s74.93-167.03 167.03-167.03 167.03 74.93 167.03 167.03c-.01 92.1-74.94 167.03-167.03 167.03zm0-326.05c-87.69 0-159.03 71.34-159.03 159.03s71.34 159.03 159.03 159.03 159.03-71.34 159.03-159.03c-.01-87.69-71.35-159.03-159.03-159.03z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-81.662 2217.155 334.673)"
          className="prefix__st31"
          cx={2217.01}
          cy={334.71}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M2216.29 308.5s-26.03-22.96-44.46-.9c-25.29 30.28 44.46 68.79 44.46 68.79s71-39.75 46.17-70.38c-18.79-23.15-46.17 2.49-46.17 2.49z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-76.049 2516.518 1382.004)"
          className="prefix__st31"
          cx={2516.4}
          cy={1382.02}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M2515.67 1355.82s-26.03-22.96-44.46-.9c-25.29 30.28 44.46 68.79 44.46 68.79s71-39.75 46.17-70.38c-18.78-23.16-46.17 2.49-46.17 2.49z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-67.394 762.91 1291.134)"
          className="prefix__st31"
          cx={762.99}
          cy={1291.2}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M762.26 1264.99s-26.03-22.96-44.46-.9c-25.29 30.28 44.46 68.79 44.46 68.79s71-39.75 46.16-70.38c-18.78-23.15-46.16 2.49-46.16 2.49z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st31"
          d="M732.82 1086.58c0 24.51-19.87 44.37-44.37 44.37-24.51 0-44.37-19.87-44.37-44.37 0-24.51 19.87-44.38 44.37-44.38 24.5.01 44.37 19.87 44.37 44.38z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M688.01 1070.98s-15.5-13.67-26.46-.54c-15.06 18.02 26.46 40.95 26.46 40.95s42.27-23.66 27.48-41.89c-11.18-13.78-27.48 1.48-27.48 1.48z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st31"
          d="M2136.75 158.34c0 29.09-23.58 52.66-52.67 52.66-29.08 0-52.66-23.58-52.66-52.66 0-29.09 23.58-52.66 52.66-52.66 29.09-.01 52.67 23.57 52.67 52.66z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M2083.57 139.82s-18.39-16.22-31.41-.64c-17.87 21.39 31.41 48.6 31.41 48.6s50.16-28.08 32.61-49.72c-13.26-16.35-32.61 1.76-32.61 1.76z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st31"
          d="M2674.39 1101.9c0 29.09-23.58 52.67-52.66 52.67s-52.66-23.58-52.66-52.67c0-29.08 23.58-52.66 52.66-52.66s52.66 23.57 52.66 52.66z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M2621.22 1083.39s-18.39-16.22-31.41-.64c-17.87 21.39 31.41 48.6 31.41 48.6s50.16-28.08 32.61-49.72c-13.27-16.36-32.61 1.76-32.61 1.76z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-13.286 1501.104 431.93)"
          className="prefix__st30"
          cx={1501.43}
          cy={431.98}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M1499.76 382.87c9.67-1.33 18 22.67 17.33 30.33-.67 7.67 18-1 27 5.67s6.33 41.33 0 43.67c-6.33 2.33-31.88 2.67-40.11-1.67-8.23-4.33-13.78-3.52-13.78-3.52l-4.24-36.26s5.13-1.54 10.79-6.54c5.68-5.01 3.01-31.68 3.01-31.68zm-43 85c2.33 2 28.67 8.33 30-5 1.33-13.33-5.33-41.67-5.33-41.67s-18.32-.92-24.67 2.32c-2.45 1.26-2.33 42.35 0 44.35z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-73.22 837.558 1565.89)"
          className="prefix__st30"
          cx={837.53}
          cy={1565.85}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M835.87 1516.74c9.67-1.33 18 22.67 17.33 30.33-.67 7.67 18-1 27 5.67s6.33 41.33 0 43.67c-6.33 2.33-31.88 2.67-40.11-1.67-8.23-4.33-13.78-3.52-13.78-3.52l-4.24-36.26s5.13-1.54 10.79-6.54c5.67-5.01 3.01-31.68 3.01-31.68zm-43 85c2.33 2 28.67 8.33 30-5 1.33-13.33-5.33-41.67-5.33-41.67s-18.32-.92-24.67 2.32c-2.45 1.26-2.34 42.35 0 44.35z"
        />
      </g>
      <g>
        <circle className="prefix__st30" cx={2865.43} cy={983.3} r={68.33} />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M2863.9 938.29c8.86-1.22 16.5 20.78 15.89 27.81-.61 7.03 16.5-.92 24.75 5.19s5.8 37.89 0 40.03c-5.81 2.14-29.22 2.44-36.76-1.53-7.54-3.97-12.63-3.23-12.63-3.23l-3.89-33.24s4.7-1.42 9.89-6c5.19-4.59 2.75-29.03 2.75-29.03zm-39.42 77.91c2.14 1.83 26.28 7.64 27.5-4.58 1.22-12.22-4.89-38.19-4.89-38.19s-16.8-.85-22.61 2.13c-2.24 1.14-2.14 38.81 0 40.64z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-45.001 1285.424 740.68)"
          className="prefix__st30"
          cx={1285.43}
          cy={740.66}
          r={57.87}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M1284.13 702.54c7.5-1.03 13.97 17.6 13.46 23.55-.52 5.95 13.97-.78 20.96 4.4 6.99 5.17 4.92 32.08 0 33.9-4.92 1.81-24.75 2.07-31.13-1.29-6.39-3.36-10.7-2.74-10.7-2.74l-3.29-28.15s3.98-1.2 8.38-5.08c4.39-3.89 2.32-24.59 2.32-24.59zm-33.38 65.99c1.81 1.55 22.25 6.47 23.29-3.88 1.03-10.35-4.14-32.34-4.14-32.34s-14.22-.72-19.15 1.8c-1.89.96-1.81 32.86 0 34.42z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-45.001 449.21 798.566)"
          className="prefix__st39"
          cx={449.22}
          cy={798.56}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M413.66 838.06c-11.01-65.87 39.41-67.49 39.41-67.49v-19.52L493.02 791l-38.49 38.49v-22.33s-19.35.81-26.67 11.38a536.103 536.103 0 01-14.2 19.52z"
        />
      </g>
      <g>
        <circle
          transform="rotate(-71.215 1674.748 1556.693)"
          className="prefix__st39"
          cx={1674.67}
          cy={1556.63}
          r={74.55}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st15"
          d="M1639.11 1596.14c-11.01-65.87 39.41-67.49 39.41-67.49v-19.52l39.95 39.95-38.49 38.49v-22.33s-19.35.81-26.67 11.38c-7.31 10.57-14.2 19.52-14.2 19.52z"
        />
      </g>
      <g>
        <circle className="prefix__st62" cx={1360.54} cy={215.16} r={20} />
        <circle className="prefix__st62" cx={1360.54} cy={305.16} r={20} />
        <circle
          transform="rotate(-67.5 1285.518 261.68)"
          className="prefix__st62"
          cx={1285.54}
          cy={261.69}
          r={20}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st62"
          d="M1360.54 309.16c-.68 0-1.37-.17-2-.54l-75-43.47c-1.22-.7-1.97-2-1.99-3.4-.02-1.41.7-2.72 1.89-3.46l75-46.53a4.005 4.005 0 015.51 1.29c1.16 1.88.59 4.34-1.29 5.51l-69.33 43.01 69.23 40.13a4.014 4.014 0 011.46 5.47 4.04 4.04 0 01-3.48 1.99z"
        />
      </g>
      <g>
        <circle className="prefix__st23" cx={3289.88} cy={742.85} r={20} />
        <circle className="prefix__st23" cx={3289.88} cy={832.85} r={20} />
        <circle className="prefix__st23" cx={3214.88} cy={789.38} r={20} />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st23"
          d="M3289.88 836.85c-.68 0-1.37-.17-2-.54l-75-43.47c-1.22-.71-1.97-2-1.99-3.4-.02-1.4.7-2.72 1.89-3.46l75-46.53a3.996 3.996 0 015.51 1.29c1.16 1.88.59 4.34-1.29 5.51l-69.33 43.01 69.23 40.13a4.014 4.014 0 011.46 5.47 4.04 4.04 0 01-3.48 1.99z"
        />
      </g>
      <g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st63"
          d="M2848.22 207.26h-31.58c-6.67 0-12.08 5.41-12.08 12.08v26.01c0 6.67 5.41 12.08 12.08 12.08h31.58c6.67 0 12.08-5.41 12.08-12.08v-26.01c-.01-6.68-5.41-12.08-12.08-12.08zM2949.55 207.26h-31.58c-6.67 0-12.08 5.41-12.08 12.08v26.01c0 6.67 5.41 12.08 12.08 12.08h31.58c6.67 0 12.08-5.41 12.08-12.08v-26.01c-.01-6.68-5.41-12.08-12.08-12.08zM3050.88 207.26h-31.58c-6.67 0-12.08 5.41-12.08 12.08v26.01c0 6.67 5.41 12.08 12.08 12.08h31.58c6.67 0 12.08-5.41 12.08-12.08v-26.01c0-6.68-5.41-12.08-12.08-12.08z"
        />
      </g>
    </svg>
  );
};
export const BlogSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 616.39 400.09">
      <style>
        {
          ".prefix__st1{fill:#fff}.prefix__st2{fill:#ffc500}.prefix__st3{fill:#f47e14}.prefix__st4{fill:#464689}.prefix__st5{fill:#ffb4a6}.prefix__st6{fill:#122030}.prefix__st8{fill:#f76687}.prefix__st9{fill:none;stroke:#fff;stroke-miterlimit:10}.prefix__st10{fill:#ecbf4c}.prefix__st13{fill:#a797fb}.prefix__st14{opacity:.2;fill:#9ed3ff}.prefix__st17{fill:#fffdff}.prefix__st18{fill:#e08675}.prefix__st19{fill:#dd6e5c}.prefix__st20{fill:#e0eefb}.prefix__st21{fill:#5f5ea5}"
        }
      </style>
      <motion.path
        variants={animPath}
        initial="initial"
        animate="animate"
        exit="exit"
        d="M504.57 231.71c-8 19.6 2.7 38.7 8.8 57.4 8.3 25.6 11.51 94.34-5.09 117.54-.8 1.1-1.6 2.2-2.5 3.3-17.6 20.9-45.7 23-70.9 24.7-12.8.8-25.6 1.5-38.4 2.1-20.9 1-41.8 1.6-62.6 1.9-2.3 0-4.6.1-6.9.1-17 .2-34 .1-50.9-.2-22.9-.3-45.7-.9-68.6-1.4-6.6-.1-13.1-.3-19.7-.4-15.6-.3-31.3-1.7-46.3-5.4-17-4.2-32.8-11.3-46.1-23.1-1.4-1.2-2.8-2.5-4.1-3.8-26.1-26-58.24-83.56-43.64-117.86 6.5-15.4 12.89-36.94 11.29-53.54-.9-9-7.83-45.47-11.23-53.87-13.2-32.3 17.48-63.67 49.78-85.17 14.4-9.6 32.65-40.07 46.79-41.88 35.07-24.98 81.11-18.22 124.31-34.72 26.1-10 56.2-12.6 81.7-1 23.3 10.6 46.59 16.42 70.29 25.62 21.1 8.2 36.91 21.78 58.11 30.28 20.6 8.3 38.4 24 48.4 43.9 11 22 12.3 48.5 4.3 71.7-5.81 16.4-20.31 27.8-26.81 43.8z"
        opacity={0.29}
        fill="#c3b7fc"
        id="prefix__BACKGROUND"
      />
      <g id="prefix__OBJECTS">
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M537 406.37l-.74-1.94-23.7.02-.23 1.92z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st2"
          d="M536.26 404.43l-3.53-12.61-9.19-.14.24 6.63s-11.37 2.7-11.22 6.15l23.7-.03z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st3"
          d="M533.35 394.05l-7.71-2.34-2.1-.03.15 4.32 10.56 1.28z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M465.27 406.37l.24-1.94-23.71.02-.99 1.92z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st2"
          d="M465.51 404.43l1.48-12.61-9.13-.14-2.4 6.63s-12.44 2.7-13.66 6.15l23.71-.03z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st3"
          d="M466.72 394.05l-6.78-2.34-2.08-.03-1.57 4.32 10.06 1.28z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st4"
          d="M471.69 395.14l37.03-140.68 10.32 140.68h17.92l-8.28-154.78-34.99-7.31-42.62 162.09z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M511.95 175.26l-18.26 57.79 34.99 7.31 3.64-59.82z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M527.65 176.31l4.67 4.23s-11.45 5.97-16.36 3.61-4.02-8.89-4.02-8.89l4.12.25 11.59.8z"
        />
        <circle
          transform="rotate(-80.747 550.748 161.09)"
          className="prefix__st4"
          cx={550.75}
          cy={161.1}
          r={12.16}
        />
        <circle className="prefix__st4" cx={529.48} cy={153.1} r={18.05} />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M527.43 179.16l6.83-13.69s5.69 4.03 7.7-.99c1.79-4.47-3.11-6.29-6.16-4.84 0 0 9.04-14.81-4.49-20.16-13.54-5.36-19.26 13.66-20.66 18.25-2.48 8.09 2.21 13.7 6.31 15.34l-1.78 4.88s-1.61 4.26 2.44 5.63c2.16.73 4.03.42 5.51-.21 1.89-.8 3.38-2.35 4.3-4.21z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st1"
          d="M523 161.14c-1.74.94-3.76 1.35-5.73 1.16.49.85 1.07 1.78 2 2.11.93.33 2.03.23 2.81-.37.79-.6 1.28-1.98.92-2.9z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M520.37 160.18c-.03-.01-.07-.01-.1-.03-.59-.26-1.04-.73-1.26-1.33-.22-.6-.18-1.25.1-1.83l1.65-3.33c.1-.2.34-.28.53-.18.2.1.28.34.18.54l-1.65 3.33c-.19.38-.21.8-.07 1.2.14.4.44.71.82.87.2.09.3.32.21.52-.06.18-.24.27-.41.24z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st4"
          d="M516.57 148.93c-.52-1.75 5.07-1.6 4.13-.55-.66.75-3.8 1.67-4.13.55zM525.45 156.2a1.56 1.56 0 11-3.09-.45c.12-.85.91-1.44 1.77-1.32.85.13 1.44.92 1.32 1.77zM518.19 154.13a1.56 1.56 0 11-3.09-.45c.12-.85.91-1.44 1.77-1.32.86.13 1.45.92 1.32 1.77z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st6"
          d="M535.95 163.65c-.03 0-.05-.01-.08-.02a.399.399 0 01-.23-.52c.35-.91 1.16-1.62 2.1-1.86.95-.24 1.99.01 2.73.64.17.14.19.4.04.56-.14.17-.4.19-.56.04-.55-.47-1.32-.65-2.01-.48-.7.17-1.29.7-1.55 1.37-.08.19-.26.29-.44.27z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          d="M516.95 173.08c4.91 1.67 10.84-.21 10.84-.21s-5.02 3.37-11.45 1.89l.61-1.68z"
          fill="#da857c"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st8"
          d="M525.96 161.11a1.14 1.14 0 002.28-.03c-.01-.63-.53-1.13-1.15-1.12-.64.01-1.14.52-1.13 1.15zM512.62 158.19a1.14 1.14 0 002.28-.03 1.14 1.14 0 00-1.16-1.12c-.63 0-1.13.52-1.12 1.15z"
        />
        <circle
          transform="rotate(-45.001 550.022 144.456)"
          className="prefix__st4"
          cx={550.02}
          cy={144.45}
          r={8.61}
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st4"
          d="M512.41 152.39s2.15-5.71 7.83-8.02c0 0 1.64 4.31 11.5 11.84 0 0-2.49 8-1.55 8.3.94.3 3.15-2.41 5.62-4.85 2.46-2.44 5.5-4.39 5.5-4.39l-3.4-13.91-3.89-2.81-5.17-1.83-5.27.6-4.43 1.29-4.6 4.66-2.11 4.26-.03 4.86z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st9"
          d="M520.48 153.3c0 2.29-1.86 4.14-4.14 4.14-2.29 0-4.14-1.86-4.14-4.14 0-2.29 1.86-4.14 4.14-4.14 2.29 0 4.14 1.85 4.14 4.14zM528.79 156.15c0 2.29-1.86 4.14-4.14 4.14-2.29 0-4.14-1.86-4.14-4.14s1.86-4.14 4.14-4.14c2.29 0 4.14 1.85 4.14 4.14z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M475.62 126.49l8.53 6.1-8.53-.46z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st10"
          d="M511.95 175.26l-32.57 112.21-5.85-2.13 21.76-76.52s-3.71-7.16-3.47-10.81c.24-3.65 4.3-8.79 4.3-8.79s-21.56-1.93-24.04-3.35c-2.48-1.41.96-50.03.96-50.03l14.3 1.35-.91 35.03 25.52 3.04z"
        />
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st4"
            d="M460.66 364.03H72.92c-5.52 0-10-4.48-10-10V102.07c0-5.52 4.48-10 10-10h387.74c5.52 0 10 4.48 10 10v251.96c0 5.52-4.48 10-10 10z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            transform="rotate(90 266.787 213.734)"
            fill="#cec8fc"
            d="M154.13 18.86h225.32V408.6H154.13z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            d="M312.88 101.07H334L108.68 326.39H87.56l225.32-225.32zm148.78 28.71v-28.7H351.57L126.25 326.39h138.79l196.62-196.61zM71.92 264.85L235.7 101.07H168l-96.08 96.08v67.7zm389.74-26.62v-21.12L352.37 326.39h21.12l88.17-88.16z"
            opacity={0.3}
            fill="#fff"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M229.95 357.26h73.67v41.68h-73.67z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st4"
            d="M229.95 357.26h73.67v11.88h-73.67z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st1"
            d="M207.74 398.94h118.09v7.43H207.74zM62.92 335.39v18.63c0 5.52 4.48 10 10 10h387.74c5.52 0 10-4.48 10-10v-18.63H62.92z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st14"
            d="M424.99 290.32H274.1c-2.21 0-4-1.79-4-4v-92.98c0-2.21 1.79-4 4-4H425c2.21 0 4 1.79 4 4v92.98c-.01 2.21-1.8 4-4.01 4z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M426.44 288.87h-150.9c-2.21 0-4-1.79-4-4v-92.98c0-2.21 1.79-4 4-4h150.9c2.21 0 4 1.79 4 4v92.98c0 2.21-1.79 4-4 4z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            transform="rotate(90 350.992 238.382)"
            fill="#dfdbfc"
            d="M306.5 164.93h88.98v146.9H306.5z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            opacity={0.31}
            fill="#a797fb"
            d="M424.44 247.38l-30.49-30.49-47.11 47.1-31.99-31.98-37.31 37.31v13.55h146.9z"
          />
          <circle
            transform="rotate(-80.822 346.821 224.789)"
            className="prefix__st17"
            cx={346.84}
            cy={224.79}
            r={12.75}
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st14"
            d="M470.66 113.13H355.89c-2.21 0-4 1.79-4 2.43v71.61c0 3.78 1.79 5.57 4 5.57h114.76v-79.61z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st18"
            d="M473.08 190.33H358.31c-2.21 0-4-1.79-4-4v-71.61c0-2.21 1.79-4 4-4h114.77c2.21 0 4 1.79 4 4v71.61c0 2.21-1.8 4-4 4z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st5"
            d="M477.08 136.22c0-3.3-6.42-2.67-6.42-4.92s12.18.47 13.49 1.28c1.31.82.53 4.35.53 4.35l-7.6-.71z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st6"
            d="M468.83 182.84h-73.58a1.83 1.83 0 010-3.66h73.58a1.83 1.83 0 010 3.66z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st19"
            d="M395.25 182.84h-32.69a1.83 1.83 0 010-3.66h32.69a1.83 1.83 0 010 3.66z"
          />
          <circle className="prefix__st17" cx={395.25} cy={181.01} r={3.9} />
          <g>
            <circle className="prefix__st17" cx={415.69} cy={147.6} r={23.94} />
            <motion.path
              variants={animPath}
              initial="initial"
              animate="animate"
              exit="exit"
              className="prefix__st19"
              d="M427.34 147.6l-9.09 5.25-9.08 5.24v-20.98l9.08 5.24z"
            />
          </g>
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st17"
            d="M252.98 326.39H100.1V131.62h122.54l30.34 30.34v164.43z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st20"
            d="M222.64 131.62v30.35h30.34z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st21"
            d="M144.13 155.93h-9.7v29.44h-8.63v-29.44h-9.7v-8.3h28.04v8.3z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st20"
            d="M144.26 195.85H116.1v-3.62h28.16v3.62zm0 44.11H116.1v3.62h28.16v-3.62zm0 47.73H116.1v3.62h28.16v-3.62zm61.45 19.09H116.1v3.62h89.61v-3.62zm-28.12-116.36h-3.62v3.62h3.62v-3.62zm-40.48 106.81H116.1v3.61h21.01v-3.61zm3.61 3.62h34.99v-3.61h-34.99v3.61zm38.6-3.62v3.61h57.66v-3.61h-57.66zm-63.22-44.11h38.65v-3.62H116.1v3.62zm42.27 0h31.22v-3.62h-31.22v3.62zm34.83-3.61v3.62h43.78v-3.62H193.2zm-77.1 9.54v3.61h56.07v-3.59l-56.07-.02zm59.68.03v3.59h61.19v-3.61l-61.19.02zm-59.68-38.21v3.62h15.33v-3.62H116.1zm18.94 0v3.62h27.76v-3.62h-27.76zm17.87-9.55v3.62h35.63v-3.62h-35.63zm-36.81 0v3.62h33.19v-3.62H116.1zm76.05 0v3.62h44.83v-3.62h-44.83zm-76.05-9.54v3.62h57.88v-3.62H116.1zm96.49 0v3.62h24.39v-3.62h-24.39zm-35 0v3.62h31.38v-3.62h-31.38zm-40.61 66.82H116.1v3.62h20.88v-3.62zm3.61 0v3.62h68.73v-3.62h-68.73z"
          />
        </g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st14"
          d="M210.82 99.53c0 9.05 7.33 16.38 16.38 16.38h50.79c7.79 0 14.11-6.31 14.11-14.1 0-3.78-1.49-7.2-3.91-9.73h-75.56a16.205 16.205 0 00-1.81 7.45z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st21"
          d="M279.63 86.18c-.1-13.29-10.9-24.03-24.21-24.03-11.84 0-21.7 8.51-23.79 19.74-.94-.17-1.91-.27-2.9-.27-9.05 0-16.38 7.33-16.38 16.38 0 9.05 7.33 16.38 16.38 16.38h50.79c7.79 0 14.11-6.31 14.11-14.1-.01-7.75-6.27-14.03-14-14.1z"
        />
        <g>
          <circle className="prefix__st14" cx={393.72} cy={328.84} r={26.83} />
          <circle className="prefix__st19" cx={395.84} cy={326.72} r={26.83} />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st1"
            d="M400.41 339l-4.62 2.99-4.62-2.98c-11.54-7.46-11.54-12.79-11.54-14.79a8.5 8.5 0 018.5-8.5c3.36 0 6.27 1.96 7.65 4.79a8.507 8.507 0 017.65-4.79 8.5 8.5 0 018.5 8.5c.01 2 .01 7.32-11.52 14.78z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st14"
            d="M303.77 123.39c-18.54 0-33.57 11.59-33.57 25.88 0 7.39 4.02 14.05 10.46 18.76l-3.42 10.33 12.28-5.66c4.32 1.56 9.15 2.44 14.24 2.44 18.54 0 33.57-11.59 33.57-25.88s-15.03-25.87-33.56-25.87z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st20"
            d="M305.11 122.05c-18.54 0-33.57 11.59-33.57 25.88 0 7.39 4.02 14.05 10.46 18.76l-3.42 10.33 12.28-5.66c4.32 1.56 9.15 2.44 14.24 2.44 18.54 0 33.57-11.59 33.57-25.88s-15.02-25.87-33.56-25.87z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st17"
            d="M305.11 142.43c2.94 0 5.33 2.39 5.33 5.33s-2.39 5.33-5.33 5.33-5.33-2.39-5.33-5.33 2.38-5.33 5.33-5.33zm-16.82 0c-2.94 0-5.33 2.39-5.33 5.33s2.39 5.33 5.33 5.33 5.33-2.39 5.33-5.33-2.39-5.33-5.33-5.33zm28.31 5.33c0 2.94 2.39 5.33 5.33 5.33s5.33-2.39 5.33-5.33-2.39-5.33-5.33-5.33-5.33 2.39-5.33 5.33z"
          />
        </g>
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st5"
          d="M466.38 195.35l-4.72-5.03s-7.92-4.14-8.99-3.23c-1.07.91 1.07 3.23 1.07 3.23h-11.43l19.35 10.98 4.72-5.95z"
        />
        <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit"
          className="prefix__st10"
          d="M532.32 180.54l-8.42 15.85-20.6 15.08-36.26-17.59-9.13 12.55s40.3 26.34 46.41 25.94c6.11-.4 16.85-8.57 16.85-8.57l1.07 68.95 18.35-1.21-2.5-83.13s7.21-10.55 7.13-14.69c-.07-4.14-12.9-13.18-12.9-13.18z"
        />
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st14"
            d="M62.92 125.17v64.54c13.2-4.77 22.64-17.42 22.64-32.27 0-14.85-9.44-27.49-22.64-32.27z"
          />
          <circle
            transform="rotate(-23.001 53.095 152.283)"
            className="prefix__st18"
            cx={53.08}
            cy={152.28}
            r={34.31}
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st17"
            d="M53.08 132.2l5.9 11.96 13.19 1.91-9.54 9.31 2.25 13.14-11.8-6.21-11.8 6.21 2.26-13.14-9.55-9.31 13.19-1.91z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st13"
            d="M478.67 72.31c0-.63.51-1.15 1.15-1.15h10.32c.64 0 1.15.51 1.15 1.15v9.17h9.17c.63 0 1.15.51 1.15 1.15v9.17h9.17c.64 0 1.15.51 1.15 1.15v10.32a1.15 1.15 0 01-2.3 0V94.1h-9.17c-.64 0-1.15-.51-1.15-1.15v-9.17h-9.17c-.63 0-1.15-.51-1.15-1.15v-9.17h-9.17c-.64 0-1.15-.51-1.15-1.15zM103.81 71.37c1.99 0 3.86.77 5.26 2.18.45.45.45 1.18 0 1.62-.45.45-1.18.45-1.62 0-1.94-1.94-5.33-1.95-7.28 0-2.81 2.81-7.72 2.81-10.53 0-2.01-2.01-5.27-2-7.28 0-2.81 2.81-7.71 2.81-10.53 0a1.14 1.14 0 010-1.62 1.14 1.14 0 011.62 0c1.94 1.94 5.34 1.94 7.28 0 2.9-2.9 7.62-2.9 10.53 0 1.94 1.94 5.34 1.94 7.28 0a7.439 7.439 0 015.27-2.18zm-5.27-9.48c-1.94 1.94-5.34 1.94-7.28 0-2.9-2.9-7.63-2.9-10.53 0-1.94 1.94-5.34 1.94-7.28 0a1.14 1.14 0 00-1.62 0 1.14 1.14 0 000 1.62c2.81 2.81 7.72 2.81 10.53 0a5.148 5.148 0 017.28 0c2.81 2.81 7.72 2.81 10.53 0 1.94-1.95 5.33-1.94 7.28 0 .45.45 1.18.45 1.62 0 .45-.45.45-1.18 0-1.62a7.374 7.374 0 00-5.26-2.18c-1.99 0-3.86.78-5.27 2.18zM323.93 58.71c.3 0 .6.12.81.34l8.64 8.64c.45.45.45 1.18 0 1.62l-8.64 8.64c-.45.45-1.18.45-1.62 0l-8.64-8.64a1.14 1.14 0 010-1.62l8.64-8.64c.21-.21.51-.34.81-.34zm7.01 9.79l-7.01-7.01-7.01 7.01 7.01 7.01 7.01-7.01zM142.82 377.69h12.21c.63 0 1.15.51 1.15 1.15v12.21c0 .64-.51 1.15-1.15 1.15h-12.21c-.63 0-1.15-.51-1.15-1.15v-12.21c0-.64.51-1.15 1.15-1.15zm11.06 2.3h-9.92v9.92h9.92v-9.92zM183.79 61.24c4 0 7.25 3.25 7.25 7.25s-3.25 7.26-7.25 7.26-7.26-3.25-7.26-7.26c.01-3.99 3.26-7.25 7.26-7.25zm0 12.22a4.96 4.96 0 10.002-9.922 4.96 4.96 0 00-.002 9.922zM42.73 93.82c4 0 7.26 3.25 7.26 7.26a7.255 7.255 0 01-14.51 0c-.01-4.01 3.25-7.26 7.25-7.26zm0 12.21c2.73 0 4.96-2.22 4.96-4.96 0-2.73-2.22-4.96-4.96-4.96a4.96 4.96 0 100 9.92zM33.68 286.02h12.96c.41 0 .79.22.99.57.21.36.21.79 0 1.15l-6.48 11.22c-.41.71-1.58.71-1.99 0l-6.48-11.22c-.21-.36-.21-.79 0-1.15.21-.35.59-.57 1-.57zm10.97 2.3h-8.98l4.49 7.77 4.49-7.77zM548.56 349.02l3.18 3.18 3.18-3.18a1.14 1.14 0 011.62 0c.22.22.34.52.34.81 0 .29-.11.59-.34.81l-3.18 3.18 3.18 3.18c.22.22.34.52.34.81 0 .29-.11.59-.34.81-.45.45-1.18.45-1.62 0l-3.18-3.18-3.18 3.18c-.45.45-1.18.45-1.62 0a1.14 1.14 0 010-1.62l3.18-3.18-3.18-3.18a1.14 1.14 0 010-1.62 1.14 1.14 0 011.62 0zm-1.62-16.29a1.14 1.14 0 000 1.62l3.18 3.18-3.18 3.18a1.14 1.14 0 000 1.62c.45.45 1.18.45 1.62 0l3.18-3.18 3.18 3.18c.45.45 1.18.45 1.62 0 .22-.22.34-.52.34-.81 0-.29-.11-.59-.34-.81l-3.18-3.18 3.18-3.18c.22-.22.34-.52.34-.81 0-.29-.11-.59-.34-.81a1.14 1.14 0 00-1.62 0l-3.18 3.18-3.18-3.18a1.14 1.14 0 00-1.62 0zm4.81-13.12l-3.18-3.18a1.14 1.14 0 00-1.62 0 1.14 1.14 0 000 1.62l3.18 3.18-3.18 3.18a1.14 1.14 0 000 1.62c.45.45 1.18.45 1.62 0l3.18-3.18 3.18 3.18c.45.45 1.18.45 1.62 0 .22-.22.34-.52.34-.81 0-.29-.11-.59-.34-.81l-3.18-3.18 3.18-3.18c.22-.22.34-.52.34-.81 0-.29-.11-.59-.34-.81a1.14 1.14 0 00-1.62 0l-3.18 3.18zM364.25 390.09h4.37v4.37a1.15 1.15 0 002.3 0v-4.37h4.37a1.15 1.15 0 000-2.3h-4.37v-4.37a1.15 1.15 0 00-2.3 0v4.37h-4.37a1.15 1.15 0 000 2.3z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st4"
            d="M598.24 408.91H18.15c-.66 0-1.2-.54-1.2-1.2 0-.66.54-1.2 1.2-1.2h580.1c.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.21 1.2z"
          />
        </g>
        <g>
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st14"
            d="M263.82 121.01v-17.88h-19.46v17.88h-6.62l16.35 16.35 16.35-16.35z"
          />
          <motion.path
            variants={animPath}
            initial="initial"
            animate="animate"
            exit="exit"
            className="prefix__st20"
            d="M264.67 120.16v-17.88h-19.46v17.88h-6.62l16.35 16.35 16.35-16.35z"
          />
        </g>
      </g>
    </svg>
  );
};
export const Vector1 = ({ color, link }) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 345.9 226.2"
      style={{
        enableBackground: "new 0 0 345.9 226.2",
      }}
      xmlSpace="preserve"
    >
      <style>
        {`.st0{opacity:.7}.st1{fill:#e6007e.st3{fill:none;stroke:#e6007e;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10}`}
      </style>
      <g className="st0">
        <path
          className="st1"
          d="M109.9 113.1c-1.4 0-2.5-1.2-2.5-2.6s1.2-2.5 2.6-2.5 2.5 1.2 2.5 2.6c-.1 1.4-1.2 2.6-2.6 2.5zM109.6 127.8c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.2 2.5-2.6 2.5zM109.4 142.4c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM98.3 112.9c-1.4 0-2.5-1.2-2.5-2.6s1.2-2.5 2.6-2.5c1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.6-2.6 2.5zM98 127.6c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.1 2.5-2.6 2.5zM97.8 142.2c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM86.7 112.7c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.2 2.6-2.6 2.5zM86.5 127.4c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c-.1 1.4-1.2 2.5-2.6 2.5zM86.2 142c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM75.1 112.5c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.5-1.2 2.6-2.6 2.5zM74.9 127.2c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c-.1 1.4-1.2 2.5-2.6 2.5zM74.6 141.8c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.2 2.5-2.6 2.5zM63.6 112.4c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM63.3 127c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM63.1 141.6c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM52 112.2c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM51.7 126.8c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM51.5 141.4c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM40.4 112c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.2 2.5-2.6 2.5zM40.1 126.6c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM39.9 141.2c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5z"
        />
      </g>
      <g className="st0">
        <path
          className="st1"
          d="M75.4 71.9c-1.4 0-2.5-1.2-2.5-2.6s1.2-2.5 2.6-2.5S78 68 78 69.4c0 1.4-1.2 2.5-2.6 2.5zM75.2 86.5c-1.4 0-2.5-1.2-2.5-2.6s1.2-2.5 2.6-2.5 2.5 1.2 2.5 2.6c-.1 1.4-1.2 2.5-2.6 2.5zM74.9 101.1c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.6-2.6 2.5zM63.8 71.7c-1.4 0-2.5-1.2-2.5-2.6s1.2-2.5 2.6-2.5 2.5 1.2 2.5 2.6c0 1.4-1.2 2.5-2.6 2.5zM63.6 86.3c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c-.1 1.4-1.2 2.5-2.6 2.5zM63.3 100.9c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.6-2.6 2.5zM52.2 71.5c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.2 2.5-2.6 2.5zM52 86.1c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM51.7 100.7c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.6-2.6 2.5zM40.7 71.3c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM40.4 85.9c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5S43 82 43 83.4c0 1.4-1.2 2.5-2.6 2.5zM40.2 100.5c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.5-1.2 2.6-2.6 2.5zM29.1 71.1c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM28.8 85.7c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM28.6 100.4c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6-.1 1.4-1.2 2.5-2.6 2.5zM17.5 70.9c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM17.2 85.5c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6s-1.1 2.5-2.6 2.5zM17 100.2c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5 1.4 0 2.5 1.2 2.5 2.6 0 1.4-1.2 2.5-2.6 2.5zM5.9 70.7c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c0 1.4-1.2 2.5-2.6 2.5zM5.7 85.3c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5s2.5 1.2 2.5 2.6c-.1 1.4-1.2 2.5-2.6 2.5zM5.4 100c-1.4 0-2.5-1.2-2.5-2.6 0-1.4 1.2-2.5 2.6-2.5S8 96.1 8 97.5c0 1.4-1.2 2.5-2.6 2.5z"
        />
      </g>
      <path
        d="m188.8 35.5-.7-23.9c-.1-2.8 2.1-5.1 4.9-5.2l24-.7c2.8-.1 5.1 2.1 5.2 4.9l.7 23.9c.1 2.8-2.1 5.1-4.9 5.2l-24 .8c-2.8.1-5.1-2.2-5.2-5z"
        style={{
          fill: "none",
          stroke: `${color}`,
          strokeWidth: 2.424,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        className="st3"
        d="m85.9 197.3 61.3-1.7M93.8 189l64.9-1.9M255 85.2l61.3-1.7M262.9 76.9l64.9-1.9"
      />
      <circle
        transform="rotate(-46.617 90.946 122.858)"
        cx={90.9}
        cy={122.9}
        style={{
          fill: "none",
          stroke: "#e6007e",
          strokeWidth: 6.1954,
          strokeMiterlimit: 10,
        }}
        r={16.7}
      />
      <defs>
        <path
          id="SVGID_X_"
          d="m99.2 198.3-.6-153.4c0-11.7 9.4-21.3 21.1-21.4l153-1.4c11.8-.1 21.4 9.3 21.5 21.1l1.4 152.3c.1 11.7-9.3 21.3-21 21.5l-153.9 2.4c-11.7.3-21.5-9.2-21.5-21.1z"
        />
      </defs>
      <clipPath id="SVGID_00000129903554944362063800000001887080320941725599_">
        <use
          xlinkHref="#SVGID_X_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <g
        style={{
          clipPath:
            "url(#SVGID_00000129903554944362063800000001887080320941725599_)",
        }}
      >
        <image
          style={{
            overflow: "visible",
          }}
          width={1200}
          height={800}
          xlinkHref={link}
          transform="translate(40.174 18.405) scale(.2548)"
        />
      </g>
      <defs>
        <path
          id="SVGID_00000018237533629522220350000007130514680120956304_"
          d="m264.5 81.3 63.2 17.4c2.6.7 3 4.2.6 5.4l-38.5 20.8c-1.4.7-3 .3-3.9-1l-24.7-38.2c-1.4-2.2.7-5.1 3.3-4.4z"
        />
      </defs>
      <clipPath id="SVGID_00000002384792207824835990000003323227420991439236_">
        <use
          xlinkHref="#SVGID_00000018237533629522220350000007130514680120956304_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <path
        style={{
          clipPath:
            "url(#SVGID_00000002384792207824835990000003323227420991439236_)",
          fill: "none",
          stroke: "#662483",
          strokeWidth: 1.094,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
        d="m291 48.7-54.8 58M294.1 51.6l-54.8 58M297.2 54.6l-54.8 57.9M300.3 57.5l-54.8 58M303.4 60.4l-54.8 58M306.5 63.4l-54.8 57.9M309.6 66.3l-54.8 58M312.7 69.2l-54.8 58M315.8 72.2 261 130.1M318.9 75.1l-54.8 58M322 78l-54.8 58M325.1 81l-54.8 57.9M328.2 83.9l-54.8 57.9M331.3 86.8l-54.8 58M334.4 89.7l-54.8 58M337.5 92.7l-54.8 57.9M340.6 95.6l-54.8 58"
      />
      <path
        d="M108.6 32.2c-2 2.2-5.4 2.3-7.6.2-2.2-2-2.3-5.4-.2-7.6 2-2.2 5.4-2.3 7.6-.2 2.1 2 2.2 5.4.2 7.6z"
        style={{
          fill: "none",
          stroke: "#e6007e",
          strokeWidth: 2,
          strokeMiterlimit: 10,
        }}
      />
      <circle
        transform="rotate(-1.883 323.57 177.956) scale(1.00004)"
        cx={323.5}
        cy={178}
        style={{
          fill: "none",
          stroke: "#662483",
          strokeWidth: 2,
          strokeMiterlimit: 10,
        }}
        r={7}
      />
    </svg>
  );
};
export const DataInputSvg = () => (
  <svg
    id="Illustration"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x={0}
    y={0}
    viewBox="0 0 2475 1650"
    style={{
      enableBackground: "new 0 0 2475 1650",
    }}
    xmlSpace="preserve"
  >
    <style>
      {
        ".st0{opacity:.6;fill:#fff}.st9{fill:#91b3fa}.st10{fill:#bdd0fb}.st12{fill:#7d97f4}.st13{opacity:.5}.st13,.st15{fill:#fff}"
      }
    </style>
    <path
      className="st0"
      d="M566.8 715.6H244.7c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5zM700 938H244.7c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5H700c6.9 0 12.5 5.6 12.5 12.5 0 7-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={393.861}
      y1={679.358}
      x2={753.143}
      y2={1194.721}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      d="M605.5 764.4H283.4c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
      style={{
        opacity: 0.53,
        fill: "url(#SVGID_1_)",
      }}
    />
    <path
      className="st0"
      d="M641.6 813.2H319.5c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000135663695559271943230000000221263463479043472_"
      gradientUnits="userSpaceOnUse"
      x1={290.797}
      y1={1053.115}
      x2={618.683}
      y2={691.853}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      style={{
        opacity: 0.53,
        fill: "url(#SVGID_00000135663695559271943230000000221263463479043472_)",
      }}
      d="M432 991.9H283.4c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5H432c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000070079464012306522710000004603494086583552679_"
      gradientUnits="userSpaceOnUse"
      x1={435.774}
      y1={1184.697}
      x2={763.659}
      y2={823.434}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      style={{
        opacity: 0.53,
        fill: "url(#SVGID_00000070079464012306522710000004603494086583552679_)",
      }}
      d="M648.7 1089.5H418.2c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h230.5c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <path
      className="st0"
      d="M641.6 1040.7H319.5c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000029010221006592906890000013508298039625585570_"
      gradientUnits="userSpaceOnUse"
      x1={1715.049}
      y1={863.888}
      x2={1840.189}
      y2={863.888}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000029010221006592906890000013508298039625585570_)",
      }}
      d="M1827.7 876.4h-100.2c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h100.2c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <path
      className="st0"
      d="M2208.3 876.4h-322.1c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000162350637105238580890000008981151597622274476_"
      gradientUnits="userSpaceOnUse"
      x1={1715.049}
      y1={1086.36}
      x2={1840.189}
      y2={1086.36}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000162350637105238580890000008981151597622274476_)",
      }}
      d="M1827.7 1098.8h-100.2c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h100.2c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <path
      className="st0"
      d="M2341.5 1098.8h-455.3c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h455.3c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000072983179681168301510000009224629504318352017_"
      gradientUnits="userSpaceOnUse"
      x1={2035.361}
      y1={840.143}
      x2={2394.643}
      y2={1355.506}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      style={{
        opacity: 0.53,
        fill: "url(#SVGID_00000072983179681168301510000009224629504318352017_)",
      }}
      d="M2247 925.2h-322.1c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5H2247c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <path
      className="st0"
      d="M2283.1 974H1961c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000150819178817680757240000010603018632958348704_"
      gradientUnits="userSpaceOnUse"
      x1={1932.298}
      y1={1213.9}
      x2={2260.183}
      y2={852.638}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#53d8ff",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#3840f7",
        }}
      />
    </linearGradient>
    <path
      style={{
        opacity: 0.53,
        fill: "url(#SVGID_00000150819178817680757240000010603018632958348704_)",
      }}
      d="M2073.5 1152.7h-148.6c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h148.6c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <path
      className="st0"
      d="M2283.1 1201.5H1961c-6.9 0-12.5-5.6-12.5-12.5s5.6-12.5 12.5-12.5h322.1c6.9 0 12.5 5.6 12.5 12.5s-5.6 12.5-12.5 12.5z"
    />
    <linearGradient
      id="SVGID_00000103978876931152678140000002767909513359071115_"
      gradientUnits="userSpaceOnUse"
      x1={311.107}
      y1={830.817}
      x2={2264.366}
      y2={830.817}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000103978876931152678140000002767909513359071115_)",
      }}
      d="M1270.8 1447.5s-663.2 7.7-847.9-165.8-115.2-346.4 26.3-395.4c141.4-49 165.6-99.9 89.5-168.7-76.1-68.7-172.8-209.8-12.3-351.6s343.6 61.9 487.1 34.8c143.5-27 86.6-118.1 275.3-55.2 188.6 62.9 147.1-120.2 298.7-136.8 151.7-16.6 136.1 190.5 292.1 112.3 156-78.2 283.6-67.4 350.7 56.8 67.1 124.1 37.9 291.3-109.2 391s-131.3 92.8-76.4 190.8c55 97.9 104.3 419.9-146 465.9-250.4 45.9-627.9 21.9-627.9 21.9z"
    />
    <path
      className="st9"
      d="M2204.1 560.3c-9.5-24.9-22.5-48.2-36.5-70.9-4.3-7-14.9-4.8-16.3 3.3-5.5 33.9-27.9 65.3-53.8 89.1-33 30.3-72.7 52.9-104.3 84.7-65 65.5-87.7 162-93.3 254.1-5.6 92.1 3.1 185.2-11.7 276.3-7 43.4-19.9 86.9-45.8 122.5-25.4 34.9-65 61.4-108.1 63.3-1.2.1-2.2 1.2-1.9 2.4.1.7.6 1.3 1.3 1.6 51.2 17.8 110-12.5 139.7-58 29.9-45.8 36.4-102.9 37.1-157.7.8-54.7-3.2-110.3 9-163.6s40.9-102.7 81-139.8c36.5-33.8 81.5-56.9 122.1-85.7 40.6-28.8 78.7-66.1 91.1-114.3 9.2-35.4 3.4-73.2-9.6-107.3z"
    />
    <path
      className="st10"
      d="M2334 761.1c-35.2 32.2-83.7 50.6-130.6 63.7-61.3 17.2-126.3 29.7-177.1 68.1-53 40.1-83.3 103.6-102.2 167.4-18.8 63.8-28.2 130.2-49.9 193.1-20.6 59.8-54.6 118.1-107.7 151.9 43.2-1.5 81.8-33.8 103.1-72.1 22.7-40.9 30.2-88.2 40.3-133.9 10.1-45.7 24.2-92.7 56.4-126.5 63.4-66.4 172-60.1 250.3-108 40.5-24.8 71.2-63.3 93.6-105.2 15.3-28.5 27-58.7 37.6-89.3 3.2-8.4-7.1-15.2-13.8-9.2z"
    />
    <linearGradient
      id="SVGID_00000052081162305918104720000016694481703791440315_"
      gradientUnits="userSpaceOnUse"
      x1={1912.737}
      y1={761.17}
      x2={2156.311}
      y2={761.17}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000052081162305918104720000016694481703791440315_)",
      }}
      d="M2156.3 564.8s-.1.4-.3 1.3c-.2.9-.6 2.2-1.1 3.9-.2.8-.5 1.8-.9 2.8-.3 1-.7 2.1-1.1 3.3-.9 2.4-1.8 5.1-3.1 8.1-2.4 6.1-5.8 13.3-10.2 21.3-1.1 2-2.3 4-3.5 6.1-.3.5-.6 1.1-.9 1.6-.3.5-.7 1-1 1.6-.7 1.1-1.3 2.1-2 3.2l-2.1 3.3c-.3.6-.7 1.1-1.1 1.7-.4.5-.8 1.1-1.1 1.6-1.5 2.2-3.1 4.5-4.7 6.8-.4.6-.8 1.2-1.2 1.7-.4.6-.9 1.1-1.3 1.7-.9 1.1-1.7 2.3-2.6 3.4-1.8 2.3-3.5 4.7-5.5 7s-4 4.6-6 7c-1 1.2-2 2.4-3.1 3.5-1.1 1.2-2.2 2.3-3.3 3.5-2.2 2.3-4.4 4.7-6.7 7.1l-7.2 6.9c-1.2 1.2-2.4 2.3-3.7 3.5-1.2 1.2-2.6 2.3-3.9 3.4-2.6 2.2-5.2 4.5-7.9 6.8-2.6 2.3-5.4 4.5-8.1 6.7-2.7 2.2-5.5 4.5-8.3 6.7-5.5 4.5-11.2 9.1-16.7 13.8-11.2 9.4-22.1 19.3-32.5 29.8-10.3 10.6-19.9 21.8-28.3 33.6-8.4 11.8-15.8 24.1-22 36.5-6.2 12.4-11.3 24.8-15.6 36.8-4.2 12-7.7 23.5-10.5 34.3-.8 2.7-1.4 5.3-2 7.9-.6 2.6-1.3 5.1-1.9 7.6-1.1 4.9-2.1 9.6-3.1 14.1-.9 4.4-1.7 8.6-2.4 12.4-.7 3.8-1.3 7.4-1.9 10.6-.3 1.6-.5 3.1-.8 4.5-.2 1.4-.4 2.8-.6 4-.4 2.5-.7 4.6-1 6.3-.5 3.4-.8 5.3-.8 5.3-.1.4-.5.7-.9.6-.4-.1-.7-.4-.6-.9 0 0 .3-1.8.7-5.3.2-1.7.5-3.9.9-6.4.2-1.3.4-2.6.6-4 .2-1.4.5-3 .7-4.6.5-3.2 1.1-6.8 1.7-10.6.7-3.9 1.5-8 2.3-12.5.9-4.4 1.9-9.2 2.9-14.2.6-2.5 1.2-5 1.8-7.6.6-2.6 1.2-5.3 1.9-8s1.4-5.5 2.1-8.3c.8-2.8 1.6-5.6 2.5-8.5.4-1.4.8-2.9 1.3-4.4.5-1.5.9-2.9 1.4-4.4 1-3 1.9-6 3-9 4.2-12.1 9.2-24.7 15.4-37.3 6.2-12.6 13.5-25.1 22-37.1s18.2-23.4 28.6-34.2c10.4-10.7 21.5-20.7 32.7-30.2 5.6-4.8 11.2-9.4 16.7-13.9 2.8-2.3 5.5-4.5 8.3-6.8 2.7-2.2 5.5-4.4 8.1-6.7 2.6-2.2 5.2-4.5 7.8-6.7 1.3-1.1 2.6-2.2 3.8-3.3 1.2-1.2 2.4-2.3 3.7-3.4 2.4-2.3 4.8-4.5 7.2-6.8 2.3-2.3 4.5-4.7 6.7-7 1.1-1.1 2.2-2.3 3.3-3.4 1.1-1.1 2.1-2.3 3.1-3.5l6-6.9c1-1.1 1.9-2.3 2.8-3.4.9-1.1 1.8-2.3 2.7-3.4l2.7-3.3c.4-.6.9-1.1 1.3-1.7.4-.6.8-1.1 1.2-1.7l4.8-6.6c.4-.5.8-1.1 1.2-1.6.4-.5.7-1.1 1.1-1.6.7-1.1 1.4-2.2 2.1-3.2.7-1.1 1.4-2.1 2-3.1.3-.5.7-1 1-1.5.3-.5.6-1 .9-1.6 1.2-2.1 2.4-4.1 3.6-6 .3-.5.6-1 .9-1.4.3-.5.5-1 .8-1.4.5-1 1-1.9 1.5-2.8 1-1.9 2-3.6 2.9-5.4.9-1.7 1.7-3.4 2.5-5s1.4-3.2 2.1-4.6c2.7-5.9 4.4-10.7 5.5-13.9.6-1.6 1-2.9 1.2-3.7.3-.8.4-1.3.4-1.3.1-.4.5-.7.9-.6 0 .3.3.6.2 1.1z"
    />
    <path
      className="st12"
      d="M2145.8 1274.7s98.7-11.5 130.7 22.9c1.4 1.5-.2 3.6-2.8 3.6h-18.8c-4.5 0-6.8 3.8-3.7 6.1 9.9 7.4 24.8 20.6 28 34.7.8 3.8-4.4 6.7-9.3 5.1-26-8.6-98.8-31-146.5-30l22.4-42.4z"
    />
    <path
      className="st9"
      d="m2145.7 1238.1-518.8-21.8.3 138.2 504.3-1.2c14.5 0 27.3-6.6 32-16.4 8.8-18.3 19.7-49.4 12-79.9-2.7-10.4-15-18.2-29.8-18.9z"
    />
    <path
      className="st12"
      d="m1627.5 1462.7 536.2-1.3c13.4 0 25.3-6.2 29.2-15.3 17.4-40.7 7.5-76.1-.6-94.7-3.6-8.2-14.3-13.8-26.4-13.8l-538.6 1.3.2 123.8z"
    />
    <path
      className="st9"
      d="m2154.5 1350-79.2 3.2c-9.9.4-17.6 6.2-17.6 13.2l.2 66.3c0 7.1 8 13 18 13.2l78.1 1.6c9 .2 16.9-4.2 18.7-10.4 4.8-16.1 11.5-47.8.8-77.1-2.1-6.2-10.1-10.4-19-10zM2023.7 1355.4c-9.7.5-17.3 6.3-17.3 13.2l.1 63.5c0 7.4 8.6 13.3 19 13.2 10.1-.2 18.2-6.1 18.2-13.2l-.1-63.5c0-7.7-9.2-13.7-19.9-13.2z"
    />
    <path
      className="st12"
      d="m2074.1 1083.6-520.7 16.6.3 130.9 526.6 8.7c14.5.2 27.6-6.4 31.7-16.2 17.9-42.6 19.5-84.9-7.4-126.6-5.5-8.5-17.5-13.8-30.5-13.4z"
    />
    <path
      className="st9"
      d="m2054.6 1095.6-28.3 1.6c-8.6.5-15 5.8-14.5 11.9l9 106.9c.5 5.6 6.7 10.1 14.6 10.5l19.6 1c9.2.5 17-4.7 16.9-11.2l-.3-109.6c0-6.5-7.8-11.7-17-11.1zM1986.9 1100.1h-10.3c-8 0-14.3 4.8-14 10.4l6.3 102.4c.3 5.3 6.5 9.5 14 9.5h11c8 0 14.4-4.8 14-10.5l-6.9-102.4c-.4-5.2-6.6-9.4-14.1-9.4zM1888.4 479.6l-188.7 111.5c-3.3 2-7.3-1.3-6.1-4.9l67.6-203.3c3.8-11.6-3.9-23.8-16-25.2-20.8-2.4-43.7-2.4-68.9.3-54 5.9-230.6 33.3-227.2 231.3s159.1 227.1 294.7 219.1 211-179.4 183.8-277.9c-4-14.6-8.9-29-14.9-43-4.1-9.4-15.5-13.1-24.3-7.9z"
    />
    <path
      className="st13"
      d="M1705.4 791.1c-69.8 0-124.8-13.3-163.6-39.6-22.6-15.4-40.3-35.6-52.5-60.2-13.8-27.9-21.2-62.3-21.9-102.3-1.3-77.6 26.8-135.4 83.5-171.8 33.5-21.5 76.3-35.2 127.2-40.8 12.1-1.3 23.9-2 35.2-2 10.2 0 20.1.6 29.6 1.6.1 0 .3 0 .5.3s.1.5.1.6L1676 580.4c-2.3 6.9-1.1 14.5 3.1 20.4 4.3 5.9 11.2 9.5 18.4 9.5 4 0 8-1.1 11.5-3.2l187.2-110.6c5.1 12.1 9.6 25.2 13.3 39 14.1 51.1-3.2 124.6-41.9 178.8-15.8 22.1-34.2 39.8-54.5 52.7-21.9 13.8-45.7 21.6-70.6 23.1-12.7.6-25.2 1-37.1 1z"
    />
    <path
      className="st9"
      d="M1952.6 398.8c-24.3-43.1-60.9-78.5-115.6-94.7-8.4-2.5-17.4 2.1-20.1 10.5l-66 198.6c-2.6 7.7 5.8 14.5 12.8 10.4l184.8-109.2c5.3-3.3 7.1-10.2 4.1-15.6z"
    />
    <g
      style={{
        opacity: 0.54,
      }}
    >
      <path
        className="st15"
        d="M1808.5 386.1c-.2 0-.3 0-.5-.1-.8-.3-1.2-1.1-.9-1.9 7.4-20.7 16.6-45.8 21.4-58.9 2.4-6.7 9.9-10.2 16.6-7.9 12.7 4.3 37 14.9 57.4 36.6.6.6.5 1.6-.1 2.1-.6.6-1.6.5-2.1-.1-20-21.3-43.8-31.6-56.2-35.8-5.2-1.8-10.9 1-12.8 6.1-4.8 13.1-14 38.2-21.4 58.9-.2.6-.7 1-1.4 1zM1797 419.3h-.3c-.8-.1-1.4-.9-1.2-1.7.1-.6.6-2.3 3.5-10.8.3-.8 1.1-1.2 1.9-.9.8.3 1.2 1.1.9 1.9-2.8 8.1-3.4 9.9-3.4 10.3-.1.7-.7 1.2-1.4 1.2z"
      />
    </g>
    <path
      className="st9"
      d="M1501.1 505.8c-.8 0-1.6-.3-2.2-.9l-44-41.7c-3.8-3.6-8.8-5.6-14.1-5.6H1291c-1.8 0-3.2-1.5-3.2-3.2s1.5-3.2 3.2-3.2h149.8c6.9 0 13.5 2.6 18.6 7.4l44 41.7c1.3 1.2 1.4 3.3.1 4.6-.7.5-1.5.9-2.4.9zM1417.8 437.5H1291c-1.8 0-3.2-1.5-3.2-3.2 0-1.8 1.5-3.2 3.2-3.2h126.8c1.8 0 3.2 1.5 3.2 3.2 0 1.7-1.4 3.2-3.2 3.2zM1397.1 417.4H1291c-1.8 0-3.2-1.5-3.2-3.2 0-1.8 1.5-3.2 3.2-3.2h106.2c1.8 0 3.2 1.5 3.2 3.2 0 1.7-1.5 3.2-3.3 3.2z"
    />
    <defs>
      <path
        id="SVGID_00000088113499336023896960000008391378801867001505_"
        d="m1677.3 585.2 53.7-204.3s-93.6-27.5-182.5 37l128.8 167.3z"
      />
    </defs>
    <clipPath id="SVGID_00000137101607077433934500000016774306793115542711_">
      <use
        xlinkHref="#SVGID_00000088113499336023896960000008391378801867001505_"
        style={{
          overflow: "visible",
        }}
      />
    </clipPath>
    <g
      style={{
        opacity: 0.19,
        clipPath:
          "url(#SVGID_00000137101607077433934500000016774306793115542711_)",
      }}
    >
      <path
        className="st12"
        d="M1514.4 505.8c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.8.6-1.2.6zM1537.4 518.6c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1L1538.6 518c-.3.4-.7.6-1.2.6zM1560.4 531.4c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.7.6-1.2.6zM1583.5 544.3c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.3-.8.6-1.2.6zM1606.5 557.1c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.7.6-1.2.6zM1629.5 569.9c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.2.4-.7.6-1.2.6zM1652.6 582.7c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.8.6-1.2.6z"
      />
    </g>
    <defs>
      <path
        id="SVGID_00000130638963162592434570000018079541050799492766_"
        d="M1690.9 602.4c3.8 2.8 147.1 150.5 147.1 150.5s-117.2 99.7-295-4.4l147.9-146.1z"
      />
    </defs>
    <clipPath id="SVGID_00000098184320016153653640000011168398128840054146_">
      <use
        xlinkHref="#SVGID_00000130638963162592434570000018079541050799492766_"
        style={{
          overflow: "visible",
        }}
      />
    </clipPath>
    <g
      style={{
        opacity: 0.19,
        clipPath:
          "url(#SVGID_00000098184320016153653640000011168398128840054146_)",
      }}
    >
      <path
        className="st15"
        d="M1543.1 769.2c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1L1703.2 547c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.8.6-1.2.6zM1566.1 782.1c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.8.6-1.2.6zM1589.1 794.9c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.7.6-1.2.6zM1612.2 807.7c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.8.6-1.2.6zM1635.2 820.5c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.7.6-1.2.6zM1658.2 833.3c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.7.6-1.2.6zM1700.1 868.8c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.2.4-.7.6-1.2.6zM1721.1 886.5c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1l161.3-219.8c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.3.4-.7.6-1.2.6zM1681.3 846.2c-.3 0-.6-.1-.9-.3-.7-.5-.8-1.4-.3-2.1L1841.3 624c.5-.7 1.4-.8 2.1-.3.7.5.8 1.4.3 2.1l-161.3 219.8c-.2.4-.7.6-1.1.6z"
      />
    </g>
    <path
      className="st10"
      d="M288.2 290.7c13-26.1 29.7-50.1 47.4-73.3 5.4-7.1 16.8-3.7 17.4 5.3 2.4 37.5 23.4 74.1 49.1 102.8 32.7 36.6 73.6 65.4 104.6 103.5 63.8 78.3 78.3 186 74.5 286.9-3.8 101-23.2 201.5-16.9 302.4 3 48.1 12.3 96.8 36.8 138.4 24 40.8 64.3 73.8 111 80.6 1.4.2 2.2 1.5 1.9 2.8-.2.8-.8 1.4-1.6 1.6-57.7 14-118.5-25.4-146-78.2-27.7-53.2-28.6-116.1-23.6-175.8 5-59.7 15.3-119.8 7.7-179.3-7.6-59.4-33.5-116.3-73.3-161-36.2-40.7-82.7-70.7-123.9-106.4s-78.7-80.5-87.1-134.3c-6.1-39.6 4.3-80.2 22-116z"
    />
    <linearGradient
      id="SVGID_00000126317710757765989320000018096368159006357430_"
      gradientUnits="userSpaceOnUse"
      x1={10844.71}
      y1={1703.288}
      x2={10840.742}
      y2={1713.626}
      gradientTransform="scale(-1 1) rotate(-6.16 901.27 107932.275)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#a737d5",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ef497a",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000126317710757765989320000018096368159006357430_)",
      }}
      d="m616.1 1259.8-.6-.5c-2.5-2.1-5.1-4.4-8-7.1l-1.4-1.2 1.8.4c3.1.7 6.2 1.2 9.3 1.6l.6.1-1.7 6.7zm-6.6-7.1c2.1 2 4.1 3.7 6 5.3l1.1-4.2c-2.4-.2-4.7-.6-7.1-1.1z"
    />
    <path
      className="st10"
      d="M108.9 504.3c-2.3-9.6 9.7-15.9 16.2-8.6 35 38.8 85.9 64.1 135.6 83.4 65 25.3 134.5 45.9 185.7 93.2 53.5 49.4 79.7 121.9 93.4 193.4 13.7 71.5 16.8 145 33.7 215.8 16 67.4 46.9 134.6 101.1 177.1-46.9-6.3-85.6-45.6-104.7-89.6-20.4-47-23.5-99.3-29.6-150.2-6.1-50.9-16.4-103.6-48-144-61.9-79.2-181-83.9-261.3-144.5-41.5-31.3-70.8-76.6-90.8-124.6-13.5-32.7-23-66.9-31.3-101.4z"
    />
    <path
      className="st13"
      d="m341.5 300.5.3 1.5c.2 1 .5 2.4.9 4.2.9 3.7 2.2 9.1 4.5 15.8.6 1.7 1.1 3.5 1.8 5.3.7 1.8 1.4 3.7 2.2 5.7.7 2 1.7 4 2.5 6.2.4 1.1.9 2.1 1.4 3.2.2.5.5 1.1.7 1.7.3.5.5 1.1.8 1.7 1 2.2 2.1 4.5 3.2 6.9.3.6.6 1.2.8 1.8l.9 1.8c.6 1.2 1.3 2.4 1.9 3.6.6 1.2 1.3 2.5 1.9 3.7.3.6.7 1.3 1 1.9.4.6.7 1.2 1.1 1.9 1.5 2.5 2.9 5.1 4.5 7.7.4.7.8 1.3 1.1 2 .4.7.8 1.3 1.2 1.9.8 1.3 1.7 2.6 2.5 3.9.9 1.3 1.7 2.7 2.6 4 .9 1.4 1.7 2.7 2.7 4 1.9 2.7 3.8 5.4 5.8 8.1l1.5 2.1 1.5 2.1c1.1 1.3 2.1 2.7 3.2 4.1 2.1 2.7 4.3 5.5 6.5 8.3 2.3 2.7 4.7 5.4 7.1 8.2l3.6 4.2c1.2 1.4 2.5 2.7 3.8 4l7.8 8.1c2.6 2.8 5.4 5.4 8.1 8.2 2.7 2.7 5.5 5.5 8.3 8.2 5.5 5.6 11.2 11.2 16.7 17 11.2 11.5 22.2 23.6 32.4 36.4 10.2 12.8 19.6 26.3 27.5 40.3 8 14 14.6 28.5 20 42.8 5.4 14.3 9.6 28.6 12.8 42.2.9 3.4 1.6 6.8 2.3 10.1.4 1.7.7 3.3 1.1 5 .4 1.6.6 3.3.9 4.9l1.8 9.6c.5 3.1 1 6.2 1.4 9.2.5 3 .9 6 1.2 8.9.4 2.9.7 5.7 1.1 8.5.6 5.5 1.1 10.8 1.7 15.7.4 4.9.8 9.6 1.1 13.9.3 4.3.5 8.2.7 11.8.1 1.8.2 3.5.3 5 .1 1.6.1 3.1.2 4.5.1 2.8.2 5.1.3 7 .2 3.8.2 5.8.2 5.8 0 .4-.3.8-.7.8-.4 0-.8-.3-.8-.7 0 0-.1-2-.3-5.8-.1-1.9-.2-4.2-.4-7-.1-1.4-.2-2.9-.3-4.4-.1-1.6-.2-3.3-.4-5-.3-3.5-.5-7.5-.9-11.7-.4-4.3-.9-8.9-1.3-13.8-.6-4.9-1.2-10.1-1.9-15.6-.4-2.7-.8-5.6-1.2-8.4-.4-2.9-.8-5.8-1.4-8.8-.5-3-1-6.1-1.6-9.2-.6-3.1-1.2-6.3-1.8-9.5-.3-1.6-.6-3.2-1-4.9-.4-1.6-.7-3.3-1.1-4.9-.7-3.3-1.5-6.7-2.4-10-3.3-13.5-7.6-27.6-13-41.8-5.4-14.2-12.1-28.4-20-42.2-7.9-13.8-17.2-27.1-27.3-39.7-10.2-12.6-21.1-24.6-32.2-36-5.5-5.7-11.2-11.3-16.7-16.9-2.8-2.8-5.6-5.5-8.3-8.2-2.7-2.7-5.5-5.4-8.1-8.2-2.6-2.8-5.3-5.5-7.9-8.2-1.3-1.4-2.6-2.7-3.8-4.1l-3.6-4.2c-2.4-2.8-4.8-5.6-7.1-8.3-2.2-2.8-4.4-5.7-6.6-8.4-1.1-1.4-2.1-2.8-3.2-4.1-.5-.7-1.1-1.4-1.5-2.1l-1.5-2.1c-2-2.8-3.9-5.6-5.8-8.3-1-1.3-1.8-2.7-2.7-4.1-.9-1.4-1.7-2.7-2.6-4.1-.8-1.4-1.7-2.7-2.5-4-.4-.7-.8-1.3-1.2-2-.4-.7-.8-1.3-1.1-2-1.5-2.7-3-5.3-4.4-7.9-.4-.6-.7-1.3-1.1-1.9-.3-.6-.6-1.3-1-1.9-.6-1.3-1.3-2.5-1.9-3.8-.6-1.2-1.2-2.5-1.9-3.7l-.9-1.8c-.3-.6-.5-1.2-.8-1.8-1.1-2.4-2.1-4.8-3.1-7-3.9-9.2-6.8-17.4-8.8-24.2-1.1-3.4-1.8-6.5-2.6-9.2-.3-1.3-.6-2.6-.9-3.8-.3-1.1-.5-2.2-.7-3.1-.4-1.9-.6-3.3-.8-4.3-.2-1-.2-1.5-.2-1.5 0-.4.3-.8.7-.8.7-.7 1.1-.4 1.2 0z"
    />
    <path
      className="st10"
      d="M193.7 1077.3c-3.9-2.2-4.2-7.8-.6-10.4 9.9-7.3 27.2-22.9 41.9-50.8 14.7-28 53.9-88.8 137.4-74 83.5 14.8 112.6 161.2 130.8 305.4s181.6 195 181.6 195l43.9 16.5s-155.4-23.7-215.8-131.2c-60.4-107.5-53.5-274.9-148.5-271.2-91.4 3.4-103.3 58.3-170.7 20.7z"
    />
    <path
      className="st9"
      d="M179.6 1241.8c-4.7 2-9.1-3.2-6.6-7.7 14.7-25.5 48.9-72.6 100.6-71.7 70.9 1.2 123.4 32.9 192.4 147.3 67.1 111.1 218.5 148.5 259.3 149.1 1.9 0 3.5 1.4 3.8 3.3.4 2.5-1.5 4.7-4 4.6-28.7-1.1-179.4-9-255.9-48.6-80.1-41.4-199.1-214-289.6-176.3z"
    />
    <linearGradient
      id="SVGID_00000170975768036075598310000014941207333317692586_"
      gradientUnits="userSpaceOnUse"
      x1={220.453}
      y1={1330.439}
      x2={712.362}
      y2={1330.439}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000170975768036075598310000014941207333317692586_)",
      }}
      d="M220.9 1206.7s.5-.3 1.6-.7c1-.5 2.6-1.1 4.6-1.9 4.1-1.5 10.2-3.5 18.1-5 8-1.5 17.8-2.7 29.1-2.4 11.3.3 24.1 2.1 37.4 6.2 13.3 4.1 27.2 10.4 40.5 19.2 13.3 8.8 26.2 19.8 38.1 32.4l4.5 4.8c1.5 1.6 2.9 3.3 4.3 5 1.4 1.7 2.9 3.4 4.3 5.1 1.4 1.7 2.7 3.5 4.1 5.2 5.6 7 10.7 14.5 15.8 21.9 2.6 3.7 5.1 7.5 7.7 11.3 2.6 3.7 5.3 7.4 7.9 11.1 2.7 3.7 5.5 7.3 8.2 11 2.8 3.6 5.7 7.2 8.5 10.8 11.5 14.2 23.9 27.8 37.1 40 1.7 1.5 3.3 3.1 5 4.6 1.7 1.5 3.4 2.9 5.1 4.4l2.5 2.2 2.6 2.1c1.7 1.4 3.5 2.8 5.2 4.1 7.1 5.3 14.1 10.4 21.5 14.8 3.6 2.3 7.3 4.4 11 6.5 1.8 1.1 3.7 2 5.5 2.9 1.9.9 3.7 2 5.5 2.8 3.7 1.8 7.4 3.5 11.1 5.1 1.9.8 3.7 1.6 5.5 2.3 1.9.7 3.7 1.4 5.5 2.1 14.7 5.6 29.1 9.6 42.5 12.8 13.4 3.2 25.8 5.6 36.8 7.5 11 1.9 20.7 3.5 28.6 4.7 15.9 2.4 25 3.8 25 3.8.2 0 .4.3.4.5s-.3.4-.5.4c0 0-9.1-1.2-25.1-3.4-8-1.1-17.7-2.5-28.7-4.3-11.1-1.8-23.6-4-37.1-7-13.5-3.1-28-6.9-42.9-12.4-1.9-.7-3.7-1.4-5.6-2.1-1.9-.7-3.7-1.5-5.6-2.3-3.8-1.5-7.5-3.3-11.3-5-1.9-.8-3.7-1.9-5.6-2.8-1.9-1-3.8-1.9-5.6-2.9-3.7-2.1-7.5-4.1-11.2-6.4-7.5-4.4-14.7-9.5-21.8-14.9-1.8-1.4-3.5-2.8-5.3-4.2l-2.6-2.1-2.6-2.2c-1.7-1.5-3.4-2.9-5.2-4.4-1.7-1.5-3.4-3.1-5-4.6-13.4-12.3-26-25.9-37.6-40.2-2.9-3.6-5.8-7.2-8.6-10.8-2.8-3.7-5.6-7.4-8.3-11-2.7-3.7-5.4-7.5-8-11.2-2.6-3.8-5.2-7.5-7.7-11.2-5.2-7.4-10.1-14.8-15.6-21.7-1.4-1.7-2.6-3.5-4.1-5.2-1.4-1.7-2.8-3.3-4.2-5-1.4-1.7-2.8-3.3-4.2-4.9-1.5-1.6-2.9-3.1-4.4-4.7-11.7-12.5-24.3-23.3-37.4-32-13-8.8-26.5-15.1-39.5-19.3-3.2-1.1-6.5-1.9-9.6-2.8l-2.4-.6c-.8-.2-1.6-.3-2.4-.5-1.6-.3-3.1-.7-4.6-.9-3.1-.4-6.1-1-9-1.2-1.5-.1-2.9-.3-4.3-.4-1.4-.1-2.8-.1-4.2-.2-11.1-.6-20.8.4-28.7 1.8-7.9 1.4-13.9 3.1-18 4.5-2 .7-3.5 1.3-4.6 1.7-1 .4-1.5.7-1.5.7-.4.2-.8 0-1-.4 0-.5.1-1 .5-1.1z"
    />
    <path
      d="M200 1068.9s1.5 0 4.5-.3c2.9-.3 7.2-1.2 12.4-2.9s11.3-4.5 17.5-8.9c3.1-2.2 6.2-4.8 9.3-7.8 3-3 6-6.4 8.8-10.1 2.8-3.8 5.3-8 7.6-12.4.6-1.1 1.2-2.3 1.7-3.4.5-1.2 1.1-2.4 1.6-3.5.6-1.3 1.1-2.4 1.7-3.7.3-.6.6-1.3.9-1.9.3-.6.7-1.2 1-1.8 5.3-9.8 12.5-19.1 21.1-27.6 8.6-8.5 18.6-16.2 30.1-21.8 5.7-2.8 11.8-5.1 18.2-6.6 6.3-1.5 12.9-2.2 19.5-1.9 6.5.3 13.1 1.5 19.2 3.7 6.2 2.2 12 5.1 17.3 8.6 10.7 7.1 19.5 16.2 26.9 25.7 7.4 9.5 13.5 19.5 18.6 29.2 5.1 9.7 9.4 19.1 13 28 .9 2.2 1.7 4.4 2.6 6.5.4 1.1.8 2.1 1.2 3.2.4 1 .8 2.1 1.1 3.1.7 2 1.5 4 2.1 6 .7 2 1.3 3.8 1.9 5.7 1.3 3.7 2.3 7.1 3.3 10.3 1 3.2 1.9 6.1 2.7 8.8 1.6 5.3 2.7 9.6 3.4 12.4.8 2.9 1.2 4.4 1.2 4.4.1.3-.1.7-.4.7-.3.1-.6-.1-.7-.4 0 0-.5-1.5-1.3-4.4-.9-2.8-2.1-7-3.9-12.3-.8-2.6-1.8-5.6-2.9-8.7-1.1-3.2-2.2-6.6-3.6-10.2-.7-1.8-1.4-3.7-2.1-5.6-.7-1.9-1.5-3.9-2.3-5.9-.4-1-.8-2-1.2-3.1-.4-1-.9-2.1-1.3-3.1-.9-2.1-1.7-4.3-2.7-6.4-3.7-8.7-8.1-18-13.4-27.5-1.3-2.4-2.7-4.7-4.1-7.1-1.4-2.4-2.9-4.7-4.5-7.1-1.6-2.3-3.1-4.8-4.9-7.1-.8-1.2-1.7-2.3-2.6-3.5-.9-1.1-1.8-2.3-2.7-3.5-3.7-4.6-7.6-9.1-12-13.2-4.3-4.1-9.1-8-14.2-11.3-5.1-3.3-10.6-6.1-16.3-8.1-5.8-2-11.8-3.1-18-3.4-12.3-.6-24.5 2.6-35.5 7.9-11 5.4-20.7 12.7-29.1 20.8-4.2 4.1-8.1 8.4-11.5 12.8-3.5 4.4-6.6 9-9.3 13.6-.3.6-.6 1.2-1 1.7-.3.6-.6 1.2-.9 1.7-.6 1.1-1.2 2.4-1.7 3.6-.6 1.2-1.1 2.4-1.7 3.6-.6 1.2-1.2 2.3-1.8 3.5-2.5 4.6-5.2 8.8-8.1 12.7-2.9 3.8-6.1 7.3-9.3 10.3-3.2 3-6.5 5.6-9.8 7.7-6.6 4.3-13 7-18.3 8.6-5.4 1.6-9.8 2.2-12.8 2.4-3 .2-4.6.1-4.6.1-.3 0-.5-.3-.5-.5.1-.1.4-.3.6-.3z"
      style={{
        opacity: 0.71,
        fill: "#fff",
      }}
    />
    <linearGradient
      id="SVGID_00000013178077217061197520000000303523320298410162_"
      gradientUnits="userSpaceOnUse"
      x1={874.328}
      y1={1531.344}
      x2={860.095}
      y2={1249.537}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013178077217061197520000000303523320298410162_)",
      }}
      d="m755.4 1211.4-23.7 212H1006l-35.7-212z"
    />
    <linearGradient
      id="SVGID_00000112600288908752318190000010483995446399938239_"
      gradientUnits="userSpaceOnUse"
      x1={875.213}
      y1={1425.007}
      x2={744.272}
      y2={1712.508}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000112600288908752318190000010483995446399938239_)",
      }}
      d="M1065.1 1466.8H663.7c-10.9 0-19.1-7.8-17-16.1l5.2-20.4c1.5-6.1 8.3-10.6 16.3-10.9l387-12.1c8.4-.3 15.8 4.2 17.6 10.5l9.3 32.4c2.3 8.6-5.9 16.6-17 16.6z"
    />
    <linearGradient
      id="SVGID_00000146487050429599564140000007662587035119999679_"
      gradientUnits="userSpaceOnUse"
      x1={411.338}
      y1={948.37}
      x2={1342.591}
      y2={948.37}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000146487050429599564140000007662587035119999679_)",
      }}
      d="M463.7 635.5c-29.1.7-52.3 24.4-52.3 53.5v485.5c0 39.9 31.8 72.6 71.8 73.6 177.3 4.6 634.1 15.7 802.9 13.2 29-.4 52.5-23.6 53.4-52.7 3.3-112.8 8.5-384-11-510-4.1-26.5-26.5-46.3-53.3-47.2-148.7-4.6-642.8-19.6-811.5-15.9z"
    />
    <path
      className="st9"
      d="M475.5 653.8c-18.5-.4-33.7 14.4-33.7 32.9V1148c0 23.3 18.7 42.3 42 42.7l777.9 11.6c23.1.3 42.1-18.3 42.2-41.4l1.6-457.2c.1-16.5-13.1-30.1-29.6-30.5l-800.4-19.4z"
    />
    <path
      className="st12"
      d="m1311 1220.9-869.2-17.6c-.6 0-1-.5-1-1s.5-1 1-1l869.2 17.6c.6 0 1 .5 1 1 0 .6-.5 1-1 1zM515.3 1191.2l697.1 11.2s.7-744.2-8.7-890.9c-.7-10.4-8.9-18.7-19.3-19.5-89.7-6.8-497.5-36.1-673.7-22.1-10.6.8-18.8 9.8-18.5 20.5l23.1 900.8z"
    />
    <path
      className="st10"
      d="m531.1 1191.4 649 10.4-13.2-839c-.2-11.1-8-20.6-18.9-22.8-165.1-33.9-538.6-26.9-622.6-24.8-9.4.2-16.8 8-16.6 17.4l22.3 858.8z"
    />
    <path
      className="st0"
      d="M1067.8 303.3c0 5.3-5.4 9-10.6 9s-10.6-4.3-10.6-9.5c0-5.3 5.3-9.5 10.6-9.5s10.6 4.8 10.6 10zM1097.3 306.6c0 5.3-5.4 9-10.6 9-5.3 0-10.6-4.3-10.6-9.5 0-5.3 5.3-9.5 10.6-9.5 5.2 0 10.6 4.8 10.6 10zM1128.9 309.8c0 5.3-5.4 9-10.6 9s-10.6-4.3-10.6-9.5c0-5.3 5.3-9.5 10.6-9.5s10.6 4.8 10.6 10z"
    />
    <path
      className="st12"
      d="M879.8 1424.7c-.5 0-1-.4-1-1s.4-1 1-1l16.6-.2c.5 0 1 .4 1 1s-.4 1-1 1l-16.6.2zM661.6 1455.3h-.2c-.5-.1-.9-.6-.8-1.1l2.4-14.8c1.2-7.8 7.9-13.6 15.8-13.7l175.9-2.6c.5 0 1 .4 1 1s-.4 1-1 1l-175.9 2.6c-6.9.1-12.8 5.1-13.9 12l-2.4 14.8c0 .4-.5.8-.9.8zM841.7 563.8c-14 .1-25.2 11.4-25.2 25.4v104.1c0 11.4 9.2 20.6 20.6 20.6l284.4.4c15.3 0 27.8-12.4 27.8-27.7v-87.7c0-13.7-10.7-25-24.4-25.6-60-2.9-214.4-9.8-283.2-9.5zM1108.4 409.3c0 5.6-4.7 10.2-10.4 10.2l-499.6 1.8c-14.2.1-25.9-7.3-25.8-16.3.1-9.1 11.9-16.2 26.1-15.9l499.5 9.9c5.7 0 10.2 4.7 10.2 10.3zM1108.4 472.7c0 5.6-4.7 10.2-10.4 10.2l-499.6 1.8c-14.2.1-25.9-7.3-25.8-16.3.1-9.1 11.9-16.2 26.1-15.9l499.5 9.9c5.7 0 10.2 4.7 10.2 10.3zM1108.4 789.8c0 5.6-4.7 10.2-10.4 10.2l-499.6 1.8c-14.2 0-25.9-7.3-25.8-16.3.1-9.1 11.9-16.2 26.1-15.9l499.5 9.9c5.7 0 10.2 4.7 10.2 10.3zM1108.4 853.2c0 5.6-4.7 10.2-10.4 10.2l-499.6 1.8c-14.2.1-25.9-7.3-25.8-16.3.1-9.1 11.9-16.2 26.1-15.9l499.5 9.9c5.7 0 10.2 4.7 10.2 10.3zM1108.4 973.5c0 5.6-4.7 10.2-10.4 10.2l-499.6 1.8c-14.2.1-25.9-7.3-25.8-16.3.1-9.1 11.9-16.2 26.1-15.9l499.5 9.9c5.7 0 10.2 4.7 10.2 10.3zM1108.4 1036.9c0 5.6-4.7 10.2-10.4 10.2l-499.6 1.8c-14.2.1-25.9-7.3-25.8-16.3.1-9.1 11.9-16.2 26.1-15.9l499.5 9.9c5.7 0 10.2 4.7 10.2 10.3zM800 582.7c0 7.4-6 13.4-13.5 13.3l-194.6-1.9c-8.2-.1-15-6.5-15-14.4s6.7-14.1 15-14l194.6 3.2c7.5.3 13.5 6.4 13.5 13.8zM800 630.4c0 7.4-6 13.5-13.5 13.5l-194.6.5c-8.2 0-15-6.3-15-14.2 0-7.9 6.7-14.2 15-14.1l194.6.9c7.5-.1 13.5 5.9 13.5 13.4zM800 686.3c0 7.4-6 13.6-13.5 13.7l-194.6 3.2c-8.2.1-15-6.1-15-14s6.7-14.3 15-14.4l194.6-1.9c7.5 0 13.5 6 13.5 13.4z"
    />
    <linearGradient
      id="SVGID_00000048487896813167259870000002522885344264404609_"
      gradientUnits="userSpaceOnUse"
      x1={1359.177}
      y1={-497.682}
      x2={1371.177}
      y2={-9.682}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000048487896813167259870000002522885344264404609_)",
      }}
      d="M983.3 708h828v693h-828z"
    />
    <linearGradient
      id="SVGID_00000075884514345464528960000013613902152722357920_"
      gradientUnits="userSpaceOnUse"
      x1={1262.362}
      y1={975.032}
      x2={638.362}
      y2={2207.032}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000075884514345464528960000013613902152722357920_)",
      }}
      d="m1840.3 615.7-889.1 5.6c-12.1.1-21.8 8.9-21.8 19.7v132.7c0 10.4 9.3 18.9 20.9 19l890 5.6c13.2.1 24.1-8.9 24.1-20V635.7c-.1-11.2-10.9-20.1-24.1-20z"
    />
    <linearGradient
      id="SVGID_00000093178043113210795420000012036957733279652756_"
      gradientUnits="userSpaceOnUse"
      x1={1810.275}
      y1={-377.214}
      x2={1570.274}
      y2={210.786}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093178043113210795420000012036957733279652756_)",
      }}
      d="m1840.1 615.7-889.9 5.6c-11.6.1-21 8.6-21 19l934.8-4.6c0-11.2-10.7-20.1-23.9-20z"
    />
    <linearGradient
      id="SVGID_00000046305580369164816240000000472331378922717574_"
      gradientUnits="userSpaceOnUse"
      x1={1859.734}
      y1={-357.027}
      x2={1619.734}
      y2={230.973}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000046305580369164816240000000472331378922717574_)",
      }}
      d="m950.2 792.6 889.9 5.6c13.2.1 23.9-8.9 23.9-20l-934.8-4.6c0 10.5 9.4 19 21 19z"
    />
    <linearGradient
      id="SVGID_00000093869129392380994020000017810723914977839771_"
      gradientUnits="userSpaceOnUse"
      x1={1349.796}
      y1={1019.32}
      x2={725.798}
      y2={2251.318}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093869129392380994020000017810723914977839771_)",
      }}
      d="m1841 836.9-889.8-1.8c-12.4 0-22.7 9-22.8 20.1l-1.7 137c-.1 10.8 9.5 19.6 21.5 19.7l892.8 7.8c12.8.1 23.4-8.8 23.4-20V857.1c-.1-11.1-10.6-20.2-23.4-20.2z"
    />
    <linearGradient
      id="SVGID_00000079466577964651801610000012881540962912120968_"
      gradientUnits="userSpaceOnUse"
      x1={1886.109}
      y1={-346.26}
      x2={1646.109}
      y2={241.739}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000079466577964651801610000012881540962912120968_)",
      }}
      d="m1840.8 836.9-890.6-1.8c-12 0-21.8 8.6-21.9 19.4l935.7 2.6c0-11.1-10.4-20.2-23.2-20.2z"
    />
    <linearGradient
      id="SVGID_00000108279344195737516500000000518420620088108203_"
      gradientUnits="userSpaceOnUse"
      x1={1935.606}
      y1={-326.06}
      x2={1695.605}
      y2={261.941}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000108279344195737516500000000518420620088108203_)",
      }}
      d="m948.1 1011.8 892.6 7.8c12.8.1 23.3-8.8 23.3-20l-937.4-7.5c-.1 10.8 9.5 19.6 21.5 19.7z"
    />
    <linearGradient
      id="SVGID_00000051359641929178050110000014972147711226139292_"
      gradientUnits="userSpaceOnUse"
      x1={1454.437}
      y1={1072.32}
      x2={830.437}
      y2={2304.319}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000051359641929178050110000014972147711226139292_)",
      }}
      d="M1858.6 1061H969.5c-12.9 0-23.1 9.1-23.1 20.7v141.8c0 11.1 9.9 20.5 22.3 20.5h890c12.4 0 22.8-9.4 22.8-20.5v-142.6c-.2-11.1-10.5-19.9-22.9-19.9z"
    />
    <linearGradient
      id="SVGID_00000170966609045050464840000013776254916624637358_"
      gradientUnits="userSpaceOnUse"
      x1={1980.559}
      y1={-314.242}
      x2={1740.559}
      y2={273.757}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000170966609045050464840000013776254916624637358_)",
      }}
      d="M1857.6 1059h-890c-12.4 0-22.4 9-22.4 20H1880c0-11-10-20-22.4-20z"
    />
    <linearGradient
      id="SVGID_00000011019430772438780770000017476614567557294466_"
      gradientUnits="userSpaceOnUse"
      x1={2031.567}
      y1={-293.421}
      x2={1791.566}
      y2={294.581}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000011019430772438780770000017476614567557294466_)",
      }}
      d="M967.6 1242h890c12.4 0 22.4-9 22.4-21H945.2c0 12 10 21 22.4 21z"
    />
    <linearGradient
      id="SVGID_00000037663880299856840010000007901503183515842982_"
      gradientUnits="userSpaceOnUse"
      x1={1529.502}
      y1={1110.34}
      x2={905.501}
      y2={2342.341}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000037663880299856840010000007901503183515842982_)",
      }}
      d="m1842.5 1284-889.5-3.5c-13.1-.1-23.6 9.3-23.6 20.8v141.8c0 11.1 10.2 20.1 22.8 20.1l890 .3c12.2 0 22-8.8 22.1-19.8l.4-140c-.1-10.8-10-19.7-22.2-19.7z"
    />
    <linearGradient
      id="SVGID_00000032632253491131621480000016564097720073038506_"
      gradientUnits="userSpaceOnUse"
      x1={2042.86}
      y1={-282.28}
      x2={1802.86}
      y2={305.72}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000032632253491131621480000016564097720073038506_)",
      }}
      d="m1842.5 1284-890.5-3.5c-12.6 0-22.8 8.9-22.8 20.1l935.3 3.3c0-11-9.8-19.9-22-19.9z"
    />
    <linearGradient
      id="SVGID_00000026852336736232080070000004927695756129394311_"
      gradientUnits="userSpaceOnUse"
      x1={2093.352}
      y1={-261.672}
      x2={1853.352}
      y2={326.327}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000026852336736232080070000004927695756129394311_)",
      }}
      d="m952 1463.3 890 .3c12.2 0 22.1-8.8 22.1-19.8l-934.9-.7c0 11.1 10.2 20.2 22.8 20.2z"
    />
    <linearGradient
      id="SVGID_00000003064075769499231220000011105544221199085445_"
      gradientUnits="userSpaceOnUse"
      x1={1827.262}
      y1={1048.811}
      x2={1875.26}
      y2={1254.3}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003064075769499231220000011105544221199085445_)",
      }}
      d="M1764.8 1189.4c.2-.1 93.3-163.1 105.9-178.5 2.1-2.6 5.4-3.9 8.7-3.5l26 3.1 30.5 66.1-50.9-29.6c5 34.8-60.3 86.5-82.7 105.4-2.3 1.9-2.5 5.3-.4 7.5l8.9 9.4c-14.7 14.9-31.6 24.4-50.8 28.9l4.8-8.8z"
    />
    <linearGradient
      id="SVGID_00000178194054831631881670000018199836088889388711_"
      gradientUnits="userSpaceOnUse"
      x1={-7817.832}
      y1={1872.748}
      x2={-7807.333}
      y2={1998.742}
      gradientTransform="rotate(-26.182 9535.99 -23630.316)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178194054831631881670000018199836088889388711_)",
      }}
      d="M1805.6 1164.2s5.7 1.8 7.6 6.9c.9 2.4-.1 5.2-2.2 6.7-9.4 6.7-40.4 28.5-54.7 32.7-1.2.3-2.3-.7-2-1.9.7-3.3 3.1-10 10.8-19.7l-.7 1.4c-.9 1.8 1 3.6 2.8 2.6 9.5-5.3 29-17.1 38.4-28.7z"
    />
    <linearGradient
      id="SVGID_00000069363450010221448650000017124493830426906527_"
      gradientUnits="userSpaceOnUse"
      x1={1891.118}
      y1={789.438}
      x2={1880.619}
      y2={993.428}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000069363450010221448650000017124493830426906527_)",
      }}
      d="M1801 1229.5c.2-.1 14.1-33.8 14.3-33.9 12.8-78 44.1-144.8 53.3-162.4 1.6-3 4.5-4.9 7.8-5.2l26.1-2.2 43.3 58.5-55.8-18.7c12 33.1-41.6 97-59.7 120-1.8 2.3-1.3 5.7 1.1 7.4l10.7 7.4c-11.4 17.6-26 30.3-43.9 38.5l2.8-9.4z"
    />
    <linearGradient
      id="SVGID_00000106120286983131322210000016641342307637442697_"
      gradientUnits="userSpaceOnUse"
      x1={-6056.633}
      y1={2223.834}
      x2={-6046.134}
      y2={2349.828}
      gradientTransform="rotate(-37.859 9550.001 -15516.85)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106120286983131322210000016641342307637442697_)",
      }}
      d="M1836 1196.5s6 .7 8.9 5.2c1.4 2.2 1 5.1-.8 7-7.8 8.5-33.8 36.1-47 43.1-1.1.6-2.4-.2-2.4-1.5 0-3.4 1-10.4 6.6-21.5l-.4 1.5c-.5 1.9 1.7 3.3 3.2 2 8.3-7 25-22.6 31.9-35.8z"
    />
    <linearGradient
      id="SVGID_00000147911343392526877520000002811151072097739948_"
      gradientUnits="userSpaceOnUse"
      x1={9195.561}
      y1={1620.321}
      x2={9188.063}
      y2={1668.318}
      gradientTransform="matrix(-1 0 0 1 11240.638 0)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe7062",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ff928e",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147911343392526877520000002811151072097739948_)",
      }}
      d="M2024.6 1013.5s23.6 35.1 25.5 51.1c1.9 16-6.5 21.5-31.2 23.6-73.5 6.1-109.7-15.9-109.7-15.9-5-32.1-8.6-40.2-50.6-57.6 0 0 53.1 4.2 63.8.1 10.7-4.3 102.2-1.3 102.2-1.3z"
    />
    <linearGradient
      id="SVGID_00000047768522024511147980000016318109245454002358_"
      gradientUnits="userSpaceOnUse"
      x1={-10810.165}
      y1={-1697.434}
      x2={-10776.512}
      y2={-1613.014}
      gradientTransform="rotate(-32.627 -212.256 -22158.299)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000047768522024511147980000016318109245454002358_)",
      }}
      d="M1936 815.7s12.5-1.5 17.7 2.7c4.2 3.4 15.1-2.8 21.5 4.9 3.3 4 8.8 5.4 13.5 3.3 11.8-5.3 32.1-10.3 46.7 6.7 11.2 13 7.4 23.1.9 29.9-4.7 5-5 12.8-.2 17.8 4.6 4.7 7 12.1.7 23.1-14 24.7-59.1.6-59.1.6l-46.3-62.8 4.6-26.2z"
    />
    <linearGradient
      id="SVGID_00000097465333862155416290000001272796800994664598_"
      gradientUnits="userSpaceOnUse"
      x1={17102.41}
      y1={950.457}
      x2={16756.336}
      y2={1284.282}
      gradientTransform="matrix(-1 0 0 1 19072.338 0)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe7062",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ff928e",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000097465333862155416290000001272796800994664598_)",
      }}
      d="M1960.8 1008.9s-27.5-26.2-41-43.5c-7.3-9.4-9.6-21.7-6.2-33.1 6.2-20.8 17.1-42.3 18.1-45.7 1.5-5.1 32.3-4.9 32.3-4.9s60.6 39.3 84.4 106l-26.7 8.3s-15.8-26.6-31.5-43.4c0 0 27.1 35.7 28 50.4l-57.4 5.9z"
    />
    <linearGradient
      id="SVGID_00000008123000326778681910000014957155752480535486_"
      gradientUnits="userSpaceOnUse"
      x1={2088.168}
      y1={880.387}
      x2={2047.67}
      y2={931.384}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008123000326778681910000014957155752480535486_)",
      }}
      d="m1908.4 1019.2 20.6-22.5 23.8 6.4s27.8 4.3 43.7 0l15.9-4.3 35.9-11.2 5.6 16c1.4 4.1 0 8.5-3.5 11-3.1 2.2-6.8 4.6-9.1 5.7-4.7 2.1-109.1.7-109.1.7l-23.8-1.8z"
    />
    <linearGradient
      id="SVGID_00000065045520108127544690000007827877007809218959_"
      gradientUnits="userSpaceOnUse"
      x1={1943.351}
      y1={857.954}
      x2={1962.018}
      y2={927.954}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065045520108127544690000007827877007809218959_)",
      }}
      d="m1948.6 842.7 14.9 40.4c-1.4 8.4-22.5 8.6-25.8 3.6-.3-.5-.5-1.1-.6-1.7l-6.7-31.6c-.5-2.5.7-5.1 2.9-6.3l8.2-4.4c3.2-1.6 6.1-3.4 7.1 0z"
    />
    <linearGradient
      id="SVGID_00000175314039536871948140000012849888960198490776_"
      gradientUnits="userSpaceOnUse"
      x1={-2688.687}
      y1={7769.398}
      x2={-2715.354}
      y2={7730.065}
      gradientTransform="rotate(-43.83 1165.707 -16500.158)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000175314039536871948140000012849888960198490776_)",
      }}
      d="M1911.1 828s-5.2 12.1 1 30.6c6.2 18.4 16.3 20 22.7 15.4 6.4-4.6 14.6-12.7 15.6-29.4 1-16.8-32.1-32-39.3-16.6z"
    />
    <linearGradient
      id="SVGID_00000003094252887692436720000008192127531947819148_"
      gradientUnits="userSpaceOnUse"
      x1={-10303.685}
      y1={-3520.751}
      x2={-10270.03}
      y2={-3436.328}
      gradientTransform="rotate(-43.83 1165.707 -16500.158)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003094252887692436720000008192127531947819148_)",
      }}
      d="M1938 843.5s-11.2-24.9-27.9-9.3l-1.3 6.4s-15.9-4.5-10.7-18.9c5.2-14.4 20.7-21.5 37.7-12.2 17 9.3 26.3 17.6 25.5 30.7-.9 13.1-10.7 8.7-10.7 8.7s-1.9-9.6-6.5-11.3c-4.6-1.7-4.5 5.6-4.5 5.6l-1.6.3z"
    />
    <linearGradient
      id="SVGID_00000078747155266363751570000002820332286826741163_"
      gradientUnits="userSpaceOnUse"
      x1={-2677.21}
      y1={7761.627}
      x2={-2703.876}
      y2={7722.293}
      gradientTransform="rotate(-43.83 1165.707 -16500.158)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000078747155266363751570000002820332286826741163_)",
      }}
      d="M1941.8 843.8s-5.8-12.8 2.3-13.3 4.8 12.3 3.2 17l-5.5-3.7z"
    />
    <linearGradient
      id="SVGID_00000174589501555065899720000010781115053743930799_"
      gradientUnits="userSpaceOnUse"
      x1={-9969.191}
      y1={597.889}
      x2={-10045.694}
      y2={618.856}
      gradientTransform="rotate(-2.807 4102.234 -241206.948)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000174589501555065899720000010781115053743930799_)",
      }}
      d="M1976.7 1028.1h-.2l-95-.1c-2.3 0-4.2-1.9-4.2-4.3 0-2.3 1.9-4.3 4.3-4.2l95 .1c2.3 0 4.2 1.9 4.2 4.3 0 2.2-1.8 4.1-4.1 4.2z"
    />
    <linearGradient
      id="SVGID_00000096777810312478338140000003208936711375887770_"
      gradientUnits="userSpaceOnUse"
      x1={-10022.564}
      y1={953.43}
      x2={-10076.846}
      y2={1010.803}
      gradientTransform="translate(11911.875)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000096777810312478338140000003208936711375887770_)",
      }}
      d="M1796.2 941.9h79.1c5.8 0 11.1 3.4 13.6 8.6l36.6 77.5h-98.3c-3.8 0-7.1-2.3-8.5-5.8l-28.3-71.7c-1.7-4.1 1.4-8.6 5.8-8.6z"
    />
    <linearGradient
      id="SVGID_00000101094604895941511440000011703045979853291958_"
      gradientUnits="userSpaceOnUse"
      x1={-10055.38}
      y1={967.715}
      x2={-10080.01}
      y2={1004.805}
      gradientTransform="translate(11911.875)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000101094604895941511440000011703045979853291958_)",
      }}
      d="M1851.9 981.6c1.7 5.3.4 10.5-2.8 11.5-3.3 1.1-7.3-2.4-9-7.7-1.7-5.3-.4-10.5 2.8-11.5 3.3-1.1 7.3 2.4 9 7.7z"
    />
    <linearGradient
      id="SVGID_00000093144993196685969540000008559149493592898181_"
      gradientUnits="userSpaceOnUse"
      x1={1703.056}
      y1={754.753}
      x2={1841.672}
      y2={754.753}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe7062",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ff928e",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093144993196685969540000008559149493592898181_)",
      }}
      d="M1709.3 732.9c10.2-2.6 64.9-16.9 66-28.9 1-12.1 30.6-17.3 32.6-13.9 5.3 9.1 39 91.4 33 97.6-6 6.1-104.9 37.3-112.3 32.2-7.4-5.1-38.7-82.1-19.3-87z"
    />
    <linearGradient
      id="SVGID_00000070818094876549036520000016701894801226562227_"
      gradientUnits="userSpaceOnUse"
      x1={1702.684}
      y1={571.481}
      x2={1762.898}
      y2={742.088}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070818094876549036520000016701894801226562227_)",
      }}
      d="M1731.8 822.4c-2 0-3.5-.2-4.3-.8-6.6-4.5-28.9-55.1-26.3-78.5.7-6.4 3.2-10.4 7.3-12.1l4.2-1.7c13.4-5.3 38.3-15.2 60-22.3.4-1.1.5-4 .6-5.9.3-5 .5-8.3 2.9-9 26.3-8 31.6-6 33.3-3 2.8 4.9 12.8 28.4 20.9 50.2 16.6 44.8 13.3 48.3 11.8 49.7-3.9 4-35.9 14.7-56.5 20.8-19.8 6.1-43.7 12.6-53.9 12.6zm-21.7-87.7c-2.7 1.1-4.3 4-4.8 8.8-2.5 22.6 19.9 71.6 24.5 74.7 2.6 1.3 21.1-2 55.6-12.4 29.7-8.9 52-17.4 54.2-19.6.2-.4 2.1-5.7-13.1-46.6-8.6-23.1-17.9-44.5-20.2-48.6-.1-.1-2.2-3.2-28.2 4.7-.3 1.1-.5 3.8-.6 5.6-.3 4.9-.5 8.5-2.9 9.3-21.7 7.1-46.8 17-60.2 22.4l-4.3 1.7z"
    />
    <linearGradient
      id="SVGID_00000125601633849869611820000002554547944934295442_"
      gradientUnits="userSpaceOnUse"
      x1={1666.011}
      y1={758.244}
      x2={1868.11}
      y2={758.244}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000125601633849869611820000002554547944934295442_)",
      }}
      d="M1722.3 858c-7.5 0-9.9-1.8-11-3.4-9.8-14-55.3-128.8-43.2-151.4l.4-.7.7-.3c.4-.1 37.1-12.7 74.9-24.3 77.2-23.6 83.2-19.9 85.5-18.5 8.7 5.4 21.8 55.6 25.6 70.9 7.7 30.9 14.9 67.8 12.5 76-2.3 8-32.8 20.4-50.8 27.1-28.4 10.6-59.6 19.6-79.5 22.9-6.6 1.3-11.4 1.7-15.1 1.7zm-51.1-152.2c-9.3 21.5 33.2 132.1 43.3 146.5.4.6 3.4 3.4 22.1.2 45.6-7.6 124.5-38.2 127.1-47.2 1.8-6.2-3.6-38-12.5-73.9-10.9-43.7-20-66.1-23.8-68.5-2-1.2-14.1-1.9-82.2 18.9-34.6 10.6-68.4 22.1-74 24z"
    />
    <linearGradient
      id="SVGID_00000047744526362864709080000000208933023782918297_"
      gradientUnits="userSpaceOnUse"
      x1={1662.74}
      y1={585.578}
      x2={1722.955}
      y2={756.186}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000047744526362864709080000000208933023782918297_)",
      }}
      d="M1715.4 749.4c-.9 0-1.7-.6-1.9-1.4-.6-1.9-.3-5.6 8.2-8.1 1.1-.3 2.2.3 2.5 1.4.3 1.1-.3 2.2-1.4 2.5-4.5 1.3-5.6 2.8-5.5 3.1.3 1.1-.3 2.2-1.4 2.5-.1-.1-.3 0-.5 0z"
    />
    <linearGradient
      id="SVGID_00000181060348043863017710000012291733806288937610_"
      gradientUnits="userSpaceOnUse"
      x1={1698.871}
      y1={572.828}
      x2={1759.085}
      y2={743.434}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000181060348043863017710000012291733806288937610_)",
      }}
      d="M1736.4 738.2c-.8 0-1.5-.4-1.8-1.1-.5-1 0-2.2 1-2.7.8-.4 20.4-9.6 36.6-12.2 1.1-.2 2.1.6 2.3 1.7.2 1.1-.6 2.1-1.7 2.3-15.6 2.5-35.3 11.8-35.5 11.9-.3 0-.6.1-.9.1z"
    />
    <linearGradient
      id="SVGID_00000173147189807832357380000010965809819406880134_"
      gradientUnits="userSpaceOnUse"
      x1={1127.96}
      y1={758.342}
      x2={1048.172}
      y2={825.325}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe7062",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ff928e",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000173147189807832357380000010965809819406880134_)",
      }}
      d="M1093.6 712.9s-50.8 38.3-50.5 43.3c.3 5.1 61.6 84.8 69.2 81 7.5-3.8 52.4-33.8 52.4-33.8-24.5-48.4-65.8-93.6-71.1-90.5z"
    />
    <linearGradient
      id="SVGID_00000152957033601653321820000014057553565611578269_"
      gradientUnits="userSpaceOnUse"
      x1={1161.384}
      y1={714.06}
      x2={1084.979}
      y2={800.578}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000152957033601653321820000014057553565611578269_)",
      }}
      d="M1111.6 839.4c-1.4 0-2.8-.8-3.3-1.1-9.1-5.3-30.3-31.1-39-42-.3-.4-28-35.1-28.2-39.9-.1-1.6-.2-4.2 25.9-25.3 12.6-10.1 25.3-19.7 25.4-19.8.9-.7 2.1-.5 2.8.4.7.9.5 2.1-.4 2.8-23.1 17.4-47.7 37.5-49.7 41.7 1.3 3.2 13.7 20.8 30.8 41.9 23.3 28.8 33.3 37 35.6 37.3 7.8-4.1 50.4-32.3 50.8-32.6.9-.6 2.2-.4 2.8.6.6.9.4 2.2-.6 2.8-1.8 1.2-43.8 29.1-51.4 32.9-.5.2-1 .3-1.5.3zm-66.6-82.9z"
    />
    <path
      className="st10"
      d="M1099.9 886h-.4c-8.6 0-30.9-23.2-43.6-37.2-20.3-22.4-40.2-48.1-50.7-65.4-10.4-17.2-9.5-22.5-7.9-24.9 9.4-14.3 99.2-99.1 124.6-96.2l.8.1.5.6c.3.3 25.6 29.8 50.3 60.6 50.5 63 49.2 70 48.8 72.6-1.8 10-43.6 40.8-56.4 50-25.9 18.7-57.5 39-66 39.8zm20.9-219.7h-.3c-23.9 0-110.2 79.7-119.8 94.4-.4.6-1.9 4.4 8 20.7 23.9 39.5 81.6 101.6 90.9 100.6 6.4-.6 33.9-17.4 64-39 36.5-26.2 54-43 54.8-47.4.4-2.3-3.4-13.8-47.9-69.4-22.7-28.3-45.9-55.4-49.7-59.9z"
    />
    <linearGradient
      id="SVGID_00000075872607060387180370000004591946335235469195_"
      gradientUnits="userSpaceOnUse"
      x1={1165.193}
      y1={717.424}
      x2={1088.788}
      y2={803.941}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000075872607060387180370000004591946335235469195_)",
      }}
      d="M1161.1 806.9c-14.5 0-59.1-20.6-64.8-26.3-4.5-4.6-6.1-27.4-6.6-34.3-.3-4.9-1.5-29.4 2.2-34.5.7-.9 2.3-2.2 5.8-.1 7.9 4.7 26.5 26.7 41.3 46.3 8.1 10.7 15.2 20.9 20.1 28.7 8.9 14.2 7.8 16.4 7.3 17.6-.4.9-1.4 2-3.6 2.4-.5.1-1.1.2-1.7.2zm-66.2-92.3c-1.3 3.1-2.1 15.1-1.2 31.4 1.1 18.3 3.5 29.8 5.4 31.7 2.3 2.4 16.1 9.6 32.2 16.2 22.2 9.1 30 9.4 31.4 8.7-.1-4.9-19.4-34-42.6-62.1-15.4-18.8-22.9-25-25.2-25.9zm-1.3-1.6z"
    />
    <linearGradient
      id="SVGID_00000122709881761148817540000014115720863373814179_"
      gradientUnits="userSpaceOnUse"
      x1={1127.627}
      y1={684.249}
      x2={1051.222}
      y2={770.766}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000122709881761148817540000014115720863373814179_)",
      }}
      d="M1076 743.9c-.6 0-1.2-.3-1.6-.8-.7-.9-.5-2.1.3-2.8l4.9-3.8c.9-.7 2.1-.5 2.8.3.7.9.5 2.1-.3 2.8l-4.9 3.8c-.4.4-.8.5-1.2.5z"
    />
    <linearGradient
      id="SVGID_00000060028267605013439090000004213717425429093802_"
      gradientUnits="userSpaceOnUse"
      x1={1124.414}
      y1={760.06}
      x2={892.32}
      y2={1028.257}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe7062",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ff928e",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000060028267605013439090000004213717425429093802_)",
      }}
      d="M1143 786.9c-.8 0-1.5-.4-1.8-1.1-6.3-13.4-37.2-48.3-37.5-48.6-.7-.8-.7-2.1.2-2.8.8-.7 2.1-.7 2.8.2 1.3 1.4 31.6 35.7 38.1 49.6.5 1 0 2.2-1 2.7h-.8z"
    />
    <linearGradient
      id="SVGID_00000033338815035169319300000004335121695088714883_"
      gradientUnits="userSpaceOnUse"
      x1={1792.862}
      y1={1042.089}
      x2={1795.422}
      y2={1042.089}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000033338815035169319300000004335121695088714883_)",
      }}
      d="m1795.4 1041-1.1 2.8c-.1.4-.6.5-.9.4s-.5-.6-.4-.9l1.1-2.8c.1-.4.6-.5.9-.4.3.1.5.5.4.9z"
    />
    <linearGradient
      id="SVGID_00000054233083542542663070000009141487020193800620_"
      gradientUnits="userSpaceOnUse"
      x1={1788.851}
      y1={1051.274}
      x2={1791.53}
      y2={1051.274}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000054233083542542663070000009141487020193800620_)",
      }}
      d="m1791.5 1050.2-1.2 2.7c-.2.4-.6.5-1 .4-.4-.2-.5-.6-.4-1l1.2-2.7c.2-.4.6-.5 1-.4s.5.6.4 1z"
    />
    <linearGradient
      id="SVGID_00000012450100873160091550000009847522752450579094_"
      gradientUnits="userSpaceOnUse"
      x1={1784.531}
      y1={1060.321}
      x2={1787.326}
      y2={1060.321}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000012450100873160091550000009847522752450579094_)",
      }}
      d="m1787.3 1059.3-1.3 2.7c-.2.4-.6.5-1 .3s-.5-.6-.3-1l1.3-2.7c.2-.4.6-.5 1-.3.3.2.4.6.3 1z"
    />
    <linearGradient
      id="SVGID_00000011023054595311943100000002391115254892650884_"
      gradientUnits="userSpaceOnUse"
      x1={1779.91}
      y1={1069.218}
      x2={1782.82}
      y2={1069.218}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000011023054595311943100000002391115254892650884_)",
      }}
      d="m1782.7 1068.2-1.4 2.6c-.2.4-.6.5-1 .3s-.5-.6-.3-1l1.4-2.6c.2-.4.6-.5 1-.3s.5.7.3 1z"
    />
    <linearGradient
      id="SVGID_00000018956702948542538330000001512605463582671764_"
      gradientUnits="userSpaceOnUse"
      x1={1775}
      y1={1077.96}
      x2={1778.021}
      y2={1077.96}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000018956702948542538330000001512605463582671764_)",
      }}
      d="m1777.9 1077-1.5 2.6c-.2.4-.7.5-1 .3s-.5-.7-.3-1l1.5-2.6c.2-.4.7-.5 1-.3.4.2.5.7.3 1z"
    />
    <linearGradient
      id="SVGID_00000143598878093882031780000011359755894357416342_"
      gradientUnits="userSpaceOnUse"
      x1={1769.81}
      y1={1086.54}
      x2={1772.938}
      y2={1086.54}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000143598878093882031780000011359755894357416342_)",
      }}
      d="m1772.8 1085.7-1.6 2.6c-.2.4-.7.5-1.1.3-.4-.2-.5-.7-.3-1.1l1.6-2.5c.2-.4.7-.5 1.1-.2.4 0 .5.5.3.9z"
    />
    <linearGradient
      id="SVGID_00000063629498550320670620000018013827859606967428_"
      gradientUnits="userSpaceOnUse"
      x1={1764.352}
      y1={1094.952}
      x2={1767.584}
      y2={1094.952}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000063629498550320670620000018013827859606967428_)",
      }}
      d="m1767.5 1094.1-1.7 2.5c-.2.4-.7.5-1.1.2-.4-.2-.5-.7-.2-1.1l1.7-2.5c.2-.4.7-.5 1.1-.2.3.3.4.8.2 1.1z"
    />
    <linearGradient
      id="SVGID_00000092451158075255827190000016489589627859530644_"
      gradientUnits="userSpaceOnUse"
      x1={1758.637}
      y1={1103.192}
      x2={1761.97}
      y2={1103.192}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000092451158075255827190000016489589627859530644_)",
      }}
      d="m1761.8 1102.4-1.7 2.4c-.3.4-.8.4-1.1.2-.4-.3-.4-.8-.2-1.1l1.7-2.4c.3-.4.8-.4 1.1-.2.4.3.5.8.2 1.1z"
    />
    <linearGradient
      id="SVGID_00000157282430356065701670000009539903810117690252_"
      gradientUnits="userSpaceOnUse"
      x1={1752.678}
      y1={1111.257}
      x2={1756.108}
      y2={1111.257}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000157282430356065701670000009539903810117690252_)",
      }}
      d="m1755.9 1110.5-1.8 2.4c-.3.4-.8.4-1.1.2-.4-.3-.4-.8-.2-1.1l1.8-2.4c.3-.4.8-.4 1.1-.2.4.3.5.8.2 1.1z"
    />
    <linearGradient
      id="SVGID_00000000937728487886342140000014832362221702187652_"
      gradientUnits="userSpaceOnUse"
      x1={1746.487}
      y1={1119.146}
      x2={1750.011}
      y2={1119.146}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000000937728487886342140000014832362221702187652_)",
      }}
      d="m1749.8 1118.5-1.9 2.3c-.3.4-.8.4-1.2.1-.4-.3-.4-.8-.1-1.2l1.9-2.3c.3-.4.8-.4 1.2-.1.4.3.4.8.1 1.2z"
    />
    <linearGradient
      id="SVGID_00000183238502768875141440000015495997165336838786_"
      gradientUnits="userSpaceOnUse"
      x1={1740.077}
      y1={1126.857}
      x2={1743.69}
      y2={1126.857}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000183238502768875141440000015495997165336838786_)",
      }}
      d="m1743.5 1126.2-1.9 2.3c-.3.4-.8.4-1.2.1-.4-.3-.4-.8-.1-1.2l1.9-2.3c.3-.4.8-.4 1.2-.1.3.4.4.9.1 1.2z"
    />
    <linearGradient
      id="SVGID_00000008133517027628416410000004926966377903990183_"
      gradientUnits="userSpaceOnUse"
      x1={1733.459}
      y1={1134.391}
      x2={1737.158}
      y2={1134.391}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008133517027628416410000004926966377903990183_)",
      }}
      d="m1736.9 1133.8-2 2.2c-.3.3-.8.4-1.2.1-.3-.3-.4-.8-.1-1.2l2-2.2c.3-.3.8-.4 1.2-.1.4.4.5.9.1 1.2z"
    />
    <linearGradient
      id="SVGID_00000119815748262074420410000004539352139796917383_"
      gradientUnits="userSpaceOnUse"
      x1={1726.646}
      y1={1141.748}
      x2={1730.427}
      y2={1141.748}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000119815748262074420410000004539352139796917383_)",
      }}
      d="m1730.2 1141.2-2.1 2.2c-.3.3-.9.4-1.2 0-.3-.3-.4-.9 0-1.2l2.1-2.2c.3-.3.9-.4 1.2 0 .3.4.3.9 0 1.2z"
    />
    <linearGradient
      id="SVGID_00000002381086026127061580000016044754041793584568_"
      gradientUnits="userSpaceOnUse"
      x1={1719.649}
      y1={1148.93}
      x2={1723.509}
      y2={1148.93}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000002381086026127061580000016044754041793584568_)",
      }}
      d="m1723.3 1148.5-2.1 2.1c-.3.3-.9.3-1.2 0-.3-.3-.3-.9 0-1.2l2.1-2.1c.3-.3.9-.3 1.2 0 .3.3.3.8 0 1.2z"
    />
    <linearGradient
      id="SVGID_00000083811426014897225620000002781064283506126267_"
      gradientUnits="userSpaceOnUse"
      x1={1712.479}
      y1={1155.939}
      x2={1716.415}
      y2={1155.939}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083811426014897225620000002781064283506126267_)",
      }}
      d="m1716.1 1155.5-2.2 2.1c-.4.3-.9.3-1.3 0-.3-.4-.3-.9 0-1.3l2.2-2.1c.4-.3.9-.3 1.2 0 .5.4.5 1 .1 1.3z"
    />
    <linearGradient
      id="SVGID_00000103250085188083893080000014299809098781104808_"
      gradientUnits="userSpaceOnUse"
      x1={1705.148}
      y1={1162.778}
      x2={1709.156}
      y2={1162.778}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000103250085188083893080000014299809098781104808_)",
      }}
      d="m1708.9 1162.4-2.2 2c-.4.3-.9.3-1.3-.1-.3-.4-.3-.9.1-1.3l2.2-2c.4-.3.9-.3 1.3.1.3.4.2 1-.1 1.3z"
    />
    <linearGradient
      id="SVGID_00000056427556496357069770000003327674246706523543_"
      gradientUnits="userSpaceOnUse"
      x1={1697.665}
      y1={1169.451}
      x2={1701.742}
      y2={1169.451}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000056427556496357069770000003327674246706523543_)",
      }}
      d="m1701.4 1169.1-2.3 2c-.4.3-1 .3-1.3-.1-.3-.4-.3-1 .1-1.3l2.3-2c.4-.3 1-.3 1.3.1.3.4.3 1-.1 1.3z"
    />
    <linearGradient
      id="SVGID_00000176754930294780090640000001426644039101889947_"
      gradientUnits="userSpaceOnUse"
      x1={1690.041}
      y1={1175.96}
      x2={1694.184}
      y2={1175.96}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000176754930294780090640000001426644039101889947_)",
      }}
      d="m1693.9 1175.7-2.3 1.9c-.4.3-1 .3-1.3-.1-.3-.4-.3-1 .1-1.3l2.3-1.9c.4-.3 1-.3 1.3.1.3.4.2 1-.1 1.3z"
    />
    <linearGradient
      id="SVGID_00000116942165305262968870000012448554631019030946_"
      gradientUnits="userSpaceOnUse"
      x1={1682.284}
      y1={1182.311}
      x2={1686.491}
      y2={1182.311}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116942165305262968870000012448554631019030946_)",
      }}
      d="m1686.1 1182.1-2.3 1.9c-.4.3-1 .3-1.3-.1-.3-.4-.3-1 .1-1.3l2.3-1.9c.4-.3 1-.3 1.3.1.4.4.3 1-.1 1.3z"
    />
    <linearGradient
      id="SVGID_00000151530739681143443490000017372962073932358016_"
      gradientUnits="userSpaceOnUse"
      x1={1674.404}
      y1={1188.505}
      x2={1678.672}
      y2={1188.505}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000151530739681143443490000017372962073932358016_)",
      }}
      d="m1678.3 1188.3-2.4 1.8c-.4.3-1 .2-1.3-.2-.3-.4-.2-1 .2-1.3l2.4-1.8c.4-.3 1-.2 1.3.2.3.4.2 1-.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000049203960908613380810000010899242368839232681_"
      gradientUnits="userSpaceOnUse"
      x1={1666.408}
      y1={1194.55}
      x2={1670.736}
      y2={1194.55}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049203960908613380810000010899242368839232681_)",
      }}
      d="m1670.3 1194.4-2.4 1.8c-.4.3-1 .2-1.3-.2-.3-.4-.2-1 .2-1.3l2.4-1.8c.4-.3 1-.2 1.3.2.4.4.3 1-.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000182504263514858626870000014810252211169619127_"
      gradientUnits="userSpaceOnUse"
      x1={1658.305}
      y1={1200.449}
      x2={1662.689}
      y2={1200.449}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000182504263514858626870000014810252211169619127_)",
      }}
      d="m1662.3 1200.4-2.4 1.8c-.4.3-1 .2-1.4-.2-.3-.4-.2-1 .2-1.4l2.4-1.7c.4-.3 1-.2 1.4.2.3.3.2.9-.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000002366229350339162170000000915901015401974662_"
      gradientUnits="userSpaceOnUse"
      x1={1650.101}
      y1={1206.206}
      x2={1654.539}
      y2={1206.206}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000002366229350339162170000000915901015401974662_)",
      }}
      d="m1654.1 1206.2-2.5 1.7c-.4.3-1.1.2-1.4-.2-.3-.4-.2-1.1.2-1.4l2.5-1.7c.4-.3 1.1-.2 1.4.3.4.3.3 1-.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000161595657846459740000000008717596355058018176_"
      gradientUnits="userSpaceOnUse"
      x1={1641.804}
      y1={1211.826}
      x2={1646.295}
      y2={1211.826}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000161595657846459740000000008717596355058018176_)",
      }}
      d="m1645.9 1211.8-2.5 1.7c-.5.3-1.1.2-1.4-.3-.3-.5-.2-1.1.3-1.4l2.5-1.7c.5-.3 1.1-.2 1.4.3.2.5.1 1.1-.3 1.4z"
    />
    <linearGradient
      id="SVGID_00000031184538240508518730000000077154901720481696_"
      gradientUnits="userSpaceOnUse"
      x1={1633.419}
      y1={1217.314}
      x2={1637.961}
      y2={1217.314}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000031184538240508518730000000077154901720481696_)",
      }}
      d="m1637.5 1217.3-2.5 1.6c-.5.3-1.1.2-1.4-.3s-.2-1.1.3-1.4l2.5-1.6c.5-.3 1.1-.2 1.4.3.3.5.2 1.1-.3 1.4z"
    />
    <linearGradient
      id="SVGID_00000136373184178438930460000015982837075827550395_"
      gradientUnits="userSpaceOnUse"
      x1={1624.953}
      y1={1222.675}
      x2={1629.544}
      y2={1222.675}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000136373184178438930460000015982837075827550395_)",
      }}
      d="m1629.1 1222.7-2.5 1.6c-.5.3-1.1.2-1.4-.3s-.2-1.1.3-1.4l2.5-1.6c.5-.3 1.1-.2 1.4.3s.1 1.1-.3 1.4z"
    />
    <linearGradient
      id="SVGID_00000166642369835478250490000011269055516102879125_"
      gradientUnits="userSpaceOnUse"
      x1={1616.412}
      y1={1227.914}
      x2={1621.049}
      y2={1227.914}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000166642369835478250490000011269055516102879125_)",
      }}
      d="m1620.6 1228-2.6 1.6c-.5.3-1.1.1-1.4-.3-.3-.5-.1-1.1.3-1.4l2.6-1.6c.5-.3 1.1-.1 1.4.4.3.4.1 1-.3 1.3z"
    />
    <linearGradient
      id="SVGID_00000005249645090332514260000009193710127996141736_"
      gradientUnits="userSpaceOnUse"
      x1={1607.799}
      y1={1233.034}
      x2={1612.482}
      y2={1233.034}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005249645090332514260000009193710127996141736_)",
      }}
      d="m1612 1233.2-2.6 1.5c-.5.3-1.1.1-1.4-.4-.3-.5-.1-1.1.4-1.4l2.6-1.5c.5-.3 1.1-.1 1.4.4.2.4.1 1.1-.4 1.4z"
    />
    <linearGradient
      id="SVGID_00000025438904421055454560000005829570932526136710_"
      gradientUnits="userSpaceOnUse"
      x1={1599.121}
      y1={1238.041}
      x2={1603.848}
      y2={1238.041}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000025438904421055454560000005829570932526136710_)",
      }}
      d="m1603.3 1238.2-2.6 1.5c-.5.3-1.2.1-1.4-.4-.3-.5-.1-1.2.4-1.4l2.6-1.5c.5-.3 1.2-.1 1.4.4.3.5.1 1.1-.4 1.4z"
    />
    <linearGradient
      id="SVGID_00000036960689294284710050000002968117564387810191_"
      gradientUnits="userSpaceOnUse"
      x1={1590.382}
      y1={1242.94}
      x2={1595.152}
      y2={1242.94}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000036960689294284710050000002968117564387810191_)",
      }}
      d="m1594.6 1243.1-2.6 1.5c-.5.3-1.2.1-1.5-.4-.3-.5-.1-1.2.4-1.5l2.6-1.5c.5-.3 1.2-.1 1.5.4s.1 1.3-.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000147188892968534553090000006007291592085848483_"
      gradientUnits="userSpaceOnUse"
      x1={1581.585}
      y1={1247.735}
      x2={1586.397}
      y2={1247.735}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147188892968534553090000006007291592085848483_)",
      }}
      d="m1585.8 1248-2.6 1.4c-.5.3-1.2.1-1.5-.4-.3-.5-.1-1.2.4-1.5l2.6-1.4c.5-.3 1.2-.1 1.5.4s.2 1.2-.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000130643906033719196070000015046789200457126826_"
      gradientUnits="userSpaceOnUse"
      x1={1572.736}
      y1={1252.43}
      x2={1577.588}
      y2={1252.43}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000130643906033719196070000015046789200457126826_)",
      }}
      d="m1577 1252.7-2.7 1.4c-.5.3-1.2.1-1.5-.5-.3-.5-.1-1.2.5-1.5l2.7-1.4c.5-.3 1.2-.1 1.5.5.2.6 0 1.2-.5 1.5z"
    />
    <linearGradient
      id="SVGID_00000010303543266109373660000014554877363154440353_"
      gradientUnits="userSpaceOnUse"
      x1={1563.837}
      y1={1257.031}
      x2={1568.729}
      y2={1257.031}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000010303543266109373660000014554877363154440353_)",
      }}
      d="m1568.1 1257.3-2.7 1.4c-.5.3-1.2.1-1.5-.5-.3-.5-.1-1.2.5-1.5l2.7-1.4c.5-.3 1.2-.1 1.5.5.3.6.1 1.3-.5 1.5z"
    />
    <linearGradient
      id="SVGID_00000014619340115639017700000011611713392323667094_"
      gradientUnits="userSpaceOnUse"
      x1={1554.893}
      y1={1261.542}
      x2={1559.823}
      y2={1261.542}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000014619340115639017700000011611713392323667094_)",
      }}
      d="m1559.2 1261.9-2.7 1.3c-.6.3-1.2.1-1.5-.5-.3-.6-.1-1.2.5-1.5l2.7-1.3c.6-.3 1.2 0 1.5.5.3.5.1 1.2-.5 1.5z"
    />
    <linearGradient
      id="SVGID_00000109026490576658085000000005727886203847004562_"
      gradientUnits="userSpaceOnUse"
      x1={1545.906}
      y1={1265.966}
      x2={1550.873}
      y2={1265.966}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000109026490576658085000000005727886203847004562_)",
      }}
      d="m1550.2 1266.3-2.7 1.3c-.6.3-1.2 0-1.5-.5-.3-.6 0-1.2.5-1.5l2.7-1.3c.6-.3 1.2 0 1.5.5.3.6.1 1.3-.5 1.5z"
    />
    <linearGradient
      id="SVGID_00000119801150896881341650000003298812873754282394_"
      gradientUnits="userSpaceOnUse"
      x1={1536.88}
      y1={1270.309}
      x2={1541.884}
      y2={1270.309}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000119801150896881341650000003298812873754282394_)",
      }}
      d="m1541.2 1270.7-2.7 1.3c-.6.3-1.3 0-1.5-.5-.3-.6 0-1.3.5-1.5l2.7-1.3c.6-.3 1.3 0 1.5.5s.1 1.2-.5 1.5z"
    />
    <linearGradient
      id="SVGID_00000138562091415181471500000001914273010404069806_"
      gradientUnits="userSpaceOnUse"
      x1={1527.824}
      y1={1274.58}
      x2={1532.859}
      y2={1274.58}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000138562091415181471500000001914273010404069806_)",
      }}
      d="m1532.2 1275-2.7 1.3c-.6.3-1.3 0-1.5-.6-.3-.6 0-1.3.6-1.5l2.7-1.3c.6-.3 1.3 0 1.5.6s0 1.2-.6 1.5z"
    />
    <linearGradient
      id="SVGID_00000129182123956929517260000012469097458823120812_"
      gradientUnits="userSpaceOnUse"
      x1={1518.743}
      y1={1278.799}
      x2={1523.807}
      y2={1278.799}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129182123956929517260000012469097458823120812_)",
      }}
      d="m1523.1 1279.2-2.7 1.3c-.6.3-1.3 0-1.6-.6-.3-.6 0-1.3.6-1.6l2.7-1.3c.6-.3 1.3 0 1.5.6.4.7.1 1.4-.5 1.6z"
    />
    <linearGradient
      id="SVGID_00000041999366255550766760000006462773722261979786_"
      gradientUnits="userSpaceOnUse"
      x1={1509.637}
      y1={1282.964}
      x2={1514.73}
      y2={1282.964}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000041999366255550766760000006462773722261979786_)",
      }}
      d="m1514 1283.4-2.7 1.2c-.6.3-1.3 0-1.6-.6-.3-.6 0-1.3.6-1.6l2.7-1.2c.6-.3 1.3 0 1.6.6.3.6 0 1.3-.6 1.6z"
    />
    <linearGradient
      id="SVGID_00000016063386800772616620000003519438416481653146_"
      gradientUnits="userSpaceOnUse"
      x1={1500.505}
      y1={1287.074}
      x2={1505.629}
      y2={1287.074}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016063386800772616620000003519438416481653146_)",
      }}
      d="m1504.9 1287.5-2.7 1.2c-.6.3-1.3 0-1.6-.6-.3-.6 0-1.3.6-1.6l2.7-1.2c.6-.3 1.3 0 1.6.6.3.7 0 1.4-.6 1.6z"
    />
    <linearGradient
      id="SVGID_00000181788711032195514990000014227092887689585342_"
      gradientUnits="userSpaceOnUse"
      x1={1491.349}
      y1={1291.126}
      x2={1496.502}
      y2={1291.126}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000181788711032195514990000014227092887689585342_)",
      }}
      d="m1495.8 1291.6-2.7 1.2c-.6.3-1.3 0-1.6-.6-.3-.6 0-1.3.6-1.6l2.7-1.2c.6-.3 1.3 0 1.6.6.3.6 0 1.4-.6 1.6z"
    />
    <linearGradient
      id="SVGID_00000072241113564374323500000007169286462040990854_"
      gradientUnits="userSpaceOnUse"
      x1={1482.167}
      y1={1295.12}
      x2={1487.35}
      y2={1295.12}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072241113564374323500000007169286462040990854_)",
      }}
      d="m1486.6 1295.6-2.8 1.2c-.6.3-1.3 0-1.6-.6-.3-.6 0-1.3.6-1.6l2.8-1.2c.6-.3 1.3 0 1.6.6.3.7 0 1.4-.6 1.6z"
    />
    <linearGradient
      id="SVGID_00000115508227745694653190000013146759522442019250_"
      gradientUnits="userSpaceOnUse"
      x1={1472.96}
      y1={1299.054}
      x2={1478.172}
      y2={1299.054}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000115508227745694653190000013146759522442019250_)",
      }}
      d="m1477.4 1299.6-2.8 1.2c-.6.3-1.3 0-1.6-.6-.3-.6 0-1.3.6-1.6l2.8-1.2c.6-.3 1.3 0 1.6.7.3.5 0 1.2-.6 1.5z"
    />
    <linearGradient
      id="SVGID_00000006709211867912810890000007323204986829482376_"
      gradientUnits="userSpaceOnUse"
      x1={1463.73}
      y1={1302.925}
      x2={1468.966}
      y2={1302.925}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000006709211867912810890000007323204986829482376_)",
      }}
      d="m1468.2 1303.5-2.8 1.2c-.6.3-1.4 0-1.6-.7-.3-.6 0-1.4.7-1.6l2.8-1.1c.6-.3 1.3 0 1.6.7.2.5-.1 1.2-.7 1.5z"
    />
    <linearGradient
      id="SVGID_00000060719339967496437200000010611024483713815476_"
      gradientUnits="userSpaceOnUse"
      x1={1454.473}
      y1={1306.733}
      x2={1459.73}
      y2={1306.733}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000060719339967496437200000010611024483713815476_)",
      }}
      d="m1459 1307.3-2.8 1.1c-.6.3-1.4 0-1.6-.7-.3-.6 0-1.4.7-1.6l2.8-1.1c.6-.3 1.4 0 1.6.7.2.6-.1 1.4-.7 1.6z"
    />
    <linearGradient
      id="SVGID_00000126316339811726772640000004923228134768963236_"
      gradientUnits="userSpaceOnUse"
      x1={1445.189}
      y1={1310.476}
      x2={1450.467}
      y2={1310.476}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000126316339811726772640000004923228134768963236_)",
      }}
      d="m1449.7 1311.1-2.8 1.1c-.6.3-1.4-.1-1.6-.7-.3-.6.1-1.4.7-1.6l2.8-1.1c.6-.3 1.4.1 1.6.7.2.6-.1 1.3-.7 1.6z"
    />
    <linearGradient
      id="SVGID_00000000913992050408307450000002810180242504194963_"
      gradientUnits="userSpaceOnUse"
      x1={1435.879}
      y1={1314.151}
      x2={1441.178}
      y2={1314.151}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000000913992050408307450000002810180242504194963_)",
      }}
      d="m1440.4 1314.8-2.8 1.1c-.6.3-1.4-.1-1.6-.7-.3-.6.1-1.4.7-1.6l2.8-1.1c.6-.3 1.4.1 1.6.7.2.6-.1 1.3-.7 1.6z"
    />
    <linearGradient
      id="SVGID_00000096778892742203652560000011149377944101909904_"
      gradientUnits="userSpaceOnUse"
      x1={1426.541}
      y1={1317.756}
      x2={1431.861}
      y2={1317.756}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000096778892742203652560000011149377944101909904_)",
      }}
      d="m1431.1 1318.4-2.8 1.1c-.6.2-1.4-.1-1.6-.7-.2-.6.1-1.4.7-1.6l2.8-1.1c.6-.2 1.4.1 1.6.7.2.6-.1 1.3-.7 1.6z"
    />
    <linearGradient
      id="SVGID_00000075875765999608797320000004979333824714145950_"
      gradientUnits="userSpaceOnUse"
      x1={1417.175}
      y1={1321.291}
      x2={1422.517}
      y2={1321.291}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000075875765999608797320000004979333824714145950_)",
      }}
      d="m1421.7 1321.9-2.8 1.1c-.7.2-1.4-.1-1.6-.7-.2-.7.1-1.4.7-1.6l2.8-1c.7-.2 1.4.1 1.6.7.3.6-.1 1.3-.7 1.5z"
    />
    <linearGradient
      id="SVGID_00000124856960401836432500000004273735489088693426_"
      gradientUnits="userSpaceOnUse"
      x1={1407.783}
      y1={1324.751}
      x2={1413.146}
      y2={1324.751}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000124856960401836432500000004273735489088693426_)",
      }}
      d="m1412.3 1325.4-2.8 1c-.7.2-1.4-.1-1.6-.8-.2-.7.1-1.4.8-1.6l2.8-1c.7-.2 1.4.1 1.6.8.2.7-.1 1.4-.8 1.6z"
    />
    <linearGradient
      id="SVGID_00000125596032698853497370000017109180417963246521_"
      gradientUnits="userSpaceOnUse"
      x1={1398.362}
      y1={1328.136}
      x2={1403.747}
      y2={1328.136}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000125596032698853497370000017109180417963246521_)",
      }}
      d="m1402.9 1328.8-2.8 1c-.7.2-1.4-.1-1.6-.8-.2-.7.1-1.4.8-1.6l2.8-1c.7-.2 1.4.1 1.6.8.2.7-.1 1.4-.8 1.6z"
    />
    <linearGradient
      id="SVGID_00000150816329564743597520000018229229707328237731_"
      gradientUnits="userSpaceOnUse"
      x1={1388.914}
      y1={1331.443}
      x2={1394.32}
      y2={1331.443}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000150816329564743597520000018229229707328237731_)",
      }}
      d="m1393.5 1332.2-2.8 1c-.7.2-1.4-.1-1.6-.8s.1-1.4.8-1.6l2.8-1c.7-.2 1.4.1 1.6.8.2.6-.2 1.3-.8 1.6z"
    />
    <linearGradient
      id="SVGID_00000073721123239437141860000012542846771762992547_"
      gradientUnits="userSpaceOnUse"
      x1={1379.439}
      y1={1334.67}
      x2={1384.866}
      y2={1334.67}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000073721123239437141860000012542846771762992547_)",
      }}
      d="m1384 1335.4-2.8 1c-.7.2-1.4-.1-1.6-.8-.2-.7.1-1.4.8-1.6l2.8-1c.7-.2 1.4.1 1.6.8.2.7-.1 1.4-.8 1.6z"
    />
    <linearGradient
      id="SVGID_00000098941613900103170120000001990641910960510605_"
      gradientUnits="userSpaceOnUse"
      x1={1369.935}
      y1={1337.815}
      x2={1375.384}
      y2={1337.815}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000098941613900103170120000001990641910960510605_)",
      }}
      d="m1374.5 1338.6-2.9.9c-.7.2-1.4-.1-1.6-.8-.2-.7.1-1.4.8-1.6l2.9-.9c.7-.2 1.4.2 1.6.8.2.6-.1 1.4-.8 1.6z"
    />
    <linearGradient
      id="SVGID_00000174585086756819709280000015622284687754108809_"
      gradientUnits="userSpaceOnUse"
      x1={1360.404}
      y1={1340.875}
      x2={1365.874}
      y2={1340.875}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000174585086756819709280000015622284687754108809_)",
      }}
      d="m1365 1341.7-2.9.9c-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.8-1.6l2.9-.9c.7-.2 1.4.2 1.6.9s-.1 1.3-.8 1.6z"
    />
    <linearGradient
      id="SVGID_00000007387706225514801440000014332653263412740507_"
      gradientUnits="userSpaceOnUse"
      x1={1350.846}
      y1={1343.848}
      x2={1356.337}
      y2={1343.848}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000007387706225514801440000014332653263412740507_)",
      }}
      d="m1355.4 1344.7-2.9.9c-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.9-1.6l2.9-.9c.7-.2 1.4.2 1.6.9.2.6-.2 1.3-.9 1.6z"
    />
    <linearGradient
      id="SVGID_00000146498454762237804820000006926564486033325196_"
      gradientUnits="userSpaceOnUse"
      x1={1341.26}
      y1={1346.731}
      x2={1346.773}
      y2={1346.731}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000146498454762237804820000006926564486033325196_)",
      }}
      d="m1345.8 1347.6-2.9.9c-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.9-1.6l2.9-.8c.7-.2 1.4.2 1.6.9.2.5-.2 1.3-.9 1.5z"
    />
    <linearGradient
      id="SVGID_00000023280937985653859720000008208869172558262199_"
      gradientUnits="userSpaceOnUse"
      x1={1331.647}
      y1={1349.522}
      x2={1337.18}
      y2={1349.522}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000023280937985653859720000008208869172558262199_)",
      }}
      d="m1336.2 1350.4-2.9.8c-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.9-1.6l2.9-.8c.7-.2 1.4.2 1.6.9.2.7-.2 1.4-.9 1.6z"
    />
    <linearGradient
      id="SVGID_00000078025041535715638250000000546025616345663378_"
      gradientUnits="userSpaceOnUse"
      x1={1322.006}
      y1={1352.218}
      x2={1327.561}
      y2={1352.218}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000078025041535715638250000000546025616345663378_)",
      }}
      d="m1326.6 1353.1-2.9.8c-.7.2-1.4-.2-1.6-.9-.2-.7.2-1.4.9-1.6l2.9-.8c.7-.2 1.4.2 1.6.9.2.7-.2 1.4-.9 1.6z"
    />
    <linearGradient
      id="SVGID_00000098189943092395883730000015782692474713507739_"
      gradientUnits="userSpaceOnUse"
      x1={1312.339}
      y1={1354.816}
      x2={1317.916}
      y2={1354.816}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000098189943092395883730000015782692474713507739_)",
      }}
      d="m1316.9 1355.7-2.9.8c-.7.2-1.4-.2-1.6-1-.2-.7.2-1.4 1-1.6l2.9-.8c.7-.2 1.4.2 1.6 1 .2.7-.3 1.4-1 1.6z"
    />
    <linearGradient
      id="SVGID_00000137827830874260408850000002715149109364538542_"
      gradientUnits="userSpaceOnUse"
      x1={1302.646}
      y1={1357.315}
      x2={1308.243}
      y2={1357.315}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000137827830874260408850000002715149109364538542_)",
      }}
      d="m1307.2 1358.2-2.9.7c-.7.2-1.5-.3-1.6-1-.2-.7.3-1.5 1-1.6l2.9-.7c.7-.2 1.4.3 1.6 1 .2.7-.3 1.5-1 1.6z"
    />
    <linearGradient
      id="SVGID_00000163068994142163676740000000737678701871680422_"
      gradientUnits="userSpaceOnUse"
      x1={1292.927}
      y1={1359.71}
      x2={1298.545}
      y2={1359.71}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163068994142163676740000000737678701871680422_)",
      }}
      d="m1297.5 1360.7-2.9.7c-.7.2-1.5-.3-1.6-1-.2-.7.3-1.5 1-1.6l2.9-.7c.7-.2 1.5.3 1.6 1 .2.7-.3 1.4-1 1.6z"
    />
    <linearGradient
      id="SVGID_00000025444469882652165630000003063829888784266682_"
      gradientUnits="userSpaceOnUse"
      x1={1283.182}
      y1={1361.999}
      x2={1288.821}
      y2={1361.999}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000025444469882652165630000003063829888784266682_)",
      }}
      d="m1287.8 1363-2.9.7c-.7.2-1.5-.3-1.6-1-.2-.7.3-1.5 1-1.6l2.9-.7c.7-.2 1.5.3 1.6 1 .2.7-.3 1.4-1 1.6z"
    />
    <linearGradient
      id="SVGID_00000065756246910402824300000016322306172910284969_"
      gradientUnits="userSpaceOnUse"
      x1={1273.412}
      y1={1364.178}
      x2={1279.071}
      y2={1364.178}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065756246910402824300000016322306172910284969_)",
      }}
      d="m1278 1365.2-2.9.6c-.7.2-1.5-.3-1.6-1-.2-.7.3-1.5 1-1.6l2.9-.6c.7-.2 1.5.3 1.6 1 .2.7-.3 1.4-1 1.6z"
    />
    <linearGradient
      id="SVGID_00000021114277845236241140000007992950387327080849_"
      gradientUnits="userSpaceOnUse"
      x1={1263.618}
      y1={1366.246}
      x2={1269.297}
      y2={1366.246}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021114277845236241140000007992950387327080849_)",
      }}
      d="m1268.2 1367.3-2.9.6c-.7.2-1.5-.3-1.6-1.1-.2-.7.3-1.5 1.1-1.6l2.9-.6c.7-.2 1.5.3 1.6 1.1.1.7-.4 1.4-1.1 1.6z"
    />
    <linearGradient
      id="SVGID_00000114754636868297692320000000109364228991036576_"
      gradientUnits="userSpaceOnUse"
      x1={1253.801}
      y1={1368.198}
      x2={1259.5}
      y2={1368.198}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000114754636868297692320000000109364228991036576_)",
      }}
      d="m1258.4 1369.3-2.9.6c-.7.1-1.5-.3-1.6-1.1-.1-.7.3-1.5 1.1-1.6l2.9-.6c.7-.1 1.5.3 1.6 1.1.1.7-.4 1.4-1.1 1.6z"
    />
    <linearGradient
      id="SVGID_00000168811961430024183230000010099143919943850654_"
      gradientUnits="userSpaceOnUse"
      x1={1243.96}
      y1={1370.031}
      x2={1249.679}
      y2={1370.031}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168811961430024183230000010099143919943850654_)",
      }}
      d="m1248.5 1371.1-3 .5c-.8.1-1.5-.4-1.6-1.1-.1-.8.4-1.5 1.1-1.6l3-.5c.8-.1 1.5.4 1.6 1.1.2.8-.3 1.5-1.1 1.6z"
    />
    <linearGradient
      id="SVGID_00000064339140749151081160000001148665395503079578_"
      gradientUnits="userSpaceOnUse"
      x1={1234.098}
      y1={1371.743}
      x2={1239.836}
      y2={1371.743}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000064339140749151081160000001148665395503079578_)",
      }}
      d="m1238.7 1372.9-3 .5c-.8.1-1.5-.4-1.6-1.1-.1-.8.4-1.5 1.1-1.6l3-.5c.8-.1 1.5.4 1.6 1.1.1.7-.4 1.4-1.1 1.6z"
    />
    <linearGradient
      id="SVGID_00000065759416412992164560000015765051806904177569_"
      gradientUnits="userSpaceOnUse"
      x1={1224.215}
      y1={1373.329}
      x2={1229.973}
      y2={1373.329}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065759416412992164560000015765051806904177569_)",
      }}
      d="m1228.8 1374.5-3 .5c-.8.1-1.5-.4-1.6-1.2s.4-1.5 1.2-1.6l3-.5c.8-.1 1.5.4 1.6 1.2.1.8-.4 1.5-1.2 1.6z"
    />
    <linearGradient
      id="SVGID_00000117660332558699412090000011309439910219619763_"
      gradientUnits="userSpaceOnUse"
      x1={1214.312}
      y1={1374.787}
      x2={1220.089}
      y2={1374.787}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000117660332558699412090000011309439910219619763_)",
      }}
      d="m1218.9 1376-3 .4c-.8.1-1.5-.4-1.6-1.2-.1-.8.4-1.5 1.2-1.6l3-.4c.8-.1 1.5.4 1.6 1.2.1.7-.5 1.5-1.2 1.6z"
    />
    <linearGradient
      id="SVGID_00000000940393299673398740000017154653750631333514_"
      gradientUnits="userSpaceOnUse"
      x1={1204.392}
      y1={1376.112}
      x2={1210.187}
      y2={1376.112}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000000940393299673398740000017154653750631333514_)",
      }}
      d="m1209 1377.3-3 .4c-.8.1-1.5-.4-1.6-1.2s.4-1.5 1.2-1.6l3-.4c.8-.1 1.5.4 1.6 1.2s-.5 1.5-1.2 1.6z"
    />
    <linearGradient
      id="SVGID_00000183233253584450000880000004980311131540266418_"
      gradientUnits="userSpaceOnUse"
      x1={1194.454}
      y1={1377.302}
      x2={1200.266}
      y2={1377.302}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000183233253584450000880000004980311131540266418_)",
      }}
      d="m1199 1378.5-3 .3c-.8.1-1.5-.5-1.6-1.2-.1-.8.5-1.5 1.2-1.6l3-.3c.8-.1 1.5.5 1.6 1.2.1.9-.4 1.6-1.2 1.6z"
    />
    <linearGradient
      id="SVGID_00000054229366582629928780000004170157532969062317_"
      gradientUnits="userSpaceOnUse"
      x1={1184.5}
      y1={1378.352}
      x2={1190.331}
      y2={1378.352}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000054229366582629928780000004170157532969062317_)",
      }}
      d="m1189 1379.6-3 .3c-.8.1-1.5-.5-1.6-1.3-.1-.8.5-1.5 1.3-1.6l3-.3c.8-.1 1.5.5 1.6 1.3.1.8-.5 1.5-1.3 1.6z"
    />
    <linearGradient
      id="SVGID_00000119823821664584741430000008807803394367301781_"
      gradientUnits="userSpaceOnUse"
      x1={1174.533}
      y1={1379.26}
      x2={1180.38}
      y2={1379.26}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000119823821664584741430000008807803394367301781_)",
      }}
      d="m1179.1 1380.6-3 .3c-.8.1-1.5-.5-1.5-1.3-.1-.8.5-1.5 1.3-1.5l3-.2c.8-.1 1.5.5 1.5 1.3 0 .6-.5 1.3-1.3 1.4z"
    />
    <linearGradient
      id="SVGID_00000059279021412241745490000006336586557120244403_"
      gradientUnits="userSpaceOnUse"
      x1={1164.554}
      y1={1380.021}
      x2={1170.418}
      y2={1380.021}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000059279021412241745490000006336586557120244403_)",
      }}
      d="m1169.1 1381.3-3 .2c-.8.1-1.5-.5-1.5-1.3-.1-.8.5-1.5 1.3-1.5l3-.2c.8-.1 1.5.5 1.5 1.3.1.8-.5 1.5-1.3 1.5z"
    />
    <linearGradient
      id="SVGID_00000101823740645225053300000003305027534384126134_"
      gradientUnits="userSpaceOnUse"
      x1={1154.565}
      y1={1380.631}
      x2={1160.444}
      y2={1380.631}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000101823740645225053300000003305027534384126134_)",
      }}
      d="m1159.1 1382-3 .2c-.8 0-1.5-.6-1.5-1.4 0-.8.6-1.5 1.4-1.5l3-.2c.8 0 1.5.6 1.5 1.4 0 .8-.6 1.4-1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000145040815703207892610000012912475090342638994_"
      gradientUnits="userSpaceOnUse"
      x1={1144.568}
      y1={1381.088}
      x2={1150.462}
      y2={1381.088}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000145040815703207892610000012912475090342638994_)",
      }}
      d="m1149.1 1382.5-3 .1c-.8 0-1.5-.6-1.5-1.4 0-.8.6-1.5 1.4-1.5l3-.1c.8 0 1.5.6 1.5 1.4s-.6 1.4-1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000005987214822484492580000006372774912990674329_"
      gradientUnits="userSpaceOnUse"
      x1={1134.565}
      y1={1381.387}
      x2={1140.475}
      y2={1381.387}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005987214822484492580000006372774912990674329_)",
      }}
      d="m1139.1 1382.8-3 .1c-.8 0-1.5-.6-1.5-1.4 0-.8.6-1.5 1.4-1.5l3-.1c.8 0 1.5.6 1.5 1.4 0 .8-.6 1.5-1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000041291276968941797320000006672651359616529041_"
      gradientUnits="userSpaceOnUse"
      x1={1124.56}
      y1={1381.525}
      x2={1130.483}
      y2={1381.525}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000041291276968941797320000006672651359616529041_)",
      }}
      d="M1129 1383h-3c-.8 0-1.5-.6-1.5-1.5 0-.8.6-1.5 1.5-1.5h3c.8 0 1.5.6 1.5 1.5 0 .8-.7 1.5-1.5 1.5z"
    />
    <linearGradient
      id="SVGID_00000033365746688598406020000008278068936414935218_"
      gradientUnits="userSpaceOnUse"
      x1={1114.553}
      y1={1381.496}
      x2={1120.489}
      y2={1381.496}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000033365746688598406020000008278068936414935218_)",
      }}
      d="M1119 1383h-3c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.4 1.5.1.8-.6 1.5-1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000029756489973092142000000012466259068679847812_"
      gradientUnits="userSpaceOnUse"
      x1={1104.549}
      y1={1381.301}
      x2={1110.497}
      y2={1381.301}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000029756489973092142000000012466259068679847812_)",
      }}
      d="m1109 1382.8-3-.1c-.8 0-1.5-.7-1.4-1.5 0-.8.7-1.5 1.5-1.4l3 .1c.8 0 1.5.7 1.4 1.5 0 .8-.7 1.4-1.5 1.4z"
    />
    <linearGradient
      id="SVGID_00000147201045039232198600000017626985630053176232_"
      gradientUnits="userSpaceOnUse"
      x1={1094.551}
      y1={1380.934}
      x2={1100.51}
      y2={1380.934}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147201045039232198600000017626985630053176232_)",
      }}
      d="m1099 1382.5-3-.1c-.8 0-1.5-.7-1.4-1.5 0-.8.7-1.5 1.5-1.4l3 .1c.8 0 1.4.7 1.4 1.5s-.7 1.4-1.5 1.4z"
    />
    <linearGradient
      id="SVGID_00000016039747698208234740000007070035034621077141_"
      gradientUnits="userSpaceOnUse"
      x1={1084.561}
      y1={1380.391}
      x2={1090.53}
      y2={1380.391}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016039747698208234740000007070035034621077141_)",
      }}
      d="m1089 1382-3-.2c-.8-.1-1.4-.8-1.4-1.6.1-.8.8-1.4 1.6-1.4l3 .2c.8.1 1.4.8 1.4 1.6-.1.8-.8 1.4-1.6 1.4z"
    />
    <linearGradient
      id="SVGID_00000018952527576072929100000004398877369764408460_"
      gradientUnits="userSpaceOnUse"
      x1={1074.582}
      y1={1379.67}
      x2={1080.561}
      y2={1379.67}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000018952527576072929100000004398877369764408460_)",
      }}
      d="m1078.9 1381.3-3-.2c-.8-.1-1.4-.8-1.4-1.6s.8-1.4 1.6-1.4l3 .2c.8.1 1.4.8 1.4 1.6s-.7 1.4-1.6 1.4z"
    />
    <linearGradient
      id="SVGID_00000085940898453772890870000012847550048586325932_"
      gradientUnits="userSpaceOnUse"
      x1={1064.62}
      y1={1378.767}
      x2={1070.606}
      y2={1378.767}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000085940898453772890870000012847550048586325932_)",
      }}
      d="m1069 1380.4-3-.3c-.8-.1-1.4-.8-1.3-1.6.1-.8.8-1.4 1.6-1.3l3 .3c.8.1 1.4.8 1.3 1.6s-.8 1.4-1.6 1.3z"
    />
    <linearGradient
      id="SVGID_00000147200483453542664350000013142732311333069211_"
      gradientUnits="userSpaceOnUse"
      x1={1054.676}
      y1={1377.679}
      x2={1060.67}
      y2={1377.679}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147200483453542664350000013142732311333069211_)",
      }}
      d="m1059 1379.4-3-.4c-.8-.1-1.4-.8-1.3-1.7.1-.8.8-1.4 1.7-1.3l3 .4c.8.1 1.4.8 1.3 1.7-.1.8-.9 1.4-1.7 1.3z"
    />
    <linearGradient
      id="SVGID_00000053537111339110487620000009987836038002081676_"
      gradientUnits="userSpaceOnUse"
      x1={1044.755}
      y1={1376.404}
      x2={1050.755}
      y2={1376.404}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000053537111339110487620000009987836038002081676_)",
      }}
      d="m1049 1378.1-3-.4c-.8-.1-1.4-.9-1.3-1.7.1-.8.9-1.4 1.7-1.3l3 .4c.8.1 1.4.9 1.3 1.7-.1.8-.8 1.4-1.7 1.3z"
    />
    <linearGradient
      id="SVGID_00000143598572194037578650000001689628944449582739_"
      gradientUnits="userSpaceOnUse"
      x1={1034.861}
      y1={1374.939}
      x2={1040.866}
      y2={1374.939}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000143598572194037578650000001689628944449582739_)",
      }}
      d="m1039.1 1376.7-3-.5c-.8-.1-1.4-.9-1.3-1.7.1-.8.9-1.4 1.7-1.3l3 .5c.8.1 1.4.9 1.3 1.7-.1.8-.9 1.4-1.7 1.3z"
    />
    <linearGradient
      id="SVGID_00000160167183140853894720000010999941882543733901_"
      gradientUnits="userSpaceOnUse"
      x1={1024.998}
      y1={1373.28}
      x2={1031.006}
      y2={1373.28}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160167183140853894720000010999941882543733901_)",
      }}
      d="m1029.2 1375-3-.5c-.8-.1-1.4-.9-1.2-1.8.1-.8.9-1.4 1.8-1.2l3 .5c.8.1 1.4.9 1.2 1.8-.2.8-1 1.4-1.8 1.2z"
    />
    <linearGradient
      id="SVGID_00000036246057338192975530000000834891930228225423_"
      gradientUnits="userSpaceOnUse"
      x1={1015.171}
      y1={1371.427}
      x2={1021.181}
      y2={1371.427}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000036246057338192975530000000834891930228225423_)",
      }}
      d="m1019.3 1373.2-2.9-.6c-.8-.2-1.4-1-1.2-1.8.2-.8 1-1.4 1.8-1.2l2.9.6c.8.2 1.4 1 1.2 1.8-.1.9-.9 1.4-1.8 1.2z"
    />
    <linearGradient
      id="SVGID_00000057851553009046479070000010918390840548856469_"
      gradientUnits="userSpaceOnUse"
      x1={1005.383}
      y1={1369.378}
      x2={1011.394}
      y2={1369.378}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000057851553009046479070000010918390840548856469_)",
      }}
      d="m1009.5 1371.2-2.9-.6c-.8-.2-1.4-1-1.2-1.8.2-.8 1-1.4 1.8-1.2l2.9.6c.8.2 1.4 1 1.2 1.8-.1.9-.9 1.4-1.8 1.2z"
    />
    <linearGradient
      id="SVGID_00000129192793115925223300000009160187438992503222_"
      gradientUnits="userSpaceOnUse"
      x1={995.64}
      y1={1367.13}
      x2={1001.65}
      y2={1367.13}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129192793115925223300000009160187438992503222_)",
      }}
      d="m999.7 1369-2.9-.7c-.8-.2-1.3-1-1.1-1.9.2-.8 1-1.3 1.9-1.1l2.9.7c.8.2 1.3 1 1.1 1.9-.2.8-1 1.3-1.9 1.1z"
    />
    <linearGradient
      id="SVGID_00000062176679860835867300000009031855608582862726_"
      gradientUnits="userSpaceOnUse"
      x1={985.945}
      y1={1364.682}
      x2={991.953}
      y2={1364.682}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062176679860835867300000009031855608582862726_)",
      }}
      d="m990 1366.6-2.9-.8c-.8-.2-1.3-1.1-1.1-1.9.2-.8 1.1-1.3 1.9-1.1l2.9.8c.8.2 1.3 1.1 1.1 1.9-.2.8-1.1 1.3-1.9 1.1z"
    />
    <linearGradient
      id="SVGID_00000069365239931043641650000000864596229590575289_"
      gradientUnits="userSpaceOnUse"
      x1={976.304}
      y1={1362.034}
      x2={982.309}
      y2={1362.034}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000069365239931043641650000000864596229590575289_)",
      }}
      d="m980.3 1363.9-2.9-.8c-.8-.2-1.3-1.1-1.1-1.9.2-.8 1.1-1.3 1.9-1.1l2.9.8c.8.2 1.3 1.1 1.1 1.9-.2.9-1.1 1.4-1.9 1.1z"
    />
    <linearGradient
      id="SVGID_00000155135374665627439250000009952521609903723699_"
      gradientUnits="userSpaceOnUse"
      x1={966.721}
      y1={1359.185}
      x2={972.721}
      y2={1359.185}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155135374665627439250000009952521609903723699_)",
      }}
      d="m970.7 1361.1-2.9-.9c-.8-.3-1.3-1.1-1-2 .3-.8 1.1-1.3 2-1l2.9.9c.8.3 1.3 1.1 1 2-.3.8-1.2 1.3-2 1z"
    />
    <linearGradient
      id="SVGID_00000160897005133592536820000011194097969728838058_"
      gradientUnits="userSpaceOnUse"
      x1={957.194}
      y1={1356.15}
      x2={963.191}
      y2={1356.15}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160897005133592536820000011194097969728838058_)",
      }}
      d="m961.1 1358.1-2.9-.9c-.8-.3-1.3-1.2-1-2 .3-.8 1.2-1.3 2-1l2.9.9c.8.3 1.3 1.2 1 2-.3.8-1.1 1.3-2 1z"
    />
    <linearGradient
      id="SVGID_00000147926045081603172760000017989184040452848010_"
      gradientUnits="userSpaceOnUse"
      x1={947.719}
      y1={1352.958}
      x2={953.713}
      y2={1352.958}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147926045081603172760000017989184040452848010_)",
      }}
      d="m951.6 1354.9-2.8-1c-.8-.3-1.3-1.2-1-2 .3-.8 1.2-1.3 2-1l2.8 1c.8.3 1.3 1.2 1 2-.3.9-1.2 1.3-2 1z"
    />
    <linearGradient
      id="SVGID_00000015356256214558227960000000212906394782020537_"
      gradientUnits="userSpaceOnUse"
      x1={938.298}
      y1={1349.608}
      x2={944.289}
      y2={1349.608}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000015356256214558227960000000212906394782020537_)",
      }}
      d="m942.2 1351.6-2.8-1c-.8-.3-1.2-1.2-.9-2 .3-.8 1.2-1.2 2-.9l2.8 1c.8.3 1.2 1.2.9 2-.3.8-1.2 1.2-2 .9z"
    />
    <linearGradient
      id="SVGID_00000002372231243739679070000015909450959703541684_"
      gradientUnits="userSpaceOnUse"
      x1={928.935}
      y1={1346.102}
      x2={934.922}
      y2={1346.102}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000002372231243739679070000015909450959703541684_)",
      }}
      d="m932.8 1348.1-2.8-1.1c-.8-.3-1.2-1.2-.9-2.1.3-.8 1.2-1.2 2.1-.9l2.8 1.1c.8.3 1.2 1.2.9 2.1-.4.8-1.3 1.2-2.1.9z"
    />
    <linearGradient
      id="SVGID_00000036956453576873290230000012727106013249287841_"
      gradientUnits="userSpaceOnUse"
      x1={919.633}
      y1={1342.439}
      x2={925.614}
      y2={1342.439}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000036956453576873290230000012727106013249287841_)",
      }}
      d="m923.4 1344.5-2.8-1.1c-.8-.3-1.2-1.3-.9-2.1.3-.8 1.3-1.2 2.1-.9l2.8 1.1c.8.3 1.2 1.3.9 2.1-.3.8-1.3 1.2-2.1.9z"
    />
    <linearGradient
      id="SVGID_00000058584346045375748890000008892355297761137821_"
      gradientUnits="userSpaceOnUse"
      x1={910.395}
      y1={1338.619}
      x2={916.37}
      y2={1338.619}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000058584346045375748890000008892355297761137821_)",
      }}
      d="m914.1 1340.7-2.8-1.2c-.8-.3-1.2-1.3-.9-2.1.3-.8 1.3-1.2 2.1-.9l2.8 1.2c.8.3 1.2 1.3.9 2.1-.3.8-1.2 1.2-2.1.9z"
    />
    <linearGradient
      id="SVGID_00000151525670825125998510000006372967744761927814_"
      gradientUnits="userSpaceOnUse"
      x1={901.224}
      y1={1334.64}
      x2={907.191}
      y2={1334.64}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000151525670825125998510000006372967744761927814_)",
      }}
      d="m904.9 1336.7-2.7-1.2c-.8-.4-1.2-1.3-.8-2.1.4-.8 1.3-1.2 2.1-.8l2.7 1.2c.8.4 1.2 1.3.8 2.1-.3.8-1.3 1.2-2.1.8z"
    />
    <linearGradient
      id="SVGID_00000110432967704044333200000001792833355246866569_"
      gradientUnits="userSpaceOnUse"
      x1={892.124}
      y1={1330.505}
      x2={898.082}
      y2={1330.505}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000110432967704044333200000001792833355246866569_)",
      }}
      d="m895.8 1332.6-2.7-1.3c-.8-.4-1.2-1.3-.8-2.2.4-.8 1.3-1.2 2.2-.8l2.7 1.3c.8.4 1.2 1.3.8 2.1-.4.9-1.4 1.3-2.2.9z"
    />
    <linearGradient
      id="SVGID_00000125594879156460384520000012959057338795435166_"
      gradientUnits="userSpaceOnUse"
      x1={883.097}
      y1={1326.212}
      x2={889.046}
      y2={1326.212}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000125594879156460384520000012959057338795435166_)",
      }}
      d="m886.7 1328.3-2.7-1.3c-.8-.4-1.1-1.4-.8-2.2s1.4-1.1 2.2-.8l2.7 1.3c.8.4 1.1 1.4.7 2.2-.3.9-1.3 1.2-2.1.8z"
    />
    <linearGradient
      id="SVGID_00000111192532662317977300000017320810997639180448_"
      gradientUnits="userSpaceOnUse"
      x1={874.148}
      y1={1321.761}
      x2={880.086}
      y2={1321.761}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000111192532662317977300000017320810997639180448_)",
      }}
      d="m877.7 1323.9-2.7-1.4c-.8-.4-1.1-1.4-.7-2.2.4-.8 1.4-1.1 2.2-.7l2.7 1.4c.8.4 1.1 1.4.7 2.2s-1.4 1.1-2.2.7z"
    />
    <linearGradient
      id="SVGID_00000109027503732721905040000003268660538884753283_"
      gradientUnits="userSpaceOnUse"
      x1={865.279}
      y1={1317.153}
      x2={871.206}
      y2={1317.153}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000109027503732721905040000003268660538884753283_)",
      }}
      d="m868.8 1319.3-2.7-1.4c-.8-.4-1.1-1.4-.7-2.2.4-.8 1.4-1.1 2.2-.7l2.6 1.4c.8.4 1.1 1.4.7 2.2-.3.8-1.3 1.1-2.1.7z"
    />
    <linearGradient
      id="SVGID_00000097497700525545985280000004530710629259648648_"
      gradientUnits="userSpaceOnUse"
      x1={856.495}
      y1={1312.386}
      x2={862.409}
      y2={1312.386}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000097497700525545985280000004530710629259648648_)",
      }}
      d="m860 1314.6-2.6-1.5c-.8-.4-1.1-1.4-.6-2.2.4-.8 1.4-1.1 2.2-.6l2.6 1.5c.8.4 1.1 1.4.6 2.2-.4.7-1.4 1-2.2.6z"
    />
    <linearGradient
      id="SVGID_00000042002290280957951500000003448812863446638270_"
      gradientUnits="userSpaceOnUse"
      x1={847.798}
      y1={1307.463}
      x2={853.698}
      y2={1307.463}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000042002290280957951500000003448812863446638270_)",
      }}
      d="m851.2 1309.6-2.6-1.5c-.8-.5-1.1-1.5-.6-2.3.5-.8 1.5-1.1 2.3-.6l2.6 1.5c.8.5 1.1 1.5.6 2.3-.5.8-1.5 1.1-2.3.6z"
    />
    <linearGradient
      id="SVGID_00000161605788129515246540000015873270558341515938_"
      gradientUnits="userSpaceOnUse"
      x1={839.192}
      y1={1302.382}
      x2={845.078}
      y2={1302.382}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000161605788129515246540000015873270558341515938_)",
      }}
      d="m842.6 1304.6-2.6-1.5c-.8-.5-1-1.5-.6-2.3.5-.8 1.5-1 2.3-.6l2.6 1.5c.8.5 1 1.5.6 2.3-.5.8-1.5 1-2.3.6z"
    />
    <linearGradient
      id="SVGID_00000061431236187228086190000016218717777084987024_"
      gradientUnits="userSpaceOnUse"
      x1={830.682}
      y1={1297.143}
      x2={836.552}
      y2={1297.143}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000061431236187228086190000016218717777084987024_)",
      }}
      d="m834 1299.4-2.5-1.6c-.8-.5-1-1.5-.5-2.3.5-.8 1.5-1 2.3-.5l2.5 1.6c.8.5 1 1.5.5 2.3-.5.7-1.5.9-2.3.5z"
    />
    <linearGradient
      id="SVGID_00000106849189679105624880000003494993738716107154_"
      gradientUnits="userSpaceOnUse"
      x1={822.271}
      y1={1291.748}
      x2={828.124}
      y2={1291.748}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106849189679105624880000003494993738716107154_)",
      }}
      d="m825.5 1294-2.5-1.6c-.8-.5-1-1.5-.5-2.3.5-.8 1.5-1 2.3-.5l2.5 1.6c.8.5 1 1.5.5 2.3-.5.8-1.5 1-2.3.5z"
    />
    <linearGradient
      id="SVGID_00000060750207687895681520000005958424102310665655_"
      gradientUnits="userSpaceOnUse"
      x1={813.963}
      y1={1286.197}
      x2={819.798}
      y2={1286.197}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000060750207687895681520000005958424102310665655_)",
      }}
      d="m817.2 1288.4-2.5-1.7c-.8-.5-1-1.6-.4-2.3.5-.8 1.6-1 2.3-.4l2.5 1.7c.8.5 1 1.6.4 2.3-.5.8-1.6 1-2.3.4z"
    />
    <linearGradient
      id="SVGID_00000178892016001995786780000000645473304751838091_"
      gradientUnits="userSpaceOnUse"
      x1={805.762}
      y1={1280.489}
      x2={811.577}
      y2={1280.489}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178892016001995786780000000645473304751838091_)",
      }}
      d="m808.9 1282.7-2.4-1.7c-.8-.5-.9-1.6-.4-2.3s1.6-.9 2.3-.4l2.4 1.7c.8.5.9 1.6.4 2.3-.5.8-1.5 1-2.3.4z"
    />
    <linearGradient
      id="SVGID_00000030445523762337475860000001032320034240819387_"
      gradientUnits="userSpaceOnUse"
      x1={797.672}
      y1={1274.627}
      x2={803.466}
      y2={1274.627}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000030445523762337475860000001032320034240819387_)",
      }}
      d="m800.8 1276.9-2.4-1.8c-.8-.6-.9-1.6-.4-2.4.6-.8 1.6-.9 2.4-.4l2.4 1.8c.8.6.9 1.6.4 2.4-.6.8-1.7.9-2.4.4z"
    />
    <linearGradient
      id="SVGID_00000154427316400968955870000006097816889058641536_"
      gradientUnits="userSpaceOnUse"
      x1={789.696}
      y1={1268.61}
      x2={795.469}
      y2={1268.61}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000154427316400968955870000006097816889058641536_)",
      }}
      d="m792.7 1270.9-2.4-1.8c-.7-.6-.9-1.6-.3-2.4.6-.7 1.6-.9 2.4-.3l2.4 1.8c.7.6.9 1.6.3 2.4-.6.7-1.6.8-2.4.3z"
    />
    <linearGradient
      id="SVGID_00000067217904493729217970000017680949674629342358_"
      gradientUnits="userSpaceOnUse"
      x1={781.84}
      y1={1262.438}
      x2={787.59}
      y2={1262.438}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000067217904493729217970000017680949674629342358_)",
      }}
      d="m784.8 1264.7-2.3-1.9c-.7-.6-.9-1.7-.3-2.4.6-.7 1.7-.9 2.4-.3l2.3 1.9c.7.6.9 1.7.3 2.4-.6.8-1.6.9-2.4.3z"
    />
    <linearGradient
      id="SVGID_00000160162870452706440100000009684163783168537485_"
      gradientUnits="userSpaceOnUse"
      x1={774.106}
      y1={1256.114}
      x2={779.832}
      y2={1256.114}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160162870452706440100000009684163783168537485_)",
      }}
      d="m777 1258.4-2.3-1.9c-.7-.6-.8-1.7-.2-2.4.6-.7 1.7-.8 2.4-.2l2.3 1.9c.7.6.8 1.7.2 2.4-.6.7-1.6.8-2.4.2z"
    />
    <linearGradient
      id="SVGID_00000049916135391757104400000001379257855084676779_"
      gradientUnits="userSpaceOnUse"
      x1={766.5}
      y1={1249.639}
      x2={772.2}
      y2={1249.639}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049916135391757104400000001379257855084676779_)",
      }}
      d="m769.4 1251.9-2.3-2c-.7-.6-.8-1.7-.2-2.4.6-.7 1.7-.8 2.4-.2l2.3 2c.7.6.8 1.7.2 2.4-.6.8-1.7.8-2.4.2z"
    />
    <linearGradient
      id="SVGID_00000095297786351561548360000014660439892400316067_"
      gradientUnits="userSpaceOnUse"
      x1={759.025}
      y1={1243.012}
      x2={764.698}
      y2={1243.012}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000095297786351561548360000014660439892400316067_)",
      }}
      d="m761.8 1245.3-2.2-2c-.7-.6-.8-1.7-.1-2.4.6-.7 1.7-.8 2.4-.1l2.2 2c.7.6.8 1.7.1 2.4-.6.7-1.7.7-2.4.1z"
    />
    <linearGradient
      id="SVGID_00000050662113317213257860000012767519904318872240_"
      gradientUnits="userSpaceOnUse"
      x1={751.685}
      y1={1236.237}
      x2={757.33}
      y2={1236.237}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000050662113317213257860000012767519904318872240_)",
      }}
      d="m754.4 1238.5-2.2-2.1c-.7-.7-.7-1.7-.1-2.4s1.7-.7 2.4-.1l2.2 2.1c.7.7.7 1.7.1 2.4s-1.7.8-2.4.1z"
    />
    <linearGradient
      id="SVGID_00000004511227187501281950000002832092050645969562_"
      gradientUnits="userSpaceOnUse"
      x1={744.484}
      y1={1229.314}
      x2={750.1}
      y2={1229.314}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000004511227187501281950000002832092050645969562_)",
      }}
      d="m747.2 1231.6-2.1-2.1c-.7-.7-.7-1.8 0-2.5s1.8-.7 2.5 0l2.1 2.1c.7.7.7 1.8 0 2.5-.8.7-1.9.7-2.5 0z"
    />
    <linearGradient
      id="SVGID_00000020392102311283474040000003098601000899694260_"
      gradientUnits="userSpaceOnUse"
      x1={737.427}
      y1={1222.245}
      x2={743.013}
      y2={1222.245}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000020392102311283474040000003098601000899694260_)",
      }}
      d="m740 1224.5-2.1-2.1c-.7-.7-.7-1.8 0-2.5s1.8-.7 2.5 0l2.1 2.1c.7.7.7 1.8 0 2.5s-1.8.7-2.5 0z"
    />
    <linearGradient
      id="SVGID_00000004545646564154940740000004497831731357725852_"
      gradientUnits="userSpaceOnUse"
      x1={730.517}
      y1={1215.033}
      x2={736.071}
      y2={1215.033}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000004545646564154940740000004497831731357725852_)",
      }}
      d="m733 1217.3-2.1-2.2c-.7-.7-.6-1.8.1-2.5s1.8-.6 2.5.1l2.1 2.2c.7.7.6 1.8-.1 2.5s-1.8.6-2.5-.1z"
    />
    <linearGradient
      id="SVGID_00000141416346280886801910000011080670147621682862_"
      gradientUnits="userSpaceOnUse"
      x1={723.759}
      y1={1207.678}
      x2={729.28}
      y2={1207.678}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000141416346280886801910000011080670147621682862_)",
      }}
      d="m726.2 1210-2-2.2c-.7-.7-.6-1.8.1-2.5s1.8-.6 2.5.1l2 2.2c.6.7.6 1.8-.1 2.5-.7.6-1.8.6-2.5-.1z"
    />
    <linearGradient
      id="SVGID_00000025442654365739451530000000736140008320053388_"
      gradientUnits="userSpaceOnUse"
      x1={717.155}
      y1={1200.184}
      x2={722.643}
      y2={1200.184}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000025442654365739451530000000736140008320053388_)",
      }}
      d="m719.5 1202.5-2-2.3c-.6-.7-.6-1.8.2-2.5.7-.6 1.8-.6 2.5.2l2 2.3c.6.7.6 1.8-.2 2.5s-1.8.5-2.5-.2z"
    />
    <linearGradient
      id="SVGID_00000171721505348206498820000003008394413357140135_"
      gradientUnits="userSpaceOnUse"
      x1={710.711}
      y1={1192.553}
      x2={716.164}
      y2={1192.553}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000171721505348206498820000003008394413357140135_)",
      }}
      d="m713 1194.8-1.9-2.3c-.6-.8-.5-1.9.2-2.5.8-.6 1.9-.5 2.5.2l1.9 2.3c.6.8.5 1.9-.2 2.5-.7.7-1.8.6-2.5-.2z"
    />
    <linearGradient
      id="SVGID_00000168080894240993196870000014379452941279623565_"
      gradientUnits="userSpaceOnUse"
      x1={704.43}
      y1={1184.786}
      x2={709.847}
      y2={1184.786}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168080894240993196870000014379452941279623565_)",
      }}
      d="m706.7 1187.1-1.9-2.3c-.6-.8-.5-1.9.3-2.5.8-.6 1.9-.5 2.5.3l1.9 2.4c.6.8.5 1.9-.3 2.5-.8.5-1.9.3-2.5-.4z"
    />
    <linearGradient
      id="SVGID_00000061461588350293961160000017269304006770222757_"
      gradientUnits="userSpaceOnUse"
      x1={698.315}
      y1={1176.889}
      x2={703.695}
      y2={1176.889}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000061461588350293961160000017269304006770222757_)",
      }}
      d="m700.5 1179.2-1.8-2.4c-.6-.8-.4-1.9.3-2.5.8-.6 1.9-.4 2.5.3l1.8 2.4c.6.8.4 1.9-.3 2.5-.8.6-1.9.4-2.5-.3z"
    />
    <linearGradient
      id="SVGID_00000114074548737177466930000017473524444076579004_"
      gradientUnits="userSpaceOnUse"
      x1={692.37}
      y1={1168.862}
      x2={697.712}
      y2={1168.862}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000114074548737177466930000017473524444076579004_)",
      }}
      d="m694.5 1171.1-1.8-2.4c-.6-.8-.4-1.9.4-2.5.8-.6 1.9-.4 2.5.4l1.8 2.4c.6.8.4 1.9-.4 2.5-.8.6-1.9.4-2.5-.4z"
    />
    <linearGradient
      id="SVGID_00000088812576396917151910000001710789408902426517_"
      gradientUnits="userSpaceOnUse"
      x1={686.599}
      y1={1160.71}
      x2={691.901}
      y2={1160.71}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088812576396917151910000001710789408902426517_)",
      }}
      d="m688.6 1163-1.7-2.5c-.6-.8-.4-1.9.4-2.5.8-.6 1.9-.4 2.5.4l1.7 2.5c.6.8.4 1.9-.5 2.5-.7.6-1.8.4-2.4-.4z"
    />
    <linearGradient
      id="SVGID_00000003815973588045099300000002112800702189779101_"
      gradientUnits="userSpaceOnUse"
      x1={681.003}
      y1={1152.436}
      x2={686.265}
      y2={1152.436}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003815973588045099300000002112800702189779101_)",
      }}
      d="m683 1154.7-1.7-2.5c-.6-.8-.3-1.9.5-2.5.8-.6 1.9-.3 2.5.5l1.7 2.5c.5.8.3 1.9-.5 2.5-.9.5-2 .3-2.5-.5z"
    />
    <linearGradient
      id="SVGID_00000085938253513488514900000013600168773754494359_"
      gradientUnits="userSpaceOnUse"
      x1={675.589}
      y1={1144.042}
      x2={680.809}
      y2={1144.042}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000085938253513488514900000013600168773754494359_)",
      }}
      d="m677.5 1146.3-1.6-2.5c-.5-.8-.3-2 .6-2.5.8-.5 2-.3 2.5.6l1.6 2.5c.5.8.3 2-.6 2.5-.9.5-2 .2-2.5-.6z"
    />
    <linearGradient
      id="SVGID_00000179635351838102376940000013739686803117094579_"
      gradientUnits="userSpaceOnUse"
      x1={670.362}
      y1={1135.531}
      x2={675.539}
      y2={1135.531}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000179635351838102376940000013739686803117094579_)",
      }}
      d="m672.2 1137.8-1.5-2.6c-.5-.9-.2-2 .6-2.5.9-.5 2-.2 2.5.6l1.5 2.6c.5.9.2 2-.6 2.5-.9.5-2 .2-2.5-.6z"
    />
    <linearGradient
      id="SVGID_00000173152161481587254790000003602606525585275303_"
      gradientUnits="userSpaceOnUse"
      x1={665.326}
      y1={1126.905}
      x2={670.458}
      y2={1126.905}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000173152161481587254790000003602606525585275303_)",
      }}
      d="m667.1 1129.1-1.5-2.6c-.5-.9-.2-2 .7-2.5.9-.5 2-.2 2.5.7l1.5 2.6c.5.9.2 2-.7 2.5-.9.5-2 .2-2.5-.7z"
    />
    <linearGradient
      id="SVGID_00000027600167233272617310000005353750940880850845_"
      gradientUnits="userSpaceOnUse"
      x1={660.481}
      y1={1118.169}
      x2={665.569}
      y2={1118.169}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000027600167233272617310000005353750940880850845_)",
      }}
      d="m662.1 1120.4-1.4-2.6c-.5-.9-.2-2 .7-2.5.9-.5 2-.2 2.5.7l1.4 2.6c.5.9.2 2-.7 2.5-.9.5-2 .1-2.5-.7z"
    />
    <linearGradient
      id="SVGID_00000141450325627462105880000017673417078716474243_"
      gradientUnits="userSpaceOnUse"
      x1={655.828}
      y1={1109.329}
      x2={660.871}
      y2={1109.329}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000141450325627462105880000017673417078716474243_)",
      }}
      d="m657.4 1111.5-1.4-2.7c-.5-.9-.1-2 .8-2.5s2-.1 2.5.8l1.4 2.7c.5.9.1 2-.8 2.5s-2 .1-2.5-.8z"
    />
    <linearGradient
      id="SVGID_00000153663790778277429700000011545136117773093549_"
      gradientUnits="userSpaceOnUse"
      x1={651.368}
      y1={1100.39}
      x2={656.367}
      y2={1100.39}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000153663790778277429700000011545136117773093549_)",
      }}
      d="m652.9 1102.5-1.3-2.7c-.4-.9-.1-2 .8-2.5.9-.4 2-.1 2.5.8l1.3 2.7c.4.9.1 2-.8 2.5-1 .5-2.1.2-2.5-.8z"
    />
    <linearGradient
      id="SVGID_00000017497444166678235140000013589501941546990987_"
      gradientUnits="userSpaceOnUse"
      x1={647.102}
      y1={1091.357}
      x2={652.056}
      y2={1091.357}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000017497444166678235140000013589501941546990987_)",
      }}
      d="m648.5 1093.5-1.3-2.7c-.4-.9 0-2 .9-2.5.9-.4 2 0 2.5.9l1.3 2.7c.4.9 0 2-.9 2.5-.9.4-2 0-2.5-.9z"
    />
    <linearGradient
      id="SVGID_00000118397979255120146870000017248233344966073216_"
      gradientUnits="userSpaceOnUse"
      x1={643.03}
      y1={1082.234}
      x2={647.939}
      y2={1082.234}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000118397979255120146870000017248233344966073216_)",
      }}
      d="m644.4 1084.4-1.2-2.8c-.4-.9 0-2 1-2.4.9-.4 2 0 2.4 1l1.2 2.8c.4.9 0 2-1 2.4-.9.3-2-.1-2.4-1z"
    />
    <linearGradient
      id="SVGID_00000024706004806180566840000001317912361847121572_"
      gradientUnits="userSpaceOnUse"
      x1={639.154}
      y1={1073.025}
      x2={644.017}
      y2={1073.025}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000024706004806180566840000001317912361847121572_)",
      }}
      d="m640.4 1075.1-1.1-2.8c-.4-1 .1-2 1-2.4 1-.4 2 .1 2.4 1l1.1 2.8c.4 1-.1 2-1 2.4-.9.4-2 0-2.4-1z"
    />
    <linearGradient
      id="SVGID_00000022547673810433354520000004126123087958866106_"
      gradientUnits="userSpaceOnUse"
      x1={635.472}
      y1={1063.737}
      x2={640.289}
      y2={1063.737}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000022547673810433354520000004126123087958866106_)",
      }}
      d="m636.7 1065.8-1.1-2.8c-.4-1 .1-2 1.1-2.4 1-.4 2 .1 2.4 1.1l1.1 2.8c.4 1-.1 2-1.1 2.4-1 .3-2-.1-2.4-1.1z"
    />
    <linearGradient
      id="SVGID_00000131361665236276039770000001055946617870552987_"
      gradientUnits="userSpaceOnUse"
      x1={631.986}
      y1={1054.373}
      x2={636.758}
      y2={1054.373}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000131361665236276039770000001055946617870552987_)",
      }}
      d="m633.1 1056.4-1-2.8c-.4-1 .1-2 1.1-2.4 1-.4 2 .1 2.4 1.1l1 2.8c.4 1-.2 2-1.1 2.4-1 .4-2-.1-2.4-1.1z"
    />
    <linearGradient
      id="SVGID_00000093171744707927766640000011222066962675947441_"
      gradientUnits="userSpaceOnUse"
      x1={628.697}
      y1={1044.938}
      x2={633.423}
      y2={1044.938}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093171744707927766640000011222066962675947441_)",
      }}
      d="m629.8 1047-1-2.8c-.3-1 .2-2.1 1.2-2.4 1-.3 2.1.2 2.4 1.2l1 2.8c.3 1-.2 2-1.2 2.4-1 .3-2.1-.3-2.4-1.2z"
    />
    <linearGradient
      id="SVGID_00000030444851894788056090000015099097648255539351_"
      gradientUnits="userSpaceOnUse"
      x1={625.604}
      y1={1035.436}
      x2={630.284}
      y2={1035.436}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000030444851894788056090000015099097648255539351_)",
      }}
      d="m626.6 1037.4-.9-2.9c-.3-1 .2-2.1 1.2-2.4s2.1.2 2.4 1.2l.9 2.9c.3 1-.2 2.1-1.2 2.4-1 .4-2.1-.2-2.4-1.2z"
    />
    <linearGradient
      id="SVGID_00000129183634440670660440000014192465968778360499_"
      gradientUnits="userSpaceOnUse"
      x1={622.707}
      y1={1025.871}
      x2={627.342}
      y2={1025.871}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129183634440670660440000014192465968778360499_)",
      }}
      d="m623.6 1027.8-.8-2.9c-.3-1 .3-2.1 1.3-2.4 1-.3 2.1.3 2.4 1.3l.8 2.9c.3 1-.3 2.1-1.3 2.3-1 .4-2.1-.2-2.4-1.2z"
    />
    <linearGradient
      id="SVGID_00000154405266389234745200000000100618805424090784_"
      gradientUnits="userSpaceOnUse"
      x1={620.008}
      y1={1016.249}
      x2={624.596}
      y2={1016.249}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000154405266389234745200000000100618805424090784_)",
      }}
      d="m620.9 1018.2-.8-2.9c-.3-1 .3-2.1 1.3-2.3 1-.3 2.1.3 2.3 1.3l.8 2.9c.3 1-.3 2.1-1.3 2.3-1 .3-2.1-.3-2.3-1.3z"
    />
    <linearGradient
      id="SVGID_00000049926573413807319280000009696735289184603581_"
      gradientUnits="userSpaceOnUse"
      x1={617.506}
      y1={1006.573}
      x2={622.048}
      y2={1006.573}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049926573413807319280000009696735289184603581_)",
      }}
      d="m618.3 1008.5-.7-2.9c-.3-1 .4-2.1 1.4-2.3 1-.3 2.1.4 2.3 1.4l.7 2.9c.3 1-.4 2.1-1.4 2.3-1 .2-2.1-.4-2.3-1.4z"
    />
    <linearGradient
      id="SVGID_00000044159464009968798890000017026078645300336273_"
      gradientUnits="userSpaceOnUse"
      x1={615.201}
      y1={996.848}
      x2={619.697}
      y2={996.848}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044159464009968798890000017026078645300336273_)",
      }}
      d="m615.9 998.7-.7-2.9c-.2-1 .4-2.1 1.4-2.3 1-.2 2.1.4 2.3 1.4l.7 2.9c.2 1-.4 2.1-1.4 2.3-1 .3-2-.3-2.3-1.4z"
    />
    <linearGradient
      id="SVGID_00000100371811896323292020000016162528911853805716_"
      gradientUnits="userSpaceOnUse"
      x1={613.093}
      y1={987.078}
      x2={617.543}
      y2={987.078}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000100371811896323292020000016162528911853805716_)",
      }}
      d="m613.7 988.9-.6-2.9c-.2-1 .5-2.1 1.5-2.3 1-.2 2.1.5 2.3 1.5l.6 2.9c.2 1-.5 2.1-1.5 2.3-1 .2-2-.4-2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000073680866306886681980000002324284804472885432_"
      gradientUnits="userSpaceOnUse"
      x1={611.184}
      y1={977.267}
      x2={615.587}
      y2={977.267}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000073680866306886681980000002324284804472885432_)",
      }}
      d="m611.8 979.1-.6-2.9c-.2-1 .5-2.1 1.5-2.2 1-.2 2.1.5 2.2 1.5l.5 2.9c.2 1-.5 2-1.5 2.2-.9.2-1.9-.5-2.1-1.5z"
    />
    <linearGradient
      id="SVGID_00000093178461634275449350000004716366980061395082_"
      gradientUnits="userSpaceOnUse"
      x1={609.472}
      y1={967.419}
      x2={613.829}
      y2={967.419}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093178461634275449350000004716366980061395082_)",
      }}
      d="m610 969.2-.5-3c-.2-1.1.5-2 1.6-2.2 1.1-.2 2 .5 2.2 1.6l.5 3c.2 1.1-.5 2-1.6 2.2-1 .2-2-.5-2.2-1.6z"
    />
    <linearGradient
      id="SVGID_00000041273372223596194900000014541835900888298915_"
      gradientUnits="userSpaceOnUse"
      x1={607.958}
      y1={957.539}
      x2={612.269}
      y2={957.539}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000041273372223596194900000014541835900888298915_)",
      }}
      d="m608.4 959.3-.4-3c-.2-1.1.6-2 1.6-2.2 1.1-.2 2 .6 2.2 1.6l.4 3c.2 1.1-.6 2-1.6 2.2-1.1.2-2-.5-2.2-1.6z"
    />
    <linearGradient
      id="SVGID_00000031914801083475819420000000681820904554559903_"
      gradientUnits="userSpaceOnUse"
      x1={606.643}
      y1={947.63}
      x2={610.907}
      y2={947.63}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000031914801083475819420000000681820904554559903_)",
      }}
      d="m607 949.4-.4-3c-.1-1.1.6-2 1.7-2.2 1.1-.1 2 .6 2.2 1.7l.4 3c.1 1.1-.6 2-1.7 2.2-1.1.1-2-.7-2.2-1.7z"
    />
    <linearGradient
      id="SVGID_00000011712470249366162630000013998081914996652946_"
      gradientUnits="userSpaceOnUse"
      x1={605.526}
      y1={937.695}
      x2={609.743}
      y2={937.695}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000011712470249366162630000013998081914996652946_)",
      }}
      d="m605.9 939.4-.3-3c-.1-1.1.7-2 1.7-2.1 1.1-.1 2 .7 2.1 1.7l.3 3c.1 1.1-.7 2-1.7 2.1-1.1.1-2-.6-2.1-1.7z"
    />
    <linearGradient
      id="SVGID_00000060013137952731021690000017183992947000078481_"
      gradientUnits="userSpaceOnUse"
      x1={604.607}
      y1={927.739}
      x2={608.778}
      y2={927.739}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000060013137952731021690000017183992947000078481_)",
      }}
      d="m604.9 929.4-.3-3c-.1-1.1.7-2 1.8-2.1 1.1-.1 2 .7 2.1 1.8l.3 3c.1 1.1-.7 2-1.8 2.1-1.1.1-2-.7-2.1-1.8z"
    />
    <linearGradient
      id="SVGID_00000087370989080979073440000007800955404207959209_"
      gradientUnits="userSpaceOnUse"
      x1={603.887}
      y1={917.766}
      x2={608.011}
      y2={917.766}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000087370989080979073440000007800955404207959209_)",
      }}
      d="m604.1 919.4-.2-3c-.1-1.1.8-2 1.8-2.1 1.1-.1 2 .8 2.1 1.8l.2 3c.1 1.1-.8 2-1.8 2.1-1.1.1-2-.7-2.1-1.8z"
    />
    <linearGradient
      id="SVGID_00000037674071849957248800000008820613014407564188_"
      gradientUnits="userSpaceOnUse"
      x1={603.367}
      y1={907.78}
      x2={607.444}
      y2={907.78}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000037674071849957248800000008820613014407564188_)",
      }}
      d="m603.5 909.4-.1-3c0-1.1.8-2 1.9-2.1 1.1 0 2 .8 2.1 1.9l.1 3c0 1.1-.8 2-1.9 2.1-1.1 0-2-.8-2.1-1.9z"
    />
    <linearGradient
      id="SVGID_00000105396106226584948740000013129822819552907138_"
      gradientUnits="userSpaceOnUse"
      x1={603.045}
      y1={897.786}
      x2={607.076}
      y2={897.786}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000105396106226584948740000013129822819552907138_)",
      }}
      d="m603.1 899.3-.1-3c0-1.1.8-2 1.9-2 1.1 0 2 .8 2 1.9l.1 3c0 1.1-.8 2-1.9 2-1 .1-2-.8-2-1.9z"
    />
    <linearGradient
      id="SVGID_00000151522719125017386570000011791351964324133514_"
      gradientUnits="userSpaceOnUse"
      x1={602.924}
      y1={887.786}
      x2={606.907}
      y2={887.786}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000151522719125017386570000011791351964324133514_)",
      }}
      d="M602.9 889.3v-3c0-1.1.9-2 2-2s2 .9 2 2v3c0 1.1-.9 2-2 2s-2-.9-2-2z"
    />
    <linearGradient
      id="SVGID_00000147930453471957639400000015559155965603448450_"
      gradientUnits="userSpaceOnUse"
      x1={602.958}
      y1={877.785}
      x2={606.987}
      y2={877.785}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147930453471957639400000015559155965603448450_)",
      }}
      d="M603 879.3v-3c0-1.1.9-2 2-2s2 .9 2 2v3c0 1.1-.9 2-2 2-1.2 0-2.1-.9-2-2z"
    />
    <linearGradient
      id="SVGID_00000008857918400673263420000008448799767440425644_"
      gradientUnits="userSpaceOnUse"
      x1={603.176}
      y1={867.788}
      x2={607.279}
      y2={867.788}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008857918400673263420000008448799767440425644_)",
      }}
      d="m603.2 869.2.1-3c0-1.1 1-2 2.1-1.9 1.1 0 2 1 1.9 2.1l-.1 3c0 1.1-1 2-2.1 1.9-1.1-.1-2-1-1.9-2.1z"
    />
    <linearGradient
      id="SVGID_00000041254270368883044330000008063387153963020200_"
      gradientUnits="userSpaceOnUse"
      x1={603.595}
      y1={857.798}
      x2={607.771}
      y2={857.798}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000041254270368883044330000008063387153963020200_)",
      }}
      d="m603.6 859.2.2-3c.1-1.1 1-2 2.1-1.9 1.1.1 2 1 1.9 2.1l-.2 3c-.1 1.1-1 2-2.1 1.9-1.1-.1-2-1-1.9-2.1z"
    />
    <linearGradient
      id="SVGID_00000038404445070466533670000010369308812308643757_"
      gradientUnits="userSpaceOnUse"
      x1={604.215}
      y1={847.818}
      x2={608.465}
      y2={847.818}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000038404445070466533670000010369308812308643757_)",
      }}
      d="m604.2 849.2.2-3c.1-1.1 1-1.9 2.2-1.9 1.1.1 1.9 1 1.9 2.2l-.2 3c-.1 1.1-1.1 1.9-2.2 1.9-1.1-.2-2-1.1-1.9-2.2z"
    />
    <linearGradient
      id="SVGID_00000129918161216176536190000016234154836780945812_"
      gradientUnits="userSpaceOnUse"
      x1={605.036}
      y1={837.855}
      x2={609.359}
      y2={837.855}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129918161216176536190000016234154836780945812_)",
      }}
      d="m605 839.2.3-3c.1-1.1 1.1-1.9 2.2-1.8 1.1.1 1.9 1.1 1.8 2.2l-.3 3c-.1 1.1-1.1 1.9-2.2 1.8-1.1-.2-1.9-1.1-1.8-2.2z"
    />
    <linearGradient
      id="SVGID_00000047753051913104088990000000576928500774581635_"
      gradientUnits="userSpaceOnUse"
      x1={606.058}
      y1={827.911}
      x2={610.455}
      y2={827.911}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000047753051913104088990000000576928500774581635_)",
      }}
      d="m606.1 829.2.3-3c.1-1.1 1.1-1.9 2.2-1.8 1.1.1 1.9 1.1 1.8 2.2l-.3 3c-.1 1.1-1.1 1.9-2.2 1.8-1.2-.1-2-1.1-1.8-2.2z"
    />
    <linearGradient
      id="SVGID_00000011740888658145624510000002474439357867210935_"
      gradientUnits="userSpaceOnUse"
      x1={607.282}
      y1={817.99}
      x2={611.753}
      y2={817.99}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000011740888658145624510000002474439357867210935_)",
      }}
      d="m607.3 819.2.4-3c.2-1.1 1.2-1.9 2.3-1.7 1.1.2 1.9 1.2 1.7 2.3l-.4 3c-.2 1.1-1.2 1.9-2.3 1.7-1.1-.2-1.9-1.2-1.7-2.3z"
    />
    <linearGradient
      id="SVGID_00000019658670721313675800000017486773537157037442_"
      gradientUnits="userSpaceOnUse"
      x1={608.708}
      y1={808.097}
      x2={613.253}
      y2={808.097}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000019658670721313675800000017486773537157037442_)",
      }}
      d="m608.7 809.3.5-3c.2-1.1 1.2-1.9 2.3-1.7 1.1.2 1.9 1.2 1.7 2.3l-.5 3c-.2 1.1-1.2 1.9-2.3 1.7-1.1-.2-1.8-1.2-1.7-2.3z"
    />
    <linearGradient
      id="SVGID_00000178921440931132382100000005260054761868755842_"
      gradientUnits="userSpaceOnUse"
      x1={610.337}
      y1={798.238}
      x2={614.956}
      y2={798.238}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178921440931132382100000005260054761868755842_)",
      }}
      d="m610.4 799.4.5-3c.2-1.1 1.3-1.9 2.4-1.7 1.1.2 1.9 1.3 1.7 2.4l-.5 3c-.2 1.1-1.3 1.8-2.4 1.6-1.2-.2-1.9-1.2-1.7-2.3z"
    />
    <linearGradient
      id="SVGID_00000096031834695250776100000002070850099666870149_"
      gradientUnits="userSpaceOnUse"
      x1={612.168}
      y1={788.415}
      x2={616.861}
      y2={788.415}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000096031834695250776100000002070850099666870149_)",
      }}
      d="m612.2 789.5.6-2.9c.2-1.1 1.3-1.8 2.4-1.6 1.1.2 1.8 1.3 1.6 2.4l-.6 2.9c-.2 1.1-1.3 1.8-2.4 1.6-1.1-.2-1.8-1.3-1.6-2.4z"
    />
    <linearGradient
      id="SVGID_00000116204377166443780630000006599737170410433161_"
      gradientUnits="userSpaceOnUse"
      x1={614.203}
      y1={778.633}
      x2={618.97}
      y2={778.633}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116204377166443780630000006599737170410433161_)",
      }}
      d="m614.3 779.7.6-2.9c.2-1.1 1.3-1.8 2.5-1.6 1.1.2 1.8 1.3 1.6 2.5l-.7 2.9c-.2 1.1-1.3 1.8-2.5 1.6-1.1-.3-1.8-1.4-1.5-2.5z"
    />
    <linearGradient
      id="SVGID_00000120519421158706643570000004950807009149849533_"
      gradientUnits="userSpaceOnUse"
      x1={616.44}
      y1={768.895}
      x2={621.282}
      y2={768.895}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000120519421158706643570000004950807009149849533_)",
      }}
      d="m616.5 769.9.7-2.9c.3-1.1 1.4-1.8 2.5-1.5 1.1.3 1.8 1.4 1.5 2.5l-.7 2.9c-.3 1.1-1.4 1.8-2.5 1.5-1.1-.3-1.8-1.4-1.5-2.5z"
    />
    <linearGradient
      id="SVGID_00000016794184811060631610000004071361037277820083_"
      gradientUnits="userSpaceOnUse"
      x1={618.881}
      y1={759.208}
      x2={623.797}
      y2={759.208}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016794184811060631610000004071361037277820083_)",
      }}
      d="m619 760.1.8-2.9c.3-1.1 1.4-1.8 2.5-1.5 1.1.3 1.8 1.4 1.5 2.5l-.8 2.9c-.3 1.1-1.4 1.8-2.5 1.5-1.2-.2-1.8-1.4-1.5-2.5z"
    />
    <linearGradient
      id="SVGID_00000085965498418021830790000015026965668739858834_"
      gradientUnits="userSpaceOnUse"
      x1={621.526}
      y1={749.575}
      x2={626.516}
      y2={749.575}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000085965498418021830790000015026965668739858834_)",
      }}
      d="m621.6 750.4.8-2.9c.3-1.1 1.5-1.7 2.6-1.4 1.1.3 1.7 1.5 1.4 2.6l-.8 2.9c-.3 1.1-1.5 1.7-2.6 1.4-1.1-.3-1.7-1.5-1.4-2.6z"
    />
    <linearGradient
      id="SVGID_00000116226499840715662050000005937341098115248807_"
      gradientUnits="userSpaceOnUse"
      x1={624.374}
      y1={740.002}
      x2={629.439}
      y2={740.002}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116226499840715662050000005937341098115248807_)",
      }}
      d="m624.5 740.8.9-2.9c.3-1.1 1.5-1.7 2.6-1.4 1.1.3 1.7 1.5 1.4 2.6l-.9 2.9c-.3 1.1-1.5 1.7-2.6 1.4-1.2-.3-1.8-1.5-1.4-2.6z"
    />
    <linearGradient
      id="SVGID_00000083795233829471841000000013719427096204165289_"
      gradientUnits="userSpaceOnUse"
      x1={627.427}
      y1={730.49}
      x2={632.567}
      y2={730.49}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083795233829471841000000013719427096204165289_)",
      }}
      d="m627.5 731.2 1-2.9c.4-1.1 1.6-1.7 2.6-1.3 1.1.4 1.7 1.6 1.3 2.6l-1 2.8c-.4 1.1-1.6 1.7-2.6 1.3-1-.2-1.6-1.4-1.3-2.5z"
    />
    <linearGradient
      id="SVGID_00000164499498395791341570000004706391243016439199_"
      gradientUnits="userSpaceOnUse"
      x1={630.682}
      y1={721.048}
      x2={635.894}
      y2={721.048}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000164499498395791341570000004706391243016439199_)",
      }}
      d="m630.8 721.8 1-2.8c.4-1.1 1.6-1.7 2.7-1.3 1.1.4 1.7 1.6 1.3 2.7l-1 2.8c-.4 1.1-1.6 1.7-2.7 1.3-1.1-.5-1.7-1.7-1.3-2.7z"
    />
    <linearGradient
      id="SVGID_00000062166136638459807560000002850455076458824624_"
      gradientUnits="userSpaceOnUse"
      x1={634.136}
      y1={711.677}
      x2={639.42}
      y2={711.677}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062166136638459807560000002850455076458824624_)",
      }}
      d="m634.3 712.3 1.1-2.8c.4-1.1 1.6-1.6 2.7-1.2 1.1.4 1.6 1.6 1.2 2.7l-1.1 2.8c-.4 1.1-1.6 1.6-2.7 1.2-1.1-.4-1.6-1.6-1.2-2.7z"
    />
    <linearGradient
      id="SVGID_00000144317761763638583510000001463679795796202648_"
      gradientUnits="userSpaceOnUse"
      x1={637.786}
      y1={702.382}
      x2={643.141}
      y2={702.382}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000144317761763638583510000001463679795796202648_)",
      }}
      d="m637.9 703 1.1-2.8c.4-1.1 1.7-1.6 2.8-1.2 1.1.4 1.6 1.7 1.2 2.8l-1.1 2.8c-.4 1.1-1.7 1.6-2.8 1.2-1.1-.5-1.6-1.7-1.2-2.8z"
    />
    <linearGradient
      id="SVGID_00000064324995374410915080000006449412119412164742_"
      gradientUnits="userSpaceOnUse"
      x1={641.629}
      y1={693.165}
      x2={647.055}
      y2={693.165}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000064324995374410915080000006449412119412164742_)",
      }}
      d="m641.8 693.7 1.2-2.8c.5-1.1 1.7-1.6 2.8-1.1 1.1.5 1.6 1.7 1.1 2.8l-1.2 2.8c-.5 1.1-1.7 1.6-2.8 1.1-1.1-.5-1.6-1.7-1.1-2.8z"
    />
    <linearGradient
      id="SVGID_00000118391892532344212800000001518037497434279598_"
      gradientUnits="userSpaceOnUse"
      x1={645.662}
      y1={684.03}
      x2={651.158}
      y2={684.03}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000118391892532344212800000001518037497434279598_)",
      }}
      d="m645.9 684.5 1.2-2.7c.5-1.1 1.7-1.5 2.8-1 1.1.5 1.5 1.7 1 2.8l-1.3 2.7c-.5 1.1-1.7 1.5-2.8 1-1-.5-1.4-1.7-.9-2.8z"
    />
    <linearGradient
      id="SVGID_00000087370077725418738550000001044414795053100166_"
      gradientUnits="userSpaceOnUse"
      x1={649.884}
      y1={674.981}
      x2={655.444}
      y2={674.981}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000087370077725418738550000001044414795053100166_)",
      }}
      d="m650.1 675.4 1.3-2.7c.5-1.1 1.8-1.5 2.8-1 1.1.5 1.5 1.8 1 2.8l-1.3 2.7c-.5 1.1-1.8 1.5-2.8 1-1.1-.5-1.5-1.7-1-2.8z"
    />
    <linearGradient
      id="SVGID_00000163047643926801363900000016691486950354809746_"
      gradientUnits="userSpaceOnUse"
      x1={654.293}
      y1={666.021}
      x2={659.912}
      y2={666.021}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163047643926801363900000016691486950354809746_)",
      }}
      d="m654.5 666.4 1.4-2.7c.5-1 1.8-1.5 2.9-.9 1 .5 1.5 1.8.9 2.9l-1.4 2.7c-.5 1-1.8 1.5-2.9.9-1-.6-1.4-1.9-.9-2.9z"
    />
    <linearGradient
      id="SVGID_00000134236449977289107980000011705877393042896514_"
      gradientUnits="userSpaceOnUse"
      x1={658.884}
      y1={657.152}
      x2={664.561}
      y2={657.152}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000134236449977289107980000011705877393042896514_)",
      }}
      d="M660 660.4c-1-.6-1.4-1.8-.9-2.9l1.4-2.6c.6-1 1.8-1.4 2.9-.9 1 .6 1.4 1.8.9 2.9l-1.4 2.6c-.6 1-1.8 1.4-2.9.9z"
    />
    <linearGradient
      id="SVGID_00000000214378301490717670000011179149327742317721_"
      gradientUnits="userSpaceOnUse"
      x1={663.653}
      y1={648.378}
      x2={669.387}
      y2={648.378}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000000214378301490717670000011179149327742317721_)",
      }}
      d="M664.7 651.5c-1-.6-1.4-1.9-.8-2.9l1.5-2.6c.6-1 1.9-1.4 2.9-.8 1 .6 1.4 1.9.8 2.9l-1.5 2.6c-.5 1.1-1.8 1.4-2.9.8z"
    />
    <linearGradient
      id="SVGID_00000023243068428449263630000000058288359249810561_"
      gradientUnits="userSpaceOnUse"
      x1={668.597}
      y1={639.702}
      x2={674.387}
      y2={639.702}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000023243068428449263630000000058288359249810561_)",
      }}
      d="M669.7 642.8c-1-.6-1.4-1.9-.8-2.9l1.5-2.6c.6-1 1.9-1.4 2.9-.8 1 .6 1.4 1.9.8 2.9l-1.5 2.6c-.6 1.1-1.9 1.4-2.9.8z"
    />
    <linearGradient
      id="SVGID_00000121991724886384719050000016499884890096628110_"
      gradientUnits="userSpaceOnUse"
      x1={673.713}
      y1={631.127}
      x2={679.559}
      y2={631.127}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121991724886384719050000016499884890096628110_)",
      }}
      d="M674.7 634.2c-1-.6-1.3-1.9-.7-2.9l1.6-2.6c.6-1 1.9-1.3 2.9-.7 1 .6 1.3 1.9.7 2.9l-1.6 2.6c-.5 1-1.9 1.3-2.9.7z"
    />
    <linearGradient
      id="SVGID_00000108988984588226698390000012545568922665733012_"
      gradientUnits="userSpaceOnUse"
      x1={678.999}
      y1={622.655}
      x2={684.899}
      y2={622.655}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000108988984588226698390000012545568922665733012_)",
      }}
      d="M680 625.7c-1-.6-1.3-2-.6-3l1.6-2.5c.6-1 2-1.3 3-.6 1 .6 1.3 2 .6 3l-1.6 2.5c-.7 1-2 1.3-3 .6z"
    />
    <linearGradient
      id="SVGID_00000059294009151137220360000017037069744273869467_"
      gradientUnits="userSpaceOnUse"
      x1={684.451}
      y1={614.29}
      x2={690.405}
      y2={614.29}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000059294009151137220360000017037069744273869467_)",
      }}
      d="m684.8 614.3 1.7-2.5c.7-1 2-1.2 3-.6 1 .7 1.2 2 .6 3l-1.7 2.5c-.7 1-2 1.2-3 .6s-1.2-2-.6-3z"
    />
    <linearGradient
      id="SVGID_00000078741765818751517130000002225352530679482263_"
      gradientUnits="userSpaceOnUse"
      x1={690.067}
      y1={606.033}
      x2={696.073}
      y2={606.033}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000078741765818751517130000002225352530679482263_)",
      }}
      d="m690.5 606 1.7-2.5c.7-1 2-1.2 3-.5s1.2 2 .5 3l-1.7 2.5c-.7 1-2 1.2-3 .5s-1.2-2-.5-3z"
    />
    <linearGradient
      id="SVGID_00000116220174453539191010000017886395743828117890_"
      gradientUnits="userSpaceOnUse"
      x1={695.843}
      y1={597.889}
      x2={701.901}
      y2={597.889}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116220174453539191010000017886395743828117890_)",
      }}
      d="m696.3 597.8 1.8-2.4c.7-1 2-1.2 3-.5s1.2 2 .5 3l-1.8 2.4c-.7 1-2 1.2-3 .5s-1.2-2-.5-3z"
    />
    <linearGradient
      id="SVGID_00000138570291710359521970000011682981646409936039_"
      gradientUnits="userSpaceOnUse"
      x1={701.777}
      y1={589.859}
      x2={707.885}
      y2={589.859}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000138570291710359521970000011682981646409936039_)",
      }}
      d="m702.2 589.8 1.8-2.4c.7-.9 2.1-1.1 3-.4.9.7 1.1 2.1.4 3l-1.8 2.4c-.7.9-2.1 1.1-3 .4-.9-.7-1.1-2.1-.4-3z"
    />
    <linearGradient
      id="SVGID_00000034782847044915584540000004452383985222452415_"
      gradientUnits="userSpaceOnUse"
      x1={707.866}
      y1={581.946}
      x2={714.024}
      y2={581.946}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000034782847044915584540000004452383985222452415_)",
      }}
      d="m708.3 581.8 1.9-2.4c.7-.9 2.1-1.1 3-.4s1.1 2.1.4 3l-1.9 2.4c-.7.9-2.1 1.1-3 .4-.9-.7-1.1-2.1-.4-3z"
    />
    <linearGradient
      id="SVGID_00000116236567624943880210000016556555620841364410_"
      gradientUnits="userSpaceOnUse"
      x1={714.106}
      y1={574.152}
      x2={720.314}
      y2={574.152}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116236567624943880210000016556555620841364410_)",
      }}
      d="m714.6 573.9 1.9-2.3c.8-.9 2.1-1.1 3-.3.9.8 1.1 2.1.3 3l-1.9 2.3c-.8.9-2.1 1.1-3 .3-.9-.7-1.1-2-.3-3z"
    />
    <linearGradient
      id="SVGID_00000070112566126364503200000012422577628339958401_"
      gradientUnits="userSpaceOnUse"
      x1={720.496}
      y1={566.48}
      x2={726.752}
      y2={566.48}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070112566126364503200000012422577628339958401_)",
      }}
      d="m721 566.2 1.9-2.3c.8-.9 2.1-1 3-.2.9.8 1 2.1.2 3l-1.9 2.3c-.8.9-2.1 1-3 .2-.9-.7-1-2.1-.2-3z"
    />
    <linearGradient
      id="SVGID_00000076601261890166941340000013002814420829912758_"
      gradientUnits="userSpaceOnUse"
      x1={727.032}
      y1={558.933}
      x2={733.335}
      y2={558.933}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000076601261890166941340000013002814420829912758_)",
      }}
      d="m727.6 558.6 2-2.2c.8-.9 2.2-1 3-.2.9.8 1 2.2.2 3l-2 2.2c-.8.9-2.2 1-3 .2-.9-.7-1-2.1-.2-3z"
    />
    <linearGradient
      id="SVGID_00000029763529265343475630000008485558607464375440_"
      gradientUnits="userSpaceOnUse"
      x1={733.712}
      y1={551.513}
      x2={740.061}
      y2={551.513}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000029763529265343475630000008485558607464375440_)",
      }}
      d="m734.3 551.2 2-2.2c.8-.9 2.2-.9 3.1-.1.9.8.9 2.2.1 3.1l-2 2.2c-.8.9-2.2.9-3 .1-1-.9-1-2.3-.2-3.1z"
    />
    <linearGradient
      id="SVGID_00000057107695650755395160000016616758171952385976_"
      gradientUnits="userSpaceOnUse"
      x1={740.531}
      y1={544.222}
      x2={746.927}
      y2={544.222}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000057107695650755395160000016616758171952385976_)",
      }}
      d="m741.1 543.8 2.1-2.2c.8-.9 2.2-.9 3.1-.1.9.8.9 2.2.1 3.1l-2.1 2.2c-.8.9-2.2.9-3.1.1-.9-.9-.9-2.2-.1-3.1z"
    />
    <linearGradient
      id="SVGID_00000027569278595505058290000003078923655447371694_"
      gradientUnits="userSpaceOnUse"
      x1={747.49}
      y1={537.063}
      x2={753.931}
      y2={537.063}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000027569278595505058290000003078923655447371694_)",
      }}
      d="m748.1 536.6 2.1-2.1c.8-.8 2.2-.9 3.1 0 .8.8.9 2.2 0 3.1l-2.1 2.1c-.8.8-2.2.9-3.1 0-.8-.9-.8-2.2 0-3.1z"
    />
    <linearGradient
      id="SVGID_00000174574048594590987720000011373128453503872916_"
      gradientUnits="userSpaceOnUse"
      x1={754.585}
      y1={530.037}
      x2={761.07}
      y2={530.037}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000174574048594590987720000011373128453503872916_)",
      }}
      d="m755.2 529.5 2.2-2.1c.9-.8 2.2-.8 3.1 0 .8.9.8 2.2 0 3.1l-2.2 2.1c-.9.8-2.2.8-3.1 0-.8-.9-.8-2.2 0-3.1z"
    />
    <linearGradient
      id="SVGID_00000075134889443715577330000016139977306043636370_"
      gradientUnits="userSpaceOnUse"
      x1={761.813}
      y1={523.148}
      x2={768.342}
      y2={523.148}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000075134889443715577330000016139977306043636370_)",
      }}
      d="m762.5 522.6 2.2-2c.9-.8 2.2-.8 3.1.1.8.9.8 2.2-.1 3.1l-2.2 2c-.9.8-2.2.8-3.1-.1-.8-.9-.8-2.3.1-3.1z"
    />
    <linearGradient
      id="SVGID_00000176755539987480301880000002689881787785183660_"
      gradientUnits="userSpaceOnUse"
      x1={769.17}
      y1={516.399}
      x2={775.743}
      y2={516.399}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000176755539987480301880000002689881787785183660_)",
      }}
      d="m769.9 515.8 2.2-2c.9-.8 2.3-.7 3.1.2.8.9.7 2.3-.2 3.1l-2.2 2c-.9.8-2.3.7-3.1-.2-.8-.9-.7-2.3.2-3.1z"
    />
    <linearGradient
      id="SVGID_00000144305833176915625560000017962951729118615208_"
      gradientUnits="userSpaceOnUse"
      x1={776.656}
      y1={509.79}
      x2={783.27}
      y2={509.79}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000144305833176915625560000017962951729118615208_)",
      }}
      d="m777.4 509.1 2.3-2c.9-.8 2.3-.7 3.1.2.8.9.7 2.3-.2 3.1l-2.3 2c-.9.8-2.3.7-3.1-.2-.8-.9-.7-2.3.2-3.1z"
    />
    <linearGradient
      id="SVGID_00000034770255556526821430000012305820118778919581_"
      gradientUnits="userSpaceOnUse"
      x1={784.266}
      y1={503.327}
      x2={790.922}
      y2={503.327}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000034770255556526821430000012305820118778919581_)",
      }}
      d="m785.1 502.6 2.3-1.9c.9-.8 2.3-.6 3.1.3.8.9.6 2.3-.3 3.1l-2.3 1.9c-.9.8-2.3.6-3.1-.3-.8-.9-.7-2.3.3-3.1z"
    />
    <linearGradient
      id="SVGID_00000145056604565775566570000014197361976443076259_"
      gradientUnits="userSpaceOnUse"
      x1={791.999}
      y1={497.01}
      x2={798.695}
      y2={497.01}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000145056604565775566570000014197361976443076259_)",
      }}
      d="m792.8 496.2 2.3-1.9c.9-.8 2.3-.6 3.1.3.8.9.6 2.3-.3 3.1l-2.3 1.9c-.9.8-2.3.6-3.1-.3-.8-.9-.6-2.3.3-3.1z"
    />
    <linearGradient
      id="SVGID_00000032609522281915798810000002212343770224049844_"
      gradientUnits="userSpaceOnUse"
      x1={799.851}
      y1={490.842}
      x2={806.587}
      y2={490.842}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000032609522281915798810000002212343770224049844_)",
      }}
      d="m800.7 490 2.4-1.8c1-.7 2.3-.6 3.1.4.7 1 .6 2.3-.4 3.1l-2.4 1.8c-1 .7-2.3.6-3.1-.4-.7-1-.6-2.3.4-3.1z"
    />
    <linearGradient
      id="SVGID_00000063598124306661813310000000138311855847987859_"
      gradientUnits="userSpaceOnUse"
      x1={807.82}
      y1={484.825}
      x2={814.594}
      y2={484.825}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000063598124306661813310000000138311855847987859_)",
      }}
      d="m808.7 484 2.4-1.8c1-.7 2.3-.5 3 .5.7 1 .5 2.3-.5 3l-2.4 1.8c-1 .7-2.3.5-3-.5-.7-1-.5-2.3.5-3z"
    />
    <linearGradient
      id="SVGID_00000091694167385533013780000002539877634305973166_"
      gradientUnits="userSpaceOnUse"
      x1={815.903}
      y1={478.964}
      x2={822.716}
      y2={478.964}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000091694167385533013780000002539877634305973166_)",
      }}
      d="m816.8 478.1 2.4-1.7c1-.7 2.3-.5 3 .5.7 1 .5 2.3-.5 3l-2.4 1.7c-1 .7-2.3.5-3-.5-.7-1-.5-2.4.5-3z"
    />
    <linearGradient
      id="SVGID_00000048493571962545951830000003789292025964064139_"
      gradientUnits="userSpaceOnUse"
      x1={824.098}
      y1={473.259}
      x2={830.948}
      y2={473.259}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000048493571962545951830000003789292025964064139_)",
      }}
      d="m825.1 472.3 2.5-1.7c1-.7 2.4-.4 3 .6.7 1 .4 2.4-.6 3l-2.5 1.7c-1 .7-2.4.4-3-.6-.7-1-.4-2.3.6-3z"
    />
    <linearGradient
      id="SVGID_00000035507769460076160210000006222103533033694655_"
      gradientUnits="userSpaceOnUse"
      x1={832.403}
      y1={467.713}
      x2={839.289}
      y2={467.713}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000035507769460076160210000006222103533033694655_)",
      }}
      d="m833.4 466.7 2.5-1.6c1-.7 2.4-.4 3 .6.7 1 .4 2.4-.6 3l-2.5 1.6c-1 .7-2.4.4-3-.6-.7-1-.4-2.3.6-3z"
    />
    <linearGradient
      id="SVGID_00000067220448000447492380000014501320888476775829_"
      gradientUnits="userSpaceOnUse"
      x1={840.813}
      y1={462.329}
      x2={847.735}
      y2={462.329}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000067220448000447492380000014501320888476775829_)",
      }}
      d="m841.8 461.3 2.5-1.6c1-.6 2.4-.3 3 .7.6 1 .3 2.4-.7 3l-2.5 1.6c-1 .6-2.4.3-3-.7-.6-1-.3-2.4.7-3z"
    />
    <linearGradient
      id="SVGID_00000175315298934200696640000015441800417479382207_"
      gradientUnits="userSpaceOnUse"
      x1={849.326}
      y1={457.111}
      x2={856.282}
      y2={457.111}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000175315298934200696640000015441800417479382207_)",
      }}
      d="m850.4 456 2.6-1.5c1-.6 2.4-.3 3 .8.6 1 .3 2.4-.8 3l-2.6 1.5c-1 .6-2.4.3-3-.8-.6-1-.2-2.4.8-3z"
    />
    <linearGradient
      id="SVGID_00000155853168940155456450000017581441058510405797_"
      gradientUnits="userSpaceOnUse"
      x1={857.94}
      y1={452.06}
      x2={864.93}
      y2={452.06}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155853168940155456450000017581441058510405797_)",
      }}
      d="m859 450.9 2.6-1.5c1.1-.6 2.4-.2 3 .8.6 1.1.2 2.4-.8 3l-2.6 1.5c-1.1.6-2.4.2-3-.8-.6-1.1-.2-2.4.8-3z"
    />
    <linearGradient
      id="SVGID_00000067201712433492859150000007323615278466389632_"
      gradientUnits="userSpaceOnUse"
      x1={866.651}
      y1={447.18}
      x2={873.673}
      y2={447.18}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000067201712433492859150000007323615278466389632_)",
      }}
      d="m867.8 446 2.6-1.4c1.1-.6 2.4-.2 3 .9.6 1.1.2 2.4-.9 3l-2.6 1.4c-1.1.6-2.4.2-3-.9-.6-1.1-.2-2.4.9-3z"
    />
    <linearGradient
      id="SVGID_00000005224472492308026490000004397692254828099970_"
      gradientUnits="userSpaceOnUse"
      x1={875.456}
      y1={442.472}
      x2={882.511}
      y2={442.472}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005224472492308026490000004397692254828099970_)",
      }}
      d="m876.6 441.2 2.7-1.4c1.1-.6 2.4-.1 3 .9.6 1.1.1 2.4-.9 3l-2.7 1.4c-1.1.6-2.4.1-3-.9s-.1-2.4.9-3z"
    />
    <linearGradient
      id="SVGID_00000017507806616833080010000002914653483392371887_"
      gradientUnits="userSpaceOnUse"
      x1={884.353}
      y1={437.94}
      x2={891.439}
      y2={437.94}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000017507806616833080010000002914653483392371887_)",
      }}
      d="m885.6 436.6 2.7-1.3c1.1-.5 2.4-.1 2.9 1s.1 2.4-1 2.9l-2.7 1.3c-1.1.5-2.4.1-2.9-1-.6-1-.1-2.3 1-2.9z"
    />
    <linearGradient
      id="SVGID_00000000214398753323271460000002369215879604739471_"
      gradientUnits="userSpaceOnUse"
      x1={893.339}
      y1={433.586}
      x2={900.455}
      y2={433.586}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000000214398753323271460000002369215879604739471_)",
      }}
      d="m894.6 432.2 2.7-1.3c1.1-.5 2.4 0 2.9 1.1s0 2.4-1.1 2.9l-2.7 1.3c-1.1.5-2.4 0-2.9-1.1-.5-1 0-2.3 1.1-2.9z"
    />
    <linearGradient
      id="SVGID_00000072264757441556676320000017483611336878240656_"
      gradientUnits="userSpaceOnUse"
      x1={902.411}
      y1={429.413}
      x2={909.557}
      y2={429.413}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072264757441556676320000017483611336878240656_)",
      }}
      d="m903.7 428 2.7-1.2c1.1-.5 2.4 0 2.9 1.1s0 2.4-1.1 2.9l-2.7 1.2c-1.1.5-2.4 0-2.9-1.1s0-2.4 1.1-2.9z"
    />
    <linearGradient
      id="SVGID_00000054960043051973235050000006002991351804776093_"
      gradientUnits="userSpaceOnUse"
      x1={911.566}
      y1={425.424}
      x2={918.74}
      y2={425.424}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000054960043051973235050000006002991351804776093_)",
      }}
      d="m912.9 424 2.8-1.2c1.1-.5 2.4 0 2.9 1.2.5 1.1 0 2.4-1.2 2.9l-2.8 1.2c-1.1.5-2.4 0-2.9-1.2-.4-1.2.1-2.4 1.2-2.9z"
    />
    <linearGradient
      id="SVGID_00000160162867750602619460000016878526082838463628_"
      gradientUnits="userSpaceOnUse"
      x1={920.8}
      y1={421.621}
      x2={928.002}
      y2={421.621}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160162867750602619460000016878526082838463628_)",
      }}
      d="m922.2 420.1 2.8-1.1c1.1-.5 2.4.1 2.9 1.2.5 1.1-.1 2.4-1.2 2.9l-2.8 1.1c-1.1.5-2.4-.1-2.9-1.2s.1-2.4 1.2-2.9z"
    />
    <linearGradient
      id="SVGID_00000087389009304348542950000006639358511229950369_"
      gradientUnits="userSpaceOnUse"
      x1={930.11}
      y1={418.004}
      x2={937.338}
      y2={418.004}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000087389009304348542950000006639358511229950369_)",
      }}
      d="m931.5 416.5 2.8-1.1c1.1-.4 2.4.1 2.8 1.3.4 1.1-.1 2.4-1.3 2.8l-2.8 1.1c-1.1.4-2.4-.1-2.8-1.3-.4-1.1.2-2.4 1.3-2.8z"
    />
    <linearGradient
      id="SVGID_00000136376138608425768620000012522778661394797748_"
      gradientUnits="userSpaceOnUse"
      x1={939.49}
      y1={414.573}
      x2={946.743}
      y2={414.573}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000136376138608425768620000012522778661394797748_)",
      }}
      d="m941 413 2.8-1c1.2-.4 2.4.2 2.8 1.3.4 1.2-.2 2.4-1.3 2.8l-2.8 1c-1.2.4-2.4-.2-2.8-1.3-.5-1.1.1-2.4 1.3-2.8z"
    />
    <linearGradient
      id="SVGID_00000071551342627597994550000014108018411254696584_"
      gradientUnits="userSpaceOnUse"
      x1={948.938}
      y1={411.329}
      x2={956.213}
      y2={411.329}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000071551342627597994550000014108018411254696584_)",
      }}
      d="m950.5 409.7 2.8-.9c1.2-.4 2.4.2 2.8 1.4.4 1.2-.2 2.4-1.4 2.8l-2.8.9c-1.2.4-2.4-.2-2.8-1.4-.4-1.2.2-2.4 1.4-2.8z"
    />
    <linearGradient
      id="SVGID_00000150792083839926398660000015538250241248716454_"
      gradientUnits="userSpaceOnUse"
      x1={958.448}
      y1={408.271}
      x2={965.745}
      y2={408.271}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000150792083839926398660000015538250241248716454_)",
      }}
      d="m960 406.6 2.9-.9c1.2-.4 2.4.3 2.8 1.5.4 1.2-.3 2.4-1.5 2.8l-2.9.9c-1.2.4-2.4-.3-2.8-1.5-.3-1.2.3-2.4 1.5-2.8z"
    />
    <linearGradient
      id="SVGID_00000099644195544963674180000015444077221017344924_"
      gradientUnits="userSpaceOnUse"
      x1={968.016}
      y1={405.399}
      x2={975.335}
      y2={405.399}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000099644195544963674180000015444077221017344924_)",
      }}
      d="m969.6 403.7 2.9-.8c1.2-.3 2.4.3 2.7 1.5.3 1.2-.3 2.4-1.5 2.7l-2.9.8c-1.2.3-2.4-.3-2.7-1.5-.3-1.1.3-2.4 1.5-2.7z"
    />
    <linearGradient
      id="SVGID_00000092414300774456873460000013565193731223774621_"
      gradientUnits="userSpaceOnUse"
      x1={977.639}
      y1={402.714}
      x2={984.977}
      y2={402.714}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000092414300774456873460000013565193731223774621_)",
      }}
      d="m979.3 401 2.9-.8c1.2-.3 2.4.4 2.7 1.6.3 1.2-.4 2.4-1.6 2.7l-2.9.8c-1.2.3-2.4-.4-2.7-1.6-.3-1.2.4-2.4 1.6-2.7z"
    />
    <linearGradient
      id="SVGID_00000041263552861937111020000015435299408747519925_"
      gradientUnits="userSpaceOnUse"
      x1={987.312}
      y1={400.216}
      x2={994.669}
      y2={400.216}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000041263552861937111020000015435299408747519925_)",
      }}
      d="m989 398.4 2.9-.7c1.2-.3 2.4.4 2.7 1.6.3 1.2-.4 2.4-1.6 2.7l-2.9.7c-1.2.3-2.4-.4-2.7-1.6-.3-1.2.4-2.4 1.6-2.7z"
    />
    <linearGradient
      id="SVGID_00000155109719100330483960000015188102184372824731_"
      gradientUnits="userSpaceOnUse"
      x1={997.032}
      y1={397.904}
      x2={1004.407}
      y2={397.904}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155109719100330483960000015188102184372824731_)",
      }}
      d="m998.8 396.1 2.9-.7c1.2-.3 2.4.5 2.7 1.7.3 1.2-.5 2.4-1.7 2.7l-2.9.7c-1.2.3-2.4-.5-2.7-1.7-.3-1.3.5-2.5 1.7-2.7z"
    />
    <linearGradient
      id="SVGID_00000049209624220890435960000012347173183091016106_"
      gradientUnits="userSpaceOnUse"
      x1={1006.795}
      y1={395.778}
      x2={1014.186}
      y2={395.778}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049209624220890435960000012347173183091016106_)",
      }}
      d="m1008.6 393.9 2.9-.6c1.2-.2 2.4.5 2.6 1.7.3 1.2-.5 2.4-1.7 2.6l-2.9.6c-1.2.2-2.4-.5-2.6-1.7-.3-1.2.5-2.3 1.7-2.6z"
    />
    <linearGradient
      id="SVGID_00000101787843696926797940000014716959838061347746_"
      gradientUnits="userSpaceOnUse"
      x1={1016.597}
      y1={393.837}
      x2={1024.003}
      y2={393.837}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000101787843696926797940000014716959838061347746_)",
      }}
      d="m1018.4 391.9 2.9-.6c1.2-.2 2.4.6 2.6 1.8.2 1.2-.6 2.4-1.8 2.6l-2.9.6c-1.2.2-2.4-.6-2.6-1.8-.2-1.2.6-2.3 1.8-2.6z"
    />
    <linearGradient
      id="SVGID_00000013170656278291568330000000029924525400877989_"
      gradientUnits="userSpaceOnUse"
      x1={1026.435}
      y1={392.082}
      x2={1033.855}
      y2={392.082}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013170656278291568330000000029924525400877989_)",
      }}
      d="m1028.3 390.1 3-.5c1.2-.2 2.4.6 2.6 1.8.2 1.2-.6 2.4-1.8 2.6l-3 .5c-1.2.2-2.4-.6-2.6-1.8-.2-1.2.6-2.4 1.8-2.6z"
    />
    <linearGradient
      id="SVGID_00000002365104615533902400000017754715043003521184_"
      gradientUnits="userSpaceOnUse"
      x1={1036.305}
      y1={390.513}
      x2={1043.737}
      y2={390.513}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000002365104615533902400000017754715043003521184_)",
      }}
      d="m1038.2 388.5 3-.4c1.2-.2 2.4.7 2.5 1.9.2 1.2-.7 2.4-1.9 2.5l-3 .4c-1.2.2-2.4-.7-2.5-1.9s.7-2.3 1.9-2.5z"
    />
    <linearGradient
      id="SVGID_00000132069673645872841860000011158468351216540342_"
      gradientUnits="userSpaceOnUse"
      x1={1046.202}
      y1={389.127}
      x2={1053.647}
      y2={389.127}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132069673645872841860000011158468351216540342_)",
      }}
      d="m1048.1 387.1 3-.4c1.2-.2 2.3.7 2.5 1.9.2 1.2-.7 2.3-1.9 2.5l-3 .4c-1.2.2-2.3-.7-2.5-1.9-.1-1.2.7-2.3 1.9-2.5z"
    />
    <linearGradient
      id="SVGID_00000124156368180352568990000005891098359831161486_"
      gradientUnits="userSpaceOnUse"
      x1={1056.124}
      y1={387.927}
      x2={1063.58}
      y2={387.927}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000124156368180352568990000005891098359831161486_)",
      }}
      d="m1058.1 385.9 3-.3c1.2-.1 2.3.7 2.5 2s-.7 2.3-2 2.5l-3 .3c-1.2.1-2.3-.7-2.5-2-.1-1.3.8-2.4 2-2.5z"
    />
    <linearGradient
      id="SVGID_00000029750586822367619610000003182549097472617387_"
      gradientUnits="userSpaceOnUse"
      x1={1066.068}
      y1={386.911}
      x2={1073.533}
      y2={386.911}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000029750586822367619610000003182549097472617387_)",
      }}
      d="m1068.1 384.8 3-.3c1.2-.1 2.3.8 2.4 2 .1 1.2-.8 2.3-2 2.4l-3 .3c-1.2.1-2.3-.8-2.4-2-.1-1.2.8-2.3 2-2.4z"
    />
    <linearGradient
      id="SVGID_00000160152802008850528440000005329868393680559242_"
      gradientUnits="userSpaceOnUse"
      x1={1076.028}
      y1={386.078}
      x2={1083.502}
      y2={386.078}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160152802008850528440000005329868393680559242_)",
      }}
      d="m1078.1 384 3-.2c1.2-.1 2.3.8 2.4 2.1.1 1.2-.8 2.3-2.1 2.4l-3 .2c-1.2.1-2.3-.8-2.4-2.1-.1-1.3.9-2.4 2.1-2.4z"
    />
    <linearGradient
      id="SVGID_00000006699967130910382830000017450968517182829191_"
      gradientUnits="userSpaceOnUse"
      x1={1086.003}
      y1={385.429}
      x2={1093.485}
      y2={385.429}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000006699967130910382830000017450968517182829191_)",
      }}
      d="m1088.1 383.3 3-.2c1.2-.1 2.3.9 2.4 2.1.1 1.2-.9 2.3-2.1 2.4l-3 .2c-1.2.1-2.3-.9-2.4-2.1-.1-1.3.9-2.4 2.1-2.4z"
    />
    <linearGradient
      id="SVGID_00000142874262568477914090000003605113168006979006_"
      gradientUnits="userSpaceOnUse"
      x1={1095.989}
      y1={384.963}
      x2={1103.477}
      y2={384.963}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000142874262568477914090000003605113168006979006_)",
      }}
      d="m1098.1 382.8 3-.1c1.2 0 2.3.9 2.3 2.2 0 1.2-.9 2.3-2.2 2.3l-3 .1c-1.2 0-2.3-.9-2.3-2.2 0-1.2 1-2.3 2.2-2.3z"
    />
    <linearGradient
      id="SVGID_00000138559541669916727410000011333389860785779386_"
      gradientUnits="userSpaceOnUse"
      x1={1105.982}
      y1={384.68}
      x2={1113.476}
      y2={384.68}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000138559541669916727410000011333389860785779386_)",
      }}
      d="m1108.2 382.5 3-.1c1.2 0 2.3 1 2.3 2.2 0 1.2-1 2.3-2.2 2.3l-3 .1c-1.2 0-2.3-1-2.3-2.2 0-1.3.9-2.3 2.2-2.3z"
    />
    <linearGradient
      id="SVGID_00000106863092166480802100000009711783074464379266_"
      gradientUnits="userSpaceOnUse"
      x1={1115.979}
      y1={384.579}
      x2={1123.477}
      y2={384.579}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106863092166480802100000009711783074464379266_)",
      }}
      d="M1118.2 382.3h3c1.2 0 2.3 1 2.3 2.2 0 1.2-1 2.3-2.2 2.3h-3c-1.2 0-2.2-1-2.3-2.2 0-1.3 1-2.3 2.2-2.3z"
    />
    <linearGradient
      id="SVGID_00000127043014094925258780000003975349797527978141_"
      gradientUnits="userSpaceOnUse"
      x1={1125.976}
      y1={384.661}
      x2={1133.478}
      y2={384.661}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000127043014094925258780000003975349797527978141_)",
      }}
      d="m1128.3 382.4 3 .1c1.2 0 2.2 1 2.2 2.3 0 1.2-1 2.2-2.3 2.2l-3-.1c-1.2 0-2.2-1-2.2-2.3 0-1.2 1-2.2 2.3-2.2z"
    />
    <linearGradient
      id="SVGID_00000045584139245296537410000013673246526053861010_"
      gradientUnits="userSpaceOnUse"
      x1={1135.969}
      y1={384.923}
      x2={1143.474}
      y2={384.923}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000045584139245296537410000013673246526053861010_)",
      }}
      d="m1138.3 382.6 3 .1c1.2 0 2.2 1.1 2.2 2.3 0 1.2-1.1 2.2-2.3 2.2l-3-.1c-1.2 0-2.2-1.1-2.2-2.3 0-1.3 1.1-2.2 2.3-2.2z"
    />
    <linearGradient
      id="SVGID_00000139976623110382480000000002842357659538525616_"
      gradientUnits="userSpaceOnUse"
      x1={1145.958}
      y1={385.367}
      x2={1153.465}
      y2={385.367}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000139976623110382480000000002842357659538525616_)",
      }}
      d="m1148.3 383 3 .2c1.2.1 2.2 1.1 2.1 2.4-.1 1.2-1.1 2.2-2.4 2.1l-3-.2c-1.2-.1-2.2-1.1-2.1-2.4.1-1.2 1.2-2.1 2.4-2.1z"
    />
    <linearGradient
      id="SVGID_00000138567549190688542060000009262989139497491133_"
      gradientUnits="userSpaceOnUse"
      x1={1155.938}
      y1={385.992}
      x2={1163.446}
      y2={385.992}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000138567549190688542060000009262989139497491133_)",
      }}
      d="m1158.4 383.6 3 .2c1.2.1 2.2 1.2 2.1 2.4-.1 1.2-1.2 2.2-2.4 2.1l-3-.2c-1.2-.1-2.2-1.2-2.1-2.4 0-1.2 1.1-2.2 2.4-2.1z"
    />
    <linearGradient
      id="SVGID_00000106126291394742898520000015052731548812915349_"
      gradientUnits="userSpaceOnUse"
      x1={1165.906}
      y1={386.797}
      x2={1173.414}
      y2={386.797}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106126291394742898520000015052731548812915349_)",
      }}
      d="m1168.4 384.4 3 .3c1.2.1 2.2 1.2 2 2.5-.1 1.2-1.2 2.2-2.5 2l-3-.3c-1.2-.1-2.2-1.2-2-2.5.1-1.2 1.2-2.1 2.5-2z"
    />
    <linearGradient
      id="SVGID_00000163059133989338114530000014987452301247431571_"
      gradientUnits="userSpaceOnUse"
      x1={1175.859}
      y1={387.783}
      x2={1183.366}
      y2={387.783}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163059133989338114530000014987452301247431571_)",
      }}
      d="m1178.4 385.4 3 .3c1.2.1 2.1 1.2 2 2.5-.1 1.2-1.2 2.1-2.5 2l-3-.3c-1.2-.1-2.1-1.3-2-2.5.1-1.3 1.2-2.2 2.5-2z"
    />
    <linearGradient
      id="SVGID_00000101820335694751809470000014975927609011468214_"
      gradientUnits="userSpaceOnUse"
      x1={1185.792}
      y1={388.949}
      x2={1193.297}
      y2={388.949}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000101820335694751809470000014975927609011468214_)",
      }}
      d="m1188.3 386.5 3 .4c1.2.2 2.1 1.3 2 2.5-.2 1.2-1.3 2.1-2.5 2l-3-.4c-1.2-.2-2.1-1.3-2-2.5.2-1.3 1.3-2.1 2.5-2z"
    />
    <linearGradient
      id="SVGID_00000111906986601605513490000001749680822494103217_"
      gradientUnits="userSpaceOnUse"
      x1={1195.703}
      y1={390.294}
      x2={1203.205}
      y2={390.294}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000111906986601605513490000001749680822494103217_)",
      }}
      d="m1198.3 387.8 3 .4c1.2.2 2.1 1.3 1.9 2.6-.2 1.2-1.3 2.1-2.6 1.9l-3-.4c-1.2-.2-2.1-1.3-1.9-2.6.2-1.2 1.4-2 2.6-1.9z"
    />
    <linearGradient
      id="SVGID_00000029017993199588547100000006124012485177992363_"
      gradientUnits="userSpaceOnUse"
      x1={1205.589}
      y1={391.82}
      x2={1213.087}
      y2={391.82}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000029017993199588547100000006124012485177992363_)",
      }}
      d="m1208.2 389.3 3 .5c1.2.2 2.1 1.4 1.9 2.6-.2 1.2-1.4 2.1-2.6 1.9l-3-.5c-1.2-.2-2.1-1.4-1.9-2.6.2-1.2 1.4-2.1 2.6-1.9z"
    />
    <linearGradient
      id="SVGID_00000062905366038465895900000014396906007924704958_"
      gradientUnits="userSpaceOnUse"
      x1={1215.445}
      y1={393.524}
      x2={1222.939}
      y2={393.524}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062905366038465895900000014396906007924704958_)",
      }}
      d="m1218.1 391 3 .5c1.2.2 2.1 1.4 1.8 2.6-.2 1.2-1.4 2.1-2.6 1.8l-3-.5c-1.2-.2-2.1-1.4-1.8-2.6.2-1.2 1.4-2 2.6-1.8z"
    />
    <linearGradient
      id="SVGID_00000085226978164951612450000008015104935741443981_"
      gradientUnits="userSpaceOnUse"
      x1={1225.27}
      y1={395.407}
      x2={1232.757}
      y2={395.407}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000085226978164951612450000008015104935741443981_)",
      }}
      d="m1228 392.9 2.9.6c1.2.2 2 1.4 1.8 2.7-.2 1.2-1.4 2-2.7 1.8l-2.9-.6c-1.2-.2-2-1.4-1.8-2.7s1.5-2.1 2.7-1.8z"
    />
    <linearGradient
      id="SVGID_00000079483141989459553470000008270623066933805978_"
      gradientUnits="userSpaceOnUse"
      x1={1235.059}
      y1={397.469}
      x2={1242.539}
      y2={397.469}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000079483141989459553470000008270623066933805978_)",
      }}
      d="m1237.8 394.9 2.9.6c1.2.3 2 1.5 1.7 2.7-.3 1.2-1.5 2-2.7 1.7l-2.9-.6c-1.2-.3-2-1.5-1.7-2.7.3-1.2 1.5-1.9 2.7-1.7z"
    />
    <linearGradient
      id="SVGID_00000022540137705739130870000012682017775099920285_"
      gradientUnits="userSpaceOnUse"
      x1={1244.809}
      y1={399.709}
      x2={1252.282}
      y2={399.709}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000022540137705739130870000012682017775099920285_)",
      }}
      d="m1247.6 397.1 2.9.7c1.2.3 2 1.5 1.7 2.7-.3 1.2-1.5 2-2.7 1.7l-2.9-.7c-1.2-.3-2-1.5-1.7-2.7.3-1.2 1.5-1.9 2.7-1.7z"
    />
    <linearGradient
      id="SVGID_00000160162923155170258150000011440559631830149009_"
      gradientUnits="userSpaceOnUse"
      x1={1254.518}
      y1={402.128}
      x2={1261.981}
      y2={402.128}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160162923155170258150000011440559631830149009_)",
      }}
      d="m1257.4 399.5 2.9.8c1.2.3 2 1.6 1.6 2.8-.3 1.2-1.6 2-2.8 1.6l-2.9-.8c-1.2-.3-1.9-1.6-1.6-2.8.3-1.1 1.5-1.9 2.8-1.6z"
    />
    <linearGradient
      id="SVGID_00000170268442193822670700000001713775358629858219_"
      gradientUnits="userSpaceOnUse"
      x1={1264.181}
      y1={404.724}
      x2={1271.634}
      y2={404.724}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000170268442193822670700000001713775358629858219_)",
      }}
      d="m1267.1 402.1 2.9.8c1.2.3 1.9 1.6 1.6 2.8-.3 1.2-1.6 1.9-2.8 1.6l-2.9-.8c-1.2-.3-1.9-1.6-1.6-2.8.3-1.2 1.6-1.9 2.8-1.6z"
    />
    <linearGradient
      id="SVGID_00000062168958590432953540000014128317237053939114_"
      gradientUnits="userSpaceOnUse"
      x1={1273.795}
      y1={407.498}
      x2={1281.236}
      y2={407.498}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062168958590432953540000014128317237053939114_)",
      }}
      d="m1276.7 404.9 2.9.9c1.2.4 1.9 1.6 1.5 2.8-.4 1.2-1.6 1.9-2.8 1.5l-2.9-.9c-1.2-.4-1.9-1.6-1.5-2.8.4-1.2 1.6-1.9 2.8-1.5z"
    />
    <linearGradient
      id="SVGID_00000125564569553837294340000008118421552474173846_"
      gradientUnits="userSpaceOnUse"
      x1={1283.355}
      y1={410.449}
      x2={1290.785}
      y2={410.449}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000125564569553837294340000008118421552474173846_)",
      }}
      d="m1286.3 407.8 2.9.9c1.2.4 1.9 1.7 1.5 2.9-.4 1.2-1.7 1.9-2.9 1.5l-2.9-.9c-1.2-.4-1.9-1.7-1.5-2.9.4-1.2 1.7-1.9 2.9-1.5z"
    />
    <linearGradient
      id="SVGID_00000050655931234705366740000012587453980874571168_"
      gradientUnits="userSpaceOnUse"
      x1={1292.86}
      y1={413.577}
      x2={1300.276}
      y2={413.577}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000050655931234705366740000012587453980874571168_)",
      }}
      d="m1295.9 410.9 2.8 1c1.2.4 1.8 1.7 1.4 2.9-.4 1.2-1.7 1.8-2.9 1.4l-2.8-1c-1.2-.4-1.8-1.7-1.4-2.9.4-1.1 1.7-1.8 2.9-1.4z"
    />
    <linearGradient
      id="SVGID_00000093863629132165780240000012873776412238731416_"
      gradientUnits="userSpaceOnUse"
      x1={1302.305}
      y1={416.882}
      x2={1309.706}
      y2={416.882}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093863629132165780240000012873776412238731416_)",
      }}
      d="m1305.4 414.2 2.8 1c1.2.4 1.8 1.7 1.4 2.9-.4 1.2-1.7 1.8-2.9 1.4l-2.8-1c-1.2-.4-1.8-1.7-1.4-2.9.4-1.2 1.7-1.8 2.9-1.4z"
    />
    <linearGradient
      id="SVGID_00000093174083142431973910000007858193535261096603_"
      gradientUnits="userSpaceOnUse"
      x1={1311.686}
      y1={420.363}
      x2={1319.072}
      y2={420.363}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093174083142431973910000007858193535261096603_)",
      }}
      d="m1314.8 417.7 2.8 1.1c1.2.5 1.8 1.8 1.3 3s-1.8 1.8-3 1.3l-2.8-1.1c-1.2-.5-1.8-1.8-1.3-3s1.8-1.8 3-1.3z"
    />
    <linearGradient
      id="SVGID_00000032643121725307952240000000165874811009585294_"
      gradientUnits="userSpaceOnUse"
      x1={1321.001}
      y1={424.02}
      x2={1328.37}
      y2={424.02}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000032643121725307952240000000165874811009585294_)",
      }}
      d="m1324.2 421.3 2.8 1.1c1.2.5 1.7 1.8 1.3 3-.5 1.2-1.8 1.7-3 1.3l-2.8-1.1c-1.2-.5-1.7-1.8-1.3-3 .4-1.2 1.8-1.7 3-1.3z"
    />
    <linearGradient
      id="SVGID_00000109723632681219499050000011110550077415008178_"
      gradientUnits="userSpaceOnUse"
      x1={1330.245}
      y1={427.853}
      x2={1337.597}
      y2={427.853}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000109723632681219499050000011110550077415008178_)",
      }}
      d="m1333.4 425.2 2.8 1.2c1.2.5 1.7 1.8 1.2 3s-1.8 1.7-3 1.2l-2.8-1.2c-1.2-.5-1.7-1.8-1.2-3s1.9-1.7 3-1.2z"
    />
    <linearGradient
      id="SVGID_00000069370729607425537300000013433064619175678371_"
      gradientUnits="userSpaceOnUse"
      x1={1339.416}
      y1={431.86}
      x2={1346.749}
      y2={431.86}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000069370729607425537300000013433064619175678371_)",
      }}
      d="m1342.7 429.1 2.7 1.2c1.2.5 1.7 1.9 1.2 3-.5 1.2-1.9 1.7-3 1.2l-2.7-1.2c-1.2-.5-1.7-1.9-1.2-3 .4-1.2 1.8-1.7 3-1.2z"
    />
    <linearGradient
      id="SVGID_00000056426854519217740230000016889042771820756373_"
      gradientUnits="userSpaceOnUse"
      x1={1348.51}
      y1={436.038}
      x2={1355.826}
      y2={436.038}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000056426854519217740230000016889042771820756373_)",
      }}
      d="m1351.8 433.3 2.7 1.3c1.1.5 1.6 1.9 1.1 3.1-.5 1.2-1.9 1.6-3.1 1.1l-2.7-1.3c-1.1-.5-1.6-1.9-1.1-3.1.6-1.1 1.9-1.6 3.1-1.1z"
    />
    <linearGradient
      id="SVGID_00000158744053248928998060000013984228252838107320_"
      gradientUnits="userSpaceOnUse"
      x1={1357.532}
      y1={440.371}
      x2={1364.831}
      y2={440.371}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000158744053248928998060000013984228252838107320_)",
      }}
      d="m1360.8 437.6 2.7 1.3c1.1.6 1.6 1.9 1.1 3.1s-1.9 1.6-3.1 1.1l-2.7-1.3c-1.1-.6-1.6-1.9-1.1-3.1.6-1.1 2-1.6 3.1-1.1z"
    />
    <linearGradient
      id="SVGID_00000129916616561432850600000012914473323328524206_"
      gradientUnits="userSpaceOnUse"
      x1={1366.485}
      y1={444.844}
      x2={1373.767}
      y2={444.844}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129916616561432850600000012914473323328524206_)",
      }}
      d="m1369.8 442.1 2.7 1.4c1.1.6 1.6 2 1 3.1-.6 1.1-2 1.6-3.1 1l-2.7-1.4c-1.1-.6-1.6-2-1-3.1.6-1.1 2-1.6 3.1-1z"
    />
    <linearGradient
      id="SVGID_00000131352104307746086090000006419794555102308770_"
      gradientUnits="userSpaceOnUse"
      x1={1375.371}
      y1={449.444}
      x2={1382.639}
      y2={449.444}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000131352104307746086090000006419794555102308770_)",
      }}
      d="m1378.8 446.7 2.7 1.4c1.1.6 1.6 2 1 3.1-.6 1.1-2 1.6-3.1 1l-2.7-1.4c-1.1-.6-1.6-2-1-3.1.5-1.2 1.9-1.6 3.1-1z"
    />
    <linearGradient
      id="SVGID_00000103237522874579627410000006453152319342090886_"
      gradientUnits="userSpaceOnUse"
      x1={1384.197}
      y1={454.158}
      x2={1391.451}
      y2={454.158}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000103237522874579627410000006453152319342090886_)",
      }}
      d="m1387.6 451.4 2.6 1.4c1.1.6 1.5 2 .9 3.1s-2 1.5-3.1.9l-2.6-1.4c-1.1-.6-1.5-2-.9-3.1s2-1.5 3.1-.9z"
    />
    <linearGradient
      id="SVGID_00000165930491944000782720000006392457555537774472_"
      gradientUnits="userSpaceOnUse"
      x1={1392.967}
      y1={458.973}
      x2={1400.21}
      y2={458.973}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000165930491944000782720000006392457555537774472_)",
      }}
      d="m1396.4 456.2 2.6 1.5c1.1.6 1.5 2 .9 3.1s-2 1.5-3.1.9l-2.6-1.5c-1.1-.6-1.5-2-.9-3.1s2-1.5 3.1-.9z"
    />
    <linearGradient
      id="SVGID_00000143595872362602434610000013792022739261656743_"
      gradientUnits="userSpaceOnUse"
      x1={1401.687}
      y1={463.877}
      x2={1408.92}
      y2={463.877}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000143595872362602434610000013792022739261656743_)",
      }}
      d="m1405.1 461.1 2.6 1.5c1.1.6 1.5 2 .9 3.2-.6 1.1-2 1.5-3.2.9l-2.6-1.5c-1.1-.6-1.5-2-.9-3.2.7-1.1 2.1-1.5 3.2-.9z"
    />
    <linearGradient
      id="SVGID_00000089575851119851919030000008823511538654644388_"
      gradientUnits="userSpaceOnUse"
      x1={1410.362}
      y1={468.858}
      x2={1417.587}
      y2={468.858}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000089575851119851919030000008823511538654644388_)",
      }}
      d="m1413.8 466.1 2.6 1.5c1.1.6 1.5 2.1.8 3.2-.6 1.1-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.6-1.5-2.1-.8-3.2s2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000044871123563615569720000017297738270230705058_"
      gradientUnits="userSpaceOnUse"
      x1={1418.999}
      y1={473.903}
      x2={1426.218}
      y2={473.903}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044871123563615569720000017297738270230705058_)",
      }}
      d="m1422.5 471.1 2.6 1.5c1.1.6 1.5 2.1.8 3.2-.6 1.1-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.6-1.5-2.1-.8-3.2.7-1 2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000155146184632392073540000007709931614595740853_"
      gradientUnits="userSpaceOnUse"
      x1={1427.604}
      y1={479.001}
      x2={1434.82}
      y2={479.001}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155146184632392073540000007709931614595740853_)",
      }}
      d="m1431.1 476.2 2.6 1.5c1.1.7 1.5 2.1.8 3.2s-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.7-1.5-2.1-.8-3.2s2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000088128838296608592660000006301945418765572740_"
      gradientUnits="userSpaceOnUse"
      x1={1436.184}
      y1={484.139}
      x2={1443.397}
      y2={484.139}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088128838296608592660000006301945418765572740_)",
      }}
      d="m1439.7 481.4 2.6 1.5c1.1.7 1.5 2.1.8 3.2s-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.7-1.5-2.1-.8-3.2s2.1-1.5 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000065794668230848674270000008757899399662866327_"
      gradientUnits="userSpaceOnUse"
      x1={1444.745}
      y1={489.307}
      x2={1451.958}
      y2={489.307}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065794668230848674270000008757899399662866327_)",
      }}
      d="m1448.3 486.5 2.6 1.6c1.1.7 1.4 2.1.8 3.2-.7 1.1-2.1 1.4-3.2.8l-2.6-1.6c-1.1-.7-1.4-2.1-.8-3.2.6-1.1 2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000070078686341810307440000001324312626139680163_"
      gradientUnits="userSpaceOnUse"
      x1={1453.295}
      y1={494.493}
      x2={1460.509}
      y2={494.493}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070078686341810307440000001324312626139680163_)",
      }}
      d="m1456.8 491.7 2.6 1.6c1.1.7 1.4 2.1.8 3.2-.7 1.1-2.1 1.4-3.2.8l-2.6-1.6c-1.1-.7-1.4-2.1-.8-3.2.7-1.1 2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000174593275453906541770000011542694439106525345_"
      gradientUnits="userSpaceOnUse"
      x1={1461.839}
      y1={499.685}
      x2={1469.058}
      y2={499.685}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000174593275453906541770000011542694439106525345_)",
      }}
      d="m1465.4 496.9 2.6 1.6c1.1.7 1.4 2.1.8 3.2-.7 1.1-2.1 1.4-3.2.8l-2.6-1.6c-1.1-.7-1.4-2.1-.8-3.2.6-1.1 2.1-1.5 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000141429213676293882270000003833946656680602259_"
      gradientUnits="userSpaceOnUse"
      x1={1470.385}
      y1={504.873}
      x2={1477.61}
      y2={504.873}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000141429213676293882270000003833946656680602259_)",
      }}
      d="m1473.9 502.1 2.6 1.6c1.1.7 1.5 2.1.8 3.2s-2.1 1.5-3.2.8l-2.6-1.6c-1.1-.7-1.5-2.1-.8-3.2s2.1-1.5 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000042709392619707154390000006386714007339848604_"
      gradientUnits="userSpaceOnUse"
      x1={1478.94}
      y1={510.045}
      x2={1486.173}
      y2={510.045}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000042709392619707154390000006386714007339848604_)",
      }}
      d="m1482.5 507.3 2.6 1.5c1.1.7 1.5 2.1.8 3.2s-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.7-1.5-2.1-.8-3.2.6-1.1 2.1-1.5 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000137847208506206618060000001176677672677400968_"
      gradientUnits="userSpaceOnUse"
      x1={1487.51}
      y1={515.188}
      x2={1494.754}
      y2={515.188}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000137847208506206618060000001176677672677400968_)",
      }}
      d="m1491 512.4 2.6 1.5c1.1.7 1.5 2.1.8 3.2s-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.7-1.5-2.1-.8-3.2s2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000129893324127631044560000007664081770551437735_"
      gradientUnits="userSpaceOnUse"
      x1={1496.103}
      y1={520.293}
      x2={1503.359}
      y2={520.293}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129893324127631044560000007664081770551437735_)",
      }}
      d="m1499.6 517.5 2.6 1.5c1.1.7 1.5 2.1.8 3.2s-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.7-1.5-2.1-.8-3.2s2.1-1.4 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000065788309506520369600000005694389993630383022_"
      gradientUnits="userSpaceOnUse"
      x1={1504.725}
      y1={525.347}
      x2={1511.995}
      y2={525.347}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065788309506520369600000005694389993630383022_)",
      }}
      d="m1508.2 522.6 2.6 1.5c1.1.6 1.5 2.1.8 3.2-.6 1.1-2.1 1.5-3.2.8l-2.6-1.5c-1.1-.6-1.5-2.1-.8-3.2s2.1-1.5 3.2-.8z"
    />
    <linearGradient
      id="SVGID_00000103243739801156707100000016350000854985852835_"
      gradientUnits="userSpaceOnUse"
      x1={1513.383}
      y1={530.337}
      x2={1520.669}
      y2={530.337}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000103243739801156707100000016350000854985852835_)",
      }}
      d="m1516.9 527.6 2.6 1.5c1.1.6 1.5 2.1.9 3.2s-2.1 1.5-3.2.9l-2.6-1.5c-1.1-.6-1.5-2.1-.9-3.2.6-1.2 2.1-1.6 3.2-.9z"
    />
    <linearGradient
      id="SVGID_00000136381989160518419880000006726606348095454356_"
      gradientUnits="userSpaceOnUse"
      x1={1522.083}
      y1={535.252}
      x2={1529.387}
      y2={535.252}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000136381989160518419880000006726606348095454356_)",
      }}
      d="m1525.6 532.5 2.6 1.5c1.1.6 1.5 2.1.9 3.2s-2.1 1.5-3.2.9l-2.6-1.5c-1.1-.6-1.5-2.1-.9-3.2s2-1.6 3.2-.9z"
    />
    <linearGradient
      id="SVGID_00000086693394991497884520000015793468080346334623_"
      gradientUnits="userSpaceOnUse"
      x1={1530.83}
      y1={540.079}
      x2={1538.155}
      y2={540.079}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000086693394991497884520000015793468080346334623_)",
      }}
      d="m1534.3 537.3 2.6 1.4c1.1.6 1.6 2 .9 3.2-.6 1.1-2 1.6-3.2.9l-2.6-1.4c-1.1-.6-1.6-2-.9-3.2.6-1.1 2.1-1.5 3.2-.9z"
    />
    <linearGradient
      id="SVGID_00000183971548835714104240000010954380432214866316_"
      gradientUnits="userSpaceOnUse"
      x1={1539.632}
      y1={544.806}
      x2={1546.978}
      y2={544.806}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000183971548835714104240000010954380432214866316_)",
      }}
      d="m1543.1 542 2.7 1.4c1.1.6 1.6 2 1 3.2-.6 1.1-2 1.6-3.2 1l-2.7-1.4c-1.1-.6-1.6-2-1-3.2.6-1.1 2-1.6 3.2-1z"
    />
    <linearGradient
      id="SVGID_00000180336607728741557000000018076461723807542413_"
      gradientUnits="userSpaceOnUse"
      x1={1548.493}
      y1={549.419}
      x2={1555.862}
      y2={549.419}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000180336607728741557000000018076461723807542413_)",
      }}
      d="m1551.9 546.6 2.7 1.4c1.2.6 1.6 2 1 3.2-.6 1.2-2 1.6-3.2 1l-2.7-1.4c-1.2-.6-1.6-2-1-3.2.6-1.1 2.1-1.5 3.2-1z"
    />
    <linearGradient
      id="SVGID_00000005264155380740289390000008419500483469921709_"
      gradientUnits="userSpaceOnUse"
      x1={1557.418}
      y1={553.904}
      x2={1564.811}
      y2={553.904}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005264155380740289390000008419500483469921709_)",
      }}
      d="m1560.8 551.1 2.7 1.3c1.2.6 1.6 2 1.1 3.1-.6 1.2-2 1.6-3.1 1.1l-2.7-1.3c-1.2-.6-1.6-2-1.1-3.1.5-1.2 1.9-1.6 3.1-1.1z"
    />
    <linearGradient
      id="SVGID_00000176752050695882319870000009622186775863249321_"
      gradientUnits="userSpaceOnUse"
      x1={1566.412}
      y1={558.25}
      x2={1573.83}
      y2={558.25}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000176752050695882319870000009622186775863249321_)",
      }}
      d="m1569.8 555.5 2.7 1.3c1.2.6 1.7 2 1.1 3.1-.6 1.2-2 1.7-3.1 1.1l-2.7-1.3c-1.2-.6-1.7-2-1.1-3.1.5-1.2 1.9-1.7 3.1-1.1z"
    />
    <linearGradient
      id="SVGID_00000019677285914125187780000006481454728990935736_"
      gradientUnits="userSpaceOnUse"
      x1={1575.478}
      y1={562.44}
      x2={1582.923}
      y2={562.44}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000019677285914125187780000006481454728990935736_)",
      }}
      d="m1578.8 559.7 2.7 1.2c1.2.5 1.7 1.9 1.2 3.1-.5 1.2-1.9 1.7-3.1 1.2l-2.7-1.2c-1.2-.5-1.7-1.9-1.2-3.1.5-1.2 1.9-1.8 3.1-1.2z"
    />
    <linearGradient
      id="SVGID_00000021840112228568434160000008057500672059049373_"
      gradientUnits="userSpaceOnUse"
      x1={1584.62}
      y1={566.461}
      x2={1592.093}
      y2={566.461}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021840112228568434160000008057500672059049373_)",
      }}
      d="m1587.9 563.7 2.8 1.2c1.2.5 1.8 1.9 1.2 3.1-.5 1.2-1.9 1.8-3.1 1.2l-2.8-1.2c-1.2-.5-1.8-1.9-1.2-3.1.5-1.2 1.9-1.7 3.1-1.2z"
    />
    <linearGradient
      id="SVGID_00000153678801215514622240000009066721743921733783_"
      gradientUnits="userSpaceOnUse"
      x1={1593.84}
      y1={570.299}
      x2={1601.341}
      y2={570.299}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000153678801215514622240000009066721743921733783_)",
      }}
      d="m1597.1 567.5 2.8 1.1c1.2.5 1.8 1.9 1.3 3.1-.5 1.2-1.9 1.8-3.1 1.3l-2.8-1.1c-1.2-.5-1.8-1.9-1.3-3.1s1.9-1.7 3.1-1.3z"
    />
    <linearGradient
      id="SVGID_00000183233845726303672140000004098621847714031277_"
      gradientUnits="userSpaceOnUse"
      x1={1603.139}
      y1={573.939}
      x2={1610.668}
      y2={573.939}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000183233845726303672140000004098621847714031277_)",
      }}
      d="m1606.3 571.2 2.8 1.1c1.2.5 1.8 1.8 1.4 3-.5 1.2-1.8 1.8-3 1.4l-2.8-1.1c-1.2-.5-1.8-1.8-1.4-3 .5-1.2 1.8-1.9 3-1.4z"
    />
    <linearGradient
      id="SVGID_00000062874351328643914980000014208643069819304845_"
      gradientUnits="userSpaceOnUse"
      x1={1612.519}
      y1={577.368}
      x2={1620.076}
      y2={577.368}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062874351328643914980000014208643069819304845_)",
      }}
      d="m1615.7 574.6 2.8 1c1.2.4 1.9 1.8 1.4 3-.4 1.2-1.8 1.9-3 1.4l-2.8-1c-1.2-.4-1.9-1.8-1.4-3 .4-1.1 1.7-1.8 3-1.4z"
    />
    <linearGradient
      id="SVGID_00000102539107956476502210000009758413290473057180_"
      gradientUnits="userSpaceOnUse"
      x1={1621.977}
      y1={580.572}
      x2={1629.562}
      y2={580.572}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000102539107956476502210000009758413290473057180_)",
      }}
      d="m1625.1 577.9 2.9.9c1.2.4 1.9 1.7 1.5 3-.4 1.2-1.7 1.9-3 1.5l-2.9-.9c-1.2-.4-1.9-1.7-1.5-3 .4-1.3 1.7-1.9 3-1.5z"
    />
    <linearGradient
      id="SVGID_00000066473252557002113150000010967735141983714195_"
      gradientUnits="userSpaceOnUse"
      x1={1631.506}
      y1={583.535}
      x2={1639.127}
      y2={583.535}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000066473252557002113150000010967735141983714195_)",
      }}
      d="m1634.6 580.8 2.9.8c1.3.4 2 1.7 1.6 2.9-.4 1.3-1.7 2-2.9 1.6l-2.9-.9c-1.3-.4-2-1.7-1.6-2.9.3-1.1 1.6-1.8 2.9-1.5z"
    />
    <linearGradient
      id="SVGID_00000008870039799769202690000013846788914273729462_"
      gradientUnits="userSpaceOnUse"
      x1={1641.128}
      y1={586.24}
      x2={1648.767}
      y2={586.24}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008870039799769202690000013846788914273729462_)",
      }}
      d="m1644.1 583.6 2.9.8c1.3.3 2 1.6 1.7 2.9-.3 1.3-1.6 2-2.9 1.7l-2.9-.8c-1.3-.3-2-1.6-1.7-2.9.3-1.3 1.6-2.1 2.9-1.7z"
    />
    <linearGradient
      id="SVGID_00000086672205894253279260000015112105238224907964_"
      gradientUnits="userSpaceOnUse"
      x1={1650.815}
      y1={588.67}
      x2={1658.479}
      y2={588.67}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000086672205894253279260000015112105238224907964_)",
      }}
      d="m1653.7 586 2.9.7c1.3.3 2.1 1.6 1.8 2.9-.3 1.3-1.6 2.1-2.9 1.8l-2.9-.7c-1.3-.3-2.1-1.6-1.8-2.9.4-1.3 1.7-2.1 2.9-1.8z"
    />
    <linearGradient
      id="SVGID_00000110437380133897253430000009506600173663261116_"
      gradientUnits="userSpaceOnUse"
      x1={1660.57}
      y1={590.82}
      x2={1668.256}
      y2={590.82}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000110437380133897253430000009506600173663261116_)",
      }}
      d="m1663.4 588.2 2.9.6c1.3.3 2.1 1.5 1.8 2.8-.3 1.3-1.5 2.1-2.8 1.8l-2.9-.6c-1.3-.3-2.1-1.5-1.8-2.8.3-1.2 1.5-2.1 2.8-1.8z"
    />
    <linearGradient
      id="SVGID_00000013166920782229459050000008257874191734852031_"
      gradientUnits="userSpaceOnUse"
      x1={1670.384}
      y1={592.683}
      x2={1678.091}
      y2={592.683}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013166920782229459050000008257874191734852031_)",
      }}
      d="m1673.2 590.1 3 .5c1.3.2 2.2 1.5 1.9 2.7-.2 1.3-1.5 2.2-2.7 1.9l-3-.5c-1.3-.2-2.2-1.5-1.9-2.7.1-1.3 1.4-2.1 2.7-1.9z"
    />
    <linearGradient
      id="SVGID_00000157283545392523645800000010470616610858832815_"
      gradientUnits="userSpaceOnUse"
      x1={1680.251}
      y1={594.251}
      x2={1687.976}
      y2={594.251}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000157283545392523645800000010470616610858832815_)",
      }}
      d="m1683 591.7 3 .4c1.3.2 2.2 1.4 2 2.7-.2 1.3-1.4 2.2-2.7 2l-3-.4c-1.3-.2-2.2-1.4-2-2.7.2-1.3 1.4-2.2 2.7-2z"
    />
    <linearGradient
      id="SVGID_00000064322045169859578330000003830508864996962981_"
      gradientUnits="userSpaceOnUse"
      x1={1690.162}
      y1={595.516}
      x2={1697.903}
      y2={595.516}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000064322045169859578330000003830508864996962981_)",
      }}
      d="m1692.8 593 3 .3c1.3.1 2.2 1.3 2.1 2.6-.1 1.3-1.3 2.2-2.6 2.1l-3-.3c-1.3-.1-2.2-1.3-2.1-2.6.1-1.3 1.3-2.3 2.6-2.1z"
    />
    <linearGradient
      id="SVGID_00000116200669435530595310000005583871598173603250_"
      gradientUnits="userSpaceOnUse"
      x1={1700.11}
      y1={596.469}
      x2={1707.864}
      y2={596.469}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116200669435530595310000005583871598173603250_)",
      }}
      d="m1702.7 594 3 .2c1.3.1 2.3 1.3 2.2 2.6-.1 1.3-1.3 2.3-2.6 2.2l-3-.2c-1.3-.1-2.3-1.3-2.2-2.6.1-1.4 1.3-2.3 2.6-2.2z"
    />
    <linearGradient
      id="SVGID_00000058568814418098902670000018254235503046753155_"
      gradientUnits="userSpaceOnUse"
      x1={1710.084}
      y1={597.101}
      x2={1717.849}
      y2={597.101}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000058568814418098902670000018254235503046753155_)",
      }}
      d="m1712.6 594.6 3 .1c1.3.1 2.3 1.2 2.3 2.5-.1 1.3-1.2 2.3-2.5 2.3l-3-.1c-1.3-.1-2.3-1.2-2.3-2.5s1.2-2.3 2.5-2.3z"
    />
    <linearGradient
      id="SVGID_00000157308918430441587770000012189149900721840815_"
      gradientUnits="userSpaceOnUse"
      x1={1720.076}
      y1={597.402}
      x2={1727.848}
      y2={597.402}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000157308918430441587770000012189149900721840815_)",
      }}
      d="M1722.5 595h3c1.3 0 2.4 1.1 2.4 2.4 0 1.3-1.1 2.4-2.4 2.4h-3c-1.3 0-2.4-1.1-2.4-2.4 0-1.4 1.1-2.4 2.4-2.4z"
    />
    <linearGradient
      id="SVGID_00000082326881185267678740000002437791759695150506_"
      gradientUnits="userSpaceOnUse"
      x1={1730.073}
      y1={597.362}
      x2={1737.849}
      y2={597.362}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000082326881185267678740000002437791759695150506_)",
      }}
      d="m1732.4 595 3-.1c1.3 0 2.4 1 2.4 2.3 0 1.3-1 2.4-2.3 2.4l-3 .1c-1.3 0-2.4-1-2.4-2.3-.1-1.3 1-2.4 2.3-2.4z"
    />
    <linearGradient
      id="SVGID_00000092428231458490961600000010308896870661681074_"
      gradientUnits="userSpaceOnUse"
      x1={1740.065}
      y1={596.971}
      x2={1747.841}
      y2={596.971}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000092428231458490961600000010308896870661681074_)",
      }}
      d="m1742.3 594.7 3-.2c1.3-.1 2.4.9 2.5 2.2.1 1.3-.9 2.4-2.2 2.5l-3 .2c-1.3.1-2.4-.9-2.5-2.2-.1-1.3.9-2.5 2.2-2.5z"
    />
    <linearGradient
      id="SVGID_00000141426675941225251200000002866185223009607860_"
      gradientUnits="userSpaceOnUse"
      x1={1750.038}
      y1={596.219}
      x2={1757.81}
      y2={596.219}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000141426675941225251200000002866185223009607860_)",
      }}
      d="m1752.2 594 3-.3c1.3-.1 2.5.8 2.6 2.2.1 1.3-.8 2.5-2.2 2.6l-3 .3c-1.3.1-2.5-.8-2.6-2.2-.1-1.3.9-2.5 2.2-2.6z"
    />
    <linearGradient
      id="SVGID_00000026876348146399859150000002017619049161622931_"
      gradientUnits="userSpaceOnUse"
      x1={1759.979}
      y1={595.097}
      x2={1767.743}
      y2={595.097}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000026876348146399859150000002017619049161622931_)",
      }}
      d="m1762.1 592.9 3-.4c1.3-.2 2.5.7 2.7 2.1.2 1.3-.7 2.5-2.1 2.7l-3 .4c-1.3.2-2.5-.7-2.7-2.1-.2-1.3.7-2.5 2.1-2.7z"
    />
    <linearGradient
      id="SVGID_00000126305492356303313700000012560599148245536402_"
      gradientUnits="userSpaceOnUse"
      x1={1769.871}
      y1={593.595}
      x2={1777.622}
      y2={593.595}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000126305492356303313700000012560599148245536402_)",
      }}
      d="m1771.9 591.5 3-.5c1.3-.2 2.5.7 2.8 2 .2 1.3-.7 2.5-2 2.8l-3 .5c-1.3.2-2.5-.7-2.8-2-.2-1.3.7-2.6 2-2.8z"
    />
    <linearGradient
      id="SVGID_00000144302024700789022210000004659213185932756381_"
      gradientUnits="userSpaceOnUse"
      x1={1779.7}
      y1={591.704}
      x2={1787.432}
      y2={591.704}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000144302024700789022210000004659213185932756381_)",
      }}
      d="m1781.6 589.7 2.9-.6c1.3-.3 2.6.5 2.8 1.8.3 1.3-.5 2.6-1.8 2.8l-2.9.6c-1.3.3-2.6-.6-2.8-1.8-.3-1.3.5-2.6 1.8-2.8z"
    />
    <linearGradient
      id="SVGID_00000118363518762277873750000009438171159124612233_"
      gradientUnits="userSpaceOnUse"
      x1={1789.446}
      y1={589.417}
      x2={1797.154}
      y2={589.417}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000118363518762277873750000009438171159124612233_)",
      }}
      d="m1791.2 587.5 2.9-.7c1.3-.3 2.6.4 2.9 1.7.3 1.3-.4 2.6-1.7 2.9l-2.9.7c-1.3.3-2.6-.4-2.9-1.7-.3-1.3.5-2.6 1.7-2.9z"
    />
    <linearGradient
      id="SVGID_00000082326967004477911470000011153034189686217910_"
      gradientUnits="userSpaceOnUse"
      x1={1799.091}
      y1={586.727}
      x2={1806.77}
      y2={586.727}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000082326967004477911470000011153034189686217910_)",
      }}
      d="m1800.8 584.9 2.9-.9c1.3-.4 2.6.3 3 1.6.4 1.3-.3 2.6-1.6 3l-2.9.9c-1.3.4-2.6-.3-3-1.6-.4-1.3.3-2.7 1.6-3z"
    />
    <linearGradient
      id="SVGID_00000159435285733042696230000004808571792653136026_"
      gradientUnits="userSpaceOnUse"
      x1={1808.604}
      y1={583.631}
      x2={1816.263}
      y2={583.631}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000159435285733042696230000004808571792653136026_)",
      }}
      d="m1810.2 581.9 2.8-1c1.3-.4 2.6.2 3.1 1.5.4 1.3-.2 2.6-1.5 3.1l-2.8 1c-1.3.4-2.6-.2-3.1-1.5-.4-1.3.3-2.7 1.5-3.1z"
    />
    <linearGradient
      id="SVGID_00000065067589406473374810000006427546408698561436_"
      gradientUnits="userSpaceOnUse"
      x1={1817.996}
      y1={580.106}
      x2={1825.594}
      y2={580.106}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065067589406473374810000006427546408698561436_)",
      }}
      d="m1819.5 578.4 2.8-1.1c1.2-.5 2.6.1 3.1 1.3s-.1 2.6-1.3 3.1l-2.8 1.1c-1.2.5-2.6-.1-3.1-1.3s.1-2.6 1.3-3.1z"
    />
    <linearGradient
      id="SVGID_00000021799685812544140770000005751788775928123308_"
      gradientUnits="userSpaceOnUse"
      x1={1827.206}
      y1={576.151}
      x2={1834.753}
      y2={576.151}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021799685812544140770000005751788775928123308_)",
      }}
      d="m1828.6 574.6 2.7-1.2c1.2-.6 2.6 0 3.2 1.2.6 1.2 0 2.6-1.2 3.2l-2.7 1.2c-1.2.6-2.6 0-3.2-1.2-.5-1.2 0-2.7 1.2-3.2z"
    />
    <linearGradient
      id="SVGID_00000138561620537852208740000012605385663007236009_"
      gradientUnits="userSpaceOnUse"
      x1={1836.225}
      y1={571.777}
      x2={1843.716}
      y2={571.777}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000138561620537852208740000012605385663007236009_)",
      }}
      d="m1837.5 570.3 2.7-1.4c1.2-.6 2.6-.1 3.2 1 .6 1.2.1 2.6-1 3.2l-2.7 1.4c-1.2.6-2.6.1-3.2-1-.6-1.1-.2-2.6 1-3.2z"
    />
    <linearGradient
      id="SVGID_00000105387767438277644730000003588159890040499884_"
      gradientUnits="userSpaceOnUse"
      x1={1845.037}
      y1={566.993}
      x2={1852.466}
      y2={566.993}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000105387767438277644730000003588159890040499884_)",
      }}
      d="m1846.2 565.6 2.6-1.5c1.2-.7 2.6-.3 3.3.9.7 1.2.3 2.6-.9 3.3l-2.6 1.5c-1.2.7-2.6.3-3.3-.9-.6-1.1-.2-2.6.9-3.3z"
    />
    <linearGradient
      id="SVGID_00000026129293719483900710000006168022579698805676_"
      gradientUnits="userSpaceOnUse"
      x1={1853.621}
      y1={561.809}
      x2={1860.982}
      y2={561.809}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000026129293719483900710000006168022579698805676_)",
      }}
      d="m1854.7 560.6 2.5-1.6c1.1-.7 2.6-.4 3.3.7.7 1.1.4 2.6-.7 3.3l-2.5 1.6c-1.1.7-2.6.4-3.3-.7-.7-1.1-.4-2.6.7-3.3z"
    />
    <linearGradient
      id="SVGID_00000072261278552679745590000000717472050549537948_"
      gradientUnits="userSpaceOnUse"
      x1={1861.96}
      y1={556.234}
      x2={1869.246}
      y2={556.234}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072261278552679745590000000717472050549537948_)",
      }}
      d="m1863 555.1 2.5-1.7c1.1-.8 2.6-.5 3.4.6.8 1.1.5 2.6-.6 3.4l-2.5 1.7c-1.1.8-2.6.5-3.4-.6-.8-1.1-.5-2.6.6-3.4z"
    />
    <linearGradient
      id="SVGID_00000134232727668197613930000010716335350274720956_"
      gradientUnits="userSpaceOnUse"
      x1={1870.031}
      y1={550.278}
      x2={1877.237}
      y2={550.278}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000134232727668197613930000010716335350274720956_)",
      }}
      d="m1871 549.3 2.4-1.8c1.1-.8 2.6-.6 3.4.4.8 1.1.6 2.6-.4 3.4l-2.4 1.8c-1.1.8-2.6.6-3.4-.4-.9-1.1-.7-2.6.4-3.4z"
    />
    <linearGradient
      id="SVGID_00000065063788842961025610000001123217173015743916_"
      gradientUnits="userSpaceOnUse"
      x1={1877.813}
      y1={543.946}
      x2={1884.933}
      y2={543.946}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065063788842961025610000001123217173015743916_)",
      }}
      d="m1878.7 543.1 2.3-2c1-.9 2.5-.8 3.4.3.9 1 .8 2.5-.3 3.4l-2.3 2c-1 .9-2.5.8-3.4-.3-.9-1-.8-2.5.3-3.4z"
    />
    <linearGradient
      id="SVGID_00000035501591354304677450000000113829756351278754_"
      gradientUnits="userSpaceOnUse"
      x1={1885.285}
      y1={537.249}
      x2={1892.311}
      y2={537.249}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000035501591354304677450000000113829756351278754_)",
      }}
      d="m1886 536.5 2.2-2.1c1-.9 2.5-.9 3.4.1.9 1 .9 2.5-.1 3.4l-2.2 2.1c-1 .9-2.5.9-3.4-.1-.9-.9-.8-2.5.1-3.4z"
    />
    <linearGradient
      id="SVGID_00000080909969984269906240000012395768067288023735_"
      gradientUnits="userSpaceOnUse"
      x1={1892.421}
      y1={530.194}
      x2={1899.346}
      y2={530.194}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000080909969984269906240000012395768067288023735_)",
      }}
      d="m1893.1 529.6 2.1-2.2c.9-1 2.5-1 3.4-.1 1 .9 1 2.5.1 3.4l-2.1 2.2c-.9 1-2.5 1-3.4.1-1-.9-1-2.4-.1-3.4z"
    />
    <linearGradient
      id="SVGID_00000142157507162510720950000017756709441370174384_"
      gradientUnits="userSpaceOnUse"
      x1={1899.197}
      y1={522.791}
      x2={1906.013}
      y2={522.791}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000142157507162510720950000017756709441370174384_)",
      }}
      d="m1899.8 522.3 2-2.3c.9-1 2.4-1.1 3.4-.3 1 .9 1.1 2.4.3 3.4l-2 2.3c-.9 1-2.4 1.1-3.4.3-1.1-.8-1.2-2.3-.3-3.4z"
    />
    <linearGradient
      id="SVGID_00000056387955287096177090000013877437403924192151_"
      gradientUnits="userSpaceOnUse"
      x1={1905.586}
      y1={515.05}
      x2={1912.284}
      y2={515.05}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000056387955287096177090000013877437403924192151_)",
      }}
      d="m1906.1 514.7 1.8-2.4c.8-1.1 2.3-1.3 3.4-.4 1.1.8 1.3 2.3.4 3.4l-1.8 2.4c-.8 1.1-2.3 1.3-3.4.4-1-.8-1.2-2.3-.4-3.4z"
    />
    <linearGradient
      id="SVGID_00000106831767319296058660000004798347376165362356_"
      gradientUnits="userSpaceOnUse"
      x1={1911.559}
      y1={506.985}
      x2={1918.131}
      y2={506.985}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106831767319296058660000004798347376165362356_)",
      }}
      d="m1912 506.8 1.7-2.5c.8-1.1 2.3-1.4 3.4-.6 1.1.8 1.4 2.3.6 3.4l-1.7 2.5c-.8 1.1-2.3 1.4-3.4.6-1.1-.7-1.4-2.3-.6-3.4z"
    />
    <linearGradient
      id="SVGID_00000108296724790920631300000017408112232755528590_"
      gradientUnits="userSpaceOnUse"
      x1={1917.087}
      y1={498.609}
      x2={1923.525}
      y2={498.609}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000108296724790920631300000017408112232755528590_)",
      }}
      d="m1917.4 498.6 1.6-2.6c.7-1.1 2.2-1.5 3.3-.8 1.1.7 1.5 2.2.8 3.3l-1.6 2.6c-.7 1.1-2.2 1.5-3.3.8-1.1-.6-1.5-2.1-.8-3.3z"
    />
    <linearGradient
      id="SVGID_00000014633972328803221200000017491792587878662553_"
      gradientUnits="userSpaceOnUse"
      x1={1922.142}
      y1={489.941}
      x2={1928.437}
      y2={489.941}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000014633972328803221200000017491792587878662553_)",
      }}
      d="m1922.4 490.1 1.4-2.6c.6-1.2 2.1-1.6 3.3-1 1.2.6 1.6 2.1 1 3.3l-1.4 2.6c-.6 1.2-2.1 1.6-3.3 1-1.2-.6-1.6-2.1-1-3.3z"
    />
    <linearGradient
      id="SVGID_00000083774387246586783070000010411876590769395391_"
      gradientUnits="userSpaceOnUse"
      x1={1926.694}
      y1={481}
      x2={1932.836}
      y2={481}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083774387246586783070000010411876590769395391_)",
      }}
      d="m1926.9 481.3 1.3-2.7c.6-1.2 2-1.8 3.2-1.2 1.2.6 1.8 2 1.2 3.2l-1.3 2.7c-.6 1.2-2 1.8-3.2 1.2-1.2-.5-1.7-1.9-1.2-3.2z"
    />
    <linearGradient
      id="SVGID_00000078047340608544692400000001545548331510321324_"
      gradientUnits="userSpaceOnUse"
      x1={1930.714}
      y1={471.811}
      x2={1936.696}
      y2={471.811}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000078047340608544692400000001545548331510321324_)",
      }}
      d="m1930.9 472.3 1.1-2.8c.5-1.3 1.9-1.9 3.2-1.4 1.3.5 1.9 1.9 1.4 3.2l-1.1 2.8c-.5 1.3-1.9 1.9-3.2 1.4-1.3-.5-1.9-1.9-1.4-3.2z"
    />
    <linearGradient
      id="SVGID_00000121244412225212297120000004369146102520470690_"
      gradientUnits="userSpaceOnUse"
      x1={1934.171}
      y1={462.405}
      x2={1939.992}
      y2={462.405}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121244412225212297120000004369146102520470690_)",
      }}
      d="m1934.3 463.1.9-2.8c.4-1.3 1.8-2 3.1-1.6 1.3.4 2 1.8 1.6 3.1l-.9 2.9c-.4 1.3-1.8 2-3.1 1.6-1.3-.5-2-1.9-1.6-3.2z"
    />
    <linearGradient
      id="SVGID_00000035528015543951547050000010840427679518333322_"
      gradientUnits="userSpaceOnUse"
      x1={1937.035}
      y1={452.792}
      x2={1942.659}
      y2={452.792}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000035528015543951547050000010840427679518333322_)",
      }}
      d="m1937.1 453.7.7-2.9c.3-1.3 1.7-2.1 3-1.8 1.3.3 2.1 1.7 1.8 3l-.7 2.9c-.3 1.3-1.7 2.1-3 1.8-1.3-.4-2.1-1.7-1.8-3z"
    />
    <linearGradient
      id="SVGID_00000008829089231594562530000010405146305998141601_"
      gradientUnits="userSpaceOnUse"
      x1={1939.254}
      y1={443.024}
      x2={1944.686}
      y2={443.024}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008829089231594562530000010405146305998141601_)",
      }}
      d="m1939.3 444.1.5-3c.2-1.3 1.5-2.2 2.8-2 1.3.2 2.2 1.5 2 2.8l-.5 3c-.2 1.3-1.5 2.2-2.8 2-1.4-.2-2.2-1.5-2-2.8z"
    />
    <linearGradient
      id="SVGID_00000034078267990438451660000010256384403733956797_"
      gradientUnits="userSpaceOnUse"
      x1={1940.84}
      y1={433.137}
      x2={1946.078}
      y2={433.137}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000034078267990438451660000010256384403733956797_)",
      }}
      d="m1940.9 434.3.4-3c.2-1.3 1.4-2.3 2.7-2.1 1.3.2 2.3 1.4 2.1 2.7l-.4 3c-.2 1.3-1.4 2.3-2.7 2.1-1.3-.1-2.3-1.3-2.1-2.7z"
    />
    <linearGradient
      id="SVGID_00000113311467535369465450000008650810333236138893_"
      gradientUnits="userSpaceOnUse"
      x1={1941.796}
      y1={423.176}
      x2={1946.842}
      y2={423.176}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000113311467535369465450000008650810333236138893_)",
      }}
      d="m1941.8 424.5.2-3c.1-1.3 1.2-2.4 2.6-2.3 1.3.1 2.4 1.2 2.3 2.6l-.2 3c-.1 1.3-1.2 2.4-2.6 2.3-1.3-.1-2.4-1.2-2.3-2.6z"
    />
    <linearGradient
      id="SVGID_00000003080971940055582670000014413223390359369375_"
      gradientUnits="userSpaceOnUse"
      x1={1942.107}
      y1={413.181}
      x2={1947.006}
      y2={413.181}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003080971940055582670000014413223390359369375_)",
      }}
      d="M1942.1 414.7v-3c0-1.3 1.1-2.4 2.4-2.5 1.3 0 2.4 1.1 2.5 2.4v3c0 1.3-1.1 2.4-2.4 2.5-1.4 0-2.5-1.1-2.5-2.4z"
    />
    <linearGradient
      id="SVGID_00000098930549824756017910000011893548588181243795_"
      gradientUnits="userSpaceOnUse"
      x1={1941.635}
      y1={403.19}
      x2={1946.716}
      y2={403.19}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000098930549824756017910000011893548588181243795_)",
      }}
      d="m1941.8 404.9-.2-3c-.1-1.3.9-2.5 2.3-2.6s2.5.9 2.6 2.3l.2 3c.1 1.3-.9 2.5-2.3 2.6-1.3 0-2.5-1-2.6-2.3z"
    />
    <linearGradient
      id="SVGID_00000132074492366742824220000010344727827441662905_"
      gradientUnits="userSpaceOnUse"
      x1={1940.548}
      y1={393.241}
      x2={1945.809}
      y2={393.241}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132074492366742824220000010344727827441662905_)",
      }}
      d="m1941 395-.4-3c-.2-1.3.8-2.6 2.1-2.7 1.3-.2 2.6.8 2.7 2.1l.4 3c.2 1.3-.8 2.6-2.1 2.7-1.3.2-2.6-.7-2.7-2.1z"
    />
    <linearGradient
      id="SVGID_00000088816321547322271060000006030655289363470981_"
      gradientUnits="userSpaceOnUse"
      x1={1938.847}
      y1={383.374}
      x2={1944.289}
      y2={383.374}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088816321547322271060000006030655289363470981_)",
      }}
      d="m1939.5 385.3-.6-2.9c-.3-1.3.6-2.6 1.9-2.9 1.3-.3 2.6.6 2.9 1.9l.6 2.9c.3 1.3-.6 2.6-1.9 2.9-1.4.3-2.7-.6-2.9-1.9z"
    />
    <linearGradient
      id="SVGID_00000023268070055647006870000002636820952328733334_"
      gradientUnits="userSpaceOnUse"
      x1={1936.533}
      y1={373.627}
      x2={1942.156}
      y2={373.627}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000023268070055647006870000002636820952328733334_)",
      }}
      d="m1937.4 375.7-.8-2.9c-.3-1.3.4-2.6 1.7-3 1.3-.3 2.6.4 3 1.7l.8 2.9c.3 1.3-.4 2.6-1.7 3-1.4.4-2.7-.4-3-1.7z"
    />
    <linearGradient
      id="SVGID_00000102534939643972629840000011907885777540938144_"
      gradientUnits="userSpaceOnUse"
      x1={1933.605}
      y1={364.039}
      x2={1939.409}
      y2={364.039}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000102534939643972629840000011907885777540938144_)",
      }}
      d="m1934.7 366.2-.9-2.8c-.4-1.3.3-2.6 1.5-3.1 1.3-.4 2.6.3 3.1 1.5l.9 2.8c.4 1.3-.3 2.6-1.5 3.1-1.3.5-2.7-.2-3.1-1.5z"
    />
    <linearGradient
      id="SVGID_00000080164115257295297800000015504932898853277360_"
      gradientUnits="userSpaceOnUse"
      x1={1930.062}
      y1={354.656}
      x2={1936.046}
      y2={354.656}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000080164115257295297800000015504932898853277360_)",
      }}
      d="m1931.4 357-1.1-2.8c-.5-1.2.1-2.7 1.3-3.2s2.7.1 3.2 1.3l1.1 2.8c.5 1.2-.1 2.7-1.3 3.2-1.3.5-2.7-.1-3.2-1.3z"
    />
    <linearGradient
      id="SVGID_00000132083244444510447250000012280426188765704327_"
      gradientUnits="userSpaceOnUse"
      x1={1925.904}
      y1={345.524}
      x2={1932.069}
      y2={345.524}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132083244444510447250000012280426188765704327_)",
      }}
      d="m1927.5 347.9-1.3-2.7c-.6-1.2-.1-2.7 1.1-3.2 1.2-.6 2.7-.1 3.2 1.1l1.3 2.7c.6 1.2.1 2.7-1.1 3.2-1.2.6-2.7.1-3.2-1.1z"
    />
    <linearGradient
      id="SVGID_00000023281117230603266370000004300087549582086308_"
      gradientUnits="userSpaceOnUse"
      x1={1921.13}
      y1={336.691}
      x2={1927.475}
      y2={336.691}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000023281117230603266370000004300087549582086308_)",
      }}
      d="m1923 339.2-1.5-2.6c-.7-1.2-.3-2.6.9-3.3 1.2-.7 2.6-.3 3.3.9l1.5 2.6c.7 1.2.3 2.6-.9 3.3-1.2.7-2.7.3-3.3-.9z"
    />
    <linearGradient
      id="SVGID_00000072258501297487661370000003920968464131427460_"
      gradientUnits="userSpaceOnUse"
      x1={1915.745}
      y1={328.212}
      x2={1922.268}
      y2={328.212}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072258501297487661370000003920968464131427460_)",
      }}
      d="m1917.8 330.8-1.7-2.5c-.7-1.1-.5-2.6.7-3.4 1.1-.7 2.6-.5 3.4.7l1.7 2.5c.7 1.1.5 2.6-.6 3.4-1.2.7-2.7.4-3.5-.7z"
    />
    <linearGradient
      id="SVGID_00000065059284533886256380000005620513408307023238_"
      gradientUnits="userSpaceOnUse"
      x1={1909.757}
      y1={320.141}
      x2={1916.456}
      y2={320.141}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065059284533886256380000005620513408307023238_)",
      }}
      d="m1912.1 322.8-1.9-2.4c-.8-1-.6-2.6.4-3.4 1-.8 2.6-.7 3.4.4l1.9 2.4c.8 1 .7 2.6-.4 3.4-1 .8-2.5.7-3.4-.4z"
    />
    <linearGradient
      id="SVGID_00000160910682068586623450000003684109699281814671_"
      gradientUnits="userSpaceOnUse"
      x1={1903.18}
      y1={312.538}
      x2={1910.05}
      y2={312.538}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160910682068586623450000003684109699281814671_)",
      }}
      d="m1905.9 315.3-2-2.2c-.9-1-.8-2.5.1-3.4 1-.9 2.5-.8 3.4.1l2 2.2c.9 1 .8 2.5-.1 3.4-1 .9-2.5.9-3.4-.1z"
    />
    <linearGradient
      id="SVGID_00000150815964496163034040000002710422847475427213_"
      gradientUnits="userSpaceOnUse"
      x1={1896.037}
      y1={305.462}
      x2={1903.07}
      y2={305.462}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000150815964496163034040000002710422847475427213_)",
      }}
      d="m1899 308.3-2.2-2c-1-.9-1-2.4-.1-3.4s2.4-1 3.4-.1l2.2 2c1 .9 1 2.4.1 3.4-.9.9-2.4 1-3.4.1z"
    />
    <linearGradient
      id="SVGID_00000142886587014184476570000017699536681766027904_"
      gradientUnits="userSpaceOnUse"
      x1={1888.352}
      y1={298.975}
      x2={1895.564}
      y2={298.975}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000142886587014184476570000017699536681766027904_)",
      }}
      d="m1891.6 301.8-2.3-1.8c-1-.8-1.2-2.3-.4-3.4.8-1 2.3-1.2 3.4-.4l2.4 1.9c1 .8 1.2 2.3.4 3.4-.9 1-2.4 1.1-3.5.3z"
    />
    <linearGradient
      id="SVGID_00000091706449938799770290000009404562988500949407_"
      gradientUnits="userSpaceOnUse"
      x1={1880.153}
      y1={293.152}
      x2={1887.492}
      y2={293.152}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000091706449938799770290000009404562988500949407_)",
      }}
      d="m1883.8 296-2.5-1.6c-1.1-.7-1.4-2.2-.7-3.3.7-1.1 2.2-1.4 3.3-.7l2.5 1.6c1.1.7 1.4 2.2.7 3.3-.7 1.1-2.2 1.4-3.3.7z"
    />
    <linearGradient
      id="SVGID_00000106868106709463256560000008184620379836340651_"
      gradientUnits="userSpaceOnUse"
      x1={1871.484}
      y1={288.065}
      x2={1878.951}
      y2={288.065}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106868106709463256560000008184620379836340651_)",
      }}
      d="m1875.4 290.9-2.6-1.4c-1.2-.6-1.6-2.1-1-3.3.6-1.2 2.1-1.6 3.3-1l2.6 1.4c1.2.6 1.6 2.1 1 3.3-.7 1.2-2.1 1.6-3.3 1z"
    />
    <linearGradient
      id="SVGID_00000121958893567930935150000001757771439228696992_"
      gradientUnits="userSpaceOnUse"
      x1={1862.429}
      y1={283.72}
      x2={1870}
      y2={283.72}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121958893567930935150000001757771439228696992_)",
      }}
      d="m1866.6 286.5-2.8-1.2c-1.2-.5-1.8-1.9-1.3-3.2.5-1.2 1.9-1.8 3.2-1.3l2.8 1.2c1.2.5 1.8 1.9 1.3 3.2-.5 1.3-1.9 1.9-3.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000083089209437671118450000012323036009874507198_"
      gradientUnits="userSpaceOnUse"
      x1={1853.061}
      y1={280.122}
      x2={1860.714}
      y2={280.122}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083089209437671118450000012323036009874507198_)",
      }}
      d="m1857.5 282.9-2.8-1c-1.3-.4-1.9-1.8-1.5-3.1.4-1.3 1.8-1.9 3.1-1.5l2.8 1c1.3.4 1.9 1.8 1.5 3.1-.4 1.2-1.8 1.9-3.1 1.5z"
    />
    <linearGradient
      id="SVGID_00000127738976801843255470000010602131873214687642_"
      gradientUnits="userSpaceOnUse"
      x1={1843.447}
      y1={277.271}
      x2={1851.164}
      y2={277.271}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000127738976801843255470000010602131873214687642_)",
      }}
      d="m1848.2 280-2.9-.7c-1.3-.3-2.1-1.6-1.7-2.9.3-1.3 1.6-2.1 2.9-1.7l2.9.7c1.3.3 2.1 1.6 1.7 2.9-.3 1.2-1.7 2-2.9 1.7z"
    />
    <linearGradient
      id="SVGID_00000027583909528030951200000003820691888237279420_"
      gradientUnits="userSpaceOnUse"
      x1={1833.652}
      y1={275.167}
      x2={1841.412}
      y2={275.167}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000027583909528030951200000003820691888237279420_)",
      }}
      d="m1838.6 277.8-3-.5c-1.3-.2-2.2-1.5-1.9-2.8.2-1.3 1.5-2.2 2.8-2l3 .5c1.3.2 2.2 1.5 2 2.8-.4 1.3-1.6 2.2-2.9 2z"
    />
    <linearGradient
      id="SVGID_00000178915417389984367220000013595799404843644836_"
      gradientUnits="userSpaceOnUse"
      x1={1823.734}
      y1={273.811}
      x2={1831.521}
      y2={273.811}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178915417389984367220000013595799404843644836_)",
      }}
      d="m1828.9 276.3-3-.3c-1.3-.1-2.3-1.3-2.2-2.6.1-1.3 1.3-2.3 2.6-2.2l3 .3c1.3.1 2.3 1.3 2.2 2.6-.1 1.4-1.3 2.4-2.6 2.2z"
    />
    <linearGradient
      id="SVGID_00000132080406204951107050000016257437526478236562_"
      gradientUnits="userSpaceOnUse"
      x1={1813.75}
      y1={273.205}
      x2={1821.547}
      y2={273.205}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132080406204951107050000016257437526478236562_)",
      }}
      d="m1819.1 275.6-3-.1c-1.3 0-2.4-1.1-2.3-2.5 0-1.3 1.1-2.4 2.5-2.3l3 .1c1.3 0 2.4 1.1 2.3 2.5-.1 1.3-1.2 2.4-2.5 2.3z"
    />
    <linearGradient
      id="SVGID_00000097499987588638477990000013544256467621377470_"
      gradientUnits="userSpaceOnUse"
      x1={1803.757}
      y1={273.354}
      x2={1811.547}
      y2={273.354}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000097499987588638477990000013544256467621377470_)",
      }}
      d="m1809.3 275.7-3 .2c-1.3.1-2.4-.9-2.5-2.3-.1-1.3.9-2.4 2.3-2.5l3-.2c1.3-.1 2.5.9 2.5 2.3 0 1.3-1 2.4-2.3 2.5z"
    />
    <linearGradient
      id="SVGID_00000094579460371200693990000015917619295421464233_"
      gradientUnits="userSpaceOnUse"
      x1={1793.815}
      y1={274.268}
      x2={1801.58}
      y2={274.268}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000094579460371200693990000015917619295421464233_)",
      }}
      d="m1799.5 276.4-3 .4c-1.3.2-2.5-.8-2.7-2.1-.2-1.3.8-2.5 2.1-2.7l3-.4c1.3-.2 2.5.8 2.7 2.1.1 1.4-.8 2.6-2.1 2.7z"
    />
    <linearGradient
      id="SVGID_00000055696184984609333980000011968131998277357463_"
      gradientUnits="userSpaceOnUse"
      x1={1783.983}
      y1={275.957}
      x2={1791.704}
      y2={275.957}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000055696184984609333980000011968131998277357463_)",
      }}
      d="m1789.8 278-2.9.6c-1.3.3-2.6-.5-2.8-1.8-.3-1.3.5-2.6 1.8-2.8l2.9-.6c1.3-.3 2.6.5 2.8 1.8.3 1.2-.5 2.5-1.8 2.8z"
    />
    <linearGradient
      id="SVGID_00000182511447686582368980000006025071953425936031_"
      gradientUnits="userSpaceOnUse"
      x1={1774.33}
      y1={278.433}
      x2={1781.987}
      y2={278.433}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000182511447686582368980000006025071953425936031_)",
      }}
      d="m1780.3 280.3-2.9.9c-1.3.4-2.6-.3-3-1.6-.4-1.3.3-2.6 1.6-3l2.9-.9c1.3-.4 2.6.3 3 1.6.4 1.3-.4 2.6-1.6 3z"
    />
    <linearGradient
      id="SVGID_00000077295958592091124590000017996190978973625251_"
      gradientUnits="userSpaceOnUse"
      x1={1764.929}
      y1={281.708}
      x2={1772.498}
      y2={281.708}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000077295958592091124590000017996190978973625251_)",
      }}
      d="m1771 283.4-2.8 1.1c-1.2.5-2.6-.1-3.1-1.3s.1-2.6 1.3-3.1l2.8-1.1c1.2-.5 2.6.1 3.1 1.3s-.1 2.6-1.3 3.1z"
    />
    <linearGradient
      id="SVGID_00000165925095799057416840000015440254034051164819_"
      gradientUnits="userSpaceOnUse"
      x1={1755.861}
      y1={285.791}
      x2={1763.318}
      y2={285.791}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000165925095799057416840000015440254034051164819_)",
      }}
      d="m1762 287.3-2.7 1.3c-1.2.6-2.6.1-3.2-1.1-.6-1.2-.1-2.6 1.1-3.2l2.7-1.3c1.2-.6 2.6-.1 3.2 1.1.6 1.1.1 2.6-1.1 3.2z"
    />
    <linearGradient
      id="SVGID_00000059280227154301053280000010486394105912511373_"
      gradientUnits="userSpaceOnUse"
      x1={1747.215}
      y1={290.684}
      x2={1754.531}
      y2={290.684}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000059280227154301053280000010486394105912511373_)",
      }}
      d="m1753.4 291.9-2.5 1.6c-1.1.7-2.6.4-3.3-.8-.7-1.1-.4-2.6.8-3.3l2.5-1.6c1.1-.7 2.6-.4 3.3.8.7 1.1.3 2.6-.8 3.3z"
    />
    <linearGradient
      id="SVGID_00000093140515493870982100000000670133304080420540_"
      gradientUnits="userSpaceOnUse"
      x1={1739.084}
      y1={296.377}
      x2={1746.232}
      y2={296.377}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093140515493870982100000000670133304080420540_)",
      }}
      d="m1745.3 297.4-2.4 1.8c-1 .8-2.5.6-3.3-.4-.8-1-.6-2.5.4-3.3l2.4-1.8c1-.8 2.5-.6 3.3.4.8 1 .6 2.5-.4 3.3z"
    />
    <linearGradient
      id="SVGID_00000013181422930586740030000004856160962671174046_"
      gradientUnits="userSpaceOnUse"
      x1={1731.564}
      y1={302.847}
      x2={1738.514}
      y2={302.847}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013181422930586740030000004856160962671174046_)",
      }}
      d="m1737.8 303.6-2.2 2.1c-1 .9-2.5.9-3.4-.1-.9-1-.9-2.5.1-3.4l2.2-2.1c1-.9 2.5-.9 3.4.1.9.9.8 2.5-.1 3.4z"
    />
    <linearGradient
      id="SVGID_00000094585897026234635840000000258240092458492335_"
      gradientUnits="userSpaceOnUse"
      x1={1724.775}
      y1={310.02}
      x2={1731.499}
      y2={310.02}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000094585897026234635840000000258240092458492335_)",
      }}
      d="m1730.9 310.4-2 2.3c-.9 1-2.4 1.1-3.4.2-1-.9-1.1-2.4-.2-3.4l2-2.3c.9-1 2.4-1.1 3.4-.2 1 .9 1.1 2.5.2 3.4z"
    />
    <linearGradient
      id="SVGID_00000120539734766962439890000011732509420496179894_"
      gradientUnits="userSpaceOnUse"
      x1={1718.803}
      y1={317.931}
      x2={1725.256}
      y2={317.931}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000120539734766962439890000011732509420496179894_)",
      }}
      d="m1724.8 318-1.7 2.5c-.7 1.1-2.2 1.4-3.3.6-1.1-.7-1.4-2.2-.6-3.3l1.7-2.5c.7-1.1 2.2-1.4 3.3-.6 1.1.8 1.4 2.3.6 3.3z"
    />
    <linearGradient
      id="SVGID_00000137839589072002446870000011550623294609201549_"
      gradientUnits="userSpaceOnUse"
      x1={1713.742}
      y1={326.466}
      x2={1719.916}
      y2={326.466}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000137839589072002446870000011550623294609201549_)",
      }}
      d="m1719.6 326.3-1.4 2.6c-.6 1.2-2.1 1.6-3.2 1s-1.6-2.1-1-3.2l1.4-2.6c.6-1.2 2.1-1.6 3.2-1 1.2.6 1.7 2 1 3.2z"
    />
    <linearGradient
      id="SVGID_00000024694916909399386120000009160140850531920818_"
      gradientUnits="userSpaceOnUse"
      x1={1709.609}
      y1={335.501}
      x2={1715.501}
      y2={335.501}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000024694916909399386120000009160140850531920818_)",
      }}
      d="m1715.3 335-1.1 2.8c-.5 1.2-1.9 1.8-3.1 1.3-1.2-.5-1.8-1.9-1.3-3.1l1.1-2.8c.5-1.2 1.9-1.8 3.1-1.3 1.2.5 1.8 1.9 1.3 3.1z"
    />
    <linearGradient
      id="SVGID_00000098919624100097778970000011075443667750013858_"
      gradientUnits="userSpaceOnUse"
      x1={1706.403}
      y1={344.92}
      x2={1712.014}
      y2={344.92}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000098919624100097778970000011075443667750013858_)",
      }}
      d="m1711.9 344.2-.9 2.9c-.4 1.3-1.7 2-3 1.6-1.3-.4-2-1.7-1.6-3l.9-2.9c.4-1.3 1.7-2 3-1.6 1.3.4 2 1.7 1.6 3z"
    />
    <linearGradient
      id="SVGID_00000097469307598922484290000010745285601220448396_"
      gradientUnits="userSpaceOnUse"
      x1={1704.112}
      y1={354.615}
      x2={1709.445}
      y2={354.615}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000097469307598922484290000010745285601220448396_)",
      }}
      d="m1709.4 353.6-.6 2.9c-.3 1.3-1.5 2.1-2.8 1.9-1.3-.3-2.1-1.5-1.9-2.8l.6-2.9c.3-1.3 1.5-2.1 2.8-1.9 1.3.3 2.2 1.5 1.9 2.8z"
    />
    <linearGradient
      id="SVGID_00000129883825357588115750000014572685252775682733_"
      gradientUnits="userSpaceOnUse"
      x1={1702.72}
      y1={364.494}
      x2={1707.782}
      y2={364.494}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129883825357588115750000014572685252775682733_)",
      }}
      d="m1707.8 363.3-.3 3c-.1 1.3-1.3 2.2-2.6 2.1-1.3-.1-2.2-1.3-2.1-2.6l.3-3c.1-1.3 1.3-2.2 2.6-2.1 1.3.1 2.2 1.3 2.1 2.6z"
    />
    <linearGradient
      id="SVGID_00000140735208112561917160000017398293370296474780_"
      gradientUnits="userSpaceOnUse"
      x1={1702.216}
      y1={374.47}
      x2={1707.008}
      y2={374.47}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000140735208112561917160000017398293370296474780_)",
      }}
      d="m1707 373-.1 3c0 1.3-1.1 2.3-2.4 2.3-1.3 0-2.3-1.1-2.3-2.4l.1-3c0-1.3 1.1-2.3 2.4-2.3 1.3 0 2.3 1.1 2.3 2.4z"
    />
    <linearGradient
      id="SVGID_00000147206078021657444810000001226943194396619156_"
      gradientUnits="userSpaceOnUse"
      x1={1702.383}
      y1={384.463}
      x2={1707.314}
      y2={384.463}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147206078021657444810000001226943194396619156_)",
      }}
      d="m1707.1 382.8.2 3c.1 1.3-.9 2.4-2.2 2.5-1.3.1-2.4-.9-2.5-2.2l-.2-3c-.1-1.3.9-2.4 2.2-2.5 1.3-.1 2.4.9 2.5 2.2z"
    />
    <linearGradient
      id="SVGID_00000054265671124751560450000008256526343050681731_"
      gradientUnits="userSpaceOnUse"
      x1={1703.364}
      y1={394.398}
      x2={1708.553}
      y2={394.398}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000054265671124751560450000008256526343050681731_)",
      }}
      d="m1708.1 392.6.5 3c.2 1.3-.7 2.5-2 2.7-1.3.2-2.5-.7-2.7-2l-.5-3c-.2-1.3.7-2.5 2-2.7 1.3-.2 2.5.7 2.7 2z"
    />
    <linearGradient
      id="SVGID_00000061449268858712917200000003576499934511544201_"
      gradientUnits="userSpaceOnUse"
      x1={1705.218}
      y1={404.196}
      x2={1710.666}
      y2={404.196}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000061449268858712917200000003576499934511544201_)",
      }}
      d="m1709.9 402.2.7 2.9c.3 1.3-.5 2.5-1.7 2.9s-2.5-.5-2.9-1.7l-.7-2.9c-.3-1.3.5-2.5 1.7-2.9 1.3-.4 2.6.4 2.9 1.7z"
    />
    <linearGradient
      id="SVGID_00000134218939691238463810000016165932398577833106_"
      gradientUnits="userSpaceOnUse"
      x1={1707.948}
      y1={413.773}
      x2={1713.658}
      y2={413.773}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000134218939691238463810000016165932398577833106_)",
      }}
      d="m1712.5 411.6 1 2.8c.4 1.2-.2 2.6-1.4 3-1.2.4-2.6-.2-3-1.4l-1-2.8c-.4-1.2.2-2.6 1.4-3 1.3-.5 2.6.1 3 1.4z"
    />
    <linearGradient
      id="SVGID_00000153671251006746894340000016732588331681380496_"
      gradientUnits="userSpaceOnUse"
      x1={1711.565}
      y1={423.039}
      x2={1717.538}
      y2={423.039}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000153671251006746894340000016732588331681380496_)",
      }}
      d="m1716.1 420.7 1.3 2.7c.5 1.2 0 2.6-1.2 3.1s-2.6 0-3.1-1.1l-1.3-2.7c-.5-1.2 0-2.6 1.2-3.1 1.1-.6 2.5-.1 3.1 1.1z"
    />
    <linearGradient
      id="SVGID_00000062906855420140666490000007360089501276063623_"
      gradientUnits="userSpaceOnUse"
      x1={1716.076}
      y1={431.89}
      x2={1722.314}
      y2={431.89}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062906855420140666490000007360089501276063623_)",
      }}
      d="m1720.5 429.4 1.5 2.6c.7 1.1.3 2.6-.8 3.2-1.1.7-2.6.3-3.2-.8l-1.5-2.6c-.7-1.1-.3-2.6.8-3.2 1.1-.7 2.5-.3 3.2.8z"
    />
    <linearGradient
      id="SVGID_00000088837389017548500340000000534157373107227298_"
      gradientUnits="userSpaceOnUse"
      x1={1721.483}
      y1={440.21}
      x2={1727.984}
      y2={440.21}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088837389017548500340000000534157373107227298_)",
      }}
      d="m1725.7 437.6 1.8 2.4c.8 1 .6 2.5-.5 3.3-1 .8-2.5.6-3.3-.5l-1.8-2.4c-.8-1-.6-2.5.5-3.3 1.1-.8 2.5-.5 3.3.5z"
    />
    <linearGradient
      id="SVGID_00000022540256930793677190000016850692221261432750_"
      gradientUnits="userSpaceOnUse"
      x1={1727.774}
      y1={447.868}
      x2={1734.532}
      y2={447.868}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000022540256930793677190000016850692221261432750_)",
      }}
      d="m1731.8 445.2 2.1 2.2c.9.9.8 2.4-.1 3.3-.9.9-2.4.8-3.3-.1l-2.1-2.2c-.9-.9-.8-2.4.1-3.3 1-.9 2.4-.9 3.3.1z"
    />
    <linearGradient
      id="SVGID_00000023959808929751736210000001074000252835626374_"
      gradientUnits="userSpaceOnUse"
      x1={1734.918}
      y1={454.729}
      x2={1741.916}
      y2={454.729}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000023959808929751736210000001074000252835626374_)",
      }}
      d="m1738.8 452 2.3 1.9c1 .8 1.1 2.3.3 3.3s-2.3 1.1-3.3.3l-2.3-1.9c-1-.8-1.1-2.3-.3-3.3s2.3-1.2 3.3-.3z"
    />
    <linearGradient
      id="SVGID_00000092424549957396521840000013235096345018473116_"
      gradientUnits="userSpaceOnUse"
      x1={1742.848}
      y1={460.665}
      x2={1750.062}
      y2={460.665}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000092424549957396521840000013235096345018473116_)",
      }}
      d="m1746.5 457.9 2.5 1.6c1.1.7 1.4 2.2.7 3.2-.7 1.1-2.2 1.4-3.2.7l-2.5-1.6c-1.1-.7-1.4-2.2-.7-3.2.6-1.1 2.1-1.4 3.2-.7z"
    />
    <linearGradient
      id="SVGID_00000126296888699005714280000016418701730152064397_"
      gradientUnits="userSpaceOnUse"
      x1={1923.505}
      y1={534.578}
      x2={1927.945}
      y2={534.578}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000126296888699005714280000016418701730152064397_)",
      }}
      d="m1927.9 533.5-.6 2.9c-.2 1-1.2 1.7-2.3 1.5-1-.2-1.7-1.2-1.5-2.3l.6-2.9c.2-1 1.2-1.7 2.3-1.5 1.1.3 1.7 1.3 1.5 2.3z"
    />
    <linearGradient
      id="SVGID_00000137842576518671276040000001346336548657340309_"
      gradientUnits="userSpaceOnUse"
      x1={1920.951}
      y1={544.271}
      x2={1925.601}
      y2={544.271}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000137842576518671276040000001346336548657340309_)",
      }}
      d="m1925.5 543.4-.8 2.9c-.3 1-1.4 1.6-2.4 1.3-1-.3-1.6-1.4-1.3-2.4l.8-2.9c.3-1 1.4-1.6 2.4-1.3 1 .3 1.6 1.4 1.3 2.4z"
    />
    <linearGradient
      id="SVGID_00000080913839319497492630000003752953041837940902_"
      gradientUnits="userSpaceOnUse"
      x1={1917.697}
      y1={553.758}
      x2={1922.547}
      y2={553.758}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000080913839319497492630000003752953041837940902_)",
      }}
      d="m1922.4 553-1.1 2.8c-.4 1-1.5 1.5-2.4 1.1-1-.4-1.5-1.5-1.1-2.4l1-2.8c.4-1 1.5-1.5 2.4-1.1 1.1.3 1.6 1.4 1.2 2.4z"
    />
    <linearGradient
      id="SVGID_00000002374096756154614730000001153671996626934955_"
      gradientUnits="userSpaceOnUse"
      x1={1913.775}
      y1={562.993}
      x2={1918.816}
      y2={562.993}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000002374096756154614730000001153671996626934955_)",
      }}
      d="m1918.6 562.4-1.2 2.7c-.4 1-1.6 1.4-2.5.9-1-.4-1.4-1.6-.9-2.5l1.2-2.7c.4-1 1.6-1.4 2.5-.9 1 .4 1.4 1.6.9 2.5z"
    />
    <linearGradient
      id="SVGID_00000051374150362082324710000011130599270613986220_"
      gradientUnits="userSpaceOnUse"
      x1={1909.228}
      y1={571.939}
      x2={1914.445}
      y2={571.939}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000051374150362082324710000011130599270613986220_)",
      }}
      d="m1914.2 571.5-1.4 2.6c-.5.9-1.6 1.3-2.6.8-.9-.5-1.3-1.6-.8-2.6l1.4-2.6c.5-.9 1.6-1.3 2.6-.8 1 .6 1.3 1.7.8 2.6z"
    />
    <linearGradient
      id="SVGID_00000021817651269228919280000015114993702483429055_"
      gradientUnits="userSpaceOnUse"
      x1={1904.096}
      y1={580.566}
      x2={1909.477}
      y2={580.566}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021817651269228919280000015114993702483429055_)",
      }}
      d="m1909.2 580.3-1.6 2.5c-.6.9-1.7 1.1-2.6.6-.9-.6-1.1-1.7-.6-2.6l1.6-2.5c.6-.9 1.7-1.1 2.6-.6.9.6 1.1 1.7.6 2.6z"
    />
    <linearGradient
      id="SVGID_00000145752593692226095510000014514942662504265906_"
      gradientUnits="userSpaceOnUse"
      x1={1898.423}
      y1={588.849}
      x2={1903.955}
      y2={588.849}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000145752593692226095510000014514942662504265906_)",
      }}
      d="m1903.6 588.7-1.8 2.4c-.6.8-1.8 1-2.6.4s-1-1.8-.4-2.6l1.8-2.4c.6-.8 1.8-1 2.6-.4s1 1.8.4 2.6z"
    />
    <linearGradient
      id="SVGID_00000022536182086462423030000015566551450531358644_"
      gradientUnits="userSpaceOnUse"
      x1={1892.251}
      y1={596.767}
      x2={1897.921}
      y2={596.767}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000022536182086462423030000015566551450531358644_)",
      }}
      d="m1897.5 596.8-1.9 2.3c-.7.8-1.8.9-2.7.3-.8-.7-.9-1.8-.3-2.6l1.9-2.3c.7-.8 1.8-.9 2.7-.3.8.6 1 1.8.3 2.6z"
    />
    <linearGradient
      id="SVGID_00000065067969022383732920000008722727449895635354_"
      gradientUnits="userSpaceOnUse"
      x1={1885.62}
      y1={604.306}
      x2={1891.418}
      y2={604.306}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065067969022383732920000008722727449895635354_)",
      }}
      d="m1890.9 604.5-2 2.2c-.7.8-1.9.8-2.7.1-.8-.7-.8-1.9-.1-2.7l2-2.2c.7-.8 1.9-.8 2.7-.1.8.7.8 1.9.1 2.7z"
    />
    <linearGradient
      id="SVGID_00000020358384924910917450000013068074660453462435_"
      gradientUnits="userSpaceOnUse"
      x1={1878.57}
      y1={611.453}
      x2={1884.483}
      y2={611.453}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000020358384924910917450000013068074660453462435_)",
      }}
      d="m1883.9 611.8-2.2 2.1c-.7.7-1.9.7-2.7 0-.7-.7-.7-1.9 0-2.7l2.2-2.1c.7-.7 1.9-.7 2.7 0 .8.8.8 1.9 0 2.7z"
    />
    <linearGradient
      id="SVGID_00000071537293835443090530000011393173941995607210_"
      gradientUnits="userSpaceOnUse"
      x1={1871.136}
      y1={618.197}
      x2={1877.154}
      y2={618.197}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000071537293835443090530000011393173941995607210_)",
      }}
      d="m1876.5 618.6-2.3 2c-.8.7-2 .6-2.6-.2-.7-.8-.6-2 .2-2.6l2.3-2c.8-.7 2-.6 2.6.2.7.8.6 2-.2 2.6z"
    />
    <linearGradient
      id="SVGID_00000181086776204993058940000005364526559755545217_"
      gradientUnits="userSpaceOnUse"
      x1={1863.352}
      y1={624.529}
      x2={1869.464}
      y2={624.529}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000181086776204993058940000005364526559755545217_)",
      }}
      d="m1868.7 625.1-2.4 1.8c-.8.6-2 .5-2.6-.3-.6-.8-.5-2 .3-2.6l2.4-1.8c.8-.6 2-.5 2.6.3.7.8.6 2-.3 2.6z"
    />
    <linearGradient
      id="SVGID_00000140723358025648146230000016738668249821448884_"
      gradientUnits="userSpaceOnUse"
      x1={1855.243}
      y1={630.443}
      x2={1861.446}
      y2={630.443}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000140723358025648146230000016738668249821448884_)",
      }}
      d="m1860.6 631.1-2.5 1.7c-.8.6-2 .4-2.6-.5-.6-.8-.4-2 .5-2.6l2.5-1.7c.8-.6 2-.4 2.6.5.6.9.4 2-.5 2.6z"
    />
    <linearGradient
      id="SVGID_00000065036146771733000300000004429351096617530256_"
      gradientUnits="userSpaceOnUse"
      x1={1846.843}
      y1={635.929}
      x2={1853.122}
      y2={635.929}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065036146771733000300000004429351096617530256_)",
      }}
      d="m1852.2 636.7-2.6 1.6c-.9.5-2 .3-2.6-.6-.5-.9-.3-2 .6-2.6l2.5-1.6c.9-.5 2-.3 2.6.6.7.9.4 2.1-.5 2.6z"
    />
    <linearGradient
      id="SVGID_00000170960860700888712770000010404436070454205828_"
      gradientUnits="userSpaceOnUse"
      x1={1838.176}
      y1={640.977}
      x2={1844.527}
      y2={640.977}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000170960860700888712770000010404436070454205828_)",
      }}
      d="m1843.6 641.9-2.6 1.4c-.9.5-2 .2-2.5-.7-.5-.9-.2-2 .7-2.5l2.6-1.4c.9-.5 2-.2 2.5.7.5.9.2 2-.7 2.5z"
    />
    <linearGradient
      id="SVGID_00000035489742727454493760000009871314267917431996_"
      gradientUnits="userSpaceOnUse"
      x1={1829.266}
      y1={645.576}
      x2={1835.681}
      y2={645.576}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000035489742727454493760000009871314267917431996_)",
      }}
      d="m1834.6 646.6-2.7 1.3c-.9.4-2 .1-2.5-.9-.4-.9-.1-2 .9-2.5l2.7-1.3c.9-.4 2-.1 2.5.9.4.9.1 2-.9 2.5z"
    />
    <linearGradient
      id="SVGID_00000083775738617030696770000003718002936648866986_"
      gradientUnits="userSpaceOnUse"
      x1={1820.136}
      y1={649.718}
      x2={1826.608}
      y2={649.718}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083775738617030696770000003718002936648866986_)",
      }}
      d="m1825.5 650.8-2.8 1.2c-.9.4-2 0-2.4-1-.4-.9 0-2 1-2.4l2.8-1.2c.9-.4 2 0 2.4 1 .4.9-.1 2-1 2.4z"
    />
    <linearGradient
      id="SVGID_00000072255700120484733870000017105487680702623620_"
      gradientUnits="userSpaceOnUse"
      x1={1810.805}
      y1={653.387}
      x2={1817.331}
      y2={653.387}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072255700120484733870000017105487680702623620_)",
      }}
      d="m1816.1 654.6-2.8 1c-1 .4-2-.1-2.4-1.1-.4-1 .1-2 1.1-2.4l2.8-1c1-.4 2 .1 2.4 1.1.4 1-.1 2.1-1.1 2.4z"
    />
    <linearGradient
      id="SVGID_00000137095653041883236850000016324358116055303572_"
      gradientUnits="userSpaceOnUse"
      x1={1801.296}
      y1={656.568}
      x2={1807.874}
      y2={656.568}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000137095653041883236850000016324358116055303572_)",
      }}
      d="m1806.6 657.9-2.9.9c-1 .3-2-.2-2.3-1.2-.3-1 .2-2 1.2-2.3l2.9-.9c1-.3 2 .2 2.3 1.2.3 1-.3 2-1.2 2.3z"
    />
    <linearGradient
      id="SVGID_00000041297498895599882220000012088198184751784323_"
      gradientUnits="userSpaceOnUse"
      x1={1791.662}
      y1={659.281}
      x2={1798.258}
      y2={659.281}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000041297498895599882220000012088198184751784323_)",
      }}
      d="m1796.9 660.7-2.9.7c-1 .3-2-.3-2.2-1.3-.3-1 .3-2 1.3-2.2l2.9-.7c1-.3 2 .3 2.2 1.3.3.9-.3 1.9-1.3 2.2z"
    />
    <linearGradient
      id="SVGID_00000166658184702013203050000000758070953299559057_"
      gradientUnits="userSpaceOnUse"
      x1={1781.915}
      y1={661.559}
      x2={1788.534}
      y2={661.559}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000166658184702013203050000000758070953299559057_)",
      }}
      d="m1787.1 663.1-2.9.6c-1 .2-2-.4-2.2-1.4-.2-1 .4-2 1.4-2.2l2.9-.6c1-.2 2 .4 2.2 1.4.2 1-.4 1.9-1.4 2.2z"
    />
    <linearGradient
      id="SVGID_00000032620959166984137000000012740195753380786846_"
      gradientUnits="userSpaceOnUse"
      x1={1772.081}
      y1={663.413}
      x2={1778.717}
      y2={663.413}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000032620959166984137000000012740195753380786846_)",
      }}
      d="m1777.2 665-3 .5c-1 .2-1.9-.5-2.1-1.5-.2-1 .5-1.9 1.5-2.1l3-.5c1-.2 1.9.5 2.1 1.5.2 1-.5 1.9-1.5 2.1z"
    />
    <linearGradient
      id="SVGID_00000009584460368068093430000000462490358120646556_"
      gradientUnits="userSpaceOnUse"
      x1={1762.181}
      y1={664.855}
      x2={1768.828}
      y2={664.855}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000009584460368068093430000000462490358120646556_)",
      }}
      d="m1767.2 666.5-3 .4c-1 .1-1.9-.6-2-1.6-.1-1 .6-1.9 1.6-2l3-.4c1-.1 1.9.6 2 1.6.1.9-.6 1.9-1.6 2z"
    />
    <linearGradient
      id="SVGID_00000016075837255289999680000002681362571931269013_"
      gradientUnits="userSpaceOnUse"
      x1={1752.234}
      y1={665.896}
      x2={1758.887}
      y2={665.896}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016075837255289999680000002681362571931269013_)",
      }}
      d="m1757.2 667.6-3 .3c-1 .1-1.9-.7-2-1.7-.1-1 .7-1.9 1.7-2l3-.3c1-.1 1.9.7 2 1.7.1 1-.7 1.9-1.7 2z"
    />
    <linearGradient
      id="SVGID_00000163044189457246151090000015672242298073472959_"
      gradientUnits="userSpaceOnUse"
      x1={1742.256}
      y1={666.553}
      x2={1748.91}
      y2={666.553}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163044189457246151090000015672242298073472959_)",
      }}
      d="m1747.2 668.3-3 .1c-1 0-1.9-.7-1.9-1.7s.7-1.9 1.7-1.9l3-.1c1 0 1.9.7 1.9 1.7.1 1-.7 1.9-1.7 1.9z"
    />
    <linearGradient
      id="SVGID_00000087400818611599052020000003671021106538192574_"
      gradientUnits="userSpaceOnUse"
      x1={1732.263}
      y1={666.84}
      x2={1738.914}
      y2={666.84}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000087400818611599052020000003671021106538192574_)",
      }}
      d="M1737.1 668.7h-3c-1 0-1.8-.8-1.8-1.8s.8-1.8 1.8-1.8h3c1 0 1.8.8 1.8 1.8 0 .9-.8 1.7-1.8 1.8z"
    />
    <linearGradient
      id="SVGID_00000016760515249858712720000016464750737233901756_"
      gradientUnits="userSpaceOnUse"
      x1={1722.267}
      y1={666.776}
      x2={1728.911}
      y2={666.776}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016760515249858712720000016464750737233901756_)",
      }}
      d="m1727 668.6-3-.1c-1 0-1.8-.9-1.8-1.9 0-1 .9-1.8 1.9-1.8l3 .1c1 0 1.8.9 1.8 1.9 0 1.1-.8 1.9-1.9 1.8z"
    />
    <linearGradient
      id="SVGID_00000091704274625021395410000012347455060866973341_"
      gradientUnits="userSpaceOnUse"
      x1={1712.281}
      y1={666.374}
      x2={1718.914}
      y2={666.374}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000091704274625021395410000012347455060866973341_)",
      }}
      d="m1717 668.3-3-.2c-1-.1-1.8-.9-1.7-1.9.1-1 .9-1.8 1.9-1.7l3 .2c1 .1 1.8.9 1.7 1.9 0 1-.9 1.7-1.9 1.7z"
    />
    <linearGradient
      id="SVGID_00000023980537762001188940000011218008921060161462_"
      gradientUnits="userSpaceOnUse"
      x1={1702.315}
      y1={665.652}
      x2={1708.934}
      y2={665.652}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000023980537762001188940000011218008921060161462_)",
      }}
      d="m1707 667.6-3-.3c-1-.1-1.7-1-1.6-2 .1-1 1-1.7 2-1.6l3 .3c1 .1 1.7 1 1.7 2-.3.9-1.1 1.7-2.1 1.6z"
    />
    <linearGradient
      id="SVGID_00000095339909571991411540000004885138529195337366_"
      gradientUnits="userSpaceOnUse"
      x1={1692.378}
      y1={664.626}
      x2={1698.98}
      y2={664.626}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000095339909571991411540000004885138529195337366_)",
      }}
      d="m1697 666.6-3-.4c-1-.1-1.7-1-1.6-2 .1-1 1-1.7 2-1.6l3 .4c1 .1 1.7 1 1.6 2-.2 1-1.1 1.7-2 1.6z"
    />
    <linearGradient
      id="SVGID_00000074400268572312942730000000067119604289985458_"
      gradientUnits="userSpaceOnUse"
      x1={1682.475}
      y1={663.311}
      x2={1689.063}
      y2={663.311}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000074400268572312942730000000067119604289985458_)",
      }}
      d="m1687 665.3-3-.4c-1-.1-1.7-1.1-1.5-2.1.1-1 1.1-1.7 2.1-1.5l3 .4c1 .1 1.7 1.1 1.5 2.1-.2 1-1.1 1.7-2.1 1.5z"
    />
    <linearGradient
      id="SVGID_00000098204284445744021110000005820534405925477007_"
      gradientUnits="userSpaceOnUse"
      x1={1672.608}
      y1={661.722}
      x2={1679.179}
      y2={661.722}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000098204284445744021110000005820534405925477007_)",
      }}
      d="m1677.1 663.8-3-.5c-1-.2-1.6-1.1-1.5-2.1.2-1 1.1-1.6 2.1-1.5l3 .5c1 .2 1.6 1.1 1.5 2.1-.2 1-1.2 1.6-2.1 1.5z"
    />
    <linearGradient
      id="SVGID_00000096756021518925363970000010580429736458520241_"
      gradientUnits="userSpaceOnUse"
      x1={1662.791}
      y1={659.874}
      x2={1669.338}
      y2={659.874}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000096756021518925363970000010580429736458520241_)",
      }}
      d="m1667.2 661.9-2.9-.6c-1-.2-1.6-1.1-1.4-2.1.2-1 1.1-1.6 2.1-1.4l2.9.6c1 .2 1.6 1.1 1.4 2.1-.2 1-1.1 1.6-2.1 1.4z"
    />
    <linearGradient
      id="SVGID_00000055691938215137063740000006843781872147249033_"
      gradientUnits="userSpaceOnUse"
      x1={1653.024}
      y1={657.779}
      x2={1659.549}
      y2={657.779}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000055691938215137063740000006843781872147249033_)",
      }}
      d="m1657.3 659.9-2.9-.7c-1-.2-1.6-1.2-1.4-2.2.2-1 1.2-1.6 2.2-1.4l2.9.7c1 .2 1.6 1.2 1.4 2.2-.2 1-1.2 1.6-2.2 1.4z"
    />
    <linearGradient
      id="SVGID_00000114754342301406624400000002676864288690044562_"
      gradientUnits="userSpaceOnUse"
      x1={1643.311}
      y1={655.451}
      x2={1649.813}
      y2={655.451}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000114754342301406624400000002676864288690044562_)",
      }}
      d="m1647.6 657.6-2.9-.7c-1-.2-1.5-1.2-1.3-2.2.2-1 1.2-1.5 2.2-1.3l2.9.7c1 .2 1.5 1.2 1.3 2.2-.3.9-1.3 1.5-2.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000121257810557975250990000007699822791582891432_"
      gradientUnits="userSpaceOnUse"
      x1={1633.649}
      y1={652.901}
      x2={1640.132}
      y2={652.901}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121257810557975250990000007699822791582891432_)",
      }}
      d="m1637.9 655-2.9-.8c-1-.3-1.5-1.2-1.3-2.2.3-1 1.2-1.5 2.2-1.3l2.9.8c1 .3 1.5 1.2 1.3 2.2-.3 1-1.3 1.6-2.2 1.3z"
    />
    <linearGradient
      id="SVGID_00000139267525874635392830000011452195198007635373_"
      gradientUnits="userSpaceOnUse"
      x1={1624.047}
      y1={650.138}
      x2={1630.502}
      y2={650.138}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000139267525874635392830000011452195198007635373_)",
      }}
      d="m1628.2 652.3-2.9-.9c-.9-.3-1.5-1.3-1.2-2.2s1.3-1.5 2.2-1.2l2.9.9c.9.3 1.5 1.3 1.2 2.2-.3.9-1.3 1.5-2.2 1.2z"
    />
    <linearGradient
      id="SVGID_00000176026892748766883590000017173693799252259469_"
      gradientUnits="userSpaceOnUse"
      x1={1614.51}
      y1={647.183}
      x2={1620.939}
      y2={647.183}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000176026892748766883590000017173693799252259469_)",
      }}
      d="m1618.6 649.3-2.9-.9c-.9-.3-1.5-1.3-1.2-2.2.3-.9 1.3-1.5 2.2-1.2l2.9.9c.9.3 1.5 1.3 1.2 2.2-.2 1-1.3 1.5-2.2 1.2z"
    />
    <linearGradient
      id="SVGID_00000136392484670186944270000007594658117345125022_"
      gradientUnits="userSpaceOnUse"
      x1={1605.027}
      y1={644.056}
      x2={1611.431}
      y2={644.056}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000136392484670186944270000007594658117345125022_)",
      }}
      d="m1609.1 646.2-2.8-1c-.9-.3-1.4-1.3-1.1-2.3.3-.9 1.3-1.4 2.3-1.1l2.8 1c.9.3 1.4 1.3 1.1 2.3-.4.9-1.4 1.4-2.3 1.1z"
    />
    <linearGradient
      id="SVGID_00000000223021255195890510000008213498073734768294_"
      gradientUnits="userSpaceOnUse"
      x1={1595.598}
      y1={640.772}
      x2={1601.979}
      y2={640.772}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000000223021255195890510000008213498073734768294_)",
      }}
      d="m1599.6 643-2.8-1c-.9-.3-1.4-1.3-1.1-2.3.3-.9 1.3-1.4 2.3-1.1l2.8 1c.9.3 1.4 1.3 1.1 2.3-.4.9-1.4 1.4-2.3 1.1z"
    />
    <linearGradient
      id="SVGID_00000071520215052561823010000006676340259800338875_"
      gradientUnits="userSpaceOnUse"
      x1={1586.214}
      y1={637.345}
      x2={1592.579}
      y2={637.345}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000071520215052561823010000006676340259800338875_)",
      }}
      d="m1590.2 639.5-2.8-1c-.9-.3-1.4-1.4-1-2.3.3-.9 1.4-1.4 2.3-1l2.8 1c.9.3 1.4 1.4 1 2.3-.4.9-1.4 1.4-2.3 1z"
    />
    <linearGradient
      id="SVGID_00000075153609329946490720000008650108788841524400_"
      gradientUnits="userSpaceOnUse"
      x1={1576.883}
      y1={633.789}
      x2={1583.223}
      y2={633.789}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000075153609329946490720000008650108788841524400_)",
      }}
      d="m1580.8 636-2.8-1.1c-.9-.4-1.4-1.4-1-2.3.4-.9 1.4-1.4 2.3-1l2.8 1.1c.9.4 1.4 1.4 1 2.3-.4.9-1.4 1.3-2.3 1z"
    />
    <linearGradient
      id="SVGID_00000124844399448027690930000016926713556073468828_"
      gradientUnits="userSpaceOnUse"
      x1={1567.594}
      y1={630.12}
      x2={1573.916}
      y2={630.12}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000124844399448027690930000016926713556073468828_)",
      }}
      d="m1571.5 632.3-2.8-1.1c-.9-.4-1.3-1.4-1-2.3.4-.9 1.4-1.3 2.3-1l2.8 1.1c.9.4 1.3 1.4 1 2.3-.4.9-1.4 1.4-2.3 1z"
    />
    <linearGradient
      id="SVGID_00000088113544927828047130000004631883828833439886_"
      gradientUnits="userSpaceOnUse"
      x1={1558.344}
      y1={626.352}
      x2={1564.649}
      y2={626.352}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088113544927828047130000004631883828833439886_)",
      }}
      d="m1562.2 628.6-2.8-1.1c-.9-.4-1.3-1.4-1-2.3.4-.9 1.4-1.3 2.3-1l2.8 1.1c.9.4 1.3 1.4 1 2.3-.4.9-1.4 1.3-2.3 1z"
    />
    <linearGradient
      id="SVGID_00000033331908223900047460000006800787584547846819_"
      gradientUnits="userSpaceOnUse"
      x1={1549.128}
      y1={622.497}
      x2={1555.417}
      y2={622.497}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000033331908223900047460000006800787584547846819_)",
      }}
      d="m1553 624.7-2.8-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.8 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000067226115996663724690000001350243640351499911_"
      gradientUnits="userSpaceOnUse"
      x1={1539.945}
      y1={618.572}
      x2={1546.22}
      y2={618.572}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000067226115996663724690000001350243640351499911_)",
      }}
      d="m1543.8 620.8-2.8-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.8 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000016056559744279667640000000996704877902345626_"
      gradientUnits="userSpaceOnUse"
      x1={1530.783}
      y1={614.587}
      x2={1537.046}
      y2={614.587}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016056559744279667640000000996704877902345626_)",
      }}
      d="m1534.6 616.8-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000140008976012228309810000007048484930026528139_"
      gradientUnits="userSpaceOnUse"
      x1={1521.638}
      y1={610.557}
      x2={1527.889}
      y2={610.557}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000140008976012228309810000007048484930026528139_)",
      }}
      d="m1525.4 612.8-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000169555647162385375340000012886025090059534767_"
      gradientUnits="userSpaceOnUse"
      x1={1512.503}
      y1={606.494}
      x2={1518.746}
      y2={606.494}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000169555647162385375340000012886025090059534767_)",
      }}
      d="m1516.3 608.7-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000044870513354717687620000015195950514764990131_"
      gradientUnits="userSpaceOnUse"
      x1={1503.374}
      y1={602.412}
      x2={1509.609}
      y2={602.412}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044870513354717687620000015195950514764990131_)",
      }}
      d="m1507.1 604.6-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.3.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000111173858814189771540000000153446047950334655_"
      gradientUnits="userSpaceOnUse"
      x1={1494.246}
      y1={598.325}
      x2={1500.475}
      y2={598.325}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000111173858814189771540000000153446047950334655_)",
      }}
      d="m1498 600.5-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3s1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000028308530294626528110000009127863471373253534_"
      gradientUnits="userSpaceOnUse"
      x1={1485.113}
      y1={594.247}
      x2={1491.337}
      y2={594.247}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000028308530294626528110000009127863471373253534_)",
      }}
      d="m1488.9 596.4-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000029765824082219161330000010056687901389102731_"
      gradientUnits="userSpaceOnUse"
      x1={1475.97}
      y1={590.191}
      x2={1482.191}
      y2={590.191}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000029765824082219161330000010056687901389102731_)",
      }}
      d="m1479.8 592.4-2.7-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.7 1.2c.9.4 1.3 1.4.9 2.3-.4.9-1.5 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000006678357098317125730000000090579608775903662_"
      gradientUnits="userSpaceOnUse"
      x1={1466.812}
      y1={586.17}
      x2={1473.032}
      y2={586.17}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000006678357098317125730000000090579608775903662_)",
      }}
      d="m1470.6 588.4-2.8-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.8 1.2c.9.4 1.3 1.4.9 2.3-.4.8-1.4 1.2-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000173883504460663922520000003469549737930840725_"
      gradientUnits="userSpaceOnUse"
      x1={1457.633}
      y1={582.198}
      x2={1463.853}
      y2={582.198}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000173883504460663922520000003469549737930840725_)",
      }}
      d="m1461.4 584.4-2.8-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.8 1.2c.9.4 1.3 1.4.9 2.3s-1.4 1.3-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000124868379121020965840000015059549184684026009_"
      gradientUnits="userSpaceOnUse"
      x1={1448.425}
      y1={578.288}
      x2={1454.649}
      y2={578.288}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000124868379121020965840000015059549184684026009_)",
      }}
      d="m1452.2 580.5-2.8-1.2c-.9-.4-1.3-1.4-.9-2.3.4-.9 1.4-1.3 2.3-.9l2.8 1.2c.9.4 1.3 1.4.9 2.3-.4.8-1.4 1.2-2.3.9z"
    />
    <linearGradient
      id="SVGID_00000155104265665106694510000000549686581612629379_"
      gradientUnits="userSpaceOnUse"
      x1={1439.187}
      y1={574.448}
      x2={1445.415}
      y2={574.448}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155104265665106694510000000549686581612629379_)",
      }}
      d="m1443 576.6-2.8-1.1c-.9-.4-1.3-1.4-.9-2.2.4-.9 1.4-1.3 2.2-.9l2.8 1.1c.9.4 1.3 1.4.9 2.3-.3.8-1.3 1.2-2.2.8z"
    />
    <linearGradient
      id="SVGID_00000021812230354202188160000000333258699318102955_"
      gradientUnits="userSpaceOnUse"
      x1={1429.92}
      y1={570.685}
      x2={1436.148}
      y2={570.685}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021812230354202188160000000333258699318102955_)",
      }}
      d="m1433.8 572.8-2.8-1.1c-.9-.4-1.3-1.4-1-2.2.4-.9 1.4-1.3 2.2-1l2.8 1.1c.9.4 1.3 1.4 1 2.2-.3 1-1.3 1.4-2.2 1z"
    />
    <linearGradient
      id="SVGID_00000062870524696689124100000004076797733051897767_"
      gradientUnits="userSpaceOnUse"
      x1={1420.622}
      y1={567.002}
      x2={1426.852}
      y2={567.002}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062870524696689124100000004076797733051897767_)",
      }}
      d="m1424.5 569.1-2.8-1.1c-.9-.3-1.3-1.3-1-2.2.3-.9 1.3-1.3 2.2-1l2.8 1.1c.9.3 1.3 1.3 1 2.2-.3 1-1.3 1.4-2.2 1z"
    />
    <linearGradient
      id="SVGID_00000161607712611285801630000009302615854450899358_"
      gradientUnits="userSpaceOnUse"
      x1={1411.29}
      y1={563.403}
      x2={1417.524}
      y2={563.403}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000161607712611285801630000009302615854450899358_)",
      }}
      d="m1415.2 565.5-2.8-1.1c-.9-.3-1.3-1.3-1-2.2.3-.9 1.3-1.3 2.2-1l2.8 1.1c.9.3 1.3 1.3 1 2.2-.3.9-1.3 1.4-2.2 1z"
    />
    <linearGradient
      id="SVGID_00000004543280312728972470000015192554941772688274_"
      gradientUnits="userSpaceOnUse"
      x1={1401.925}
      y1={559.892}
      x2={1408.163}
      y2={559.892}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000004543280312728972470000015192554941772688274_)",
      }}
      d="m1405.9 562-2.8-1c-.9-.3-1.3-1.3-1-2.2.3-.9 1.3-1.3 2.2-1l2.8 1c.9.3 1.3 1.3 1 2.2-.4.9-1.4 1.3-2.2 1z"
    />
    <linearGradient
      id="SVGID_00000095322457274314916650000000932038755554572694_"
      gradientUnits="userSpaceOnUse"
      x1={1392.525}
      y1={556.474}
      x2={1398.767}
      y2={556.474}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000095322457274314916650000000932038755554572694_)",
      }}
      d="m1396.5 558.6-2.8-1c-.9-.3-1.3-1.3-1-2.2s1.3-1.4 2.2-1l2.8 1c.9.3 1.4 1.3 1 2.2-.4.8-1.3 1.3-2.2 1z"
    />
    <linearGradient
      id="SVGID_00000114778862336725938580000007056547376099208594_"
      gradientUnits="userSpaceOnUse"
      x1={1383.09}
      y1={553.155}
      x2={1389.336}
      y2={553.155}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000114778862336725938580000007056547376099208594_)",
      }}
      d="m1387.1 555.3-2.8-1c-.9-.3-1.4-1.3-1.1-2.2.3-.9 1.3-1.4 2.2-1.1l2.8 1c.9.3 1.4 1.3 1.1 2.2-.4.9-1.3 1.4-2.2 1.1z"
    />
    <linearGradient
      id="SVGID_00000020376668416173041340000007521931845202900616_"
      gradientUnits="userSpaceOnUse"
      x1={1373.62}
      y1={549.937}
      x2={1379.87}
      y2={549.937}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000020376668416173041340000007521931845202900616_)",
      }}
      d="m1377.6 552-2.8-1c-.9-.3-1.4-1.3-1.1-2.2.3-.9 1.3-1.4 2.2-1.1l2.8.9c.9.3 1.4 1.3 1.1 2.2-.3 1-1.3 1.5-2.2 1.2z"
    />
    <linearGradient
      id="SVGID_00000178201904359031543730000011372304924529166984_"
      gradientUnits="userSpaceOnUse"
      x1={1364.113}
      y1={546.827}
      x2={1370.368}
      y2={546.827}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178201904359031543730000011372304924529166984_)",
      }}
      d="m1368.1 548.9-2.9-.9c-.9-.3-1.4-1.2-1.1-2.1.3-.9 1.2-1.4 2.1-1.1l2.9.9c.9.3 1.4 1.2 1.1 2.1-.2.9-1.2 1.4-2.1 1.1z"
    />
    <linearGradient
      id="SVGID_00000181082368828982668810000000837711836846902152_"
      gradientUnits="userSpaceOnUse"
      x1={1354.571}
      y1={543.83}
      x2={1360.83}
      y2={543.83}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000181082368828982668810000000837711836846902152_)",
      }}
      d="m1358.6 545.9-2.9-.9c-.9-.3-1.4-1.2-1.1-2.1.3-.9 1.2-1.4 2.1-1.1l2.9.9c.9.3 1.4 1.2 1.1 2.1-.2.9-1.2 1.4-2.1 1.1z"
    />
    <linearGradient
      id="SVGID_00000049939545778674022260000005646776744908844181_"
      gradientUnits="userSpaceOnUse"
      x1={1344.988}
      y1={540.949}
      x2={1351.256}
      y2={540.949}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049939545778674022260000005646776744908844181_)",
      }}
      d="m1349.1 543-2.9-.8c-.9-.3-1.4-1.2-1.1-2.1.3-.9 1.2-1.4 2.1-1.1l2.9.8c.9.3 1.4 1.2 1.1 2.1-.3.8-1.2 1.4-2.1 1.1z"
    />
    <linearGradient
      id="SVGID_00000095316975113534216230000010607938143805566885_"
      gradientUnits="userSpaceOnUse"
      x1={1335.37}
      y1={538.19}
      x2={1341.641}
      y2={538.19}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000095316975113534216230000010607938143805566885_)",
      }}
      d="m1339.5 540.2-2.9-.8c-.9-.3-1.4-1.2-1.2-2.1.3-.9 1.2-1.4 2.1-1.2l2.9.8c.9.3 1.4 1.2 1.2 2.1-.3.9-1.2 1.5-2.1 1.2z"
    />
    <linearGradient
      id="SVGID_00000182501783511156202910000012616699933275736501_"
      gradientUnits="userSpaceOnUse"
      x1={1325.718}
      y1={535.558}
      x2={1331.992}
      y2={535.558}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000182501783511156202910000012616699933275736501_)",
      }}
      d="m1329.9 537.6-2.9-.8c-.9-.2-1.4-1.2-1.2-2.1.2-.9 1.2-1.4 2.1-1.2l2.9.8c.9.2 1.4 1.2 1.2 2.1-.3.9-1.2 1.4-2.1 1.2z"
    />
    <linearGradient
      id="SVGID_00000021804310564041666230000005309971785285551256_"
      gradientUnits="userSpaceOnUse"
      x1={1316.031}
      y1={533.06}
      x2={1322.308}
      y2={533.06}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021804310564041666230000005309971785285551256_)",
      }}
      d="m1320.2 535.1-2.9-.7c-.9-.2-1.4-1.1-1.2-2 .2-.9 1.1-1.4 2-1.2l2.9.7c.9.2 1.4 1.1 1.2 2-.2.8-1.1 1.4-2 1.2z"
    />
    <linearGradient
      id="SVGID_00000063612758905287996840000018110270826149340059_"
      gradientUnits="userSpaceOnUse"
      x1={1306.308}
      y1={530.7}
      x2={1312.588}
      y2={530.7}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000063612758905287996840000018110270826149340059_)",
      }}
      d="m1310.5 532.7-2.9-.7c-.9-.2-1.5-1.1-1.2-2 .2-.9 1.1-1.5 2-1.2l2.9.7c.9.2 1.5 1.1 1.3 2-.3.8-1.2 1.4-2.1 1.2z"
    />
    <linearGradient
      id="SVGID_00000009589019001802271560000014945375223076810174_"
      gradientUnits="userSpaceOnUse"
      x1={1296.555}
      y1={528.484}
      x2={1302.837}
      y2={528.484}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000009589019001802271560000014945375223076810174_)",
      }}
      d="m1300.8 530.4-2.9-.6c-.9-.2-1.5-1.1-1.3-2 .2-.9 1.1-1.5 2-1.3l2.9.6c.9.2 1.5 1.1 1.3 2s-1.1 1.5-2 1.3z"
    />
    <linearGradient
      id="SVGID_00000108303689830478146640000013607144112167967663_"
      gradientUnits="userSpaceOnUse"
      x1={1286.772}
      y1={526.417}
      x2={1293.056}
      y2={526.417}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000108303689830478146640000013607144112167967663_)",
      }}
      d="m1291 528.4-2.9-.6c-.9-.2-1.5-1.1-1.3-2 .2-.9 1.1-1.5 2-1.3l2.9.6c.9.2 1.5 1.1 1.3 2-.2.9-1 1.4-2 1.3z"
    />
    <linearGradient
      id="SVGID_00000072986746965680221270000008985047475605611453_"
      gradientUnits="userSpaceOnUse"
      x1={1276.96}
      y1={524.504}
      x2={1283.247}
      y2={524.504}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072986746965680221270000008985047475605611453_)",
      }}
      d="m1281.3 526.4-2.9-.6c-.9-.2-1.5-1-1.3-1.9.2-.9 1-1.5 1.9-1.3l2.9.5c.9.2 1.5 1 1.3 1.9-.2 1-1 1.6-1.9 1.4z"
    />
    <linearGradient
      id="SVGID_00000034800965431541953360000018292374445742238137_"
      gradientUnits="userSpaceOnUse"
      x1={1267.12}
      y1={522.751}
      x2={1273.408}
      y2={522.751}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000034800965431541953360000018292374445742238137_)",
      }}
      d="m1271.5 524.6-3-.5c-.9-.2-1.5-1-1.4-1.9.2-.9 1-1.5 1.9-1.4l3 .5c.9.2 1.5 1 1.4 1.9-.2 1-1 1.6-1.9 1.4z"
    />
    <linearGradient
      id="SVGID_00000047776984161846537520000009615410187451883942_"
      gradientUnits="userSpaceOnUse"
      x1={1257.253}
      y1={521.162}
      x2={1263.543}
      y2={521.162}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000047776984161846537520000009615410187451883942_)",
      }}
      d="m1261.6 523-3-.5c-.9-.1-1.5-1-1.4-1.9.1-.9 1-1.5 1.9-1.4l3 .5c.9.1 1.5 1 1.4 1.9-.1.9-1 1.6-1.9 1.4z"
    />
    <linearGradient
      id="SVGID_00000070089734276357808940000012427803690326473883_"
      gradientUnits="userSpaceOnUse"
      x1={1247.36}
      y1={519.743}
      x2={1253.651}
      y2={519.743}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070089734276357808940000012427803690326473883_)",
      }}
      d="m1251.8 521.6-3-.4c-.9-.1-1.5-1-1.4-1.9.1-.9 1-1.5 1.9-1.4l3 .4c.9.1 1.5 1 1.4 1.9-.2.9-1 1.5-1.9 1.4z"
    />
    <linearGradient
      id="SVGID_00000010292596769765937450000004142979852141215125_"
      gradientUnits="userSpaceOnUse"
      x1={1237.442}
      y1={518.498}
      x2={1243.734}
      y2={518.498}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000010292596769765937450000004142979852141215125_)",
      }}
      d="m1241.9 520.3-3-.3c-.9-.1-1.6-.9-1.5-1.8.1-.9.9-1.6 1.8-1.5l3 .3c.9.1 1.6.9 1.5 1.8-.1 1-.9 1.6-1.8 1.5z"
    />
    <linearGradient
      id="SVGID_00000005947752452809459190000016460665089017735809_"
      gradientUnits="userSpaceOnUse"
      x1={1227.501}
      y1={517.433}
      x2={1233.793}
      y2={517.433}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005947752452809459190000016460665089017735809_)",
      }}
      d="m1232 519.2-3-.3c-.9-.1-1.6-.9-1.5-1.8s.9-1.6 1.8-1.5l3 .3c.9.1 1.6.9 1.5 1.8-.1.9-.9 1.6-1.8 1.5z"
    />
    <linearGradient
      id="SVGID_00000168826524462020077310000012878796083406267803_"
      gradientUnits="userSpaceOnUse"
      x1={1217.534}
      y1={516.555}
      x2={1223.828}
      y2={516.555}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168826524462020077310000012878796083406267803_)",
      }}
      d="m1222 518.3-3-.2c-.9-.1-1.6-.9-1.5-1.8.1-.9.9-1.6 1.8-1.5l3 .2c.9.1 1.6.9 1.5 1.8s-.8 1.6-1.8 1.5z"
    />
    <linearGradient
      id="SVGID_00000093859453819448035620000003273439838655890317_"
      gradientUnits="userSpaceOnUse"
      x1={1207.559}
      y1={515.874}
      x2={1213.846}
      y2={515.874}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093859453819448035620000003273439838655890317_)",
      }}
      d="m1212.1 517.6-3-.2c-.9-.1-1.6-.8-1.5-1.7.1-.9.8-1.6 1.7-1.5l3 .2c.9.1 1.6.8 1.5 1.7 0 .9-.8 1.6-1.7 1.5z"
    />
    <linearGradient
      id="SVGID_00000094600467060679989410000001109434887792484491_"
      gradientUnits="userSpaceOnUse"
      x1={1197.572}
      y1={515.392}
      x2={1203.856}
      y2={515.392}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000094600467060679989410000001109434887792484491_)",
      }}
      d="m1202.1 517.1-3-.1c-.9 0-1.6-.8-1.6-1.7 0-.9.8-1.6 1.7-1.6l3 .1c.9 0 1.6.8 1.6 1.7 0 .9-.7 1.6-1.7 1.6z"
    />
    <linearGradient
      id="SVGID_00000083808443342693512810000013268150423552367548_"
      gradientUnits="userSpaceOnUse"
      x1={1187.579}
      y1={515.114}
      x2={1193.858}
      y2={515.114}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083808443342693512810000013268150423552367548_)",
      }}
      d="m1192.2 516.8-3-.1c-.9 0-1.6-.8-1.6-1.7 0-.9.8-1.6 1.7-1.6l3 .1c.9 0 1.6.8 1.6 1.7-.1.9-.8 1.6-1.7 1.6z"
    />
    <linearGradient
      id="SVGID_00000090296379647668304020000010742823922495086727_"
      gradientUnits="userSpaceOnUse"
      x1={1177.582}
      y1={515.04}
      x2={1183.855}
      y2={515.04}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000090296379647668304020000010742823922495086727_)",
      }}
      d="M1182.2 516.7h-3c-.9 0-1.6-.7-1.6-1.6 0-.9.7-1.6 1.6-1.6h3c.9 0 1.6.7 1.6 1.6.1.8-.7 1.6-1.6 1.6z"
    />
    <linearGradient
      id="SVGID_00000098943676108333984570000014698421721729846683_"
      gradientUnits="userSpaceOnUse"
      x1={1167.587}
      y1={515.177}
      x2={1173.853}
      y2={515.177}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000098943676108333984570000014698421721729846683_)",
      }}
      d="m1172.3 516.8-3 .1c-.9 0-1.6-.7-1.7-1.6 0-.9.7-1.7 1.6-1.7l3-.1c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.7-1.6 1.7z"
    />
    <linearGradient
      id="SVGID_00000058573261265695794940000004170845975908859782_"
      gradientUnits="userSpaceOnUse"
      x1={1157.597}
      y1={515.526}
      x2={1163.855}
      y2={515.526}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000058573261265695794940000004170845975908859782_)",
      }}
      d="m1162.3 517.1-3 .1c-.9 0-1.7-.7-1.7-1.6 0-.9.7-1.7 1.6-1.7l3-.1c.9 0 1.7.7 1.7 1.6 0 .9-.7 1.6-1.6 1.7z"
    />
    <linearGradient
      id="SVGID_00000015328132685156797010000015821085188700492439_"
      gradientUnits="userSpaceOnUse"
      x1={1147.618}
      y1={516.091}
      x2={1153.866}
      y2={516.091}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000015328132685156797010000015821085188700492439_)",
      }}
      d="m1152.3 517.6-3 .2c-.9.1-1.7-.6-1.7-1.5-.1-.9.6-1.7 1.5-1.7l3-.2c.9-.1 1.7.6 1.7 1.5.1.9-.6 1.7-1.5 1.7z"
    />
    <linearGradient
      id="SVGID_00000150069727404225610460000002246353113304021122_"
      gradientUnits="userSpaceOnUse"
      x1={1137.655}
      y1={516.876}
      x2={1143.891}
      y2={516.876}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000150069727404225610460000002246353113304021122_)",
      }}
      d="m1142.4 518.4-3 .3c-.9.1-1.7-.6-1.8-1.5-.1-.9.6-1.7 1.5-1.8l3-.3c.9-.1 1.7.6 1.8 1.5.1.9-.6 1.7-1.5 1.8z"
    />
    <linearGradient
      id="SVGID_00000155125437377610447530000010436247249775866810_"
      gradientUnits="userSpaceOnUse"
      x1={1127.713}
      y1={517.886}
      x2={1133.936}
      y2={517.886}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155125437377610447530000010436247249775866810_)",
      }}
      d="m1132.5 519.3-3 .3c-.9.1-1.7-.5-1.8-1.4-.1-.9.5-1.7 1.4-1.8l3-.3c.9-.1 1.7.5 1.8 1.4.1.9-.5 1.7-1.4 1.8z"
    />
    <linearGradient
      id="SVGID_00000021818035289679814670000006681298933823134348_"
      gradientUnits="userSpaceOnUse"
      x1={1117.798}
      y1={519.123}
      x2={1124.005}
      y2={519.123}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021818035289679814670000006681298933823134348_)",
      }}
      d="m1122.6 520.5-3 .4c-.9.1-1.7-.5-1.8-1.4-.1-.9.5-1.7 1.4-1.8l3-.4c.9-.1 1.7.5 1.8 1.4.1.9-.5 1.7-1.4 1.8z"
    />
    <linearGradient
      id="SVGID_00000122692385624115839180000017832460505847472279_"
      gradientUnits="userSpaceOnUse"
      x1={1107.915}
      y1={520.592}
      x2={1114.105}
      y2={520.592}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000122692385624115839180000017832460505847472279_)",
      }}
      d="m1112.7 521.9-3 .5c-.9.1-1.7-.5-1.8-1.3-.1-.9.5-1.7 1.3-1.8l3-.5c.9-.1 1.7.5 1.9 1.3.1.9-.5 1.7-1.4 1.8z"
    />
    <linearGradient
      id="SVGID_00000105407868995663236430000012562865724075515535_"
      gradientUnits="userSpaceOnUse"
      x1={1098.071}
      y1={522.297}
      x2={1104.243}
      y2={522.297}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000105407868995663236430000012562865724075515535_)",
      }}
      d="m1102.9 523.6-2.9.5c-.9.2-1.7-.4-1.9-1.3-.2-.9.4-1.7 1.3-1.9l2.9-.5c.9-.2 1.7.4 1.9 1.3.2.9-.4 1.7-1.3 1.9z"
    />
    <linearGradient
      id="SVGID_00000016046679962109486610000000767255971141336467_"
      gradientUnits="userSpaceOnUse"
      x1={1088.268}
      y1={524.242}
      x2={1094.423}
      y2={524.242}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000016046679962109486610000000767255971141336467_)",
      }}
      d="m1093.1 525.5-2.9.6c-.9.2-1.7-.4-1.9-1.2-.2-.9.4-1.7 1.2-1.9l2.9-.6c.9-.2 1.7.4 1.9 1.2.3.9-.3 1.7-1.2 1.9z"
    />
    <linearGradient
      id="SVGID_00000176017974189930791720000013717352320382304406_"
      gradientUnits="userSpaceOnUse"
      x1={1078.519}
      y1={526.432}
      x2={1084.65}
      y2={526.432}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000176017974189930791720000013717352320382304406_)",
      }}
      d="m1083.4 527.6-2.9.7c-.9.2-1.7-.3-1.9-1.2-.2-.9.3-1.7 1.2-1.9l2.9-.7c.9-.2 1.7.3 1.9 1.2.2.9-.3 1.7-1.2 1.9z"
    />
    <linearGradient
      id="SVGID_00000119838342288551863920000003041739779134494890_"
      gradientUnits="userSpaceOnUse"
      x1={1068.828}
      y1={528.871}
      x2={1074.932}
      y2={528.871}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000119838342288551863920000003041739779134494890_)",
      }}
      d="m1073.7 530-2.9.8c-.9.2-1.7-.3-2-1.1-.2-.9.3-1.7 1.1-2l2.9-.8c.9-.2 1.7.3 2 1.1.3.9-.2 1.8-1.1 2z"
    />
    <linearGradient
      id="SVGID_00000178183889334040316070000010985139080589694625_"
      gradientUnits="userSpaceOnUse"
      x1={1059.211}
      y1={531.56}
      x2={1065.285}
      y2={531.56}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178183889334040316070000010985139080589694625_)",
      }}
      d="m1064.1 532.7-2.9.8c-.8.2-1.7-.2-2-1.1-.2-.8.2-1.7 1.1-2l2.9-.8c.8-.2 1.7.2 2 1.1.3.8-.2 1.7-1.1 2z"
    />
    <linearGradient
      id="SVGID_00000106126131376475664940000000009023460023255437_"
      gradientUnits="userSpaceOnUse"
      x1={1049.674}
      y1={534.504}
      x2={1055.717}
      y2={534.504}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106126131376475664940000000009023460023255437_)",
      }}
      d="m1054.6 535.6-2.9.9c-.8.3-1.7-.2-2-1-.3-.8.2-1.7 1-2l2.9-.9c.8-.3 1.7.2 2 1 .3.8-.1 1.7-1 2z"
    />
    <linearGradient
      id="SVGID_00000176750259998923250530000005511287248327366311_"
      gradientUnits="userSpaceOnUse"
      x1={1040.221}
      y1={537.706}
      x2={1046.229}
      y2={537.706}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000176750259998923250530000005511287248327366311_)",
      }}
      d="m1045.2 538.7-2.8 1c-.8.3-1.7-.1-2-1-.3-.8.1-1.7 1-2l2.8-1c.8-.3 1.7.1 2 1 .2.8-.2 1.7-1 2z"
    />
    <linearGradient
      id="SVGID_00000145771536954002285880000011233336446062025909_"
      gradientUnits="userSpaceOnUse"
      x1={1030.862}
      y1={541.169}
      x2={1036.834}
      y2={541.169}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000145771536954002285880000011233336446062025909_)",
      }}
      d="m1035.8 542.1-2.8 1.1c-.8.3-1.7-.1-2.1-.9-.3-.8.1-1.7.9-2.1l2.8-1.1c.8-.3 1.7.1 2.1.9.3.9-.1 1.8-.9 2.1z"
    />
    <linearGradient
      id="SVGID_00000015314237001100772720000010440991636004783790_"
      gradientUnits="userSpaceOnUse"
      x1={1021.606}
      y1={544.897}
      x2={1027.54}
      y2={544.897}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000015314237001100772720000010440991636004783790_)",
      }}
      d="m1026.6 545.8-2.8 1.2c-.8.3-1.7 0-2.1-.9-.3-.8 0-1.7.8-2.1l2.8-1.2c.8-.3 1.7 0 2.1.8.4.9 0 1.8-.8 2.2z"
    />
    <linearGradient
      id="SVGID_00000121264551300561210810000002677934507336866699_"
      gradientUnits="userSpaceOnUse"
      x1={1012.463}
      y1={548.89}
      x2={1018.356}
      y2={548.89}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121264551300561210810000002677934507336866699_)",
      }}
      d="m1017.4 549.7-2.7 1.2c-.8.4-1.7 0-2.1-.8-.4-.8 0-1.7.8-2.1l2.7-1.2c.8-.4 1.7 0 2.1.8.4.8 0 1.8-.8 2.1z"
    />
    <linearGradient
      id="SVGID_00000150101155770986526550000005474238226560141225_"
      gradientUnits="userSpaceOnUse"
      x1={1003.442}
      y1={553.151}
      x2={1009.291}
      y2={553.151}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000150101155770986526550000005474238226560141225_)",
      }}
      d="m1008.4 553.9-2.7 1.3c-.8.4-1.7.1-2.1-.7-.4-.8-.1-1.7.7-2.1l2.7-1.3c.8-.4 1.7-.1 2.1.7.4.8.1 1.7-.7 2.1z"
    />
    <linearGradient
      id="SVGID_00000051376217020865218070000015982949596156247431_"
      gradientUnits="userSpaceOnUse"
      x1={994.553}
      y1={557.68}
      x2={1000.357}
      y2={557.68}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000051376217020865218070000015982949596156247431_)",
      }}
      d="m999.5 558.4-2.7 1.4c-.8.4-1.7.1-2.1-.7-.4-.8-.1-1.7.7-2.1l2.7-1.4c.8-.4 1.7-.1 2.1.7.4.7.1 1.7-.7 2.1z"
    />
    <linearGradient
      id="SVGID_00000075161126097306842740000017478725637838487429_"
      gradientUnits="userSpaceOnUse"
      x1={985.808}
      y1={562.481}
      x2={991.559}
      y2={562.481}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000075161126097306842740000017478725637838487429_)",
      }}
      d="m990.8 563.1-2.6 1.5c-.8.4-1.7.2-2.1-.6-.4-.8-.2-1.7.6-2.1l2.6-1.5c.8-.4 1.7-.2 2.1.6.4.7.1 1.7-.6 2.1z"
    />
    <linearGradient
      id="SVGID_00000083804424067086401840000000377725928460041660_"
      gradientUnits="userSpaceOnUse"
      x1={977.215}
      y1={567.55}
      x2={982.915}
      y2={567.55}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000083804424067086401840000000377725928460041660_)",
      }}
      d="m982.2 568.1-2.6 1.6c-.7.5-1.7.2-2.2-.5-.5-.7-.2-1.7.5-2.2l2.6-1.6c.7-.5 1.7-.2 2.2.5.4.8.2 1.8-.5 2.2z"
    />
    <linearGradient
      id="SVGID_00000066479880422295848230000015351549349894851511_"
      gradientUnits="userSpaceOnUse"
      x1={968.783}
      y1={572.881}
      x2={974.427}
      y2={572.881}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000066479880422295848230000015351549349894851511_)",
      }}
      d="m973.7 573.4-2.5 1.6c-.7.5-1.7.3-2.2-.5-.5-.7-.3-1.7.5-2.2l2.5-1.6c.7-.5 1.7-.3 2.2.5.4.7.2 1.7-.5 2.2z"
    />
    <linearGradient
      id="SVGID_00000163766153176795926900000012889837443234083240_"
      gradientUnits="userSpaceOnUse"
      x1={960.516}
      y1={578.465}
      x2={966.103}
      y2={578.465}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163766153176795926900000012889837443234083240_)",
      }}
      d="m965.4 578.9-2.5 1.7c-.7.5-1.7.3-2.2-.4-.5-.7-.3-1.7.4-2.2l2.5-1.7c.7-.5 1.7-.3 2.2.4.5.7.3 1.7-.4 2.2z"
    />
    <linearGradient
      id="SVGID_00000026148082990084267910000015602252976801624228_"
      gradientUnits="userSpaceOnUse"
      x1={952.421}
      y1={584.294}
      x2={957.95}
      y2={584.294}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000026148082990084267910000015602252976801624228_)",
      }}
      d="m957.3 584.7-2.4 1.8c-.7.5-1.7.4-2.2-.3-.5-.7-.4-1.7.3-2.2l2.4-1.8c.7-.5 1.7-.4 2.2.3.6.7.4 1.6-.3 2.2z"
    />
    <linearGradient
      id="SVGID_00000111189321795805773350000017123946159649128603_"
      gradientUnits="userSpaceOnUse"
      x1={944.501}
      y1={590.361}
      x2={949.971}
      y2={590.361}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000111189321795805773350000017123946159649128603_)",
      }}
      d="m949.4 590.7-2.4 1.9c-.7.5-1.7.4-2.2-.3-.5-.7-.4-1.7.3-2.2l2.4-1.9c.7-.5 1.7-.4 2.2.3.5.6.4 1.6-.3 2.2z"
    />
    <linearGradient
      id="SVGID_00000064318803404020374050000014414993825601418386_"
      gradientUnits="userSpaceOnUse"
      x1={936.763}
      y1={596.656}
      x2={942.171}
      y2={596.656}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000064318803404020374050000014414993825601418386_)",
      }}
      d="m941.6 596.9-2.3 1.9c-.7.5-1.6.5-2.2-.2-.5-.7-.5-1.6.2-2.2l2.3-1.9c.7-.5 1.6-.5 2.2.2.6.7.5 1.6-.2 2.2z"
    />
    <linearGradient
      id="SVGID_00000123410401888571582800000014594824543805825982_"
      gradientUnits="userSpaceOnUse"
      x1={929.21}
      y1={603.172}
      x2={934.555}
      y2={603.172}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000123410401888571582800000014594824543805825982_)",
      }}
      d="m934 603.3-2.2 2c-.6.6-1.6.5-2.2-.1-.6-.6-.5-1.6.1-2.2l2.2-2c.6-.6 1.6-.5 2.2.1.6.7.6 1.7-.1 2.2z"
    />
    <linearGradient
      id="SVGID_00000087394257624161348390000016295705346480227228_"
      gradientUnits="userSpaceOnUse"
      x1={921.844}
      y1={609.901}
      x2={927.126}
      y2={609.901}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000087394257624161348390000016295705346480227228_)",
      }}
      d="m926.6 610-2.2 2c-.6.6-1.6.5-2.2-.1-.6-.6-.6-1.6.1-2.2l2.2-2.1c.6-.6 1.6-.6 2.2.1.6.7.6 1.7-.1 2.3z"
    />
    <linearGradient
      id="SVGID_00000070840196228494335650000016050620689653861053_"
      gradientUnits="userSpaceOnUse"
      x1={914.67}
      y1={616.833}
      x2={919.888}
      y2={616.833}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070840196228494335650000016050620689653861053_)",
      }}
      d="m919.4 616.9-2.1 2.1c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l2.1-2.1c.6-.6 1.6-.6 2.2 0 .6.6.6 1.6 0 2.2z"
    />
    <linearGradient
      id="SVGID_00000169558486431661584840000001050117207860451486_"
      gradientUnits="userSpaceOnUse"
      x1={907.691}
      y1={623.962}
      x2={912.844}
      y2={623.962}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000169558486431661584840000001050117207860451486_)",
      }}
      d="m912.4 623.9-2.1 2.2c-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2l2.1-2.2c.6-.6 1.6-.6 2.2 0s.6 1.6 0 2.2z"
    />
    <linearGradient
      id="SVGID_00000177451807467014414200000002112401911638450109_"
      gradientUnits="userSpaceOnUse"
      x1={900.909}
      y1={631.28}
      x2={905.996}
      y2={631.28}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000177451807467014414200000002112401911638450109_)",
      }}
      d="m905.6 631.2-2 2.2c-.6.6-1.5.7-2.2.1-.6-.6-.7-1.5-.1-2.2l2-2.2c.6-.6 1.5-.7 2.2-.1.6.6.7 1.6.1 2.2z"
    />
    <linearGradient
      id="SVGID_00000148639423075331109700000001290315794472458904_"
      gradientUnits="userSpaceOnUse"
      x1={894.327}
      y1={638.779}
      x2={899.347}
      y2={638.779}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000148639423075331109700000001290315794472458904_)",
      }}
      d="m899 638.6-2 2.3c-.6.6-1.5.7-2.2.2-.6-.6-.7-1.5-.2-2.2l2-2.3c.6-.6 1.5-.7 2.2-.2.7.6.7 1.6.2 2.2z"
    />
    <linearGradient
      id="SVGID_00000035491084440366169410000004970317755271555003_"
      gradientUnits="userSpaceOnUse"
      x1={887.947}
      y1={646.45}
      x2={892.9}
      y2={646.45}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000035491084440366169410000004970317755271555003_)",
      }}
      d="m892.6 646.3-1.9 2.3c-.5.7-1.5.8-2.2.2-.7-.5-.8-1.5-.2-2.2l1.9-2.3c.5-.7 1.5-.8 2.2-.2.6.5.7 1.5.2 2.2z"
    />
    <linearGradient
      id="SVGID_00000158722691467288614800000006919326412678706862_"
      gradientUnits="userSpaceOnUse"
      x1={881.771}
      y1={654.288}
      x2={886.656}
      y2={654.288}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000158722691467288614800000006919326412678706862_)",
      }}
      d="m886.3 654-1.8 2.4c-.5.7-1.5.8-2.1.3-.7-.5-.8-1.5-.3-2.1l1.8-2.4c.5-.7 1.5-.8 2.1-.3.7.5.9 1.5.3 2.1z"
    />
    <linearGradient
      id="SVGID_00000095298385568480351070000005266517348498709931_"
      gradientUnits="userSpaceOnUse"
      x1={875.801}
      y1={662.284}
      x2={880.617}
      y2={662.284}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000095298385568480351070000005266517348498709931_)",
      }}
      d="m880.3 662-1.8 2.4c-.5.7-1.4.8-2.1.3-.7-.5-.8-1.4-.3-2.1l1.8-2.4c.5-.7 1.4-.8 2.1-.3.7.4.8 1.4.3 2.1z"
    />
    <linearGradient
      id="SVGID_00000122692230036787858630000001905911760177916087_"
      gradientUnits="userSpaceOnUse"
      x1={870.041}
      y1={670.431}
      x2={874.786}
      y2={670.431}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000122692230036787858630000001905911760177916087_)",
      }}
      d="m874.5 670.1-1.7 2.5c-.5.7-1.4.9-2.1.4-.7-.5-.9-1.4-.4-2.1l1.7-2.5c.5-.7 1.4-.9 2.1-.4.7.4.9 1.4.4 2.1z"
    />
    <linearGradient
      id="SVGID_00000152986118356261655620000009063017922015646085_"
      gradientUnits="userSpaceOnUse"
      x1={864.49}
      y1={678.721}
      x2={869.167}
      y2={678.721}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000152986118356261655620000009063017922015646085_)",
      }}
      d="m868.9 678.3-1.6 2.5c-.5.7-1.4.9-2.1.4-.7-.5-.9-1.4-.4-2.1l1.6-2.5c.5-.7 1.4-.9 2.1-.4.7.5.9 1.4.4 2.1z"
    />
    <linearGradient
      id="SVGID_00000030473142245171275250000006828846623286472843_"
      gradientUnits="userSpaceOnUse"
      x1={859.153}
      y1={687.147}
      x2={863.76}
      y2={687.147}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000030473142245171275250000006828846623286472843_)",
      }}
      d="m863.5 686.7-1.6 2.5c-.4.7-1.4.9-2.1.5-.7-.4-.9-1.4-.5-2.1l1.6-2.5c.4-.7 1.4-.9 2.1-.5.8.4 1 1.4.5 2.1z"
    />
    <linearGradient
      id="SVGID_00000056401577357081423840000001026417837823564200_"
      gradientUnits="userSpaceOnUse"
      x1={854.026}
      y1={695.708}
      x2={858.563}
      y2={695.708}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000056401577357081423840000001026417837823564200_)",
      }}
      d="m858.4 695.2-1.5 2.6c-.4.7-1.3 1-2.1.5-.7-.4-1-1.3-.5-2.1l1.5-2.6c.4-.7 1.3-1 2.1-.5.6.4.9 1.4.5 2.1z"
    />
    <linearGradient
      id="SVGID_00000070108508057181050810000002439214792630809729_"
      gradientUnits="userSpaceOnUse"
      x1={849.111}
      y1={704.399}
      x2={853.578}
      y2={704.399}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070108508057181050810000002439214792630809729_)",
      }}
      d="m853.4 703.8-1.5 2.6c-.4.7-1.3 1-2 .6s-1-1.3-.6-2l1.5-2.6c.4-.7 1.3-1 2-.6s1 1.3.6 2z"
    />
    <linearGradient
      id="SVGID_00000081624079803421211120000007494135606988885140_"
      gradientUnits="userSpaceOnUse"
      x1={844.412}
      y1={713.212}
      x2={848.808}
      y2={713.212}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000081624079803421211120000007494135606988885140_)",
      }}
      d="m848.6 712.6-1.4 2.7c-.4.7-1.3 1-2 .6s-1-1.3-.6-2l1.4-2.7c.4-.7 1.3-1 2-.6.7.3 1 1.2.6 2z"
    />
    <linearGradient
      id="SVGID_00000142171021906628839450000015009199496253903244_"
      gradientUnits="userSpaceOnUse"
      x1={839.933}
      y1={722.137}
      x2={844.257}
      y2={722.137}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000142171021906628839450000015009199496253903244_)",
      }}
      d="m844.1 721.5-1.3 2.7c-.4.7-1.3 1.1-2 .7-.7-.4-1.1-1.3-.7-2l1.3-2.7c.4-.7 1.3-1.1 2-.7.8.3 1.1 1.2.7 2z"
    />
    <linearGradient
      id="SVGID_00000080929106938858826760000006391193838434565291_"
      gradientUnits="userSpaceOnUse"
      x1={835.674}
      y1={731.171}
      x2={839.925}
      y2={731.171}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000080929106938858826760000006391193838434565291_)",
      }}
      d="m839.8 730.4-1.3 2.7c-.3.8-1.2 1.1-2 .7-.8-.3-1.1-1.2-.7-2l1.3-2.7c.3-.8 1.2-1.1 2-.7.7.4 1 1.3.7 2z"
    />
    <linearGradient
      id="SVGID_00000039124764348514828150000017104398300813100726_"
      gradientUnits="userSpaceOnUse"
      x1={831.637}
      y1={740.308}
      x2={835.815}
      y2={740.308}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000039124764348514828150000017104398300813100726_)",
      }}
      d="m835.7 739.5-1.2 2.8c-.3.8-1.2 1.1-2 .8-.8-.3-1.1-1.2-.8-2l1.2-2.8c.3-.8 1.2-1.1 2-.8.8.4 1.1 1.3.8 2z"
    />
    <linearGradient
      id="SVGID_00000144295899541752636780000011480606050109095871_"
      gradientUnits="userSpaceOnUse"
      x1={827.824}
      y1={749.54}
      x2={831.928}
      y2={749.54}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000144295899541752636780000011480606050109095871_)",
      }}
      d="m831.8 748.7-1.1 2.8c-.3.8-1.2 1.1-1.9.8-.8-.3-1.1-1.2-.8-1.9l1.1-2.8c.3-.8 1.2-1.1 1.9-.8.8.3 1.1 1.1.8 1.9z"
    />
    <linearGradient
      id="SVGID_00000080913219117821673790000018370773601655037336_"
      gradientUnits="userSpaceOnUse"
      x1={824.238}
      y1={758.864}
      x2={828.267}
      y2={758.864}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000080913219117821673790000018370773601655037336_)",
      }}
      d="m828.2 758-1.1 2.8c-.3.8-1.1 1.2-1.9.9s-1.2-1.1-.9-1.9l1.1-2.8c.3-.8 1.1-1.2 1.9-.9.8.3 1.2 1.1.9 1.9z"
    />
    <linearGradient
      id="SVGID_00000107587881244868746710000013581137544674646421_"
      gradientUnits="userSpaceOnUse"
      x1={820.881}
      y1={768.274}
      x2={824.834}
      y2={768.274}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000107587881244868746710000013581137544674646421_)",
      }}
      d="m824.8 767.3-1 2.8c-.3.8-1.1 1.2-1.9.9-.8-.3-1.2-1.1-.9-1.9l1-2.8c.3-.8 1.1-1.2 1.9-.9.7.3 1.1 1.2.9 1.9z"
    />
    <linearGradient
      id="SVGID_00000094588851095882725630000017737095169887853958_"
      gradientUnits="userSpaceOnUse"
      x1={817.755}
      y1={777.763}
      x2={821.632}
      y2={777.763}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000094588851095882725630000017737095169887853958_)",
      }}
      d="m821.6 776.8-.9 2.9c-.2.8-1.1 1.2-1.9 1-.8-.2-1.2-1.1-1-1.9l.9-2.9c.2-.8 1.1-1.2 1.9-1 .8.3 1.2 1.1 1 1.9z"
    />
    <linearGradient
      id="SVGID_00000013192755447168880300000001129185728560552358_"
      gradientUnits="userSpaceOnUse"
      x1={814.861}
      y1={787.329}
      x2={818.661}
      y2={787.329}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013192755447168880300000001129185728560552358_)",
      }}
      d="m818.6 786.3-.8 2.9c-.2.8-1.1 1.2-1.8 1-.8-.2-1.2-1-1-1.8l.8-2.9c.2-.8 1.1-1.2 1.8-1 .8.2 1.2 1 1 1.8z"
    />
    <linearGradient
      id="SVGID_00000079479488998073395310000007716444877668427932_"
      gradientUnits="userSpaceOnUse"
      x1={812.204}
      y1={796.961}
      x2={815.926}
      y2={796.961}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000079479488998073395310000007716444877668427932_)",
      }}
      d="m815.9 795.9-.8 2.9c-.2.8-1 1.3-1.8 1-.8-.2-1.3-1-1-1.8l.8-2.9c.2-.8 1-1.3 1.8-1 .7.2 1.2 1 1 1.8z"
    />
    <linearGradient
      id="SVGID_00000121966733469396344230000003178994417633634983_"
      gradientUnits="userSpaceOnUse"
      x1={809.792}
      y1={806.655}
      x2={813.433}
      y2={806.655}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121966733469396344230000003178994417633634983_)",
      }}
      d="m813.4 805.5-.7 2.9c-.2.8-1 1.3-1.8 1.1-.8-.2-1.3-1-1.1-1.8l.7-2.9c.2-.8 1-1.3 1.8-1.1.8.3 1.3 1 1.1 1.8z"
    />
    <linearGradient
      id="SVGID_00000013914856820235216120000010835747616623841693_"
      gradientUnits="userSpaceOnUse"
      x1={807.634}
      y1={816.41}
      x2={811.192}
      y2={816.41}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013914856820235216120000010835747616623841693_)",
      }}
      d="m811.2 815.2-.6 2.9c-.2.8-.9 1.3-1.7 1.1-.8-.2-1.3-.9-1.1-1.7l.6-2.9c.2-.8.9-1.3 1.7-1.1.7.2 1.2 1 1.1 1.7z"
    />
    <linearGradient
      id="SVGID_00000050657100227937632580000017758133181855554688_"
      gradientUnits="userSpaceOnUse"
      x1={805.727}
      y1={826.218}
      x2={809.203}
      y2={826.218}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000050657100227937632580000017758133181855554688_)",
      }}
      d="m809.2 825-.5 3c-.1.8-.9 1.3-1.7 1.2-.8-.1-1.3-.9-1.2-1.7l.5-3c.1-.8.9-1.3 1.7-1.2.8.2 1.3.9 1.2 1.7z"
    />
    <linearGradient
      id="SVGID_00000015327420000177116310000000873900537215814314_"
      gradientUnits="userSpaceOnUse"
      x1={804.072}
      y1={836.073}
      x2={807.466}
      y2={836.073}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000015327420000177116310000000873900537215814314_)",
      }}
      d="m807.4 834.8-.5 3c-.1.8-.9 1.3-1.7 1.2-.8-.1-1.3-.9-1.2-1.7l.5-3c.1-.8.9-1.3 1.7-1.2.8.2 1.4.9 1.2 1.7z"
    />
    <linearGradient
      id="SVGID_00000163069528177820672840000017403270338898470054_"
      gradientUnits="userSpaceOnUse"
      x1={802.668}
      y1={845.968}
      x2={805.98}
      y2={845.968}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163069528177820672840000017403270338898470054_)",
      }}
      d="m806 844.7-.4 3c-.1.8-.8 1.4-1.6 1.3-.8-.1-1.4-.8-1.3-1.6l.4-3c.1-.8.8-1.4 1.6-1.3.8 0 1.4.8 1.3 1.6z"
    />
    <linearGradient
      id="SVGID_00000168111705027264328300000004482375474185413548_"
      gradientUnits="userSpaceOnUse"
      x1={801.513}
      y1={855.896}
      x2={804.744}
      y2={855.896}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168111705027264328300000004482375474185413548_)",
      }}
      d="m804.7 854.6-.3 3c-.1.8-.8 1.4-1.6 1.3-.8-.1-1.4-.8-1.3-1.6l.3-3c.1-.8.8-1.4 1.6-1.3.8 0 1.4.8 1.3 1.6z"
    />
    <linearGradient
      id="SVGID_00000008831460823110319580000010393808215021038005_"
      gradientUnits="userSpaceOnUse"
      x1={800.609}
      y1={865.851}
      x2={803.758}
      y2={865.851}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008831460823110319580000010393808215021038005_)",
      }}
      d="m803.8 864.5-.2 3c-.1.8-.8 1.4-1.6 1.3-.8-.1-1.4-.8-1.3-1.6l.2-3c.1-.8.8-1.4 1.6-1.3.7.1 1.3.8 1.3 1.6z"
    />
    <linearGradient
      id="SVGID_00000142857250175315030470000002894525927455252910_"
      gradientUnits="userSpaceOnUse"
      x1={799.954}
      y1={875.826}
      x2={803.021}
      y2={875.826}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000142857250175315030470000002894525927455252910_)",
      }}
      d="m803 874.4-.2 3c0 .8-.7 1.4-1.5 1.4s-1.4-.7-1.4-1.5l.2-3c0-.8.7-1.4 1.5-1.4.9 0 1.5.7 1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000127731075604287798950000007037055996979300774_"
      gradientUnits="userSpaceOnUse"
      x1={799.548}
      y1={885.816}
      x2={802.534}
      y2={885.816}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000127731075604287798950000007037055996979300774_)",
      }}
      d="m802.5 884.4-.1 3c0 .8-.7 1.4-1.5 1.4s-1.4-.7-1.4-1.5l.1-3c0-.8.7-1.4 1.5-1.4s1.5.7 1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000114040765017030408090000000645991615683768227_"
      gradientUnits="userSpaceOnUse"
      x1={799.392}
      y1={895.814}
      x2={802.297}
      y2={895.814}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000114040765017030408090000000645991615683768227_)",
      }}
      d="M802.3 894.3v3c0 .8-.7 1.4-1.5 1.4s-1.4-.7-1.4-1.5v-3c0-.8.7-1.4 1.5-1.4.8.1 1.4.7 1.4 1.5z"
    />
    <linearGradient
      id="SVGID_00000005230471672246227480000002678122948430510768_"
      gradientUnits="userSpaceOnUse"
      x1={799.431}
      y1={905.814}
      x2={802.361}
      y2={905.814}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005230471672246227480000002678122948430510768_)",
      }}
      d="m802.3 904.3.1 3c0 .8-.6 1.4-1.4 1.5-.8 0-1.4-.6-1.5-1.4l-.1-3c0-.8.6-1.5 1.4-1.5.8 0 1.5.6 1.5 1.4z"
    />
    <linearGradient
      id="SVGID_00000101091093599749042170000001488238026062322561_"
      gradientUnits="userSpaceOnUse"
      x1={799.699}
      y1={915.809}
      x2={802.697}
      y2={915.809}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000101091093599749042170000001488238026062322561_)",
      }}
      d="m802.6 914.2.1 3c0 .8-.6 1.5-1.4 1.5-.8 0-1.5-.6-1.5-1.4l-.1-3c0-.8.6-1.5 1.4-1.5.8 0 1.4.7 1.5 1.4z"
    />
    <linearGradient
      id="SVGID_00000108268326255311780480000007085321805880413359_"
      gradientUnits="userSpaceOnUse"
      x1={800.218}
      y1={925.793}
      x2={803.285}
      y2={925.793}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000108268326255311780480000007085321805880413359_)",
      }}
      d="m803.1 924.2.2 3c.1.8-.5 1.5-1.3 1.5-.8.1-1.5-.5-1.5-1.3l-.2-3c-.1-.8.5-1.5 1.3-1.5.7-.1 1.4.5 1.5 1.3z"
    />
    <linearGradient
      id="SVGID_00000044858030745129726300000010941110931619658419_"
      gradientUnits="userSpaceOnUse"
      x1={800.987}
      y1={935.761}
      x2={804.124}
      y2={935.761}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044858030745129726300000010941110931619658419_)",
      }}
      d="m803.8 934.1.3 3c.1.8-.5 1.5-1.3 1.6-.8.1-1.5-.5-1.6-1.3l-.3-3c-.1-.8.5-1.5 1.3-1.6.9 0 1.6.5 1.6 1.3z"
    />
    <linearGradient
      id="SVGID_00000044139530059356270660000012657482650836204948_"
      gradientUnits="userSpaceOnUse"
      x1={802.009}
      y1={945.705}
      x2={805.214}
      y2={945.705}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044139530059356270660000012657482650836204948_)",
      }}
      d="m804.9 944 .4 3c.1.8-.5 1.5-1.2 1.6-.8.1-1.5-.5-1.6-1.2l-.4-3c-.1-.8.5-1.5 1.2-1.6.7-.1 1.5.5 1.6 1.2z"
    />
    <linearGradient
      id="SVGID_00000119108848533410808240000005109727492329206440_"
      gradientUnits="userSpaceOnUse"
      x1={803.283}
      y1={955.619}
      x2={806.558}
      y2={955.619}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000119108848533410808240000005109727492329206440_)",
      }}
      d="m806.1 953.9.4 3c.1.8-.4 1.5-1.2 1.6-.8.1-1.5-.4-1.6-1.2l-.4-3c-.1-.8.4-1.5 1.2-1.6.8-.1 1.5.5 1.6 1.2z"
    />
    <linearGradient
      id="SVGID_00000159430594895141039860000013631372119094727336_"
      gradientUnits="userSpaceOnUse"
      x1={804.811}
      y1={965.495}
      x2={808.156}
      y2={965.495}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000159430594895141039860000013631372119094727336_)",
      }}
      d="m807.6 963.8.5 3c.1.8-.4 1.5-1.2 1.6-.8.1-1.5-.4-1.6-1.2l-.5-3c-.1-.8.4-1.5 1.2-1.6.8-.1 1.5.4 1.6 1.2z"
    />
    <linearGradient
      id="SVGID_00000092438865270830622780000015611866161703958458_"
      gradientUnits="userSpaceOnUse"
      x1={806.593}
      y1={975.328}
      x2={810.009}
      y2={975.328}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000092438865270830622780000015611866161703958458_)",
      }}
      d="m809.4 973.6.6 2.9c.2.8-.3 1.5-1.1 1.7-.8.2-1.5-.3-1.7-1.1l-.6-2.9c-.2-.8.3-1.5 1.1-1.7.8-.2 1.5.3 1.7 1.1z"
    />
    <linearGradient
      id="SVGID_00000085956345590305978590000003774818258328397465_"
      gradientUnits="userSpaceOnUse"
      x1={808.632}
      y1={985.111}
      x2={812.118}
      y2={985.111}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000085956345590305978590000003774818258328397465_)",
      }}
      d="m811.4 983.3.7 2.9c.2.8-.3 1.5-1.1 1.7-.8.2-1.5-.3-1.7-1.1l-.7-2.9c-.2-.8.3-1.5 1.1-1.7.8-.1 1.6.4 1.7 1.1z"
    />
    <linearGradient
      id="SVGID_00000052819574647790042240000007279698918718570630_"
      gradientUnits="userSpaceOnUse"
      x1={810.928}
      y1={994.835}
      x2={814.486}
      y2={994.835}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000052819574647790042240000007279698918718570630_)",
      }}
      d="m813.7 993 .7 2.9c.2.8-.3 1.5-1 1.7-.8.2-1.5-.3-1.7-1l-.7-2.9c-.2-.8.3-1.5 1-1.7.7-.2 1.5.3 1.7 1z"
    />
    <linearGradient
      id="SVGID_00000170249272206522997610000000096581715276493481_"
      gradientUnits="userSpaceOnUse"
      x1={813.484}
      y1={1004.493}
      x2={817.112}
      y2={1004.493}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000170249272206522997610000000096581715276493481_)",
      }}
      d="m816.2 1002.7.8 2.9c.2.7-.2 1.5-1 1.7-.7.2-1.5-.2-1.7-1l-.8-2.9c-.2-.7.2-1.5 1-1.7.8-.2 1.5.2 1.7 1z"
    />
    <linearGradient
      id="SVGID_00000169525111628108610160000009297495724435965368_"
      gradientUnits="userSpaceOnUse"
      x1={816.299}
      y1={1014.078}
      x2={820}
      y2={1014.078}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000169525111628108610160000009297495724435965368_)",
      }}
      d="m819 1012.2.9 2.9c.2.7-.2 1.5-.9 1.8-.7.2-1.5-.2-1.8-.9l-.9-2.9c-.2-.7.2-1.5.9-1.8.8-.2 1.6.2 1.8.9z"
    />
    <linearGradient
      id="SVGID_00000015323983072209505710000001928994175682374825_"
      gradientUnits="userSpaceOnUse"
      x1={819.376}
      y1={1023.58}
      x2={823.149}
      y2={1023.58}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000015323983072209505710000001928994175682374825_)",
      }}
      d="m822.1 1021.7 1 2.8c.3.7-.1 1.5-.9 1.8-.7.2-1.5-.1-1.8-.9l-1-2.8c-.3-.7.1-1.5.9-1.8.8-.2 1.5.2 1.8.9z"
    />
    <linearGradient
      id="SVGID_00000097480976701288706910000010295692181000248243_"
      gradientUnits="userSpaceOnUse"
      x1={822.717}
      y1={1032.993}
      x2={826.562}
      y2={1032.993}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000097480976701288706910000010295692181000248243_)",
      }}
      d="m825.4 1031.1 1.1 2.8c.3.7-.1 1.5-.8 1.8-.7.3-1.5-.1-1.8-.8l-1.1-2.8c-.3-.7.1-1.5.8-1.8.7-.3 1.6.1 1.8.8z"
    />
    <linearGradient
      id="SVGID_00000127005240574873513250000013334900241720838790_"
      gradientUnits="userSpaceOnUse"
      x1={826.321}
      y1={1042.306}
      x2={830.24}
      y2={1042.306}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000127005240574873513250000013334900241720838790_)",
      }}
      d="m829 1040.4 1.1 2.8c.3.7-.1 1.5-.8 1.8s-1.5-.1-1.8-.8l-1.1-2.8c-.3-.7.1-1.5.8-1.8.7-.3 1.5.1 1.8.8z"
    />
    <linearGradient
      id="SVGID_00000117641003490777746510000017939146604432643769_"
      gradientUnits="userSpaceOnUse"
      x1={830.191}
      y1={1051.513}
      x2={834.184}
      y2={1051.513}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000117641003490777746510000017939146604432643769_)",
      }}
      d="m832.9 1049.6 1.2 2.7c.3.7 0 1.5-.7 1.8s-1.5 0-1.8-.7l-1.2-2.7c-.3-.7 0-1.5.7-1.8s1.4 0 1.8.7z"
    />
    <linearGradient
      id="SVGID_00000090264848820069782690000011824957847722136229_"
      gradientUnits="userSpaceOnUse"
      x1={834.331}
      y1={1060.606}
      x2={838.396}
      y2={1060.606}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000090264848820069782690000011824957847722136229_)",
      }}
      d="m837 1058.7 1.3 2.7c.3.7 0 1.5-.7 1.8-.7.3-1.5 0-1.8-.7l-1.3-2.7c-.3-.7 0-1.5.7-1.8s1.4 0 1.8.7z"
    />
    <linearGradient
      id="SVGID_00000073717812794408240670000014785477378794258865_"
      gradientUnits="userSpaceOnUse"
      x1={838.733}
      y1={1069.562}
      x2={842.87}
      y2={1069.562}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000073717812794408240670000014785477378794258865_)",
      }}
      d="m841.3 1067.6 1.4 2.7c.3.7.1 1.5-.6 1.9-.7.3-1.5.1-1.9-.6l-1.4-2.7c-.3-.7-.1-1.5.6-1.9.8-.3 1.6-.1 1.9.6z"
    />
    <linearGradient
      id="SVGID_00000018220740275743453320000012849708545520957599_"
      gradientUnits="userSpaceOnUse"
      x1={843.402}
      y1={1078.383}
      x2={847.615}
      y2={1078.383}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000018220740275743453320000012849708545520957599_)",
      }}
      d="m846 1076.4 1.5 2.6c.4.7.1 1.5-.5 1.9-.7.4-1.5.1-1.9-.5l-1.5-2.6c-.4-.7-.1-1.5.5-1.9s1.5-.2 1.9.5z"
    />
    <linearGradient
      id="SVGID_00000133519395968580810990000005135083891457384890_"
      gradientUnits="userSpaceOnUse"
      x1={848.34}
      y1={1087.057}
      x2={852.626}
      y2={1087.057}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000133519395968580810990000005135083891457384890_)",
      }}
      d="m850.9 1085.1 1.5 2.6c.4.7.2 1.5-.5 1.9-.7.4-1.5.2-1.9-.5l-1.5-2.6c-.4-.7-.2-1.5.5-1.9.7-.4 1.5-.2 1.9.5z"
    />
    <linearGradient
      id="SVGID_00000171692203818313395490000001568535961190739614_"
      gradientUnits="userSpaceOnUse"
      x1={853.545}
      y1={1095.573}
      x2={857.905}
      y2={1095.573}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000171692203818313395490000001568535961190739614_)",
      }}
      d="m856.1 1093.6 1.6 2.5c.4.6.2 1.5-.4 1.9-.6.4-1.5.2-1.9-.4l-1.6-2.5c-.4-.6-.2-1.5.4-1.9.6-.5 1.5-.3 1.9.4z"
    />
    <linearGradient
      id="SVGID_00000050654324805121961970000004977263766364598419_"
      gradientUnits="userSpaceOnUse"
      x1={859.016}
      y1={1103.919}
      x2={863.449}
      y2={1103.919}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000050654324805121961970000004977263766364598419_)",
      }}
      d="m861.5 1101.9 1.7 2.5c.4.6.3 1.5-.4 1.9-.6.4-1.5.3-1.9-.4l-1.7-2.5c-.4-.6-.3-1.5.4-1.9.6-.4 1.5-.2 1.9.4z"
    />
    <linearGradient
      id="SVGID_00000062885184334589569260000009190153632152111242_"
      gradientUnits="userSpaceOnUse"
      x1={864.752}
      y1={1112.084}
      x2={869.257}
      y2={1112.084}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062885184334589569260000009190153632152111242_)",
      }}
      d="m867.2 1110.1 1.8 2.4c.4.6.3 1.5-.3 1.9-.6.4-1.5.3-1.9-.3l-1.8-2.4c-.4-.6-.3-1.5.3-1.9s1.5-.3 1.9.3z"
    />
    <linearGradient
      id="SVGID_00000070827135821549512410000007206799131395681970_"
      gradientUnits="userSpaceOnUse"
      x1={870.751}
      y1={1120.058}
      x2={875.327}
      y2={1120.058}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000070827135821549512410000007206799131395681970_)",
      }}
      d="m873.2 1118 1.8 2.4c.5.6.4 1.4-.2 1.9-.6.5-1.4.4-1.9-.2l-1.9-2.4c-.5-.6-.4-1.5.2-1.9.7-.5 1.5-.4 2 .2z"
    />
    <linearGradient
      id="SVGID_00000046314192376693185110000012508446590223376052_"
      gradientUnits="userSpaceOnUse"
      x1={877.009}
      y1={1127.828}
      x2={881.656}
      y2={1127.828}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000046314192376693185110000012508446590223376052_)",
      }}
      d="m879.4 1125.8 1.9 2.3c.5.6.4 1.4-.2 1.9-.6.5-1.4.4-1.9-.2l-1.9-2.3c-.5-.6-.4-1.4.2-1.9.6-.4 1.4-.4 1.9.2z"
    />
    <linearGradient
      id="SVGID_00000129922409337693359650000017734066022629620104_"
      gradientUnits="userSpaceOnUse"
      x1={883.524}
      y1={1135.384}
      x2={888.241}
      y2={1135.384}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129922409337693359650000017734066022629620104_)",
      }}
      d="m885.9 1133.4 2 2.2c.5.6.5 1.4-.1 1.9s-1.4.5-1.9-.1l-2-2.2c-.5-.6-.5-1.4.1-1.9.5-.5 1.4-.5 1.9.1z"
    />
    <linearGradient
      id="SVGID_00000084527238411060127160000015670967431167005331_"
      gradientUnits="userSpaceOnUse"
      x1={890.291}
      y1={1142.715}
      x2={895.076}
      y2={1142.715}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000084527238411060127160000015670967431167005331_)",
      }}
      d="m892.6 1140.7 2.1 2.2c.5.5.5 1.4 0 1.9s-1.4.5-1.9 0l-2.1-2.2c-.5-.5-.5-1.4 0-1.9.5-.6 1.4-.5 1.9 0z"
    />
    <linearGradient
      id="SVGID_00000086661052204053483140000005975159790215228324_"
      gradientUnits="userSpaceOnUse"
      x1={897.304}
      y1={1149.807}
      x2={902.152}
      y2={1149.807}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000086661052204053483140000005975159790215228324_)",
      }}
      d="m899.6 1147.8 2.1 2.1c.5.5.5 1.4 0 1.9s-1.4.5-1.9 0l-2.1-2.1c-.5-.5-.5-1.4 0-1.9s1.4-.5 1.9 0z"
    />
    <linearGradient
      id="SVGID_00000047030105678629752430000012805746655058260107_"
      gradientUnits="userSpaceOnUse"
      x1={904.553}
      y1={1156.651}
      x2={909.468}
      y2={1156.651}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000047030105678629752430000012805746655058260107_)",
      }}
      d="m906.8 1154.6 2.2 2c.6.5.6 1.4.1 1.9s-1.4.6-1.9.1l-2.2-2c-.6-.5-.6-1.4-.1-1.9s1.4-.6 1.9-.1z"
    />
    <linearGradient
      id="SVGID_00000003074516688170982790000005787927395841446029_"
      gradientUnits="userSpaceOnUse"
      x1={912.029}
      y1={1163.266}
      x2={916.993}
      y2={1163.266}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003074516688170982790000005787927395841446029_)",
      }}
      d="m914.2 1161.3 2.3 2c.6.5.6 1.3.1 1.9-.5.6-1.3.6-1.9.1l-2.3-2c-.6-.5-.6-1.3-.1-1.9.5-.5 1.4-.6 1.9-.1z"
    />
    <linearGradient
      id="SVGID_00000092456698492111442330000013582674336993150130_"
      gradientUnits="userSpaceOnUse"
      x1={919.679}
      y1={1169.68}
      x2={924.688}
      y2={1169.68}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000092456698492111442330000013582674336993150130_)",
      }}
      d="m921.9 1167.7 2.3 1.9c.6.5.7 1.3.2 1.9-.5.6-1.3.7-1.9.2l-2.3-1.9c-.6-.5-.7-1.3-.2-1.9.4-.6 1.3-.7 1.9-.2z"
    />
    <linearGradient
      id="SVGID_00000181780155937129987960000018410193225948388509_"
      gradientUnits="userSpaceOnUse"
      x1={927.498}
      y1={1175.888}
      x2={932.55}
      y2={1175.888}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000181780155937129987960000018410193225948388509_)",
      }}
      d="m929.7 1173.9 2.4 1.8c.6.5.7 1.3.2 1.9-.5.6-1.3.7-1.9.2l-2.4-1.8c-.6-.5-.7-1.3-.2-1.9.4-.5 1.3-.6 1.9-.2z"
    />
    <linearGradient
      id="SVGID_00000107588098948185939380000002282111695176225947_"
      gradientUnits="userSpaceOnUse"
      x1={935.479}
      y1={1181.885}
      x2={940.573}
      y2={1181.885}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000107588098948185939380000002282111695176225947_)",
      }}
      d="m937.6 1179.9 2.4 1.8c.6.4.7 1.3.3 1.9-.4.6-1.3.7-1.9.3l-2.4-1.8c-.6-.4-.7-1.3-.3-1.9s1.3-.7 1.9-.3z"
    />
    <linearGradient
      id="SVGID_00000099649577263413385470000017688597463983157412_"
      gradientUnits="userSpaceOnUse"
      x1={943.619}
      y1={1187.667}
      x2={948.751}
      y2={1187.667}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000099649577263413385470000017688597463983157412_)",
      }}
      d="m945.7 1185.7 2.5 1.7c.6.4.8 1.2.3 1.9-.4.6-1.2.8-1.8.3l-2.5-1.7c-.6-.4-.8-1.2-.3-1.9.4-.5 1.2-.7 1.8-.3z"
    />
    <linearGradient
      id="SVGID_00000065044762147940061570000016434239191882080647_"
      gradientUnits="userSpaceOnUse"
      x1={951.91}
      y1={1193.229}
      x2={957.081}
      y2={1193.229}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065044762147940061570000016434239191882080647_)",
      }}
      d="m954 1191.3 2.5 1.6c.6.4.8 1.2.4 1.8-.4.6-1.2.8-1.8.4l-2.5-1.6c-.6-.4-.8-1.2-.4-1.8.3-.6 1.1-.8 1.8-.4z"
    />
    <linearGradient
      id="SVGID_00000035519104060293060440000011588984385312298147_"
      gradientUnits="userSpaceOnUse"
      x1={960.347}
      y1={1198.568}
      x2={965.554}
      y2={1198.568}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000035519104060293060440000011588984385312298147_)",
      }}
      d="m962.4 1196.7 2.6 1.6c.6.4.8 1.2.4 1.8-.4.6-1.2.8-1.8.4l-2.6-1.6c-.6-.4-.8-1.2-.4-1.8.3-.6 1.1-.8 1.8-.4z"
    />
    <linearGradient
      id="SVGID_00000094593944435334689120000012687896103802717577_"
      gradientUnits="userSpaceOnUse"
      x1={968.924}
      y1={1203.681}
      x2={974.165}
      y2={1203.681}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000094593944435334689120000012687896103802717577_)",
      }}
      d="m970.9 1201.8 2.6 1.5c.6.4.8 1.2.5 1.8-.4.6-1.2.8-1.8.5l-2.6-1.5c-.6-.4-.8-1.2-.5-1.8.4-.7 1.2-.9 1.8-.5z"
    />
    <linearGradient
      id="SVGID_00000065040818363469678760000006768683398250406301_"
      gradientUnits="userSpaceOnUse"
      x1={977.633}
      y1={1208.565}
      x2={982.905}
      y2={1208.565}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000065040818363469678760000006768683398250406301_)",
      }}
      d="m979.6 1206.7 2.6 1.4c.6.3.9 1.1.5 1.8-.3.6-1.1.9-1.8.5l-2.6-1.4c-.6-.3-.9-1.1-.5-1.8.3-.6 1.1-.9 1.8-.5z"
    />
    <linearGradient
      id="SVGID_00000134211986434626976800000010068131351548995746_"
      gradientUnits="userSpaceOnUse"
      x1={986.467}
      y1={1213.218}
      x2={991.771}
      y2={1213.218}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000134211986434626976800000010068131351548995746_)",
      }}
      d="m988.4 1211.4 2.7 1.4c.6.3.9 1.1.6 1.8s-1.1.9-1.8.6l-2.7-1.4c-.6-.3-.9-1.1-.6-1.8.3-.7 1.1-1 1.8-.6z"
    />
    <linearGradient
      id="SVGID_00000168114417803075278960000003229937257366407598_"
      gradientUnits="userSpaceOnUse"
      x1={995.422}
      y1={1217.64}
      x2={1000.754}
      y2={1217.64}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168114417803075278960000003229937257366407598_)",
      }}
      d="m997.3 1215.8 2.7 1.3c.7.3.9 1.1.6 1.7-.3.7-1.1.9-1.7.6l-2.7-1.3c-.7-.3-.9-1.1-.6-1.7.3-.6 1-.9 1.7-.6z"
    />
    <linearGradient
      id="SVGID_00000106136357573105237230000000645212062141165200_"
      gradientUnits="userSpaceOnUse"
      x1={1004.489}
      y1={1221.829}
      x2={1009.846}
      y2={1221.829}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106136357573105237230000000645212062141165200_)",
      }}
      d="m1006.3 1220 2.7 1.2c.7.3 1 1.1.7 1.7-.3.7-1.1 1-1.7.7l-2.7-1.2c-.7-.3-1-1.1-.7-1.7.3-.7 1.1-1 1.7-.7z"
    />
    <linearGradient
      id="SVGID_00000094614764895225797770000017660655845400295809_"
      gradientUnits="userSpaceOnUse"
      x1={1013.66}
      y1={1225.785}
      x2={1019.04}
      y2={1225.785}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000094614764895225797770000017660655845400295809_)",
      }}
      d="m1015.5 1224 2.8 1.2c.7.3 1 1 .7 1.7-.3.7-1 1-1.7.7l-2.8-1.2c-.7-.3-1-1-.7-1.7.2-.7 1-1 1.7-.7z"
    />
    <linearGradient
      id="SVGID_00000013162156459448568140000008357969248333013418_"
      gradientUnits="userSpaceOnUse"
      x1={1022.928}
      y1={1229.509}
      x2={1028.33}
      y2={1229.509}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013162156459448568140000008357969248333013418_)",
      }}
      d="m1024.7 1227.8 2.8 1.1c.7.3 1 1 .7 1.7-.3.7-1 1-1.7.7l-2.8-1.1c-.7-.3-1-1-.7-1.7s1-1 1.7-.7z"
    />
    <linearGradient
      id="SVGID_00000090283764125362488440000012267226644190459829_"
      gradientUnits="userSpaceOnUse"
      x1={1032.287}
      y1={1233.002}
      x2={1037.708}
      y2={1233.002}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000090283764125362488440000012267226644190459829_)",
      }}
      d="m1034 1231.3 2.8 1c.7.2 1 1 .8 1.7-.2.7-1 1-1.7.8l-2.8-1c-.7-.2-1-1-.8-1.7.3-.7 1-1.1 1.7-.8z"
    />
    <linearGradient
      id="SVGID_00000129885211247566687680000003456475290870383030_"
      gradientUnits="userSpaceOnUse"
      x1={1041.729}
      y1={1236.265}
      x2={1047.167}
      y2={1236.265}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000129885211247566687680000003456475290870383030_)",
      }}
      d="m1043.4 1234.6 2.8.9c.7.2 1 1 .8 1.6-.2.7-1 1-1.6.8l-2.8-.9c-.7-.2-1-1-.8-1.6.2-.7 1-1.1 1.6-.8z"
    />
    <linearGradient
      id="SVGID_00000136393838125391431460000011595358548867200446_"
      gradientUnits="userSpaceOnUse"
      x1={1051.248}
      y1={1239.3}
      x2={1056.701}
      y2={1239.3}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000136393838125391431460000011595358548867200446_)",
      }}
      d="m1052.9 1237.6 2.9.9c.7.2 1.1.9.9 1.6-.2.7-.9 1.1-1.6.9l-2.9-.9c-.7-.2-1.1-.9-.9-1.6.2-.7.9-1.1 1.6-.9z"
    />
    <linearGradient
      id="SVGID_00000024695851435814801300000013150502501789376148_"
      gradientUnits="userSpaceOnUse"
      x1={1060.836}
      y1={1242.109}
      x2={1066.303}
      y2={1242.109}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000024695851435814801300000013150502501789376148_)",
      }}
      d="m1062.5 1240.5 2.9.8c.7.2 1.1.9.9 1.6-.2.7-.9 1.1-1.6.9l-2.9-.8c-.7-.2-1.1-.9-.9-1.6.2-.7.9-1.1 1.6-.9z"
    />
    <linearGradient
      id="SVGID_00000148661147952040540540000006189523224995978939_"
      gradientUnits="userSpaceOnUse"
      x1={1070.488}
      y1={1244.695}
      x2={1075.966}
      y2={1244.695}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000148661147952040540540000006189523224995978939_)",
      }}
      d="m1072.1 1243.1 2.9.7c.7.2 1.1.9.9 1.6-.2.7-.9 1.1-1.6.9l-2.9-.7c-.7-.2-1.1-.9-.9-1.6s.9-1.1 1.6-.9z"
    />
    <linearGradient
      id="SVGID_00000052785550857591902960000009380745902341247117_"
      gradientUnits="userSpaceOnUse"
      x1={1080.198}
      y1={1247.061}
      x2={1085.685}
      y2={1247.061}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000052785550857591902960000009380745902341247117_)",
      }}
      d="m1081.8 1245.5 2.9.7c.7.2 1.1.8 1 1.5-.2.7-.8 1.1-1.5 1l-2.9-.7c-.7-.2-1.1-.8-1-1.5.1-.8.8-1.2 1.5-1z"
    />
    <linearGradient
      id="SVGID_00000001642543075087539240000000347614862980363906_"
      gradientUnits="userSpaceOnUse"
      x1={1089.958}
      y1={1249.209}
      x2={1095.453}
      y2={1249.209}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000001642543075087539240000000347614862980363906_)",
      }}
      d="m1091.5 1247.7 2.9.6c.7.1 1.1.8 1 1.5-.1.7-.8 1.1-1.5 1l-2.9-.6c-.7-.1-1.1-.8-1-1.5.1-.7.8-1.2 1.5-1z"
    />
    <linearGradient
      id="SVGID_00000021089541618402222420000006333916951699873962_"
      gradientUnits="userSpaceOnUse"
      x1={1099.764}
      y1={1251.145}
      x2={1105.265}
      y2={1251.145}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021089541618402222420000006333916951699873962_)",
      }}
      d="m1101.3 1249.6 2.9.5c.7.1 1.1.8 1 1.5-.1.7-.8 1.1-1.5 1l-2.9-.5c-.7-.1-1.2-.8-1-1.5.1-.7.8-1.1 1.5-1z"
    />
    <linearGradient
      id="SVGID_00000121965584635150239270000016289768805241911704_"
      gradientUnits="userSpaceOnUse"
      x1={1109.611}
      y1={1252.87}
      x2={1115.116}
      y2={1252.87}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121965584635150239270000016289768805241911704_)",
      }}
      d="m1111.1 1251.4 3 .5c.7.1 1.2.8 1 1.5s-.8 1.2-1.5 1l-3-.5c-.7-.1-1.2-.8-1-1.5.1-.7.8-1.1 1.5-1z"
    />
    <linearGradient
      id="SVGID_00000136398697528607267030000010302040288216259250_"
      gradientUnits="userSpaceOnUse"
      x1={1119.492}
      y1={1254.389}
      x2={1125}
      y2={1254.389}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000136398697528607267030000010302040288216259250_)",
      }}
      d="m1120.9 1252.9 3 .4c.7.1 1.2.7 1.1 1.4s-.7 1.2-1.4 1.1l-3-.4c-.7-.1-1.2-.7-1.1-1.4.1-.7.7-1.2 1.4-1.1z"
    />
    <linearGradient
      id="SVGID_00000120538462739259876840000010236992632588504242_"
      gradientUnits="userSpaceOnUse"
      x1={1129.403}
      y1={1255.706}
      x2={1134.913}
      y2={1255.706}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000120538462739259876840000010236992632588504242_)",
      }}
      d="m1130.8 1254.3 3 .4c.7.1 1.2.7 1.1 1.4-.1.7-.7 1.2-1.4 1.1l-3-.4c-.7-.1-1.2-.7-1.1-1.4.1-.7.7-1.2 1.4-1.1z"
    />
    <linearGradient
      id="SVGID_00000088091614873169933230000005542806867387695519_"
      gradientUnits="userSpaceOnUse"
      x1={1139.34}
      y1={1256.824}
      x2={1144.85}
      y2={1256.824}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088091614873169933230000005542806867387695519_)",
      }}
      d="m1140.7 1255.4 3 .3c.7.1 1.2.7 1.1 1.4-.1.7-.7 1.2-1.4 1.1l-3-.3c-.7-.1-1.2-.7-1.1-1.4.1-.7.7-1.2 1.4-1.1z"
    />
    <linearGradient
      id="SVGID_00000073718498235827395380000017150434982957084578_"
      gradientUnits="userSpaceOnUse"
      x1={1149.297}
      y1={1257.748}
      x2={1154.805}
      y2={1257.748}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000073718498235827395380000017150434982957084578_)",
      }}
      d="m1150.7 1256.4 3 .2c.7.1 1.2.7 1.2 1.4-.1.7-.7 1.2-1.4 1.2l-3-.2c-.7-.1-1.2-.7-1.2-1.4.1-.8.7-1.3 1.4-1.2z"
    />
    <linearGradient
      id="SVGID_00000028326749029667732610000001136024118239041453_"
      gradientUnits="userSpaceOnUse"
      x1={1159.271}
      y1={1258.481}
      x2={1164.777}
      y2={1258.481}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000028326749029667732610000001136024118239041453_)",
      }}
      d="m1160.6 1257.1 3 .2c.7 0 1.2.6 1.2 1.3 0 .7-.6 1.2-1.3 1.2l-3-.2c-.7 0-1.2-.6-1.2-1.3 0-.7.6-1.2 1.3-1.2z"
    />
    <linearGradient
      id="SVGID_00000088110056879901742490000016161379437443557774_"
      gradientUnits="userSpaceOnUse"
      x1={1169.257}
      y1={1259.028}
      x2={1174.76}
      y2={1259.028}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000088110056879901742490000016161379437443557774_)",
      }}
      d="m1170.6 1257.7 3 .1c.7 0 1.2.6 1.2 1.3 0 .7-.6 1.2-1.3 1.2l-3-.1c-.7 0-1.2-.6-1.2-1.3 0-.7.6-1.2 1.3-1.2z"
    />
    <linearGradient
      id="SVGID_00000021820374615716253870000016363221478375222705_"
      gradientUnits="userSpaceOnUse"
      x1={1179.253}
      y1={1259.393}
      x2={1184.751}
      y2={1259.393}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000021820374615716253870000016363221478375222705_)",
      }}
      d="m1180.5 1258.1 3 .1c.7 0 1.2.6 1.2 1.3 0 .7-.6 1.2-1.3 1.2l-3-.1c-.7 0-1.2-.6-1.2-1.3s.6-1.2 1.3-1.2z"
    />
    <linearGradient
      id="SVGID_00000147184236213035880330000006633850636677055140_"
      gradientUnits="userSpaceOnUse"
      x1={1189.254}
      y1={1259.58}
      x2={1194.745}
      y2={1259.58}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147184236213035880330000006633850636677055140_)",
      }}
      d="M1190.5 1258.3h3c.7 0 1.2.6 1.2 1.3 0 .7-.6 1.2-1.3 1.2h-3c-.7 0-1.2-.6-1.2-1.3.1-.6.6-1.2 1.3-1.2z"
    />
    <linearGradient
      id="SVGID_00000076580607262262064730000004087236729154033325_"
      gradientUnits="userSpaceOnUse"
      x1={1199.258}
      y1={1259.592}
      x2={1204.748}
      y2={1259.592}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000076580607262262064730000004087236729154033325_)",
      }}
      d="M1200.5 1258.4h3c.7 0 1.2.5 1.3 1.2s-.5 1.2-1.2 1.3h-3c-.7 0-1.2-.5-1.3-1.2 0-.8.5-1.3 1.2-1.3z"
    />
    <linearGradient
      id="SVGID_00000090984530565819621080000009118354859866586024_"
      gradientUnits="userSpaceOnUse"
      x1={1209.264}
      y1={1259.434}
      x2={1214.743}
      y2={1259.434}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000090984530565819621080000009118354859866586024_)",
      }}
      d="m1210.5 1258.2 3-.1c.7 0 1.3.5 1.3 1.2s-.5 1.3-1.2 1.3l-3 .1c-.7 0-1.3-.5-1.3-1.2-.1-.7.5-1.3 1.2-1.3z"
    />
    <linearGradient
      id="SVGID_00000133496602764475427150000002678703052734591898_"
      gradientUnits="userSpaceOnUse"
      x1={1219.263}
      y1={1259.108}
      x2={1224.734}
      y2={1259.108}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000133496602764475427150000002678703052734591898_)",
      }}
      d="m1220.5 1257.9 3-.1c.7 0 1.3.5 1.3 1.2s-.5 1.3-1.2 1.3l-3 .1c-.7 0-1.3-.5-1.3-1.2-.1-.7.5-1.2 1.2-1.3z"
    />
    <linearGradient
      id="SVGID_00000003820712143971309560000015203455148396543372_"
      gradientUnits="userSpaceOnUse"
      x1={1229.255}
      y1={1258.621}
      x2={1234.717}
      y2={1258.621}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003820712143971309560000015203455148396543372_)",
      }}
      d="m1230.4 1257.5 3-.2c.7 0 1.3.5 1.3 1.2s-.5 1.3-1.2 1.3l-3 .2c-.7 0-1.3-.5-1.3-1.2s.5-1.3 1.2-1.3z"
    />
    <linearGradient
      id="SVGID_00000132083410334683088260000006708345763234602928_"
      gradientUnits="userSpaceOnUse"
      x1={1239.239}
      y1={1257.974}
      x2={1244.692}
      y2={1257.974}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132083410334683088260000006708345763234602928_)",
      }}
      d="m1240.4 1256.9 3-.2c.7 0 1.3.5 1.3 1.1 0 .7-.5 1.3-1.1 1.3l-3 .2c-.7 0-1.3-.5-1.3-1.1-.1-.7.4-1.3 1.1-1.3z"
    />
    <linearGradient
      id="SVGID_00000034800748559170803430000016146618092197856408_"
      gradientUnits="userSpaceOnUse"
      x1={1249.212}
      y1={1257.17}
      x2={1254.654}
      y2={1257.17}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000034800748559170803430000016146618092197856408_)",
      }}
      d="m1250.3 1256.1 3-.3c.7-.1 1.3.4 1.3 1.1.1.7-.4 1.3-1.1 1.3l-3 .3c-.7.1-1.3-.4-1.3-1.1 0-.7.5-1.3 1.1-1.3z"
    />
    <linearGradient
      id="SVGID_00000178201922260754410260000015532648078046652594_"
      gradientUnits="userSpaceOnUse"
      x1={1259.171}
      y1={1256.215}
      x2={1264.603}
      y2={1256.215}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000178201922260754410260000015532648078046652594_)",
      }}
      d="m1260.3 1255.2 3-.3c.7-.1 1.3.4 1.3 1.1.1.7-.4 1.3-1.1 1.3l-3 .3c-.7.1-1.3-.4-1.3-1.1-.1-.7.4-1.3 1.1-1.3z"
    />
    <linearGradient
      id="SVGID_00000106855770227639463990000007913809236377327294_"
      gradientUnits="userSpaceOnUse"
      x1={1269.116}
      y1={1255.111}
      x2={1274.536}
      y2={1255.111}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000106855770227639463990000007913809236377327294_)",
      }}
      d="m1270.2 1254.1 3-.4c.7-.1 1.3.4 1.4 1.1s-.4 1.3-1.1 1.4l-3 .4c-.7.1-1.3-.4-1.4-1.1-.1-.7.4-1.3 1.1-1.4z"
    />
    <linearGradient
      id="SVGID_00000109029276567893817370000005849819151399349419_"
      gradientUnits="userSpaceOnUse"
      x1={1279.043}
      y1={1253.86}
      x2={1284.451}
      y2={1253.86}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000109029276567893817370000005849819151399349419_)",
      }}
      d="m1280.1 1252.9 3-.4c.7-.1 1.3.4 1.4 1 .1.7-.4 1.3-1 1.4l-3 .4c-.7.1-1.3-.4-1.4-1-.1-.7.3-1.4 1-1.4z"
    />
    <linearGradient
      id="SVGID_00000142880197936204751680000006476724707682484366_"
      gradientUnits="userSpaceOnUse"
      x1={1288.951}
      y1={1252.467}
      x2={1294.348}
      y2={1252.467}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000142880197936204751680000006476724707682484366_)",
      }}
      d="m1290 1251.5 3-.4c.7-.1 1.3.4 1.4 1 .1.7-.4 1.3-1 1.4l-3 .4c-.7.1-1.3-.4-1.4-1s.3-1.3 1-1.4z"
    />
    <linearGradient
      id="SVGID_00000108275362636534340750000003862306234577488260_"
      gradientUnits="userSpaceOnUse"
      x1={1298.84}
      y1={1250.934}
      x2={1304.223}
      y2={1250.934}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000108275362636534340750000003862306234577488260_)",
      }}
      d="m1299.9 1250 3-.5c.7-.1 1.3.3 1.4 1 .1.7-.3 1.3-1 1.4l-3 .5c-.7.1-1.3-.3-1.4-1-.2-.7.3-1.3 1-1.4z"
    />
    <linearGradient
      id="SVGID_00000003106420984707514880000008689861399766163337_"
      gradientUnits="userSpaceOnUse"
      x1={1308.706}
      y1={1249.264}
      x2={1314.076}
      y2={1249.264}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003106420984707514880000008689861399766163337_)",
      }}
      d="m1309.7 1248.3 3-.5c.7-.1 1.3.3 1.4 1 .1.7-.3 1.3-1 1.4l-3 .5c-.7.1-1.3-.3-1.4-1s.3-1.2 1-1.4z"
    />
    <linearGradient
      id="SVGID_00000096767574807971443350000010052096478687290758_"
      gradientUnits="userSpaceOnUse"
      x1={1318.549}
      y1={1247.46}
      x2={1323.905}
      y2={1247.46}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000096767574807971443350000010052096478687290758_)",
      }}
      d="m1319.5 1246.6 2.9-.6c.7-.1 1.3.3 1.4 1s-.3 1.3-1 1.4l-2.9.6c-.7.1-1.3-.3-1.4-1s.4-1.3 1-1.4z"
    />
    <linearGradient
      id="SVGID_00000032622137078680212290000005956698577605992328_"
      gradientUnits="userSpaceOnUse"
      x1={1328.366}
      y1={1245.524}
      x2={1333.708}
      y2={1245.524}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000032622137078680212290000005956698577605992328_)",
      }}
      d="m1329.3 1244.6 2.9-.6c.6-.1 1.3.3 1.4.9.1.6-.3 1.3-.9 1.4l-2.9.6c-.7.1-1.3-.3-1.4-.9-.1-.6.3-1.2.9-1.4z"
    />
    <linearGradient
      id="SVGID_00000028303899607780331870000018149844711254988428_"
      gradientUnits="userSpaceOnUse"
      x1={1338.158}
      y1={1243.458}
      x2={1343.485}
      y2={1243.458}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000028303899607780331870000018149844711254988428_)",
      }}
      d="m1339.1 1242.6 2.9-.6c.6-.1 1.3.3 1.4.9s-.3 1.3-.9 1.4l-2.9.6c-.6.1-1.3-.3-1.4-.9s.3-1.3.9-1.4z"
    />
    <linearGradient
      id="SVGID_00000103970385794312234190000004249481809042327726_"
      gradientUnits="userSpaceOnUse"
      x1={1347.922}
      y1={1241.266}
      x2={1353.235}
      y2={1241.266}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000103970385794312234190000004249481809042327726_)",
      }}
      d="m1348.8 1240.4 2.9-.7c.6-.1 1.3.3 1.4.9s-.3 1.3-.9 1.4l-2.9.7c-.6.1-1.3-.3-1.4-.9-.1-.6.3-1.2.9-1.4z"
    />
    <linearGradient
      id="SVGID_00000147908875041035660230000006766324582016160390_"
      gradientUnits="userSpaceOnUse"
      x1={1357.658}
      y1={1238.948}
      x2={1362.955}
      y2={1238.948}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000147908875041035660230000006766324582016160390_)",
      }}
      d="m1358.6 1238.1 2.9-.7c.6-.2 1.3.2 1.4.9.2.6-.2 1.3-.9 1.4l-2.9.7c-.6.2-1.3-.2-1.4-.9-.2-.6.2-1.2.9-1.4z"
    />
    <linearGradient
      id="SVGID_00000124140466087975081560000010773525096948097957_"
      gradientUnits="userSpaceOnUse"
      x1={1367.363}
      y1={1236.509}
      x2={1372.645}
      y2={1236.509}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000124140466087975081560000010773525096948097957_)",
      }}
      d="m1368.3 1235.7 2.9-.7c.6-.2 1.3.2 1.4.9.2.6-.2 1.3-.9 1.4l-2.9.8c-.6.2-1.3-.2-1.4-.9s.2-1.3.9-1.5z"
    />
    <linearGradient
      id="SVGID_00000056402439625282703380000017161659524512624804_"
      gradientUnits="userSpaceOnUse"
      x1={1377.038}
      y1={1233.948}
      x2={1382.303}
      y2={1233.948}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000056402439625282703380000017161659524512624804_)",
      }}
      d="m1377.9 1233.2 2.9-.8c.6-.2 1.3.2 1.5.8.2.6-.2 1.3-.8 1.5l-2.9.8c-.6.2-1.3-.2-1.5-.8-.2-.7.2-1.3.8-1.5z"
    />
    <linearGradient
      id="SVGID_00000084524159498786846440000001797709436189354900_"
      gradientUnits="userSpaceOnUse"
      x1={1386.68}
      y1={1231.268}
      x2={1391.929}
      y2={1231.268}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000084524159498786846440000001797709436189354900_)",
      }}
      d="m1387.5 1230.5 2.9-.8c.6-.2 1.3.2 1.5.8.2.6-.2 1.3-.8 1.5l-2.9.8c-.6.2-1.3-.2-1.5-.8-.2-.6.2-1.3.8-1.5z"
    />
    <linearGradient
      id="SVGID_00000105389463898115058220000013337142331881184396_"
      gradientUnits="userSpaceOnUse"
      x1={1396.29}
      y1={1228.471}
      x2={1401.522}
      y2={1228.471}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000105389463898115058220000013337142331881184396_)",
      }}
      d="m1397.1 1227.8 2.9-.9c.6-.2 1.3.2 1.5.8.2.6-.2 1.3-.8 1.5l-2.9.9c-.6.2-1.3-.2-1.5-.8-.1-.7.2-1.3.8-1.5z"
    />
    <linearGradient
      id="SVGID_00000172421072121908746970000001195225531419046572_"
      gradientUnits="userSpaceOnUse"
      x1={1405.865}
      y1={1225.559}
      x2={1411.08}
      y2={1225.559}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000172421072121908746970000001195225531419046572_)",
      }}
      d="m1406.7 1224.9 2.9-.9c.6-.2 1.3.2 1.5.8.2.6-.2 1.3-.8 1.5l-2.9.9c-.6.2-1.3-.2-1.5-.8-.2-.7.2-1.3.8-1.5z"
    />
    <linearGradient
      id="SVGID_00000143588695218057802750000011974039493399883707_"
      gradientUnits="userSpaceOnUse"
      x1={1415.404}
      y1={1222.532}
      x2={1420.602}
      y2={1222.532}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000143588695218057802750000011974039493399883707_)",
      }}
      d="m1416.2 1221.9 2.9-.9c.6-.2 1.3.1 1.5.8.2.6-.1 1.3-.8 1.5l-2.9.9c-.6.2-1.3-.1-1.5-.8-.1-.7.2-1.3.8-1.5z"
    />
    <linearGradient
      id="SVGID_00000049195793899598752900000001543393748576870326_"
      gradientUnits="userSpaceOnUse"
      x1={1424.908}
      y1={1219.392}
      x2={1430.088}
      y2={1219.392}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049195793899598752900000001543393748576870326_)",
      }}
      d="m1425.7 1218.8 2.8-1c.6-.2 1.3.1 1.5.7.2.6-.1 1.3-.7 1.5l-2.8 1c-.6.2-1.3-.1-1.5-.7-.2-.7.1-1.3.7-1.5z"
    />
    <linearGradient
      id="SVGID_00000018205649499266862700000008610462372601073837_"
      gradientUnits="userSpaceOnUse"
      x1={1434.373}
      y1={1216.141}
      x2={1439.535}
      y2={1216.141}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000018205649499266862700000008610462372601073837_)",
      }}
      d="m1435.2 1215.5 2.8-1c.6-.2 1.3.1 1.5.7.2.6-.1 1.3-.7 1.5l-2.8 1c-.6.2-1.3-.1-1.5-.7-.3-.6 0-1.3.7-1.5z"
    />
    <linearGradient
      id="SVGID_00000135655976079322128200000004088350741507012998_"
      gradientUnits="userSpaceOnUse"
      x1={1443.8}
      y1={1212.779}
      x2={1448.944}
      y2={1212.779}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000135655976079322128200000004088350741507012998_)",
      }}
      d="m1444.6 1212.2 2.8-1c.6-.2 1.3.1 1.5.7.2.6-.1 1.3-.7 1.5l-2.8 1c-.6.2-1.3-.1-1.5-.7-.2-.6.1-1.3.7-1.5z"
    />
    <linearGradient
      id="SVGID_00000159455516964902189710000000461979079924965292_"
      gradientUnits="userSpaceOnUse"
      x1={1453.188}
      y1={1209.307}
      x2={1458.313}
      y2={1209.307}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000159455516964902189710000000461979079924965292_)",
      }}
      d="m1453.9 1208.8 2.8-1.1c.6-.2 1.3.1 1.5.7.2.6-.1 1.3-.7 1.5l-2.8 1.1c-.6.2-1.3-.1-1.5-.7-.2-.7.1-1.3.7-1.5z"
    />
    <linearGradient
      id="SVGID_00000062892495859192075640000003587024530553477561_"
      gradientUnits="userSpaceOnUse"
      x1={1462.534}
      y1={1205.726}
      x2={1467.64}
      y2={1205.726}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062892495859192075640000003587024530553477561_)",
      }}
      d="m1463.3 1205.2 2.8-1.1c.6-.2 1.3.1 1.5.7.2.6-.1 1.3-.7 1.5l-2.8 1.1c-.6.2-1.3-.1-1.5-.7s.1-1.3.7-1.5z"
    />
    <linearGradient
      id="SVGID_00000013164881603934056290000016621521592437199006_"
      gradientUnits="userSpaceOnUse"
      x1={1471.839}
      y1={1202.037}
      x2={1476.926}
      y2={1202.037}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000013164881603934056290000016621521592437199006_)",
      }}
      d="m1472.6 1201.5 2.8-1.1c.6-.2 1.3 0 1.5.6.2.6 0 1.3-.6 1.5l-2.8 1.1c-.6.2-1.3 0-1.5-.6-.3-.6 0-1.2.6-1.5z"
    />
    <linearGradient
      id="SVGID_00000163795769491176587150000014922314755812231041_"
      gradientUnits="userSpaceOnUse"
      x1={1481.1}
      y1={1198.24}
      x2={1486.168}
      y2={1198.24}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000163795769491176587150000014922314755812231041_)",
      }}
      d="m1481.8 1197.8 2.8-1.2c.6-.2 1.3 0 1.5.6.2.6 0 1.3-.6 1.5l-2.8 1.2c-.6.2-1.3 0-1.5-.6-.3-.6 0-1.3.6-1.5z"
    />
    <linearGradient
      id="SVGID_00000005966575863704399130000013593427389191467698_"
      gradientUnits="userSpaceOnUse"
      x1={1490.318}
      y1={1194.341}
      x2={1495.367}
      y2={1194.341}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000005966575863704399130000013593427389191467698_)",
      }}
      d="m1491 1193.9 2.8-1.2c.6-.2 1.3 0 1.5.6.2.6 0 1.3-.6 1.5l-2.8 1.2c-.6.2-1.3 0-1.5-.6-.2-.6 0-1.3.6-1.5z"
    />
    <linearGradient
      id="SVGID_00000160153980029588829690000015109202229441852587_"
      gradientUnits="userSpaceOnUse"
      x1={1499.497}
      y1={1190.352}
      x2={1504.528}
      y2={1190.352}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160153980029588829690000015109202229441852587_)",
      }}
      d="m1500.2 1189.9 2.7-1.2c.6-.3 1.3 0 1.5.6s0 1.3-.6 1.5l-2.7 1.2c-.6.3-1.3 0-1.5-.6-.3-.6 0-1.2.6-1.5z"
    />
    <linearGradient
      id="SVGID_00000026132880527361377220000000287328500451839137_"
      gradientUnits="userSpaceOnUse"
      x1={1508.638}
      y1={1186.277}
      x2={1513.651}
      y2={1186.277}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000026132880527361377220000000287328500451839137_)",
      }}
      d="m1509.3 1185.9 2.7-1.2c.6-.3 1.2 0 1.5.6.3.6 0 1.2-.6 1.5l-2.7 1.2c-.6.3-1.2 0-1.5-.6-.2-.6 0-1.3.6-1.5z"
    />
    <linearGradient
      id="SVGID_00000155133182374878916710000012527155870429985685_"
      gradientUnits="userSpaceOnUse"
      x1={1517.74}
      y1={1182.117}
      x2={1522.731}
      y2={1182.117}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000155133182374878916710000012527155870429985685_)",
      }}
      d="m1518.4 1181.7 2.7-1.3c.6-.3 1.2 0 1.5.6.3.6 0 1.2-.6 1.5l-2.7 1.3c-.6.3-1.2 0-1.5-.6-.2-.5 0-1.2.6-1.5z"
    />
    <linearGradient
      id="SVGID_00000003066495076506702030000003526137570202824596_"
      gradientUnits="userSpaceOnUse"
      x1={1526.8}
      y1={1177.874}
      x2={1531.776}
      y2={1177.874}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000003066495076506702030000003526137570202824596_)",
      }}
      d="m1527.4 1177.5 2.7-1.3c.6-.3 1.2 0 1.5.5.3.6 0 1.2-.5 1.5l-2.7 1.3c-.6.3-1.2 0-1.5-.5-.3-.6 0-1.2.5-1.5z"
    />
    <linearGradient
      id="SVGID_00000072260093932077764780000008591551859274504340_"
      gradientUnits="userSpaceOnUse"
      x1={1535.828}
      y1={1173.544}
      x2={1540.789}
      y2={1173.544}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000072260093932077764780000008591551859274504340_)",
      }}
      d="m1536.5 1173.2 2.7-1.3c.6-.3 1.2 0 1.5.5.3.6 0 1.2-.5 1.5l-2.7 1.3c-.6.3-1.2 0-1.5-.5-.3-.6-.1-1.2.5-1.5z"
    />
    <linearGradient
      id="SVGID_00000014592889831129489780000015991106897777085369_"
      gradientUnits="userSpaceOnUse"
      x1={1544.816}
      y1={1169.133}
      x2={1549.755}
      y2={1169.133}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000014592889831129489780000015991106897777085369_)",
      }}
      d="m1545.4 1168.8 2.7-1.3c.6-.3 1.2 0 1.5.5s.1 1.2-.5 1.5l-2.7 1.3c-.6.3-1.2.1-1.5-.5-.2-.6 0-1.2.5-1.5z"
    />
    <linearGradient
      id="SVGID_00000036946249644727027870000009841456912198129075_"
      gradientUnits="userSpaceOnUse"
      x1={1553.759}
      y1={1164.642}
      x2={1558.68}
      y2={1164.642}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000036946249644727027870000009841456912198129075_)",
      }}
      d="m1554.4 1164.3 2.7-1.4c.6-.3 1.2-.1 1.5.5.3.6.1 1.2-.5 1.5l-2.7 1.4c-.6.3-1.2.1-1.5-.5-.3-.5-.1-1.2.5-1.5z"
    />
    <linearGradient
      id="SVGID_00000160887285842574692850000018388465546549027462_"
      gradientUnits="userSpaceOnUse"
      x1={1562.663}
      y1={1160.07}
      x2={1567.565}
      y2={1160.07}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000160887285842574692850000018388465546549027462_)",
      }}
      d="m1563.3 1159.8 2.7-1.4c.5-.3 1.2-.1 1.5.5.3.5.1 1.2-.5 1.5l-2.7 1.4c-.5.3-1.2.1-1.5-.5-.3-.6-.1-1.2.5-1.5z"
    />
    <linearGradient
      id="SVGID_00000132781806921631162010000016988110990468748186_"
      gradientUnits="userSpaceOnUse"
      x1={1571.524}
      y1={1155.418}
      x2={1576.407}
      y2={1155.418}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132781806921631162010000016988110990468748186_)",
      }}
      d="m1572.1 1155.1 2.6-1.4c.5-.3 1.2-.1 1.5.5.3.5.1 1.2-.5 1.5l-2.6 1.4c-.5.3-1.2.1-1.5-.5-.2-.5 0-1.2.5-1.5z"
    />
    <linearGradient
      id="SVGID_00000154411013801646500850000013017419588209669264_"
      gradientUnits="userSpaceOnUse"
      x1={1580.344}
      y1={1150.687}
      x2={1585.207}
      y2={1150.687}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000154411013801646500850000013017419588209669264_)",
      }}
      d="m1580.9 1150.4 2.6-1.4c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.6 1.4c-.5.3-1.2.1-1.5-.4-.3-.5-.1-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000011032841932038267680000008989307700870103435_"
      gradientUnits="userSpaceOnUse"
      x1={1589.121}
      y1={1145.877}
      x2={1593.965}
      y2={1145.877}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000011032841932038267680000008989307700870103435_)",
      }}
      d="m1589.7 1145.6 2.6-1.5c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.6 1.5c-.5.3-1.2.1-1.5-.4s-.1-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000158008491881492921120000018355652824931002776_"
      gradientUnits="userSpaceOnUse"
      x1={1597.854}
      y1={1140.987}
      x2={1602.678}
      y2={1140.987}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000158008491881492921120000018355652824931002776_)",
      }}
      d="m1598.4 1140.8 2.6-1.5c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.6 1.5c-.5.3-1.2.1-1.5-.4-.3-.6-.1-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000111162957310133756770000001877793513901470655_"
      gradientUnits="userSpaceOnUse"
      x1={1606.543}
      y1={1136.02}
      x2={1611.347}
      y2={1136.02}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000111162957310133756770000001877793513901470655_)",
      }}
      d="m1607.1 1135.8 2.6-1.5c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.6 1.5c-.5.3-1.2.1-1.5-.4-.3-.5-.1-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000141415193347933062070000000279315355897467068_"
      gradientUnits="userSpaceOnUse"
      x1={1615.186}
      y1={1130.974}
      x2={1619.971}
      y2={1130.974}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000141415193347933062070000000279315355897467068_)",
      }}
      d="m1615.7 1130.8 2.6-1.5c.5-.3 1.2-.1 1.5.4.3.5.1 1.2-.4 1.5l-2.6 1.5c-.5.3-1.2.1-1.5-.4-.3-.5-.1-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000028303363869923277210000013057006100038387874_"
      gradientUnits="userSpaceOnUse"
      x1={1623.784}
      y1={1125.85}
      x2={1628.548}
      y2={1125.85}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000028303363869923277210000013057006100038387874_)",
      }}
      d="m1624.3 1125.7 2.6-1.5c.5-.3 1.2-.1 1.5.4s.1 1.2-.4 1.5l-2.6 1.5c-.5.3-1.2.1-1.5-.4-.3-.5-.1-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000044865409693246145790000007625635755644758151_"
      gradientUnits="userSpaceOnUse"
      x1={1632.334}
      y1={1120.647}
      x2={1637.077}
      y2={1120.647}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044865409693246145790000007625635755644758151_)",
      }}
      d="m1632.9 1120.5 2.6-1.6c.5-.3 1.2-.2 1.5.4.3.5.2 1.2-.4 1.5l-2.6 1.6c-.5.3-1.2.2-1.5-.4-.3-.5-.2-1.2.4-1.5z"
    />
    <linearGradient
      id="SVGID_00000168097719519245944000000001611985012087259537_"
      gradientUnits="userSpaceOnUse"
      x1={1640.837}
      y1={1115.366}
      x2={1645.561}
      y2={1115.366}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168097719519245944000000001611985012087259537_)",
      }}
      d="m1641.3 1115.2 2.5-1.6c.5-.3 1.2-.2 1.5.3.3.5.2 1.2-.3 1.5l-2.5 1.6c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.1.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000144335408870768118910000011227281732169650344_"
      gradientUnits="userSpaceOnUse"
      x1={1649.292}
      y1={1110.006}
      x2={1653.993}
      y2={1110.006}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000144335408870768118910000011227281732169650344_)",
      }}
      d="m1649.8 1109.9 2.5-1.6c.5-.3 1.2-.2 1.5.3.3.5.2 1.2-.3 1.5l-2.5 1.6c-.5.3-1.2.2-1.5-.3-.4-.5-.2-1.2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000168807285267066608660000007323368899063058109_"
      gradientUnits="userSpaceOnUse"
      x1={1657.703}
      y1={1104.582}
      x2={1662.386}
      y2={1104.582}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000168807285267066608660000007323368899063058109_)",
      }}
      d="m1658.2 1104.5 2.5-1.6c.5-.3 1.2-.2 1.5.3.3.5.2 1.2-.3 1.5l-2.5 1.6c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000156548201704026767040000002764547000344556714_"
      gradientUnits="userSpaceOnUse"
      x1={1666.075}
      y1={1099.1}
      x2={1670.74}
      y2={1099.1}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000156548201704026767040000002764547000344556714_)",
      }}
      d="m1666.6 1099 2.5-1.7c.5-.3 1.2-.2 1.5.3s.2 1.2-.3 1.5l-2.5 1.7c-.5.3-1.2.2-1.5-.3-.4-.5-.2-1.1.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000175286649195244844960000009237381739156863626_"
      gradientUnits="userSpaceOnUse"
      x1={1674.409}
      y1={1093.559}
      x2={1679.056}
      y2={1093.559}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000175286649195244844960000009237381739156863626_)",
      }}
      d="m1674.9 1093.5 2.5-1.7c.5-.3 1.2-.2 1.5.3.3.5.2 1.2-.3 1.5l-2.5 1.7c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000049219034492815378900000005760396680913831312_"
      gradientUnits="userSpaceOnUse"
      x1={1682.704}
      y1={1087.959}
      x2={1687.332}
      y2={1087.959}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000049219034492815378900000005760396680913831312_)",
      }}
      d="m1683.2 1087.9 2.5-1.7c.5-.3 1.2-.2 1.5.3.3.5.2 1.2-.3 1.5l-2.5 1.7c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000008857186156129365930000012253111890947075240_"
      gradientUnits="userSpaceOnUse"
      x1={1690.958}
      y1={1082.301}
      x2={1695.568}
      y2={1082.301}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000008857186156129365930000012253111890947075240_)",
      }}
      d="m1691.4 1082.3 2.5-1.7c.5-.3 1.2-.2 1.5.3.3.5.2 1.2-.3 1.5l-2.5 1.7c-.5.3-1.2.2-1.5-.3-.3-.5-.2-1.2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000182512742968545093030000001169391264971781538_"
      gradientUnits="userSpaceOnUse"
      x1={1699.173}
      y1={1076.584}
      x2={1703.764}
      y2={1076.584}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000182512742968545093030000001169391264971781538_)",
      }}
      d="m1699.6 1076.6 2.5-1.7c.5-.3 1.1-.2 1.5.3.3.5.2 1.1-.3 1.5l-2.5 1.7c-.5.3-1.1.2-1.5-.3-.3-.5-.2-1.2.3-1.5z"
    />
    <linearGradient
      id="SVGID_00000080199118354653059770000009441291732729041536_"
      gradientUnits="userSpaceOnUse"
      x1={1707.346}
      y1={1070.808}
      x2={1711.918}
      y2={1070.808}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000080199118354653059770000009441291732729041536_)",
      }}
      d="m1707.8 1070.8 2.4-1.7c.5-.3 1.1-.2 1.5.2.3.5.2 1.1-.2 1.5l-2.4 1.7c-.5.3-1.1.2-1.5-.2-.4-.5-.3-1.1.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000057858265949690860900000006358415568893180068_"
      gradientUnits="userSpaceOnUse"
      x1={1715.478}
      y1={1064.974}
      x2={1720.031}
      y2={1064.974}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000057858265949690860900000006358415568893180068_)",
      }}
      d="m1715.9 1065 2.4-1.8c.5-.3 1.1-.2 1.5.2.3.5.2 1.1-.2 1.5l-2.4 1.8c-.5.3-1.1.2-1.5-.2-.4-.5-.3-1.2.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000084498518876598020770000012480950699930041763_"
      gradientUnits="userSpaceOnUse"
      x1={1723.568}
      y1={1059.081}
      x2={1728.101}
      y2={1059.081}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000084498518876598020770000012480950699930041763_)",
      }}
      d="m1724 1059.1 2.4-1.8c.5-.3 1.1-.2 1.5.2s.2 1.1-.2 1.5l-2.4 1.8c-.5.3-1.1.2-1.5-.2-.4-.5-.3-1.1.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000145737224763110516410000000250870468275852732_"
      gradientUnits="userSpaceOnUse"
      x1={1731.614}
      y1={1053.129}
      x2={1736.128}
      y2={1053.129}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000145737224763110516410000000250870468275852732_)",
      }}
      d="m1732 1053.2 2.4-1.8c.5-.3 1.1-.3 1.5.2.3.5.3 1.1-.2 1.5l-2.4 1.8c-.5.3-1.1.3-1.5-.2-.3-.5-.2-1.2.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000140710897590931214450000015606467211094236584_"
      gradientUnits="userSpaceOnUse"
      x1={1739.617}
      y1={1047.12}
      x2={1744.111}
      y2={1047.12}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000140710897590931214450000015606467211094236584_)",
      }}
      d="m1740 1047.2 2.4-1.8c.5-.3 1.1-.3 1.5.2.4.5.3 1.1-.2 1.5l-2.4 1.8c-.5.4-1.1.3-1.5-.2-.3-.5-.2-1.2.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000014603709381690115560000016475153812678751413_"
      gradientUnits="userSpaceOnUse"
      x1={1747.575}
      y1={1041.051}
      x2={1752.049}
      y2={1041.051}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000014603709381690115560000016475153812678751413_)",
      }}
      d="m1748 1041.1 2.4-1.8c.5-.4 1.1-.3 1.5.2.4.5.3 1.1-.2 1.5l-2.4 1.8c-.5.4-1.1.3-1.5-.2-.4-.5-.3-1.1.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000121995685433143735830000014685309237736188304_"
      gradientUnits="userSpaceOnUse"
      x1={1755.488}
      y1={1034.924}
      x2={1759.943}
      y2={1034.924}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121995685433143735830000014685309237736188304_)",
      }}
      d="m1755.9 1035 2.4-1.8c.5-.4 1.1-.3 1.5.2.4.5.3 1.1-.2 1.5l-2.4 1.8c-.5.4-1.1.3-1.5-.2-.3-.5-.3-1.1.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000004531159975358320300000009771382946780324279_"
      gradientUnits="userSpaceOnUse"
      x1={1763.356}
      y1={1028.739}
      x2={1767.791}
      y2={1028.739}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000004531159975358320300000009771382946780324279_)",
      }}
      d="m1763.8 1028.9 2.4-1.9c.5-.4 1.1-.3 1.5.2.4.5.3 1.1-.2 1.5l-2.3 1.9c-.5.4-1.1.3-1.5-.2-.5-.5-.4-1.2.1-1.5z"
    />
    <linearGradient
      id="SVGID_00000054223933735926548830000011991267815841162169_"
      gradientUnits="userSpaceOnUse"
      x1={1771.178}
      y1={1022.496}
      x2={1775.592}
      y2={1022.496}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#dae3fe",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#e9effd",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000054223933735926548830000011991267815841162169_)",
      }}
      d="m1771.6 1022.6 2.3-1.9c.4-.4 1.1-.3 1.5.2.4.4.3 1.1-.2 1.5l-2.3 1.9c-.4.4-1.1.3-1.5-.2-.4-.5-.3-1.1.2-1.5z"
    />
    <linearGradient
      id="SVGID_00000052824867797109064650000010204863116729805971_"
      gradientUnits="userSpaceOnUse"
      x1={567.024}
      y1={1340.53}
      x2={775.024}
      y2={968.53}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#fe7062",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#ff928e",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000052824867797109064650000010204863116729805971_)",
      }}
      d="M438.1 1116.7s-43.6 24.2-47.2 65c-3.6 40.9-.3 210.5 87.1 252.3 87.4 41.8 203.2 32.1 247.5 27.6 44.3-4.6 68.9-34.7 74.3-55.4 5.5-20.7 14.3-97.9-32.3-122.8-46.6-24.9-95.5-63.1-144.4-100.2-48.9-37.2-132.7-97.9-185-66.5z"
    />
    <linearGradient
      id="SVGID_00000090286671297502904500000008831813660541046196_"
      gradientUnits="userSpaceOnUse"
      x1={-8287.707}
      y1={1320.46}
      x2={-8245.048}
      y2={1365.016}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000090286671297502904500000008831813660541046196_)",
      }}
      d="M753.8 1297.4s-11.8.6-13.2 24.8c0 0 27.3 24.5 64.1 30.3 2.8.4-3.9-18.9-4.9-21.5-4.7-12.4-19.6-20.4-46-33.6z"
    />
    <linearGradient
      id="SVGID_00000026155537800934436530000000062911330893750186_"
      gradientUnits="userSpaceOnUse"
      x1={-8394.984}
      y1={1432.335}
      x2={-8350.567}
      y2={1265.03}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={0.773}
        style={{
          stopColor: "#4c4ef8",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000026155537800934436530000000062911330893750186_)",
      }}
      d="M621.3 1269h24.8s76.2-84.2 126.2-92.7c0 0 34.8 44.4-1.9 127.4-2.9 6.7-11.2 9.6-17.3 5.7-1.8-1.2-3.2-2.7-4-4.7l2.9-70.9s-65 56.9-76.3 67.8c-11.2 11.1-68.6 4.4-54.4-32.6z"
    />
    <linearGradient
      id="SVGID_00000179638656319127289090000006821971428760723617_"
      gradientUnits="userSpaceOnUse"
      x1={852.861}
      y1={1253.474}
      x2={842.861}
      y2={1342.474}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000179638656319127289090000006821971428760723617_)",
      }}
      d="M861.4 1445.7c-10.4-9.1-27-19.4-50.9-22.3l-8.1 5s5.2 7.6 14.6 15.7c8.7 5 22 11.9 33.1 13.3 10.8 1.4 12.4-5.1 11.3-11.7z"
    />
    <path
      className="st12"
      d="M799.9 1331.1c-6.4 2.1-9.2 11.2-25.5 5.2-15.7-5.8-27.4-13.3-33.5-17.6-.1 1.2-.2 2.4-.3 3.7 0 0 28.8 27.4 65.6 33.2 2.8.4 5-2.3 4-4.9-1.8-4.9-5-12-10.3-19.6zM869.2 1453.5c-2.1-2.3-4.7-5-7.8-7.8 1.1 6.6-.5 13.1-11.3 11.7-11.1-1.5-24.5-8.3-33.1-13.3 10.9 9.3 27.4 19.1 48.2 18.5 4.6-.2 7.1-5.6 4-9.1z"
    />
    <linearGradient
      id="SVGID_00000040543860008940257150000011698036282708020868_"
      gradientUnits="userSpaceOnUse"
      x1={666.516}
      y1={1394.41}
      x2={540.516}
      y2={1510.41}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000040543860008940257150000011698036282708020868_)",
      }}
      d="m622.2 1287 116.3 1.3s66.4 54.9 78.5 138.7c0 0 2 6.2-10 7.2 0 0-40.1-26.2-66.3-72.6-32.1-56.8-95.7-31.3-95.7-31.3-20.9-15.1-50.4-18.1-72.7-23.2l49.9-20.1z"
    />
    <linearGradient
      id="SVGID_00000162346236767419989740000004976980114854489735_"
      gradientUnits="userSpaceOnUse"
      x1={-8361.483}
      y1={1213.418}
      x2={-8416.265}
      y2={1278.563}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000162346236767419989740000004976980114854489735_)",
      }}
      d="M624.9 1193.3s12.5 62.7 73.9 87.6l21.8-2.6 5.1 8.2-51.2 1.6s-43.7-17.3-66.9-64.5c-.7-1.6-13.5-28 17.3-30.3z"
    />
    <linearGradient
      id="SVGID_00000116953914095963569610000011056333489732036799_"
      gradientUnits="userSpaceOnUse"
      x1={-8515.543}
      y1={1092.703}
      x2={-8427.772}
      y2={1400.632}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#4042e2",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#4f52ff",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000116953914095963569610000011056333489732036799_)",
      }}
      d="M631.7 1285.9s-14.2-38.7-17.3-76.3c0 0 10.4-9 16.9-12.8 2.1-1.3 2.9-3.9 1.8-6.1-4.8-9.9-33.7-48.8-35.9-49.4-11.8-2.9-60.1-25.9-94.1 20.6-14.6 20 2.9 81.5 69.2 145.2l13.7 2.6 45.7-23.8z"
    />
    <linearGradient
      id="SVGID_00000127747072956815909770000006543749271038220181_"
      gradientUnits="userSpaceOnUse"
      x1={710.012}
      y1={1136.571}
      x2={677.011}
      y2={1192.572}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000127747072956815909770000006543749271038220181_)",
      }}
      d="M576.8 1218.1s39.6 46.8 90.1 53.7c0 0 13.1-11.9 22.8-7.7 9.7 4.3 23 23 23 23h-64.9s-61.4-2.2-92.1-39.4c2.5-13 9.9-20.7 21.1-29.6z"
    />
    <linearGradient
      id="SVGID_00000044157686222061409430000008693214389281137549_"
      gradientUnits="userSpaceOnUse"
      x1={587.824}
      y1={1063.712}
      x2={547.824}
      y2={1177.712}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000044157686222061409430000008693214389281137549_)",
      }}
      d="m553.7 1108.5-8.7 28.9c-.4 1.3.1 2.8 1.2 3.5 4.2 2.9 15.1 8.5 30 3 1.7-.6 2.9-2.2 3-4l2.1-25.1-27.6-6.3z"
    />
    <linearGradient
      id="SVGID_00000093873730400962102890000013677310296957492153_"
      gradientUnits="userSpaceOnUse"
      x1={-8442.208}
      y1={492.673}
      x2={-8447.208}
      y2={577.673}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000093873730400962102890000013677310296957492153_)",
      }}
      d="M604.4 1085.1s-4.3 29.9-15.7 39.1c-11.5 9.2-33.9 2.3-41.4-20.3l15.1-38.6 42 19.8z"
    />
    <linearGradient
      id="SVGID_00000137091533596165607290000005869544535401975714_"
      gradientUnits="userSpaceOnUse"
      x1={-8486.874}
      y1={1009.225}
      x2={-8470.346}
      y2={1103.498}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000137091533596165607290000005869544535401975714_)",
      }}
      d="M560.6 1090.3c.9.3 1.8-.3 1.9-1.2.4-2.8 1.5-8.2 3.5-12 0 0-1.1-3.9 9.9 2s27.6 14.6 37.3 9.5c9.5-5.1 19.1-30.5-6-25.8-1 .2-1.8-.6-1.8-1.6.3-4.2-.1-13.8-9.9-16.9-9.1-2.9-14.1 1.2-16.2 3.7-.6.7-1.7.7-2.3 0-2.7-3.6-10.2-11.2-21.1-6.3-9 4-10.4 9.5-10.2 13 0 1.1-1.1 1.9-2.1 1.4-2.8-1.3-7.2-1.9-11.4 3.4-5.9 7.4 2.5 13.7 5 15.4.4.3.7.7.7 1.2 0 3.8.6 20.5 9 29.9.7.8 2.1.6 2.5-.4l6.4-15.3c.3-.7 1.1-1.1 1.8-.8l3 .8z"
    />
    <linearGradient
      id="SVGID_00000089575378140282203380000009409829499070511765_"
      gradientUnits="userSpaceOnUse"
      x1={-8463.503}
      y1={491.42}
      x2={-8468.503}
      y2={576.42}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#ff928e",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#feb3b1",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000089575378140282203380000009409829499070511765_)",
      }}
      d="M560.7 1093.5s-3.9-16-9.9-10.8c-6 5.2 1.6 16.6 8.4 18.8l1.5-8z"
    />
    <linearGradient
      id="SVGID_00000121991528711193881000000000130250066923827124_"
      gradientUnits="userSpaceOnUse"
      x1={-8343.936}
      y1={1238.8}
      x2={-8260.613}
      y2={1238.8}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000121991528711193881000000000130250066923827124_)",
      }}
      d="m709.5 1290.8 29.2-97.2c1.2-4 4.7-6.8 8.8-7.1l39.4-2.7c4-.3 7 3.6 5.6 7.4l-32.6 92.8c-1 3-3.7 5.1-6.9 5.4l-38.8 4.3-4.7-2.9z"
    />
    <path
      className="st12"
      d="M763.2 1226.5c-2.2 4.4-5.9 7-8.4 5.7-2.5-1.2-2.7-5.8-.5-10.2 2.2-4.4 5.9-7 8.4-5.7 2.5 1.3 2.7 5.8.5 10.2z"
    />
    <linearGradient
      id="SVGID_00000132810996243927877380000000139861701571969689_"
      gradientUnits="userSpaceOnUse"
      x1={-8333.824}
      y1={1275.223}
      x2={-8400.449}
      y2={1293.484}
      gradientTransform="translate(9053.415)"
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132810996243927877380000000139861701571969689_)",
      }}
      d="M714.2 1293.8h-.2l-82.6-4.2c-2-.1-3.6-1.8-3.5-3.9.1-2 1.8-3.6 3.9-3.5l82.6 4.2c2 .1 3.6 1.8 3.5 3.9-.1 2-1.7 3.5-3.7 3.5z"
    />
    <linearGradient
      id="SVGID_00000132781740468140301560000000807953082915855031_"
      gradientUnits="userSpaceOnUse"
      x1={708.218}
      y1={919.113}
      x2={658.218}
      y2={1058.113}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000132781740468140301560000000807953082915855031_)",
      }}
      d="M614.4 1210.1c-.3 0-.5-.2-.5-.5.1-17.3-6.6-40.2-6.7-40.4-.1-.3.1-.5.3-.6.3-.1.5.1.6.3.1.2 6.8 23.3 6.7 40.7.1.3-.2.5-.4.5z"
    />
    <linearGradient
      id="SVGID_00000054260784854943843430000003876948564955408036_"
      gradientUnits="userSpaceOnUse"
      x1={670.132}
      y1={905.412}
      x2={620.132}
      y2={1044.412}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000054260784854943843430000003876948564955408036_)",
      }}
      d="M576.8 1218.6c-.1 0-.3-.1-.4-.2-.2-.2-18.2-23.2-24.4-38.9-.1-.3 0-.5.3-.6.3-.1.5 0 .6.3 6.1 15.6 24.1 38.4 24.3 38.6.2.2.1.5-.1.7-.1.1-.2.1-.3.1z"
    />
    <linearGradient
      id="SVGID_00000062183398753546372560000003486663709147906206_"
      gradientUnits="userSpaceOnUse"
      x1={650.772}
      y1={898.45}
      x2={600.771}
      y2={1037.45}
    >
      <stop
        offset={0}
        style={{
          stopColor: "#09005d",
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: "#1a0f91",
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: "url(#SVGID_00000062183398753546372560000003486663709147906206_)",
      }}
      d="m551.3 1253.7-.4-.2c-26.1-11.2-42.2-42.3-42.4-42.6-.1-.2 0-.5.2-.7.2-.1.5 0 .7.2.2.3 16 30.8 41.5 42l2.8-3.9c.2-.2.5-.3.7-.1.2.2.3.5.1.7l-3.2 4.6z"
    />
  </svg>
);

export const Vector2 = ({ color, link }) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x={0}
      y={0}
      viewBox="0 0 345.9 226.2"
      style={{
        enableBackground: "new 0 0 345.9 226.2",
      }}
      xmlSpace="preserve"
    >
      <style>
        {
          ".st0{opacity:.7}.st1{fill:#662483}.st3{fill:none;stroke:#e6007e;stroke-width:3;stroke-linecap:round;stroke-miterlimit:10}"
        }
      </style>
      <g className="st0">
        <path
          className="st1"
          d="M236 113.1c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.6 2.6 2.5zM236.2 127.8c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c0 1.4 1.2 2.5 2.6 2.5zM236.5 142.4c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.1 2.5 2.6 2.5zM247.5 112.9c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.6 2.6 2.5zM247.8 127.6c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM248 142.2c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5zM259.1 112.7c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c.1 1.4 1.2 2.6 2.6 2.5zM259.4 127.4c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c0 1.4 1.2 2.5 2.6 2.5zM259.6 142c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5zM270.7 112.5c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.5 1.2 2.6 2.6 2.5zM270.9 127.2c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5zM271.2 141.8c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM282.3 112.4c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM282.5 127c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5zM282.8 141.6c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM293.9 112.2c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM294.1 126.8c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6 1.2 2.5 2.6 2.5zM294.4 141.4c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM305.4 112c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6 1.2 2.5 2.6 2.5zM305.7 126.6c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM305.9 141.2c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5z"
        />
      </g>
      <g className="st0">
        <path
          className="st1"
          d="M270.4 71.9c1.4 0 2.5-1.2 2.5-2.6s-1.2-2.5-2.6-2.5-2.5 1.2-2.5 2.6c.1 1.4 1.2 2.5 2.6 2.5zM270.7 86.5c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM270.9 101.1c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.6 2.6 2.5zM282 71.7c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5zM282.3 86.3c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM282.5 100.9c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.6 2.6 2.5zM293.6 71.5c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM293.8 86.1c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c.1 1.4 1.2 2.5 2.6 2.5zM294.1 100.7c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.6 2.6 2.5zM305.2 71.3c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM305.4 85.9c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c.1 1.4 1.2 2.5 2.6 2.5zM305.7 100.5c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.5 1.2 2.6 2.6 2.5zM316.8 71.1c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c0 1.4 1.2 2.5 2.6 2.5zM317 85.7c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM317.3 100.4c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.1 2.5 2.6 2.5zM328.3 70.9c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6.1 1.4 1.2 2.5 2.6 2.5zM328.6 85.5c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6 0 1.4 1.2 2.5 2.6 2.5zM328.8 100.2c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6 1.2 2.5 2.6 2.5zM339.9 70.7c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5-1.4 0-2.5 1.2-2.5 2.6s1.2 2.5 2.6 2.5zM340.2 85.3c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6 1.2 2.5 2.6 2.5zM340.4 100c1.4 0 2.5-1.2 2.5-2.6 0-1.4-1.2-2.5-2.6-2.5s-2.5 1.2-2.5 2.6c.1 1.4 1.2 2.5 2.6 2.5z"
        />
      </g>
      <path
        d="m157 35.5.7-23.9c.1-2.8-2.1-5.1-4.9-5.2l-23.9-.7c-2.8-.1-5.1 2.1-5.2 4.9l-.7 24c-.1 2.8 2.1 5.1 4.9 5.2l23.9.7c2.8.1 5.2-2.2 5.2-5z"
        style={{
          fill: "none",
          stroke: "#662483",
          strokeWidth: 2.424,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        className="st3"
        d="m260 197.3-61.4-1.7M252 189l-64.8-1.9M90.9 85.2l-61.4-1.7M82.9 76.9 18.1 75"
      />
      <circle
        transform="rotate(-43.383 254.87 122.856)"
        cx={254.9}
        cy={122.9}
        style={{
          fill: "none",
          stroke: "#e6007e",
          strokeWidth: 6.1954,
          strokeMiterlimit: 10,
        }}
        r={16.7}
      />
      <defs>
        <path
          id="SVGID_P_"
          d="m246.6 198.3.6-153.3c0-11.7-9.4-21.3-21.1-21.4l-153-1.4c-11.8-.2-21.4 9.3-21.5 21.1l-1.4 152.3c-.1 11.7 9.3 21.3 21 21.5l153.9 2.4c11.8.2 21.5-9.3 21.5-21.2z"
        />
      </defs>
      <clipPath id="SVGID_00000088846423480998806340000017916214965200789642_">
        <use
          xlinkHref="#SVGID_P_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <g
        style={{
          clipPath:
            "url(#SVGID_00000088846423480998806340000017916214965200789642_)",
        }}
      >
        <image
          style={{
            overflow: "visible",
          }}
          width={1200}
          height={800}
          xlinkHref={link}
          transform="matrix(-.2548 0 0 .2548 305.659 18.405)"
        />
      </g>
      <defs>
        <path
          id="SVGID_00000102519842394880378830000017105729481573862802_"
          d="M81.3 81.3 18.1 98.7c-2.6.7-3 4.2-.6 5.4L56 124.9c1.4.7 3 .3 3.9-1l24.7-38.2c1.5-2.2-.7-5.1-3.3-4.4z"
        />
      </defs>
      <clipPath id="SVGID_00000077326692053663709680000013109744069255425944_">
        <use
          xlinkHref="#SVGID_00000102519842394880378830000017105729481573862802_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <path
        style={{
          clipPath:
            "url(#SVGID_00000077326692053663709680000013109744069255425944_)",
          fill: "none",
          stroke: "#662483",
          strokeWidth: 1.094,
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
        d="m54.8 48.7 54.8 58M51.7 51.6l54.8 58M48.6 54.6l54.8 57.9M45.5 57.5l54.8 58M42.4 60.4l54.8 58M39.3 63.4l54.8 57.9M36.2 66.3l54.8 58M33.1 69.2l54.8 58M30 72.2l54.8 57.9M26.9 75.1l54.8 58M23.8 78l54.8 58M20.7 81l54.8 57.9M17.6 83.9l54.8 57.9M14.5 86.8l54.8 58M11.4 89.7l54.8 58M8.3 92.7l54.8 57.9M5.2 95.6l54.8 58"
      />
      <path
        d="M237.3 32.2c2 2.2 5.4 2.3 7.6.2 2.2-2 2.3-5.4.2-7.6-2-2.2-5.4-2.3-7.6-.2-2.2 2-2.3 5.4-.2 7.6z"
        style={{
          fill: "none",
          stroke: "#e6007e",
          strokeWidth: 2,
          strokeMiterlimit: 10,
        }}
      />
      <circle
        transform="rotate(-88.114 22.286 177.966) scale(1.00004)"
        cx={22.3}
        cy={178}
        style={{
          fill: "none",
          stroke: "#662483",
          strokeWidth: 2,
          strokeMiterlimit: 10,
        }}
        r={7}
      />
    </svg>
  );
};
export default importSVG;
