import {AboutSVG} from "./vectors/importSVG"
import {motion} from "framer-motion"
import {animImg,animH1,animH2,animMainDiv} from "./Animations"
import ContactCard from "./ContactCard"
import Img1 from "./images/dp.png"
import tw from "./images/logo/tw.png"
import react from "./images/logo/react.png"
import redux from "./images/logo/redux.png"
import firebase from "./images/logo/firebase.png"
import fmotion from "./images/logo/motion.png"
import heroi from "./images/logo/hero.png"
const AboutData=[
    {
        name: 'Name',
        img: Img1,
        role: 'Role',
        insta: 'asd',
        linkd: 'asd',
        fb: 'asd',
        email: 'asd'
    },
    {
        name: 'Name',
        img: Img1,
        role: 'Role',
        insta: null,
        linkd: null,
        fb: null,
        email: null
    },
    {
        name: 'Name',
        img: Img1,
        role: 'Role',
        insta: null,
        linkd: null,
        fb: null,
        email: null
    },
    {
        name: 'Name',
        img: Img1,
        role: 'Role',
        insta: null,
        linkd: null,
        fb: null,
        email: null
    },
    {
        name: 'Name',
        img: Img1,
        role: 'Role',
        insta: null,
        linkd: null,
        fb: null,
        email: null
    },
    
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
                    className="font-beb mt-10 text-purple-400 mx-auto lg:text-8xl md:text-6xl text-4xl">ABOUT</motion.h1>
                <motion.h1
                    variants={animH2}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="ftext-center mx-auto font-treb text-md text-purple-400">Meet Our Team</motion.h1>
            </div>
            <motion.div
                variants={animImg}
                initial="initial"
                animate="animate"
                exit="exit"
                className="flex flex-row flex-wrap mx-auto justify-center item-center">
                {AboutData.map((data,index)=>
                    <ContactCard 
                    name={data.name}
                    role={data.role}
                    img={data.img}
                    i={index}
                    insta={data.insta}
                    linkd={data.linkd}
                    fb={data.fb}
                    email={data.email}/>
                    

                )}
                
                
                
                
            </motion.div>
            <motion.h1
                    variants={animH2}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="ftext-center mx-auto font-treb text-md text-purple-400 my-8">Technical Details</motion.h1>
            <div
                className="flex flex-col items-center justify-center ">
                <div className="flex flex-row flex-wrap mb-4">
                    <img src={react} className="lg:w-28 md:w-24 w-20" alt=''/>
                    <img src={tw} className="lg:w-28 md:w-24 w-20" alt=''/>
                    <img src={redux} className="lg:w-28 md:w-24 w-20" alt=''/>
                    <img src={fmotion} className="lg:w-28 md:w-24 w-20" alt=''/>
                    <img src={firebase} className="lg:w-28 md:w-24 w-20" alt=''/>
                    <img src={heroi} className="lg:w-28 md:w-24 w-20" alt=''/>
                    
                </div>
                {/* <div className="font-treb text-gray-500">Developer : Ananthu J P
                
                </div> */}
            </div>
        
        </div>
        </motion.div>
    )
}

export default About
