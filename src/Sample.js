import {motion} from "framer-motion"
import { RewindIcon } from '@heroicons/react/outline'
import {
    Link,
  } from "react-router-dom";
function Sample() {
    return (

        <motion.div className="bg-indigo-600 absolute top-0 flex flex-col w-full h-full" initial={{ opacity: 0 }}
        animate={{  opacity: 1 ,staggerChildren: 0.5, transition: { duration: 0.5 , delay: 0.5, when: "beforeChildren"}}}
        exit={{ y: 0 ,transition: { duration: 0.5 , delay: 0.5, when: "afterChildren"}}}>

              
              
              <motion.h1
                initial={{opacity:0,x: -200 }}
                animate={{opacity:1,x: 0,transition:{duration:0.6}}}
                exit={{opacity:0,x: 200,transition:{duration:0.6} }}
                className="font-beb mt-10 text-white mx-auto lg:text-8xl md:text-6xl text-4xl">Captain</motion.h1>
              <motion.h1
                initial={{opacity:0,x: 200 }}
                animate={{opacity:1,x: 0,transition:{duration:0.6}}}
                exit={{opacity:0,x: -200,transition:{duration:0.6} }}
                className="font-beb text-white  mx-auto lg:text-6xl md:text-4xl text-2xl">Kachra</motion.h1>
              <div
               //animate={{ rotate: 180 }}
              //style={{ originX: 0 ,originY: -1.5,originZ:0 }}
              //transition={{ repeat: Infinity, duration: 2 }}
              >
              <motion.svg
                animate={{ rotate: [0,90,0] }}
                style={{ originX: 0 ,originY: 0,originZ:0 }}
                transition={{ repeat: Infinity, duration: 8 }}
                id="Layer_1" className="relative ml-12 top w-6" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.47 29.47"><defs></defs><polygon fill="#ffffff" points="23.76 0 0 19.96 29.46 29.46 23.76 0"/></motion.svg>
              
              
              <motion.svg className="mx-auto w-1/2 mt-6"
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
                    initial={{opacity:0 }}
                    animate={{opacity:1,transition:{duration:0.2,delay:0.6}}}
                    exit={{opacity:0 }}
                    fill="#ffffff"
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
                
                initial={{opacity:0 }}
                animate={{opacity:1,transition:{duration:0.2,delay:0.8}}}
                exit={{opacity:0 }}
                clipPath="url(#SVGID_2_)">
                    <image
                    width="2000"
                    height="2000"
                    overflow="visible"
                    transform="translate(-75.721 -158.407) scale(.2956)"
                    xlinkHref={'https://sites.iitgn.ac.in/greenoffice/game/img/76D3240AE2A62C64.jpg'}
                    ></image>
                </motion.g>
                <motion.circle

                  initial={{opacity:0 }}
                  animate={{opacity:0.6,transition:{duration:1.2,delay:1.0}}}
                  exit={{opacity:0 }}
                  cx="43.2" cy="181.5" r="40.2" fill="#ffffff"></motion.circle>
                </motion.svg>

              </div>
              <div className="mx-auto  mt-4 flex flex-row"> 
              <motion.svg xmlns="http://www.w3.org/2000/svg"
                 animate={{ rotate: [0,-180,0] }}
                 style={{ originX: 0 ,originY: 0,originZ:0 }}
                 transition={{ repeat: Infinity, duration: 18 }}
                 viewBox="0 0 136.7 136.7" className="relative ml-12 w-6"  >
                
                <circle
                  cx={68.3}
                  cy={68.3}
                  r={54.7}
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth={10}
                  strokeMiterlimit={10}
                />
              </motion.svg>
              <motion.h4
                initial={{opacity:0 }}
                animate={{opacity:1,transition:{duration:1.2,delay:2.2}}}
                exit={{opacity:0 }}
                className="w-1/2 text-center mx-auto font-treb text-sm text-gray-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</motion.h4>
              <motion.svg
                animate={{ rotate: [0,180,0] }}
                style={{ originX: 0 ,originY: 0,originZ:0 }}
                transition={{ repeat: Infinity, duration: 12 }}
                id="Layer_1" className="relative ml-12 top w-6" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.47 29.47"><defs></defs><polygon fill="#ffffff" points="23.76 0 0 19.96 29.46 29.46 23.76 0"/></motion.svg>
              
              </div>
              <nav className="mx-auto pt-10 bg-indigo-600 w-full text-center text-white flex justify-center"><Link to="/"><div ><RewindIcon/>BACK</div></Link> </nav>
        </motion.div>

    )
}

export default Sample
