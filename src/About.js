import {AboutSVG, GitIcon} from "./vectors/importSVG"
import {motion} from "framer-motion"
import {animImg,animH1,animH2,animMainDiv} from "./Animations"
import ContactCard from "./ContactCard"
import Img1 from "./images/dp.png"
import Dhanesh from "./images/dhanesh.png"
import Anuj from "./images/anuj.png"
import Nand from "./images/nandana.png"
import Shashi from "./images/shashi.png"
import Amitesh from "./images/amitesh.png"
import Shekhar from "./images/shekhar.png"
import tw from "./images/logo/tw.png"
import react from "./images/logo/react.png"
import redux from "./images/logo/redux.png"
import firebase from "./images/logo/firebase.png"
import fmotion from "./images/logo/motion.png"
import heroi from "./images/logo/hero.png"
const Illustrations=['vectorjuice','upklyak','pch.vector','katemangostar','chris francis','ananthu jp']
const AboutData=[
    {
        name: 'Dhanesh Bhutada',
        img: Dhanesh,
        role: 'Role',
        insta: null,
        linkd: null,
        fb: null,
        email: 'dhanesh.bhutada@iitgn.ac.in'
    },
    {
        name: 'Anuj Buch',
        img: Anuj,
        role: 'Role',
        insta: 'https://www.instagram.com/anujbuch/',
        linkd: 'https://www.linkedin.com/in/anuj-buch-97a06a212',
        fb: null,
        email: 'anuj.buch@iitgn.ac.in'
    },
    {
        name: 'Nandana Dilip K',
        img: Nand,
        role: 'Role',
        insta: 'https://www.instagram.com/nandana.dilip/',
        linkd: 'https://www.linkedin.com/mwlite/in/nandana-dilip',
        fb: 'https://m.facebook.com/nandana.dilip.1',
        email: 'nandanadilipk@iitgn.ac.in'
    },
    {
        name: 'Shashi',
        img: Shashi,
        role: 'Role',
        insta: 'https://www.instagram.com/digitalshashi11/',
        linkd: 'https://www.linkedin.com/in/shashi-meena-00b16b1a3',
        fb: null,
        email: 'shashi.18110157@iitgn.ac.in'
    },
    {
        name: 'Amitesh Sabut',
        img: Amitesh,
        role: 'Role',
        insta: 'https://www.instagram.com/amitesh______',
        linkd: 'https://www.linkedin.com/in/amitesh-sabut',
        fb: 'https://www.facebook.com/profile.php?id=100004147268037',
        email: 'amiteshsabut@iitgn.ac.in'
    },
    {
        name: 'Yadav Shekhar',
        img: Shekhar,
        role: 'Role',
        insta: null,
        linkd: null,
        fb: 'https://www.facebook.com/shekharkumar.yadav.9',
        email: 'yadav_shekhar@iitgn.ac.in',
        twitter: 'https://twitter.com/skydibru'
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
        <div className="w-full mt-12 flex flex-col items-center mb-10">
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
                    className="ftext-center mx-auto font-treb text-xl text-purple-600 mt-8 mb-2">Technical Details</motion.h1>
            <div
                className="flex flex-col w-6/7 items-center justify-center transition-all bg-gray-50 hover:bg-purple-50 rounded-xl border-2 border-gray-100 hover:border-purple-100">
                <div className="flex flex-row flex-wrap mt-2 mb-2 p-2">
                    <img
                        onClick={()=>window.open('https://reactjs.org/', '_blank').focus()}
                        src={react} className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer" alt=''/>
                    <img
                        onClick={()=>window.open('https://tailwindcss.com/', '_blank').focus()}
                        src={tw} className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer" alt=''/>
                    <img
                        onClick={()=>window.open('https://redux.js.org/', '_blank').focus()}
                        src={redux} className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer" alt=''/>
                    <img
                        //onClick={()=>window.open('https://www.framer.com/motion/', '_blank').focus()}
                        src={fmotion} className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer" alt=''/>
                    <img
                        onClick={()=>window.open('https://firebase.google.com/', '_blank').focus()}
                        src={firebase} className="lg:w-28 md:w-24 w-16 border-r-2 cursor-pointer" alt=''/>
                    <img
                        //onClick={()=>window.open('https://heroicons.com/', '_blank').focus()}
                        src={heroi} className="lg:w-28 md:w-24 w-16 cursor-pointer" alt=''/>
                </div>
                <div className="mb-8 w-full ml-8">
                <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center"><h1 className="text-gray-800">Developer : &nbsp;</h1> GreenWeb  &nbsp;<GitIcon/></h1>
                <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center"><h1 className="text-gray-800">Source Code :&nbsp;</h1> GreenWeb (Github)</h1>
                <h1 className="font-treb md:text-sm text-xs font-semibold text-gray-500 flex items-center"><h1 className="text-gray-800">Illustrations :&nbsp;</h1> {Illustrations.map((item)=>item+", ")}</h1>
                </div>
            </div>
        
        </div>
        </motion.div>
    )
}

export default About
