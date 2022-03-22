import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { animImg, animH1, animH2, animMainDiv } from "./Animations";
import { BlogSVG } from "./vectors/importSVG";
function Blog() {
  var endDate = new Date();
  const [time, setTime] = useState();
  const timer = () => {
    var startDate = new Date();
    return (endDate - startDate) / 1000;
  };
  useEffect(() => {
    endDate.setDate(24);
    endDate.setHours(18);
    endDate.setMinutes(0);
    endDate.setSeconds(0);
    setInterval(() => setTime(timer), 1000);
  }, []);

  return (
    <motion.div
      variants={animMainDiv}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="w-full mt-12 flex flex-col ">
        <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
          <motion.div
            variants={animImg}
            initial="initial"
            animate="animate"
            exit="exit"
            className=" w-full  mx-auto"
          >
            <BlogSVG />
          </motion.div>
          <motion.h1
            variants={animH1}
            initial="initial"
            animate="animate"
            exit="exit"
            className="font-beb mt-10 text-indigo-400 mx-auto lg:text-8xl md:text-6xl text-4xl"
          >
            BLOG
          </motion.h1>
          <motion.h1
            variants={animH2}
            initial="initial"
            animate="animate"
            exit="exit"
            className="text-center mb-4 mx-auto font-treb text-md text-indigo-400"
          >
            We want to hear your stories, your experiences, your contribution,
            your message to make this world a better place. Come pen down your
            thoughts and create a unique and beautiful blog.
          </motion.h1>
          <button class="py-2 cursor-pointer my-2 px-4 hover:bg-white hover:text-indigo-500 font-semibold rounded-lg shadow-md bg-indigo-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
            Launching in {parseInt(time / (60 * 60))} hours &nbsp;
            {parseInt((time / 60) % 60)} min {parseInt(time % 60)} sec
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
