import Logo from "./vectors/about.svg"
import {motion} from "framer-motion"
import {animImg,animH1,animH2} from "./Animations"
function About() {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1,transition: { duration: 0.5 , delay: 0.5,staggerChildren: 0.5}}}
            exit={{opacity:1,transition: { duration: 0.5 , delay: 0.5, when: "afterChildren"}}} >
            <div className="w-full mt-12 flex flex-col ">
            <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <motion.div
                variants={animImg}
                initial="initial"
                animate="animate"
                exit="exit"
                className="md:w-3/5 w-full  mx-auto">
                <img src={Logo} alt=""/>
            </motion.div>
            <motion.h1
                variants={animH1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">ABOUT US</motion.h1>
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

export default About
