import React,{useState,useEffect} from 'react';
import Island from "./Island";
import Moon from "./vectors/moon.svg"
import { motion, useTransform, useViewportScroll} from "framer-motion";
import {useDispatch, useSelector} from "react-redux"
import { selectslideTitle,selectChannelName, setChannelInfo } from './features/appSlice';
import { useSpring, animated } from 'react-spring'
import Bottom3 from "./vectors/bottom-3.svg"
import Bottom2 from "./vectors/bottom-2.svg"
import Bottom1 from "./vectors/bottom-1.svg"
import SlideBar from "./SlideBar"
import HomeComponent from './HomeComponent';


//Parallax portion, jQuery 
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 25}px,${y / 25}px,0)`
const trans2 = (x, y) => `translate3d(${x / 15 }px,${y / 15 }px,0)`
const trans3 = (x, y) => `translate3d(${x / 10 }px,${y / 10 }px,0)`
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`
const trans5 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0) scaleX(1.1)`
const trans6 = (x, y) => `translate3d(${x / 15}px,${y / 15}px,0) scaleX(1.1)`
const trans7 = (x, y) => `translate3d(${x / 12}px,${y / 12}px,0) scaleX(1.1)`


function Home() {
  const dispatch = useDispatch();
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 100], [-152, -25]);
  const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  const [moonPos,setPos]=useState('true');
  const Title = useSelector(selectslideTitle);
  const slider=useSelector(selectChannelName);
  var maxw = window.matchMedia("(max-width: 640px)")
  useEffect(() => {
    const toggleMoon=(()=> setPos(!moonPos))
    toggleMoon();
  }, [Title])// eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    scale.onChange(()=>{
        if(parseInt(scale.get())!==-152){
          dispatch(setChannelInfo({channelName:true}));
        }
        else{
          dispatch(setChannelInfo({channelName:false}));
        }
        
    })
    
}, [])// eslint-disable-line react-hooks/exhaustive-deps


    return (
  
        <motion.div initial={{opacity:1}}
         animate={{opacity:1,transition: { duration: 0.5 , delay: 0.5, when: "beforeChildren"}}}
        exit={{opacity:1,transition: { duration: 0.5 , delay: 0.5, when: "afterChildren"}}}>
            
             <div className="relative h-screen w-screen z-0"></div><div className="relative h-screen w-screen z-0"></div>
             {/* {slider? */}
             <SlideBar/>
             {/* :<></>} */}
             
            <div className="top-0 fixed z-5" onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
            <div style={{ transform: props.xy.interpolate(trans1)}} className="bg-sky w-screen h-screen bg-no-repeat bg-cover z-0"></div>
            <animated.div style={{ transform: props.xy.interpolate(trans3)}} className="w-full h-full z-1 fixed">
              <div id="stars"></div>
              <div id="stars2"></div>
              <div id="stars3"></div></animated.div>
                
             <animated.div className={"absolute md:w-1/4 w-1/2 top-10 "+ (moonPos?" left-1/4":" left-2/4")}  style={{ transform: props.xy.interpolate(trans2)}} >
            
            {/* Moon Here*/}
            
            {slider?<motion.img 
                initial={{scale:(15, 15), transition:{ duration: 1.1 , delay: 0.5}}}
                animate={{scale:(1,1)}}
                exit={{scale:(15, 15), transition:{ type: "circIn", duration: 1.1 , delay: 0.5}}}
                
                layout transition={{ type: "spring", stiffness: 400,damping: 30 }} src={Moon} alt=""/>
           :<></>}
            </animated.div>
            {slider?
             <animated.div style={{ transform: props.xy.interpolate(trans4)}} className="absolute h-full flex -mt-12 top-0 w-full">
                {(maxw.matches)?<>
                {moonPos?<Island pos={true}/>:<></>}
                {moonPos?<></>:<Island pos={true}/>}
                </>:<Island pos={moonPos}/>
                }
             </animated.div>:
             <animated.div
             style={{ transform: props.xy.interpolate(trans4)}} 
             className="absolute h-full flex -mt-12 items-center justify-center top-0 w-full">
                    <HomeComponent/>
            </animated.div>}
            
            <motion.div initial={{ x: -30,opacity:0 }}
                animate={{ x: 10 ,opacity:1}}
                exit={{x: -60,opacity:0,transition: { duration: 1.5 }}} >
            <animated.img style={{ transform: props.xy.interpolate(trans7)}} src={Bottom3} alt="" className="absolute z-18 md:-bottom-12 bottom-4 opacity-40"/>
            <animated.img style={{ transform: props.xy.interpolate(trans6)}} src={Bottom2} alt="" className="absolute z-18 md:-bottom-12 bottom-4"/>
            <animated.img style={{ transform: props.xy.interpolate(trans5) }} src={Bottom1} alt="" className="absolute z-18 md:-bottom-12  bottom-4"/>
            <animated.div style={{ transform: props.xy.interpolate(trans5) }} className="absolute bg-cust-bg w-full h-12 z-18 md:-bottom-12  -bottom-6"/></motion.div>
            
            </div>
        </motion.div>

    )
}

export default Home
