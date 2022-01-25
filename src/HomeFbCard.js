import { motion } from "framer-motion";
import colorsClass from "./Colors";
import { useHistory } from "react-router-dom";
import { useCallback } from "react";

function HomeFbCard({ name, img, msg, i }) {
  const history = useHistory();
  return (
    <motion.div
      onClick={useCallback(() => history.push("/Feedback"), [history])}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.2, delay: 0.2 * parseInt(i) },
      }}
      className="flex cursor-pointer select-none w-64 min-w-64 max-w-64  h-28 bg-white bg-opacity-25 transition-all hover:bg-opacity-10 rounded-3xl mx-2 my-1"
    >
      <div
        className={
          "flex flex-col items-right justify-end text-center rounded-l-3xl w-8 h-full bg-opacity-5    bg-gradient-to-tr " +
          colorsClass[i][2]
        }
      >
        <h1 className="whitespace-nowrap overflow-hidden w-28 text-white text-xs ml-3  text-left font-semibold transform origin-top-left -rotate-90">
          {name}
        </h1>
      </div>
      <div className="flex flex-col w-full justify-around text-white">
        <div className="flex flex-row w-full justify-between">
          <svg
            width="45"
            height="36"
            className={"transform scale-50 fill-current " + colorsClass[i][0]}
          >
            <path d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"></path>
          </svg>
          <img
            src={img}
            alt=""
            className=" w-8 h-8  rounded-full border-2 shadow-sm mr-4 object-cover"
          />
        </div>
        <h1
          className={
            "text-left h-12 overflow-hidden ml-6 mr-2 -mt-4 font-light text-xs " +
            colorsClass[i][0]
          }
        >
          {msg}
        </h1>
      </div>
    </motion.div>
  );
}

export default HomeFbCard;
