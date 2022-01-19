import { RewindIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { animH1, animH2, animMainDiv } from "./Animations";
import { Vector1, Vector2 } from "./vectors/importSVG";
function Campaigns() {
  const svgColor = "#8B5Cf6";
  const logoImg =
    "https://drive.google.com/uc?export=view&id=1YzjIiJSPt-oi3dpoCR3K3aAd07KwOGf9";
  const [sec1, setSec1] = useState(false);
  const [sec2, setSec2] = useState(false);
  const [sec3, setSec3] = useState(false);
  return (
    <div className="bg-purple-900">
      <motion.div
        className="bg-purple-900 flex flex-col w-full  overflow-hidden"
        variants={animMainDiv}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <motion.h1
          variants={animH1}
          initial="initial"
          animate="animate"
          exit="exit"
          className={
            "font-beb mt-20  text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-300 mx-auto lg:text-8xl md:text-6xl text-6xl"
          }
        >
          ON GOING
        </motion.h1>
        <motion.h1
          variants={animH2}
          initial="initial"
          animate="animate"
          exit="exit"
          className={
            "font-beb   text-transparent bg-clip-text bg-gradient-to-br from-purple-500 to-pink-300  mx-auto lg:text-6xl md:text-4xl text-2xl"
          }
        >
          Campaigns
        </motion.h1>
        <div
        //animate={{ rotate: 180 }}
        //style={{ originX: 0 ,originY: -1.5,originZ:0 }}
        //transition={{ repeat: Infinity, duration: 2 }}
        >
          <motion.svg
            animate={{ rotate: [0, 90, 0] }}
            style={{ originX: 0, originY: 0, originZ: 0 }}
            transition={{ repeat: Infinity, duration: 8 }}
            id="Layer_1"
            className="relative ml-12 top w-6"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.47 29.47"
          >
            <defs></defs>
            <polygon
              fill={svgColor}
              points="23.76 0 0 19.96 29.46 29.46 23.76 0"
            />
          </motion.svg>

          <motion.svg
            className="mx-auto md:w-1/2 w-4/5 mt-6"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            enableBackground="new 0 0 436.5 277.6"
            version="1.1"
            viewBox="0 0 436.5 277.6"
            xmlSpace="preserve"
          >
            <motion.path
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.6 },
              }}
              exit={{ opacity: 0 }}
              fill={svgColor}
              d="M124.8 32.1c.3 2 1.2 3.8 2.5 5.3 1.4 1.5 6.5 5.5 8.8 6.9 12.1 7.4 29.8 19.4 68.1 22.4 60.3 4.8 110.3-28.5 110.3-28.5s25.4-13.7 1.1-24.9-89-16.6-150.5-5.6c-42 7.6-40.3 24.4-40.3 24.4zM108.6 36.4s9.3.1 11.7-5.7c1.4-3.5-2.4-6.1-6.1-7.6-.8-.3-1.7-.6-2.3-.9-1.9-.6-4-.7-6-.3-3 .5-7.4 1.7-9.2 5.2-2.8 5.5 8.9 9.3 11.9 9.3zM332.2 195.5l48.1-31s64.1-53.3 50.6-13.2-48.7 81.5-121.8 106.7c-73.1 25.2-40.2-25.7-40.2-25.7s35.9-31.1 63.3-36.8z"
            ></motion.path>
            <defs>
              <path
                id="SVGID_1_"
                d="M25.8 84.9c-5.1 15.8-4.9 33.1.6 48.8 11.4 33 43.3 105.1 109.8 129.5 87.4 32.1 190 0 228.8-43.9s71.5-109.7 39.3-150.5c-19.7-25-48.3-25.1-67.6-21.5-9 1.7-31.6 8.5-40.1 12-13.4 5.5-44.4 20.3-93.4 19.8-4.8 0-11.2-1.3-17.3-2.8-10.6-2.5-21-6.3-30.9-11.3-6.8-3.4-15.8-7.8-24.8-11.7-21.6-9.6-46.3-16.6-82.4 3.2-11.5 6.5-18.4 17.2-22 28.4z"
              ></path>
            </defs>
            <clipPath id="SVGID_2_">
              <use overflow="visible" xlinkHref="#SVGID_1_"></use>
            </clipPath>
            <motion.g
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: { duration: 0.2, delay: 0.8 },
              }}
              exit={{ opacity: 0 }}
              clipPath="url(#SVGID_2_)"
            >
              <image
                width="2000"
                height="2000"
                overflow="visible"
                transform="translate(-75.721 -128.407) scale(.2956)"
                xlinkHref={logoImg}
                className="filter"
              ></image>
            </motion.g>
            <motion.circle
              initial={{ opacity: 0 }}
              animate={{
                opacity: 0.2,
                transition: { duration: 1.2, delay: 1.0 },
              }}
              exit={{ opacity: 0 }}
              cx="43.2"
              cy="181.5"
              r="40.2"
              fill={svgColor}
            ></motion.circle>
          </motion.svg>
        </div>

        <motion.svg
          animate={{ rotate: [0, -180, 0] }}
          style={{ originX: 0, originY: 0, originZ: 0 }}
          transition={{ repeat: Infinity, duration: 12 }}
          id="Layer_1"
          className="relative ml-12 top w-6"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 29.47 29.47"
        >
          <defs></defs>
          <polygon
            fill={svgColor}
            points="23.76 0 0 19.96 29.46 29.46 23.76 0"
          />
        </motion.svg>

        <div className="mt-4 flex flex-col w-full bg-white ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2, delay: 0.6 } }}
            exit={{ opacity: 0 }}
            className="md:w-1/2 w-5/7 my-4 mx-auto font-treb text-sm text-purple-400"
          >
            <div className="flex flex-col w-4/5 mx-auto">
              <h1 className="font-treb text-purple-700  font-semibold text-left text-3xl">
                Menstrual Sustainability
              </h1>
              <h1 className="font-treb text-purple-400  font-semibold text-left text-xl">
                Menstrual Sustainability
              </h1>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-between  my-2">
              <div className="text-center w-3/5 md:-ml-8 items-center justify-center flex flex-row">
                <Vector2
                  className=""
                  color="#5f3b8f"
                  link="https://mltmwfntn9iv.i.optimole.com/M1H_c3A.LZVM~1deda/w:auto/h:auto/q:55/https://anahatngo.org/wp-content/uploads/2021/01/DSC_0058-scaled.jpg"
                />
              </div>
              <div className="md:w-2/5 w-4/5 flex flex-col mx-2 md:mt-0 mt-4 justify-center text-left">
                <h1 className="text-justify text-purple-800">
                  This initiative began with a survey among the female students
                  of IIT Gandhinagar, the majority of whom reported using
                  plastic-based period products. Menstruating members who
                  haven't taken the survey are encouraged to do so. This survey
                  helps you understand why plastic-based menstrual products are
                  a huge issue and introduce you to the many sustainable options
                  in the market
                </h1>
                <h1 className="text-left mt-2">Contact : </h1>
              </div>
            </div>
          </motion.div>
          {sec1 ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0 }}
              className="md:w-1/2 w-4/5 text-sm font-treb text-purple-800  text-justify flex justify-center items-center mx-auto"
            >
              This initiative began with a survey among the female students of
              IIT Gandhinagar, the majority of whom reported using plastic-based
              period products. Menstruating members who haven't taken the survey
              are encouraged to do so. This survey helps you understand why
              plastic-based menstrual products are a huge issue and introduce
              you to the many sustainable options in the market
            </motion.div>
          ) : (
            <></>
          )}
          <div
            onClick={() => setSec1(!sec1)}
            className="flex flex-row cursor-pointer text-sm mt-2 text-rose-600
            hover:text-rose-400 mx-auto text-center mb-2 bg-purple-100 transition-all py-1 px-2 rounded-full"
          >
            {" "}
            See {sec1 ? "less" : "more"}
            <ChevronDownIcon
              className={"w-5 ml-1 transform " + (sec1 ? "rotate-180" : "")}
            />
          </div>
        </div>

        {/* Second */}

        <div className="mt-4 flex flex-col w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2, delay: 0.6 } }}
            exit={{ opacity: 0 }}
            className="md:w-1/2 w-5/7 my-4 mx-auto font-treb text-sm text-purple-400"
          >
            <div className="flex flex-col w-4/5 mx-auto">
              <h1 className="font-treb text-white  font-semibold text-left text-3xl">
                Slow Fashion Drive
              </h1>
              <h1 className="font-treb text-purple-400  font-semibold text-left text-xl">
                Repurposing Campaign
              </h1>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-between  my-2">
              <div className="md:w-2/5 w-4/5 flex flex-col mx-2 md:mt-0 mt-4 justify-center text-left">
                <h1 className="text-justify text-white">
                  This initiative began with a survey among the female students
                  of IIT Gandhinagar, the majority of whom reported using
                  plastic-based period products. Menstruating members who
                  haven't taken the survey are encouraged to do so. This survey
                  helps you understand why plastic-based menstrual products are
                  a huge issue and introduce you to the many sustainable options
                  in the market
                </h1>
                <h1 className="text-left mt-2">Contact : </h1>
              </div>
              <div className="text-center w-3/5 md:ml-8 items-center justify-center flex flex-row">
                <Vector1
                  className=""
                  color="#ffffff"
                  link="https://drive.google.com/uc?export=view&id=1qlLaqYlj1n7bCudu6BZUbkSw1kDVXidi"
                />
              </div>
            </div>
          </motion.div>
          {sec2 ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0 }}
              className="md:w-1/2 w-4/5 text-sm font-treb text-white  text-justify flex justify-center items-center mx-auto"
            >
              This initiative began with a survey among the female students of
              IIT Gandhinagar, the majority of whom reported using plastic-based
              period products. Menstruating members who haven't taken the survey
              are encouraged to do so. This survey helps you understand why
              plastic-based menstrual products are a huge issue and introduce
              you to the many sustainable options in the market
            </motion.div>
          ) : (
            <></>
          )}
          <div
            onClick={() => setSec2(!sec2)}
            className="flex flex-row cursor-pointer mt-2 text-white
            hover:text-white mx-auto text-center mb-2 bg-purple-600 text-sm 
            transition-all py-1 px-2 rounded-full"
          >
            {" "}
            See {sec2 ? "less" : "more"}
            <ChevronDownIcon
              className={"w-5 ml-1 transform " + (sec2 ? "rotate-180" : "")}
            />
          </div>
        </div>
        {/* Third */}
        <div className="mt-4 flex flex-col w-full bg-white ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.2, delay: 0.6 } }}
            exit={{ opacity: 0 }}
            className="md:w-1/2 w-5/7 my-4 mx-auto font-treb text-sm text-purple-400"
          >
            <div className="flex flex-col w-4/5 mx-auto">
              <h1 className="font-treb text-purple-700  font-semibold text-left text-3xl">
                Zero Waste
              </h1>
              <h1 className="font-treb text-purple-400  font-semibold text-left text-xl">
                Bring your Own Containers
              </h1>
            </div>
            <div className="flex md:flex-row flex-col items-center justify-between  my-2">
              <div className="text-center w-3/5 md:-ml-8 items-center justify-center flex flex-row">
                <Vector2
                  className=""
                  color="#5f3b8f"
                  link="https://miro.medium.com/max/1400/1*7rAUykScJHyieH3k6hAR0A.jpeg"
                />
              </div>
              <div className="md:w-2/5 w-4/5 flex flex-col mx-2 md:mt-0 mt-4 justify-center text-left">
                <h1 className="text-justify text-purple-800">
                  This initiative began with a survey among the female students
                  of IIT Gandhinagar, the majority of whom reported using
                  plastic-based period products. Menstruating members who
                  haven't taken the survey are encouraged to do so. This survey
                  helps you understand why plastic-based menstrual products are
                  a huge issue and introduce you to the many sustainable options
                  in the market
                </h1>
                <h1 className="text-left mt-2">Contact : </h1>
              </div>
            </div>
          </motion.div>
          {sec3 ? (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0 }}
              className="md:w-1/2 w-4/5 text-sm font-treb text-purple-800  text-justify flex justify-center items-center mx-auto"
            >
              This initiative began with a survey among the female students of
              IIT Gandhinagar, the majority of whom reported using plastic-based
              period products. Menstruating members who haven't taken the survey
              are encouraged to do so. This survey helps you understand why
              plastic-based menstrual products are a huge issue and introduce
              you to the many sustainable options in the market
            </motion.div>
          ) : (
            <></>
          )}
          <div
            onClick={() => setSec3(!sec3)}
            className="flex flex-row cursor-pointer text-sm mt-2 text-rose-600
            hover:text-rose-400 mx-auto text-center mb-2 bg-purple-100 transition-all py-1 px-2 rounded-full"
          >
            {" "}
            See {sec3 ? "less" : "more"}
            <ChevronDownIcon
              className={"w-5 ml-1 transform " + (sec3 ? "rotate-180" : "")}
            />
          </div>
        </div>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: [0, 180, 0] }}
          style={{ originX: 0, originY: 0, originZ: 0 }}
          transition={{ repeat: Infinity, duration: 18 }}
          viewBox="0 0 136.7 136.7"
          className="relative ml-12 w-6"
        >
          <circle
            cx={68.3}
            cy={68.3}
            r={54.7}
            fill="none"
            stroke={svgColor}
            strokeWidth={10}
            strokeMiterlimit={10}
          />
        </motion.svg>
        <div className="mx-auto w-full -mt-12 z-30 h-24 flex flex-row">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            animate={{ rotate: [0, -180, 0] }}
            style={{ originX: 0, originY: 0, originZ: 0 }}
            transition={{ repeat: Infinity, duration: 18 }}
            viewBox="0 0 136.7 136.7"
            className="relative ml-12 w-6"
          >
            <circle
              cx={68.3}
              cy={68.3}
              r={54.7}
              fill="none"
              stroke={svgColor}
              strokeWidth={10}
              strokeMiterlimit={10}
            />
          </motion.svg>
          <div className="w-1/2"></div>
          <motion.svg
            animate={{ rotate: [0, 180, 0] }}
            style={{ originX: 0, originY: 0, originZ: 0 }}
            transition={{ repeat: Infinity, duration: 12 }}
            id="Layer_1"
            className="relative ml-12 top w-6"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 29.47 29.47"
          >
            <defs></defs>
            <polygon
              fill={svgColor}
              points="23.76 0 0 19.96 29.46 29.46 23.76 0"
            />
          </motion.svg>
        </div>
        <div className="mx-auto pt-10 w-full text-center text-purple-700 flex justify-center">
          <Link to="/">
            <div>
              <RewindIcon />
              BACK
            </div>
          </Link>{" "}
        </div>
      </motion.div>
    </div>
  );
}

export default Campaigns;
