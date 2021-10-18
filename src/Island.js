//import { useState,useEffect } from "react";
import { motion} from "framer-motion";
import Logo from "./Logo"
import Content from "./Content"
import Captain from "./vectors/captn.svg"
import Iit from "./vectors/iit.svg"
function Island({pos}) {
  
    const container = {
        hidden: { opacity: 0,
          transition: {
            staggerChildren: 0.5} },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.5
          }
        }
      }
      const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
      }
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show" 
            //exit="hidden"
            className="flex lg:flex-row md:flex-row flex-col sm:h-auto mt-12 justify-center">
            {pos?
              <><Logo variants={item} logo={Captain}/>
              <Content variants={item}/></>:
              <><Content variants={item}/>
              <Logo variants={item} logo={Iit}/></>}
            
        </motion.div>
    )
}

export default Island
