import {motion} from "framer-motion"

import Anim from "./images/logo_main_comp_2.gif"
function Preloader() {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity:1, transform:{duration:0.8}}}
            exit={{opacity: 0, transform:{duration:0.8}}}
            className="absolute flex z-40 top-0 left-0 w-full h-full" style={{backgroundColor: '#38375c'}}>
            <img className="mx-auto my-auto"
             src={Anim} alt="Load"/>
            {/* <Lottie className="mx-auto my-auto"
      animationData={PreloadAnim}
      play
      style={{ width: 350, height: 350 }}
    /> */}
        </motion.div>
    )
}

export default Preloader
