import * as React from "react";
import { useRef } from "react";
import { motion, useCycle } from "framer-motion";
import {MenuItem,itemIds} from "./NavBar"

export const useDimensions = ref => {
    const dimensions = useRef({ width: 0, height: 0 });
  
    React.useEffect(() => {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return dimensions.current;
};






const variants2 = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

const Navigation = ({ toggle}) => (
  <motion.ul variants={variants2} className="absolute p-6 top-24 w-56">
    {itemIds.map((i) => (
      <MenuItem i={i} key={i} toggle={toggle}/>
    ))}
  </motion.ul>
);

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button className="absolute z-30 rounded-full bg-transparent cursor-pointer h-12 w-12 top-0 left-5" onClick={toggle}>
    <svg width="19" height="16" viewBox="0 0 18 18">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" }
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" }
        }}
      />
    </svg>
  </button>
);
const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(18px at 31px 24px)",
    
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const BurgerMenuSm = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
     
      className="fixed z-30 top-0 left-0 bottom-0 w-72 md:hidden block" variants={sidebar}
    >
      <motion.div className={"absolute top-0 left-0 bottom-0 w-72 transition-bg "+ (isOpen?"bg-white":"bg-white")} variants={sidebar} />
      <Navigation toggle={() => toggleOpen()}/>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
};
export default BurgerMenuSm