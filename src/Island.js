//import { useState,useEffect } from "react";
import { motion} from "framer-motion";
import Logo from "./Logo"
import Content from "./Content"

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
      
    return (
        <motion.div
            variants={container}
            initial="hidden"
            animate="show" 
            //exit="hidden"
            className="flex lg:flex-row md:flex-row flex-col sm:h-auto my-auto mx-auto md:w-5/6 w-full justify-center">
            {pos?
              <><Logo pos={pos}/>
              <Content /></>:
              <><Content/>
              <Logo pos={pos}/></>}
            
        </motion.div>
    )
}

export default Island
