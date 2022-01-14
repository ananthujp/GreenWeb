import {Link,} from "react-router-dom";
import {motion} from "framer-motion"
import colorsClass from "./Colors"
import BurgerMenuSm from './BurgerMenuSm';
import { HomeIcon,AnnotationIcon,NewspaperIcon,OfficeBuildingIcon,ChatAltIcon } from '@heroicons/react/outline'

import LogoW from "./vectors/LogoW.svg"
import LogoD from "./vectors/LogoD.svg"
import { useSelector } from "react-redux";
import {selectChannelName} from './features/appSlice';

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  export const itemIds = [0, 1, 2, 3,4];
  const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
  const Icons=[<HomeIcon/>,<AnnotationIcon/>,<NewspaperIcon/>,<OfficeBuildingIcon/>,<ChatAltIcon/>]
  const NavI=["Home","Social","Blog","About","Feedback"];

export  const MenuItem = ({ i ,toggle}) => {
    //const FontStyle = { color: `${colors[i]}` };
    return (
      <Link to={"/"+NavI[i]}>
      <motion.li
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
        className="list-none mb-5 flex items-center cursor-pointer">
        
        <div className="w-8 h-8 rounded-full flex mr-5" style={{ color: `${colors[i]}` }}>{Icons[i]}</div>
        <div className="rounded-md w-48  flex flex-1" style={{ color: `${colors[i]}` }}>{NavI[i]}</div>
        
      </motion.li>
      </Link>
    );
  };

function NavBar({keyID}) {
  // const location = useLocation();
  const colorVar=3;
  const slider=useSelector(selectChannelName);
  const bgClass="fixed z-20 top-0 w-full flex justify-between drop-shadow-md px-2 " + (((keyID==="/Home")||(keyID==="/")||(keyID==="/Title"))?" " : " bg-gradient-to-br "+colorsClass[colorVar][2]);
  if(slider){
    return(
        <div>
            <BurgerMenuSm className="md:hidden block"/>
        <div className={bgClass}>
        <div className=" md:hidden block"></div>
            <div className="flex flex-row">
                <img className="md:w-12 w-12 p-2" alt="" src={LogoW}/>
                <img className="md:w-24 w-16 md:block hidden " alt="" src={LogoD}/>
            </div>
            
            <div className="md:flex md:flex-row hidden mx-2  rounded-full mt-1 h-8">
            {itemIds.map((i) => ( 
            <button key={`navbar-btn-key${i}`} autoFocus className="px-4 py-1 transition-colors cursor-pointer hover:bg-white text-gray-100 hover:text-indigo-500 rounded-2xl my-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75" 
            style={{ margin: "0px 0px 0px 0px"}}
            ><Link to={"/"+NavI[i]}> <div className="flex flex-row"><div className="w-6 mx-1 my-auto px-0.5 lg:block md:hidden">{Icons[i]}</div>{NavI[i]}</div></Link></button>
                ))}
                
                
            </div>
        </div>
       </div>
    )}
    else{
      return(<></>)
    }
}

export default NavBar
