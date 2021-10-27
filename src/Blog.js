import {motion} from "framer-motion"
import {animImg,animH1,animH2,animMainDiv} from "./Animations"
import {BlogSVG} from "./vectors/importSVG"
function Blog() {
    return (
        <motion.div
        variants={animMainDiv}
                initial="initial"
                animate="animate"
                exit="exit" >
            <div className="w-full mt-12 flex flex-col ">
            <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <motion.div
                variants={animImg}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" w-full  mx-auto">
                <BlogSVG />
            </motion.div>
            <motion.h1
                variants={animH1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">BLOG</motion.h1>
            <motion.h1
                variants={animH2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="ftext-center mx-auto font-treb text-md text-purple-300">Lorem Ipsum</motion.h1>
        </div>
        </div>
        </motion.div>
    )
}

export default Blog
