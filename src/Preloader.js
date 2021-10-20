import {motion} from "framer-motion"
function Preloader() {
    return (
        <motion.div 
            initial={{opacity: 0}}
            animate={{opacity:1, transform:{duration:0.8}}}
            exit={{opacity: 0, transform:{duration:0.8}}}
            className="absolute flex z-40 top-0 left-0 w-full h-full" style={{backgroundColor: '#38375c'}}>
            <img className="mx-auto my-auto"
             src={"https://assets.materialup.com/uploads/df304135-b223-47c4-b281-3579bf93cb91/preview.gif"} alt=""/>
        </motion.div>
    )
}

export default Preloader
