import {useEffect} from "react"
import {setSlideInfo,setScrolInfo} from "./features/appSlice";
import {useDispatch} from "react-redux"
import Captain from "./vectors/ico/captn.svg"
import Iit from "./vectors/ico/iit.svg"
import Blog from "./vectors/ico/blogico.svg"
import Store from "./vectors/ico/store.svg"
import Activities from "./vectors/ico/acitivity.svg"
import { motion, useViewportScroll,useTransform  } from "framer-motion";
function SlideBar() {
    const { scrollYProgress } = useViewportScroll();
    const DataTable = [
        {
            title: "Green",
            subtitle: "IIT GN",
            content: "IIT Gandhinagar has one of the most efficient campuses in terms of green development and eco-friendly initiatives, including the promotion of aesthetic value and preservation of the campus’s biodiversity. For a greater impact, the Green Office, one of the Institute’s committees promoting the campus’s cleanliness and sensitivity to environmental issues, encourages the student community to work towards and develop innovative startup ideas.",
            logo: Iit,
        },
        {
            title: "Captain",
            subtitle: "Kachra",
            content: "This game is aimed to increase awareness of waste segregation as an initiative by the Green Office. The game is structured as such when the game starts, daily wastage products pop up on the screen and the participant is required to find the correct bin for the disposal of the product",
            logo: Captain,
        },
        {
            title: "Campus",
            subtitle: "Activities",
            content: "This game is aimed to increase awareness of waste segregation as an initiative by the Green Office. The game is structured as such when the game starts, daily wastage products pop up on the screen and the participant is required to find the correct bin for the disposal of the product",
            logo: Activities,
        },
        {
            title: "Green",
            subtitle: "Blog",
            content: "This initiative began with a survey among the female students of IIT Gandhinagar, the majority of whom reported using plastic-based period products. Menstruating members who haven't taken the survey are encouraged to do so. This survey helps you understand why plastic-based menstrual products are a huge issue and introduce you to the many sustainable options in the market.",
            logo: Blog,
        },
        {
            title: "Store",
            subtitle: "Green",
            content: "The Swachhta Pakhwada launched by Government of India, is a fortnight-long program observed to ensure mass participation of citizens in Swachhta activities and to truly transform Swachh Bharat into a citizen’s movement.",
            logo: Store,
        }
    ]
    const n= parseInt(DataTable.length) ;
    const scale = useTransform(scrollYProgress, [0, 1], [-152, -25]);
    const scale2 = useTransform(scrollYProgress, [0, 1], [0, n-1]);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        scale2.onChange(()=>{
            fetchData(parseInt(scale2.get()));
            dispatch(setScrolInfo({scroll:scale2.get()}));
        })
        
    }, [])// eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        fetchData(0);  
    }, [])
    const fetchData = (e)=>{
    dispatch(
       setSlideInfo({
           slideTitle : DataTable[e].title,
           slideSubTitle : DataTable[e].subtitle,
           slideContent : DataTable[e].content,
           logo: DataTable[e].logo,
       }))
    }
    return (
        <div>
            
        <div className=" fixed z-20 top-32 right-6">
            
        <div className=" px-1 flex flex-col bg-white rounded-3xl   opacity-70">
            <div onClick={(e)=>fetchData(0)} className="bg-gray-300 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"></div>
            <div onClick={(e)=>fetchData(1)} className="bg-gray-300 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"></div>
            <div onClick={(e)=>fetchData(2)} className="bg-gray-300 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"></div>
            <div onClick={(e)=>fetchData(3)} className="bg-gray-300 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"></div>
            <div onClick={(e)=>fetchData(4)} className="bg-gray-300 cursor-pointer hover:bg-gray-100 rounded-full w-px p-2 mx-auto my-2"></div>
        </div>
        <motion.div className="z-21 text-white rounded-full bg-white p-2 mx-1"
                style={{
                    translateY: scale
                  }}></motion.div>
        </div>
        </div>
    )
}

export default SlideBar
