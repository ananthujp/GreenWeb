import * as React from "react"
import {motion} from "framer-motion"
function importSVG() {
  return (
    <div>
      
    </div>
  )
}
const animPath={initial:{pathLength:0},
                    animate:{pathLength:1,transition: { duration: 1.5 , delay: 0.5,staggerChildren: 0.5}},
                    exit:{pathLength:0,transition: { duration: 1.5}}} 
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
                    )
                    
export const GIcon=()=>{return(
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
)}
export const TwitterIcon=()=>{return(
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
        
      )}
export const InstaIcon=()=>{
          return(<svg
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
          </svg>)
          }
export const FbIcon=()=>{
          return(<svg
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
          </svg>)}
export const AboutSVG=()=> {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 350" >
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
          exit="exit" className="prefix__st3" d="M376.6 44.1h2.2v69.7h-2.2z" />
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
          exit="exit" className="prefix__st3" d="M256.7 44.1h2.2v69.7h-2.2z" />
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
          exit="exit" className="prefix__st3" d="M135.9 44.1h2.2v69.7h-2.2z" />
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
          exit="exit" className="prefix__st5" d="M321.3 309.1H388v10.8h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st15" d="M321.3 306.9H388v4.3h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st5" d="M321.3 298.3H388v10.8h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st15" d="M321.3 296.2H388v4.3h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st5" d="M321.3 287.6H388v10.8h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st15" d="M321.3 285.4H388v4.3h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st5" d="M321.3 276.8H388v10.8h-66.7z" />
            <motion.path
          variants={animPath}
          initial="initial"
          animate="animate"
          exit="exit" className="prefix__st15" d="M321.3 274.7H388v4.3h-66.7z" />
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
  )
}
export const  FeedbackSVG=()=> {
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
          exit="exit" className="prefix__st1" d="M67.5 438.7h582.6" />
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
          exit="exit" className="prefix__st1" d="M329.3 449.8h207.3M417.8 455.7h110" />
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
          exit="exit" id="prefix__SVGID_1_" d="M67.1 206.8h359.5v232.7H67.1z" />
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
          exit="exit" className="prefix__st4" d="M245.2 323.7v61.2l-51.3-61.2z" />
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
    )
  }
export const  SocialSVG=()=>  {
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
  )
}
export const  BlogSVG=()=>  {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 616.39 400.09"
    >
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
          exit="exit" className="prefix__st5" d="M475.62 126.49l8.53 6.1-8.53-.46z" />
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
          exit="exit" className="prefix__st20" d="M222.64 131.62v30.35h30.34z" />
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
  )
}

export default importSVG


