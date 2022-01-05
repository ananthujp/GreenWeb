import {AboutSVG} from "./vectors/importSVG"
import {motion} from "framer-motion"
import {animImg,animH1,animH2,animMainDiv} from "./Animations"
import ContactCard from "./ContactCard"
const AboutData=[
    {
        name: 'Name',
        role: 'Role'
    }
]
function About() {
    return (
        <motion.div 
                variants={animMainDiv}
                initial="initial"
                animate="animate"
                exit="exit"
            >
            <div className="w-full mt-12 flex flex-col mb-10">
            <div className="flex flex-col w-3/4 md:w-1/2  mx-auto">
                
            <motion.div
                variants={animImg}
                initial="initial"
                animate="animate"
                exit="exit"
                className=" w-full  mx-auto">
                <AboutSVG/>
            </motion.div>
            <motion.h1
                variants={animH1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="font-beb mt-10 text-purple-300 mx-auto lg:text-8xl md:text-6xl text-4xl">ABOUT</motion.h1>
            <motion.h1
                variants={animH2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="ftext-center mx-auto font-treb text-md text-purple-300">Meet Our Team</motion.h1>
        </div>
        <div className="flex flex-row flex-wrap mx-auto justify-center item-center">
            {AboutData.map((data)=>
                <ContactCard 
                name={data.name}
                role={data.role}
                img="https://static.toiimg.com/photo/80831586.cms"/>
            )}
            
            
            
            
        </div>
        <motion.h1
                variants={animH2}
                initial="initial"
                animate="animate"
                exit="exit"
                className="ftext-center mx-auto font-treb text-md text-purple-300">Technical Details</motion.h1>
        
        </div>
        </motion.div>
    )
}

export default About