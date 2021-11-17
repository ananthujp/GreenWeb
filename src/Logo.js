import Stone from "./vectors/stone.svg"
import {motion} from "framer-motion"
import {useSelector} from "react-redux"
import { selectlogo,selectscroll} from './features/appSlice';
function Logo({pos}) {
    const logo = useSelector(selectlogo);
    const scrollx=useSelector(selectscroll) - parseInt(useSelector(selectscroll));
    return (
        <div className="md:w-full w-5/6 h-2/4   mb-0 max-w-md md:mx-0 mx-auto">
            <motion.img 
                initial={pos?{ x: -30,opacity:0 }:{ x: 30,opacity:0 }}
                animate={{ x: 10 ,opacity:1}}
                style={pos?{translateX: scrollx*50}:{translateX: -scrollx*50}}
                exit={{x: 2000,opacity:0,transition: { duration: 1 }}}
                //exit={{scale:(5, 5), transition:{ duration: 1.1 , delay: 0.5}}}
                transition={{ ease: "easeOut", duration: 2}}
                className="px-9 -my-2 mx-auto z-1 w-3/5" src={logo} alt="" />
            <motion.img 
                initial={pos?{ x: -30,opacity:0 }:{ x: 30,opacity:0 }}
                animate={{ x: 10,opacity:1 }}
                style={pos?{translateX: scrollx*50}:{translateX: -scrollx*50}}
                exit={{x: 2000,opacity:0}}
                transition={{ ease: "easeOut", duration: 2}}
                className="my-auto pl-9 z-0 w-4/5" src={Stone} alt="" />
        </div>
    )
}

export default Logo
