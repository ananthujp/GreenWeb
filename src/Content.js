import {motion} from "framer-motion"
import {useSelector} from "react-redux"
import {
  Link,
} from "react-router-dom";

import { selectslideTitle,selectSubTitle,selectslideContent } from './features/appSlice';
function Content() {
    const Title = useSelector(selectslideTitle);
    const SubTitle = useSelector(selectSubTitle);
    const SlideContent = useSelector(selectslideContent);
    const container = {
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        },
        exit: {
          opacity: 0,
          x: -2000,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 },
        exit: { opacity: 0 },
      }
    return (
        <motion.div className="text-white lg:w-2/5 md:w-2/6 w-3/5 md:my-auto mb-auto mt-0 md:mx-0 mx-auto"
         variants={container}
         initial="hidden"
         animate="show"
         exit="exit">
            <motion.h1 className="font-beb lg:text-8xl md:text-6xl text-4xl" variants={item}>{Title}</motion.h1>
            <motion.h2 className="font-treb lg:text-2xl md:text-lg text-base" variants={item}>{SubTitle}</motion.h2>
            <motion.div className="font-treb lg:text-base md:text-sm text-xs text-justify max-w-md" variants={item}>
            {SlideContent}
            </motion.div>
            <motion.button variants={item} class="py-2 my-2 px-4 bg-white text-indigo-500 font-semibold rounded-lg shadow-md hover:bg-indigo-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75">
            <Link to={Title.split()[0]}>Explore</Link>
            </motion.button>
            {/* <motion.div variants={item} className="bg-white hover:animate-pulse font-treb rounded-3xl text-center text-indigo-500 py-1 px-3 w-28 mt-4">Explore</motion.div> */}
        </motion.div>
       
    )
}

export default Content
