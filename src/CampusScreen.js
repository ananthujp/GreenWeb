import {setSlideScreen,selectcampslideshow} from "./features/appSlice";
import {useSelector,useDispatch} from "react-redux"
import React from 'react';
import SmartSlider from "react-smart-slider";
import {motion} from 'framer-motion'
import {animH1,animH2,animMainDiv} from "./Animations"
function CampusScreen() {
    const dispatch = useDispatch();
    const imagesList=useSelector(selectcampslideshow)
    const gDriveuri=(uri)=>{return(uri?"https://drive.google.com/uc?export=view&id="+uri:"https://drive.google.com/uc?export=view&id="+uri)}
    const imagesListUrl=(item)=>{return(item.map((doc)=>{return({url: gDriveuri(doc)})}))}
    return (
        <motion.div
        variants={animMainDiv}
        initial="initial"
        animate="animate"
        exit="exit"
         className='fixed z-50 top-0 left-0 h-screen w-screen bg-gradient-to-br from-purple-900 to-indigo-900'>
            <div className='flex h-full items-center'>
            <SmartSlider slides={imagesListUrl(imagesList)} autoSlide={true} />
            </div>
            <div 
             onClick={()=>dispatch(setSlideScreen({CampSlideShow:false}))}
             className="absolute px-5 py-3 cursor-pointer hover:bg-purple-800 bg-white rounded-full top-4 right-4"
             >X</div>
  
        </motion.div>
    )
}

export default CampusScreen
